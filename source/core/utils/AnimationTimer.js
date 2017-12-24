"use strict";

/**
 * Animation timer is a special type of timer that uses the requestAnimationFrame method.
 *
 * This timer calls the method with the same rate as the screen refesh rate.
 * 
 * Loop time can be changed dinamically.
 *
 * @class AnimationTimer
 * @constructor
 */
function AnimationTimer(callback)
{
	this.callback = callback;

	this.running = false;
}

/**
 * Start timer, is the timer is already running dosen't do anything.
 * 
 * @method start
 */
AnimationTimer.prototype.start = function()
{
	if(this.running)
	{
		return;
	}

	this.running = true;

	var self = this;
	function loop()
	{
		self.callback();

		if(self.running)
		{
			requestAnimationFrame(loop);
		}
	}
	loop();

};

/**
 * Stop animation timer.
 * 
 * @method stop
 */
AnimationTimer.prototype.stop = function()
{
	this.running = false;
};
