var Base = {

	// Method to override by child component, usually to init binding component / view events
	init: function() {

	},

	// This method unbind all events and init the component / view
	reinit: function() {
		this.unbindAll();
		this.init();
	},

	// Method to unbind all events of the component / view (recursive method)
	unbindAll: function(domElement, recursive) {

		var domElement = recursive ? domElement : (typeof this.componentSelector !== 'undefined' ? this.componentSelector : this.viewSelector);

		if (!$(domElement).hasClass('unbindable-element')) {
			$(domElement).unbind();
		}

		$(domElement).children().each((function(index, element) {
			this.unbindAll($(element), true);
		}).bind(this));
	}
};

var BaseView = $.extend({/* BaseView */}, Base, {

	viewSelector: '',

	getViewIdentifier: function() {
		return $('.main-content').attr('id');
	}
});

var BaseComponent = $.extend({/* BaseComponent */}, Base, {

	componentSelector: ''
});

var BaseGraphic = $.extend({/* BaseGraphic */}, BaseComponent, {

	componentSelector: '',
	graphContainer: '',
	filterOption: '',

	graphic: null,
	currency: 'EUR',
	columns: [],
	numMonths: 12,
	dummy: null,
	monthsShowed: [],

	init: function() {
		$(this.filterOption).click((function(event) {
			$(event.currentTarget).parent().find('li').removeClass('selected');
			$(event.currentTarget).addClass('selected');
			this.load($(event.currentTarget).attr('data-months'));
		}).bind(this));
	},

	load: function(numMonths) {

		// All months
		if (numMonths == 'A') {
			this.numMonths = this.columns[0].length - 1;
		} else {
			this.numMonths = numMonths;
		}

		this.dummy = [];

		$(this.columns).each((function(index, column) {
			// Get the corresponding months for each column
			var newColumn = column.slice(column.length - this.numMonths, column.length);
			// Setting column name at the begining of the array
			newColumn.unshift(column[0]);
			// Push new column for data columns
			this.dummy.push(newColumn);
		}).bind(this));

		this.graphic.load({ columns: this.dummy });

		// Mark current month on account bar chart
		if (this.componentSelector == '#account-graphic' || this.componentSelector == '#savings-graphic') {
			this.markCurrentMonthBar(this.numMonths);
		}

		// Mark Current month tick label
		this.markCurrentMonthLabel(this.numMonths);
	},

	updateFilters: function() {

		var numDataMonths = this.columns[0].length - 1;

		// Load the corresponding month filter
		if(numDataMonths <= 3) {
			$(this.filterOption).addClass('hide');
		} else if (numDataMonths > 3 && numDataMonths < 6) {
			$(this.filterOption).parent().find('li').addClass('hide');
			$(this.filterOption).parent().find('li[data-months=3]').removeClass('hide');
			$(this.filterOption).parent().find('li[data-months=3]').addClass('selected last-li');
		} else if(numDataMonths < 12) {
			$(this.filterOption).parent().find('li[data-months=6]').addClass('selected last-li');
			$(this.filterOption).parent().find('li[data-months=12]').addClass('hide');
		} else {
			$(this.filterOption).removeClass('last-li');
			$(this.filterOption).removeClass('hide');
			$(this.filterOption).parent().find('li[data-months=A]').remove();
		}

		// Set all months options
		if (numDataMonths > 3 && numDataMonths != 6 && numDataMonths < 12) {
			$(this.filterOption).removeClass('last-li');
			$(this.filterOption).parent().find('li').removeClass('selected');
			$(this.filterOption).parent().find('li[data-months=A]').removeClass('hide');
			$(this.filterOption).parent().find('li[data-months=A]').addClass('selected last-li');
		}

		// Mark current month on account bar chart
		if (this.componentSelector == '#account-graphic' || this.componentSelector == '#savings-graphic') {
			this.markCurrentMonthBar(numDataMonths);
		}

		// Mark Current month tick label
		this.markCurrentMonthLabel(numDataMonths);
	},

	markCurrentMonthBar: function(month) {
		// Remove bar-current-month class for all bars
		for (var i = 0; i < d3.selectAll(this.componentSelector + ' .c3-bars-Saldo .c3-bar')[0].length; i++) {
			var bar = d3.selectAll(this.componentSelector + ' .c3-bars-Saldo .c3-bar')[0][i];
			var currentClass = bar.getAttribute('class').replace('bar-current-month', '');
			bar.setAttribute('class', currentClass);
		}

		// Add bar-current-month class to the last bar
		var lastBar = d3.selectAll(this.componentSelector + ' .c3-bars-Saldo .c3-bar')[0][month-1];
		var lastBarClass = lastBar.getAttribute('class') + ' bar-current-month';
		lastBar.setAttribute('class', lastBarClass);
	},

	markCurrentMonthLabel: function(month) {
		// Remove mark current month class for all ticks
		for (var i = 0; i < d3.selectAll(this.componentSelector + ' .c3-axis.c3-axis-x .tick tspan')[0].length; i++) {
			var tick = d3.selectAll(this.componentSelector + ' .c3-axis.c3-axis-x .tick tspan')[0][i];
			tick.setAttribute('class', '');
		}

		// Add mark current month class for the last tick
		var lastTick = d3.selectAll(this.componentSelector + ' .c3-axis.c3-axis-x .tick tspan')[0][month-1];
		lastTick.setAttribute('class', 'tick-current-month');
	}
});

var BaseSwiperTabsView = $.extend({/* BaseSwiperTabsView */}, BaseView, {

	viewSelector: '',

	tabsLinkSelector: '.menu-tabs',
	activeTabClassSelected: 'active',

	swiper: {},
	slideSpeed: 500,

	updateSlideHeightTriggerSelectors: '.show-more, .list-activity-row, .element-list-summary-container, .element-list-row, .currencies-filter, .icon-close, input.search, .advanced-search-trigger, .icon-options i, .icon-info, .select-option-row',

	init: function() {
		this.initSwiper();
		this.bindEvents();
	},

	initSwiper: function() {

		if (!device.desktop()) {
			$('.swiper-no-swiping').removeClass('swiper-no-swiping');
		}

		this.swiper = new Swiper(this.viewSelector + ' .tab-swiper-container', {
			hashnav: true,
			speed: this.slideSpeed,
			calculateHeight: true,
			keyboardControl: true,
			onSlideChangeStart: this.onSlideChangeStart.bind(this),
			onInit: this.onInitSwiper.bind(this)
		});

		var mySlide = this.swiper;
		var cont = 0;

		// Remove the slides that have the class "no-swipe"
		$(this.viewSelector).find(this.tabsLinkSelector).find('li').each(function(){
			if($(this).hasClass("no-swipe")){
				mySlide.removeSlide(cont);
			}
			cont++;
		});
		
	},

	bindEvents: function() {
		// Click event binding on tabs navigation
		$(this.viewSelector).find(this.tabsLinkSelector).find('li').click((function(event) {
			if (!$(event.currentTarget).hasClass('no-swipe')) {
				this.tabSelection(event.currentTarget);
			}
		}).bind(this));

		// Show more or show details click binding to calculate slide heights
		$(this.viewSelector).find(this.updateSlideHeightTriggerSelectors).click((function(event) {
			this.updateSlideHeight();
		}).bind(this));

		$(window).resize((function(event) {
			this.updateSlideHeight();
		}).bind(this));
	},

	tabSelection: function(element) {
		$(element).siblings().removeClass(this.activeTabClassSelected);
		$(element).addClass(this.activeTabClassSelected);

		var slideIndex = $(element).parent().find('.'+this.activeTabClassSelected).index();
			slideIndex = slideIndex > 0 ? slideIndex - $(element).parent().find('li.no-swipe').length : slideIndex;

		this.swiper.slideTo(slideIndex, this.slideSpeed, false);
		this.updateSlideHeight(slideIndex);

		
	},

	tabSelectionByIndex: function(index) {
		this.tabSelection($(this.tabsLinkSelector).find('li')[index]);
	},

	onInitSwiper: function() {

		if (window.location.hash) {
			$(this.viewSelector).find(this.tabsLinkSelector).find('li').removeClass(this.activeTabClassSelected);
			$(this.viewSelector).find('a[href="' + window.location.hash + '"]').parent().addClass(this.activeTabClassSelected);
		}

		this.updateSlideHeight($(this.viewSelector).find(this.tabsLinkSelector).find('li.active').index());
	},

	onSlideChangeStart: function() {
		var slideIndex = this.swiper.activeIndex;
		var tabToActivate = $(this.viewSelector).find(this.tabsLinkSelector).find('li:not(.no-swipe)')[slideIndex];

		if (slideIndex != undefined) {
			$(this.viewSelector).find(this.tabsLinkSelector).find('li').removeClass(this.activeTabClassSelected);
			$(tabToActivate).addClass(this.activeTabClassSelected);
		}

		this.updateSlideHeight(slideIndex);
	},

	// This method updates the active slide height
	updateSlideHeight: function(slideIndex) {

		var slideIndex = slideIndex != undefined ? slideIndex : this.swiper.activeIndex;
		var slideHeight = $($('.tab-swiper-container .swiper-slide')[slideIndex]).height();

		$('.swiper-container').css('max-height', slideHeight);

		if($('#sb-site').height() < 675 && $(window).height() > 675){
			    $('.footer').css({
			    	'position': 'absolute',
				    'bottom': 0,
				    'width': '100%',
				    'z-index': 2
				});
			}else{
				$('.footer').css({'position': 'static'});
			}

	}
});

var BaseSelectComponent = $.extend({/* BaseSelectComponent */}, BaseComponent, {

	componentSelector: '',
	domSelect: '',

	domSelectOptionContainer: '<div class="select-options-container hide">' +
								'<div class="select-options-wrapper mCustomScrollbar"></div>' +
							  '</div>',

	domSelectOption: '<div class="select-option-row" data-option-index="%%INDEX%%">' +
						'<div class="select-option-alias">%%ALIAS%%</div>' +
						'<div class="select-option-amount">%%AMOUNT%% <span class="currency">%%CURRENCY%%</span></div>' +
					 '</div>',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
		if(document.getElementById("select-portfolio-managed")){
			$('.mCustomScrollbar').addClass('portfolio-scroll');
		}
	},

	bindingEventsElement: function(index, element) {
		// If exists previous select data rendered, remove
		$(element).find('.select-container, .select-options-container').remove();

		this.appendSelectInfo(element);

		// Show custom select options for desktop mode
		if(device.desktop()) {
			this.createSelectOptions(element);
			this.bindingClickEvents(element);
		} else {
			$(element).find('select').css('z-index', '5');
		}

		this.bindingConnection(element);
		this.bindingChangeEvent(element);
		this.preventOpeningSelect(element);

		// Apply custom bar plugin to large list
		$(element).find('.mCustomScrollbar').mCustomScrollbar();
	},

	appendSelectInfo: function(element) {

		var divToPrepend = this.domSelect.replace('%%LABEL%%', this.getAttribute($(element).find('select').attr('data-label')))
										 .replace('%%TEXT%%', this.getAttribute($(element).find('select').find(":selected").text()))
										 .replace('%%ALIAS%%', this.getAttribute($(element).find('select').find(":selected").attr('data-alias')))
										 .replace('%%AMOUNT%%', this.getAttribute($(element).find('select').find(":selected").attr('data-amount')))
										 .replace('%%CURRENCY%%', this.getAttribute($(element).find('select').find(":selected").attr('data-currency')))
										 .replace('%%CARDS%%', this.getAttribute($(element).find('select').find(":selected").attr('data-cards')));

		$(element).append(divToPrepend);
	},

	createSelectOptions: function(element) {

		$(element).append(this.domSelectOptionContainer);

		$(element).find('select option').each((function(index, option) {

			if(this.getAttribute($(option).text())) {

				var textOption = this.domSelectOption.replace('%%TEXT%%', this.getAttribute($(option).text()))
													 .replace('%%ALIAS%%', this.getAttribute($(option).attr('data-alias')))
													 .replace('%%AMOUNT%%', this.getAttribute($(option).attr('data-amount')))
													 .replace('%%CURRENCY%%', this.getAttribute($(option).attr('data-currency')))
													 .replace('%%IBAN%%', this.getAttribute($(option).attr('data-iban')))
													 .replace('%%INDEX%%', index);

				$(option).parents(this.componentSelector).find('.select-options-container > div').append(textOption);
			}

		}).bind(this));
	},

	bindingClickEvents: function(element) {
		// Click binding to open the select options
		$(element).click((function(event) {
			$(event.currentTarget).find('select').focus();
			this.toggleDropdownOptions(event.currentTarget);
		}).bind(this));

		// Click binding on an option
		$(element).find('.select-option-row').click((function(event) {
			event.preventDefault();
			event.stopPropagation();

			this.selectOption(event.currentTarget);

			$(event.currentTarget).parents(this.componentSelector).removeClass('show-select-options');
			$(event.currentTarget).parents('.select-options-container').addClass('hide');
		}).bind(this));

		// Click outside de select component
		$(document).unbind('mouseup'); // bind only the last mouseup binding
		$(document).mouseup((function(event) {
			if($(event.target).parents('.select-container').parent().length === 0) {
				this.closeAllSelectDropdownOptions();
			}
		}).bind(this));
	},

	toggleDropdownOptions: function(element) {
		// Get the current status of the select
		var isOpened = $(element).hasClass('show-select-options');

		// Remove all selects dropdowns
		this.closeAllSelectDropdownOptions();

		// Open or close current select dropdown
		if(isOpened) {
			$(element).removeClass('show-select-options');
			$(element).find('.select-options-container').addClass('hide');
		} else {
			$(element).addClass('show-select-options');
			$(element).find('.select-options-container').removeClass('hide');
			$(element).find('label.error').remove();
		}
	},

	closeAllSelectDropdownOptions: function() {
		$(document).find('.select-container').parent().removeClass('show-select-options');
		$(document).find('.select-options-container').addClass('hide');
	},

	selectOption: function(option) {
		// Get the corresponding select option clicked on the options list
		var selectedOptionIndex = $(option).attr('data-option-index');
		var select = $(option).parents(this.componentSelector).find('select');
		var selectOption = $(select).find('option')[selectedOptionIndex];

		// Select the corresponding option and throws change event
		$(select).find('option').removeAttr('selected');
		$(selectOption).prop('selected', true);
		$(selectOption).parent().change();

		// Render the corresponding select layout with new data
		this.changeSelectedItem(select);
	},

	getAttribute: function(value) {

		return (typeof value == "undefined") ? '' : value;
	},

	// Select on change event update item layout
	bindingChangeEvent: function(element) {
		$(element).find('select').change((function(event) {
			this.changeSelectedItem(event.currentTarget);
			$(event.currentTarget).focus();
		}).bind(this));
	},

	// Selects ADD-ONs
	bindingConnection: function(element) {

		if ($(element).hasClass('select-options')) {

			$(element).find('select').change((function(event) {
				this.showOrHideTargets(event.currentTarget);
				$(event.currentTarget).focus();
			}).bind(this));
		}

		if ($(element).hasClass('select-offices-map')) {

			$(element).find('select').change((function(event) {
				this.selectOfficeMapOption(event.currentTarget);
				$(event.currentTarget).focus();
			}).bind(this));
		}
	},

	showOrHideTargets: function(select) {

		var selectedTarget = '.' + $(select).find(":selected").attr("value");

		$.each($(select).find("option"), function(index, item) {
			if ($(item).attr('value')) {
				$('.' + $(item).attr('value')).addClass('hide');
			}
		});

		$(selectedTarget).removeClass('hide');
	},

	selectOfficeMapOption: function(select) {
		MapsComponent.zoomMarkerById($(select).val());
	},

	preventOpeningSelect: function(element) {

		$(element).find('select').keydown((function (event) {

			var preventDefault = true;

			var keyCode = {
				ENTER: 13,
				ESCAPE: 27,
				SPACE: 32,
				TAB: 9,
			};

			switch ( event.keyCode ) {
				case keyCode.TAB:
				case keyCode.ESCAPE:
					this.closeAllSelectDropdownOptions();
					preventDefault = false;
					break;
				case keyCode.SPACE:
					this.toggleDropdownOptions($(event.currentTarget).parents(this.componentSelector));
					break;
				default:
					preventDefault = true;
			}

			if ( preventDefault ) {
				event.preventDefault();
			}

		}).bind(this));
	}
});

