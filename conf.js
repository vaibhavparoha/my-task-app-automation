exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://angularjs.org/',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

    specs: [
        './features/**/*.feature'     // Specs here are the cucumber feature files
    ],

    // cucumber command line options
    cucumberOpts: {
        require: ['./features/step_definition/*.js']
    },

    // onPrepare: function () {
    //     browser.manage().window().maximize(); // maximize the browser before executing the feature files
    // }
};