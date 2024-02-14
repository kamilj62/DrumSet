// Drum set
var drumSet = document.querySelector('.set');

// Add a 'click' event listener to the drum set section
drumSet.addEventListener('click', function (event) {
	if (event.target.matches('button')) {
		var letterClicked = event.target.textContent;
		// Pass the letter off to the playSound function
		playSound(letterClicked);
		// Pass the letter off to the animateBtn function
		animateBtn(letterClicked);
	}
});

// Add a 'keypress' event listener
document.addEventListener('keypress', function (event) {
	var keyPressed = event.key;
	// Pass the letter off to the playSound function
	playSound(keyPressed);
	// Pass the letter off to the animateBtn function
	animateBtn(keyPressed);
});

// Function to play a sound based on a letter clicked or pressed
function playSound(letter) {
	var sound;
	switch (letter) {
		case 'a':
			sound = new Audio('./assets/sounds/tom-1.mp3');
			break;
		case 's':
			sound = new Audio('./assets/sounds/tom-2.mp3');
			break;
		case 'd':
			sound = new Audio('./assets/sounds/tom-3.mp3');
			break;
		case 'f':
			sound = new Audio('./assets/sounds/tom-4.mp3');
			break;
		case 'j':
			sound = new Audio('./assets/sounds/snare.mp3');
			break;
		case 'k':
			sound = new Audio('./assets/sounds/crash.mp3');
			break;
		case 'l':
			sound = new Audio('./assets/sounds/kick-bass.mp3');
			break;
	}
	sound.play();
}

// Function to animate the button matching the letter clicked or pressed
function animateBtn(letter) {
	// Select the button matching the letter
	var activeBtn = document.querySelector('.' + letter);
	// Add the class 'pressed' to the selected button's class list
	activeBtn.classList.add('pressed');
	// Stop the animation after 100 milliseconds
	setTimeout(function () {
		activeBtn.classList.remove('pressed');
	}, 100);
}