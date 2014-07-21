define([
	'jquery'
], function ($) {

	var initModule;

	initModule = function () {
	    console.log('MODULE01 LOADED');
	};

	return {
		initModule: initModule
	};
});