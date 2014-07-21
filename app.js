require.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery',
        'module01': 'module01',
        'module02': 'module02'
    },
    shim: {
    }
});

require([
    //"kendo.menu.min",
    //"kendo.grid.min"
    'jquery'
], function ($) {

    console.log('APP LOADED');

    $('#module01-button').click(function () {
        require(['module01'], function (module01) {
            module01.initModule();
        });
    });

    $('#module02-button').click(function () {
        require(['module02'], function (module02) {
            module02.initModule();
        });
    });

});