var ChatModule = $.extend({/* ChatModule */}, BaseComponent, {

	componentSelector: '.chat-module',

	// App data created with user "ricardo.ramos@berepublic.es" and password "Berepublic2016"
	app: {
		appId: 36034,
		authKey: 'zEw8gd7KNPwevth',
		authSecret: 'WaOjsdTHU9YCaSu'
	},

	config: {
		chatProtocol: {
			active: 2
		},
		debug: {
			mode: 1, // set mode 0 to hide console log debug messages
			file: null
		}
	},

	token: '',
	currentRoomId: '',
	currentDialogRow: '',
	unreadMessages: '',

	// MANAGER USER FOR TESTING - remove on morabanc user integration !!!
	manager: {
		id: 10186521,
		name: 'Gestor MoraBanc',
		login: 'gestor',
		pass: 'gestormorabanc'
	},

	// CLIENT USER FOR TESTING - remove on morabanc user integration !!!
	client: {
		id: 10186533,
		name: 'Cliente MoraBanc',
		login: 'cliente',
		pass: 'clientemorabanc'
	},

	/**************************************************************************************************************
	*
	*	Chat module init
	*
	***************************************************************************************************************/
	init: function() {

		/* Swap users to simulate manager user view, please remove this test on final integration */
		if ($('#manager-chats-view').length > 0) {
			var manager = this.manager;
			this.manager = this.client;
			this.client = manager;
		}
		/******************************************************************************************/

		QB.init(this.app.appId, this.app.authKey, this.app.authSecret, this.config);
		this.createUserSession(this.client, $(this.componentSelector).length > 0);

		if ($(this.componentSelector).length > 0) {

			$('#add-new-dialog').submit((function(event) {
				event.preventDefault();

				if ($(event.currentTarget).valid()) {
					LoadingLayer.show();
					this.createDialog($(event.currentTarget).find('input[type=text]').val());
				}

			}).bind(this));

		}
	},

	/**************************************************************************************************************
	*
	*	Create session and connect to chat
	*
	***************************************************************************************************************/
	createUserSession: function(user, isChatView) {

		QB.createSession({login: user.login, password: user.pass}, (function(err, res) {
			if (res) {
				// Save session token
				this.token = res.token;

				QB.chat.connect({userId: user.id, password: user.pass}, (function(err, roster) {
					if (err) {
						console.log(err);
					} else {
						// load chat dialogs
						if (isChatView) {
							this.getDialogs();
						} else {
							this.joinToDialogs();
						}
						// setup message listeners
						this.setupAllListeners();

						// update unread messages badge
						this.updateUnreadMessagesBadge();
					}
				}).bind(this));
			}
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Get user dialogs
	*
	***************************************************************************************************************/
	getDialogs: function() {

		var params = {
			'sort_desc': 'updated_at'
		}

		QB.chat.dialog.list(params, (function(err, resDialogs) {
			if (err) {
				console.log(err);
			} else {

				if (resDialogs.items.length > 0) {
					this.fillUserDialogList(resDialogs.items);
				} else {
					$('#dialog-header-row').find('p').html($('#dialog-header-row').find('p').attr('data-no-dialogs'));
					$('#dialog-header-row').find('form').addClass('medium-margin-top').removeClass('hide');

					ManagerView.updateSlideHeight();
				}
			}
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Join dialogs
	*
	***************************************************************************************************************/
	joinToDialogs: function() {

		var params = {
			'sort_desc': 'updated_at'
		}

		QB.chat.dialog.list(params, (function(err, resDialogs) {
			if (err) {
				console.log(err);
			} else {
				resDialogs.items.forEach((function(dialog, index) {
					QB.chat.muc.join(dialog.xmpp_room_jid, function() {});
				}).bind(this));
			}
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Get dialog by ID
	*
	***************************************************************************************************************/
	getDialogById: function(id, callback) {

		var params = {
			'sort_desc': 'updated_at',
			'_id': id
		}

		QB.chat.dialog.list(params, (function(err, resDialogs) {
			if (err) {
				console.log(err);
			} else {
				callback(resDialogs.items[0]);
			}
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Create user dialogs
	*
	***************************************************************************************************************/
	createDialog: function(dialogName) {

		var params = {
			type: 2,
			occupants_ids: [this.client.id, this.manager.id],
			name: dialogName
		};

		QB.chat.dialog.create(params, (function(err, createdDialog) {
			if (err) {
				console.log(err);
			} else {
				this.notifyOccupants(createdDialog.occupants_ids, this.client.id, createdDialog, 1);
				this.addDialogRow(createdDialog, 1);
				ManagerView.updateSlideHeight();
				LoadingLayer.hide();
			}
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Remove user dialog
	*
	***************************************************************************************************************/
	removeDialog: function(row) {
		LoadingLayer.show();

		QB.chat.dialog.delete($(row).attr('id'), function(err, res) {

			if (err.code === 200 || !err) {
				$(row).remove();
				ManagerView.updateSlideHeight();
			} else {
				console.log(err);
			}

			LoadingLayer.hide();
		});
	},

	/**************************************************************************************************************
	*
	*	Send message
	*
	***************************************************************************************************************/
	sendMessage: function(roomId, text, input) {

		this.currentRoomId = roomId;

		LoadingLayer.show();

		QB.chat.muc.join(roomId, (function() {

			var msg = {
				type: 'groupchat',
				body: text,
				extension: {
					save_to_history: 1
				},
				senderId: this.client.id,
				markable: 1
			};

			QB.chat.send(this.currentRoomId, msg);

			$(this.currentDialogRow).find('input[type=text]').val('');

		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Get dialog messages
	*
	***************************************************************************************************************/
	getDialogMessages: function(dialogId, row) {

		var params = {
			chat_dialog_id: dialogId,
			sort_asc: 'updated_at',
			limit: 100,
			skip: 0
		};

		LoadingLayer.show();

		QB.chat.message.list(params, (function(err, messages) {

			if (messages) {

				messages.items.forEach((function(message) {
					this.addMessageBubble(message.sender_id, message.chat_dialog_id, message.message, new Date(message.date_sent*1000));
				}).bind(this));

				$(this.currentDialogRow).addClass('loaded-messages');
				LoadingLayer.hide();
				ManagerView.updateSlideHeight();

			} else {
				console.log(err);
			}

		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Notify Occupants
	*
	***************************************************************************************************************/
	notifyOccupants: function(dialogOccupants, currentUserId, dialog, notificationType) {

		dialogOccupants.forEach(function(itemOccupantId) {

			if (itemOccupantId != currentUserId) {

				var msg = {
					type: 'groupchat',
					extension: {
						notification_type: notificationType,
						dialog_id: dialog._id
					}
				};

				QB.chat.sendSystemMessage(itemOccupantId, msg);
			}

		});
	},

	updateUnreadMessagesBadge: function() {
		QB.chat.message.unreadCount({}, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				if(data.total > 0) {
					$('header .notification-badge').html(data.total);
					$('header .notification-badge').removeClass('hide');
				} else {
					$('header .notification-badge').addClass('hide');
				}
			}
		});
	},

	/**************************************************************************************************************
	*
	*	Fill user dialogs list
	*
	***************************************************************************************************************/
	fillUserDialogList: function(dialogs) {

		dialogs.forEach((function(item, index) {
			this.addDialogRow(item);
		}).bind(this));

		// Hide loading conversation row
		$('#dialog-header-row').find('p').remove();
		$('#dialog-header-row').find('form').removeClass('hide');
		ManagerView.updateSlideHeight();
	},

	/**************************************************************************************************************
	*
	*	Add dialog row
	*
	***************************************************************************************************************/
	addDialogRow: function(dialog, addFirst) {

		// Get info to create conversations list
		var id = dialog._id;
		var name = dialog.name;
		var unread = dialog.unread_messages_count ? dialog.unread_messages_count : 0;
		var date = dialog.last_message_date_sent ? DateComponent.formatDateHour(new Date(dialog.last_message_date_sent*1000)) : DateComponent.formatDateHour(new Date(dialog.created_at));

		// Clone row layout and replace with data to append on element list
		var row = $('<div/>').append($('#dialog-row-layout').clone().attr('id', id).attr('room-jid', dialog.xmpp_room_jid).removeClass('hide')).html();
			row = row.replace('%%NAME%%', name).replace('%%UNREAD%%', unread).replace('%%DATE%%', date);

		if (addFirst) {
			$(this.componentSelector).find('#dialog-header-row').after(row);
		} else {
			$(this.componentSelector).find('.list-elements-component').append(row);
		}

		// Joining to the room to receive message
		QB.chat.muc.join(dialog.xmpp_room_jid, function() {});

		this.rowBindingEvent($('#' + id));

		if (unread > 0) {
			$('#' + id).addClass('unreaded-messages');
			$('#' + id).find('.unread-badge').removeClass('hide')
		}
	},

	/**************************************************************************************************************
	*
	*	Add message bubble
	*
	***************************************************************************************************************/
	addMessageBubble: function(userId, dialogId, message, date) {
		var user = (userId === this.client.id) ? 'client' : 'manager';
		$('#' + dialogId).find('.conversation-box').append('<div class="message-bubble ' + user +'">' + message + '<div class="date-time">' + DateComponent.formatDateHour(date) + '</div></div>');
	},

	/**************************************************************************************************************
	*
	*	Update dialog row
	*
	***************************************************************************************************************/
	updateDialogRow: function(dialogId, dateSent) {

		if (dialogId !== $(this.currentDialogRow).attr('id')) {
			var value = parseInt($('#' + dialogId).find('.unread-badge').html()) + 1;
			$('#' + dialogId).find('.unread-badge').html(value);
			$('#' + dialogId).find('.unread-badge').removeClass('hide');
			$('#' + dialogId).addClass('unreaded-messages');
		}

		// Move to first position
		$('#' + dialogId).insertAfter('#dialog-header-row');

		if (dialogId === $(this.currentDialogRow).attr('id')) {

			$('html, body').animate({
				scrollTop: $('#' + dialogId).find('.element-list-details input[type=text]').offset().top - (window.innerHeight - $('header').height())
			}, 500, 'swing', function() {
				$('#' + dialogId).find('.element-list-details input[type=text]').focus()
			});
		}

		// Update last sent date message
		$('#' + dialogId).find('.last-sent-message').html(DateComponent.formatDateHour(new Date(dateSent*1000)));
	},

	/**************************************************************************************************************
	*
	*	Dialog row events logic
	*
	***************************************************************************************************************/
	rowBindingEvent: function(row) {

		// Display chat event
		$(row).find('.element-list-summary-container').click((function(event) {
			$(event.currentTarget).parent().siblings().removeClass('display-details');
			$(event.currentTarget).parent().toggleClass('display-details');

			this.currentDialogRow = $(event.currentTarget).parent();

			if (!$(event.currentTarget).parent().hasClass('loaded-messages')) {
				this.getDialogMessages($(event.currentTarget).parent().attr('id'));
			}

			if ($(event.currentTarget).parent().hasClass('display-details')) {
				$('#' + $(event.currentTarget).parent().attr('id')).find('.unread-badge').addClass('hide');
				$('#' + $(event.currentTarget).parent().attr('id')).removeClass('unreaded-messages');

				var unreadedDialog = parseInt($('#' + $(event.currentTarget).parent().attr('id')).find('.unread-badge').html());
				var unreadedTotal = parseInt($('header .notification-badge').html());
				var result = unreadedTotal - unreadedDialog;

				if (result > 0) {
					$('header .notification-badge').html(result);
				} else {
					$('header .notification-badge').addClass('hide');
				}

			} else {
				this.currentDialogRow = '';
			}

			ManagerView.updateSlideHeight();
		}).bind(this));

		// Close action
		$(row).find('.icon-close').click(function(event) {
			$(event.currentTarget).closest('.element-list-row').removeClass('display-details');
			ManagerView.updateSlideHeight();
		});

		// Cancel delete action
		$(row).find('.cancel').click(function(event) {
			event.stopPropagation();
			$(event.currentTarget).closest('.element-list-row').removeClass('display-delete-message');
			ManagerView.updateSlideHeight();
		});

		// Accept delete action
		$(row).find('.accept').click((function(event) {
			event.stopPropagation();
			this.removeDialog($(event.currentTarget).closest('.element-list-row'));
		}).bind(this));

		// Remove dialog click icon
		$(row).find('.delete-action').click(function(event) {
			event.stopPropagation();
			$(event.currentTarget).closest('.element-list-row').addClass('display-delete-message');
			ManagerView.updateSlideHeight();
		});

		// Send message
		$(row).find('form').submit((function(event) {
			event.preventDefault();
			var message = $(event.currentTarget).find('input[type=text]').val();
			var roomId = $(event.currentTarget).closest('.element-list-row').attr('room-jid');
			this.sendMessage(roomId, message, $(event.currentTarget).find('input[type=text]'));
		}).bind(this));
	},

	/**************************************************************************************************************
	*
	*	Listener setups
	*
	***************************************************************************************************************/
	setupAllListeners: function() {
		QB.chat.onDisconnectedListener = this.disconnected.bind(this);
		QB.chat.onReconnectListener = this.reconnected.bind(this);
		QB.chat.onMessageListener = this.onMessage.bind(this);
		QB.chat.onSystemMessageListener = this.onSystemMessage.bind(this);
		QB.chat.onDeliveredStatusListener = this.onDeliveredStatus.bind(this);
		QB.chat.onReadStatusListener = this.onReadStatus.bind(this);
	},

	disconnected: function() {
		console.log('Disconnected!');
	},

	reconnected: function() {
		console.log('Reconnected!');
	},

	onMessage: function(userId, message) {
		// Add message to the conversation
		this.addMessageBubble(userId, message.dialog_id, message.body, new Date(message.extension.date_sent*1000));

		// Update message dialog
  		this.updateDialogRow(message.dialog_id, message.extension.date_sent);

  		// Update header notification badge
  		this.updateUnreadMessagesBadge();

		ManagerView.updateSlideHeight();
		LoadingLayer.hide();
	},

	onSystemMessage: function(message) {
		if (!message.delay) {
			switch (message.extension.notification_type) {
				// Dialog creation
				case '1':
					this.getDialogById(message.extension.dialog_id, (function(dialog) {
						this.addDialogRow(dialog, true);
						ManagerView.updateSlideHeight();
						LoadingLayer.hide();
					}).bind(this));
					break;
			}
		}
	},

	onDeliveredStatus: function(messageId) {
		console.log('Delivered message!');
	},

	onReadStatus: function(messageId) {
		console.log('Readed message!');
	}
});

var CloseableContainer = $.extend({/* CloseableContainer */}, BaseComponent, {

	componentSelector: '.closeable-container',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		$(element).find('.icon-close').click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parents(this.componentSelector).addClass('hide');
		}).bind(this));
	}
});

var CollapsableItems = $.extend({/* CollapsableItems */}, BaseComponent, {

	componentSelector: '.collapsable-item',

	init: function() {
		$(this.componentSelector).each(this.bindEvents.bind(this));
	},

	bindEvents: function(index, element) {
		$(element).children('.collapsable-header').click((function(event) {
			this.dropDown(event.currentTarget);
		}).bind(this));
	},

	dropDown: function(element) {

		var boxContent = $(element).next();

		$(element).toggleClass('active');
		$(boxContent).slideToggle('fast');
	}
});

var ConfirmationKey = $.extend({/* ConfirmationKey */}, BaseComponent, {

	componentSelector: '.confirmation-key',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		// Click event binding for key entering process
		$(this.componentSelector).find('#continue').click((function(event) {
			event.preventDefault();

			if ($(this.componentSelector).valid()) {
				$(event.currentTarget).remove();
				$(this.componentSelector).find('#operation-summary-step-1').addClass('hide');
				$(this.componentSelector).find('#operation-summary-step-2').removeClass('hide');
				$(this.componentSelector).find('input').removeClass('hide');
			}
		}).bind(this));

		// Resend confirmation key
		$(this.componentSelector).find('.forgotten-password a').click((function(event) {
			event.preventDefault();
			$(this.componentSelector).find('span.hide').removeClass('hide');
			$(event.currentTarget).prevAll(':eq(2)').css("font-weight", "600");
		}).bind(this));
	}
});

var DateComponent = $.extend({/* DateComponent */}, BaseComponent, {

	componentSelector: '.input-date',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {

		$(element).attr('type', 'text');

		$(element).datepicker({
			language: 'es',
			autoclose: !device.mobile(),
			orientation: 'bottom left',
			todayHighlight: true,
			keyboardNavigation: false,
			startDate: this.getStartDate(element)
		}).on('changeDate', function(event) {
			$(event.currentTarget).parent().find('label.error').remove();
		}).on('show', function(event) {
			$(event.currentTarget).parent().find('label.error').addClass('hide');
		}).on('hide', function(event) {
			$(event.currentTarget).parent().find('label.error').removeClass('hide');
		});
	},

	getStartDate: function(element) {

		if ($(element).hasClass('past-mode')) {
			return '';
		} else if ($(element).hasClass('starting-tomorrow')) {
			return '+1d';
		} else {
			return '0d';
		}
	},

	formatDate: function(date) {
		var dd  = date.getDate().toString();
		var mm = (date.getMonth()+1).toString();
		var yyyy = date.getFullYear().toString();

		return (dd[1]?dd:"0"+dd[0]) + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + yyyy;
	},

	formatDateHour: function(date) {
		return this.formatDate(date) + ' - ' + date.toLocaleTimeString();
	}
});

var DateRangeComponent = $.extend({/* DateRangeComponent */}, BaseComponent, {

	componentSelector: '.input-daterange',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {

		if($('#search-end-date').val() == ''){
			document.getElementById("search-end-date").value = DateComponent.formatDate(new Date());
		}

		$(element).datepicker({
			language: 'es',
			autoclose: !device.mobile(),
			todayHighlight: true,
			orientation: 'bottom left',
			keyboardNavigation: false,
			endDate: '0d',
			startDate: $(element).hasClass('past-dates') ? false : '0d'
		}).on('changeDate', function(event) {
			$(event.currentTarget).parent().find('label.error').remove();			
		}).on('show', function(event) {
			$(event.currentTarget).parent().find('label.error').addClass('hide');
		}).on('hide', function(event) {
			$(event.currentTarget).parent().find('label.error').removeClass('hide');
		});;

		$(element).find('input.date-range').each(function () {
			$(this).attr('type', 'text');
		});
	}
});

var Footer = $.extend({/* Footer */}, BaseComponent, {

	componentSelector: 'footer.footer',

	init: function() {
		// Events binding for footer component
		this.dropDownActionBinding($(this.componentSelector));
		this.minimumHeight();
	},

	/* DROPDOWN LOGIC ***************************************************/

	dropdownActionParameters: {
		triggerSelector: '.tit-footer',
	},

	dropDownActionBinding: function(element) {
		$(element).find(this.dropdownActionParameters.triggerSelector).click((function(event) {
			event.stopPropagation();
			this.dropdown($(event.currentTarget));
		}).bind(this));
	},

	dropdown: function(element) {

		if($(element).hasClass("active")) {
			$(element).removeClass("active");
		} else {
			$(this.dropdownActionParameters.triggerSelector).removeClass("active");
			$(element).addClass("active");
		}
	},

	minimumHeight: function(){
		$(window).load(function(){
			if($('#sb-site').height() < 735 && $(window).height() > 650){
			    $('.footer').css({
			    	'position': 'absolute',
				    'bottom': 0,
				    'width': '100%',
				    'z-index': 2
				});
			}
		});		
	}
});

var ButtonsOptionList = $.extend({/* ButtonsOptionList */}, BaseComponent, {

	componentSelector: '.buttons-option-list',

	init: function() {
		this.bindEvents();

		$(this.componentSelector).find('input:checked').siblings('span').addClass('selected');
	},

	bindEvents: function() {
		// Click event binding
		$(this.componentSelector).find('li').click((function(event) {
			if($(this.componentSelector).parents('form').hasClass('confirmation-key') && !$(this.componentSelector).parents('form').hasClass('confirmation-key-no-hide')){
				this.hideElementsConfirmationKey(event.currentTarget);
			}else{
				this.setSelectedOption(event.currentTarget);
			}
			this.showOrHideTargets(event.currentTarget);
		}).bind(this));

		$(this.componentSelector).find('input[type=radio]').focus(this.toggleFocus.bind(this));
		$(this.componentSelector).find('input[type=radio]').blur(this.toggleFocus.bind(this));
	},

	setSelectedOption: function(li) {
		// Set selected class to options list
		$(li).parents('ul').find('span').removeClass('selected');
		$(li).find('span').addClass('selected');
	},

	showOrHideTargets: function(li) {

		var selectedTarget = '.' + $(li).attr('id');

		$.each($(li).parents('ul').find('li'), function(index, item) {
			$('.' + $(item).attr('id')).addClass('hide');
		});

		if(selectedTarget == ".defer-signature"){
			$('input[value=Confirmar]').hide();
		}else{
			$('input[value=Confirmar]').show();
		}

		$(selectedTarget).removeClass('hide');
	},

	hideElementsConfirmationKey: function(li) {

		$(li).parents('.form-funnel-row').hide();
		$(li).parents('.form-funnel-row').prev().hide();

	},

	toggleFocus: function(event) {
		$(event.currentTarget).parents(this.componentSelector).toggleClass('focused-element');
	}
});

var CheckboxComponent = $.extend({/* CheckboxComponent */}, BaseComponent, {

	componentSelector: '.check',
	checkAllRowsComponent: 'check-all-rows',
	marker: '.list-wrapper',

	init: function() {
		this.hideCheckbox();
		this.markedAllAsRead();
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {

		// Click event binding on checkbox component
		$(element).click((function(event) {

			event.stopPropagation();
			event.preventDefault();
			var isChecked = $(element).hasClass('checked');
			this.toggle(event.currentTarget, true);

			// Select all checkboxes from a list
			if ($(element).siblings('input').attr('id') == this.checkAllRowsComponent ) {
				if (isChecked) {
					$(element).parents('.list-elements-component').find(this.componentSelector).removeClass('checked');
					$(element).parents('.list-elements-component').find('.element-list-row').removeClass('selected');
				} else {
					$(element).parents('.list-elements-component').find(this.componentSelector).addClass('checked');
					$(element).parents('.list-elements-component').find('.element-list-row').addClass('selected');
				}
			}

		}).bind(this));

		// Allow click on links inside checkbox text
		$(element).find('a').click((function(event) {
			event.stopPropagation();
		}).bind(this));

		// On change input check
		$(element).siblings('input').change((function(event) {
			// event.stopPropagation();
			// event.preventDefault();
			this.toggle($(event.currentTarget).siblings(this.componentSelector), false);
		}).bind(this));

		// Set checked by default
		if ($(element).siblings('input').is(':checked')) {
			$(element).addClass('checked');
			this.setSelectedRowOnElementListComponent(element);
		}

		// Set focus class style
		$(element).siblings('input').focus(this.toggleFocus.bind(this));
		$(element).siblings('input').blur(this.toggleFocus.bind(this));
	},

	markedAllAsRead: function() {
		$(this.marker).find('div.markAsRead').click((function(event) {
			event.stopPropagation();
			event.preventDefault();

			var isChecked = false;

			$('label.check').parents('.list-elements-component').find(this.componentSelector).addClass('checked');
			$('label.check').parents('.list-elements-component').find('.element-list-row').addClass('selected');


		}).bind(this));
	},

	hideCheckbox: function(){
		$(this.marker).find('input:checkbox').each(function(){
			$(this).parent().parent().css('visibility', 'hidden');
			$(this).parent().parent().css('position', 'absolute');
		});
	},

	toggle: function(element, updateInput) {

		if ($(element).hasClass('disabled')) {
			return;
		}

		if ($(element).hasClass('radio')) {

			$('input[name=' + $(element).siblings('input').attr('name') + ']').siblings('.radio').removeClass('checked');
			$(element).addClass('checked');

			// Updated input type radio status
			if (updateInput) {
				$(element).siblings('input').prop('checked', true);
			}

		} else {

			if ($(element).hasClass('checked')) {
				$(element).removeClass('checked');
			} else {
				$(element).addClass('checked');
			}

			// Updated input type checkbox status
			if (updateInput) {
				$(element).siblings('input').prop('checked', !$(element).siblings('input').prop('checked'));
			}
		}

		this.setSelectedRowOnElementListComponent(element);
	},

	setSelectedRowOnElementListComponent: function(element) {

		if($(element).parents('.element-list-row').length > 0) {

			if($(element).hasClass('radio')) {

				$('input[name=' + $(element).siblings('input').attr('name') + ']').siblings('.radio').parents('.element-list-row').removeClass('selected');
				$(element).parents('.element-list-row').addClass('selected');

			} else {

				if ($(element).hasClass('checked')) {
					$(element).parents('.element-list-row').addClass('selected');
				} else {
					$(element).parents('.element-list-row').removeClass('selected');
				}

			}
		};

	},

	toggleFocus: function(event) {
		$(event.currentTarget).siblings(this.componentSelector).toggleClass('focused');
	}
});

var FormComponent = $.extend({/* FormComponent */}, BaseComponent, {

	componentSelector: 'form',

	customValidations: [
		'amount-greater-than',
		'amount-less-than'
	],

	init: function() {
		this.addCustomValidationMethods();
		this.initLanguage();

		// Initialize form with jquery validate plugin
		$(this.componentSelector).each((function(index, element) {
			if(document.getElementById('write-new')){
				PasswordValidation.init();

			}else{
				GeneralValidation.init();
				$(element).validate();

				this.addCustomRulesValidation(element);

				if ($(element).attr('data-custom-action')) {
					$(element).submit((function(event) {
						event.preventDefault();
						this.customSubmitAction(event.currentTarget);
					}).bind(this));
				}
			}
		}).bind(this));
	},

	addCustomRulesValidation: function(form) {

		$.each(this.customValidations, (function (index, validatorName) {

			var element = $(form).find('[validation-' + validatorName + ']');
			var existCustomValidation = element.length > 0;

			if (existCustomValidation) {

				$(element).each((function (index, element) {

					var rule = {};
						rule[validatorName] = true;

					$(element).rules('add', rule);

				}).bind(this));
			}

		}).bind(this));
	},

	addCustomValidationMethods: function() {

		// min validation transforming currency format to number
		$.validator.addMethod('min', function(value, element, param) {
			value = parseFloat(value.replace(/\./g, '').replace(/\,/g, '.'));
			return this.optional( element ) || value >= param;
		}, $.validator.format( 'Please enter a value greater than or equal to {0}.' ));

		// max validation transforming currency format to number
		$.validator.addMethod('max', function(value, element, param) {
			value = parseFloat(value.replace(/\./g, '').replace(/\,/g, '.'));
			return this.optional( element ) || value <= param;
		}, $.validator.format( 'Please enter a value less than or equal to {0}.' ));

		// amount greater than validation
		$.validator.addMethod('amount-greater-than', function(value, element, param) {
			return this.optional( element ) || FormComponent.amountComparator(value, element, param, '>', 'amount-greater-than');
		}, 'The maximum amount must be greater than the minimum amount');

		// amount less than validation
		$.validator.addMethod('amount-less-than', function(value, element, param) {
			return this.optional( element ) || FormComponent.amountComparator(value, element, param, '<', 'amount-less-than');
		}, 'The minium amount must be greater than the maxium amount');
	},

	customSubmitAction: function(form) {
		if($(form).valid()) {
			var formSuccessSelector = '.' + $(form).attr('data-custom-action');

			$(form).remove();
			$(formSuccessSelector).removeClass('hide');
		}
	},

	amountComparator: function(value, element, param, comparator, validatorName) {
		// Gets target element data
		var targetElementName = $(element).attr('validation-' + validatorName);
		var targetElementValue = $(element).parents('form').find('[name=' + targetElementName + ']').val();

		if (typeof targetElementValue === 'undefined') {
			console.warn('You are setting incorrect target name to check amount greather than validator', element);
			return true;
		} else if (targetElementValue == '') {
			return true;
		}

		// Convert amounts to numbers
		value = parseFloat(value.replace(/\./g, '').replace(/\,/g, '.'));
		targetElementValue = parseFloat(targetElementValue.replace(/\./g, '').replace(/\,/g, '.'));

		comparation = {
			'>': function(a, b) { return a > b },
			'<': function(a, b) { return a < b },
		}

		$(element).on('input', (function(event) {
			var targetElementName = $(event.currentTarget).attr('validation-' + validatorName);
			var $targetToValidate = $(event.currentTarget).parents('form').find('[name=' + targetElementName + ']');
			$('#' + $targetToValidate.attr('name') + '-error').remove();
			$(event.currentTarget).unbind('input');
		}).bind(this));

		return comparation[comparator](value, targetElementValue);
	},

	initLanguage: function() {

		$.extend($.validator.messages, {
			required: 'Este campo es obligatorio.',
			remote: 'Por favor, rellena este campo.',
			email: 'Por favor, escribe una dirección de correo válida.',
			url: 'Por favor, escribe una URL válida.',
			date: 'Por favor, escribe una fecha válida.',
			dateISO: 'Por favor, escribe una fecha (ISO) válida.',
			number: 'Por favor, escribe un número válido.',
			digits: 'Por favor, escribe sólo dígitos.',
			creditcard: 'Por favor, escribe un número de tarjeta válido.',
			equalTo: 'Por favor, escribe el mismo valor de nuevo.',
			extension: 'Por favor, escribe un valor con una extensión aceptada.',
			maxlength: $.validator.format('El tamaño máximo de este campo es de {0} caracteres.'),
			minlength: $.validator.format('El tamaño mínimo de este campo es de {0} caracteres.'),
			rangelength: $.validator.format('Por favor, escribe un valor entre {0} y {1} caracteres.'),
			range: $.validator.format('Por favor, escribe un valor entre {0} y {1}.'),
			max: $.validator.format('Por favor, escribe un valor menor o igual a {0}.'),
			min: $.validator.format('Por favor, escribe un valor mayor o igual a {0}.'),
			nifES: 'Por favor, escribe un NIF válido.',
			nieES: 'Por favor, escribe un NIE válido.',
			cifES: 'Por favor, escribe un CIF válido.',
			'amount-greater-than': 'El importe máximo debe ser mayor que el importe mínimo',
			'amount-less-than': 'El importe mínimo debe ser menor que el importe máximo'
		});
	}
});

var GeneralValidation = $.extend({/* GeneralValidation */}, BaseComponent, {

	componentSelector: 'form',

	init: function() {

		// Initialize form with jquery validate plugin
		$(this.componentSelector).each(function(index, element) {

			$(element).validate({
				focusInvalid: false,
			    invalidHandler: function(form, validator) {

			        if (!validator.numberOfInvalids())
			            return;

			        $('html, body').animate({
			            scrollTop: $(validator.errorList[0].element).offset().top - 75
			        }, 500);

			    }
			});
		}).bind(this);
	}
});

var InputAmount = $.extend({/* InputAmount */}, BaseComponent, {

	componentSelector: '.input-amount, .input-with-amount',

	validChars: /[\-0-9,]/,

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		$(this.componentSelector).find('input').focus((function(event) {
			this.onFocus(event.currentTarget);
		}).bind(this));

		$(this.componentSelector).find('input').blur((function(event) {
			this.onBlur($(event.currentTarget), $(event.currentTarget).val());
		}).bind(this));

		if (device.desktop()) {

			$(this.componentSelector).find('input').on('keyup', (function(event) {
				this.setInputValue($(event.currentTarget), $(event.currentTarget).val());
			}).bind(this));

			$(this.componentSelector).find('input').on('input', (function(event) {
				this.input($(event.currentTarget), $(event.currentTarget).val());
			}).bind(this));
		}
	},

	onFocus: function(input) {

		if ($(input).attr('data-connected-to')) {

			$(input).removeClass('disabled');
			$('#' + $(input).attr('data-connected-to')).addClass('disabled');
			$('#' + $(input).attr('data-connected-to')).removeAttr('required');

			$('#' + $(input).attr('data-connected-to')).parents('.input-amount-container').click((function(event) {
				$(event.currentTarget).find('input').removeClass('disabled');
				$(event.currentTarget).find('input').prop('required', true);
				$(event.currentTarget).find('input').trigger('focus');

				$(event.currentTarget).parents('form').validate().resetForm();
				$(event.currentTarget).unbind('click');
			}).bind(this));
		}
	},

	onBlur: function($input, value) {
		if (value) {
			value = this.validCharsTreatment($input, value);
			if($input.attr('id') === "inputDivisa"){
				value = this.multipleTreatment(value);
			}
			$input.val(this.thousandsTreatment(value, !$input.hasClass('js-no-decimals')))
		}
	},

	setInputValue: function($input, value) {
		$input.val(value);
	},

	input: function($input, value) {

		var treatedValue = this.validCharsTreatment($input, value);
			treatedValue = this.thousandsTreatment(treatedValue);

		$input.val(treatedValue);
	},

	validCharsTreatment: function($input, value) {

		var validValue = '';
		var noDecimals = $input.hasClass('js-no-decimals');
		var originValue = noDecimals ? value : this.decimalsTreatment(value);

		for (var i = 0; i < originValue.length; i++) {

			if (this.validChars.test(originValue[i])) {
				validValue += noDecimals ? originValue[i].replace(',', '') : originValue[i];
			}
		}

		return noDecimals ? validValue : this.decimalsTreatment(validValue);
	},

	decimalsTreatment: function(value) {

		// Set 0 if the first character is a decimal separator
		value = value.indexOf(',') === 0 ? '0' + value : value;
		// Avoid more than two decimal separator
		value = value.replace(',', '%comma%').replace(/\,/g, '').replace('%comma%', ',');

		var splittedValue = value.split(',');

		if (splittedValue.length <= 1) {
			return value;
		} else {
			return splittedValue[0] + ',' + splittedValue[1].slice(0,2);
		}
	},

	multipleTreatment: function(value){
		if (value % 10 !== 0 && value >= 250){
			value = parseInt(value / 10);
			value = value * 10;

			return value;
		}
	},

	thousandsTreatment: function(value, addingDecimals) {

		var parts = value.toString().split(",");
			// Thousands separator and remove left zeros
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/^0+(?!\.|$)/, '')
							   .replace(/[\-]+/g, "-").replace(/\b\-/g, "");

		// Adding zeros to decimals if necessary
		if (addingDecimals) {
			if (parts.length == 1 || (parts.length == 2 && parts[1].length == 0)) {
				parts[1] = '00';
			} else if (parts.length == 2 && parts[1].length == 1) {
				parts[1] = parts[1] + '0';
			}
		}

		return parts.join(",");
	},

	removeDecimals: function($input) {
		var value = $input.val().split(',')[0];
		$input.val(value);
	}
});

var InputAutoComplete = $.extend({/* InputAutoComplete */}, BaseComponent, {

	componentSelector: '.input-auto-complete',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		$(this.componentSelector).find('input').on('input focus', this.showOptions.bind(this));
		$(this.componentSelector).find('input').on('blur', this.closeOptions.bind(this));

		$(this.componentSelector).find('.input-auto-complete-options').on('mousedown touchstart', (function(event) {
			var $li = $(event.target).attr('data-input-value') ? $(event.target) : $(event.target).parents('li');
			var value = $li.attr('data-input-value');
			$(event.target).parents(this.componentSelector).find('input').val(value);
			$(event.target).parents(this.componentSelector).removeClass('show-options');
		}).bind(this));
	},

	showOptions: function(event) {
		if ($(event.currentTarget).val()) {
			$(event.currentTarget).parents(this.componentSelector).addClass('show-options');
		} else {
			$(event.currentTarget).parents(this.componentSelector).removeClass('show-options');
		}
	},

	closeOptions: function(event) {
		$(event.currentTarget).parents(this.componentSelector).removeClass('show-options');
	}
});

var InputWithDefaultValue = $.extend({/* InputWithDefaultValue */}, BaseComponent, {

	componentSelector: 'input[type=email], input[type=tel]',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		$(this.componentSelector + ':not(.no-default-value)').focus((function(event) {

			var value = $(event.currentTarget).val();
			var initialValue = $(event.currentTarget).attr('value');

			// Save initial value
			if (value !== '' && typeof initialValue === 'undefined') {
				$(event.currentTarget).attr('value', value);
				$(event.currentTarget).val('');
			}
			// Remove initial value
			else if (value === initialValue) {
				$(event.currentTarget).val('');
			}

		}).bind(this));

		$(this.componentSelector + ':not(.no-default-value)').blur((function(event) {

			var value = $(event.currentTarget).val();
			var initialValue = $(event.currentTarget).attr('value');

			// Save initial value
			if (value === '' && typeof initialValue !== 'undefined') {
				$(event.currentTarget).val(initialValue);
				$(event.currentTarget).siblings('label.error').remove();
			}

		}).bind(this));
	}
});

var InputTel = $.extend({/* InputTel */}, BaseComponent, {

	componentSelector: 'input[type=tel]',

	validChars: /[0-9]/,

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		$(this.componentSelector).blur((function(event) {
			this.onBlur($(event.currentTarget), $(event.currentTarget).val());
		}).bind(this));

		$(this.componentSelector).on('input', (function(event) {
			this.input($(event.currentTarget), $(event.currentTarget).val());
		}).bind(this));
	},

	onBlur: function($input, value) {
		if (value) {
			$input.val(this.validCharsTreatment($input, value))
		}
	},

	input: function($input, value) {
		$input.val(this.validCharsTreatment($input, value));
	},

	validCharsTreatment: function($input, value) {

		var validValue = '';

		for (var i = 0; i < value.length; i++) {

			if (this.validChars.test(value[i]) || (i === 0 && value[i] === '+')) {
				validValue += value[i];
			}
		}

		return validValue;
	}
});

var PasswordValidation = $.extend({/* PasswordValidation */}, BaseComponent, {

	componentSelector: 'form',

	init: function() {

		//PasswordValidation.validarPass(element);

		$(this.componentSelector).find('div.password-validation input').focus((function(event) {
			$(event.currentTarget).prev().prev().removeClass('hide');
			$(event.currentTarget).addClass('write-new-validate');
			
			(event.currentTarget).placeholder = '';
			
		}).bind(this));

		$(this.componentSelector).find('div.password-validation input').blur((function(event) {
			if($(event.currentTarget).val().length === 0){
				$(event.currentTarget).prev().prev().addClass('hide');
				$(event.currentTarget).removeClass('write-new-validate');

				if((event.currentTarget).id == 'write-new'){
					document.getElementById('write-new').placeholder = "Nueva contraseña";
				}else if((event.currentTarget).id == 'rewrite-new'){
					document.getElementById('rewrite-new').placeholder = "Repetir nueva contraseña";
				}

				if((event.currentTarget).id == 'write-ok'){
					document.getElementById('write-ok').placeholder = "Clave de operaciones actual";
				}

				if((event.currentTarget).id == 'write-new-ok'){
					document.getElementById('write-new-ok').placeholder = "Nueva clave de operaciones";
				}else if((event.currentTarget).id == 'rewrite-new-ok'){
					document.getElementById('rewrite-new-ok').placeholder = "Repetir nueva clave de operaciones";
				}
			}
		}).bind(this));

		/*$(this.componentSelector).find('input').focus((function(event) {
			//this.onfocus(event.currentTarget);
		}).bind(this));

		$(this.componentSelector).find('input').blur((function(event) {
			//this.onblur($(event.currentTarget), $(event.currentTarget).val());
		}).bind(this));*/

		jQuery.validator.addMethod("vValidar", function(value, element) {

			$("#StrengthLine").removeClass('hide');
			$("#StrengthLine").removeClass('divSuccessL');
			$("#StrengthLine").removeClass('divErrorL');
			$(element).parent().find('label.strength').removeClass('hide');
			$(element).parent().find('div.strengthLine').removeClass('hide');
			$('i.icon-check').addClass('hide');
			$('i.icon-close').addClass('hide');


			if(document.getElementById("write-new").value == document.getElementById("rewrite-new").value){
				$("#StrengthLine").addClass('divSuccessL');
				$('i.icon-check').removeClass('hide');
			}else{
				$("#StrengthLine").addClass('divErrorL');
				$('i.icon-close').removeClass('hide');
			}

			return true;
		}, "Este campo debe ser igual al anterior");

		// Initialize form with jquery validate plugin
		$(this.componentSelector).each(function(index, element) {

			jQuery.validator.addMethod("vSeguridad", function(value, element) {
			
			$(element).parent().find('label.strength').removeClass('lblError');
			$(element).parent().find('label.strength').removeClass('lblWarning');
			$(element).parent().find('label.strength').removeClass('lblSuccess');
			$(element).parent().find('label.strength').removeClass('hide');
			$(element).parent().find('div.strengthLine').removeClass('hide');
			$(element).parent().find('div.strengthLine').removeClass('divSuccess');
			$(element).parent().find('div.strengthLine').removeClass('divSuccess2');
			$(element).parent().find('div.strengthLine').removeClass('divWarning');
			$(element).parent().find('div.strengthLine').removeClass('divError');
			$(element).parent().find('div.strengthLine').removeClass('divError2');
		

			if($(element).val().length < 5){
				$(element).parent().find('label.strength').addClass('lblError');
				$(element).parent().find('div.strengthLine').addClass('divError');
				document.getElementById('lblStrength').innerHTML = 'DEMASIADO CORTA';

				return true;
			}

		  	if(/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length >= 8){
		  		$(element).parent().find('label.strength').addClass('lblSuccess');
		  		$(element).parent().find('div.strengthLine').addClass('divSuccess2');
				document.getElementById('lblStrength').innerHTML = 'MUY SEGURA';

			  	return true;
		  	}else if((/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\d]+).*$/.test(value) && value.length >= 8) || (/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\W]+).*$/.test(value) && value.length >= 8) || 
			  									(/(?=.*[a-z]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length >= 8) ||
			  									(/(?=.*[A-Z]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length >= 8) || 
			  									(/(?=.*[a-z]+)(?=.*[\d]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length < 8)
			  									){
		  		$(element).parent().find('label.strength').addClass('lblSuccess');
		  		$(element).parent().find('div.strengthLine').addClass('divSuccess');
				document.getElementById('lblStrength').innerHTML = 'SEGURA';
			  		
		  		return true;
			}else if(/(?=.*[a-z]+)(?=.*[A-Z]+).*$/.test(value) || /(?=.*[A-Z]+)(?=.*[\d]+).*$/.test(value) || /(?=.*[a-z]+)(?=.*[\d]+).*$/.test(value) ||
		  									/(?=.*[a-z]+)(?=.*[\W]+).*$/.test(value)  || /(?=.*[A-Z]+)(?=.*[\W]+).*$/.test(value) || 
		  									/(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) || 
		  									(/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\d]+).*$/.test(value) && value.length < 8) || (/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[\W]+).*$/.test(value) && value.length < 8) || 
		  									(/(?=.*[a-z]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length < 8) ||
		  									(/(?=.*[A-Z]+)(?=.*[\d]+)(?=.*[\W]+).*$/.test(value) && value.length < 8)
		  									){
				$(element).parent().find('label.strength').addClass('lblWarning');
				$(element).parent().find('div.strengthLine').addClass('divWarning');		  		
				document.getElementById('lblStrength').innerHTML = 'ACEPTABLE PERO MEJORABLE';

		  		return true;
		  	}else if(/^[a-z]+$/.test(value) || /^[A-Z]+$/.test(value) || /^\d+$/.test(value) || /^[\W]+$/.test(value)){
		  		$(element).parent().find('label.strength').addClass('lblError');
		  		$(element).parent().find('div.strengthLine').addClass('divError2');
				document.getElementById('lblStrength').innerHTML = 'POCO SEGURA';

			  	return true;
			}
			
			}, "La contraseña es insuficiente");
			
			

			$(element).validate({
				debug: false,
				onsubmit: true,
				focusCleanup: false,
				focusInvalid: false,
				onkeyup: function(element, event) { 
					$(element).valid();
					if(!!$('#rewrite-new').val()){
						$('#rewrite-new').valid();
					}

					if(!!$('#rewrite-new-ok').val()){
						$('#rewrite-new-ok').valid();
					}
				},
				onfocusout: false,
			  	rules: {
				    password: {
				    	required: true,
				    	maxlength: 16,
				    	vSeguridad: true,
				    },
				    repassword: {
				    	required: true,
				    	//equalTo: "#write-new",
				    	vValidar: true
				    },
				    passwordOk: {
				    	required: true
				    },
				    repasswordOk: {
				    	required: true,
				    	equalTo: "#write-new-ok"
				    }
			  	},
			  	messages: {
				    password: {
				    	//minlength: "Demasiado corta",
				    	maxlength: "La contraseña no debe superar los 16 caracteres"
				    },
				    repasswordOk: {
				    	equalTo: "Debe ser igual a la clave de operaciones nueva"
				    }
				},
				highlight: function(element, errorClass) {	
					if(element.id === "write-new" || element.id === "rewrite-new" || element.id === "write-new-ok" || element.id === "rewrite-new-ok"){
						if($(element).val().length > 16 || $(element).val().length === 0){
							if($(element).next().hasClass('error')){
								$(element).prev().addClass('hide');
								$(element).next().next().addClass('hide');
							}else{
								$(element).prev().addClass('hide');
								$(element).next().addClass('hide');
							}

							return false;
						}
					}
			    },
			    submitHandler : function(form) {

					if ($('#lblStrength').hasClass('lblError') || $("#StrengthLine").hasClass('divErrorL') 
						|| $('#write-new-ok').next().hasClass('error') || $('#rewrite-new-ok').next().hasClass('error')){
						return false;
					}else{

						return true;
					}
				},
				invalidHandler: function(form, validator) {

			        if (!validator.numberOfInvalids())
			            return;

			        $('html, body').animate({
			            scrollTop: $(validator.errorList[0].element).offset().top - 75
			        }, 500);

			    }
			});
		}).bind(this);
	},
});

var AccountGraphic = $.extend({/* AccountGraphic */}, BaseGraphic, {

	componentSelector: '#account-graphic',
	graphContainer: '#account-graphic .graphic-container',
	filterOption: '#account-graphic .months-filter li',

	drawGraphic: function(data, currency) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		this.monthLastDates = data.pop();
		this.columns = data;
		this.currency = currency;

		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				x: 'Meses',
				columns: this.columns,
				type: 'bar',
				color: function (color, d) {
					return d.value != 'undefined' && d.value > 0 ? '#3b9ed7' : '#c0c1c6';
				}
			},
			axis: {
				x: {
					type: 'category',
					tick: {
						show: false,
						fit: true,
						multiline: false
					}
				},
				y: {
					show: true,
					padding: {
						top: 40,
						bottom: 40
					},
					tick: {
                		format: function (d) {
                			var format = d3.format('s'); // SI format (1000 = 1k)
							return format(d);
						}
					}
				}
			},
			grid: {
				y: { show: true }
			},
			legend: {
				show: false
			},
			transition: {
				duration: 0
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					var format = d3.format(',.2f');
					var value = format(d[0].value);

					var integerPart = value.split('.')[0].replace(/,/g, '.');
					var decimalPart = value.split('.')[1];

					var monthsShowed = (this.columns[0].length - 1) - this.numMonths;
					var date = this.monthLastDates[d[0].index + monthsShowed + 1];

					return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>' +
						   '<p>' + date + '</p>';
				}).bind(this)
			},
			bar: {
				width: {
					ratio: 0.65
				}
			}
		});

		this.updateFilters();
	}
});

var DonutGraphicWithListLegend = $.extend({/* DonutGraphicWithListLegend */}, BaseGraphic, {

	componentSelector: '#donut-graphic-with-list-legend',
	graphContainer: '#donut-graphic-with-list-legend .graphic-container',

	colorsPattern: ['#3B9ED7', '#6E7073', '#BFC2C7', '#D6D6D6', '#87898C', '#000000', '#333', '#1F3559', '#284473', '#398CBF', '#345587'],

	drawGraphic: function(data) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		var data = this.columns = data;

		this.createProductsLegend();

		// Graphic generation
		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				columns: data,
				type : 'donut'
			},
			color: {
				pattern: this.colorsPattern
			},
			legend: {
				hide: true
			},
			donut: {
				expand: false,
				label: {
					format: function (value, ratio, id) {
						return d3.format('%')(ratio);
					}
				}
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					return '<span>' + d[0].name + '</span></span>';
				}).bind(this)
			}
		});
	},

	createFinancesLegendContainer: function() {
		$(this.componentSelector).append('<div class="graphic-legend"></div>');
	},

	createProductsLegend: function() {

		var legendArrayInfo = this.columns;

		this.createFinancesLegendContainer();

		legendArrayInfo.forEach((function(element, index) {

			var numColors = this.colorsPattern.length;

			$($('#donut-graphic-list .element-list-row:not(.header-list) .color-key')[index]).css('background-color', this.colorsPattern[(index % numColors)]);

		}).bind(this));
	},

	formatValue: function(value) {
		var format = d3.format(',.2f');
		var value = format(value);

		var integerPart = value.split('.')[0].replace(/,/g, '.');
		var decimalPart = value.split('.')[1];

		return '<span>' + integerPart + ',' + decimalPart + '</span>';
	}
});

var FinancesGraphic = $.extend({/* FinancesGraphic */}, BaseGraphic, {

	componentSelector: '#finances-graphic',
	graphContainer: '#finances-graphic .graphic-container',
	filterOption: '#finances-graphic .months-filter li',

	colorsPattern: ['#3B9ED7', '#6E7073', '#BFC2C7', '#D6D6D6', '#87898C', '#000000', '#333', '#1F3559', '#284473', '#398CBF', '#345587'],
	financesLegend: [],

	drawGraphic: function(data, currency, isProductData, productIndex) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		var showBackButton = true;

		// Only we have one product on init
		if (data != null && data.length === 1) {
			isProductData = true;
			showBackButton = false;
			productIndex = 0;
			this.columns = data;
		}

		// Load the corresponding data, general or detail product data
		if (isProductData) {

			// We load the third element where is the product graph data
			var data = this.columns[productIndex][2];
			this.createProductDetailLegend(productIndex, showBackButton);

			var onclickFn = (function() {});

		} else {

			var data = this.columns = data;
			var currency = this.currency = currency;
			this.createProductsLegend();

			var onclickFn = (function(data) {
				this.drawGraphic(null, null, true, data.index);
			}).bind(this);
		}

		// Graphic generation
		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				columns: data,
				type : 'donut',
				onclick: onclickFn
			},
			color: {
				pattern: this.colorsPattern
			},
			legend: {
				hide: true
			},
			donut: {
				title: isProductData ? this.columns[productIndex][0] : '',
				expand: false,
				label: {
					format: function (value, ratio, id) {
						return d3.format('%')(ratio);
					}
				}
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					return '<span>' + d[0].name + '</span></span>';
				}).bind(this)
			},
			onrendered: function() {

				var $title = d3.select('#finances-graphic text.c3-chart-arcs-title');

				if ($title.attr('data-title-text') == null) {

					var textTitle = $title.text().trim();
									$title.text('');

					$title.attr('data-title-text', textTitle);

					var words = textTitle.split(' ');
					var lineHeight = 12;

					for (var i = 0; i < words.length; i++) {

						if (i == 0) {
							var dy = -1 * (lineHeight) * ((words.length-1) / 2);
						} else {
							var dy = lineHeight;
						}

						$title.insert('tspan').attr('x', 0).attr('dy', dy).text(words[i]);
					}
				}
			}
		});
	},

	createFinancesLegendContainer: function() {
		$(this.componentSelector).append('<div class="finances-legend"></div>');
	},

	createProductsLegend: function() {

		if ($(this.componentSelector).find('.finances-legend').length === 0) {

			var legendArrayInfo = this.columns;

			this.createFinancesLegendContainer();

			legendArrayInfo.forEach((function(element, index) {

				var numColors = this.colorsPattern.length;
				var productElementSelector = '.finances-legend .product-element[data-product-index=' + index + ']';

				$(this.componentSelector).find('.finances-legend').append('<div class="product-element general" data-product-index="' + index + '"></div>');
				$(this.componentSelector).find(productElementSelector).append('<div class="product-value">' + this.formatValue(element[1]) + '</div>');
				$(this.componentSelector).find(productElementSelector).append('<div class="product-name">' + element[0] + '</div>');
				$(this.componentSelector).find(productElementSelector).append('<div class="product-color" style="background: ' + this.colorsPattern[(index % numColors)] + '"></div>');

			}).bind(this));

			// Click event binding for finance product type
			$(this.componentSelector).find('.product-element').click((function(event) {
				this.drawGraphic(null, null, true, $(event.currentTarget).attr('data-product-index'));
			}).bind(this));

		} else {

			$(this.componentSelector).find('.finances-legend .product-element.detail').remove();
			$(this.componentSelector).find('.finances-legend .product-element.general').removeClass('hide');

		}
	},

	createProductDetailLegend: function(productIndex, showBackButton) {

		var legendArrayInfo = this.columns[productIndex][2];

		if($(this.componentSelector).find('.finances-legend').length === 0) {
			this.createFinancesLegendContainer();
		}

		$(this.componentSelector).find('.finances-legend .product-element.general').addClass('hide');

		if(showBackButton) {
			this.addBackProductDetailLegend();
		}

		legendArrayInfo.forEach((function(element, index) {

			var numColors = this.colorsPattern.length;
			var productElementSelector = '.finances-legend .product-element';
			var productElementSelector = '.finances-legend .product-element.detail[data-product-index=' + index + ']';

			$(this.componentSelector).find('.finances-legend').append('<div class="product-element detail" data-product-index="' + index + '"></div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-value">' + this.formatValue(element[1]) + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-name">' + element[0] + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-color" style="background: ' + this.colorsPattern[(index % numColors)] + '"></div>');

		}).bind(this));
	},

	formatValue: function(value) {
		var format = d3.format(',.2f');
		var value = format(value);

		var integerPart = value.split('.')[0].replace(/,/g, '.');
		var decimalPart = value.split('.')[1];

		return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>';
	},

	addBackProductDetailLegend: function() {

		var productElementSelector = '.finances-legend .product-element';
		var productElementSelector = '.finances-legend .product-element.detail.back';

		$(this.componentSelector).find('.finances-legend').append('<div class="product-element detail back"></div>');
		$(this.componentSelector).find(productElementSelector).append('<div class="product-value hidden">' + this.formatValue(0) + '</div>');
		$(this.componentSelector).find(productElementSelector).append('<div class="product-name"><i class="icon-left-arrow margin-right"></i>' + $(this.componentSelector).attr('data-label-back') + '</div>');

		// Click event binding to back global product graphic
		$(this.componentSelector).find('.product-element').click((function(event) {
			$(this.componentSelector).find('.finances-legend').remove();
			this.drawGraphic(this.columns, this.currency);
		}).bind(this));
	}
});

