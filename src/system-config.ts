// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

// Angular Material 2 Packages to load.
var materialPackages = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav'
];

materialPackages.forEach(function(item) {
  // All Material 2 components are prefixed with  @angular2-material and use
  // the components name as entry point.
  packages['vendor/@angular2-material/' + item] = { main: item };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/form',
  'app/shared/card',
  'app/shared/search',
  'app/shared/people-service',
  'app/shared/maps',
  'app/+home',
  'app/+people',
  'app/+person',
  'app/+skills',
  'app/+locator',
  'app/+update',

  // training purpose only
  // remove the "+" prefix
  'app/home',
  'app/people',
  'app/person',
  'app/skills',
  'app/locator',
  'app/update',
  
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
