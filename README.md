Angular Protractor Cucumber Framework with Jenkins Integration

Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Setup
Use npm to install Protractor globally with:

npm install -g protractor
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update
Now start up a server with:

webdriver-manager start
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.

Prerequisites
There are a few things needed before you can work with Protractor. Make sure you have the latest versions of the following installed:

Node.js,
Java Development Kit.

Configuration
Now create the configuration file. Copy the following into conf.js:

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};
This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It will use the defaults for all other configuration. Chrome is the default browser.

Run the test
Now run the test with:

protractor conf.js
You should see a Chrome browser window open up and navigate to the todo list in the AngularJS page, then close itself (this should be very fast!).

Install
To install this module, run the following command in your computer terminal:

npm install --save-dev protractor-cucumber-framework
Please note that to use protractor-cucumber-framework you'll need a recent Long-Term Support versions of Node.js, so 12, 14, or 16.

Odd-numbered Node.js releases (11, 13, 15, etc.) are not on the LTS line, should be considered experimental, and should not be used in production.

Implementation
To implement this framework, utilize the protractor custom framework config option:

exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    'path/to/feature/files/**/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      'path/to/step/definitions/**/*.steps.js' // accepts a glob
    ]
  }
};

Passing Options to Cucumber.js
All of the cucumberOpts will be passed to cucumberjs as arguments.

For example, to call cucumberjs with the --strict, --no-colors, and to specify custom formatters:

cucumberOpts: {
  strict: true,
  'no-colors': true,
  format: ['progress', 'pretty:output.txt'],
  // ...
}

exports.config = {
  capabilities: {
    shardTestFiles: true,
    // ...
  },

  cucumberOpts: {
    format: 'json:results.json',
    // ...
  }
};

Start a selenium server:

npm run webdriver
Start the test app that tests will be run against in a separate shell:

npm start
Run the tests in a separate shell:

npm test