var InvestmentByTypeGraphic = $.extend({/* InvestmentByTypeGraphic */}, BaseGraphic, {

	componentSelector: '#investment-by-type-graphic',
	graphContainer: '#investment-by-type-graphic .graphic-container',

	colorsPattern: ['#3B9ED7', '#6E7073', '#BFC2C7', '#D6D6D6', '#87898C', '#000000', '#333', '#1F3559', '#284473', '#398CBF', '#345587'],

	drawGraphic: function(data, currency) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		var data = this.columns = data;
		var currency = this.currency = currency;
		this.createProductsLegend();

		// Graphic generation
		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				columns: data,
				type : 'donut'
			},
			color: {
				pattern: this.colorsPattern
			},
			legend: {
				hide: true
			},
			donut: {
				expand: false,
				label: {
					format: function (value, ratio, id) {
						return d3.format('%')(ratio);
					}
				}
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					return '<span>' + d[0].name + '</span></span>';
				}).bind(this)
			}
		});
	},

	createFinancesLegendContainer: function() {
		$(this.componentSelector).append('<div class="graphic-legend"></div>');
	},

	createProductsLegend: function() {

		var legendArrayInfo = this.columns;

		this.createFinancesLegendContainer();

		legendArrayInfo.forEach((function(element, index) {

			var numColors = this.colorsPattern.length;
			var productElementSelector = '.graphic-legend .product-element[data-product-index=' + index + ']';

			$(this.componentSelector).find('.graphic-legend').append('<div class="product-element general" data-product-index="' + index + '"></div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-value">' + this.formatValue(element[1]) + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-name">' + element[0] + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-color" style="background: ' + this.colorsPattern[(index % numColors)] + '"></div>');

		}).bind(this));
	},

	formatValue: function(value) {
		var format = d3.format(',.2f');
		var value = format(value);

		var integerPart = value.split('.')[0].replace(/,/g, '.');
		var decimalPart = value.split('.')[1];

		return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>';
	}
});

