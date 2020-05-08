(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdmindashboardAdmindashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav\n  [dashboardName]=\"name\"\n></app-topnav>\n<div class=\"wrapper\">\n  <app-sidenav\n    [adminUserId]=\"localStorage.userId\"\n    [avatar]=\"localStorage.avatar\"\n    [username]=\"localStorage.userName\"\n  ></app-sidenav>\n  <div\n    class=\"py-4 px-4\"\n    style=\"flex: 1 1 auto;\n   overflow-y: auto;\"\n  >\n    <ngx-spinner\n      style=\"height: 50px; width: 500px;\"\n      bdColor=\"rgba(0, 0, 0, 0.8)\"\n      size=\"medium\"\n      color=\"#fff\"\n      type=\"ball-atom\"\n      [fullScreen]=\"false\"\n      ><p style=\"color: white\">Getting users list...</p></ngx-spinner\n    >\n    <button\n      class=\"btn btn-primary my-2\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#collapseExample\"\n      aria-expanded=\"false\"\n      aria-controls=\"collapseExample\"\n    >\n      Currently online users\n    </button>\n    <div class=\"collapse\" id=\"collapseExample\" *ngIf=\"onlineUsers.length > 0\">\n      <div class=\"card-body\" *ngFor=\"let online of onlineUsers\">\n        {{ online.firstName }}\n      </div>\n    </div>\n    <div class=\"collapse\" id=\"collapseExample\" *ngIf=\"onlineUsers.length == 0\">\n      <div class=\"card-body\">\n        No one is online\n      </div>\n    </div>\n    <h4 class=\"mt-2 text-center\">List of all users</h4>\n    <div class=\"card no-users\" *ngIf=\"users.length == 0\">\n      <p>No users registered</p>\n    </div>\n    <div *ngFor=\"let user of users; let i = index\">\n      <button class=\"accordion\" (click)=\"toggleAccordian($event, i)\">\n        {{ user.firstName }} {{ user.lastName }}\n      </button>\n      <div class=\"panel\" hide=\"!user.isActive\">\n        <p>User Name: {{ user.userName }}</p>\n        <p>Email: {{ user.email }}</p>\n        <p>Mobile Number: {{ user.mobileNumber }}</p>\n        <p>Country: {{ user.countryName }}</p>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary mb-3\"\n          [routerLink]=\"['/admin/user/', user.userId]\"\n        >\n          View meetings\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-meeting/create-meeting.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-meeting/create-meeting.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCreateMeetingCreateMeetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\n<div class=\"wrapper\">\n  <app-sidenav\n    [adminUserId]=\"localStorage.userId\"\n    [avatar]=\"localStorage.avatar\"\n    [username]=\"localStorage.userName\"\n  ></app-sidenav>\n  <div *ngIf=\"appService.showSpinner\" class=\"d-flex justify-content-center\">\n    <!-- using custom spinner -->\n    <!-- <div class=\"loading\">Loading&#8230;</div> -->\n\n  </div>\n  <div class=\"container  py-3\">\n    <div class=\"row align-items-center\">\n      <div class=\"col\">\n        <ngx-spinner\n        style=\"height: 50px; width: 500px;\"\n        bdColor=\"rgba(0, 0, 0, 0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-atom\"\n        [fullScreen]=\"false\"\n        ><p style=\"color: white\">Creating...</p></ngx-spinner\n      >\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div\n              style=\"display: flex;justify-content: space-between;font-size: 18px;cursor: pointer;\"\n            >\n              <span class=\"fa-stack fa-lg icon-background\" (click)=\"goBack()\">\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n                <i class=\"fa fa-angle-left fa-stack-1x\"></i>\n              </span>\n            </div>\n            <form\n              name=\"form\"\n              #meetingForm=\"ngForm\"\n              (ngSubmit)=\"createMeeting()\"\n            >\n              <div class=\"form-group mt-2\">\n                <label for=\"purpose\">Purpose</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"purpose\"\n                  placeholder=\"Enter the purpose of meeting\"\n                  [(ngModel)]=\"purpose\"\n                  #inputPurpose=\"ngModel\"\n                  required\n                  autofocus\n                />\n                <div\n                  *ngIf=\"\n                    inputPurpose.invalid &&\n                    (inputPurpose.dirty || inputPurpose.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputPurpose.errors.required\">\n                    Please enter the purpose\n                  </div>\n  \n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"location\">Location</label>\n\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"location\"\n                  placeholder=\"Enter the location of meeting\"\n                  [(ngModel)]=\"location\"\n                  #inputLocation=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputLocation.invalid &&\n                    (inputLocation.dirty || inputLocation.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputLocation.errors.required\">\n                    Please enter the location\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"purpose\">Start Date</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"startdate\"\n                  mwlFlatpickr\n                  [(ngModel)]=\"startDate\"\n                  [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\"\n                  placeholder=\"Not set\"\n                  [disable]=\"[disabledDay]\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"purpose\">End Date</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"enddate\"\n                  mwlFlatpickr\n                  [(ngModel)]=\"endDate\"\n                  [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\"\n                  placeholder=\"Not set\"\n                  [disable]=\"[disabledDay]\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"admin_name\">Created By</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"adminname\"\n                  [(ngModel)]=\"admin_name\"\n                  readonly\n                />\n              </div>\n\n              <button\n                type=\"submit\"\n                [disabled]=\"!meetingForm.valid\"\n                class=\"btn btn-outline-success btn-block loginBtn\"\n              >\n                Create\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-meeting/edit-meeting.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-meeting/edit-meeting.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEditMeetingEditMeetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\n<div class=\"wrapper\">\n  <app-sidenav\n    [adminUserId]=\"localStorage.userId\"\n    [avatar]=\"localStorage.avatar\"\n    [username]=\"localStorage.userName\"\n  ></app-sidenav>\n\n  <div\n    class=\"container py-3\"\n    style=\"width: 900px;\"\n    *ngIf=\"(editForm | keyvalue)?.length\"\n  >\n   \n    <div class=\"row align-items-center\">\n      <div class=\"col\">\n        <ngx-spinner\n          style=\"height: 50px; width: 500px;\"\n          bdColor=\"rgba(0, 0, 0, 0.8)\"\n          size=\"medium\"\n          color=\"#fff\"\n          type=\"ball-atom\"\n          [fullScreen]=\"false\"\n          ><p style=\"color: white\">...</p></ngx-spinner\n        >\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div\n              style=\"display: flex;justify-content: space-between;cursor: pointer;\"\n            >\n              <span class=\"fa-stack fa-lg icon-background\" (click)=\"goBack()\">\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n                <i class=\"fa fa-angle-left fa-stack-1x\"></i>\n              </span>\n              <span\n                class=\"fa-stack fa-lg icon-background\"\n                (click)=\"openConfirmModal()\"\n              >\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n                <i class=\"fa fa-trash fa-stack-1x\"></i>\n              </span>\n            </div>\n          \n            <form name=\"form\" #meetingForm=\"ngForm\" (ngSubmit)=\"editMeeting()\">\n              <div class=\"form-group mt-2\">\n                <label for=\"purpose\">Purpose</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"purpose\"\n                  [(ngModel)]=\"editForm.purpose\"\n                  #inputPurpose=\"ngModel\"\n                  required\n                  autofocus\n                />\n                <div\n                  *ngIf=\"\n                    inputPurpose.invalid &&\n                    (inputPurpose.dirty || inputPurpose.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputPurpose.errors.required\">\n                    Please enter the purpose\n                  </div>\n                 \n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"location\">Location</label>\n\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"location\"\n                  [(ngModel)]=\"editForm.location\"\n                  #inputLocation=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputLocation.invalid &&\n                    (inputLocation.dirty || inputLocation.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputLocation.errors.required\">\n                    Please enter the location\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"purpose\">Start Date</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"startdate\"\n                  mwlFlatpickr\n                  [(ngModel)]=\"editForm.startDate\"\n                  [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\"\n                  [disable]=\"[disabledDay]\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"purpose\">End Date</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"enddate\"\n                  mwlFlatpickr\n                  [(ngModel)]=\"editForm.endDate\"\n                  [enableTime]=\"true\"\n                  dateFormat=\"Y-m-dTH:i\"\n                  [disable]=\"[disabledDay]\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"admin_name\">Created By</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"adminname\"\n                  [(ngModel)]=\"editForm.admin_name\"\n                  readonly\n                />\n              </div>\n\n              <button\n                type=\"submit\"\n                [disabled]=\"!meetingForm.dirty\"\n                class=\"btn btn-outline-success btn-block loginBtn\"\n              >\n                Edit\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-body\">\n    <p>\n      <strong>Are you sure you want to delete the meeting? </strong>\n    </p>\n    <p>\n      All information associated to this meeting will be permanently deleted.\n      <span class=\"text-danger\">This operation can not be undone.</span>\n    </p>\n    <div class=\"text-center\">\n      <button\n        type=\"button\"\n        ngbAutofocus\n        class=\"btn btn-danger mx-2\"\n        (click)=\"deleteMeeting()\"\n      >\n        Yes\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-secondary mx-2\"\n        (click)=\"close()\"\n      >\n        No\n      </button>\n    </div>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/userdata/userdata.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/userdata/userdata.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUserdataUserdataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\n<div class=\"wrapper\" *ngIf=\"showTemplate\">\n  <app-sidenav\n    [adminUserId]=\"localStorage.userId\"\n    [normalUserId]=\"userId\"\n    [avatar]=\"localStorage.avatar\"\n    [username]=\"localStorage.userName\"\n    (notify)=\"logout($event)\"\n  ></app-sidenav>\n  <div\n    class=\"py-4 px-4\"\n    style=\"flex: 1 1 auto;\n          overflow: auto;\"\n  >\n    <div class=\"row text-center\" *ngIf=\"currentUser != ''\">\n      <h4 class=\"ml-2\">{{ currentUser }}'s planner</h4>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <button\n          type=\"button\"\n          class=\"btn btn-primary btn-block mb-3\"\n          (click)=\"createMeeting()\"\n        >\n          <span class=\"fa-stack\">\n            <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n            <i class=\"fa fa-plus fa-stack-1x\"></i>\n          </span>\n          Create a new meeting\n        </button>\n      </div>\n    </div>\n    <div class=\"row py-4 text-center\">\n      <div class=\"col-sm-12 col-md-5\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-primary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-2\">\n        <h3>{{ viewDate | calendarDate: view + \"ViewTitle\":\"en\" }}</h3>\n      </div>\n      <div class=\"col-sm-12 col-md-5\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row calendar mb-3\">\n      <div class=\"col\">\n        <ngx-spinner\n          style=\"height: 50px; width: 500px;\"\n          bdColor=\"rgba(0, 0, 0, 0.8)\"\n          size=\"medium\"\n          color=\"#fff\"\n          type=\"ball-atom\"\n          [fullScreen]=\"false\"\n          ><p style=\"color: white\">Getting meeting info...</p></ngx-spinner\n        >\n        <div [ngSwitch]=\"view\" class=\"pb-3\">\n          <mwl-calendar-month-view\n            *ngSwitchCase=\"CalendarView.Month\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            [activeDayIsOpen]=\"activeDayIsOpen\"\n            (dayClicked)=\"dayClicked($event.day)\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-month-view>\n          <mwl-calendar-week-view\n            *ngSwitchCase=\"CalendarView.Week\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-week-view>\n          <mwl-calendar-day-view\n            *ngSwitchCase=\"CalendarView.Day\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-day-view>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ modalData.title | titlecase }}</h4>\n  </div>\n\n  <div class=\"modal-body\">\n    <p>Location: {{ modalData.location }}</p>\n    <p>Meeting starts at: {{ modalData.start | date: \"medium\" }}</p>\n    <p>Meeting starts at: {{ modalData.end | date: \"medium\" }}</p>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n      OK\n    </button>\n\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"editMeet(modalData?.meetingId)\"\n    >\n      <i class=\"fa fa-fw fa-pencil\"></i>Edit\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-danger\"\n      (click)=\"deleteMeet(modalData?.meetingId)\"\n    >\n      <i class=\"fa fa-fw fa-trash\"></i>Delete\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #confirmForDelete let-close=\"close\">\n  <div class=\"modal-body\">\n    <p>\n      <strong>Are you sure you want to delete the meeting? </strong>\n    </p>\n    <p>\n      All information associated to this meeting will be permanently deleted.\n      <span class=\"text-danger\">This operation can not be undone.</span>\n    </p>\n    <div class=\"text-center\">\n      <button\n        type=\"button\"\n        ngbAutofocus\n        class=\"btn btn-danger mx-2\"\n        (click)=\"deleteEvent($event)\"\n      >\n        Yes\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-secondary mx-2\"\n        (click)=\"close()\"\n      >\n        No\n      </button>\n    </div>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div [@routeAnimations]=\"getAnimationData(routerOutlet)\">\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n</div> -->\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <div\n      class=\"header\"\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\n    >\n      <app-navbar></app-navbar>\n    </div>\n\n    <div class=\"section\">\n      <div class=\"container forgotPasswordForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\n              Forgot your password?\n            </p>\n            <p class=\"text-muted\">\n              That's okay, it happens. Please enter your registered email and\n              click on the button below to receive a password reset link on the\n              email\n            </p>\n            <form\n              name=\"form\"\n              #forgotPasswordForm=\"ngForm\"\n              (ngSubmit)=\"forgotPasswordFunction()\"\n            >\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <div class=\"input-group\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"email\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputEmail=\"ngModel\"\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                    required\n                    autofocus\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputEmail.errors.required\">\n                    Please enter the email\n                  </div>\n                </div>\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block loginBtn\"\n              >\n                Reset Password\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <div\n      class=\"header\"\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\n    >\n      <app-navbar></app-navbar>\n    </div>\n    <div class=\"section\">\n      <div class=\"container loginForm\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <p style=\"font-size: 1.5em;font-weight: 700;text-align: center;\">\n              Login\n            </p>\n          </div>\n          <div class=\"card-body\">\n            <form name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginFunction()\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\n                      ><img src=\"./../../../assets/img/user.svg\" alt=\"\"\n                    /></span>\n                  </div>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"email\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputEmail=\"ngModel\"\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                    required\n                    autofocus\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputEmail.errors.required\">\n                    Please enter the email\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\n                      ><img src=\"./../../../assets/img/lock.svg\" alt=\"\"\n                    /></span>\n                  </div>\n                  <input\n                    type=\"password\"\n                    name=\"password\"\n                    class=\"form-control\"\n                    id=\"password\"\n                    [(ngModel)]=\"password\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputPassword=\"ngModel\"\n                    placeholder=\"Password\"\n                    required\n                  />\n                </div>\n\n                <div\n                  *ngIf=\"\n                    inputPassword.invalid &&\n                    (inputPassword.dirty || inputPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter the password\n                  <div *ngIf=\"loginForm.controls['password']?.errors?.required\">\n                    Please enter the password\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"forgotPassword\">\n                <a [routerLink]=\"['/forgotPassword']\">Forgot Password?</a>\n              </div>\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block loginBtn\"\n              >\n                Login\n              </button>\n              <div class=\"signUpBtn\">\n                <a [routerLink]=\"['/signup']\">Not a member? Signup</a>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/navbar/navbar.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/navbar/navbar.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-color\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"font-weight: 700;color: #fff\"\n    >Meet Up</a\n  >\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <i class=\"fa fa-bars\"></i>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\"\n          >Signup</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"\n          >Login</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/page-not-found/page-not-found.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/page-not-found/page-not-found.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <div\n      class=\"header\"\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\n    >\n      <app-navbar></app-navbar>\n    </div>\n\n    <div class=\"section\">\n      <div class=\"container forgotPasswordForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\n              Oops!\n            </p>\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\n              404 Not Found\n            </p>\n            <p style=\"font-weight: 300;font-size:1em;\">\n              Sorry, an error has occured, Requested page not found!\n            </p>\n            <button class=\"btn btn-success btn-block\" [routerLink]=\"['/login']\">\n              Take me to Login\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <div\n      class=\"header\"\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\n    >\n      <app-navbar></app-navbar>\n    </div>\n\n    <div class=\"section\" *ngIf=\"!isLink\">\n      <div class=\"container resetPasswordForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p>\n              The Reset Password link has expired. Please click on the below\n              button to go back to the login page\n            </p>\n            <button\n              class=\"btn btn-outline-success btn-block\"\n              [routerLink]=\"['/login']\"\n            >\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go back to\n              Login\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"section\" *ngIf=\"isLink\">\n      <div class=\"container resetPasswordForm\">\n        <div class=\"row align-items-center\">\n          <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <form\n                  name=\"form\"\n                  #resetPasswordForm=\"ngForm\"\n                  (ngSubmit)=\"updatePasswordFunction()\"\n                >\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"password1\"\n                      placeholder=\"Enter password\"\n                      [(ngModel)]=\"password\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      #inputPassword=\"ngModel\"\n                      required\n                      autofocus\n                    />\n                    <div\n                      *ngIf=\"\n                        inputPassword.invalid &&\n                        (inputPassword.dirty || inputPassword.touched)\n                      \"\n                      class=\"notifyError\"\n                    >\n                      <div *ngIf=\"inputPassword.errors.required\">\n                        Please enter the password\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"password\">Confirm password</label>\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"password2\"\n                      placeholder=\"Enter password\"\n                      [(ngModel)]=\"confirmPassword\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      #inputConfirmPassword=\"ngModel\"\n                      required\n                      autofocus\n                    />\n\n                    <div\n                      *ngIf=\"\n                        inputConfirmPassword.invalid &&\n                        (inputConfirmPassword.dirty ||\n                          inputConfirmPassword.touched)\n                      \"\n                      class=\"notifyError\"\n                    >\n                      <div *ngIf=\"inputConfirmPassword.errors.required\">\n                        Please enter the confirm password\n                      </div>\n                    </div>\n                    <div\n                      *ngIf=\"\n                        password !== confirmPassword &&\n                        confirmPassword != undefined &&\n                        confirmPassword != ''\n                      \"\n                      class=\"notifyError\"\n                    >\n                      Not a matching password\n                    </div>\n                  </div>\n\n                  <button\n                    type=\"submit\"\n                    class=\"btn btn-outline-success btn-block loginBtn\"\n                  >\n                    Update Password\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <div\n      class=\"header\"\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\n    >\n      <app-navbar></app-navbar>\n    </div>\n   \n    <div class=\"section\">\n      <div class=\"container signUpForm\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <p style=\"font-size: 1.5em;font-weight: 700;text-align: center;\">\n              Sign Up\n            </p>\n          </div>\n          <div class=\"card-body\">\n            <form (ngSubmit)=\"signUpFunction()\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6 col-sm-12\">\n                  <label for=\"firstName\">First Name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"firstName\"\n                    [(ngModel)]=\"firstName\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputFirstName=\"ngModel\"\n                    required\n                    autofocus\n                  />\n                  <div\n                    *ngIf=\"\n                      inputFirstName.invalid &&\n                      (inputFirstName.dirty || inputFirstName.touched)\n                    \"\n                    class=\"notifyError\"\n                  >\n                    First Name is empty\n                  </div>\n                </div>\n                <div class=\"form-group col-md-6 col-sm-12\">\n                  <label for=\"lastName\">Last Name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"lastName\"\n                    [(ngModel)]=\"lastName\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputLastName=\"ngModel\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"\n                      inputLastName.invalid &&\n                      (inputLastName.dirty || inputLastName.touched)\n                    \"\n                    class=\"notifyError\"\n                  >\n                    Last Name is empty\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  placeholder=\"Enter email\"\n                  [(ngModel)]=\"email\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputEmail=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Email is empty\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password1\"\n                  placeholder=\"Enter password\"\n                  [(ngModel)]=\"password\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputPassword=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputPassword.invalid &&\n                    (inputPassword.dirty || inputPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter password\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Confirm password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password2\"\n                  placeholder=\"Enter password\"\n                  [(ngModel)]=\"confirmPassword\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputConfirmPassword=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputConfirmPassword.invalid &&\n                    (inputConfirmPassword.dirty || inputConfirmPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter confirm password\n                </div>\n                <div\n                  *ngIf=\"\n                    password !== confirmPassword &&\n                    confirmPassword != undefined &&\n                    confirmPassword != ''\n                  \"\n                  class=\"notifyError\"\n                >\n                  Not a matching password\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-4 col-sm-4\">\n                  <label for=\"countryCode\">Country</label>\n                  <select\n                    (change)=\"changed($event)\"\n                    id=\"countryCode\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"selectedCountryCode\"\n                    #country=\"ngModel\"\n                    name=\"selectedCountryCode\"\n                    required\n                  >\n                    <option\n                      *ngFor=\"let country of countryName\"\n                      [value]=\"country.code\"\n                      >{{ country.name }}</option\n                    >\n                  </select>\n                </div>\n\n                <div class=\"form-group col-md-8 col-sm-8\">\n                  <label for=\"mobileNumber\">Mobile Number</label>\n                  <div class=\"input-group\">\n                    <div\n                      ngDefaultControl\n                      class=\"input-group-prepend\"\n                      [(ngModel)]=\"internationalCode\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    >\n                      <span class=\"input-group-text\" id=\"inputGroupPrepend2\">{{\n                        internationalCode\n                      }}</span>\n                    </div>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"mobileNumber\"\n                      placeholder=\"Enter mobile number\"\n                      [(ngModel)]=\"mobileNumber\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      #inputMobileNumber=\"ngModel\"\n                      required\n                    />\n                  </div>\n                  <div\n                    *ngIf=\"\n                      inputMobileNumber.invalid &&\n                      (inputMobileNumber.dirty || inputMobileNumber.touched)\n                    \"\n                    class=\"notifyError\"\n                  >\n                    MobileNumber is empty\n                  </div>\n                  <div *ngIf=\"internationalCode == ''\" class=\"notifyError\">\n                    Please select country\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"userName\" class=\"col-sm-3 col-form-label\"\n                  >Username</label\n                >\n                <div class=\"col-sm-9\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"userName\"\n                    placeholder=\"Username\"\n                    [(ngModel)]=\"userName\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputUserName=\"ngModel\"\n                    required\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    userName == 'admin' ||\n                    userName == 'admin-' ||\n                    userName == '-admin'\n                  \"\n                  class=\"notifyError mx-3\"\n                >\n                  Username can't be admin\n                </div>\n                <small class=\"text-muted mx-3\" *ngIf=\"userRole == 'admin'\"\n                  >While signing up as admin, '-admin' suffix will be added to\n                  your username, eg. alex-admin\n                </small>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-3 col-sm-3  mb-0\">\n                  <label>User Role</label>\n                </div>\n                <div class=\"form-group col-md-4 col-sm-4\">\n                  <div\n                    class=\"custom-control custom-radio custom-control-inline\"\n                  >\n                    <input\n                      (change)=\"selectRole($event)\"\n                      type=\"radio\"\n                      id=\"adminRole\"\n                      name=\"role\"\n                      [(ngModel)]=\"userRole\"\n                      class=\"custom-control-input\"\n                      value=\"admin\"\n                      checked\n                    />\n                    <label class=\"custom-control-label\" for=\"adminRole\"\n                      >Admin</label\n                    >\n                  </div>\n                </div>\n                <div class=\"form-group col-md-5 col-sm-5\">\n                  <div\n                    class=\"custom-control custom-radio custom-control-inline\"\n                  >\n                    <input\n                      (change)=\"selectRole($event)\"\n                      type=\"radio\"\n                      id=\"userRole\"\n                      name=\"role\"\n                      [(ngModel)]=\"userRole\"\n                      class=\"custom-control-input\"\n                      value=\"normal\"\n                    />\n                    <label class=\"custom-control-label\" for=\"userRole\"\n                      >Normal</label\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <label class=\"ml-1\">User Profile Pic</label>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-9 col-sm-9\">\n                    <div class=\"custom-file\">\n                      <input\n                        type=\"file\"\n                        class=\"custom-file-input\"\n                        id=\"customFile\"\n                        (change)=\"onSelectFile($event)\"\n                      />\n                      <label class=\"custom-file-label\" for=\"customFile\"></label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group col-md-3 col-sm-3\">\n                    <button\n                      type=\"button\"\n                      name=\"upload\"\n                      value=\"upload\"\n                      id=\"upload\"\n                      class=\"btn btn-block btn-dark\"\n                      (click)=\"onImageUpload()\"\n                    >\n                      <i class=\"fa fa-fw fa-upload\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div\n                class=\"form-row\"\n                class=\"text-center\"\n                id=\"imagePreview\"\n                *ngIf=\"url\"\n              >\n                <div class=\"col\">\n                  Image Preview:\n                  <img class=\"crop\" [src]=\"url\" /> <br />\n                </div>\n              </div>\n\n              <div\n                class=\"d-flex justify-content-center\"\n                *ngIf=\"appService.showSpinner\"\n              >\n                <div class=\"spinner-grow spinner-grow-sm\"></div>\n                Uploading\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block signUpBtn\"\n              >\n                Sign Up\n              </button>\n              <button\n                class=\"btn btn-outline-danger btn-block mt-3\"\n                (click)=\"cancelRegister()\"\n              >\n                Cancel Register\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenav/sidenav.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenav/sidenav.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidenavSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <nav\n      id=\"sidebar\"\n      class=\"navbar-light\"\n      [ngClass]=\"{ hidden: appService.hideSideNav }\"\n    >\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item text-center\">\n          <img class=\"crop\" src=\"{{ avatar }}\" />\n        </li>\n        <li class=\"text-center\" style=\"border-bottom: 2px solid #28c7fa\">\n          {{ username }}\n          <img\n            src=\"./../../../assets/img/power.svg\"\n            class=\"filter-white ml-2 pb-1\"\n            alt=\"\"\n            (click)=\"logout()\"\n            style=\"cursor: pointer\"\n          />\n        </li>\n        <li class=\"text-center\"></li>\n        <li class=\"nav-item mt-2\" [hidden]=\"role != 'admin'\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/admindashboard']\"\n            routerLinkActive=\"active\"\n            >Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item active focus\" [hidden]=\"role != 'normal'\">\n          <a class=\"nav-link\">Dashboard </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [hidden]=\"role != 'admin'\"\n            [routerLink]=\"['/admin/user/', normalUserId]\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            >Planner</a\n          >\n        </li>\n      </ul>\n    </nav>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenavtoggler/sidenavtoggler.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenavtoggler/sidenavtoggler.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidenavtogglerSidenavtogglerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button\n  type=\"button\"\n  class=\"navbar-toggler\"\n  (click)=\"appService.toggleSideNav()\"\n>\n  <i class=\"fa fa-bars\"></i>\n</button>\n<a class=\"navbar-brand pl-3\" style=\"font-weight: 700;color: #fff\">Meet Up</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topnav/topnav.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topnav/topnav.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedTopnavTopnavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <nav class=\"navbar navbar-light navbar-color\">\n      <app-sidenavtoggler></app-sidenavtoggler>\n      <div class=\"wrapper\">\n        <p style=\"align-self: flex-end\">{{ name }}</p>\n      </div>\n    </nav>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserdashboardUserdashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\" (notify)=\"logout($event)\"></app-topnav>\n<div class=\"wrapper\">\n  <app-sidenav\n    [normalUserId]=\"localStorage.userId\"\n    [avatar]=\"localStorage.avatar\"\n    [username]=\"localStorage.userName\"\n  ></app-sidenav>\n  <div\n    class=\"px-4 py-4\"\n    style=\"flex: 1 1 auto;\n    overflow-y: auto;\"\n  >\n    <div class=\"row text-center\">\n      <h4>{{ localStorage.firstName }}'s planner</h4>\n    </div>\n    <div class=\"row py-4 text-center\">\n      <div class=\"col-sm-12 col-md-5\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-primary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            [class.active]=\"viewDate\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-2\">\n        <h3>{{ viewDate | calendarDate: view + \"ViewTitle\":\"en\" }}</h3>\n      </div>\n      <div class=\"col-sm-12 col-md-5\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"setView(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row calendar mb-3\">\n      <div class=\"col\">\n        <div [ngSwitch]=\"view\" class=\"pb-3\">\n          <mwl-calendar-month-view\n            *ngSwitchCase=\"CalendarView.Month\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            [activeDayIsOpen]=\"activeDayIsOpen\"\n            (dayClicked)=\"dayClicked($event.day)\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-month-view>\n          <mwl-calendar-week-view\n            *ngSwitchCase=\"CalendarView.Week\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-week-view>\n          <mwl-calendar-day-view\n            *ngSwitchCase=\"CalendarView.Day\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\n          >\n          </mwl-calendar-day-view>\n        </div>\n\n        <ng-template #modalContent let-close=\"close\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{ modalData1.title | titlecase }}</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Location: {{ modalData1.location }}</p>\n            <p>Meeting starts at: {{ modalData1.start | date: \"medium\" }}</p>\n            <p>Meeting starts at: {{ modalData1.end | date: \"medium\" }}</p>\n          </div>\n\n          <div class=\"modal-footer\">\n            <button\n              type=\"button\"\n              class=\"btn btn-outline-secondary\"\n              (click)=\"close()\"\n            >\n              OK\n            </button>\n          </div>\n        </ng-template>\n\n        <ng-template #reminderModal let-close=\"close\">\n          <div class=\"modal-header\"><span class=\"bell fa fa-bell\"></span></div>\n          <div class=\"modal-body\">\n            <p>\n              <strong>{{ modalData2 }}</strong>\n            </p>\n            <p>\n              You can snooze this reminder if desired.\n            </p>\n            <div class=\"text-center\">\n              <button\n                type=\"button\"\n                ngbAutofocus\n                class=\"btn btn-danger mx-2\"\n                (click)=\"callTheReminderAgain()\"\n              >\n                Snooze\n              </button>\n              <button\n                type=\"button\"\n                class=\"btn btn-outline-secondary mx-2\"\n                (click)=\"close()\"\n              >\n                Ok\n              </button>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-route-guard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/admin-route-guard.service.ts ***!
    \****************************************************/

  /*! exports provided: AdminRouteGuardService */

  /***/
  function srcAppAdminAdminRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRouteGuardService", function () {
      return AdminRouteGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let AdminRouteGuardService = class AdminRouteGuardService {
      constructor(router, appService, toastr) {
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      canActivate(route) {
        const authToken = this.appService.getAuthToken(); // console.log("in guard service", authToken, route.data);

        if (authToken === undefined || authToken === "" || authToken === null) {
          this.router.navigate(["/"]);
          return false;
        } else {
          return true;
        }
      }

    };

    AdminRouteGuardService.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }];

    AdminRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AdminRouteGuardService);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admindashboard/admindashboard.component */
    "./src/app/admin/admindashboard/admindashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./userdata/userdata.component */
    "./src/app/admin/userdata/userdata.component.ts");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./create-meeting/create-meeting.component */
    "./src/app/admin/create-meeting/create-meeting.component.ts");
    /* harmony import */


    var _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./edit-meeting/edit-meeting.component */
    "./src/app/admin/edit-meeting/edit-meeting.component.ts");
    /* harmony import */


    var _admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-route-guard.service */
    "./src/app/admin/admin-route-guard.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let AdminModule = class AdminModule {};
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"], _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_7__["UserdataComponent"], _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_12__["CreateMeetingComponent"], _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_13__["EditMeetingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: "admindashboard",
        component: _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"],
        // data: { animation: "isAdminDashboard" },
        canActivate: [_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminRouteGuardService"]]
      }, {
        path: "admin/user/:id",
        component: _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_7__["UserdataComponent"],
        canActivate: [_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminRouteGuardService"]]
      }, {
        path: "admin/user/create/:id",
        component: _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_12__["CreateMeetingComponent"],
        canActivate: [_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminRouteGuardService"]]
      }, {
        path: "admin/user/:id/meeting/:meetid",
        component: _edit_meeting_edit_meeting_component__WEBPACK_IMPORTED_MODULE_13__["EditMeetingComponent"],
        canActivate: [_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminRouteGuardService"]]
      }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      providers: [_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminRouteGuardService"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/admindashboard/admindashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/admindashboard/admindashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdmindashboardAdmindashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: calc(100vh - 56px);\n}\n\n.accordion {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.no-users{\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.active,\n.accordion:hover {\n  background-color: #ccc;\n}\n\n.accordion:after {\n  content: \"\\002B\";\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: \"\\2212\";\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.2s ease-out;\n  transition: max-height 0.2s ease-out;\n}\n\n/*custom color for bootstrap button*/\n\n.btn-primary {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal; */\n  /* border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:hover {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: #004d4d;\n  border-color: #009a9a; */\n  background-color: #03a7dd;\n  border-color: #03a7dd;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\n  box-shadow: 0 0 0 0.2rem #03a7dd;\n}\n\n.btn-primary.disabled,\n.btn-primary:disabled {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal;\n  border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active,\n.btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  /* color: #fff; */\n  color: #fff;\n  /* background-color: #00b3b3; */\n  background-color: #024e68;\n  border-color: #024e68;\n  /* border-color: #000; */\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNENBQW9DO0VBQXBDLG9DQUFvQztBQUN0Qzs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLG1EQUFtRDtFQUNuRCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWDswQkFDd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBQ0E7OztFQUdFLDZDQUE2QztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM0NDQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubm8tdXNlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFjdGl2ZSxcbi5hY2NvcmRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uYWNjb3JkaW9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDAwMkJcIjtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcMjIxMlwiO1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qY3VzdG9tIGNvbG9yIGZvciBib290c3RyYXAgYnV0dG9uKi9cbi5idG4tcHJpbWFyeSB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogIzAwMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdGVhbDsgKi9cbiAgLyogYm9yZGVyLWNvbG9yOiAjMDA1YTVhOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjN2ZhO1xuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogIzAwMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwNGQ0ZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5YTlhOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhN2RkO1xuICBib3JkZXItY29sb3I6ICMwM2E3ZGQ7XG59XG4uYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnkuZm9jdXMge1xuICAvKiBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCA5MCwgOTAsIDAuNSk7ICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDNhN2RkO1xufVxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLFxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIGNvbG9yOiAjMDAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICBib3JkZXItY29sb3I6ICMwMDVhNWE7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3ZmE7XG4gIGJvcmRlci1jb2xvcjogIzI4YzdmYTtcbn1cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIGNvbG9yOiAjZmZmO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2IzOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZTY4O1xuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XG4gIC8qIGJvcmRlci1jb2xvcjogIzAwMDsgKi9cbn1cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgOTAsIDkwLCAwLjUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admindashboard/admindashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admindashboard/admindashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdmindashboardComponent */

  /***/
  function srcAppAdminAdmindashboardAdmindashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function () {
      return AdmindashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let AdmindashboardComponent = class AdmindashboardComponent {
      constructor(appService, socketService, _route, router, toastr, spinner) {
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.name = "Admin dashboard";
        this.localStorage = "";
        this.users = "";
        this.onlineUsers = [];
        this.dupUsers = [];
        this.online = false;

        this.checkStatus = () => {
          if (this.localStorage === undefined || this.localStorage === "" || this.localStorage === null) {
            this.router.navigate(["/"]);
            return false;
          } else {
            return true;
          }
        }; //end checkStatus


        this.verifyUserConfirmation = () => {
          this.socketService.verifyUser().subscribe(data => {
            // console.log("verifyUserConfirmation", data);
            this.socketService.setUser(this.authToken); // console.log("data got after user comes online", data);
          });
        };

        this.getOnlineUserList = () => {
          this.socketService.onlineUsersList().subscribe(userList => {
            // console.log("getOnlineUserList", userList);
            this.onlineUsers = [...userList];
            console.log("online", this.onlineUsers);
          });
        };

        this.logout = name => {
          this.toastr.success("".concat(name));
        };

        this.getNormalUsers = () => {
          this.spinner.show();
          this.appService.getAllUsers().subscribe(apiResponse => {
            // console.log(apiResponse);
            if (apiResponse.status == 200) {
              this.spinner.hide(); // console.log(apiResponse.data);

              this.users = apiResponse.data; // console.log(this.users);
            } else {
              console.log(apiResponse);
              this.spinner.hide();
            }
          }, err => {
            console.log(err.error);
            this.toastr.error("some error occured");
          });
        };
      }

      ngOnInit() {
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.userId = this.localStorage.userId;
        this.authToken = this.appService.getAuthToken(); // this.checkStatus();

        this.getNormalUsers();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
      }

      toggleAccordian(event, index) {
        var element = event.target;
        element.classList.toggle("active");
        var panel = element.nextElementSibling;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }

    };

    AdmindashboardComponent.ctorParameters = () => [{
      type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
    }];

    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admindashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admindashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admindashboard.component.css */
      "./src/app/admin/admindashboard/admindashboard.component.css")).default]
    })], AdmindashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/create-meeting/create-meeting.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/create-meeting/create-meeting.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCreateMeetingCreateMeetingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: calc(100vh - 56px);\n}\n.notifyError {\n  color: #a94442;\n}\n.icon-background {\n  color: #002651;\n}\n.icon-background:hover {\n  color: #28c7fa;\n}\n.btn-outline-success {\n  color: #002651;\n  background-color: transparent;\n  background-image: none;\n  border-color: #002651;\n}\n.btn-outline-success:hover {\n  color: #28c7fa;\n  font-weight: 600;\n  background-color: #002651;\n  border-color: #002651;\n}\n.btn-outline-success:focus,\n.btn-outline-success.focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n.btn-outline-success.disabled,\n.btn-outline-success:disabled {\n  color: #073263;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active,\n.btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  background-color: transparent;\n  border-color: #002651;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n.card {\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n/*custom spinner*/\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/* Transparent Overlay */\n.loading:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.loading:not(:required):after {\n  content: \"\";\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,\n    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,\n    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,\n    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,\n    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlLW1lZXRpbmcvY3JlYXRlLW1lZXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjtBQUNBOzs7RUFHRSw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFJakQseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQU1wQjs7Ozt3Q0FJc0M7QUFDeEM7QUFFQSxjQUFjO0FBRWQ7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQWlDQTtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY3JlYXRlLW1lZXRpbmcvY3JlYXRlLW1lZXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG4ubm90aWZ5RXJyb3Ige1xuICBjb2xvcjogI2E5NDQ0Mjtcbn1cblxuLmljb24tYmFja2dyb3VuZCB7XG4gIGNvbG9yOiAjMDAyNjUxO1xufVxuXG4uaWNvbi1iYWNrZ3JvdW5kOmhvdmVyIHtcbiAgY29sb3I6ICMyOGM3ZmE7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6ICMwMDI2NTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gIGNvbG9yOiAjMjhjN2ZhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNjUxO1xuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpmb2N1cyxcbi5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICMwMDI2NTE7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCxcbi5idG4tb3V0bGluZS1zdWNjZXNzOmRpc2FibGVkIHtcbiAgY29sb3I6ICMwNzMyNjM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi8qY3VzdG9tIHNwaW5uZXIqL1xuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuLmxvYWRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcbiAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXG4gIGZvbnQ6IDAvMCBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tdG9wOiAtMC41ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgLW8tYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjVlbSAwIDAgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjVlbSAwIDAgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuNWVtIDAgMCAwLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcbn1cblxuLyogQW5pbWF0aW9uICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/create-meeting/create-meeting.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/create-meeting/create-meeting.component.ts ***!
    \******************************************************************/

  /*! exports provided: CreateMeetingComponent */

  /***/
  function srcAppAdminCreateMeetingCreateMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateMeetingComponent", function () {
      return CreateMeetingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let CreateMeetingComponent = class CreateMeetingComponent {
      constructor(appService, socketService, location1, _route, router, toastr, spinner) {
        this.appService = appService;
        this.socketService = socketService;
        this.location1 = location1;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.id = this._route.snapshot.paramMap.get("id");
        this.name = "Admin dashboard";
      }

      ngOnInit() {
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.admin_name = this.localStorage.userName;
        this.userId = this._route.snapshot.paramMap.get("id"); // console.log(this.userId);

        this.createdBy = this.localStorage._id;
        this.getSingleUser(this.userId);
      }

      disabledDay(date) {
        if (date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
          return date.getDate() < new Date().getDate();
        }
      }

      getSingleUser(userId) {
        // console.log("getSingleusercalled", userId);
        this.appService.getSingleUser(userId).subscribe(data => {
          // console.log(data);
          this.userObject = data.data._id; // console.log("this.userObject", data.data._id);
        });
      }

      goBack() {
        this.location1.back();
      }

      createMeeting() {
        let data = {
          purpose: this.purpose,
          location: this.location,
          startDate: this.startDate,
          endDate: this.endDate,
          createdBy: this.createdBy,
          userId: this.userId,
          userDetails: this.userObject
        };
        console.log(data); // this.appService.showLoadingSpinner();

        this.spinner.show();
        this.appService.createMeeting(data, this.userId).subscribe(apiResponse => {
          console.log(apiResponse);

          if (apiResponse.status == 201) {
            const message = "A new meeting on ".concat(apiResponse.data.purpose, " is created by ").concat(this.admin_name);
            let messageObj = {
              userId: data.userId,
              message: message
            };
            this.socketService.informServer(messageObj);
            this.toastr.success(apiResponse.message); // this.appService.hideLoadingSpinner();

            this.spinner.hide();
            this.router.navigate(["admin/user/", this.userId]);
          } else {
            // this.appService.hideLoadingSpinner();
            this.spinner.hide();
            this.toastr.error(apiResponse.message);
          }
        }, err => {
          this.toastr.error("Some error occured");
        });
      }

    };

    CreateMeetingComponent.ctorParameters = () => [{
      type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
    }];

    CreateMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-create-meeting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-meeting/create-meeting.component.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-meeting.component.css */
      "./src/app/admin/create-meeting/create-meeting.component.css")).default]
    })], CreateMeetingComponent);
    /***/
  },

  /***/
  "./src/app/admin/edit-meeting/edit-meeting.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin/edit-meeting/edit-meeting.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEditMeetingEditMeetingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: calc(100vh - 56px);\n}\n.notifyError {\n  color: #a94442;\n}\n.loading {\n  color: white;\n  padding-top: 50px;\n}\n.icon-background {\n  color: #002651;\n}\n.icon-background:hover {\n  color: #28c7fa;\n}\n.btn-outline-success {\n  color: #002651;\n  background-color: transparent;\n  background-image: none;\n  border-color: #002651;\n}\n.btn-outline-success:hover {\n  color: #28c7fa;\n  font-weight: 600;\n  background-color: #002651;\n  border-color: #002651;\n}\n.btn-outline-success:focus,\n.btn-outline-success.focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n.btn-outline-success.disabled,\n.btn-outline-success:disabled {\n  color: #073263;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active,\n.btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  background-color: transparent;\n  border-color: #002651;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n.card {\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZWRpdC1tZWV0aW5nL2VkaXQtbWVldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGdDQUFnQztBQUNsQztBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRTtrQ0FDZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9lZGl0LW1lZXRpbmcvZWRpdC1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xufVxuLm5vdGlmeUVycm9yIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG5cbi5sb2FkaW5nIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5pY29uLWJhY2tncm91bmQge1xuICBjb2xvcjogIzAwMjY1MTtcbn1cblxuLmljb24tYmFja2dyb3VuZDpob3ZlciB7XG4gIGNvbG9yOiAjMjhjN2ZhO1xufVxuXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMDAyNjUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogIzI4YzdmYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY1MTtcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZGlzYWJsZWQsXG4uYnRuLW91dGxpbmUtc3VjY2VzczpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjMDczMjYzO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICMwMDI2NTE7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogLTE1cHggMCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/edit-meeting/edit-meeting.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/edit-meeting/edit-meeting.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditMeetingComponent */

  /***/
  function srcAppAdminEditMeetingEditMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditMeetingComponent", function () {
      return EditMeetingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let EditMeetingComponent = class EditMeetingComponent {
      constructor(appService, socketService, _route, router, location1, modal, toastr, spinner) {
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.location1 = location1;
        this.modal = modal;
        this.toastr = toastr;
        this.spinner = spinner;
        this.name = "Admin dashboard";
        this.userId = this._route.snapshot.paramMap.get("id");
        this.editForm = {
          purpose: "",
          location: "",
          startDate: "",
          endDate: "",
          admin_name: ""
        };
        this.meetid = this._route.snapshot.paramMap.get("meetid");

        this.getMeeting = () => {
          this.spinner.show();
          this.appService.getAMeetingDetail(this.meetid).subscribe(apiResponse => {
            this.spinner.hide();
            console.log(apiResponse);
            this.editForm.purpose = apiResponse.data.purpose;
            this.editForm.location = apiResponse.data.location;
            this.editForm.startDate = apiResponse.data.startDate;
            this.editForm.endDate = apiResponse.data.endDate;
            this.editForm.admin_name = apiResponse.data.createdBy.userName;
          }, err => {
            console.log(err);
          });
        };

        this.editMeeting = () => {
          this.spinner.show();
          this.appService.editMeeting(this.userId, this.meetid, this.editForm).subscribe(apiResponse => {
            this.spinner.hide();
            console.log(apiResponse);
            this.toastr.info(apiResponse.message);
            const message = "A meeting on ".concat(this.editForm.purpose, " is edited by ").concat(this.admin);
            let messageObj = {
              userId: this.userId,
              message: message
            };
            this.socketService.informServer(messageObj);
            this.location1.back();
          }, err => {
            this.spinner.hide();
            console.log(err);
          });
        };

        this.deleteMeeting = () => {
          this.appService.deleteMeeting(this.userId, this.meetid).subscribe(apiResponse => {
            console.log(apiResponse);
            this.modalReference.close();
            this.location1.back();
          }, err => {
            console.log(err);
          });
        };

        this.openConfirmModal = () => {
          this.modalReference = this.modal.open(this.modalContent, {
            centered: true
          });
        };
      }

      ngOnInit() {
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.admin = this.localStorage.userName; // console.log(this.meetid);

        this.getMeeting();
      }

      goBack() {
        this.location1.back();
      }

    };

    EditMeetingComponent.ctorParameters = () => [{
      type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
    }, {
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      static: true
    })], EditMeetingComponent.prototype, "modalContent", void 0);
    EditMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-meeting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-meeting/edit-meeting.component.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-meeting.component.css */
      "./src/app/admin/edit-meeting/edit-meeting.component.css")).default]
    })], EditMeetingComponent);
    /***/
  },

  /***/
  "./src/app/admin/userdata/userdata.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/userdata/userdata.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUserdataUserdataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: calc(100vh - 56px);\n}\n\n/*custom color for bootstrap button*/\n\n.btn-primary {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal; */\n  /* border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:hover {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: #004d4d;\n  border-color: #009a9a; */\n  background-color: #03a7dd;\n  border-color: #03a7dd;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\n  box-shadow: 0 0 0 0.2rem #03a7dd;\n}\n\n.btn-primary.disabled,\n.btn-primary:disabled {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal;\n  border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active,\n.btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  /* color: #fff; */\n  color: #fff;\n  /* background-color: #00b3b3; */\n  background-color: #024e68;\n  border-color: #024e68;\n  /* border-color: #000; */\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\n}\n\n.btn-outline-primary {\n  color: #000;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28c7fa;\n}\n\n.btn-outline-primary:hover {\n  color: #000;\n  background-color: #03a7dd;\n  border-color: #03a7dd;\n}\n\n.btn-outline-primary:focus,\n.btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem #024e68;\n  border-color: #024e68;\n}\n\n.btn-outline-primary.disabled,\n.btn-outline-primary:disabled {\n  color: #000;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active,\n.btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #000;\n  background-color: transparent;\n  border-color: #024e68;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus,\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem #024e68;\n}\n\n.calendar {\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLG1EQUFtRDtFQUNuRCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWDswQkFDd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBQ0E7OztFQUdFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFDQTs7O0VBR0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO2tDQUNnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJkYXRhL3VzZXJkYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xufVxuXG4vKmN1c3RvbSBjb2xvciBmb3IgYm9vdHN0cmFwIGJ1dHRvbiovXG4uYnRuLXByaW1hcnkge1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgY29sb3I6ICMwMDA7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRlYWw7ICovXG4gIC8qIGJvcmRlci1jb2xvcjogIzAwNWE1YTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzdmYTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjN2ZhO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgY29sb3I6ICMwMDA7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDRkNGQ7XG4gIGJvcmRlci1jb2xvcjogIzAwOWE5YTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTdkZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDNhN2RkO1xufVxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgLyogYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgOTAsIDkwLCAwLjUpOyAqL1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzAzYTdkZDtcbn1cbi5idG4tcHJpbWFyeS5kaXNhYmxlZCxcbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogIzAwMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1YTVhOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjN2ZhO1xuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XG59XG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogI2ZmZjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwYjNiMzsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGU2ODtcbiAgYm9yZGVyLWNvbG9yOiAjMDI0ZTY4O1xuICAvKiBib3JkZXItY29sb3I6ICMwMDA7ICovXG59XG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDkwLCA5MCwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzI4YzdmYTtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E3ZGQ7XG4gIGJvcmRlci1jb2xvcjogIzAzYTdkZDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzAyNGU2ODtcbiAgYm9yZGVyLWNvbG9yOiAjMDI0ZTY4O1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQsXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDI0ZTY4O1xufVxuXG4uY2FsZW5kYXIge1xuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/userdata/userdata.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/userdata/userdata.component.ts ***!
    \******************************************************/

  /*! exports provided: UserdataComponent */

  /***/
  function srcAppAdminUserdataUserdataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdataComponent", function () {
      return UserdataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    let UserdataComponent = class UserdataComponent {
      constructor(appService, socketService, _route, router, toastr, modal, spinner) {
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.spinner = spinner;
        this.name = "Admin dashboard";
        this.endDate = "";
        this.meetingDetails = "";
        this.data = "";
        this.obj = "";
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
        this.showTemplate = true;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.currentUser = "";
        this.actions = [{
          label: '<i class="fa fa-fw fa-pencil"></i>',
          a11yLabel: "Edit",
          onClick: ({
            event
          }) => {
            // this.events = this.events.filter(iEvent => iEvent !== event);
            this.handleEvent("Edited", event);
          }
        }, {
          label: '<i class="fa fa-fw fa-times"></i>',
          a11yLabel: "Delete",
          onClick: ({
            event
          }) => {
            this.handleEvent("Deleted", event); // this.events = this.events.filter(iEvent => iEvent !== event);
          }
        }];

        this.deleteMeeting = meetingId => {
          this.appService.deleteMeeting(this.userId, meetingId).subscribe(apiResponse => {
            this.modalReference.close();
            this.toastr.success(apiResponse.message);
            const message = "A meeting on ".concat(this.purpose, " is deleted by ").concat(this.admin_name);
            let messageObj = {
              userId: this.userId,
              message: message
            };
            this.socketService.informServer(messageObj);
            this.events = this.events.filter(iEvent => iEvent.meetingId !== meetingId); //Go back to the route by using skip location method

            this.router.navigateByUrl("/admindashboard", {
              skipLocationChange: true
            }).then(() => {
              this.router.navigate(["/admin/user/".concat(this.userId)]);
              this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"].Day;
            });
          }, err => {
            console.log(err);
          });
        };

        this.createMeeting = () => {
          let id = this._route.snapshot.paramMap.get("id");

          console.log("create meeting called", id);
          this.router.navigate(["admin/user/create/", id]);
        };

        this.currentSelectedUser = () => {
          let id = this._route.snapshot.paramMap.get("id");

          this.appService.getSingleUser(id).subscribe(apiResponse => {
            if (apiResponse.status == 200) {
              this.currentUser = apiResponse.data.firstName;
            } else {
              this.toastr.error(apiResponse.message);
            }
          }, err => {
            console.log(err.message);
          });
        };

        this.logout = name => {
          this.toastr.success("".concat(name));
        };
      }

      ngOnInit() {
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.admin_name = this.localStorage.userName;
        this.getAllMeetings();

        if (this.userId == "undefined") {
          this.toastr.error("Please select a user to view the planner");
          this.showTemplate = false;
          setTimeout(() => {
            this.router.navigate(["/admindashboard"]);
          }, 2000);
        } // console.log(this.currentUser);

      }

      dayClicked({
        date,
        events
      }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameMonth"])(date, this.viewDate)) {
          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
            this.activeDayIsOpen = false;
            this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"].Day;
          } else {
            this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"].Day;
            this.toastr.info("View changed to: ".concat(this.view));
          }

          this.viewDate = date;
        }
      }

      handleEvent(action, event) {
        this.purpose = event["title"];

        if (action == "Clicked") {
          this.modalData = event;
          this.modalReference = this.modal.open(this.modalContent, {
            centered: true
          });
        } else if (action == "Edited") {
          this.modalData = event;

          let id = this._route.snapshot.paramMap.get("id");

          this.router.navigate(["admin/user/".concat(id, "/meeting/").concat(this.modalData["meetingId"])]);
        } else {
          this.meetingToDelete = event["meetingId"];
          this.modalReference = this.modal.open(this.confirmForDelete, {
            centered: true
          });
        }
      }

      editMeet(e) {
        this.modalReference.close();

        let id = this._route.snapshot.paramMap.get("id");

        this.router.navigate(["admin/user/".concat(id, "/meeting/").concat(e)]);
      }

      deleteMeet(e) {
        this.modalReference.close();
        this.meetingToDelete = e;
        this.modalReference = this.modal.open(this.confirmForDelete, {
          centered: true
        });
      }

      deleteEvent(e) {
        if (e.target.childNodes[0].data) {
          this.deleteMeeting(this.meetingToDelete);
        }
      }

      setView(view) {
        this.view = view;
      }

      closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
      }

      getAllMeetings() {
        this.spinner.show();
        this.appService.getAllMeetings(this.userId).subscribe(apiResponse => {
          if (apiResponse.status == 200) {
            this.spinner.hide();
            apiResponse.data.map(meeting => {
              this.events.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"])(meeting.startDate), 0), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"])(meeting.endDate), 0),
                title: meeting.purpose,
                color: meeting.color,
                actions: this.actions,
                location: meeting.location,
                meetingId: meeting.meetingId,
                createdBy: meeting.createdBy,
                userId: meeting.userId
              });
              this.refresh.next();
            });
          } else if (apiResponse.status == 204) {
            this.spinner.hide(); // this.toastr.info(apiResponse.message);

            console.log(apiResponse.message);
          } else {
            this.toastr.error(apiResponse.message);
          }
        }, err => {
          console.log(err.message);
        });
        this.currentSelectedUser();
      }

    };

    UserdataComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
    }, {
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      static: true
    })], UserdataComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmForDelete", {
      static: true
    })], UserdataComponent.prototype, "confirmForDelete", void 0);
    UserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userdata",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdata.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/userdata/userdata.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdata.component.css */
      "./src/app/admin/userdata/userdata.component.css")).default]
    })], UserdataComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _home_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/page-not-found/page-not-found.component */
    "./src/app/home/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");

    const routes = [{
      path: "login",
      component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      pathMatch: "full" // data: { animation: "isLogin" }

    }, {
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }, {
      path: "*",
      component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "**",
      component: _home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { slideInAnimation } from "./animation";
    // import { RouterOutlet } from "@angular/router";


    let AppComponent = class AppComponent {
      // import { slideInAnimation } from "./animation";
      // import { RouterOutlet } from "@angular/router";
      constructor() {
        this.title = "meet-up-application"; // getAnimationData(outlet: RouterOutlet) {
        //   return (
        //     outlet &&
        //     outlet.activatedRouteData &&
        //     outlet.activatedRouteData["animation"]
        //   );
        // }
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/socket.service.ts"); //importing formsModule
    //importing HttpClientModule
    //importing toaster
    //importing modules
    //importing service


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastContainerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"]],
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"], _socket_service__WEBPACK_IMPORTED_MODULE_15__["SocketService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); //http client


    let AppService = class AppService {
      constructor(_http) {
        this._http = _http; // private url = "http://localhost:3000/api/v1";

        this.url = "http://apimeetup.angularweb.tech/api/v1";
        this.showSpinner = false;
        this.hideSideNav = false;

        this.setUserInfoInLocalStorage = data => {
          localStorage.setItem("userInfo", JSON.stringify(data));
        };

        this.getUserInfoFromLocalStorage = () => {
          return JSON.parse(localStorage.getItem("userInfo"));
        };

        this.setAuthToken = data => {
          localStorage.setItem("authToken", JSON.stringify(data));
        };

        this.getAuthToken = () => {
          return JSON.parse(localStorage.getItem("authToken"));
        };

        this.removeUserInfoFromLocalStorage = () => {
          localStorage.removeItem("userInfo");
        };

        this.removeAuthTokenFromLocalStorage = () => {
          localStorage.removeItem("authToken");
        };
      }

      showLoadingSpinner() {
        this.showSpinner = true;
      }

      hideLoadingSpinner() {
        this.showSpinner = false;
      }

      toggleSideNav() {
        this.hideSideNav = !this.hideSideNav;
      } //user related services


      signUpFunction(data) {
        // console.log(data);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("firstName", data.firstName).set("lastName", data.lastName).set("email", data.email).set("mobileNumber", data.mobileNumber).set("password", data.password).set("userRole", data.userRole).set("userName", data.userName).set("countryCode", data.countryCode).set("countryName", data.countryName).set("internationalCode", data.internationalCode).set("avatar", data.avatar); // console.log(params);

        return this._http.post("".concat(this.url, "/users/signup"), params);
      }

      loginFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", data.email).set("password", data.password); // console.log("params", params);

        return this._http.post("".concat(this.url, "/users/login"), params);
      }

      forgotPasswordFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", data.email); // console.log("params", params);

        return this._http.post("".concat(this.url, "/users/forgotPassword"), params);
      }

      verifyPasswordResetLink(id, token) {
        // console.log(id, token);
        return this._http.get("".concat(this.url, "/users/resetPassword/").concat(id, "/").concat(token));
      }

      updatePassword(data) {
        // console.log(data);
        return this._http.post("".concat(this.url, "/users/updatePassword"), data);
      }

      getAllUsers() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get("".concat(this.url, "/users"), {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
      }

      getSingleUser(userId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken()); // console.log(userId);

        return this._http.get("".concat(this.url, "/users/").concat(userId), {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
      }

      logout(userId) {
        // console.log(userId);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userId", userId); // console.log("params", params);
        // let authToken = this.getAuthToken();
        // const params = new HttpParams().set("authToken", authToken);

        return this._http.post("".concat(this.url, "/users/logout"), params);
      } //meeting related services


      createMeeting(data, userId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        console.log(data);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("purpose", data.purpose).set("location", data.location).set("startDate", data.startDate).set("endDate", data.endDate).set("createdBy", data.createdBy).set("userId", data.userId).set("userDetails", data.userDetails);
        console.log(params);
        return this._http.post("".concat(this.url, "/meetings/create/").concat(userId), params, {
          headers: headers
        });
      }

      getAllMeetings(userId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get("".concat(this.url, "/meetings/user/").concat(userId), {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
      }

      getAMeetingDetail(meetid) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get("".concat(this.url, "/meetings/meeting/").concat(meetid), {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
      }

      deleteMeeting(userid, meetid) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        let data = {};
        return this._http.post("".concat(this.url, "/meetings/user/").concat(userid, "/meeting/").concat(meetid), data, {
          headers: headers
        });
      }

      editMeeting(userid, meetid, options) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.put("".concat(this.url, "/meetings/user/").concat(userid, "/meeting/").concat(meetid), options, {
          headers: headers
        });
      } //exception handler


      handleError(err) {
        console.log("Handle error Http Calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message);
      }

    };

    AppService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AppService);
    /***/
  },

  /***/
  "./src/app/home/forgot-password/forgot-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/home/forgot-password/forgot-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  /* margin: 0;\n  padding: 0; */\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nhtml body {\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(221, 221, 221);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.card {\n  box-shadow: 0px 3px 20px 2px #35baee;\n}\n\n.forgotPassword {\n  display: block;\n}\n\n.loginBtn {\n  margin-top: 2vh;\n  border-radius: 20px;\n}\n\n.signUpBtn {\n  margin-top: 2vh;\n}\n\nbody {\n  overflow-y: hidden;\n}\n\n@media screen and (min-width: 768px) {\n  .forgotPasswordForm {\n    width: 500px;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .forgotPasswordForm {\n    width: 300px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\ninput.ng-dirty.ng-valid {\n  border-color: #42a948;\n}\n\ninput.ng-dirty.ng-invalid {\n  border-color: #a94442;\n}\n\n.notifyError {\n  color: #a94442;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtlQUNhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBR0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIC8qIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5odG1sIGJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAyMHB4IDJweCAjMzViYWVlO1xufVxuXG4uZm9yZ290UGFzc3dvcmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ2luQnRuIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnNpZ25VcEJ0biB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcmdvdFBhc3N3b3JkRm9ybSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3RQYXNzd29yZEZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cbn1cblxuXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzQyYTk0ODtcbn1cblxuaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0Mjtcbn1cbi5ub3RpZnlFcnJvciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppHomeForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let ForgotPasswordComponent = class ForgotPasswordComponent {
      constructor(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;

        this.checkFormValidation = () => {
          if (!this.email) {
            this.toastr.warning("Email is missing");
          } else {
            return;
          }
        }; //end of checkFormValidation

      }

      ngOnInit() {// this.resetPasswordLinkFetched();
      }

      forgotPasswordFunction() {
        this.checkFormValidation();
        let data = {
          email: this.email
        }; // console.log("data", data);

        this.appService.forgotPasswordFunction(data).subscribe(apiResponse => {
          console.log(apiResponse);

          if (apiResponse.status == 200) {
            this.toastr.success(apiResponse.message);
          } else {
            this.toastr.error(apiResponse.message);
          }
        }, err => {
          this.toastr.error("Some error occured");
        });
      }

    };

    ForgotPasswordComponent.ctorParameters = () => [{
      type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }];

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forgot-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/home/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home/login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/signup/signup.component */
    "./src/app/home/signup/signup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/home/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/home/reset-password/reset-password.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/home/navbar/navbar.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/home/page-not-found/page-not-found.component.ts");

    let HomeModule = class HomeModule {};
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: "signup",
        component: _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: "forgotPassword",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]
      }, {
        path: "resetPassword/:id/:token",
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"]
      }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/home/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/home/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nbody {\n  background-color: rgb(221, 221, 221);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: #002651;\n}\n\n/*custom color for bootstrap buttons*/\n\n.btn-outline-success {\n  color: #002651;\n  background-color: transparent;\n  background-image: none;\n  border-color: #002651;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  font-weight: 500;\n  background-color: #002651;\n  border-color: #002651;\n}\n\n.btn-outline-success:focus,\n.btn-outline-success.focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n\n.btn-outline-success.disabled,\n.btn-outline-success:disabled {\n  color: #073263;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active,\n.btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  background-color: transparent;\n  border-color: #002651;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n\n.card {\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n.forgotPassword {\n  display: block;\n}\n\n.loginBtn {\n  margin-top: 2vh;\n  border-radius: 20px;\n}\n\n.signUpBtn {\n  margin-top: 2vh;\n}\n\nbody {\n  overflow-y: hidden;\n}\n\n@media screen and (min-width: 768px) {\n  .loginForm {\n    width: 500px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .loginForm {\n    width: 300px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .loginForm {\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\ninput.ng-dirty.ng-valid {\n  border-color: #42a948;\n}\n\ninput.ng-dirty.ng-invalid {\n  border-color: #a94442;\n}\n\n.notifyError {\n  color: #a94442;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFDQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDI2NTE7XG59XG5cbi8qY3VzdG9tIGNvbG9yIGZvciBib290c3RyYXAgYnV0dG9ucyovXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMDAyNjUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY1MTtcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjMDAyNjUxO1xufVxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZGlzYWJsZWQsXG4uYnRuLW91dGxpbmUtc3VjY2VzczpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjMDczMjYzO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICMwMDI2NTE7XG59XG5cbi5jYXJkIHtcbiAgLyogYm94LXNoYWRvdzogMHB4IDNweCAyMHB4IDJweCAjMzViYWVlOyAqL1xuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZvcmdvdFBhc3N3b3JkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbkJ0biB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5zaWduVXBCdG4ge1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbmJvZHkge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubG9naW5Gb3JtIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ2luRm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ2luRm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICB9XG59XG5cblxuaW5wdXQubmctZGlydHkubmctdmFsaWQge1xuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XG59XG5cbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XG59XG4ubm90aWZ5RXJyb3Ige1xuICBjb2xvcjogI2E5NDQ0Mjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppHomeLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts"); //toaster
    //import service


    let LoginComponent = class LoginComponent {
      constructor(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = "";
        this.password = "";

        this.checkFormValidation = () => {
          if (!this.email) {
            this.toastr.warning("Email is missing");
          } else if (!this.password) {
            this.toastr.warning("Password is missing");
          } else {
            return;
          }
        }; //end of checkFormValidation


        this.loginFunction = () => {
          document.querySelector(".loginBtn").textContent = "Logging....";
          this.checkFormValidation();
          let data = {
            email: this.email,
            password: this.password
          }; // console.log("data", data);

          this.appService.loginFunction(data).subscribe(apiResponse => {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              if (apiResponse.data.userDetails.userRole == "admin") {
                this.router.navigate(["/admindashboard"]);
                this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                this.appService.setAuthToken(apiResponse.data.authToken);
                this.toastr.success(apiResponse.message);
              } else {
                this.router.navigate(["/userdashboard/".concat(apiResponse.data.userDetails.userId)]);
                this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                this.appService.setAuthToken(apiResponse.data.authToken);
                this.toastr.success(apiResponse.message);
              }
            } else {
              console.log(apiResponse);
              this.toastr.error(apiResponse.message);
            }
          }, err => {
            document.querySelector(".loginBtn").textContent = "Login";
            this.toastr.error(err.error.message);
          });
        };
      }

      ngOnInit() {}

    };

    LoginComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/home/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/home/navbar/navbar.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/navbar/navbar.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.active {\n  color: #fff;\n  border-bottom: 5px solid#f90;\n  background-color: rgba(148, 134, 134, 0.5);\n  font-weight: bold;\n}\n\na:hover:not(.active):not(.navbar-brand) {\n  background-color: rgba(5, 81, 168, 0.5);\n}\n\n.navbar-color {\n  background: #002651;\n}\n\n.navbar-toggler {\n  color: #fff;\n  border: none !important;\n  outline: none !important;\n}\n\n.navbar-toggler .fa {\n  color: #fff;\n  font-size: 1.4rem;\n}\n\n.nav-link {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCNmOTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxMzQsIDEzNCwgMC41KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmE6aG92ZXI6bm90KC5hY3RpdmUpOm5vdCgubmF2YmFyLWJyYW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgODEsIDE2OCwgMC41KTtcbn1cblxuLm5hdmJhci1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICMwMDI2NTE7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm5hdmJhci10b2dnbGVyIC5mYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppHomeNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavbarComponent = class NavbarComponent {
      constructor() {}

      ngOnInit() {}

    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/home/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/home/page-not-found/page-not-found.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/home/page-not-found/page-not-found.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  /* margin: 0;\n    padding: 0; */\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nhtml body {\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(221, 221, 221);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.card {\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n.forgotPassword {\n  display: block;\n}\n\n.loginBtn {\n  margin-top: 2vh;\n  border-radius: 20px;\n}\n\n.signUpBtn {\n  margin-top: 2vh;\n}\n\nbody {\n  overflow-y: hidden;\n}\n\n@media screen and (min-width: 768px) {\n  .forgotPasswordForm {\n    width: 500px;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .forgotPasswordForm {\n    width: 300px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\ninput.ng-dirty.ng-valid {\n  border-color: #42a948;\n}\n\ninput.ng-dirty.ng-invalid {\n  border-color: #a94442;\n}\n\n.notifyError {\n  color: #a94442;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQztrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAvKiBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5odG1sIGJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZCB7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzM1YmFlZTsgKi9cbiAgYm94LXNoYWRvdzogLTE1cHggMCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW5CdG4ge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2lnblVwQnRuIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcmdvdFBhc3N3b3JkRm9ybSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3RQYXNzd29yZEZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cbn1cblxuaW5wdXQubmctZGlydHkubmctdmFsaWQge1xuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XG59XG5cbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XG59XG4ubm90aWZ5RXJyb3Ige1xuICBjb2xvcjogI2E5NDQ0Mjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/page-not-found/page-not-found.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/page-not-found/page-not-found.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppHomePageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PageNotFoundComponent = class PageNotFoundComponent {
      constructor() {}

      ngOnInit() {}

    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/home/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/home/reset-password/reset-password.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/home/reset-password/reset-password.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  /* margin: 0;\n    padding: 0; */\n  box-sizing: border-box;\n  font-size: 16px;\n}\nhtml {\n  margin: 0;\n}\nbody {\n  background-color: rgb(221, 221, 221);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n}\n.card {\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.forgotPassword {\n  display: block;\n}\n.loginBtn {\n  margin-top: 2vh;\n  border-radius: 20px;\n}\n.signUpBtn {\n  margin-top: 2vh;\n}\nbody {\n  overflow-y: hidden;\n}\n@media screen and (min-width: 768px) {\n  .resetPasswordForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .resetPasswordForm {\n    width: 300px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\ninput.ng-dirty.ng-valid {\n  border-color: #42a948;\n}\ninput.ng-dirty.ng-invalid {\n  border-color: #a94442;\n}\n.notifyError {\n  color: #a94442;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFFQTtFQUNFLDBDQUEwQztFQUMxQztrQ0FDZ0M7QUFDbEM7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAvKiBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZCB7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzM1YmFlZTsgKi9cbiAgYm94LXNoYWRvdzogLTE1cHggMCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW5CdG4ge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2lnblVwQnRuIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJlc2V0UGFzc3dvcmRGb3JtIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5yZXNldFBhc3N3b3JkRm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxufVxuXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzQyYTk0ODtcbn1cblxuaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0Mjtcbn1cbi5ub3RpZnlFcnJvciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppHomeResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    let ResetPasswordComponent = class ResetPasswordComponent {
      constructor(appService, _route, router, toastr, modal) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.isLink = false;

        this.updatePasswordFunction = () => {
          let data = {
            userId: this.userId,
            token: this.token,
            password: this.password
          };
          this.appService.updatePassword(data).subscribe(apiResponse => {
            console.log("Data posted");
            console.log(apiResponse);
          }, err => {
            console.log(err);
          });
        };
      }

      ngOnInit() {
        let id = this._route.snapshot.paramMap.get("id");

        let token = this._route.snapshot.paramMap.get("token"); // console.log("id", id);
        // console.log("token", token);


        this.appService.verifyPasswordResetLink(id, token).subscribe(apiResponse => {
          this.isLink = true; // console.log(apiResponse);
          // console.log(apiResponse.data.token);
          // console.log(apiResponse.data.userId);

          this.token = apiResponse.data.token;
          this.userId = apiResponse.data.userId;
        }, err => {
          console.log(err);
          console.log("Link expired");
          this.toastr.error("Link expired");
        });
      }

    };

    ResetPasswordComponent.ctorParameters = () => [{
      type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
    }];

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reset-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/home/reset-password/reset-password.component.css")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nhtml {\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(221, 221, 221);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.btn-outline-success {\n  color: #002651;\n  background-color: transparent;\n  background-image: none;\n  border-color: #002651;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  font-weight: 500;\n  background-color: #002651;\n  border-color: #002651;\n}\n\n.btn-outline-success:focus,\n.btn-outline-success.focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n\n.btn-outline-success.disabled,\n.btn-outline-success:disabled {\n  color: #073263;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active,\n.btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  background-color: transparent;\n  border-color: #002651;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.1rem #002651;\n}\n\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  width: 6em;\n  height: 6em;\n  margin: 0 auto;\n  float: none;\n}\n\n.card {\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n@media screen and (min-width: 768px) {\n  .signUpForm {\n    width: 500px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .signUpForm {\n    width: 300px;\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .signUpForm {\n    /* width: 300px; */\n    padding-top: 20%;\n    padding-bottom: 10%;\n  }\n}\n\ninput.ng-dirty.ng-valid {\n  border-color: #42a948;\n}\n\ninput.ng-dirty.ng-invalid {\n  border-color: #a94442;\n}\n\nselect.ng-invalid {\n  border-color: #a94442;\n}\n\nselect.ng-valid {\n  border-color: #42a948;\n}\n\n.notifyError {\n  color: #a94442;\n}\n\n.active {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQztrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzAwMjY1MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI2NTE7XG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzOmZvY3VzLFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcbn1cbi5idG4tb3V0bGluZS1zdWNjZXNzLmRpc2FibGVkLFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICBjb2xvcjogIzA3MzI2MztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XG59XG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjMDAyNjUxO1xufVxuXG4uY3JvcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDZlbTtcbiAgaGVpZ2h0OiA2ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmNhcmQge1xuICAvKiBib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMnB4ICMzNWJhZWU7ICovXG4gIGJveC1zaGFkb3c6IC0xNXB4IDAgMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgLTE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2lnblVwRm9ybSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuc2lnblVwRm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNpZ25VcEZvcm0ge1xuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cbn1cblxuaW5wdXQubmctZGlydHkubmctdmFsaWQge1xuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XG59XG5cbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XG59XG5zZWxlY3QubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0Mjtcbn1cbnNlbGVjdC5uZy12YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzQyYTk0ODtcbn1cbi5ub3RpZnlFcnJvciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppHomeSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _assets_names_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../assets/names.json */
    "./src/assets/names.json");

    var _assets_names_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/names.json */
    "./src/assets/names.json", 1);
    /* harmony import */


    var _assets_phones_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/phones.json */
    "./src/assets/phones.json");

    var _assets_phones_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../assets/phones.json */
    "./src/assets/phones.json", 1);
    /* harmony import */


    var src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/image-upload.service */
    "./src/app/image-upload.service.ts"); //toaster
    //import service


    let SignupComponent = class SignupComponent {
      constructor(appService, _route, router, toastr, imageUploadService) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.imageUploadService = imageUploadService;
        this.countryName = [];
        this.phoneCode = [];
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.selectedCountryCode = "IN";
        this.selectedCountryName = "";
        this.internationalCode = "91";
        this.userName = "";
        this.userRole = "normal";

        this.getCountryName = () => {
          let result = Object.keys(_assets_names_json__WEBPACK_IMPORTED_MODULE_5__).map(data => {
            return {
              code: data,
              name: _assets_names_json__WEBPACK_IMPORTED_MODULE_5__[data]
            };
          });
          return this.countryName = result;
        };

        this.getPhoneCode = () => {
          let result = Object.keys(_assets_phones_json__WEBPACK_IMPORTED_MODULE_6__).map(data => {
            return {
              code: data,
              number: _assets_phones_json__WEBPACK_IMPORTED_MODULE_6__[data]
            };
          });
          return this.phoneCode = result;
        };

        this.changed = event => {
          this.selectCountry(this.selectedCountryCode);

          for (let each of this.getPhoneCode()) {
            if (event.target.value === each.code) {
              this.internationalCode = each.number;
            }
          }
        };

        this.selectRole = event => {
          console.log(this.userRole);
          this.userRole == "admin" ? this.userName = "".concat(this.userName, "-").concat(this.userRole) : this.userName = this.userName.substring(0, this.userName.indexOf("-"));
          console.log(this.userName);
        };

        this.selectCountry = name => {
          Object.keys(_assets_names_json__WEBPACK_IMPORTED_MODULE_5__).map(data => {
            if (data == name) {
              this.selectedCountryName = _assets_names_json__WEBPACK_IMPORTED_MODULE_5__[data];
            }
          });
        };

        this.goToSignIn = () => {
          this.router.navigate(["/"]);
        }; //end of goToSignIn


        this.signUpFunction = () => {
          let data = {
            firstName: this.firstName,
            lastName: this.lastName,
            mobileNumber: this.mobileNumber,
            email: this.email,
            password: this.password,
            userRole: this.userRole,
            userName: this.userName,
            countryCode: this.selectedCountryCode,
            countryName: this.selectedCountryName,
            internationalCode: this.internationalCode,
            avatar: this.imageUrl
          }; // console.log("data", data);

          document.querySelector(".signUpBtn").textContent = "Signing....";
          this.appService.signUpFunction(data).subscribe(apiResponse => {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              this.toastr.success("Signup successful");
              setTimeout(() => {
                this.goToSignIn();
              }, 200);
            } else {
              this.toastr.error(apiResponse.message);
            }
          }, err => {
            console.log(err);
            document.querySelector(".signUpBtn").textContent = "Sign Up";
            this.toastr.error(err.error.message);
          });
        };

        this.cancelRegister = () => {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
          this.selectedCountryName = "";
          this.userName = "";
        };
      }

      ngOnInit() {
        this.getCountryName();
        this.getPhoneCode();
        this.selectCountry(this.selectedCountryCode); // console.log(this.userRole);
      }

      onSelectFile(event) {
        document.querySelector(".custom-file-label").textContent = event.target.files[0].name;

        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]); // read file as data url

          console.log("event.target.files[0]", event.target.files[0]);
          this.imageObj = event.target.files[0];

          reader.onload = event => {
            // called once readAsDataURL is completed
            console.log("onload", event.target["result"]);
            this.url = event.target["result"];
          };
        }
      }

      onImageUpload() {
        this.appService.showLoadingSpinner();

        if (this.url != undefined) {
          document.getElementById("imagePreview").style.display = "none";
        }

        const imageForm = new FormData();
        imageForm.append("image", this.imageObj);
        this.imageUploadService.imageUpload(imageForm).subscribe(res => {
          this.appService.hideLoadingSpinner();
          this.imageUrl = res["image"];
          this.imageUrl = "https://project-images-upload.s3.amazonaws.com/".concat(this.imageUrl);
          console.log(this.imageUrl);
        });
      }

    };

    SignupComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
    }, {
      type: src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_7__["ImageUploadService"]
    }];

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/home/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/image-upload.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/image-upload.service.ts ***!
    \*****************************************/

  /*! exports provided: ImageUploadService */

  /***/
  function srcAppImageUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadService", function () {
      return ImageUploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ImageUploadService = class ImageUploadService {
      constructor(_http) {
        this._http = _http; // private url = "http://localhost:3000/api/v1";

        this.url = "http://apimeetup.angularweb.tech/api/v1";
      }

      imageUpload(imageForm) {
        // console.log("image uploading", imageForm);
        return this._http.post("".concat(this.url, "/users/upload"), imageForm);
      }

    };

    ImageUploadService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ImageUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ImageUploadService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topnav/topnav.component */
    "./src/app/shared/topnav/topnav.component.ts");
    /* harmony import */


    var _sidenavtoggler_sidenavtoggler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidenavtoggler/sidenavtoggler.component */
    "./src/app/shared/sidenavtoggler/sidenavtoggler.component.ts");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidenav/sidenav.component */
    "./src/app/shared/sidenav/sidenav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SharedModule = class SharedModule {};
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_3__["TopnavComponent"], _sidenavtoggler_sidenavtoggler_component__WEBPACK_IMPORTED_MODULE_4__["SidenavtogglerComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_3__["TopnavComponent"], _sidenavtoggler_sidenavtoggler_component__WEBPACK_IMPORTED_MODULE_4__["SidenavtogglerComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidenav/sidenav.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/sidenav/sidenav.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidenavSidenavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: #002651;\n}\n\n#sidebar {\n  min-width: 225px;\n  max-width: 225px;\n  color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-weight: 300;\n  font-size: 1rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-self: flex-end;\n  background: #002651;\n}\n\n.filter-white {\n  -webkit-filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\n    brightness(102%) contrast(96%);\n          filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\n    brightness(102%) contrast(96%);\n}\n\n#sidebar.hidden {\n  margin-left: -225px;\n}\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\n@media screen and (max-width: 768px) {\n  #sidebar {\n    margin-left: -225px;\n    position: absolute;\n    height: 100vh;\n    z-index: 2;\n  }\n  #sidebar.hidden {\n    margin-left: 0;\n  }\n}\n\n.active {\n  color: #fff;\n}\n\na,\na:hover,\na:focus {\n  color: inherit;\n}\n\n#sidebar .sidebar-header {\n  padding: 20px;\n}\n\n#sidebar ul li a {\n  padding: 15px;\n  display: block;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n#sidebar ul li a.active {\n  border-right: 5px solid#f90;\n  font-weight: bold;\n  color: #28c7fa;\n  background-color: rgba(148, 134, 134, 0.5);\n}\n\n.focus {\n  border-right: 5px solid#f90;\n  background-color: rgba(148, 134, 134, 0.5);\n}\n\n#sidebar ul li a:hover:not(.active) {\n  background-color: rgba(5, 81, 168, 0.5);\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  z-index: 100;\n}\n\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  width: 5em;\n  height: 5em;\n  margin: 0 auto;\n  float: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7a0NBQ2dDO1VBRGhDO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzAwMjY1MTtcbn1cblxuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICBtYXgtd2lkdGg6IDIyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogIzAwMjY1MTtcbn1cblxuLmZpbHRlci13aGl0ZSB7XG4gIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIwMzMlKSBodWUtcm90YXRlKDEyNGRlZylcbiAgICBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDk2JSk7XG59XG5cbiNzaWRlYmFyLmhpZGRlbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XG59XG5cbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAjc2lkZWJhci5oaWRkZW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3NpZGViYXIgdWwgbGkgYS5hY3RpdmUge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCNmOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI4YzdmYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDEzNCwgMTM0LCAwLjUpO1xufVxuLmZvY3VzIHtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQjZjkwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTM0LCAxMzQsIDAuNSk7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA4MSwgMTY4LCAwLjUpO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY3JvcCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/sidenav/sidenav.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidenav/sidenav.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppSharedSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");

    let SidenavComponent = class SidenavComponent {
      constructor(appService, socketService, router, _route) {
        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this._route = _route;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.logout = () => {
          // Cookie.deleteAll();
          // this.router.navigate(["/"]);
          if (this.adminUserId) {
            console.log(this.adminUserId);
            this.appService.logout(this.adminUserId).subscribe(apiResponse => {
              console.log("apiResponse", apiResponse);
              this.notify.emit(apiResponse.message);
              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                // Cookie.delete("authToken");
                // Cookie.delete("receiverId");
                // Cookie.delete("receiverName");
                this.appService.removeUserInfoFromLocalStorage();
                this.appService.removeAuthTokenFromLocalStorage();
                this.socketService.disconnectedSocket(); // this.appService.removeUserInfoFromLocalStorage();
                // this.appService.removeAuthTokenFromLocalStorage();

                console.log("disconnected socket from socket service is called");
                this.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, err => {
              console.log(err.error);
              console.log("some error occured");
            });
          } else {
            console.log(this.normalUserId);
            this.appService.logout(this.normalUserId).subscribe(apiResponse => {
              console.log("apiResponse", apiResponse);
              this.notify.emit(apiResponse.message);
              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                // Cookie.delete("authToken");
                // Cookie.delete("receiverId");
                // Cookie.delete("receiverName");
                this.appService.removeUserInfoFromLocalStorage();
                this.appService.removeAuthTokenFromLocalStorage();
                this.socketService.disconnectedSocket(); // this.appService.removeUserInfoFromLocalStorage();
                // this.appService.removeAuthTokenFromLocalStorage();

                console.log("disconnected socket from socket service is called");
                this.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, err => {
              console.log(err.error);
              console.log("some error occured");
            });
          }
        };
      }

      ngOnInit() {
        // console.log("normalUserId", this.normalUserId);
        // console.log("admin user id", this.adminUserId);
        let x = this.appService.getUserInfoFromLocalStorage();
        this.role = x.userRole;
      }

      goToAdminDashboard() {
        this.router.navigate(["/admindashboard"]);
      }

      goToUserDashboard() {
        this.router.navigate(["/userdashboard/".concat(this._route.snapshot.paramMap.get("id"))]);
      }

    };

    SidenavComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "normalUserId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "adminUserId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SidenavComponent.prototype, "notify", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidenav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenav/sidenav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav.component.css */
      "./src/app/shared/sidenav/sidenav.component.css")).default]
    })], SidenavComponent);
    /***/
  },

  /***/
  "./src/app/shared/sidenavtoggler/sidenavtoggler.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/shared/sidenavtoggler/sidenavtoggler.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidenavtogglerSidenavtogglerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-toggler {\n  color: #fff;\n  border: none !important;\n  outline: none !important;\n}\n.navbar-toggler .fa {\n  color: #fff;\n  font-size: 1.4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGVuYXZ0b2dnbGVyL3NpZGVuYXZ0b2dnbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlbmF2dG9nZ2xlci9zaWRlbmF2dG9nZ2xlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLXRvZ2dsZXIgLmZhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/sidenavtoggler/sidenavtoggler.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/sidenavtoggler/sidenavtoggler.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SidenavtogglerComponent */

  /***/
  function srcAppSharedSidenavtogglerSidenavtogglerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavtogglerComponent", function () {
      return SidenavtogglerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");

    let SidenavtogglerComponent = class SidenavtogglerComponent {
      constructor(appService) {
        this.appService = appService;
      }

      ngOnInit() {}

    };

    SidenavtogglerComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }];

    SidenavtogglerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidenavtoggler",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenavtoggler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenavtoggler/sidenavtoggler.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenavtoggler.component.css */
      "./src/app/shared/sidenavtoggler/sidenavtoggler.component.css")).default]
    })], SidenavtogglerComponent);
    /***/
  },

  /***/
  "./src/app/shared/topnav/topnav.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/topnav/topnav.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedTopnavTopnavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  color: #ffff;\n}\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: auto;\n}\n/* svg color */\n.filter-white {\n  -webkit-filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\n    brightness(102%) contrast(96%);\n          filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\n    brightness(102%) contrast(96%);\n}\n.navbar-color {\n  background: #002651;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUEsY0FBYztBQUNkO0VBQ0U7a0NBQ2dDO1VBRGhDO2tDQUNnQztBQUNsQztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBjb2xvcjogI2ZmZmY7XG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4vKiBzdmcgY29sb3IgKi9cbi5maWx0ZXItd2hpdGUge1xuICBmaWx0ZXI6IGludmVydCg5NyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMDMzJSkgaHVlLXJvdGF0ZSgxMjRkZWcpXG4gICAgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5NiUpO1xufVxuXG4ubmF2YmFyLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzAwMjY1MTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/topnav/topnav.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/topnav/topnav.component.ts ***!
    \***************************************************/

  /*! exports provided: TopnavComponent */

  /***/
  function srcAppSharedTopnavTopnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return TopnavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");

    let TopnavComponent = class TopnavComponent {
      constructor(appService, router, socketService) {
        this.appService = appService;
        this.router = router;
        this.socketService = socketService;
        this.name = "";
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.logout = () => {
          this.appService.logout(this.User).subscribe(apiResponse => {
            console.log("apiResponse", apiResponse);
            this.notify.emit(apiResponse.message);
            console.log("logout sucessfull");

            if (apiResponse.status == 200) {
              this.appService.removeUserInfoFromLocalStorage();
              this.appService.removeAuthTokenFromLocalStorage();
              this.socketService.disconnectedSocket();
              console.log("disconnected socket from socket service is called");
              this.router.navigate(["/"]);
            } else {
              console.log(apiResponse.message);
            }
          }, err => {
            console.log(err.error);
            console.log("some error occured");
          });
        };
      }

      ngOnInit() {
        this.name = this.dashboardName;
      }

    };

    TopnavComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopnavComponent.prototype, "dashboardName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopnavComponent.prototype, "User", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TopnavComponent.prototype, "notify", void 0);
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-topnav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topnav/topnav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topnav.component.css */
      "./src/app/shared/topnav/topnav.component.css")).default]
    })], TopnavComponent);
    /***/
  },

  /***/
  "./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let SocketService = class SocketService {
      constructor(_http) {
        this._http = _http;

        this.verifyUser = () => {
          console.log("verifyUser called");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.socket.on("verifyUser", data => {
              console.log("verifyUser is catched", data);
              observer.next(data);
            });
          });
        }; //events to be emitted


        this.setUser = token => {
          // const token = JSON.parse(localStorage.getItem("authToken"));
          console.log("setUser");
          console.log("set-user is emitted");
          this.socket.emit("set-user", token);
        }; //end setUser


        this.onlineUsersList = () => {
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.socket.on("online-user-list", userList => {
              // console.log("online-user-list catched");
              // console.log("userlist", userList);
              observer.next(userList);
            });
          });
        };

        this.exitSocket = () => {
          this.socket.disconnect();
        };

        this.informServer = data => {
          // console.log("informServer is emitted");
          this.socket.emit("inform-server", data);
        };

        this.informUser = userId => {
          // console.log("MyIO emit is being catched", userId);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.socket.on(userId, data => {
              observer.next(data);
            }); //end Socket
          }); //end Observable
        };

        this.meetingNotification = userId => {
          // console.log("MyIO emit is being catched", userId);
          // this.socket.removeAllListeners(userId);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.socket.on(userId, data => {
              observer.next(data);
            }); //end Socket
          }); //end Observable
        }; //end of meetingNotification


        this.disconnectedSocket = () => {
          console.log("disconnected socket called");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            this.socket.emit("disconnect", () => {
              // console.log("disconnected is catched");
              // console.log("disconnect called");
              observer.next();
            });
          });
        }; //connection is being created
        //that handshake
        // this.socket = io("http://localhost:3000");


        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://apimeetup.angularweb.tech");
        this.authToken = JSON.parse(localStorage.getItem("authToken"));
      } //exception handler


      handleError(err) {
        let errorMessage = "";

        if (err.error instanceof Error) {
          errorMessage = "An error occured: ".concat(err.error.message);
        } else {
          errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.error.message);
        }

        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
      }

    };

    SocketService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }];

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SocketService);
    /***/
  },

  /***/
  "./src/app/user/user-route-guard.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/user/user-route-guard.service.ts ***!
    \**************************************************/

  /*! exports provided: UserRouteGuardService */

  /***/
  function srcAppUserUserRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRouteGuardService", function () {
      return UserRouteGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    let UserRouteGuardService = class UserRouteGuardService {
      constructor(router, appService, toastr) {
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      canActivate(route) {
        const authToken = this.appService.getAuthToken(); // console.log("in guard service", authToken, route.data);

        if (authToken === undefined || authToken === "" || authToken === null) {
          this.router.navigate(["/"]);
          return false;
        } else {
          return true;
        }
      }

    };

    UserRouteGuardService.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }];

    UserRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserRouteGuardService);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userdashboard/userdashboard.component */
    "./src/app/user/userdashboard/userdashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _user_route_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-route-guard.service */
    "./src/app/user/user-route-guard.service.ts");

    let UserModule = class UserModule {};
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserdashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: "userdashboard/:id",
        component: _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserdashboardComponent"],
        // data: { animation: "isUserDashboard" },
        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["UserRouteGuardService"]]
      }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      providers: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_11__["UserRouteGuardService"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/user/userdashboard/userdashboard.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/user/userdashboard/userdashboard.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserdashboardUserdashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: calc(100vh - 56px);\n}\n\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  width: 6em;\n  height: 6em;\n  margin: 0 auto;\n  float: none;\n}\n\n.calendar {\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\n    0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n/*bell icon animation*/\n\n.bell {\n  display: block;\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  margin: 50px auto 0;\n  color: #9e9e9e;\n  -webkit-animation: ring 4s 0.7s ease-in-out infinite;\n  -webkit-transform-origin: 50% 4px;\n  -moz-animation: ring 4s 0.7s ease-in-out infinite;\n  -moz-transform-origin: 50% 4px;\n  animation: ring 4s 0.7s ease-in-out infinite;\n  transform-origin: 50% 4px;\n}\n\n@-webkit-keyframes ring {\n  0% {\n    -webkit-transform: rotateZ(0);\n  }\n  1% {\n    -webkit-transform: rotateZ(30deg);\n  }\n  3% {\n    -webkit-transform: rotateZ(-28deg);\n  }\n  5% {\n    -webkit-transform: rotateZ(34deg);\n  }\n  7% {\n    -webkit-transform: rotateZ(-32deg);\n  }\n  9% {\n    -webkit-transform: rotateZ(30deg);\n  }\n  11% {\n    -webkit-transform: rotateZ(-28deg);\n  }\n  13% {\n    -webkit-transform: rotateZ(26deg);\n  }\n  15% {\n    -webkit-transform: rotateZ(-24deg);\n  }\n  17% {\n    -webkit-transform: rotateZ(22deg);\n  }\n  19% {\n    -webkit-transform: rotateZ(-20deg);\n  }\n  21% {\n    -webkit-transform: rotateZ(18deg);\n  }\n  23% {\n    -webkit-transform: rotateZ(-16deg);\n  }\n  25% {\n    -webkit-transform: rotateZ(14deg);\n  }\n  27% {\n    -webkit-transform: rotateZ(-12deg);\n  }\n  29% {\n    -webkit-transform: rotateZ(10deg);\n  }\n  31% {\n    -webkit-transform: rotateZ(-8deg);\n  }\n  33% {\n    -webkit-transform: rotateZ(6deg);\n  }\n  35% {\n    -webkit-transform: rotateZ(-4deg);\n  }\n  37% {\n    -webkit-transform: rotateZ(2deg);\n  }\n  39% {\n    -webkit-transform: rotateZ(-1deg);\n  }\n  41% {\n    -webkit-transform: rotateZ(1deg);\n  }\n\n  43% {\n    -webkit-transform: rotateZ(0);\n  }\n  100% {\n    -webkit-transform: rotateZ(0);\n  }\n}\n\n@keyframes ring {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  1% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n  }\n  3% {\n    -webkit-transform: rotate(-28deg);\n            transform: rotate(-28deg);\n  }\n  5% {\n    -webkit-transform: rotate(34deg);\n            transform: rotate(34deg);\n  }\n  7% {\n    -webkit-transform: rotate(-32deg);\n            transform: rotate(-32deg);\n  }\n  9% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n  }\n  11% {\n    -webkit-transform: rotate(-28deg);\n            transform: rotate(-28deg);\n  }\n  13% {\n    -webkit-transform: rotate(26deg);\n            transform: rotate(26deg);\n  }\n  15% {\n    -webkit-transform: rotate(-24deg);\n            transform: rotate(-24deg);\n  }\n  17% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  19% {\n    -webkit-transform: rotate(-20deg);\n            transform: rotate(-20deg);\n  }\n  21% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  23% {\n    -webkit-transform: rotate(-16deg);\n            transform: rotate(-16deg);\n  }\n  25% {\n    -webkit-transform: rotate(14deg);\n            transform: rotate(14deg);\n  }\n  27% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  29% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  31% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg);\n  }\n  33% {\n    -webkit-transform: rotate(6deg);\n            transform: rotate(6deg);\n  }\n  35% {\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  37% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n  }\n  39% {\n    -webkit-transform: rotate(-1deg);\n            transform: rotate(-1deg);\n  }\n  41% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg);\n  }\n\n  43% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n}\n\n/*custom color for bootstrap button*/\n\n.btn-primary {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal; */\n  /* border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:hover {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: #004d4d;\n  border-color: #009a9a; */\n  background-color: #03a7dd;\n  border-color: #03a7dd;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\n  box-shadow: 0 0 0 0.2rem #03a7dd;\n}\n\n.btn-primary.disabled,\n.btn-primary:disabled {\n  /* color: #fff; */\n  color: #000;\n  /* background-color: teal;\n  border-color: #005a5a; */\n  background-color: #28c7fa;\n  border-color: #28c7fa;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active,\n.btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  /* color: #fff; */\n  color: #fff;\n  /* background-color: #00b3b3; */\n  background-color: #024e68;\n  border-color: #024e68;\n  /* border-color: #000; */\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\n}\n\n.btn-outline-primary {\n  color: #000;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28c7fa;\n}\n\n.btn-outline-primary:hover {\n  color: #000;\n  background-color: #03a7dd;\n  border-color: #03a7dd;\n}\n\n.btn-outline-primary:focus,\n.btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem #024e68;\n  border-color: #024e68;\n}\n\n.btn-outline-primary.disabled,\n.btn-outline-primary:disabled {\n  color: #000;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active,\n.btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #000;\n  background-color: transparent;\n  border-color: #024e68;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus,\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem #024e68;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyZGFzaGJvYXJkL3VzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFO2tDQUNnQztBQUNsQzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0RBQW9EO0VBQ3BELGlDQUFpQztFQUNqQyxpREFBaUQ7RUFDakQsOEJBQThCO0VBQzlCLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBOEVBO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1g7MEJBQ3dCO0VBQ3hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsbURBQW1EO0VBQ25ELGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOzs7RUFHRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFDQTs7O0VBR0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyZGFzaGJvYXJkL3VzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG5cbi5jcm9wIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogNmVtO1xuICBoZWlnaHQ6IDZlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xufVxuXG4uY2FsZW5kYXIge1xuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLypiZWxsIGljb24gYW5pbWF0aW9uKi9cbi5iZWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaW5nIDRzIDAuN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDRweDtcbiAgLW1vei1hbmltYXRpb246IHJpbmcgNHMgMC43cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNHB4O1xuICBhbmltYXRpb246IHJpbmcgNHMgMC43cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDRweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJpbmcge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7XG4gIH1cbiAgMSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwZGVnKTtcbiAgfVxuICAzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTI4ZGVnKTtcbiAgfVxuICA1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzRkZWcpO1xuICB9XG4gIDclIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMzJkZWcpO1xuICB9XG4gIDklIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMGRlZyk7XG4gIH1cbiAgMTElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMjhkZWcpO1xuICB9XG4gIDEzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjZkZWcpO1xuICB9XG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTI0ZGVnKTtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDIyZGVnKTtcbiAgfVxuICAxOSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yMGRlZyk7XG4gIH1cbiAgMjElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxOGRlZyk7XG4gIH1cbiAgMjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMTZkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTRkZWcpO1xuICB9XG4gIDI3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTEyZGVnKTtcbiAgfVxuICAyOSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgfVxuICAzMSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC04ZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDZkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpO1xuICB9XG4gIDM3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMmRlZyk7XG4gIH1cbiAgMzklIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMWRlZyk7XG4gIH1cbiAgNDElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgfVxuXG4gIDQzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpbmcge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTtcbiAgfVxuICA1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNGRlZyk7XG4gIH1cbiAgNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTtcbiAgfVxuICA5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMTElIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XG4gIH1cbiAgMTMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTtcbiAgfVxuICAxNSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTI0ZGVnKTtcbiAgfVxuICAxNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xuICB9XG4gIDE5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDIxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gIH1cbiAgMjMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbiAgfVxuICAyNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgfVxuICAyOSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDMxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMzclIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDM5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgNDElIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xuICB9XG5cbiAgNDMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDElIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XG4gIH1cbiAgNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM0ZGVnKTtcbiAgfVxuICA3JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTtcbiAgfVxuICA5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB9XG4gIDExJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTtcbiAgfVxuICAxMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTtcbiAgfVxuICAxNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7XG4gIH1cbiAgMTclIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XG4gIH1cbiAgMTklIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDIxJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xuICB9XG4gIDIzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbiAgfVxuICAyNyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XG4gIH1cbiAgMjklIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMzElIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcbiAgfVxuICAzNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTtcbiAgfVxuICAzNyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDM5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpO1xuICB9XG4gIDQxJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XG4gIH1cblxuICA0MyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5cbi8qY3VzdG9tIGNvbG9yIGZvciBib290c3RyYXAgYnV0dG9uKi9cbi5idG4tcHJpbWFyeSB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogIzAwMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdGVhbDsgKi9cbiAgLyogYm9yZGVyLWNvbG9yOiAjMDA1YTVhOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjN2ZhO1xuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBjb2xvcjogIzAwMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwNGQ0ZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5YTlhOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhN2RkO1xuICBib3JkZXItY29sb3I6ICMwM2E3ZGQ7XG59XG4uYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnkuZm9jdXMge1xuICAvKiBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCA5MCwgOTAsIDAuNSk7ICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDNhN2RkO1xufVxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLFxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIGNvbG9yOiAjMDAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICBib3JkZXItY29sb3I6ICMwMDVhNWE7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3ZmE7XG4gIGJvcmRlci1jb2xvcjogIzI4YzdmYTtcbn1cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIGNvbG9yOiAjZmZmO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2IzOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZTY4O1xuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XG4gIC8qIGJvcmRlci1jb2xvcjogIzAwMDsgKi9cbn1cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgOTAsIDkwLCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhjN2ZhO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTdkZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDNhN2RkO1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6Zm9jdXMsXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDI0ZTY4O1xuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZCxcbi5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAyNGU2ODtcbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMwMjRlNjg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/userdashboard/userdashboard.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/userdashboard/userdashboard.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserdashboardComponent */

  /***/
  function srcAppUserUserdashboardUserdashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdashboardComponent", function () {
      return UserdashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/socket.service */
    "./src/app/socket.service.ts");
    /* harmony import */


    var src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/image-upload.service */
    "./src/app/image-upload.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");

    let UserdashboardComponent = class UserdashboardComponent {
      constructor(appService, socketService, _route, router, toastr, modal, imageUploadService) {
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.imageUploadService = imageUploadService;
        this.name = "User dashboard";
        this.localStorage = "";
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarView"];
        this.viewDate = new Date();
        this.modalData2 = "";
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.imgURL = "";

        this.checkStatus = () => {
          if (this._route.snapshot.paramMap.get("id") == this.localStorage.userId) {
            this.router.navigate(["/userdashboard/".concat(this._route.snapshot.paramMap.get("id"))]);
            return true;
          } else {
            this.appService.logout(this.localStorage.userId).subscribe(apiResponse => {
              // console.log("apiResponse", apiResponse);
              this.toastr.success("You are logged out as you tried to access invalid user id");
              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                this.appService.removeUserInfoFromLocalStorage();
                this.appService.removeAuthTokenFromLocalStorage();
                this.socketService.disconnectedSocket();
                console.log("disconnected socket from socket service is called");
                this.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, err => {
              console.log(err.error);
              console.log("some error occured");
            });
            return false;
          }
        }; //end checkStatus


        this.verifyUserConfirmation = () => {
          this.socketService.verifyUser().subscribe(data => {
            // console.log("verifyUserConfirmation", data);
            this.socketService.setUser(this.authToken);
          });
        };

        this.getOnlineUserList = () => {
          this.socketService.onlineUsersList().subscribe(userList => {// console.log("getOnlineUserList", userList);
          });
        };

        this.getMessageFromAdmin = () => {
          this.socketService.meetingNotification(this.userId).subscribe(data => {
            // console.log(data.userId);
            if (data.userId === this.userId) {
              // console.log(
              //   "data.userId",
              //   data.userId,
              //   "this.userId",
              //   this.userId,
              //   data.message
              // );
              if (data.isReminder) {
                this.modalData2 = data.message;
                this.modalReference = this.modal.open(this.reminderModal, {
                  centered: true
                });
                this.playAudio();
              } else this.toastr.info(data.message, null, {
                disableTimeOut: true,
                tapToDismiss: true,
                closeButton: true
              });
            }
          }); //end of subscribe
        }; //end get message from a user


        this.logout = name => {
          this.toastr.success("".concat(name));
        };
      }

      ngOnInit() {
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.authToken = this.appService.getAuthToken();
        this.checkStatus();
        this.getAllMeetings();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getMessageFromAdmin();
      }

      callTheReminderAgain() {
        this.modalReference.close(); // console.log("showAgain called");

        setTimeout(() => {
          this.modalReference = this.modal.open(this.reminderModal, {
            centered: true
          });
          this.playAudio();
        }, 5000);
      }

      playAudio() {
        let audio = new Audio();
        audio.src = "../../assets/alert-sound.mp3";
        audio.load();
        audio.play();
      }

      dayClicked({
        date,
        events
      }) {
        // console.log("day clicked");
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["isSameMonth"])(date, this.viewDate)) {
          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
            this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarView"].Day;
          } else {
            this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarView"].Day;
          }

          this.viewDate = date;
        }
      }

      handleEvent(action, event) {
        this.modalData1 = event;
        this.modal.open(this.modalContent, {
          centered: true
        });
      }

      deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
      }

      setView(view) {
        this.view = view;
      }

      closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
      }

      getAllMeetings() {
        this.appService.getAllMeetings(this.userId).subscribe(apiResponse => {
          apiResponse.data.map(meeting => {
            this.events.push({
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["parseISO"])(meeting.startDate), 0), 0),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["parseISO"])(meeting.endDate), 0),
              title: meeting.purpose,
              color: meeting.color,
              location: meeting.location,
              meetingId: meeting.meetingId,
              createdBy: meeting.createdBy,
              userId: meeting.userId
            });
            this.refresh.next();
          });
        });
      }

    };

    UserdashboardComponent.ctorParameters = () => [{
      type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
    }, {
      type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
    }, {
      type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
    }, {
      type: src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_6__["ImageUploadService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      static: true
    })], UserdashboardComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmTemplate", {
      static: true
    })], UserdashboardComponent.prototype, "confirmTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("reminderModal", {
      static: true
    })], UserdashboardComponent.prototype, "reminderModal", void 0);
    UserdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userdashboard",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdashboard.component.css */
      "./src/app/user/userdashboard/userdashboard.component.css")).default]
    })], UserdashboardComponent);
    /***/
  },

  /***/
  "./src/assets/names.json":
  /*!*******************************!*\
    !*** ./src/assets/names.json ***!
    \*******************************/

  /*! exports provided: BD, BE, BF, BG, BA, BB, WF, BL, BM, BN, BO, BH, BI, BJ, BT, JM, BV, BW, WS, BQ, BR, BS, JE, BY, BZ, RU, RW, RS, TL, RE, TM, TJ, RO, TK, GW, GU, GT, GS, GR, GQ, GP, JP, GY, GG, GF, GE, GD, GB, GA, SV, GN, GM, GL, GI, GH, OM, TN, JO, HR, HT, HU, HK, HN, HM, VE, PR, PS, PW, PT, SJ, PY, IQ, PA, PF, PG, PE, PK, PH, PN, PL, PM, ZM, EH, EE, EG, ZA, EC, IT, VN, SB, ET, SO, ZW, SA, ES, ER, ME, MD, MG, MF, MA, MC, UZ, MM, ML, MO, MN, MH, MK, MU, MT, MW, MV, MQ, MP, MS, MR, IM, UG, TZ, MY, MX, IL, FR, IO, SH, FI, FJ, FK, FM, FO, NI, NL, NO, NA, VU, NC, NE, NF, NG, NZ, NP, NR, NU, CK, XK, CI, CH, CO, CN, CM, CL, CC, CA, CG, CF, CD, CZ, CY, CX, CR, CW, CV, CU, SZ, SY, SX, KG, KE, SS, SR, KI, KH, KN, KM, ST, SK, KR, SI, KP, KW, SN, SM, SL, SC, KZ, KY, SG, SE, SD, DO, DM, DJ, DK, VG, DE, YE, DZ, US, UY, YT, UM, LB, LC, LA, TV, TW, TT, TR, LK, LI, LV, TO, LT, LU, LR, LS, TH, TF, TG, TD, TC, LY, VA, VC, AE, AD, AG, AF, AI, VI, IS, IR, AM, AL, AO, AQ, AS, AR, AU, AT, AW, IN, AX, AZ, IE, ID, UA, QA, MZ, default */

  /***/
  function srcAssetsNamesJson(module) {
    module.exports = JSON.parse("{\"BD\":\"Bangladesh\",\"BE\":\"Belgium\",\"BF\":\"Burkina Faso\",\"BG\":\"Bulgaria\",\"BA\":\"Bosnia and Herzegovina\",\"BB\":\"Barbados\",\"WF\":\"Wallis and Futuna\",\"BL\":\"Saint Barthelemy\",\"BM\":\"Bermuda\",\"BN\":\"Brunei\",\"BO\":\"Bolivia\",\"BH\":\"Bahrain\",\"BI\":\"Burundi\",\"BJ\":\"Benin\",\"BT\":\"Bhutan\",\"JM\":\"Jamaica\",\"BV\":\"Bouvet Island\",\"BW\":\"Botswana\",\"WS\":\"Samoa\",\"BQ\":\"Bonaire, Saint Eustatius and Saba \",\"BR\":\"Brazil\",\"BS\":\"Bahamas\",\"JE\":\"Jersey\",\"BY\":\"Belarus\",\"BZ\":\"Belize\",\"RU\":\"Russia\",\"RW\":\"Rwanda\",\"RS\":\"Serbia\",\"TL\":\"East Timor\",\"RE\":\"Reunion\",\"TM\":\"Turkmenistan\",\"TJ\":\"Tajikistan\",\"RO\":\"Romania\",\"TK\":\"Tokelau\",\"GW\":\"Guinea-Bissau\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GS\":\"South Georgia and the South Sandwich Islands\",\"GR\":\"Greece\",\"GQ\":\"Equatorial Guinea\",\"GP\":\"Guadeloupe\",\"JP\":\"Japan\",\"GY\":\"Guyana\",\"GG\":\"Guernsey\",\"GF\":\"French Guiana\",\"GE\":\"Georgia\",\"GD\":\"Grenada\",\"GB\":\"United Kingdom\",\"GA\":\"Gabon\",\"SV\":\"El Salvador\",\"GN\":\"Guinea\",\"GM\":\"Gambia\",\"GL\":\"Greenland\",\"GI\":\"Gibraltar\",\"GH\":\"Ghana\",\"OM\":\"Oman\",\"TN\":\"Tunisia\",\"JO\":\"Jordan\",\"HR\":\"Croatia\",\"HT\":\"Haiti\",\"HU\":\"Hungary\",\"HK\":\"Hong Kong\",\"HN\":\"Honduras\",\"HM\":\"Heard Island and McDonald Islands\",\"VE\":\"Venezuela\",\"PR\":\"Puerto Rico\",\"PS\":\"Palestinian Territory\",\"PW\":\"Palau\",\"PT\":\"Portugal\",\"SJ\":\"Svalbard and Jan Mayen\",\"PY\":\"Paraguay\",\"IQ\":\"Iraq\",\"PA\":\"Panama\",\"PF\":\"French Polynesia\",\"PG\":\"Papua New Guinea\",\"PE\":\"Peru\",\"PK\":\"Pakistan\",\"PH\":\"Philippines\",\"PN\":\"Pitcairn\",\"PL\":\"Poland\",\"PM\":\"Saint Pierre and Miquelon\",\"ZM\":\"Zambia\",\"EH\":\"Western Sahara\",\"EE\":\"Estonia\",\"EG\":\"Egypt\",\"ZA\":\"South Africa\",\"EC\":\"Ecuador\",\"IT\":\"Italy\",\"VN\":\"Vietnam\",\"SB\":\"Solomon Islands\",\"ET\":\"Ethiopia\",\"SO\":\"Somalia\",\"ZW\":\"Zimbabwe\",\"SA\":\"Saudi Arabia\",\"ES\":\"Spain\",\"ER\":\"Eritrea\",\"ME\":\"Montenegro\",\"MD\":\"Moldova\",\"MG\":\"Madagascar\",\"MF\":\"Saint Martin\",\"MA\":\"Morocco\",\"MC\":\"Monaco\",\"UZ\":\"Uzbekistan\",\"MM\":\"Myanmar\",\"ML\":\"Mali\",\"MO\":\"Macao\",\"MN\":\"Mongolia\",\"MH\":\"Marshall Islands\",\"MK\":\"Macedonia\",\"MU\":\"Mauritius\",\"MT\":\"Malta\",\"MW\":\"Malawi\",\"MV\":\"Maldives\",\"MQ\":\"Martinique\",\"MP\":\"Northern Mariana Islands\",\"MS\":\"Montserrat\",\"MR\":\"Mauritania\",\"IM\":\"Isle of Man\",\"UG\":\"Uganda\",\"TZ\":\"Tanzania\",\"MY\":\"Malaysia\",\"MX\":\"Mexico\",\"IL\":\"Israel\",\"FR\":\"France\",\"IO\":\"British Indian Ocean Territory\",\"SH\":\"Saint Helena\",\"FI\":\"Finland\",\"FJ\":\"Fiji\",\"FK\":\"Falkland Islands\",\"FM\":\"Micronesia\",\"FO\":\"Faroe Islands\",\"NI\":\"Nicaragua\",\"NL\":\"Netherlands\",\"NO\":\"Norway\",\"NA\":\"Namibia\",\"VU\":\"Vanuatu\",\"NC\":\"New Caledonia\",\"NE\":\"Niger\",\"NF\":\"Norfolk Island\",\"NG\":\"Nigeria\",\"NZ\":\"New Zealand\",\"NP\":\"Nepal\",\"NR\":\"Nauru\",\"NU\":\"Niue\",\"CK\":\"Cook Islands\",\"XK\":\"Kosovo\",\"CI\":\"Ivory Coast\",\"CH\":\"Switzerland\",\"CO\":\"Colombia\",\"CN\":\"China\",\"CM\":\"Cameroon\",\"CL\":\"Chile\",\"CC\":\"Cocos Islands\",\"CA\":\"Canada\",\"CG\":\"Republic of the Congo\",\"CF\":\"Central African Republic\",\"CD\":\"Democratic Republic of the Congo\",\"CZ\":\"Czech Republic\",\"CY\":\"Cyprus\",\"CX\":\"Christmas Island\",\"CR\":\"Costa Rica\",\"CW\":\"Curacao\",\"CV\":\"Cape Verde\",\"CU\":\"Cuba\",\"SZ\":\"Swaziland\",\"SY\":\"Syria\",\"SX\":\"Sint Maarten\",\"KG\":\"Kyrgyzstan\",\"KE\":\"Kenya\",\"SS\":\"South Sudan\",\"SR\":\"Suriname\",\"KI\":\"Kiribati\",\"KH\":\"Cambodia\",\"KN\":\"Saint Kitts and Nevis\",\"KM\":\"Comoros\",\"ST\":\"Sao Tome and Principe\",\"SK\":\"Slovakia\",\"KR\":\"South Korea\",\"SI\":\"Slovenia\",\"KP\":\"North Korea\",\"KW\":\"Kuwait\",\"SN\":\"Senegal\",\"SM\":\"San Marino\",\"SL\":\"Sierra Leone\",\"SC\":\"Seychelles\",\"KZ\":\"Kazakhstan\",\"KY\":\"Cayman Islands\",\"SG\":\"Singapore\",\"SE\":\"Sweden\",\"SD\":\"Sudan\",\"DO\":\"Dominican Republic\",\"DM\":\"Dominica\",\"DJ\":\"Djibouti\",\"DK\":\"Denmark\",\"VG\":\"British Virgin Islands\",\"DE\":\"Germany\",\"YE\":\"Yemen\",\"DZ\":\"Algeria\",\"US\":\"United States\",\"UY\":\"Uruguay\",\"YT\":\"Mayotte\",\"UM\":\"United States Minor Outlying Islands\",\"LB\":\"Lebanon\",\"LC\":\"Saint Lucia\",\"LA\":\"Laos\",\"TV\":\"Tuvalu\",\"TW\":\"Taiwan\",\"TT\":\"Trinidad and Tobago\",\"TR\":\"Turkey\",\"LK\":\"Sri Lanka\",\"LI\":\"Liechtenstein\",\"LV\":\"Latvia\",\"TO\":\"Tonga\",\"LT\":\"Lithuania\",\"LU\":\"Luxembourg\",\"LR\":\"Liberia\",\"LS\":\"Lesotho\",\"TH\":\"Thailand\",\"TF\":\"French Southern Territories\",\"TG\":\"Togo\",\"TD\":\"Chad\",\"TC\":\"Turks and Caicos Islands\",\"LY\":\"Libya\",\"VA\":\"Vatican\",\"VC\":\"Saint Vincent and the Grenadines\",\"AE\":\"United Arab Emirates\",\"AD\":\"Andorra\",\"AG\":\"Antigua and Barbuda\",\"AF\":\"Afghanistan\",\"AI\":\"Anguilla\",\"VI\":\"U.S. Virgin Islands\",\"IS\":\"Iceland\",\"IR\":\"Iran\",\"AM\":\"Armenia\",\"AL\":\"Albania\",\"AO\":\"Angola\",\"AQ\":\"Antarctica\",\"AS\":\"American Samoa\",\"AR\":\"Argentina\",\"AU\":\"Australia\",\"AT\":\"Austria\",\"AW\":\"Aruba\",\"IN\":\"India\",\"AX\":\"Aland Islands\",\"AZ\":\"Azerbaijan\",\"IE\":\"Ireland\",\"ID\":\"Indonesia\",\"UA\":\"Ukraine\",\"QA\":\"Qatar\",\"MZ\":\"Mozambique\"}");
    /***/
  },

  /***/
  "./src/assets/phones.json":
  /*!********************************!*\
    !*** ./src/assets/phones.json ***!
    \********************************/

  /*! exports provided: BD, BE, BF, BG, BA, BB, WF, BL, BM, BN, BO, BH, BI, BJ, BT, JM, BV, BW, WS, BQ, BR, BS, JE, BY, BZ, RU, RW, RS, TL, RE, TM, TJ, RO, TK, GW, GU, GT, GS, GR, GQ, GP, JP, GY, GG, GF, GE, GD, GB, GA, SV, GN, GM, GL, GI, GH, OM, TN, JO, HR, HT, HU, HK, HN, HM, VE, PR, PS, PW, PT, SJ, PY, IQ, PA, PF, PG, PE, PK, PH, PN, PL, PM, ZM, EH, EE, EG, ZA, EC, IT, VN, SB, ET, SO, ZW, SA, ES, ER, ME, MD, MG, MF, MA, MC, UZ, MM, ML, MO, MN, MH, MK, MU, MT, MW, MV, MQ, MP, MS, MR, IM, UG, TZ, MY, MX, IL, FR, IO, SH, FI, FJ, FK, FM, FO, NI, NL, NO, NA, VU, NC, NE, NF, NG, NZ, NP, NR, NU, CK, XK, CI, CH, CO, CN, CM, CL, CC, CA, CG, CF, CD, CZ, CY, CX, CR, CW, CV, CU, SZ, SY, SX, KG, KE, SS, SR, KI, KH, KN, KM, ST, SK, KR, SI, KP, KW, SN, SM, SL, SC, KZ, KY, SG, SE, SD, DO, DM, DJ, DK, VG, DE, YE, DZ, US, UY, YT, UM, LB, LC, LA, TV, TW, TT, TR, LK, LI, LV, TO, LT, LU, LR, LS, TH, TF, TG, TD, TC, LY, VA, VC, AE, AD, AG, AF, AI, VI, IS, IR, AM, AL, AO, AQ, AS, AR, AU, AT, AW, IN, AX, AZ, IE, ID, UA, QA, MZ, default */

  /***/
  function srcAssetsPhonesJson(module) {
    module.exports = JSON.parse("{\"BD\":\"880\",\"BE\":\"32\",\"BF\":\"226\",\"BG\":\"359\",\"BA\":\"387\",\"BB\":\"+1-246\",\"WF\":\"681\",\"BL\":\"590\",\"BM\":\"+1-441\",\"BN\":\"673\",\"BO\":\"591\",\"BH\":\"973\",\"BI\":\"257\",\"BJ\":\"229\",\"BT\":\"975\",\"JM\":\"+1-876\",\"BV\":\"\",\"BW\":\"267\",\"WS\":\"685\",\"BQ\":\"599\",\"BR\":\"55\",\"BS\":\"+1-242\",\"JE\":\"+44-1534\",\"BY\":\"375\",\"BZ\":\"501\",\"RU\":\"7\",\"RW\":\"250\",\"RS\":\"381\",\"TL\":\"670\",\"RE\":\"262\",\"TM\":\"993\",\"TJ\":\"992\",\"RO\":\"40\",\"TK\":\"690\",\"GW\":\"245\",\"GU\":\"+1-671\",\"GT\":\"502\",\"GS\":\"\",\"GR\":\"30\",\"GQ\":\"240\",\"GP\":\"590\",\"JP\":\"81\",\"GY\":\"592\",\"GG\":\"+44-1481\",\"GF\":\"594\",\"GE\":\"995\",\"GD\":\"+1-473\",\"GB\":\"44\",\"GA\":\"241\",\"SV\":\"503\",\"GN\":\"224\",\"GM\":\"220\",\"GL\":\"299\",\"GI\":\"350\",\"GH\":\"233\",\"OM\":\"968\",\"TN\":\"216\",\"JO\":\"962\",\"HR\":\"385\",\"HT\":\"509\",\"HU\":\"36\",\"HK\":\"852\",\"HN\":\"504\",\"HM\":\" \",\"VE\":\"58\",\"PR\":\"+1-787 and 1-939\",\"PS\":\"970\",\"PW\":\"680\",\"PT\":\"351\",\"SJ\":\"47\",\"PY\":\"595\",\"IQ\":\"964\",\"PA\":\"507\",\"PF\":\"689\",\"PG\":\"675\",\"PE\":\"51\",\"PK\":\"92\",\"PH\":\"63\",\"PN\":\"870\",\"PL\":\"48\",\"PM\":\"508\",\"ZM\":\"260\",\"EH\":\"212\",\"EE\":\"372\",\"EG\":\"20\",\"ZA\":\"27\",\"EC\":\"593\",\"IT\":\"39\",\"VN\":\"84\",\"SB\":\"677\",\"ET\":\"251\",\"SO\":\"252\",\"ZW\":\"263\",\"SA\":\"966\",\"ES\":\"34\",\"ER\":\"291\",\"ME\":\"382\",\"MD\":\"373\",\"MG\":\"261\",\"MF\":\"590\",\"MA\":\"212\",\"MC\":\"377\",\"UZ\":\"998\",\"MM\":\"95\",\"ML\":\"223\",\"MO\":\"853\",\"MN\":\"976\",\"MH\":\"692\",\"MK\":\"389\",\"MU\":\"230\",\"MT\":\"356\",\"MW\":\"265\",\"MV\":\"960\",\"MQ\":\"596\",\"MP\":\"+1-670\",\"MS\":\"+1-664\",\"MR\":\"222\",\"IM\":\"+44-1624\",\"UG\":\"256\",\"TZ\":\"255\",\"MY\":\"60\",\"MX\":\"52\",\"IL\":\"972\",\"FR\":\"33\",\"IO\":\"246\",\"SH\":\"290\",\"FI\":\"358\",\"FJ\":\"679\",\"FK\":\"500\",\"FM\":\"691\",\"FO\":\"298\",\"NI\":\"505\",\"NL\":\"31\",\"NO\":\"47\",\"NA\":\"264\",\"VU\":\"678\",\"NC\":\"687\",\"NE\":\"227\",\"NF\":\"672\",\"NG\":\"234\",\"NZ\":\"64\",\"NP\":\"977\",\"NR\":\"674\",\"NU\":\"683\",\"CK\":\"682\",\"XK\":\"\",\"CI\":\"225\",\"CH\":\"41\",\"CO\":\"57\",\"CN\":\"86\",\"CM\":\"237\",\"CL\":\"56\",\"CC\":\"61\",\"CA\":\"1\",\"CG\":\"242\",\"CF\":\"236\",\"CD\":\"243\",\"CZ\":\"420\",\"CY\":\"357\",\"CX\":\"61\",\"CR\":\"506\",\"CW\":\"599\",\"CV\":\"238\",\"CU\":\"53\",\"SZ\":\"268\",\"SY\":\"963\",\"SX\":\"599\",\"KG\":\"996\",\"KE\":\"254\",\"SS\":\"211\",\"SR\":\"597\",\"KI\":\"686\",\"KH\":\"855\",\"KN\":\"+1-869\",\"KM\":\"269\",\"ST\":\"239\",\"SK\":\"421\",\"KR\":\"82\",\"SI\":\"386\",\"KP\":\"850\",\"KW\":\"965\",\"SN\":\"221\",\"SM\":\"378\",\"SL\":\"232\",\"SC\":\"248\",\"KZ\":\"7\",\"KY\":\"+1-345\",\"SG\":\"65\",\"SE\":\"46\",\"SD\":\"249\",\"DO\":\"+1-809 and 1-829\",\"DM\":\"+1-767\",\"DJ\":\"253\",\"DK\":\"45\",\"VG\":\"+1-284\",\"DE\":\"49\",\"YE\":\"967\",\"DZ\":\"213\",\"US\":\"1\",\"UY\":\"598\",\"YT\":\"262\",\"UM\":\"1\",\"LB\":\"961\",\"LC\":\"+1-758\",\"LA\":\"856\",\"TV\":\"688\",\"TW\":\"886\",\"TT\":\"+1-868\",\"TR\":\"90\",\"LK\":\"94\",\"LI\":\"423\",\"LV\":\"371\",\"TO\":\"676\",\"LT\":\"370\",\"LU\":\"352\",\"LR\":\"231\",\"LS\":\"266\",\"TH\":\"66\",\"TF\":\"\",\"TG\":\"228\",\"TD\":\"235\",\"TC\":\"+1-649\",\"LY\":\"218\",\"VA\":\"379\",\"VC\":\"+1-784\",\"AE\":\"971\",\"AD\":\"376\",\"AG\":\"+1-268\",\"AF\":\"93\",\"AI\":\"+1-264\",\"VI\":\"+1-340\",\"IS\":\"354\",\"IR\":\"98\",\"AM\":\"374\",\"AL\":\"355\",\"AO\":\"244\",\"AQ\":\"\",\"AS\":\"+1-684\",\"AR\":\"54\",\"AU\":\"61\",\"AT\":\"43\",\"AW\":\"297\",\"IN\":\"91\",\"AX\":\"+358-18\",\"AZ\":\"994\",\"IE\":\"353\",\"ID\":\"62\",\"UA\":\"380\",\"QA\":\"974\",\"MZ\":\"258\"}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Acer\Desktop\Frontend\meet-up-application\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map