document.addEventListener('visibilitychange', function () {
	if (document.visibilityState === 'visible') {
		backgroundMusic.play();
	} else {
		backgroundMusic.pause();
	}
});