var InvestmentByCurrencyGraphic = $.extend({/* InvestmentByCurrencyGraphic */}, BaseGraphic, {

	componentSelector: '#investment-by-currency-graphic',
	graphContainer: '#investment-by-currency-graphic .graphic-container',

	colorsPattern: ['#3B9ED7', '#6E7073', '#BFC2C7', '#D6D6D6', '#87898C', '#000000', '#333', '#1F3559', '#284473', '#398CBF', '#345587'],

	drawGraphic: function(data, currency) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		var data = this.columns = data;
		var currency = this.currency = currency;
		this.createProductsLegend();

		// Graphic generation
		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				columns: data,
				type : 'donut'
			},
			color: {
				pattern: this.colorsPattern
			},
			legend: {
				hide: true
			},
			donut: {
				expand: false,
				label: {
					format: function (value, ratio, id) {
						return d3.format('%')(ratio);
					}
				}
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					return '<span>' + d[0].name + '</span></span>';
				}).bind(this)
			}
		});
	},

	createFinancesLegendContainer: function() {
		$(this.componentSelector).append('<div class="graphic-legend"></div>');
	},

	createProductsLegend: function() {

		var legendArrayInfo = this.columns;

		this.createFinancesLegendContainer();

		legendArrayInfo.forEach((function(element, index) {

			var numColors = this.colorsPattern.length;
			var productElementSelector = '.graphic-legend .product-element[data-product-index=' + index + ']';

			$(this.componentSelector).find('.graphic-legend').append('<div class="product-element general" data-product-index="' + index + '"></div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-value">' + this.formatValue(element[1]) + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-name">' + element[0] + '</div>');
			$(this.componentSelector).find(productElementSelector).append('<div class="product-color" style="background: ' + this.colorsPattern[(index % numColors)] + '"></div>');

		}).bind(this));
	},

	formatValue: function(value) {
		var format = d3.format(',.2f');
		var value = format(value);

		var integerPart = value.split('.')[0].replace(/,/g, '.');
		var decimalPart = value.split('.')[1];

		return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>';
	}
});

var InvestmentsGraphic = $.extend({/* InvestmentsGraphic */}, BaseGraphic, {

	componentSelector: '#investments-graphic',
	graphContainer: '#investments-graphic .graphic-container',
	filterOption: '#investments-graphic .months-filter li',

	drawGraphic: function(data, currency) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		this.monthLastDates = data.pop();
		this.columns = this.calculateTrendLine(data);
		this.currency = currency;

		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				x: 'Meses',
				columns: this.columns,
				types: {
					Saldo: 'area'
				},
				colors: {
					Saldo: '#398CBF',
					Tendencia: '#FFF'
				}
			},
			axis: {
				x: {
					type: 'category',
					tick: {
						show: false,
						fit: true,
						multiline: false
					},
					padding: {
						left: 0,
						right: 0
					}
				},
				y: {
					padding: {
						top: 100
					},
					tick: {
                		format: function (d) {
                			var format = d3.format('s'); // SI format (1000 = 1k)
							return format(d);
						}
					}
				}
			},
			grid: {
				y: {
					show: true
				}
			},
			legend: {
				show: false
			},
			transition: {
				duration: 0
			},
			tooltip: {
				grouped: true,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					var format = d3.format(',.2f');
					var value = format(d[1].value);

					var integerPart = value.split('.')[0].replace(/,/g, '.');
					var decimalPart = value.split('.')[1];

					var monthsShowed = (this.columns[0].length - 1) - this.numMonths;
					var date = this.monthLastDates[d[0].index + monthsShowed + 1];

					return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>' +
						   '<p>' + date + '</p>';

				}).bind(this)
			}
		});

		this.updateFilters();
	},

	calculateTrendLine: function(data) {
		var known_x = [];
		var known_y = [];

		for (var i = 1; i < data[1].length; i++) {
			known_x.push(i);
			known_y.push(data[1][i]);
		}

		var trendLineData = this.getTrendLinePoints(known_x, known_y);
			trendLineData.unshift('Tendencia');

		return [
			data[0],
			trendLineData,
			data[1]
		]
	},

	getTrendLinePoints: function(values_x, values_y) {
		var sum_x = 0;
		var sum_y = 0;
		var sum_xy = 0;
		var sum_xx = 0;
		var count = 0;

		/*
		 * We'll use those variables for faster read/write access.
		 */
		var x = 0;
		var y = 0;
		var values_length = values_x.length;

		if (values_length != values_y.length) {
		    throw new Error('The parameters values_x and values_y need to have same size!');
		}

		/*
		 * Nothing to do.
		 */
		if (values_length === 0) {
		    return [ [], [] ];
		}

		/*
		 * Calculate the sum for each of the parts necessary.
		 */
		for (var v = 0; v < values_length; v++) {
		    x = values_x[v];
		    y = values_y[v];
		    sum_x += x;
		    sum_y += y;
		    sum_xx += x*x;
		    sum_xy += x*y;
		    count++;
		}

		/*
		 * Calculate m and b for the formular:
		 * y = x * m + b
		 */
		var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
		var b = (sum_y/count) - (m*sum_x)/count;

		/*
		 * We will make the x and y result line now
		 */
		var result_values_x = [];
		var result_values_y = [];

		for (var v = 0; v < values_length; v++) {
		    x = values_x[v];
		    y = x * m + b;
		    result_values_x.push(x);
		    result_values_y.push(y);
		}

		return result_values_y;
	}
});

var SavingsGraphic = $.extend({/* SavingsGraphic */}, BaseGraphic, {

	componentSelector: '#savings-graphic',
	graphContainer: '#savings-graphic .graphic-container',
	filterOption: '#savings-graphic .months-filter li',

	drawGraphic: function(data, currency) {

		if ($(this.componentSelector).length == 0) {
			return false;
		}

		this.monthLastDates = data.pop();
		this.columns = data;
		this.currency = currency;

		this.graphic = c3.generate({
			bindto: this.graphContainer,
			data: {
				x: 'Meses',
				columns: this.columns,
				type: 'bar',
				color: function (color, d) {
					return d.value != 'undefined' && d.value > 0 ? '#3b9ed7' : '#c0c1c6';
				}
			},
			axis: {
				x: {
					type: 'category',
					tick: {
						show: false,
						fit: true,
						multiline: false
					}
				},
				y: {
					show: true,
					padding: {
						top: 70,
						bottom: 40
					},
					tick: {
                		format: function (d) {
                			var format = d3.format('s'); // SI format (1000 = 1k)
							return format(d);
						}
					}
				}
			},
			grid: {
				y: { show: true }
			},
			legend: {
				show: false
			},
			transition: {
				duration: 0
			},
			tooltip: {
				grouped: false,
				contents: (function (d, defaultTitleFormat, defaultValueFormat, color) {
					var format = d3.format(',.2f');
					var value = format(d[0].value);

					var integerPart = value.split('.')[0].replace(/,/g, '.');
					var decimalPart = value.split('.')[1];

					var monthsShowed = (this.columns[0].length - 1) - this.numMonths;
					var date = this.monthLastDates[d[0].index + monthsShowed + 1];

					return '<span>' + integerPart + ',' + decimalPart + '<span class="currency"> ' + this.currency + '</span></span>' +
						   '<p>' + date + '</p>';
				}).bind(this)
			},
			bar: {
				width: {
					ratio: 0.65
				}
			}
		});

		this.updateFilters();
	}
});

var ShowHideGraphic = $.extend({/* ShowHideGraphic */}, BaseComponent, {

	componentSelector: '.show-hide-graphic',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {

		$(element).click((function(event) {

			var target = $(event.currentTarget).attr('data-target');
			$(target).toggleClass('hide');

			if ($(event.currentTarget).hasClass('icon-contraer')) {
				$(event.currentTarget).removeClass('icon-contraer');
				$(event.currentTarget).addClass('icon-expandir');
				$(event.currentTarget).attr('data-tooltip', "Mostrar gráfica");
			} else {
				$(event.currentTarget).addClass('icon-contraer');
				$(event.currentTarget).removeClass('icon-expandir');
				$(event.currentTarget).attr('data-tooltip', "Ocultar gráfica");
			}

			this.resizeGraphics();

		}).bind(this));
	},

	resizeGraphics: function () {
		AccountGraphic.graphic ? AccountGraphic.graphic.resize() : '';
		SavingsGraphic.graphic ? SavingsGraphic.graphic.resize() : '';
		InvestmentsGraphic.graphic ? InvestmentsGraphic.graphic.resize() : '';
	}
});

var SpentAvailableGraphic = $.extend({/* SpentAvailableGraphic */}, BaseComponent, {

    componentSelector: '.spent-available-graphic',

    init: function() {
        $(this.componentSelector).each(this.binding.bind(this));
    },

    binding: function(index, element) {
        var spent = $(element).attr('data-spent') != undefined ? $(element).attr('data-spent').replace('.', '').replace(',','.') : '0';
        var available = $(element).attr('data-available') != undefined ? $(element).attr('data-available').replace('.', '').replace(',','.') : '100';

        spent = parseFloat(spent);
        available = parseFloat(available);

        $(element).find('.spent-bar').css('width', Math.round((spent * 100) / available)+'%');
    }
});

var IconSelectable = $.extend({/* IconSelectable */}, BaseComponent, {

	componentSelector: '.icon-selectable',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		$(element).click((function(event) {
			$(event.currentTarget).toggleClass('active');
		}).bind(this));
	}
});

var ListAccounts = $.extend({/* ListAccounts */}, BaseComponent, {

	componentSelector: '.list-accounts',

	rowClassSelector: '.account-row, .card-row, .product-row',
	rowElementSelector: '.list-account-element',

	init: function() {
		// Events binding for each list element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		this.shortcutActionBinding(element);
		this.showMoreActionBinding(element);
		this.collapsableBinding(element);
		this.showProducts(element);
	},

	/* COLLAPSABLE LOGIC **************************************************/

	collapsableParameters: {
		trigger: '.make-collapsable'
	},

	collapsableBinding: function(element) {


		$(element).find(this.collapsableParameters.trigger).click((function(event) {

			event.stopPropagation();

			if($(event.currentTarget).find('.collapsable-icon').hasClass('icon-down-open-big')) {
				$(event.currentTarget).find('.collapsable-icon').removeClass('icon-down-open-big').addClass('icon-up-open-big');
			} else {
				$(event.currentTarget).find('.collapsable-icon').removeClass('icon-up-open-big').addClass('icon-down-open-big');
			}

			$(event.currentTarget).parents('.list-accounts').next('.list-activities-component').slideToggle('fast');
		}).bind(this));

	},

	/* SHORTCUT LOGIC **************************************************/

	shortcutParameters: {
		trigger: '.shortcut-button',
		displayClass: 'active',
		targetToSetDisplayClass: '.drop-menu'
	},

	shortcutActionBinding: function(element) {
		// Show shortcut menú
		$(element).find(this.shortcutParameters.trigger).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).siblings(this.targetToSetDisplayClass).toggleClass(this.shortcutParameters.displayClass);
		}).bind(this));

		// Close shortcut menú on mouse leave
		$(element).find(this.rowClassSelector).mouseleave((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parents(this.componentSelector).find(this.shortcutParameters.targetToSetDisplayClass).removeClass(this.shortcutParameters.displayClass);
		}).bind(this));
	},

	/* SHOW MORE ELEMENTS LOGIC ***************************************************/

	showMoreActionParameters: {
		trigger: '.show-more',
	},

	showMoreActionBinding: function(element) {

		if ($(element).siblings('.show-more').length > 0) {

			$(element).siblings('.show-more').click((function(event) {
				event.preventDefault();
				event.stopPropagation();
				this.showMore($(event.currentTarget).siblings(this.componentSelector));
				this.scrollToTop($(event.currentTarget).siblings(this.componentSelector));
			}).bind(this));

			this.showMore(element);
		}
	},

	showMore: function(element) {
		var numElements = $(element).find(this.rowElementSelector).length;
		var numElementsToShow = $(element).siblings(this.showMoreActionParameters.trigger).attr('data-num-elements');
		var showText = $(element).siblings(this.showMoreActionParameters.trigger).attr('data-show-text');
		var hideText = $(element).siblings(this.showMoreActionParameters.trigger).attr('data-hide-text');

		$(element).find(this.rowElementSelector).slice(numElementsToShow, numElements).each((function(index, element) {
			$(element).toggleClass('hide-element');
		}).bind(this));

		// If there are elements to show
		if ($(element).find('.hide-element').length > 0) {
			$(element).siblings(this.showMoreActionParameters.trigger).find('span').html(showText);
			$(element).siblings(this.showMoreActionParameters.trigger).find('span + i').removeClass('icon-up-open').addClass('icon-down-open')
		} else {
			$(element).siblings(this.showMoreActionParameters.trigger).find('span').html(hideText);
			$(element).siblings(this.showMoreActionParameters.trigger).find('span + i').removeClass('icon-down-open').addClass('icon-up-open');
		}
	},

	scrollToTop: function(element) {

		if( $(element).find('.hide-element').length && $(element).length ) {
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 500);
		}
	},

	/* Show products list **************************************************/

	showProductsParameters: {
		trigger: '.product-row.expandable',
	},

	showProducts: function(element) {

		$(element).find(this.showProductsParameters.trigger).click((function(event) {
			var opened = $(event.currentTarget).hasClass('expanded');

			$(event.currentTarget).parents(this.rowElementSelector).find(this.showProductsParameters.trigger).removeClass('expanded');

			if (!opened) {
				$(event.currentTarget).addClass('expanded');
			}
		}).bind(this));
	}
});

