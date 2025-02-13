let index = 0;

// Key interaction
document.addEventListener('keydown', init, { once: true });

// Buttons
const no_btn = document.getElementById('no-button');
const yes_btn = document.getElementById('yes-button');
no_btn.addEventListener('mouseover', avoid_rejection);
no_btn.addEventListener('click', avoid_rejection);
no_btn.addEventListener('touchstart', avoid_rejection, { passive: true });
yes_btn.addEventListener('click', say_yes);

// Function
function init() {
	const bg_music = document.getElementById('background-music');
	const page = document.getElementById('initial-page');
	const landing_page = document.getElementById('main-page');

	// Interaction
	page.classList.add('fade-out');
	setTimeout(() => {
		page.style.display = 'none';
		landing_page.style.display = 'block';
		landing_page.classList.add('fade-in');
		bg_music.play();
	}, 1000);
}

function avoid_rejection() {
	const no_btn_sound = document.getElementById('move-sound');
	const list = ["Nope", "Can't catch me!", "Still no?", "Haha, missed!"];

	// Simple randomization
	const x = Math.random() * (window.innerWidth - no_btn.clientWidth);
	const y = Math.random() * (window.innerHeight - no_btn.clientHeight);
	no_btn.style.left = `${x}px`;
	no_btn.style.top = `${y}px`;

	// Text
	no_btn.textContent = list[index];
	index = (index + 1) % list.length;

	// Sound
	no_btn_sound.currentTime = 0;
	no_btn_sound.play();
}

function say_yes() {
	const page = document.getElementById('redirect-page');
	const content = document.getElementById('redirect-message');
	const html_cookie = document.cookie.includes('visited=yes');

	// Set cookie
	document.cookie = "visited=yes; path=/; max-age=31536000";

	// Interaction
	page.style.display = 'flex';
	content.textContent = html_cookie ? "You're already my sunshine 🌻" : "You are now my sunflower, brightening my days with your warmth! 🌻";

	// Redirection
	setTimeout(() => {
		window.location.href = "https://www.instagram.com/direct/t/104229550972163/";
	}, 5000);
}