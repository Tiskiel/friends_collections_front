// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_PATH: "http://localhost:8080/api/auth/login",
  REGISTER_PATH: "http://localhost:8080/api/auth/register",
  MY_PROFIL_PATH: "http://localhost:8080/api/user/me",
  UPDATE_MY_PROFIL_PATH: "http://localhost:8080/api/user/me",
  USER_LIST_ITEMS_PATH: "http://localhost:8080/api/list/user",
  GET_TYPE_BY_ID_PATH: "http://localhost:8080/api/types/type/",
  GET_ITEM_BY_ID_PATH: "http://localhost:8080/api/collection/items/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