var ListActivities = $.extend({/* ListActivities */}, BaseComponent, {

	componentSelector: '.list-activities-component',

	rowClassSelector: '.list-activity-row',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		this.detailsActionBinding(element);
		this.showMoreActionBinding(element);
		this.currencyActionBinding(element);
		this.balancePopupActionBinding(element);
		this.searchFormActionBinding(element);
	},

	/* DETAILS ELEMENT ROW LOGIC **************************************************/

	detailsActionParameters: {
		displayClass: 'display-details',
		unreadClass: 'unread',
		targetToSetDisplayClass: '.list-activity-row-container',
		showDetailsTriggerSelector: '.list-activity-row',
		closeDetailsTriggerSelector: '.list-activity-row-container .close-action'
	},

	detailsActionBinding: function(element) {
		// Open or close details action binding
		$(element).find(this.detailsActionParameters.showDetailsTriggerSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parent().toggleClass(this.detailsActionParameters.displayClass);
			this.setReadMessage(event.currentTarget);
		}).bind(this));

		// Close details icon action binding
		$(element).find(this.detailsActionParameters.closeDetailsTriggerSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parents(this.targetToSetDisplayClass).removeClass(this.detailsActionParameters.displayClass);
		}).bind(this));
	},

	setReadMessage: function(element) {
		$(element).removeClass(this.detailsActionParameters.unreadClass);
	},

	/* SHOW MORE ELEMENTS LOGIC ***************************************************/

	showMoreActionParameters: {
		triggerSelector: '.show-more',
	},

	showMoreActionBinding: function(element) {

		if ($(element).siblings('.show-more').length > 0) {

			$(element).siblings('.show-more').click((function(event) {
				event.stopPropagation();
				event.preventDefault();
				this.showMore($(event.currentTarget).siblings(this.componentSelector));
				this.scrollToTop($(event.currentTarget).siblings(this.componentSelector));
			}).bind(this));

			this.showMore(element);
		}
	},

	showMore: function(element) {
		var numElements = $(element).find(this.rowClassSelector).length;
		var numElementsToShow = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-num-elements');
		var showText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-show-text');
		var hideText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-hide-text');

		$(element).find(this.rowClassSelector).slice(numElementsToShow, numElements).each((function(index, row) {
			$(row).toggleClass('hide-row');
		}).bind(this));

		// If there are rows to show
		if ($(element).find('.hide-row').length > 0) {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(showText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-up-open').addClass('icon-down-open')
		} else {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(hideText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-down-open').addClass('icon-up-open');
		}
	},

	scrollToTop: function(element) {

		if( $(element).find('.hide-row').length && $(element).length ) {
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 500);
		}
	},

	/* FILTER CURRENCIES LOGIC ****************************************************/

	currencyActionParameters: {
		triggerSelector: '.list-activity-header .currencies-filter',
		headerSelector: '.list-activity-header',
		displayCurrenciesSelector: 'display',
		currenciesSelector: '.currencies-selector',
		filterByDefaultText: null,
		defaultAmountValues: null,
		filterIconElement: '<i class="icon-arrow-combo"></i>'
	},

	currencyActionBinding: function(element) {
		$(element).find(this.currencyActionParameters.triggerSelector).click((function(event) {
			event.stopPropagation();
			this.displayCurrencySelector(event.currentTarget, true);
		}).bind(this));

		$(element).find('.currencies-selector-row').click((function(event) {
			event.stopPropagation();
			this.selectCurrencyValue(event.currentTarget);
		}).bind(this));
	},

	displayCurrencySelector: function(element, initFilter) {
		$(element)
			.parents(this.currencyActionParameters.headerSelector)
				.siblings(this.currencyActionParameters.currenciesSelector)
					.toggleClass(this.currencyActionParameters.displayCurrenciesSelector);

		if(initFilter) {
			this.setDefaultFilterValue();
		}
	},

	setDefaultFilterValue: function() {
		if (this.currencyActionParameters.filterByDefaultText == null) {
			this.currencyActionParameters.filterByDefaultText = $('.list-activity-header').find('.currencies-filter').html().trim();
			this.currencyActionParameters.defaultAmountValues = $('.list-activity-header').find('.currencies-total').html().trim();
		}

		$('.list-activity-header').find('.currencies-filter').html('');
		$('.list-activity-header').find('.currencies-filter').append(this.currencyActionParameters.filterByDefaultText);
		$('.list-activity-header').find('.currencies-total').html('');
		$('.list-activity-header').find('.currencies-total').append(this.currencyActionParameters.defaultAmountValues);
	},

	selectCurrencyValue: function(element) {

		var flagImg = $(element).find('.balance p img').clone();
		var balanceAmount = $(element).find('.balance p > span').clone();

		$('.list-activity-header').find('.currencies-filter').html('');
		$('.list-activity-header').find('.currencies-filter').append(flagImg);
		$('.list-activity-header').find('.currencies-filter').append(balanceAmount);
		$('.list-activity-header').find('.currencies-filter').append(this.currencyActionParameters.filterIconElement);

		var currenciesSubtotal = $(element).find('.currencies-subtotal').clone();
		var dataCurrencyMovements = $(element).find('.currencies-subtotal').attr('data-currency-movements');
		var currenciesMovements = $('<span>' + dataCurrencyMovements.split('|')[0] + '<span class="currency">' + dataCurrencyMovements.split('|')[1] + '</span></span>');

		$('.list-activity-header').find('.currencies-total').html('');
		$('.list-activity-header').find('.currencies-total').append(currenciesSubtotal);
		$('.list-activity-header').find('.currencies-total').append(currenciesMovements);

		this.displayCurrencySelector($(this.currencyActionParameters.triggerSelector), false);

	},

	/* SHOW CURRENCIES BALANCE INFO LOGIC *****************************************/

	balancePopupParameters: {
		triggerSelector: '.currencies-balance .available-amount, .currencies-balance .icon-close',
		displayCurrenciesSelector: 'show-popup',
		currenciesSelector: '.currencies-balance'
	},

	balancePopupActionBinding: function(element) {
		$(element).find(this.balancePopupParameters.triggerSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parents(this.balancePopupParameters.currenciesSelector).toggleClass(this.balancePopupParameters.displayCurrenciesSelector);
		}).bind(this));
	},

	/* SEARCH OPTIONS LOGIC *******************************************************/

	searchFormActionBinding: function(element) {
		// Focus binding
		$(element).find('input.search').focus((function(event) {
			event.stopPropagation();
			this.displayAdvancedSearch(event.currentTarget);
		}).bind(this));

		$(element).find('.icon-search-container').click((function(event) {
			this.displayAdvancedSearch(event.currentTarget);
		}).bind(this));

		// Show or hide advanced form on clicking advanced form option
		$(element).find('.advanced-search .advanced-search-trigger').click((function(event) {
			this.displayAdvancedSearchForm(event.currentTarget);
		}).bind(this));

		// Hide advanced search on clicking close icon
		$(element).find('.advanced-search-trigger .icon-close').click((function(event) {
			event.preventDefault();
			event.stopPropagation();
			this.hideAdvancedSearch(event.currentTarget);
		}).bind(this));

		// Advanced search submit form binding
		$(element).find('#advanced-search-form, #search-form, .icon-search-container button').submit((function(event) {
			if($(event.currentTarget).valid()) {
				this.submitSearch(event.currentTarget);
			}
			return false; // prevent submit
		}).bind(this));

		// Print, send and download icons binding
		$(element).find('.icon-options i').click((function(event) {
			this.clickActionListIcon(event.currentTarget);
		}).bind(this));

		// Show or hide advanced form on clicking advanced form option
		$(element).find('.actions-search .icon-close').click((function(event) {
			this.showActionsForm(false, event.currentTarget);
		}).bind(this));

		// Al hacer click en enviar, se muestra conforme se ha enviado correctamente
		$(element).find('#actions-search-form').submit((function(event) {

			if($(event.currentTarget).valid()) {
				this.showActionsForm(false, event.currentTarget);
				
				$('#actions-search-form').validate().resetForm(); 

				if(!$(element).find('form#actions-search-form div.send').hasClass('hide')){
					$(element).find('#icon-options-label-send').removeClass('hide');

					setInterval(function(){ 
						$('label.closeable-container').fadeTo("2000", 0);
						$(element).find('#icon-options-label-send').addClass('hide'); 
					}, 5000);
				}
				if(!$(element).find('form#actions-search-form div.download').hasClass('hide')){
					$(element).find('#icon-options-label-download').removeClass('hide');

					setInterval(function(){ 
						$('label.closeable-container').fadeTo("2000", 0);
						$(element).find('#icon-options-label-download').addClass('hide'); 
					}, 5000);
				}

			}
			return false; // prevent submit
		}).bind(this));

		$(element).find('.select-date-range').change((function(event) {
			$('#advanced-search-form').validate().resetForm();
			$('#actions-search-form').validate().resetForm();
			$(event.currentTarget).parent().next().find('input').prop('disabled', !($(event.currentTarget).find(':selected').val() == ''))
		}).bind(this));
	},

	displayAdvancedSearch: function(element) {
		// Activates search state on focusing input
		$(element).closest(this.componentSelector).find('.list-search-row').addClass('active-search');
		// Hides actions (print, download and send) form
		this.showActionsForm(false, element);
		this.activeActionListIcons(false, element);
	},

	displayAdvancedSearchForm: function(element) {
		$(element).closest(this.componentSelector).find('.form-container.advanced-form').toggleClass('hide');
	},

	hideAdvancedSearch: function(element) {
		// Disable search state on focusing input
		$(element).closest(this.componentSelector).find('.list-search-row').removeClass('active-search');
		$(element).closest(this.componentSelector).find('.form-container.advanced-form').addClass('hide');
		// Show actions (print, download and send) form
		this.activeActionListIcons(true, element);
		this.showActionsForm(false, element);
	},

	submitSearch: function(input) {

		var $component = $(input).closest(this.componentSelector);

		if($(input).attr('id') == 'search-form' && $component.find('#input-advanced-search').val() == '') {
			return false;
		}

		if($(input).attr('id') == 'search-form') {
			$component.find('#input-advanced-search').attr('placeholder', $component.find('#input-advanced-search').attr('data-placeholder-results') + ' '  + $component.find('#input-advanced-search').val());
		} else {
			$component.find('#input-advanced-search').attr('placeholder', $component.find('#submit-advanced-search').attr('data-placeholder-results'));
			$component.find('#search-form').click((function(event) {
				this.displayAdvancedSearch();
				this.displayAdvancedSearchForm(event.currentTarget);
				$(event.currentTarget).closest(this.componentSelector).find('.form-container.advanced-form').removeClass('hide');
				$(event.currentTarget).closest(this.componentSelector).find('.popups-forms .popup-info').addClass('hide');
			}).bind(this));
		}

		// Update input with placeholder and disabled
		$component.find('#input-advanced-search').val('');
		$component.find('#input-advanced-search').prop('disabled', true);

		// Hide advanced search form
		$component.find('.list-search-row').addClass('search-result');
		$component.find('.list-search-row').removeClass('active-search');
		$component.find('.form-container.advanced-form').addClass('hide');

		// Change search icon to close icon
		this.changeInputSearchIcon('icon-close', input);

		// Activate actions icons (print, send and download)
		this.activeActionListIcons(true, input);

		// Bind click on the close icon to reset search state
		$component.find('.list-search-row button i').click((function(event) {
			event.preventDefault();
			event.stopPropagation();

			var $component = $(event.currentTarget).closest(this.componentSelector);

			// Enable search input
			$component.find('#input-advanced-search').prop('disabled', false);
			$component.find('#input-advanced-search').attr('placeholder', $component.find('#input-advanced-search').attr('data-placeholder-default'));
			// Remove search result state
			$component.find('.list-search-row').removeClass('search-result');
			$component.find('.list-search-row').removeClass('active-search');
			// Update icon to search icon
			this.changeInputSearchIcon('icon-search', event.currentTarget);
			// Update actions icons status and close popups
			$component.find('.icon-options i').removeClass('clicked');
			$component.find('.popups-forms .popup-info').addClass('hide');
			// Hide advanced search form
			$component.find('.form-container.advanced-form').addClass('hide');
			$component.find('#search-form').unbind('click');

			// Reset advanced search input components values
			$(event.currentTarget).closest(this.componentSelector).find('#input-advanced-search').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search input[type=text]').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search input[type=number]').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search input[type=tel]').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search input[type=email]').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search select').val('');
			$(event.currentTarget).closest(this.componentSelector).find('.advanced-search select').change();

			$(event.currentTarget).unbind('click');
		}).bind(this));
	},

	changeInputSearchIcon: function(icon, element) {
		$(element).closest(this.componentSelector).find('.list-search-row button i').attr('class', '');
		$(element).closest(this.componentSelector).find('.list-search-row button i').addClass(icon);
	},

	activeActionListIcons: function(active, element) {
		if (active) {
			$(element).closest(this.componentSelector).find('.list-search-row .icon-options i').removeClass('disabled');
		} else {
			$(element).closest(this.componentSelector).find('.list-search-row .icon-options i').addClass('disabled');
		}
	},

	clickActionListIcon: function(icon) {

		if ($(icon).hasClass('disabled')) {
			return false;
		}

		var $component = $(icon).closest(this.componentSelector);

		// Setting clicked class on icon clicked
		$(icon).parent().find('i').removeClass('clicked');
		$(icon).addClass('clicked');

		if($(icon).parents('.list-search-row').hasClass('search-result')) {

			var showed = !$component.find('.popups-forms .popup-info.' + $(icon).attr('data-action')).hasClass('hide');

			$component.find('.popups-forms .popup-info').addClass('hide');

			if (!showed) {
				$component.find('.popups-forms .popup-info.' + $(icon).attr('data-action')).removeClass('hide');
			} else {
				$(icon).removeClass('clicked');
			}

		} else {
			$component.find('.action-search-row').addClass('hide');
			$component.find('.action-search-row.' + $(icon).attr('data-action')).removeClass('hide');
			this.showActionsForm(true, icon);
		}
	},

	showActionsForm: function(show, element) {
		if(show) {
			$(element).closest(this.componentSelector).find('.list-search-row').addClass('active-actions-form');
			$(element).closest(this.componentSelector).find('.list-search-options-row .actions-search').removeClass('hide');
		} else {
			$(element).closest(this.componentSelector).find('.list-search-row').removeClass('active-actions-form');
			$(element).closest(this.componentSelector).find('.list-search-options-row .actions-search').addClass('hide');
			$(element).closest(this.componentSelector).find('.list-search-row .icon-options i').removeClass('clicked');
		}
	}
});

var ListElements = $.extend({/* ListElements */}, BaseComponent, {

	componentSelector: '.list-elements-component',

	rowClassSelector: '.element-list-row',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		this.detailsActionBinding(element);
		this.deleteActionsBinding(element);
		this.editActionsBinding(element);
		this.transferActionsBinding(element);
		this.showMoreActionBinding(element);
		this.togglePeriodicalEndDateBinding(element);
		this.newElementRowBinding(element);
		this.iconToggleVisibilityBinding(element);
	},

	/* DETAILS ELEMENT ROW LOGIC **************************************************/

	detailsActionParameters: {
		displayClass: 'display-details',
		showDetailsTriggerSelector: '.element-list-row.with-details .element-list-summary-container, .element-list-row.with-icon-info .icon-info',
		closeDetailsTriggerSelector: '.element-list-row.with-details .close-action, .element-list-row.with-icon-info .close-action'
	},

	detailsActionBinding: function(element) {
		// Open or close details action binding
		$(element).find(this.detailsActionParameters.showDetailsTriggerSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).closest('.element-list-row').toggleClass(this.detailsActionParameters.displayClass);

			if(!$(event.currentTarget).hasClass('checked')){
				CheckboxComponent.toggle(event.currentTarget);
				$(event.currentTarget).find('label.check').addClass('checked');
			}

		}).bind(this));

		// Close details icon action binding
		$(element).find(this.detailsActionParameters.closeDetailsTriggerSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).closest(this.rowClassSelector).removeClass(this.detailsActionParameters.displayClass);
		}).bind(this));
	},

	/* DELETE ELEMENT ROW LOGIC ***************************************************/

	deleteActionParameters: {
		displayClass: 'display-delete-message',
		domElementSelector: '.delete-message-container',
		triggerSelector: '.delete-action',
		closePromptSelector: '.delete-message-container .cancel',
		acceptPromptSelector: '.delete-message-container .accept'
	},

	deleteActionsBinding: function(element) {
		// Delete icon action binding
		$(element).find(this.deleteActionParameters.triggerSelector).click((function(event) {
			event.stopPropagation();
			this.toggleDisplayDeleteElement(event.currentTarget);
		}).bind(this));

		// Close delete prompt
		$(element).find(this.deleteActionParameters.closePromptSelector).click((function(event) {
			event.stopPropagation();
			this.toggleDisplayDeleteElement(event.currentTarget);
		}).bind(this));

		// Delete element action binding
		$(element).find(this.deleteActionParameters.acceptPromptSelector).click((function(event) {
			event.stopPropagation();
			this.deleteElement(event.currentTarget);
		}).bind(this));

		// Disable opening details on showing actions
		$(element).find(this.deleteActionParameters.domElementSelector).click((function(event) {
			event.stopPropagation();
		}).bind(this));
	},

	toggleDisplayDeleteElement: function(element) {
		if (this.hasDeleteContainer($(element).parents(this.rowClassSelector))) {
			$(element).parents(this.rowClassSelector).toggleClass(this.deleteActionParameters.displayClass);
		}
	},

	deleteElement: function(element) {
		this.updateNumElementsShowed($(element).parents(this.rowClassSelector));
		$(element).parents(this.rowClassSelector).remove();
	},

	hasDeleteContainer: function(element) {
		return $(element).find(this.deleteActionParameters.domElementSelector).length > 0;
	},

	/* EDIT / CREATE ELEMENT ROW LOGIC ***************************************************/

	editActionParameters: {
		domElementSelector: '.edit-element-container',
		displayClass: 'display-edit-container',
		triggerSelector: '.edit-action',
		closeEditionSelector: '.edit-element-container .cancel',
		acceptEditionSelector: '.edit-element-container .accept',
		closeNewSelector: '.new-element-container .cancel',
		acceptNewSelector: '.new-element-container .accept',
		editFormSelector: 'form.edit-form, form.create-form'
	},

	editActionsBinding: function(element) {
		// Edit icon action binding
		$(element).find(this.editActionParameters.triggerSelector).click((function(event) {
			event.stopPropagation();
			this.toggleDisplayEditElement(event.currentTarget);
		}).bind(this));

		// Close edit form
		$(element).find(this.editActionParameters.closeEditionSelector).click((function(event) {
			event.stopPropagation();
			this.toggleDisplayEditElement(event.currentTarget);
		}).bind(this));

		// Edit element action binding
		$(element).find(this.editActionParameters.acceptEditionSelector).click((function(event) {
			event.stopPropagation();
			if ($(event.currentTarget).parents(this.editActionParameters.editFormSelector).valid()) {
				this.editElement(event.currentTarget);
			}
		}).bind(this));

		// Disable opening details on showing actions
		$(element).find(this.editActionParameters.domElementSelector).click((function(event) {
			event.stopPropagation();
		}).bind(this));

		// Close new element form
		$(element).find(this.editActionParameters.closeNewSelector).click((function(event) {
			event.stopPropagation();
			$(event.currentTarget).parents('.new-row-form').addClass('hide');
		}).bind(this));

		// Submit new element form
		$(element).find(this.editActionParameters.acceptNewSelector).click((function(event) {
			event.stopPropagation();
			// debugger;
			if ($(event.currentTarget).parents(this.editActionParameters.editFormSelector).valid()) {
				$(event.currentTarget).parents('.new-row-form').addClass('hide');
			}
		}).bind(this));
	},

	toggleDisplayEditElement: function(element) {
		if (this.hasEditContainer($(element).parents(this.rowClassSelector))) {
			$(element).parents(this.rowClassSelector).toggleClass(this.editActionParameters.displayClass);
		}
	},

	editElement: function(element) {
		$(element).parents(this.rowClassSelector).removeClass(this.editActionParameters.displayClass);
	},

	hasEditContainer: function(element) {
		return $(element).find(this.editActionParameters.domElementSelector).length > 0;
	},

	/* PERIODICAL TRANSFERS ROW LOGIC *********************************************/

	transferActionsParameters: {
		transferActionTriggerSelector: '.transfer-action',
		pauseTransferClass: 'pause-action',
		resumeTransferClass: 'resume-action',
		iconPauseClass: 'icon-pause',
		iconCurrentClass: 'icon-refresh'
	},

	transferActionsBinding: function(element) {
		$(element).find(this.transferActionsParameters.transferActionTriggerSelector).click((function(event) {
			event.stopPropagation();
			if ($(event.currentTarget).hasClass(this.transferActionsParameters.pauseTransferClass)) {
				this.pauseTransfer(event.currentTarget);
			} else {
				this.resumeTransfer(event.currentTarget);
			}
		}).bind(this));
	},

	pauseTransfer: function(element) {
		$(element).removeClass(this.transferActionsParameters.iconPauseClass);
		$(element).removeClass(this.transferActionsParameters.pauseTransferClass);
		$(element).addClass(this.transferActionsParameters.iconCurrentClass);
		$(element).addClass(this.transferActionsParameters.resumeTransferClass);
	},

	resumeTransfer: function(element) {
		$(element).removeClass(this.transferActionsParameters.iconCurrentClass);
		$(element).removeClass(this.transferActionsParameters.resumeTransferClass);
		$(element).addClass(this.transferActionsParameters.iconPauseClass);
		$(element).addClass(this.transferActionsParameters.pauseTransferClass);
	},

	/* SHOW MORE ELEMENTS LOGIC ***************************************************/

	showMoreActionParameters: {
		triggerSelector: '.show-more',
	},

	showMoreActionBinding: function(element) {

		if ($(element).siblings('.show-more').length > 0) {

			$(element).siblings('.show-more').click((function(event) {
				event.stopPropagation();
				event.preventDefault();
				this.showMore($(event.currentTarget).siblings(this.componentSelector));
				this.scrollToTop($(event.currentTarget).siblings(this.componentSelector));
			}).bind(this));

			this.showMore(element);
		}
	},

	showMore: function(element) {
		var numElements = $(element).find(this.rowClassSelector).length;
		var numElementsToShow = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-num-elements');
		var showText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-show-text');
		var hideText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-hide-text');

		$(element).find(this.rowClassSelector).slice(numElementsToShow, numElements).each((function(index, row) {
			$(row).toggleClass('hide-row');
		}).bind(this));

		// If there are rows to show
		if ($(element).find('.hide-row').length > 0 || numElements == numElementsToShow) {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(showText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-up-open').addClass('icon-down-open')
		} else {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(hideText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-down-open').addClass('icon-up-open');
		}
	},

	updateNumElementsShowed: function(element) {
		var rowToShow = $(element).parent().find('.hide-row')[0];
		$(rowToShow).removeClass('hide-row');
	},

	scrollToTop: function(element) {

		if( $(element).find('.hide-row').length && $(element).length ) {
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 500);
		}
	},

	/* NEW ELEMENT ROW ************************************************************/

	newElementRowBinding: function(element) {

		if ($(element).find('.new-element-trigger').length > 0) {

			$(element).find('.new-element-trigger').click((function(event){
				$(element).find('.new-row-form').toggleClass('hide');
			}).bind(this));
		}
	},

	/* TOGGLE VISIBILITY **********************************************************/

	iconToggleVisibilityBinding: function(element) {

		if ($(element).find('i.toggle-visibility').length > 0) {

			$(element).find('i.toggle-visibility').click((function(event) {
				$(event.currentTarget).toggleClass('no-visible');
			}).bind(this));
		}
	},

	/* SHOW PERIODICAL END DATE INPUT *********************************************/

	togglePeriodicalEndDateParameters: {
		triggerSelector: '.periodical-transfer-form .end-date-checkbox'
	},

	togglePeriodicalEndDateBinding: function(element) {

		if ($(element).find(this.togglePeriodicalEndDateParameters.triggerSelector).length > 0) {

			$(element).find(this.togglePeriodicalEndDateParameters.triggerSelector).each((function(index, checkbox){

				$(checkbox).click((function(event) {
					CheckboxComponent.toggle(event.currentTarget);
					this.togglePeriodicalEndDateInput(event.currentTarget);
				}).bind(this));

				this.togglePeriodicalEndDateInput(checkbox);

			}).bind(this));
		}
	},

	togglePeriodicalEndDateInput: function(element) {

		if($(element).siblings('input').is(':checked')) {
			$(element).addClass('checked');
			$(element).parents('.periodical-transfer-form').find('.end-date-container').addClass('display');
		} else {
			$(element).removeClass('checked');
			$(element).parents('.periodical-transfer-form').find('.end-date-container').removeClass('display');
		}
	}
});

var LoadingLayer = $.extend({/* LoadingLayer */}, BaseComponent, {

	componentSelector: '.loading-layer',

	show: function() {
		$(this.componentSelector).attr('style', '');
		$(this.componentSelector).removeClass('hide');
	},

	hide: function() {
		$(this.componentSelector).fadeToggle(500, (function() {
			$(this.componentSelector).addClass('hide');
		}).bind(this));
	}
});

