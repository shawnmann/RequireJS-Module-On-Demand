// Configure RequireJS before use
require.config({
    // Set paths to script files so we can call them with a friendly name
    paths: {
        // Need to set a path for jQuery since we are loading it from an external location
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery',
        // This is also where you would define paths to groups of scripts:
        // See http://requirejs.org/docs/api.html#config-paths
    }
});

require([
    'jquery'  // Require jQuery, because this module uses it
], function (
        $  // Pass in jQuery with this name
    )
{

    // Do something so we know the app is loaded
    console.log('APP LOADED');

    // Bind a function to the module01 button
    $('#module01-button').click(function () {
        // Use RequireJS to load the module on demand
        require(['module01'], function (module01) {
            // Run the initModule function of module01
            module01.initModule();
        });
    });

    // Do all of the above for the second module
    $('#module02-button').click(function () {
        require(['module02'], function (module02) {
            module02.initModule();
        });
    });

});