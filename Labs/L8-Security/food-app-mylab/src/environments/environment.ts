// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authEnabled: false,
  api: 'http://localhost:3000/',
  firebaseConfig: {
    apiKey: "AIzaSyDGq9kZQ7o2ffh0jIIyfA51dHj_GH2Jvlc",
    authDomain: "food-app-f411a.firebaseapp.com",
    projectId: "food-app-f411a",
    storageBucket: "food-app-f411a.appspot.com",
    messagingSenderId: "379077425084",
    appId: "1:379077425084:web:dae8e5e29f23bbfdbd9db9",
    measurementId: "G-H4LVVPXD7H"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