var MapsComponent = $.extend({/* MapsComponent */}, BaseComponent, {

	componentSelector: '.maps-component',
	filterLayerShow: '#open-filters',
	filterLayerHide: '#hide-filters',
	filterRow: '.check-filter',
	filterForm: '.filters-form button',
	//triggerToggleMap: '.trigger-toggle-map',

	map: {},
	initMarkers: false,
	initialMarkers: [],
	markers: [],
	markerCluster: {},
	officeDetailZoom: 18,

	geolocated: false,
	position: {},

	icons : {
		office: 'images/icon-marker.png',
		atm: 'images/icon-atm.png',
		empty: 'images/icon-marker-empty.png',
		zoomed: 'images/icon-zoomed-office.png'
	},

	init: function() {
		if ($(this.componentSelector).length) {
			this.getMarkers();
			this.initMap();
		}
	},

	getMarkers: function() {
		var postData = {
		    'body':     {
		        "filtroOficinaB": "S",
		        "filtroOficinaC": "S",
		        "filtroOficinaE": "S",
		        "filtroOficinaI": "N",
		        "filtroOficinaP": "S",
		        "filtroOficinaS": "S"
		    },
		    'header':     {
		        "channel": "app",
		        "language": "ES",
		        "service": "MCPS_SEARCH_SITES_ANOM",
		        "version": "01"
		    }
		};

		$.ajax({
		  type: "POST",
		  url: 'https://www.morabanc.ad/mintdigitalbanking/JSONCrossServlet',
		  contentType: "application/json",
		  data: JSON.stringify(postData),
		  success: this.loadMarkersJson,
		  dataType: 'json'
		});

	},	
	
	initOfficeLocator: function(marks, geolocateUser) {
		this.setMarks(marks);
		
		this.bindEvents();

		if (marks.length === 1 && this.markers.length === 1) {
			this.initGeolocation(geolocateUser);
			this.zoomMarker(this.markers[0]['rowElement']);
			this.dropDown(this.markers[0]['rowElement']);
		} else {
			this.initGeolocation(geolocateUser);
		}
		
	},	
	
	bindEvents: function() {
		// Click event binding for key entering process
		$(this.componentSelector).find('.markers-filters-row').click((function(event) {
			this.dropDown(event.currentTarget);
			this.zoomMarker(event.currentTarget, true);
		}).bind(this));

		// Click event binding to
		$(this.componentSelector).find('.markers-filter-direction').click(this.redirectToDirections.bind(this));

		// Click event show filters
		$(this.componentSelector).find(this.filterLayerShow).click((function(event) {
			$('.filters-off').addClass('hide');
			$('.filters-on').removeClass('hide');
		}).bind(this));

		// Click event hide filters
		$(this.componentSelector).find(this.filterLayerHide).click((function(event) {
			$('.filters-off').removeClass('hide');
			$('.filters-on').addClass('hide');
		}).bind(this));

		// Toggle checked filters
		$(this.filterRow).click((function(event) {
			this.toggleCheckedFilter(event.currentTarget);
		}).bind(this));

		// Toggle checked filters
		$(this.filterForm).click(this.submitFilterForm.bind(this));
	},
	
	// Painting the map
	initMap: function() {

		this.map = new google.maps.Map(document.getElementById('map'), {
	    	zoom: 11,
			center: {
				lat: 42.536116,
				lng: 1.580220
			},
	    	scrollwheel: false,
	    	streetViewControl: false,
	    	mapTypeControlOptions: {
        		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        		position: google.maps.ControlPosition.TOP_RIGHT
    		}
    	});

		google.maps.event.addListener(this.map, 'bounds_changed', this.onBoundsChanged.bind(this));
	},

	loadMarkersJson: function(markersJson) {
		var offices = markersJson.body;
				
		var html = '';

		for (var officeIndex = 0; officeIndex < offices.length; officeIndex++) {
					
			var office = offices[officeIndex];

			html += '<div class="markers-filters-row" data-id="'+office.codigoSitio+'" data-longitude="'+office.longitud+'" data-latitude="'+office.latitud+'">';
			html += 	'<i class="icon-localizacion hidden-xs"></i>';
			html += 	'<div class="markers-filters-innerbox">';
			html += 	'<p class="markers-filters-title">'+office.nombre+'</p>';
			html += 	'<p class="markers-filters-data">'+office.direccion+'</p>';
			html += 	'<p class="markers-filters-data markers-filters-data-hidden hide">'+office.codigoPostal+'</p>';
			html += 	'<div class="markers-filters-data markers-filters-data-hidden hide">';

			html += MapsComponent.isTypeAtm(office);
			html += MapsComponent.isTypeParticular(office);
			html += MapsComponent.isTypeCompany(office);
			html += MapsComponent.isTypePrivateBank(office);
			html += MapsComponent.isTypeInsurances(office);			

			html += 	'</div>';
			html += 		'<a href="#" class="markers-filter-direction markers-filters-data-hidden hide">';
			html += 			'<i class="icon-llegar"></i>';
			html += 			'<span>Cómo llegar</span>';
			html += 		'</a>';
			html += 	'</div>';
			html += '</div>';
		}

		$(MapsComponent.componentSelector).find('.mCustomScrollbar').html(html);

		// Apply custom bar plugin to large list
		$(MapsComponent.componentSelector).find('.mCustomScrollbar').mCustomScrollbar();

		MapsComponent.setMarks(offices);
		MapsComponent.initOfficeLocator(offices, true);

	},

	isTypeAtm: function(office) {

		var html= '';

		if (this.getBoolean(office.flagOficinaC)){

			html += '<div class="markers-type-item">';
			html += 	'<p class="marker-type-item-title">Cajero</p>';
			html += '</div>';

		}

		return html;

	},

	isTypeParticular: function(office) {

		var html= '';

		if (this.getBoolean(office.flagOficinaP)) {

			html += '<div class="markers-type-item">';
			html += 	'<p class="marker-type-item-title">Particulares</p>';
			html += '</div>';

		}

		return html;

	},

	isTypeCompany: function(office) {

		var html= '';

		if (this.getBoolean(office.flagOficinaE)) {

			html += '<div class="markers-type-item">';
			html += 	'<p class="marker-type-item-title">Empresas</p>';
			html += '</div>';

		}

		return html;

	},

	isTypePrivateBank: function(office) {

		var html= '';

		if (this.getBoolean(office.flagOficinaB)) {

			html += '<div class="markers-type-item">';
			html += 	'<p class="marker-type-item-title">Banca Privada</p>';
			html += '</div>';

		}

		return html;

	},

	isTypeInsurances: function(office) {

		var html= '';

		if (this.getBoolean(office.flagOficinaS)) {

			html += '<div class="markers-type-item">';
			html += 	'<p class="marker-type-item-title">MoraAssegurances</p>';
			html += '</div>';

		}

		return html;

	},

	getTypeIcon: function(office) {

		var type= '';

		if (this.getBoolean(office.flagOficinaC)
            && !this.getBoolean(office.flagOficinaP)
            && !this.getBoolean(office.flagOficinaE)
            && !this.getBoolean(office.flagOficinaB)
            && !this.getBoolean(office.flagOficinaS)) {

			type = 'atm';

		} else {

			type = 'office';

		}

		return type;

	},	

	getArrayOfTypes: function(office) {

		var types= [];

		if ( this.getBoolean(office.flagOficinaC) ) types.push("Cajeros");
		if ( this.getBoolean(office.flagOficinaP) ) types.push("Oficinas Particulares");
		if ( this.getBoolean(office.flagOficinaE) ) types.push("Oficinas Empresas");
		if ( this.getBoolean(office.flagOficinaB) ) types.push("Oficinas Banca Privada");
		if ( this.getBoolean(office.flagOficinaS) ) types.push("MoraAssegurances");

		return types;

	},			

	getBoolean: function(type) {

		return type === 'S';

	},
	
	// Painting the markers
	setMarks: function(marks) {

		this.markers = [];

		for (var i = 0; i < marks.length; ++i) {

			var marker = new google.maps.Marker({
				position: {
					lat: parseFloat(marks[i].latitud),
					lng: parseFloat(marks[i].longitud)
				},
				map: this.map,
				icon: this.icons[this.getTypeIcon(marks[i])]
			});

			marker['custom-properties'] = marks[i];
			marker['rowElement'] = $(this.componentSelector).find('.markers-filters-row[data-id=' + marks[i].codigoSitio + ']');

			this.markers.push(marker);

			if (!this.initMarkers) {
				this.initialMarkers.push(marker);
			}

			marker.addListener('click', this.markerClickFn);
		}

		if (!this.initMarkers) {
			this.initMarkers = true;
		}

		if($.isFunction(this.markerCluster.clearMarkers)) {
			this.markerCluster.clearMarkers();
		}

		this.markerCluster = this.newMarkerCluster(this.markers);
		this.map['markers'] = this.markers;
		this.map['zoomMarkerFn'] = this.zoomMarker.bind(this);
		this.map['dropDownFn'] = this.dropDown.bind(this);
		this.map['officeDetailZoom'] = this.officeDetailZoom;
		
	},

	markerClickFn: function(position) {
		this.map.dropDownFn(this.rowElement);
		this.map.zoomMarkerFn(this.rowElement, true);
	},

	newMarkerCluster: function(markers) {
		return new MarkerClusterer(this.map, markers, {
			styles: [{
				fontFamily: 'SourceSansPro',
				textSize: 14,
				fontWeight: 'normal',
				textColor: '#fff',
				url: this.icons['empty'],
				height: 36,
				width: 36
			}]
		});
	},

	// Drop down office details
	dropDown: function(element) {
		$(this.componentSelector).find('.markers-filters-data-hidden').addClass('hide');
		$(element).find('.markers-filters-data-hidden').removeClass('hide');
	},

	// Zoom marker
	zoomMarker: function(element, updateSelector) {
		var lat = $(element).attr('data-latitude');
		var lng = $(element).attr('data-longitude');
		var id = $(element).attr('data-id');

		for (var i = 0; i < this.map['markers'].length; ++i) {
			var markData = this.map['markers'][i]['custom-properties'];

			this.map['markers'][i].setIcon(this.icons[this.getTypeIcon(markData)]);

			if (markData.id === id) {
				this.map['markers'][i].setIcon(this.icons['zoomed']);
			}
		}

		this.map.setZoom(this.map['officeDetailZoom']);
		this.map.panTo(new google.maps.LatLng(lat, lng));

		if (updateSelector) {
			this.updateSelector(id);
		}
	},

	zoomMarkerById: function(markerId) {
		if (markerId) {
			this.dropDown($(this.componentSelector).find('.markers-filters-row[data-id=' + markerId + ']'));
			this.zoomMarker($(this.componentSelector).find('.markers-filters-row[data-id=' + markerId + ']'), false);
		}
	},

	
	updateSelector: function(identifier) {
		if ($('.select-offices-map').length > 0) {
			$('.select-offices-map').find('select').val(identifier);
			$('.select-offices-map').find('select').change();
		}
	},
	
	
	// Function called on maps bounds changed
	onBoundsChanged: function() {
		$(this.componentSelector).find('.markers-filters-row').addClass('hide');
		$(this.componentSelector).find('.markers-filters-row').removeClass('no-border');

		for (var i = 0; i < this.markers.length; i++) {

			var mark = this.markers[i];

			if (this.map.getBounds().contains(mark.getPosition()) && mark.getVisible()) {
				$(this.componentSelector).find('.markers-filters-row[data-id=' + mark['custom-properties'].codigoSitio + ']').removeClass('hide');
			} else {
				$(this.componentSelector).find('.markers-filters-row[data-id=' + mark['custom-properties'].codigoSitio + ']').addClass('hide');
			}
		}

		var hasMarksInbounds = $(this.componentSelector).find('.markers-filters-row:not(.hide)').length > 0;

		// Show all markers when all markers are out of bounds
		for (var i = 0; !hasMarksInbounds && i < this.markers.length; i++) {
			var mark = this.markers[i];
			$(this.componentSelector).find('.markers-filters-row[data-id=' + mark['custom-properties'].codigoSitio + ']').removeClass('hide');
		}

		// Remove border bottom on last element
		var showedRows = $(this.componentSelector).find('.markers-filters-row:not(.hide)');
		$(showedRows[showedRows.length-1]).addClass('no-border');
	},
	
	// Geolocation
	initGeolocation: function(zoomToGeolocatedPosition) {

		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition((function(position) {

				this.position = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				this.geolocated = true;

				if(zoomToGeolocatedPosition) {
					this.map.setCenter(this.position);
					this.map.setZoom(this.officeDetailZoom);
				}

			}).bind(this));
		}
	},

	// Toggle checked filters
	toggleCheckedFilter: function(element) {

		var $filterAllOptions = $(element).parents('.filters-form').find('.all-option');

		// if click All and it's not checked
		if($(element).hasClass('all-option') && !$(element).hasClass('checked')) {

			$(this.filterRow).removeClass('checked');
			$(element).addClass('checked');

		// if click any except All
		} else if(!$(element).hasClass('all-option')) {

			if ( $(element).hasClass('checked') ) {
				$(element).removeClass('checked');
			} else {
				$(element).addClass('checked');
				$filterAllOptions.removeClass('checked');
			}
		}

		// if there's no filter checked, check All
		if(!$(this.filterRow).hasClass('checked')) {
			$filterAllOptions.addClass('checked');
		}
	},

	filterByType: function(arrayOfTypes) {

		var visibleMarks = [];

		for (var i = 0; i < this.initialMarkers.length; i++) {

			var markTypes = this.getArrayOfTypes(this.initialMarkers[i]['custom-properties']);

			var commonTypes = $.grep(markTypes, function(element) {
				return ($.inArray(element, arrayOfTypes) != -1)
			});

			if (commonTypes.length != 0) {
				visibleMarks.push(this.initialMarkers[i]['custom-properties']);
			}
		}

		this.setMarks(visibleMarks);
		this.onBoundsChanged();
	},

	submitFilterForm: function(event) {
		event.preventDefault();

		var $checkedOptions = $(event.currentTarget).parents('.filters-form').find('.checked');

		if ($($checkedOptions[0]).hasClass('all-option')) {

			var $allOptions = $(event.currentTarget).parents('.filters-form').find('.check-filter:not(.checked)');

			var types = $.map($allOptions, function(element) {
				return $(element).html();
			});

		} else {

			var types = $.map($checkedOptions, function(element) {
				return $(element).html();
			});
		}

		this.filterByType(types);
		$('.filters-off').removeClass('hide');
		$('.filters-on').addClass('hide');
	},

	redirectToDirections: function(event) {
		event.stopPropagation();

		var destLatitude = $(event.currentTarget).parents('.markers-filters-row').attr('data-latitude');
		var destLongitude = $(event.currentTarget).parents('.markers-filters-row').attr('data-longitude');

		var destiny = destLatitude + ',' + destLongitude;
		var origin = '';

		if (this.geolocated) {
			origin = this.position.lat + ',' + this.position.lng
		}

		window.open('http://www.google.com/maps/dir/' + origin + '/'+ destiny, '_blank');
	}
	
});

var Menu = $.extend({/* Menu */}, BaseComponent, {

	menuMobileSelectors: {
		triggerManager: '.desplegable-gestor',
		triggersUserProfile: '#close-layer-menu-usuario, #perfil-user-mobile',
		wrapper: '.wrapper-page-content',
		menu: '.menu-mobile-layer',
		menuManager: '.desplegable-gestor + .drop-menu',
		menuUser: '.desplegable-usuario + .drop-menu, .layer-menu-usuario .navigation-mobile',
		userProfileLayer: '.layer-menu-usuario'
	},

	menuTabletSelectors: {
		trigger: '.menu-ipad-trigger',
		menu: '.navigation-ipad'
	},

	mainSearchSelectors: {
		trigger: '#main-search-trigger',
		closer: '#main-search-closer'
	},

	userMenuMobile: {
		trigger: '.layer-menu-usuario .navigation-mobile > li > a, .desplegable-usuario + .drop-menu > ul > li > a'
	},

	init: function() {

		var width = window.innerWidth;

		$(this.menuMobileSelectors.triggerManager).click(this.showManager.bind(this));

		// Binding actions events
		$(this.menuMobileSelectors.triggersUserProfile).click(this.showProfileUser.bind(this));
		$(this.menuTabletSelectors.trigger).click(this.showMenuIpad.bind(this));
		$(this.mainSearchSelectors.trigger).click(this.showMainSearch.bind(this));
		$(this.mainSearchSelectors.closer).click(this.hideMainSearch.bind(this));

		$(this.menuMobileSelectors.menu).find('.icon-search').click((function(event) {
			$(event.currentTarget).parents('form').submit();
		}).bind(this));

		// Bind menus for swiping mode
		$(this.menuMobileSelectors.menuManager).find('li').click((function(event) {
			this.swipingModeMenus(event.currentTarget);
		}).bind(this));

		$(this.menuMobileSelectors.menuUser).find('ul.submenu li').click((function(event) {
			this.swipingModeMenus(event.currentTarget);
		}).bind(this));

		// Slide toggle for user menu options
		$(this.userMenuMobile.trigger).click((function(event) {
			$(event.currentTarget).siblings('ul.submenu').slideToggle();
		}).bind(this));
	},

	reinit: function() {

		$(this.menuMobileSelectors.triggerManager).unbind();
		$(this.menuMobileSelectors.triggersUserProfile).unbind();
		$(this.menuTabletSelectors.trigger).unbind();

		this.init();
	},

	showMenuIpad: function() {
		$(this.menuTabletSelectors.menu).toggleClass('active');
	},

	showProfileUser: function() {

		if($(this.menuMobileSelectors.userProfileLayer).hasClass('active')) {
			$(this.menuMobileSelectors.userProfileLayer).animate({ right: "-100%" }, 300 );
			$(this.menuMobileSelectors.userProfileLayer).removeClass('active');
		} else {
			$(this.menuMobileSelectors.userProfileLayer).animate({ right: 0 }, 300 );
			$(this.menuMobileSelectors.userProfileLayer).addClass('active');
		}
	},

	showManager: function() {

		$(this.menuMobileSelectors.triggerManager).toggleClass('pressed');
		$(this.menuMobileSelectors.menuManager).toggleClass('active');
	},

	showMainSearch: function() {
		$('.main-search').show().animate({ height: "130px" }, 200 );
	},

	hideMainSearch: function() {
		$('.main-search').animate({ height: 0 }, 200, function(){ $(this).hide(); });
	},

	swipingModeMenus: function(option) {

		if (BaseView.getViewIdentifier() === 'manager-view') {
			ManagerView.tabSelectionByIndex($(option).index());
		} else if (BaseView.getViewIdentifier() === 'personal-view') {
			PersonalView.tabSelectionByIndex($(option).index());
		}
	}
});

var NewVirtualPortfolio = $.extend({/* NewVirtualPortfolio */}, BaseComponent, {

	componentSelector: '.new-virtual-portfolio',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {

		$(element).find('.add-portfolio').click((function(event) {
			event.preventDefault();
			$(event.currentTarget).closest(this.componentSelector).addClass('show-form');
		}).bind(this));

		$(element).find('.form-icons .accept').click((function(event) {
			event.preventDefault();

			if($(event.currentTarget).closest('form').valid()) {
				this.closeForm(event);
			}
		}).bind(this));

		$(element).find('.form-icons .cancel').click((function(event) {
			event.preventDefault();
			this.closeForm(event);
		}).bind(this));
	},

	closeForm: function(event) {
		$(event.currentTarget).closest(this.componentSelector).removeClass('show-form');
		$(event.currentTarget).closest(this.componentSelector).find('label').remove();
	}
});

var NotificationLayer = $.extend({/* NotificationLayer */}, BaseComponent, {

	componentSelector: '.notification-layer',

	init: function() {
		// Events binding for footer component
		this.hideNotificationLayerBinding($(this.componentSelector));
	},

	hideNotificationLayerBinding: function(element) {
		$(element).find('.icon-close').click((function(event) {
			event.preventDefault();
			this.hideNotificationLayer(event.currentTarget);
		}).bind(this));
	},

	hideNotificationLayer: function(element) {
		$(element).parents('.notification-layer').hide();
	}
});

var PopupTrigger = $.extend({/* PopupTrigger */}, BaseComponent, {

	componentSelector: '.popup-trigger',
	popupClassSelector: '.popup-info',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		$(element).click((function(event) {

			// Force close all page popups
			$(this.popupClassSelector).addClass('hide');

			event.stopPropagation();

			if ($(event.currentTarget).next().hasClass('popup-info')) {
				$(event.currentTarget).next().toggleClass('hide');
			} else {
				$(event.currentTarget).parents('.title-with-info, .popup-container').find(this.popupClassSelector).toggleClass('hide');
			}
		}).bind(this));
	}
});

var SelectAccountOverview = $.extend({/* SelectAccountOverview */}, BaseSelectComponent, {

	componentSelector: '.select-account-overview',

	domSelectOption: '<div class="select-option-row box-cuentas" data-option-index="%%INDEX%%">' +
						'<div class="select-option-alias">%%ALIAS%% <span>%%IBAN%%</span></div>' +
						'<div class="select-option-amount">%%AMOUNT%% <span class="currency">%%CURRENCY%%</span></div>' +
					 '</div>',

	changeSelectedItem: function(select) {
		var alias = $(select).find(":selected").attr('data-alias');
		var iban = $(select).find(":selected").attr('data-iban');
		var amount = $(select).find(":selected").attr('data-amount');
		var currency = $(select).find(":selected").attr('data-currency');
		var cards = $(select).find(":selected").attr('data-cards');

		$(select).parents(this.componentSelector).parent().find('.account-alias').html(alias);
		$(select).parents(this.componentSelector).parent().find('.iban span').html(iban);
		$(select).parents(this.componentSelector).parent().find('.total-big').html(amount + ' <span>' + currency + '</span>');

		if (cards) {
			var cardTotalValue = $(select).find(":selected").attr('data-card-total').split('|')[0];
			var cardTotalCurrency = $(select).find(":selected").attr('data-card-total').split('|')[1];

			$(select).parents(this.componentSelector).parent().find('.num-cards').html(cards);
			$(select).parents(this.componentSelector).parent().find('.total-cards').html(cardTotalValue + ' <span class="panel-currency">' + cardTotalCurrency + '</span>');
		}
	},

	bindingEventsElement: function(index, element) {
		// If exists previous select data rendered, remove
		if($(element).hasClass('init-select-account-overview')) {
			$(element).find('.select-options-container').remove();
		}

		this.appendSelectInfo(element);

		// Show custom select options for desktop mode
		if(device.desktop()) {
			this.createSelectOptions(element);
			this.bindingClickEvents(element);
		} else {
			$(element).find('select').css('z-index', '5');
		}

		this.bindingConnection(element);
		this.bindingChangeEvent(element);

		$(element).addClass('init-select-account-overview');

		$(element).find('.select-container, .select-option-row').click((function(event) {

			var $target = $(event.currentTarget).parents(this.componentSelector);
			var iconClass = $target.find('i').attr('class');

			if(iconClass == 'icon-down-open'){
				$target.find('i').removeClass('icon-down-open').addClass('icon-up-open');
			}else{
				$target.find('i').removeClass('icon-up-open').addClass('icon-down-open');
			}

		}).bind(this));

		// Remove custom scrollbar
		//$(element).find('.mCustomScrollbar').removeClass('mCustomScrollbar');

		// Add class 'cuentas' in container
		$(element).find('.mCustomScrollbar').addClass('cuentas');
	}
});

var SelectAccountWithCurrencies = $.extend({/* SelectAccountWithCurrencies */}, BaseSelectComponent, {

	componentSelector: '.select-account-with-currencies',

	domSelect:	'<div class="select-container">' +
					'<div class="select-content">' +
						'<div class="row">' +
							'<div class="col-sm-7 col-xs-12">' +
								'<div class="label">%%LABEL%%</div>' +
								'<div class="account-alias">%%ALIAS%%</div>' +
							'</div>' +
							'<div class="col-sm-5 col-xs-12 account-amounts">' +
								'<div class="amount main">' +
									'<span>%%AMOUNT%%</span> <span class="currency">%%CURRENCY%%</span>' +
								'</div>' +
								'%%CURRENCIESDOM%%' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="select-dropdown"><i class="icon-down-open-big"></i></div>' +
				'</div>',

	domAmountCurrency: '<div class="amount currency">' +
							'<span>%%AMOUNT%%</span> <span class="currency">%%CURRENCY%%</span>' +
					   '</div>',

	divToPrepend: '',

	appendSelectInfo: function(element) {
		var alias = $(element).find('select').find(":selected").attr('data-alias');
		var amount = $(element).find('select').find(":selected").attr('data-amount');
		var currency = $(element).find('select').find(":selected").attr('data-currency');
		var currencies = $(element).find('select').find(":selected").attr('data-currencies');
		var labelText = $(element).find('select').attr('data-label');

		this.divToPrepend = this.domSelect.replace('%%ALIAS%%', alias).replace('%%AMOUNT%%', amount).replace('%%CURRENCY%%', currency).replace('%%LABEL%%', labelText);

		if (currencies) {
			currencies.split('|').forEach((function(item) {
				this.divToPrepend = this.divToPrepend.replace('%%CURRENCIESDOM%%', this.domAmountCurrency.replace('%%AMOUNT%%', item.split('=')[0]).replace('%%CURRENCY%%', item.split('=')[1]) + '%%CURRENCIESDOM%%');
			}).bind(this));
		}

		$(element).append(this.divToPrepend.replace('%%CURRENCIESDOM%%', ''));
	},

	changeSelectedItem: function(select) {
		var alias = $(select).find(":selected").attr('data-alias');
		var amount = $(select).find(":selected").attr('data-amount');
		var currency = $(select).find(":selected").attr('data-currency');
		var currencies = $(select).find(":selected").attr('data-currencies');

		$(select).parents(this.componentSelector).find('.select-container .account-alias').html(alias);
		$(select).parents(this.componentSelector).find('.select-container .amount.main span').html(amount);
		$(select).parents(this.componentSelector).find('.select-container .amount.main span.currency').html(currency);
		$(select).parents(this.componentSelector).find('.account-amounts .amount.currency').remove();

		this.divToPrepend = '';

		if (currencies) {
			currencies.split('|').forEach((function(item) {
				this.divToPrepend = this.divToPrepend + this.domAmountCurrency.replace('%%AMOUNT%%', item.split('=')[0]).replace('%%CURRENCY%%', item.split('=')[1]);
			}).bind(this));
		}

		$(select).parents(this.componentSelector).find('.account-amounts').append(this.divToPrepend);
	}
});

var SelectAccount = $.extend({/* SelectAccount */}, BaseSelectComponent, {

	componentSelector: '.select-account',

	domSelect:	'<div class="select-container">' +
					'<div class="select-content">' +
						'<div class="account">' +
							'<div class="label">%%LABEL%%</div>' +
							'<div class="account-alias">%%ALIAS%%</div>' +
						'</div>' +
						'<div class="amounts">' +
							'<div class="amount"><span>%%AMOUNT%%</span> <span class="currency">%%CURRENCY%%</span></div>' +
						'</div>' +
					'</div>' +
					'<div class="select-dropdown"><i class="icon-down-open-big"></i></div>' +
				'</div>',

	changeSelectedItem: function(select) {
		var alias = $(select).find(":selected").attr('data-alias');
		var amount = $(select).find(":selected").attr('data-amount');
		var currency = $(select).find(":selected").attr('data-currency');

		$(select).parents(this.componentSelector).find('.select-container .account-alias').html(alias);
		$(select).parents(this.componentSelector).find('.select-container span').html(amount);
		$(select).parents(this.componentSelector).find('.select-container span.currency').html(currency);
	}
});

