(() => {
	console.log('working and ready to jam');

	function playDrumKitSound(event) {
		// debugger;
		// select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		// debugging / error handling
		// if we don't have a matching audio element, then kill the function
		// ! is not an operator or a bang
		if (!audio) { return; } //return stops code execution

		// removes delay (makes audio start at 0 on push of key)
		audio.currentTime = 0;
		audio.play();
	}

	// Hey! scrolling uses the window (use in music mixer and final)
	window.addEventListener('keydown', playDrumKitSound);
})();