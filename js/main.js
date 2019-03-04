(() => {
	console.log('working and ready to jam');

	function playDrumKitSound(event) {
		// debugger;
		// select the corresponding audio element and make it play
		// keyCode = keyCode number in console, the data being collected for the data-key
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		// debugging / error handling
		// if we don't have a matching audio element, then kill the function
		// ! is not an operator or a bang
		if (!audio) { return; } //return stops code execution

		// removes delay (makes audio restart on push of key)
		audio.currentTime = 0;
		audio.play();

		// grab the div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(event) {
		// debugger; // pauses function multiple times for every transition in CSS
		if (event.propertyName !== "transform") {
			return;
		} else {
			// remove the playing class here from the active div
			console.log('transition is done');

			// let keyClass = document.querySelectorAll('.key');
			// keyClass.forEach( playingClass =>
			// 	playingClass.classList.remove('playing'));

			// shorter way of selecting the div I want
			event.target.classList.remove('playing');
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	// Hey! scrolling uses the window (use in music mixer and final)
	window.addEventListener('keydown', playDrumKitSound);
})();