'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    inlineContent: {
      'head' : null,
      'head-footer' : null,
      'body' : {
        content: ''
      },
      'body-footer' : null
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.

  app.import(`node_modules/geoportal-access-lib/dist/GpServices.js`);
  // app.import(`node_modules/geoportal-access-lib/src/Gp.js`, {
  //     exports: {
  //       'Gp': ['default']
  //   }
  // });

  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