var SelectCardContract = $.extend({/* SelectCardContract */}, BaseSelectComponent, {

	componentSelector: '.select-card-contract',

	domSelect:	'<div class="select-container">' +
					'<div class="select-content">' +
						'<div class="account">' +
							'<div class="label">%%LABEL%%</div>' +
							'<div class="account-alias">' +
								'<span class="alias">%%ALIAS%%</span>' +
								'<span class="separator"> - </span>' +
								'<span class="label cards">%%CARDS%%</span>' +
							'</div>' +
						'</div>' +
						'<div class="amounts">' +
							'<div class="label available">Disponible <span class="available-amount">%%AVAILABLE%%</span> <span class="currency">%%CURRENCY%%</span></div>' +
							'<div class="amount"><span>%%AMOUNT%%</span> <span class="currency">%%CURRENCY%%</span></div>' +
						'</div>' +
					'</div>' +
					'<div class="select-dropdown"><i class="icon-down-open-big"></i></div>' +
				'</div>',

	appendSelectInfo: function(element) {
		var alias = $(element).find('select').find(":selected").attr('data-alias');
		var amount = $(element).find('select').find(":selected").attr('data-amount');
		var currency = $(element).find('select').find(":selected").attr('data-currency');
		var available = $(element).find('select').find(":selected").attr('data-available');
		var cards = $(element).find('select').find(":selected").attr('data-cards');
		var labelText = $(element).find('select').attr('data-label');

		var divToPrepend = this.domSelect.replace('%%ALIAS%%', alias)
										 .replace('%%AMOUNT%%', amount)
										 .replace(/%%CURRENCY%%/g, currency)
										 .replace('%%AVAILABLE%%', available)
										 .replace('%%CARDS%%', cards)
										 .replace('%%LABEL%%', labelText);

		$(element).append(divToPrepend);

		this.hideDynamicElements(element, available, cards);
	},

	changeSelectedItem: function(select) {
		var alias = $(select).find(":selected").attr('data-alias');
		var amount = $(select).find(":selected").attr('data-amount');
		var currency = $(select).find(":selected").attr('data-currency');
		var available = $(select).find(":selected").attr('data-available');
		var cards = $(select).find(":selected").attr('data-cards');

		$(select).parents(this.componentSelector).find('.select-container .account-alias span.alias').html(alias);
		$(select).parents(this.componentSelector).find('.select-container .amount span').html(amount);
		$(select).parents(this.componentSelector).find('.select-container .amount span.currency').html(currency);
		$(select).parents(this.componentSelector).find('.select-container .account-alias span.cards').html(cards);
		$(select).parents(this.componentSelector).find('.select-container span.available-amount').html(available);

		this.hideDynamicElements($(select).parents(this.componentSelector), available, cards);
	},

	hideDynamicElements: function(selectComponent, available, cards) {

		$(selectComponent).find('.available').removeClass('hide');
		$(selectComponent).find('.account-alias .separator').removeClass('hide');
		$(selectComponent).find('.account-alias .cards').removeClass('hide');

		if(!available) {
			$(selectComponent).find('.available').addClass('hide');
		}

		if(!cards) {
			$(selectComponent).find('.account-alias .separator').addClass('hide');
			$(selectComponent).find('.account-alias .cards').addClass('hide');
		}

	}
});

var SelectCurrency = $.extend({/* SelectCurrency */}, BaseSelectComponent, {

	componentSelector: '.select-currency',

	domSelect:	'<div class="currency-selector select-container clearfix">' +
					'<div class="currency-flag">' +
						'<span>%%CURRENCY%%</span>' +
						'<img class="flag" src="%%FLAG%%" />' +
					'</div>' +
					'<div class="dropdown"><i class="icon-down-open-big"></i></div>' +
				'</div>',

	domSelectOption: '<div class="select-option-row %%HIDE%%" data-option-index="%%INDEX%%" data-option-value="%%VALUE%%">' +
						'<img class="flag" src="%%FLAG%%" />' +
						'<span>%%CURRENCY%%</span>' +
					 '</div>',

	appendSelectInfo: function(element) {
		var divToPrepend = this.domSelect.replace('%%CURRENCY%%', $(element).find('select').find(':selected').text())
										 .replace('%%FLAG%%', $(element).find('select').find(':selected').attr('data-flag-img'));

		$(element).append(divToPrepend);
	},

	createSelectOptions: function(element) {

		$(element).append(this.domSelectOptionContainer);

		$(element).find('select option').each((function(index, option) {

			var textOption = this.domSelectOption.replace('%%CURRENCY%%', this.getAttribute($(option).text()))
												 .replace('%%VALUE%%', this.getAttribute($(option).text()))
												 .replace('%%FLAG%%', this.getAttribute($(option).attr('data-flag-img')))
												 .replace('%%HIDE%%', $(option).is(':disabled') ? 'hide' : '')
												 .replace('%%INDEX%%', index);

			$(option).parents(this.componentSelector).find('.select-options-container > div').append(textOption);

		}).bind(this));

		this.disableOtherSelectCurrencyOption($(element).find('select'));
	},

	changeSelectedItem: function(select, noUpdateInputAmount) {
		var selectedItemText = $(select).find(':selected').text();
		var flag = $(select).find(':selected').attr('data-flag-img');

		$(select).parents(this.componentSelector).find('.currency-flag span').html(selectedItemText);
		$(select).parents(this.componentSelector).find('.currency-flag img').attr('src', flag);

		if (!noUpdateInputAmount) {
			this.inputAmountUpdate(select);
		}
		this.disableOtherSelectCurrencyOption(select);
	},

	disableOtherSelectCurrencyOption: function(select) {

		// Connection with other select currencies
		if ($(select).attr('data-connected-to') && !$(select).hasClass('disabled-connection')) {

			var selectToDisableCurrencyId = $(select).attr('data-connected-to');
			var selectedCurrencyValue = $(select).find(':selected').text();

			$('#' + selectToDisableCurrencyId).find('option').attr('disabled', false);
			$('#' + selectToDisableCurrencyId).find('option[value=' + selectedCurrencyValue + ']').attr('disabled', true);

			// Select option hiding
			$('#' + selectToDisableCurrencyId).parents(this.componentSelector).find('.select-option-row').removeClass('hide');
			$('#' + selectToDisableCurrencyId).parents(this.componentSelector).find('.select-option-row[data-option-value=' + selectedCurrencyValue + ']').addClass('hide');

		} else if ($(select).hasClass('disabled-connection')) {

			var selectToDisableCurrencyId = $(select).attr('data-connected-to');

			$('#' + selectToDisableCurrencyId).find('option').attr('disabled', false);
			$('#' + selectToDisableCurrencyId).parents(this.componentSelector).find('.select-option-row').removeClass('hide');
		}
	},

	inputAmountUpdate: function(select) {

		// Connection with input-amount
		if ($(select).parents('.input-amount').length) {

			var $input = $(select).parents('.input-amount').find('input');

			if ($(select).val() === 'JPY') {
				$input.addClass('js-no-decimals');
				InputAmount.removeDecimals($input);
			} else {
				$input.removeClass('js-no-decimals');
				if ($input.val() != '') {
					var value = InputAmount.thousandsTreatment($input.val(), true);
					$input.val(value);
				}
			}
		}
	}
});

var SelectPortfolioManaged = $.extend({/* SelectPortfolioManaged */}, BaseSelectComponent, {

	componentSelector: '.select-portfolio-managed',

	domSelect:	'<div class="select-container">' +
					'<div class="select-content">' +
						'<div class="select-text-container">' +
							'<span class="select-text">%%TEXT%%</span>' + '<i class="icon-down-open-big"></i>' +
						'</div>' +
					'</div>' +
				'</div>',

	domSelectOption: '<div class="select-option-row" data-option-index="%%INDEX%%">' +
						'%%TEXT%%' +
					 '</div>',

	changeSelectedItem: function(select) {
		var selectedItemText = $(select).find(":selected").text();

		$(select).parents(this.componentSelector).find('.select-content .select-text').html(selectedItemText);
	}
});

var SelectPortfolio = $.extend({/* SelectPortfolio */}, BaseSelectComponent, {

	componentSelector: '.select-portfolio',

	domSelectOption: '<div class="select-option-row box-cuentas" data-option-index="%%INDEX%%">' +
						'<div class="select-option-alias">%%ALIAS%%</div>' +
						'<div class="select-option-amount">%%AMOUNT%% <span class="currency">%%CURRENCY%%</span></div>' +
					 '</div>',

	changeSelectedItem: function(select) {
		var alias = $(select).find(":selected").attr('data-alias');
		var amount = $(select).find(":selected").attr('data-amount');
		var currency = $(select).find(":selected").attr('data-currency');

		$(select).parents(this.componentSelector).parent().find('.alias-portfolio').html(alias);
		var $icon = $(select).parents(this.componentSelector).parent().find('.total-big i');
		$(select).parents(this.componentSelector).parent().find('.total-big').html(amount + ' <span>' + currency + '</span>' + $icon[0].outerHTML);

		if($(select).find(":selected").val()) {
			$(select).parents(this.componentSelector).siblings('a.global-position').removeClass('hide');
		} else {
			$(select).parents(this.componentSelector).siblings('a.global-position').addClass('hide');
		}
	},

	bindingEventsElement: function(index, element) {

		// If exists previous select data rendered, remove
		if($(element).hasClass('init-select-account-overview')) {
			$(element).find('.select-options-container').remove();
		}

		this.appendSelectInfo(element);

		// Show custom select options for desktop mode
		if(device.desktop()) {
			this.createSelectOptions(element);
			this.bindingClickEvents(element);
		} else {
			$(element).find('select').css('z-index', '5');
		}

		this.bindingConnection(element);
		this.bindingChangeEvent(element);

		$(element).addClass('init-select-account-overview');

		$(element).find('.select-container, .select-option-row').click((function(event) {

			var $target = $(event.currentTarget).parents(this.componentSelector);
			var iconClass = $target.find('i').attr('class');

			if(iconClass == 'icon-down-open'){
				$target.find('i').removeClass('icon-down-open').addClass('icon-up-open');
			}else{
				$target.find('i').removeClass('icon-up-open').addClass('icon-down-open');
			}

		}).bind(this));

		// Remove custom scrollbar
		//$(element).find('.mCustomScrollbar').removeClass('mCustomScrollbar');

		// Add class 'cuentas' in container
		$(element).find('.mCustomScrollbar').addClass('cuentas');
	}
});

var SelectSimple = $.extend({/* SelectSimple */}, BaseComponent, {

	componentSelector: '.select-simple',

	domSelect: '<div class="select-container"><span class="ellipsis%%CLASS%%">%%TEXT%%</span><i class="icon-down-open-big"></i></div>',

	init: function() {
		// Events binding for each row element
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		$(element).find('select').change((function(event) {
			this.changeSelectedItem(event.currentTarget);
			$(event.currentTarget).focus();
		}).bind(this));

		this.appendSelectInfo(element);
	},

	appendSelectInfo: function(element) {
		// If exists previous select data rendered, remove
		$(element).find('.select-container').remove();

		var selectedItemText = $(element).find('select').find(":selected").text();
		var divToPrepend = this.domSelect.replace('%%TEXT%%', selectedItemText).replace('%%CLASS%%', this.isDefaultValue(element, true) ? ' grey-text' : '');

		$(element).append(divToPrepend);
	},

	changeSelectedItem: function(select) {

		if (this.isDefaultValue(select)) {
			$(select).siblings('.select-container').find('span').addClass('grey-text');
		} else {
			$(select).siblings('.select-container').find('span').removeClass('grey-text');
		}

		$(select).parents(this.componentSelector).find('.select-container span').html($(select).find(":selected").text());
	},

	isDefaultValue: function(select, isComponentSelect) {

		if (isComponentSelect) {
			return $(select).find('select').val() == '';
		} else {
			return $(select).val() == '';
		}
	}
});

var SelectSingle = $.extend({/* SelectSingle */}, BaseSelectComponent, {

	componentSelector: '.select-single',

	domSelect:	'<div class="select-container">' +
					'<div class="select-content">' +
						'<div class="select-text-container">' +
							'<div class="label">%%LABEL%%</div>' +
							'<div class="select-text">%%TEXT%%</div>' +
						'</div>' +
					'</div>' +
					'<div class="select-dropdown"><i class="icon-down-open-big"></i></div>' +
				'</div>',

	domSelectOption: '<div class="select-option-row" data-option-index="%%INDEX%%">' +
						'%%TEXT%%' +
					 '</div>',

	changeSelectedItem: function(select) {
		var selectedItemText = $(select).find(":selected").text();

		$(select).parents(this.componentSelector).find('.select-content .select-text').html(selectedItemText);
	}
});

var ShowMore = $.extend({/* ShowMore */}, BaseComponent, {

	componentSelector: '.related-operations-buttons, .operations-list, .search-results',

	elementSelector: '.button-container, .operation-preferred-element, .search-result-item',

	init: function() {
		// Events binding for each row
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		this.showMoreActionBinding(element);
	},

	/* SHOW MORE ELEMENTS LOGIC ***************************************************/

	showMoreActionParameters: {
		triggerSelector: '.show-more',
	},

	showMoreActionBinding: function(element) {

		if ($(element).siblings('.show-more').length > 0) {

			$(element).siblings('.show-more').click((function(event) {
				event.preventDefault();
				event.stopPropagation();
				this.showMore($(event.currentTarget).siblings(this.componentSelector));
				this.scrollToTop($(event.currentTarget).siblings(this.componentSelector));
			}).bind(this));

			this.showMore(element);
		}
	},

	showMore: function(element) {

		var numElements = $(element).find(this.elementSelector).length;
		var numElementsToShow = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-num-elements');
		var showText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-show-text');
		var hideText = $(element).siblings(this.showMoreActionParameters.triggerSelector).attr('data-hide-text');

		$(element).find(this.elementSelector).slice(numElementsToShow, numElements).each((function(index, btn){
			$(btn).toggleClass('hide');
		}).bind(this));

		// If there are buttons to show
		if ($(element).find('.hide').length > 0 || numElements == numElementsToShow) {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(showText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-up-open').addClass('icon-down-open')
		} else {
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('span').html(hideText);
			$(element).siblings(this.showMoreActionParameters.triggerSelector).find('i').removeClass('icon-down-open').addClass('icon-up-open');
		}
	},

	scrollToTop: function(element) {

		if( $(element).find('.hide').length && $(element).length ) {
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 500);
		}
	}
});

var ToggleHide = $.extend({/* ToggleHide */}, BaseComponent, {

	componentSelector: '.toggle-hide',

	init: function() {
		$(this.componentSelector).each(this.bindingEventsElement.bind(this));
	},

	bindingEventsElement: function(index, element) {
		$(element).click((function(event) {
			event.preventDefault();
			var target = $(event.currentTarget).attr('data-toggle-target');
			$(target).toggleClass('hide');
		}).bind(this));

		if ($(element).attr('data-hide-onload')) {
			var target = $(element).attr('data-hide-onload');
			$(target).addClass('hide');
		}
	}
});

var ToggleSlide = $.extend({/* ToggleSlide */}, BaseComponent, {

	componentSelector: '.toggle-slide',

	offsetPos: {
		'desktop': 80,
		'tablet': 0,
		'mobile': 0
	},	

	init: function() {		
		this.slideToggleBinding($(this.componentSelector));
	},

	// Sets the properly slided panel position
	setSlidedPanelPos: function() {

		var width = window.innerWidth;

		if (width > 1200) {
			return this.offsetPos['desktop']
		} else if (width >= 767 && width <= 1200) {
			return this.offsetPos['tablet']
		} else{
			return this.offsetPos['mobile']
		}
	},

	slideToggleBinding: function(element) {
		$(element).css('left', -($(window).width() - this.setSlidedPanelPos())+'px');

		$(element).find('.slide-button').click((function(event) {
			event.preventDefault();
			this.slideToggle(event.currentTarget);
		}).bind(this));
	},

	slideToggle: function(element) {
		if ($(element).parents('.toggle-slide').hasClass('dragged')) {
			$(element).parents('.toggle-slide').animate({
					left: -($(window).width() - this.setSlidedPanelPos())+'px'
	            }, 500, function() {
	            	$(element).parents('.toggle-slide').removeClass('dragged');
	            	$(element).find('i.icon-slide').toggleClass('active');
			});
		} else {
			$(element).parents('.toggle-slide').animate({
	                left: 0
	            }, 500, function() {
	            	$(element).parents('.toggle-slide').addClass('dragged');
	            	$(element).find('i.icon-slide').toggleClass('active');
			});
		}		
	}
});

/* ==================================================
  Wallet cards
================================================== */

var WalletCards = $.extend({/* WalletCards */}, BaseComponent, {

	componentSelector: '.wallet-cards',
	swiper: {},
	slideSpeed: 500,
	numCards: 0,
	resizeId: 0,

	numSlidesPerWidth: {
		'desktop': 3,
		'tablet': 2,
		'mobile': 1
	},

	widthSpaceBetween: {
		'desktop': 40,
		'tablet': 20,
		'mobile': 0
	},

	// Init swiper and init again when window resizing
	init: function() {
		if($(this.componentSelector).length) {

			this.numCards = $(this.componentSelector).find('.swiper-slide').length;

			this.setWidthForNumCards();
			this.initSwiper();

			$(window).resize((function(event) {
				clearTimeout(this.resizeId);
				this.resizeId = setTimeout(this.resizeEvent.bind(this), 10);
			}).bind(this));


			// Binding click event on selectable card wallet
			if ($(this.componentSelector).hasClass('selectable')) {

				$(this.componentSelector).find('.wallet-item-content').click((function(event) {
					event.preventDefault();
					event.stopPropagation();
					$(this.componentSelector).find('.wallet-item-content').removeClass('selected');
					$(event.currentTarget).addClass('selected');
				}).bind(this));

				// Show selected card
				if ($(this.componentSelector).find('.wallet-item-content').hasClass('selected')) {
					var slideIndex = $(this.componentSelector).find('.wallet-item-content.selected').closest('.swiper-slide').index();
					this.swiper.slideTo(slideIndex);
				}
			}
		}
	},

	resizeEvent: function() {
		this.setWidthForNumCards();
		this.initSwiper();
	},

	// Init swiper
	initSwiper: function() {
		this.swiper = new Swiper(this.componentSelector + ' .wallet-swiper-container', {
			speed: this.slideSpeed,
			slidesPerView: this.getSlidesPerWidth(),
			nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
        	spaceBetween: this.getSpaceBetweenSlides()
		});
	},


	// Logic of number slides depending on window width
	getSlidesPerWidth: function() {

		var width = window.innerWidth;

		if (width > 1200) {
			return ( (this.numCards >= this.numSlidesPerWidth['desktop']) ? this.numSlidesPerWidth['desktop'] : this.numCards )
		} else if (width >= 767 && width <= 1200) {
			return ( (this.numCards >= this.numSlidesPerWidth['tablet']) ? this.numSlidesPerWidth['tablet'] : this.numCards )
		} else {
			return ( (this.numCards >= this.numSlidesPerWidth['mobile']) ? this.numSlidesPerWidth['mobile'] : this.numCards )
		}

	},

	// Logic of width between slides depending on window width
	getSpaceBetweenSlides: function() {

		var width = window.innerWidth;

		if (width > 1200) {
			return this.widthSpaceBetween['desktop']
		} else if (width >= 767 && width <= 1200) {
			return this.widthSpaceBetween['tablet']
		} else{
			return this.widthSpaceBetween['mobile']
		}
	},

	// Sets the properly swiper container width
	setWidthForNumCards: function() {
		var width = window.innerWidth;

		$(this.componentSelector).removeClass('twoCardsWidth');
		$(this.componentSelector).removeClass('oneCardWidth');
		$(this.componentSelector).find('.swiper-navigation-button').removeClass('hide');

		// Sets the corresponding width depending number of cards
		if (this.numCards == 2 && width > 1200) {
			$(this.componentSelector).addClass('twoCardsWidth');
		}

		if (this.numCards == 1 && width > 768) {
			$(this.componentSelector).addClass('oneCardWidth');
		}

		// Hide navigation arrows
		if (this.numCards == 2 && width >= 768) {
			$(this.componentSelector).find('.swiper-navigation-button').addClass('hide');
		}

		if (this.numCards == 1) {
			$(this.componentSelector).find('.swiper-navigation-button').addClass('hide');
		}
	}
});

var WebcamComponent = $.extend({/* WebcamComponent */}, BaseComponent, {

	componentSelector: '#camera-container',
	currentPhoto: null,

	init: function() {

		if ($(this.componentSelector).length) {

			if(Webcam.userMedia || Webcam.detectFlash()) {

				Webcam.on('error', this.onErrorMethod.bind(this));

				Webcam.set({
					// live preview size
					width: 320,
					height: 240,

					// device capture size
					dest_width: 320,
					dest_height: 240,

					// final cropped size
					crop_width: 320,
					crop_height: 240,

					// format and quality
					image_format: 'jpeg',
					jpeg_quality: 100,

					// mirror mode
					flip_horiz: true
				});

				this.bindEvents();
			}
		}
	},

	bindEvents: function() {
		$('.take-snapshot').click(this.takePhoto.bind(this));
		$('.start-camera').click(this.startCamera.bind(this));
		$('.shutdown-camera').click(this.shutdownCamera.bind(this));
		$('.set-camera-image').click(this.setImageTo.bind(this));
	},

	takePhoto: function(event) {
		// take snapshot and get image data
		Webcam.snap((function(data_uri) {

			this.currentPhoto = data_uri;

			$('.photo-result').html('');
			$('.photo-result').append('<img src="' + data_uri + '"/>');

			this.shutdownCamera();

		}).bind(this));
	},

	startCamera: function() {
		Webcam.attach( this.componentSelector );
	},

	shutdownCamera: function() {
		if (Webcam.live) {
			Webcam.reset();
		}
	},

	getPhotoURI: function () {
		return this.currentPhoto;
	},

	onErrorMethod: function(err) {
		console.log('There was an error loading Webcam', err);
	},

	setImageTo: function(event) {
		var selector = $(event.currentTarget).attr('data-photo-target');
		$(selector).css('background-image', "url('" + this.getPhotoURI() + "')");
	}
});

var AccountDetailsView = $.extend({/* AccountDetailsView */}, BaseSwiperTabsView, {

	viewSelector: '#account-details-view',

	init: function() {
		this.initSwiper();
		this.bindEvents();
		SelectAccountOverview.init();
	}
});

var CardDetailsView = $.extend({/* CardDetailsView */}, BaseSwiperTabsView, {

	viewSelector: '#card-details-view'
});

var FaqsView = $.extend({/* FaqsView */}, BaseView, {

	viewSelector: '#faqs-view',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		$(this.viewSelector).find('.answer-no-valid-form').submit((function(event) {
			event.preventDefault();
			if ($(event.currentTarget).valid()) {
				$(event.currentTarget).parent().addClass('hide');
				$(event.currentTarget).parent().next('.succes-box').removeClass('hide');
			}
		}).bind(this));

	}

});

