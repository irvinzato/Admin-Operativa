// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  urlBackend:       '',
  urlExperienceAPI: 'https://operationaladministrationdev.finsuite.com.mx/',
  envRegion: 'us-east-1',
  envUserPoolId: '', // Pool Id - ID grupo
  envUserPoolWebClientId: '',  // dev app client id  pool de aplicaciones   - id cliente de la aplicacion
  envLogin:'',
  endPassword: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
