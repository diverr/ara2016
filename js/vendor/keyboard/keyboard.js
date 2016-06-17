$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;
		//value = $write.val();

	$('#keyboard li').click(function(){
		var $value = $write.val();
		var $this = $(this);
		var character = $this.html(); // If it's a lowercase letter, nothing happens to this variable


		// if press Delete key
		if ($this.hasClass('delete')) {
				$write.val($value.substr(0, $value.length - 1));
				var $valorFinal = $write.val();

		}else{ // any other key


			// Shift keys
			if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
				$('.letter').toggleClass('uppercase');
				$('.symbol span').toggle();

				shift = (shift === true) ? false : true;
				capslock = false;
				return false;
			}

			// Caps lock
			if ($this.hasClass('capslock')) {
				$('.letter').toggleClass('uppercase');
				capslock = true;
				return false;
			}


			// Special characters
			if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
			if ($this.hasClass('space')) character = ' ';
			if ($this.hasClass('tab')) character = "\t";
			if ($this.hasClass('return')) character = "\n";

			// Uppercase letter
			if ($this.hasClass('uppercase')) character = character.toUpperCase();

			// Remove shift once a key is clicked.
			if (shift === true) {
				$('.symbol span').toggle();
				if (capslock === false) $('.letter').toggleClass('uppercase');

				shift = false;
			}

			// Add the character
			$write.val($value + character);
			var $valorFinal = $write.val();
		}
	});
});