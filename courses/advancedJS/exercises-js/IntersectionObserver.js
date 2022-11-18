class AutoPuse {
	constructor() {
		this.threshold = 0.25;
	}

	run(player) {
		this.player = player;
		const observer = new IntersectionObserver(this.handlerIntersection, {
			threshold: this.threshold,
		});
		observer.observe(this.player.media);
	}
	handlerIntersection(entries) {
		const entry = entries[0];
		console.log(entry);
		if (entry.isIntersecting === false) {
			entry.target.pause();
		} else {
			entry.target.play();
		}
	}
}