var HomeView = $.extend({/* HomeView */}, BaseView, {

	viewSelector: '#home-view',

	accountMainGraph: true,

	init: function() {
		this.bindEvents();
		this.sortCustomizationItem();
	},

	bindEvents: function() {
		// If the Main Graphic Without Permissions don't exists then it can use the JS's events.
		//if($('#droppable-graphic-without-permissions').length <= 0){
			// Click event binding to update main graphic
			$(this.viewSelector).find('.icon-graphic').click((function(event) {
				if ($(event.currentTarget).parent().find('p[data-link]').length) {
					this.showMainGraphic($(event.currentTarget).parent().find('p[data-link]'));
				}
			}).bind(this));

			// Click event binding to update main graphic
			$(this.viewSelector).find('.show-more-tiny-graphics').click((function(event) {
				this.showTinyGraphics(event.currentTarget);
			}).bind(this));
		//}

		// Click event binding for active/desactive home customization items
		$('.home-customization-menu').find('.icon-ver').click((function(event) {
			this.toggleActiveHomeCustomizationItem(event.currentTarget);
		}).bind(this));
		

	},

	showMainGraphic: function(element) {
		$(this.viewSelector).find('.main-graphic > div').addClass('hide');
		$(this.viewSelector).find('.tiny-graphics .panel-cell').removeClass('hide');

		$(this.viewSelector).find('#' + $(element).attr('data-link')).removeClass('hide');
		$(element).parent().addClass('hide');

		// Resize graphics on show
		AccountGraphic.graphic ? AccountGraphic.graphic.resize() : '';
		SavingsGraphic.graphic ? SavingsGraphic.graphic.resize() : '';
		InvestmentsGraphic.graphic ? InvestmentsGraphic.graphic.resize() : '';
		FinancesGraphic.graphic ? FinancesGraphic.graphic.resize() : '';
	},

	showTinyGraphics: function(element) {
		if ($(element).hasClass('display')) {
			$(element).removeClass('display');
			$(element).find('i').removeClass('icon-up-open');
			$(element).find('i').addClass('icon-down-open');
			$(element).find('span').html($(element).attr('data-show-text'));
			$(this.viewSelector).find('.tiny-graphics').addClass('visible-lg-inline-block visible-md-inline-block');
		} else {
			$(element).addClass('display');
			$(element).find('i').addClass('icon-up-open');
			$(element).find('i').removeClass('icon-down-open');
			$(element).find('span').html($(element).attr('data-hide-text'));
			$(this.viewSelector).find('.tiny-graphics').removeClass('visible-lg-inline-block visible-md-inline-block');
		}
	},


	removeTinyGraphics: function(element){
		$(this.viewSelector).find('.no-contratado').detach();
	},

	// ACTIVE / DESACTIVE PAGE CUSTOMIZATION ITEMS
	toggleActiveHomeCustomizationItem: function(element) {
		$(element).parent('li').toggleClass('active');
	},

	// SORT PAGE CUSTOMIZATION ITEMS
	sortCustomizationItem: function(element) {

		this.removeTinyGraphics(element);

		$('#sortable').sortable({
			placeholder: 'sorting'
	    });

    	$('#sortable-preview').sortable().draggable({
    		revert: true
    	});

		$('#droppable-graphic').droppable({
			accept: '.draggable-preview',
			activeClass: 'droppable-style',
			drop: (function(event, ui) {
				this.showMainGraphic($(ui.draggable).find('p[data-link]'));
			}).bind(this)
		});

		$('#sortable').disableSelection();
		$('#sortable-preview').disableSelection();
	}

});

var InvestmentDetailsView = $.extend({/* InvestmentDetailsView */}, BaseSwiperTabsView, {

	viewSelector: '#investment-details-view',

	init: function() {
		this.initSwiper();
		this.bindEvents();
		SelectAccountOverview.init();
	}
});

var ManagerView = $.extend({/* ManagerView */}, BaseSwiperTabsView, {

	viewSelector: '#manager-view',

	questionIndex: 0,
	numQuestions: 0,
	submittedRateForm: false,

	init: function() {

		var contador = 0;
		var selectedFace = false;
		var nombreLista = "";
		var devuelta = 0;

		// Methods from BaseSwiperTabsView
		this.initSwiper();
		this.bindEvents();

		// Solicitar cita gestor form submit
		$(this.viewSelector).find('.solicitar-cita-gestor').submit((function(event) {
			event.preventDefault();
			if ($(event.currentTarget).valid()) {
				$(event.currentTarget).addClass('hide');
				$(event.currentTarget).parents('.container').next('.operation-success-container').removeClass('hide');
				this.scrollTop();
				this.updateSlideHeight();
			}
		}).bind(this));

		// Own Methods
		$('.rate-manager-trigger > p').click((function(event) {
			$(event.currentTarget).toggleClass('closed');
			$('.rate-form-container').toggleClass('hide');
		}).bind(this));

		// Hide error when click a face
		$(this.viewSelector).find('li').click((function(event) {
			$('.noSelected').addClass('hide');
		}).bind(this));

		// Rate submit form
		$('.rate-form').submit((function(event) {
			event.preventDefault();
			selectedFace = false;
			nombreLista = ".question-option ul#question-" + contador + " input:radio";
			$('.noSelected').addClass('hide');
			contador = this.submitQuestion(event, contador, selectedFace, nombreLista);
			contador++;
		}).bind(this));

		this.numQuestions = $('.rate-form-container .question').length;
	},

	submitQuestion: function(event, contador, selectedFace, nombreLista) {


		if ($(event.currentTarget).valid()) {

			$(nombreLista).each(function(){
				if($(this).is(":checked") == true){
					selectedFace = true;
				}
			});

			if((selectedFace) || (contador === (this.numQuestions))){
				if (this.submittedRateForm) {

					$('.rate-form-container').addClass('hide');
					this.scrollTop();
					contador--;
				} else {

					$('.question[data-index=' + this.questionIndex + ']').addClass('hide');
					this.questionIndex = this.questionIndex + 1;
					$('.question[data-index=' + this.questionIndex + ']').removeClass('hide');

					this.updateBarStatus();

					if (this.questionIndex === this.numQuestions) {
						$('.title-container').remove();
						$('.questions-container').remove();
						$('.question-button input').val($('.question-button input').attr('data-value-success'));
						$('.operation-success-container').removeClass('hide');
						this.submittedRateForm = true;
					}
				}
			}else{
				$('.noSelected').removeClass('hide');
				contador--;
			}
		}

		return contador;
	},

	updateBarStatus: function() {
		var width =  Math.round(( (this.questionIndex) / this.numQuestions ) * 100) + '%'
		$('.question-status-container .question-status').css('width', width);
	},

	scrollTop: function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	}
});

var OpinionSurveyView = $.extend({/* OpinionSurveyView */}, BaseSwiperTabsView, {

	viewSelector: '#opinion-survey-view',

	questionIndex: 0,
	numQuestions: 0,
	submittedRateForm: false,

	init: function() {

		// Rate submit form
		$(this.viewSelector).find('.rate-form').submit((function(event) {
			event.preventDefault();
			this.submitQuestion(event);
		}).bind(this));

		// Back function
		$(this.viewSelector).find('.back-btn').click((function(event) {
			event.preventDefault();
			this.backOption(event);
		}).bind(this));

		this.numQuestions = $('.rate-form-container .question').length;
	},

	submitQuestion: function(event) {

		if ($(event.currentTarget).valid()) {

			if (this.submittedRateForm) {

				$('.rate-form-container').addClass('hide');

			} else {

				if (this.questionIndex === 0) {
					$(this.viewSelector).find('.questions-button > div').removeClass('hide');
					var classOffset = $(this.viewSelector).find('.questions-button > [data-class-offset]').attr('data-class-offset');
					$(this.viewSelector).find('.questions-button > div').removeClass(classOffset);
				}

				$('.question[data-index=' + this.questionIndex + ']').addClass('hide');
				this.questionIndex = this.questionIndex + 1;
				$('.question[data-index=' + this.questionIndex + ']').removeClass('hide');

				this.updateBarStatus();

				if (this.questionIndex === this.numQuestions - 1) {
					$('.questions-button .submit-btn').val($('.questions-button .submit-btn').attr('data-value-success'));
				}

				if (this.questionIndex === this.numQuestions) {
					$('.title-container').remove();
					$('.questions-container').remove();
					$('.questions-button').remove();
					$('.operation-success-container').removeClass('hide');
					this.submittedRateForm = true;
				}
			}
		}
	},

	backOption: function(event) {

		if (this.questionIndex === this.numQuestions - 1) {
			$('.questions-button .submit-btn').val($('.questions-button .submit-btn').attr('data-value-default'));
		}

		$('.question[data-index=' + this.questionIndex + ']').addClass('hide');
		this.questionIndex = this.questionIndex - 1;
		$('.question[data-index=' + this.questionIndex + ']').removeClass('hide');

		this.updateBarStatus();

		if (this.questionIndex === 0) {
			$(this.viewSelector).find('.questions-button > div:first-child').addClass('hide');
			var classOffset = $(this.viewSelector).find('.questions-button > [data-class-offset]').attr('data-class-offset');
			$(this.viewSelector).find('.questions-button > div').addClass(classOffset);
		}
	},

	updateBarStatus: function() {
		var width =  Math.round(( (this.questionIndex) / this.numQuestions ) * 100) + '%'
		$('.question-status-container .question-status').css('width', width);
	}
});

var PersonalView = $.extend({/* PersonalView */}, BaseSwiperTabsView, {

	viewSelector: '#personal-view',
	panelSelector: '.panel-usuario',
	popupSendTriggerSelector: '.icon-send',

	updateSlideHeightSelectors: '.icon-cancel, .edit-action, .edit-form .btn-action',

	init: function() {
		// Methods from BaseSwiperTabsView
		this.initSwiper();
		this.bindEvents();

		$(this.panelSelector).find('.change-image-trigger, .change-image-close, .no-photo').click((function(event) {
			this.closePhotoAction();
		}).bind(this));

		$(this.viewSelector).find(this.updateSlideHeightSelectors).click((function(event) {
			this.updateSlideHeight();
		}).bind(this));

		$(this.viewSelector).find('.make-photo').click((function(event) {
			$(this.viewSelector).find('#all-options').addClass('hide');
			$(this.viewSelector).find('#make-photo').removeClass('hide');
		}).bind(this));

		$(this.viewSelector).find('.cancel-photo').click((function(event) {
			$(this.viewSelector).find('#all-options').removeClass('hide');
			$(this.viewSelector).find('#make-photo').addClass('hide');
		}).bind(this));

		$(this.viewSelector).find('.take-photo').click((function(event) {
			$(this.viewSelector).find('#make-photo').addClass('hide');
			$(this.viewSelector).find('#save-photo').removeClass('hide');
		}).bind(this));

		$(this.viewSelector).find('.save-photo').click((function(event) {
			$(this.viewSelector).find('.change-image-container').fadeToggle('fast');
			$(this.viewSelector).find('#all-options').removeClass('hide');
			$(this.viewSelector).find('#save-photo').addClass('hide');
			$(this.panelSelector).find('.panel-usuario-img').addClass('with-image');
		}).bind(this));

		$(this.viewSelector).find('.repeat-photo').click((function(event) {
			$(this.viewSelector).find('#make-photo').removeClass('hide');
			$(this.viewSelector).find('#save-photo').addClass('hide');
		}).bind(this));

		$(this.viewSelector).find('.no-photo').click((function(event) {
			//$(this.panelSelector).find('.panel-usuario-img').removeClass('with-image').attr('style',' ');
			$(this.panelSelector).find('.panel-usuario-img').removeClass('with-image').css('background-image','url("images/usuarios/usuarioSinFotoA.png")');
		}).bind(this));

		if(!Webcam.userMedia && !Webcam.detectFlash()) {
			$($(this.viewSelector).find('.make-photo').prev()).addClass('col-xs-offset-2');
			$(this.viewSelector).find('.make-photo').remove();
		}

		$(this.viewSelector).find('input[type=file]').change(function(event) {

			if (this.files && this.files[0]) {

				if (typeof FileReader !== 'undefined') {

					var reader = new FileReader();

					reader.onload = function (e) {
						PersonalView.setProfilePreviewImage(e.target.result);
						PersonalView.closePhotoAction();
					}

					reader.readAsDataURL(this.files[0]);

				} else {

					PersonalView.closePhotoAction();
				}

			} else {

				PersonalView.closePhotoAction();
			}
		});
	},

	closePhotoAction: function () {
		$(this.viewSelector).find('.change-image-container').fadeToggle('fast');
		$(this.viewSelector).find('#make-photo, #save-photo').addClass('hide');
		$(this.viewSelector).find('#all-options').removeClass('hide');
	},

	setProfilePreviewImage: function(url) {
		$(this.viewSelector).find('.panel-usuario-img').css('background-image', "url('" + url + "')");
		$(this.viewSelector).find('.panel-usuario-img').addClass('with-image');
	}
});

var SecuritiesBuyAndSell = $.extend({/* SecuritiesBuyAndSell */}, BaseView, {

	viewSelector: '#securities-operation',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		// Click event binding for end date checkbox
		$(this.viewSelector).find('input#without-end-date').change(this.withoutEndDateLogic.bind(this));
		$(this.viewSelector).find('input#without-end-date + label').click(this.withoutEndDateLogic.bind(this));

		// Show / Hide Fund detail info
		$(this.viewSelector).find('#security-type-select').change((function(event) {

			this.showDetailSecurityLink($(event.currentTarget).find(":selected").val() === 'securities-option' && $('#security-input').val() !== '');

			if ($(event.currentTarget).find(":selected").val() === 'securities-option') {
				$('#security-input').trigger('input');
				$('#security-input').blur();
			}

			if ($(event.currentTarget).find(":selected").val() === 'funds-option') {
				$('#fund-select').change();
			}
		}).bind(this));

		// Show / Hide Fund detail info
		$(this.viewSelector).find('#security-input').on('input', (function(event) {
			this.showDetailSecurityLink(!($(event.currentTarget).val() === ''));
		}).bind(this));

		$(this.viewSelector).find('#securities-mode-select').change((function(event) {

			$('.securities-estimated-value').addClass('hide');

			var selectedOption = $(event.currentTarget).val();

			if (selectedOption === 'amount-option' && $('[name=amount-estimated]').val()) {
				$('.amount-estimated').removeClass('hide');
			}

			if (selectedOption === 'titles-option' && $('[name=num-titles-estimated]').val()) {
				$('.num-titles-estimated').removeClass('hide');
			}

		}).bind(this));

		// Show / Hide Fund detail info
		$(this.viewSelector).find('#funds-type-select').change((function(event) {
			this.showDetailFundLink($(event.currentTarget).find(":selected").val() === 'funds-option' && $('#fund-select').find(":selected").val() !== '');
		}).bind(this));

		// Show / Hide Fund detail info
		$(this.viewSelector).find('#fund-select').change((function(event) {
			this.showDetailFundLink(!($(event.currentTarget).find(":selected").val() === ''));
		}).bind(this));

		$(this.viewSelector).find('#funds-mode-select').change((function(event) {

			$('.funds-estimated-value').addClass('hide');

			var selectedOption = $(event.currentTarget).val();

			if (selectedOption === 'amount-funds-option' && $('[name=amount-funds-estimated]').val()) {
				$('.amount-funds-estimated').removeClass('hide');
			}

			if (selectedOption === 'participations-option' && $('[name=participations-estimated]').val()) {
				$('.participations-estimated').removeClass('hide');
			}

		}).bind(this));

		$('[name=amount-estimated], [name=num-titles-estimated], [name=participations-estimated], [name=amount-funds-estimated]').on('input', (function(event) {

			var nameClass = $(event.currentTarget).attr('name');

			if ($(event.currentTarget).val()) {
				$('.' + nameClass).removeClass('hide');
			} else {
				$('.' + nameClass).addClass('hide');
			}

		}).bind(this));
	},

	withoutEndDateLogic: function(event) {
		$(this.viewSelector).find('input#order-end-date')[0].disabled = !$(this.viewSelector).find('input#order-end-date')[0].disabled;
	},

	showDetailFundLink: function(show) {
		if (show) {
			$('#funds-detail-link').removeClass('hide');
		} else {
			$('#funds-detail-link').addClass('hide');
		}
	},

	showDetailSecurityLink: function(show) {
		if (show) {
			$('#security-detail-link').removeClass('hide');
		} else {
			$('#security-detail-link').addClass('hide');
		}
	},
})

;

var TransferView = $.extend({/* TransferView */}, BaseView, {

	viewSelector: '#transfer-operation',

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {

		// Click event binding for currencies checkbox
		$(this.viewSelector).find('input#two-currencies').change(this.currenciesCheckboxLogic.bind(this));
		$(this.viewSelector).find('input#two-currencies + label').click(this.currenciesCheckboxLogic.bind(this));

		// Click event binding for transfer end date checkbox
		$(this.viewSelector).find('input#without-end-date').change(this.withoutEndDateLogic.bind(this));
		$(this.viewSelector).find('input#without-end-date + label').click(this.withoutEndDateLogic.bind(this));

		// Show / Hide IBAN / SWIFT form container
		$(this.viewSelector).find('#unknown-iban, #unknown-swift').click((function(event) {
			this.toggleIBANorSWIFT(event.currentTarget);
			return false;
		}).bind(this));

		// On change country
		$(this.viewSelector).find('#country-select').change((function(event) {
			this.nationalOrInternationalTransferOptions(event.currentTarget);
		}).bind(this));

		// Focus on iban or swift inputs to hide corresponding form
		$(this.viewSelector).find('#input-iban, #input-swift, #input-iban + .icon-info, #input-swift + .icon-info').click((function(event) {

			if ($(event.currentTarget).attr('id') == 'input-swift' || $(event.currentTarget).hasClass('input-swift')) {
				$('.unknown-swift-form-container').removeClass('hide');
				this.toggleIBANorSWIFT($('#unknown-swift'));
			} else {
				$('.unknown-iban-form-container').removeClass('hide');
				this.toggleIBANorSWIFT($('#unknown-iban'));
			}

		}).bind(this));
	},

	toggleIBANorSWIFT: function(element) {

		var identifier = $(element).attr('id');
		var elementSelector = '.' + identifier + '-form-container';

		if (identifier == 'unknown-iban') {

			if($(elementSelector).hasClass('hide')) {
				$('#save-beneficiary').parent().addClass('hide');
				$(elementSelector).removeClass('hide');
				$(element).html($(element).attr('data-text-opened'));
				$('#input-swift').prop('required', true);
				$('#input-iban').prop('required', false);
				$('#input-iban').parent().css('opacity', 0.5);
				$('.container-fullwidth').addClass('x-small-margin-bottom');
			} else {
				$('#save-beneficiary').parent().removeClass('hide');
				$(elementSelector).addClass('hide');
				$(element).html($(element).attr('data-text-closed'));
				$('.unknown-swift-form-container').addClass('hide');
				$('#unknown-swift').html($('#unknown-swift').attr('data-text-closed'));
				$('#input-iban').prop('required', true);
				$('#input-iban').parent().css('opacity', 1);
				$('.container-fullwidth').removeClass('x-small-margin-bottom');
			}

		} else {

			if($(elementSelector).hasClass('hide')) {
				$('#input-swift').prop('required', false);
				$('#input-swift').parent().css('opacity', 0.5);
				$(elementSelector).removeClass('hide');
				$(element).html($(element).attr('data-text-opened'));
			} else {
				$('#input-swift').prop('required', true);
				$('#input-swift').parent().css('opacity', 1);
				$(elementSelector).addClass('hide');
				$(element).html($(element).attr('data-text-closed'));
			}
		}
	},

	nationalOrInternationalTransferOptions: function(select) {
		if ($(select).find(":selected").val() == 'AD') {
			$(this.viewSelector).find('.international-transfer-element').addClass('hide');
		} else {
			$(this.viewSelector).find('.international-transfer-element').removeClass('hide');
		}
	},

	currenciesCheckboxLogic: function(event) {
		$(this.viewSelector).find('.origin-amount').toggleClass('hide');
		$(this.viewSelector).find('#currency-amount, #currency-amount-dest').toggleClass('disabled-connection');
		$(this.viewSelector).find('#currency-amount, #currency-amount-dest').each((function(index, select) {
			SelectCurrency.changeSelectedItem(select, true);
		}).bind(this));
	},

	withoutEndDateLogic: function(event) {
		$(this.viewSelector).find('input#transfer-end-date')[0].disabled = !$(this.viewSelector).find('input#transfer-end-date')[0].disabled;
	}
})

;

var FrontMainController = {

	currentView: {},
	views: {},
	components: {},
	slidebars: function() {},

	// Creates the list of js views objects
	initViewsList: function() {
		this.views = {
			'account-details-view': AccountDetailsView, 		// cuentas-detalle.html
			'card-details-view': CardDetailsView,				// tarjetas-detalle.html
			'home-view': HomeView, 								// home.html
			'manager-view': ManagerView,						// datos-gestor.html
			'transfer-operation': TransferView,					// transferencia-[formulario, resumen, confirmacion].html
			'faqs-view': FaqsView,								// preguntas-frecuentes.html
			'personal-view': PersonalView,						// zona-personal.html
			'opinion-survey-view': OpinionSurveyView, 			// encuesta-de-opinion.html
			'investment-details-view': InvestmentDetailsView, 	// inversion-detalle.html
			'securities-operation': SecuritiesBuyAndSell		// [compra, venta]-valores-formulario.html
		}
	},

	// Creates the list of js components objects
	initComponentsList: function() {
		this.components = [
			ListAccounts,
			ListElements,
			ListActivities,
			LoadingLayer,
			ShowMore,
			CheckboxComponent,
			InputAmount,
			InputTel,
			InputWithDefaultValue,
			InputAutoComplete,
			SelectSimple,
			SelectSingle,
			SelectAccount,
			SelectAccountWithCurrencies,
			SelectCardContract,
			SelectCurrency,
			SelectPortfolio,
			SelectPortfolioManaged,
			ButtonsOptionList,
			ConfirmationKey,
			DateComponent,
			DateRangeComponent,
			AccountGraphic,
			SavingsGraphic,
			InvestmentsGraphic,
			DonutGraphicWithListLegend,
			ShowHideGraphic,
			SpentAvailableGraphic,
			//FormComponent,
			FormComponent,
			GeneralValidation,
			PasswordValidation,
			WalletCards,
			MapsComponent,
			NotificationLayer,
			ToggleHide,
			ToggleSlide,
			IconSelectable,
			CloseableContainer,
			PopupTrigger,
			CollapsableItems,
			NewVirtualPortfolio,
			WebcamComponent,
			ChatModule
		]
	},

	// Initialization on document ready
	init: function() {
		this.initViewsList();
		this.initComponentsList();

		Footer.init();
		Menu.init();

		this.initComponents();
		this.initView();

		LoadingLayer.show();

		this.initPlugins();

		this.endJSInit();
	},

	// initialize the corresponding js view logic if exists
	initView: function() {

		var viewIdentifier = $('.main-content').attr('id');

		if (!$.isEmptyObject(this.currentView)) {
			this.currentView.unbindAll();
		}

		if (typeof this.views[viewIdentifier] !== "undefined") {
			this.currentView = this.views[viewIdentifier];
			// Initialize the corresponding view js logic
			this.views[viewIdentifier].init();
		} else {
			this.currentView = {};
		}
	},

	// Initialize components for the current view
	initComponents: function() {
		$(this.components).each(function(index, component) {
			component.init();
		});
	},

	// Special initializations for plugins
	initPlugins: function() {
		// Placeholder plugin for IE9 polyfill
		$('input, textarea').placeholder();
		// Slidebars init
		this.slidebars = $.slidebars;
		$.slidebars();
	},

	// Special reset for plugins
	resetPlugins: function() {
		this.resetSlidebars();
	},


	beforeRenderAction: function() {

		// Unbind all specific view events binding if exists js for the current view
		if (!$.isEmptyObject(this.currentView)) {
			this.currentView.unbindAll();
			this.currentView = {};
		} else {
			// Unbind all components events
			$(this.components).each(function(index, component) {
				component.unbindAll();
			});
		}
	},

	afterRenderAction: function() {
		this.initComponents();
		this.initView();
		this.resetPlugins();
	},

	endJSInit: function () {
		setTimeout(function() {
			$('.wrapper-page-content, .wrapper-header-content').removeClass('visibility-hidden');
			LoadingLayer.hide();
		}, 0);
	},

	resetSlidebars: function() {
		$('html').removeClass('sb-init');
		$.slidebars = this.slidebars;
		$.slidebars();
	}
}
//# sourceMappingURL=main.js.map