Package.describe({
  name: 'aldeed:template-extension',
  summary: 'Adds template features currently missing from the templating package',
  version: '4.1.0',
  git: 'https://github.com/aldeed/meteor-template-extension.git',
});

Package.onUse(function(api) {
  api.versionsFrom(['3.0-beta.0']);

  api.use([
    'ecmascript',
    'templating',
    'blaze',
    'tracker',
  ], 'client');

  api.addFiles([
    'lib/hooks.js',
    'lib/template-for-each.js',
    'lib/template-hooks.js',
    'lib/template-global-hooks.js',
    'lib/template-for-each-instance.js',
    'lib/template-inherits-events-from.js',
    'lib/template-inherits-helpers-from.js',
    'lib/template-inherits-hooks-from.js',
    'lib/template-register-helpers.js',
    'lib/template-replaces.js',
    'lib/template-clear-event-maps.js',
    'lib/template-copy-as.js',
    'lib/template-instance-parent.js',
    'lib/template-instance-get.js',
    'lib/template-instance-set.js',
    'lib/template-parent-data-function.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'aldeed:template-extension',
    'jquery',
    'templating',
    'tinytest',
    'tracker',
    'ejson',
    'underscore',
    'reactive-var',
  ], 'client');

  api.addFiles([
    'tests.html',
    'tests.js',
  ], 'client');
});
