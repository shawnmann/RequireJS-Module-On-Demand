// Create a RequireJS module
define([
], function () {

	// Declare our initModule function variable
	var initModule;

	// A function we run when the module loads
	initModule = function () {
		// Do something so we know the module loaded
		console.log('MODULE01 LOADED');
	};

	// Expose our initModule as a public function
	return {
		initModule: initModule
	};
});