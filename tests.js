QUnit.config.notrycatch = true;

test("should call changeState method when starting", function () {
	// Arrange
	this.spy(app, "changeState");

	// Act
	app.start();

	// Assert
    ok(app.changeState.calledOnce);
    ok(app.changeState.calledWith("started"));
    equal(app.state, "started");
});

test("should call changeState method when stopping", function () {
	// Arrange
	this.spy(app, "changeState");
	app.state = "started";

	// Act
	app.stop();

	// Assert
    ok(app.changeState.calledOnce);
    ok(app.changeState.calledWith("stopped"));
    equal(app.state, "stopped");
});