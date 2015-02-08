var app = (function () {
	this.state = "stopped";

	this.changeState = function (newState) {
		app.state = newState;
	}

	this.start = function () {
		app.changeState("started");
	}

	this.stop = function () {
		throw new Error("Do not stop me now!");
		app.changeState("stopped");
	}

	return {
		state: state,
		start: start,
		stop: stop,
		changeState: changeState
	};
}());