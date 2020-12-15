function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<app-topnav\r\n  [dashboardName]=\"name\"\r\n></app-topnav>\r\n<div class=\"wrapper\">\r\n  <app-sidenav\r\n    [adminUserId]=\"localStorage.userId\"\r\n    [avatar]=\"localStorage.avatar\"\r\n    [username]=\"localStorage.userName\"\r\n  ></app-sidenav>\r\n  <div\r\n    class=\"py-4 px-4\"\r\n    style=\"flex: 1 1 auto;\r\n   overflow-y: auto;\"\r\n  >\r\n    <ngx-spinner\r\n      style=\"height: 50px; width: 500px;\"\r\n      bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n      size=\"medium\"\r\n      color=\"#fff\"\r\n      type=\"ball-atom\"\r\n      [fullScreen]=\"false\"\r\n      ><p style=\"color: white\">Getting users list...</p></ngx-spinner\r\n    >\r\n    <button\r\n      class=\"btn btn-primary my-2\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#collapseExample\"\r\n      aria-expanded=\"false\"\r\n      aria-controls=\"collapseExample\"\r\n    >\r\n      Currently online users\r\n    </button>\r\n    <div class=\"collapse\" id=\"collapseExample\" *ngIf=\"onlineUsers.length > 0\">\r\n      <div class=\"card-body\" *ngFor=\"let online of onlineUsers\">\r\n        {{ online.firstName }}\r\n      </div>\r\n    </div>\r\n    <div class=\"collapse\" id=\"collapseExample\" *ngIf=\"onlineUsers.length == 0\">\r\n      <div class=\"card-body\">\r\n        No one is online\r\n      </div>\r\n    </div>\r\n    <h4 class=\"mt-2 text-center\">List of all users</h4>\r\n    <div class=\"card no-users\" *ngIf=\"users.length == 0\">\r\n      <p>No users registered</p>\r\n    </div>\r\n    <div *ngFor=\"let user of users; let i = index\">\r\n      <button class=\"accordion\" (click)=\"toggleAccordian($event, i)\">\r\n        {{ user.firstName }} {{ user.lastName }}\r\n      </button>\r\n      <div class=\"panel\" hide=\"!user.isActive\">\r\n        <p>User Name: {{ user.userName }}</p>\r\n        <p>Email: {{ user.email }}</p>\r\n        <p>Mobile Number: {{ user.mobileNumber }}</p>\r\n        <p>Country: {{ user.countryName }}</p>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary mb-3\"\r\n          [routerLink]=\"['/admin/user/', user.userId]\"\r\n        >\r\n          View meetings\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\r\n<div class=\"wrapper\">\r\n  <app-sidenav\r\n    [adminUserId]=\"localStorage.userId\"\r\n    [avatar]=\"localStorage.avatar\"\r\n    [username]=\"localStorage.userName\"\r\n  ></app-sidenav>\r\n  <div *ngIf=\"appService.showSpinner\" class=\"d-flex justify-content-center\">\r\n    <!-- using custom spinner -->\r\n    <!-- <div class=\"loading\">Loading&#8230;</div> -->\r\n\r\n  </div>\r\n  <div class=\"container  py-3\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col\">\r\n        <ngx-spinner\r\n        style=\"height: 50px; width: 500px;\"\r\n        bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n        size=\"medium\"\r\n        color=\"#fff\"\r\n        type=\"ball-atom\"\r\n        [fullScreen]=\"false\"\r\n        ><p style=\"color: white\">Creating...</p></ngx-spinner\r\n      >\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div\r\n              style=\"display: flex;justify-content: space-between;font-size: 18px;cursor: pointer;\"\r\n            >\r\n              <span class=\"fa-stack fa-lg icon-background\" (click)=\"goBack()\">\r\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\r\n                <i class=\"fa fa-angle-left fa-stack-1x\"></i>\r\n              </span>\r\n            </div>\r\n            <form\r\n              name=\"form\"\r\n              #meetingForm=\"ngForm\"\r\n              (ngSubmit)=\"createMeeting()\"\r\n            >\r\n              <div class=\"form-group mt-2\">\r\n                <label for=\"purpose\">Purpose</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"purpose\"\r\n                  placeholder=\"Enter the purpose of meeting\"\r\n                  [(ngModel)]=\"purpose\"\r\n                  #inputPurpose=\"ngModel\"\r\n                  required\r\n                  autofocus\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputPurpose.invalid &&\r\n                    (inputPurpose.dirty || inputPurpose.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputPurpose.errors.required\">\r\n                    Please enter the purpose\r\n                  </div>\r\n  \r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"location\">Location</label>\r\n\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"location\"\r\n                  placeholder=\"Enter the location of meeting\"\r\n                  [(ngModel)]=\"location\"\r\n                  #inputLocation=\"ngModel\"\r\n                  required\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputLocation.invalid &&\r\n                    (inputLocation.dirty || inputLocation.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputLocation.errors.required\">\r\n                    Please enter the location\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"purpose\">Start Date</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"startdate\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"startDate\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  placeholder=\"Not set\"\r\n                  [disable]=\"[disabledDay]\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"purpose\">End Date</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"enddate\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"endDate\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  placeholder=\"Not set\"\r\n                  [disable]=\"[disabledDay]\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"admin_name\">Created By</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"adminname\"\r\n                  [(ngModel)]=\"admin_name\"\r\n                  readonly\r\n                />\r\n              </div>\r\n\r\n              <button\r\n                type=\"submit\"\r\n                [disabled]=\"!meetingForm.valid\"\r\n                class=\"btn btn-outline-success btn-block loginBtn\"\r\n              >\r\n                Create\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\r\n<div class=\"wrapper\">\r\n  <app-sidenav\r\n    [adminUserId]=\"localStorage.userId\"\r\n    [avatar]=\"localStorage.avatar\"\r\n    [username]=\"localStorage.userName\"\r\n  ></app-sidenav>\r\n\r\n  <div\r\n    class=\"container py-3\"\r\n    style=\"width: 900px;\"\r\n    *ngIf=\"(editForm | keyvalue)?.length\"\r\n  >\r\n   \r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col\">\r\n        <ngx-spinner\r\n          style=\"height: 50px; width: 500px;\"\r\n          bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n          size=\"medium\"\r\n          color=\"#fff\"\r\n          type=\"ball-atom\"\r\n          [fullScreen]=\"false\"\r\n          ><p style=\"color: white\">...</p></ngx-spinner\r\n        >\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div\r\n              style=\"display: flex;justify-content: space-between;cursor: pointer;\"\r\n            >\r\n              <span class=\"fa-stack fa-lg icon-background\" (click)=\"goBack()\">\r\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\r\n                <i class=\"fa fa-angle-left fa-stack-1x\"></i>\r\n              </span>\r\n              <span\r\n                class=\"fa-stack fa-lg icon-background\"\r\n                (click)=\"openConfirmModal()\"\r\n              >\r\n                <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\r\n                <i class=\"fa fa-trash fa-stack-1x\"></i>\r\n              </span>\r\n            </div>\r\n          \r\n            <form name=\"form\" #meetingForm=\"ngForm\" (ngSubmit)=\"editMeeting()\">\r\n              <div class=\"form-group mt-2\">\r\n                <label for=\"purpose\">Purpose</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"purpose\"\r\n                  [(ngModel)]=\"editForm.purpose\"\r\n                  #inputPurpose=\"ngModel\"\r\n                  required\r\n                  autofocus\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputPurpose.invalid &&\r\n                    (inputPurpose.dirty || inputPurpose.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputPurpose.errors.required\">\r\n                    Please enter the purpose\r\n                  </div>\r\n                 \r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"location\">Location</label>\r\n\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"location\"\r\n                  [(ngModel)]=\"editForm.location\"\r\n                  #inputLocation=\"ngModel\"\r\n                  required\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputLocation.invalid &&\r\n                    (inputLocation.dirty || inputLocation.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputLocation.errors.required\">\r\n                    Please enter the location\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"purpose\">Start Date</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"startdate\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"editForm.startDate\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  [disable]=\"[disabledDay]\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"purpose\">End Date</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"enddate\"\r\n                  mwlFlatpickr\r\n                  [(ngModel)]=\"editForm.endDate\"\r\n                  [enableTime]=\"true\"\r\n                  dateFormat=\"Y-m-dTH:i\"\r\n                  [disable]=\"[disabledDay]\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"admin_name\">Created By</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  name=\"adminname\"\r\n                  [(ngModel)]=\"editForm.admin_name\"\r\n                  readonly\r\n                />\r\n              </div>\r\n\r\n              <button\r\n                type=\"submit\"\r\n                [disabled]=\"!meetingForm.dirty\"\r\n                class=\"btn btn-outline-success btn-block loginBtn\"\r\n              >\r\n                Edit\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-body\">\r\n    <p>\r\n      <strong>Are you sure you want to delete the meeting? </strong>\r\n    </p>\r\n    <p>\r\n      All information associated to this meeting will be permanently deleted.\r\n      <span class=\"text-danger\">This operation can not be undone.</span>\r\n    </p>\r\n    <div class=\"text-center\">\r\n      <button\r\n        type=\"button\"\r\n        ngbAutofocus\r\n        class=\"btn btn-danger mx-2\"\r\n        (click)=\"deleteMeeting()\"\r\n      >\r\n        Yes\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-outline-secondary mx-2\"\r\n        (click)=\"close()\"\r\n      >\r\n        No\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";
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


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\"></app-topnav>\r\n<div class=\"wrapper\" *ngIf=\"showTemplate\">\r\n  <app-sidenav\r\n    [adminUserId]=\"localStorage.userId\"\r\n    [normalUserId]=\"userId\"\r\n    [avatar]=\"localStorage.avatar\"\r\n    [username]=\"localStorage.userName\"\r\n    (notify)=\"logout($event)\"\r\n  ></app-sidenav>\r\n  <div\r\n    class=\"py-4 px-4\"\r\n    style=\"flex: 1 1 auto;\r\n          overflow: auto;\"\r\n  >\r\n    <div class=\"row text-center\" *ngIf=\"currentUser != ''\">\r\n      <h4 class=\"ml-2\">{{ currentUser }}'s planner</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary btn-block mb-3\"\r\n          (click)=\"createMeeting()\"\r\n        >\r\n          <span class=\"fa-stack\">\r\n            <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\r\n            <i class=\"fa fa-plus fa-stack-1x\"></i>\r\n          </span>\r\n          Create a new meeting\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-4 text-center\">\r\n      <div class=\"col-sm-12 col-md-5\">\r\n        <div class=\"btn-group\">\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            mwlCalendarPreviousView\r\n            [view]=\"view\"\r\n            [(viewDate)]=\"viewDate\"\r\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n          >\r\n            Previous\r\n          </div>\r\n          <div\r\n            class=\"btn btn-outline-primary\"\r\n            mwlCalendarToday\r\n            [(viewDate)]=\"viewDate\"\r\n          >\r\n            Today\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            mwlCalendarNextView\r\n            [view]=\"view\"\r\n            [(viewDate)]=\"viewDate\"\r\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n          >\r\n            Next\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-2\">\r\n        <h3>{{ viewDate | calendarDate: view + \"ViewTitle\":\"en\" }}</h3>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-5\">\r\n        <div class=\"btn-group\">\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Month)\"\r\n            [class.active]=\"view === CalendarView.Month\"\r\n          >\r\n            Month\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Week)\"\r\n            [class.active]=\"view === CalendarView.Week\"\r\n          >\r\n            Week\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Day)\"\r\n            [class.active]=\"view === CalendarView.Day\"\r\n          >\r\n            Day\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row calendar mb-3\">\r\n      <div class=\"col\">\r\n        <ngx-spinner\r\n          style=\"height: 50px; width: 500px;\"\r\n          bdColor=\"rgba(0, 0, 0, 0.8)\"\r\n          size=\"medium\"\r\n          color=\"#fff\"\r\n          type=\"ball-atom\"\r\n          [fullScreen]=\"false\"\r\n          ><p style=\"color: white\">Getting meeting info...</p></ngx-spinner\r\n        >\r\n        <div [ngSwitch]=\"view\" class=\"pb-3\">\r\n          <mwl-calendar-month-view\r\n            *ngSwitchCase=\"CalendarView.Month\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            [activeDayIsOpen]=\"activeDayIsOpen\"\r\n            (dayClicked)=\"dayClicked($event.day)\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-month-view>\r\n          <mwl-calendar-week-view\r\n            *ngSwitchCase=\"CalendarView.Week\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-week-view>\r\n          <mwl-calendar-day-view\r\n            *ngSwitchCase=\"CalendarView.Day\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-day-view>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ modalData.title | titlecase }}</h4>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <p>Location: {{ modalData.location }}</p>\r\n    <p>Meeting starts at: {{ modalData.start | date: \"medium\" }}</p>\r\n    <p>Meeting starts at: {{ modalData.end | date: \"medium\" }}</p>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-secondary\"\r\n      (click)=\"editMeet(modalData?.meetingId)\"\r\n    >\r\n      <i class=\"fa fa-fw fa-pencil\"></i>Edit\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-danger\"\r\n      (click)=\"deleteMeet(modalData?.meetingId)\"\r\n    >\r\n      <i class=\"fa fa-fw fa-trash\"></i>Delete\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #confirmForDelete let-close=\"close\">\r\n  <div class=\"modal-body\">\r\n    <p>\r\n      <strong>Are you sure you want to delete the meeting? </strong>\r\n    </p>\r\n    <p>\r\n      All information associated to this meeting will be permanently deleted.\r\n      <span class=\"text-danger\">This operation can not be undone.</span>\r\n    </p>\r\n    <div class=\"text-center\">\r\n      <button\r\n        type=\"button\"\r\n        ngbAutofocus\r\n        class=\"btn btn-danger mx-2\"\r\n        (click)=\"deleteEvent($event)\"\r\n      >\r\n        Yes\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-outline-secondary mx-2\"\r\n        (click)=\"close()\"\r\n      >\r\n        No\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";
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


    __webpack_exports__["default"] = "<!-- <div [@routeAnimations]=\"getAnimationData(routerOutlet)\">\r\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div\r\n      class=\"header\"\r\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\r\n    >\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <div class=\"container forgotPasswordForm\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\r\n              Forgot your password?\r\n            </p>\r\n            <p class=\"text-muted\">\r\n              That's okay, it happens. Please enter your registered email and\r\n              click on the button below to receive a password reset link on the\r\n              email\r\n            </p>\r\n            <form\r\n              name=\"form\"\r\n              #forgotPasswordForm=\"ngForm\"\r\n              (ngSubmit)=\"forgotPasswordFunction()\"\r\n            >\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email address</label>\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    id=\"email\"\r\n                    placeholder=\"Enter email\"\r\n                    [(ngModel)]=\"email\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputEmail=\"ngModel\"\r\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                    required\r\n                    autofocus\r\n                  />\r\n                </div>\r\n                <div\r\n                  *ngIf=\"\r\n                    inputEmail.invalid &&\r\n                    (inputEmail.dirty || inputEmail.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputEmail.errors.required\">\r\n                    Please enter the email\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-outline-success btn-block loginBtn\"\r\n              >\r\n                Reset Password\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div\r\n      class=\"header\"\r\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\r\n    >\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n    <div class=\"section\">\r\n      <div class=\"container loginForm\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <p style=\"font-size: 1.5em;font-weight: 700;text-align: center;\">\r\n              Login\r\n            </p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginFunction()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email address</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\r\n                      ><img src=\"./../../../assets/img/user.svg\" alt=\"\"\r\n                    /></span>\r\n                  </div>\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    id=\"email\"\r\n                    placeholder=\"Enter email\"\r\n                    [(ngModel)]=\"email\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputEmail=\"ngModel\"\r\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                    required\r\n                    autofocus\r\n                  />\r\n                </div>\r\n                <div\r\n                  *ngIf=\"\r\n                    inputEmail.invalid &&\r\n                    (inputEmail.dirty || inputEmail.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  <div *ngIf=\"inputEmail.errors.required\">\r\n                    Please enter the email\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\r\n                      ><img src=\"./../../../assets/img/lock.svg\" alt=\"\"\r\n                    /></span>\r\n                  </div>\r\n                  <input\r\n                    type=\"password\"\r\n                    name=\"password\"\r\n                    class=\"form-control\"\r\n                    id=\"password\"\r\n                    [(ngModel)]=\"password\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputPassword=\"ngModel\"\r\n                    placeholder=\"Password\"\r\n                    required\r\n                  />\r\n                </div>\r\n\r\n                <div\r\n                  *ngIf=\"\r\n                    inputPassword.invalid &&\r\n                    (inputPassword.dirty || inputPassword.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  Please enter the password\r\n                  <div *ngIf=\"loginForm.controls['password']?.errors?.required\">\r\n                    Please enter the password\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"forgotPassword\">\r\n                <a [routerLink]=\"['/forgotPassword']\">Forgot Password?</a>\r\n              </div>\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-outline-success btn-block loginBtn\"\r\n              >\r\n                Login\r\n              </button>\r\n              <div class=\"signUpBtn\">\r\n                <a [routerLink]=\"['/signup']\">Not a member? Signup</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-color\">\r\n  <a class=\"navbar-brand\" href=\"#\" style=\"font-weight: 700;color: #fff\"\r\n    >Meet Up</a\r\n  >\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <i class=\"fa fa-bars\"></i>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\"\r\n          >Signup</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"\r\n          >Login</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div\r\n      class=\"header\"\r\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\r\n    >\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <div class=\"container forgotPasswordForm\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\r\n              Oops!\r\n            </p>\r\n            <p style=\"font-weight: 400;font-size:2em;text-align: center\">\r\n              404 Not Found\r\n            </p>\r\n            <p style=\"font-weight: 300;font-size:1em;\">\r\n              Sorry, an error has occured, Requested page not found!\r\n            </p>\r\n            <button class=\"btn btn-success btn-block\" [routerLink]=\"['/login']\">\r\n              Take me to Login\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div\r\n      class=\"header\"\r\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\r\n    >\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n\r\n    <div class=\"section\" *ngIf=\"!isLink\">\r\n      <div class=\"container resetPasswordForm\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <p>\r\n              The Reset Password link has expired. Please click on the below\r\n              button to go back to the login page\r\n            </p>\r\n            <button\r\n              class=\"btn btn-outline-success btn-block\"\r\n              [routerLink]=\"['/login']\"\r\n            >\r\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go back to\r\n              Login\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\" *ngIf=\"isLink\">\r\n      <div class=\"container resetPasswordForm\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <form\r\n                  name=\"form\"\r\n                  #resetPasswordForm=\"ngForm\"\r\n                  (ngSubmit)=\"updatePasswordFunction()\"\r\n                >\r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input\r\n                      type=\"password\"\r\n                      class=\"form-control\"\r\n                      id=\"password1\"\r\n                      placeholder=\"Enter password\"\r\n                      [(ngModel)]=\"password\"\r\n                      [ngModelOptions]=\"{ standalone: true }\"\r\n                      #inputPassword=\"ngModel\"\r\n                      required\r\n                      autofocus\r\n                    />\r\n                    <div\r\n                      *ngIf=\"\r\n                        inputPassword.invalid &&\r\n                        (inputPassword.dirty || inputPassword.touched)\r\n                      \"\r\n                      class=\"notifyError\"\r\n                    >\r\n                      <div *ngIf=\"inputPassword.errors.required\">\r\n                        Please enter the password\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Confirm password</label>\r\n                    <input\r\n                      type=\"password\"\r\n                      class=\"form-control\"\r\n                      id=\"password2\"\r\n                      placeholder=\"Enter password\"\r\n                      [(ngModel)]=\"confirmPassword\"\r\n                      [ngModelOptions]=\"{ standalone: true }\"\r\n                      #inputConfirmPassword=\"ngModel\"\r\n                      required\r\n                      autofocus\r\n                    />\r\n\r\n                    <div\r\n                      *ngIf=\"\r\n                        inputConfirmPassword.invalid &&\r\n                        (inputConfirmPassword.dirty ||\r\n                          inputConfirmPassword.touched)\r\n                      \"\r\n                      class=\"notifyError\"\r\n                    >\r\n                      <div *ngIf=\"inputConfirmPassword.errors.required\">\r\n                        Please enter the confirm password\r\n                      </div>\r\n                    </div>\r\n                    <div\r\n                      *ngIf=\"\r\n                        password !== confirmPassword &&\r\n                        confirmPassword != undefined &&\r\n                        confirmPassword != ''\r\n                      \"\r\n                      class=\"notifyError\"\r\n                    >\r\n                      Not a matching password\r\n                    </div>\r\n                  </div>\r\n\r\n                  <button\r\n                    type=\"submit\"\r\n                    class=\"btn btn-outline-success btn-block loginBtn\"\r\n                  >\r\n                    Update Password\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div\r\n      class=\"header\"\r\n      style=\"position: absolute;top: 0;left: 0;width: 100%;z-index: 5;\"\r\n    >\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n   \r\n    <div class=\"section\">\r\n      <div class=\"container signUpForm\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <p style=\"font-size: 1.5em;font-weight: 700;text-align: center;\">\r\n              Sign Up\r\n            </p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form (ngSubmit)=\"signUpFunction()\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6 col-sm-12\">\r\n                  <label for=\"firstName\">First Name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"firstName\"\r\n                    [(ngModel)]=\"firstName\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputFirstName=\"ngModel\"\r\n                    required\r\n                    autofocus\r\n                  />\r\n                  <div\r\n                    *ngIf=\"\r\n                      inputFirstName.invalid &&\r\n                      (inputFirstName.dirty || inputFirstName.touched)\r\n                    \"\r\n                    class=\"notifyError\"\r\n                  >\r\n                    First Name is empty\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-6 col-sm-12\">\r\n                  <label for=\"lastName\">Last Name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"lastName\"\r\n                    [(ngModel)]=\"lastName\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputLastName=\"ngModel\"\r\n                    required\r\n                  />\r\n                  <div\r\n                    *ngIf=\"\r\n                      inputLastName.invalid &&\r\n                      (inputLastName.dirty || inputLastName.touched)\r\n                    \"\r\n                    class=\"notifyError\"\r\n                  >\r\n                    Last Name is empty\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"form-control\"\r\n                  id=\"email\"\r\n                  placeholder=\"Enter email\"\r\n                  [(ngModel)]=\"email\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  #inputEmail=\"ngModel\"\r\n                  required\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputEmail.invalid &&\r\n                    (inputEmail.dirty || inputEmail.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  Email is empty\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Password</label>\r\n                <input\r\n                  type=\"password\"\r\n                  class=\"form-control\"\r\n                  id=\"password1\"\r\n                  placeholder=\"Enter password\"\r\n                  [(ngModel)]=\"password\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  #inputPassword=\"ngModel\"\r\n                  required\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputPassword.invalid &&\r\n                    (inputPassword.dirty || inputPassword.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  Please enter password\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Confirm password</label>\r\n                <input\r\n                  type=\"password\"\r\n                  class=\"form-control\"\r\n                  id=\"password2\"\r\n                  placeholder=\"Enter password\"\r\n                  [(ngModel)]=\"confirmPassword\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  #inputConfirmPassword=\"ngModel\"\r\n                  required\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    inputConfirmPassword.invalid &&\r\n                    (inputConfirmPassword.dirty || inputConfirmPassword.touched)\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  Please enter confirm password\r\n                </div>\r\n                <div\r\n                  *ngIf=\"\r\n                    password !== confirmPassword &&\r\n                    confirmPassword != undefined &&\r\n                    confirmPassword != ''\r\n                  \"\r\n                  class=\"notifyError\"\r\n                >\r\n                  Not a matching password\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4 col-sm-4\">\r\n                  <label for=\"countryCode\">Country</label>\r\n                  <select\r\n                    (change)=\"changed($event)\"\r\n                    id=\"countryCode\"\r\n                    class=\"form-control\"\r\n                    [(ngModel)]=\"selectedCountryCode\"\r\n                    #country=\"ngModel\"\r\n                    name=\"selectedCountryCode\"\r\n                    required\r\n                  >\r\n                    <option\r\n                      *ngFor=\"let country of countryName\"\r\n                      [value]=\"country.code\"\r\n                      >{{ country.name }}</option\r\n                    >\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-8 col-sm-8\">\r\n                  <label for=\"mobileNumber\">Mobile Number</label>\r\n                  <div class=\"input-group\">\r\n                    <div\r\n                      ngDefaultControl\r\n                      class=\"input-group-prepend\"\r\n                      [(ngModel)]=\"internationalCode\"\r\n                      [ngModelOptions]=\"{ standalone: true }\"\r\n                    >\r\n                      <span class=\"input-group-text\" id=\"inputGroupPrepend2\">{{\r\n                        internationalCode\r\n                      }}</span>\r\n                    </div>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"mobileNumber\"\r\n                      placeholder=\"Enter mobile number\"\r\n                      [(ngModel)]=\"mobileNumber\"\r\n                      [ngModelOptions]=\"{ standalone: true }\"\r\n                      #inputMobileNumber=\"ngModel\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"\r\n                      inputMobileNumber.invalid &&\r\n                      (inputMobileNumber.dirty || inputMobileNumber.touched)\r\n                    \"\r\n                    class=\"notifyError\"\r\n                  >\r\n                    MobileNumber is empty\r\n                  </div>\r\n                  <div *ngIf=\"internationalCode == ''\" class=\"notifyError\">\r\n                    Please select country\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"userName\" class=\"col-sm-3 col-form-label\"\r\n                  >Username</label\r\n                >\r\n                <div class=\"col-sm-9\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"userName\"\r\n                    placeholder=\"Username\"\r\n                    [(ngModel)]=\"userName\"\r\n                    [ngModelOptions]=\"{ standalone: true }\"\r\n                    #inputUserName=\"ngModel\"\r\n                    required\r\n                  />\r\n                </div>\r\n                <div\r\n                  *ngIf=\"\r\n                    userName == 'admin' ||\r\n                    userName == 'admin-' ||\r\n                    userName == '-admin'\r\n                  \"\r\n                  class=\"notifyError mx-3\"\r\n                >\r\n                  Username can't be admin\r\n                </div>\r\n                <small class=\"text-muted mx-3\" *ngIf=\"userRole == 'admin'\"\r\n                  >While signing up as admin, '-admin' suffix will be added to\r\n                  your username, eg. alex-admin\r\n                </small>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3 col-sm-3  mb-0\">\r\n                  <label>User Role</label>\r\n                </div>\r\n                <div class=\"form-group col-md-4 col-sm-4\">\r\n                  <div\r\n                    class=\"custom-control custom-radio custom-control-inline\"\r\n                  >\r\n                    <input\r\n                      (change)=\"selectRole($event)\"\r\n                      type=\"radio\"\r\n                      id=\"adminRole\"\r\n                      name=\"role\"\r\n                      [(ngModel)]=\"userRole\"\r\n                      class=\"custom-control-input\"\r\n                      value=\"admin\"\r\n                      checked\r\n                    />\r\n                    <label class=\"custom-control-label\" for=\"adminRole\"\r\n                      >Admin</label\r\n                    >\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-5 col-sm-5\">\r\n                  <div\r\n                    class=\"custom-control custom-radio custom-control-inline\"\r\n                  >\r\n                    <input\r\n                      (change)=\"selectRole($event)\"\r\n                      type=\"radio\"\r\n                      id=\"userRole\"\r\n                      name=\"role\"\r\n                      [(ngModel)]=\"userRole\"\r\n                      class=\"custom-control-input\"\r\n                      value=\"normal\"\r\n                    />\r\n                    <label class=\"custom-control-label\" for=\"userRole\"\r\n                      >Normal</label\r\n                    >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <label class=\"ml-1\">User Profile Pic</label>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group col-md-9 col-sm-9\">\r\n                    <div class=\"custom-file\">\r\n                      <input\r\n                        type=\"file\"\r\n                        class=\"custom-file-input\"\r\n                        id=\"customFile\"\r\n                        (change)=\"onSelectFile($event)\"\r\n                      />\r\n                      <label class=\"custom-file-label\" for=\"customFile\"></label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group col-md-3 col-sm-3\">\r\n                    <button\r\n                      type=\"button\"\r\n                      name=\"upload\"\r\n                      value=\"upload\"\r\n                      id=\"upload\"\r\n                      class=\"btn btn-block btn-dark\"\r\n                      (click)=\"onImageUpload()\"\r\n                    >\r\n                      <i class=\"fa fa-fw fa-upload\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"form-row\"\r\n                class=\"text-center\"\r\n                id=\"imagePreview\"\r\n                *ngIf=\"url\"\r\n              >\r\n                <div class=\"col\">\r\n                  Image Preview:\r\n                  <img class=\"crop\" [src]=\"url\" /> <br />\r\n                </div>\r\n              </div>\r\n\r\n              <div\r\n                class=\"d-flex justify-content-center\"\r\n                *ngIf=\"appService.showSpinner\"\r\n              >\r\n                <div class=\"spinner-grow spinner-grow-sm\"></div>\r\n                Uploading\r\n              </div>\r\n\r\n              <button\r\n                type=\"submit\"\r\n                class=\"btn btn-outline-success btn-block signUpBtn\"\r\n              >\r\n                Sign Up\r\n              </button>\r\n              <button\r\n                class=\"btn btn-outline-danger btn-block mt-3\"\r\n                (click)=\"cancelRegister()\"\r\n              >\r\n                Cancel Register\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\r\n    />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\r\n  </head>\r\n  <body>\r\n    <nav\r\n      id=\"sidebar\"\r\n      class=\"navbar-light\"\r\n      [ngClass]=\"{ hidden: appService.hideSideNav }\"\r\n    >\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item text-center\">\r\n          <img class=\"crop\" src=\"{{ avatar }}\" />\r\n        </li>\r\n        <li class=\"text-center\" style=\"border-bottom: 2px solid #28c7fa\">\r\n          {{ username }}\r\n          <img\r\n            src=\"./../../../assets/img/power.svg\"\r\n            class=\"filter-white ml-2 pb-1\"\r\n            alt=\"\"\r\n            (click)=\"logout()\"\r\n            style=\"cursor: pointer\"\r\n          />\r\n        </li>\r\n        <li class=\"text-center\"></li>\r\n        <li class=\"nav-item mt-2\" [hidden]=\"role != 'admin'\">\r\n          <a\r\n            class=\"nav-link\"\r\n            [routerLink]=\"['/admindashboard']\"\r\n            routerLinkActive=\"active\"\r\n            >Dashboard\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item active focus\" [hidden]=\"role != 'normal'\">\r\n          <a class=\"nav-link\">Dashboard </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a\r\n            class=\"nav-link\"\r\n            [hidden]=\"role != 'admin'\"\r\n            [routerLink]=\"['/admin/user/', normalUserId]\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            >Planner</a\r\n          >\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<button\r\n  type=\"button\"\r\n  class=\"navbar-toggler\"\r\n  (click)=\"appService.toggleSideNav()\"\r\n>\r\n  <i class=\"fa fa-bars\"></i>\r\n</button>\r\n<a class=\"navbar-brand pl-3\" style=\"font-weight: 700;color: #fff\">Meet Up</a>\r\n";
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


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta\r\n      name=\"viewport\"\r\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\r\n    />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\r\n  </head>\r\n  <body>\r\n    <nav class=\"navbar navbar-light navbar-color\">\r\n      <app-sidenavtoggler></app-sidenavtoggler>\r\n      <div class=\"wrapper\">\r\n        <p style=\"align-self: flex-end\">{{ name }}</p>\r\n      </div>\r\n    </nav>\r\n  </body>\r\n</html>\r\n";
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


    __webpack_exports__["default"] = "<app-topnav [dashboardName]=\"name\" (notify)=\"logout($event)\"></app-topnav>\r\n<div class=\"wrapper\">\r\n  <app-sidenav\r\n    [normalUserId]=\"localStorage.userId\"\r\n    [avatar]=\"localStorage.avatar\"\r\n    [username]=\"localStorage.userName\"\r\n  ></app-sidenav>\r\n  <div\r\n    class=\"px-4 py-4\"\r\n    style=\"flex: 1 1 auto;\r\n    overflow-y: auto;\"\r\n  >\r\n    <div class=\"row text-center\">\r\n      <h4>{{ localStorage.firstName }}'s planner</h4>\r\n    </div>\r\n    <div class=\"row py-4 text-center\">\r\n      <div class=\"col-sm-12 col-md-5\">\r\n        <div class=\"btn-group\">\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            mwlCalendarPreviousView\r\n            [view]=\"view\"\r\n            [(viewDate)]=\"viewDate\"\r\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n          >\r\n            Previous\r\n          </div>\r\n          <div\r\n            class=\"btn btn-outline-primary\"\r\n            mwlCalendarToday\r\n            [(viewDate)]=\"viewDate\"\r\n            [class.active]=\"viewDate\"\r\n          >\r\n            Today\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            mwlCalendarNextView\r\n            [view]=\"view\"\r\n            [(viewDate)]=\"viewDate\"\r\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n          >\r\n            Next\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-2\">\r\n        <h3>{{ viewDate | calendarDate: view + \"ViewTitle\":\"en\" }}</h3>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-5\">\r\n        <div class=\"btn-group\">\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Month)\"\r\n            [class.active]=\"view === CalendarView.Month\"\r\n          >\r\n            Month\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Week)\"\r\n            [class.active]=\"view === CalendarView.Week\"\r\n          >\r\n            Week\r\n          </div>\r\n          <div\r\n            class=\"btn btn-primary\"\r\n            (click)=\"setView(CalendarView.Day)\"\r\n            [class.active]=\"view === CalendarView.Day\"\r\n          >\r\n            Day\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row calendar mb-3\">\r\n      <div class=\"col\">\r\n        <div [ngSwitch]=\"view\" class=\"pb-3\">\r\n          <mwl-calendar-month-view\r\n            *ngSwitchCase=\"CalendarView.Month\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            [activeDayIsOpen]=\"activeDayIsOpen\"\r\n            (dayClicked)=\"dayClicked($event.day)\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-month-view>\r\n          <mwl-calendar-week-view\r\n            *ngSwitchCase=\"CalendarView.Week\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-week-view>\r\n          <mwl-calendar-day-view\r\n            *ngSwitchCase=\"CalendarView.Day\"\r\n            [viewDate]=\"viewDate\"\r\n            [events]=\"events\"\r\n            [refresh]=\"refresh\"\r\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n          >\r\n          </mwl-calendar-day-view>\r\n        </div>\r\n\r\n        <ng-template #modalContent let-close=\"close\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">{{ modalData1.title | titlecase }}</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Location: {{ modalData1.location }}</p>\r\n            <p>Meeting starts at: {{ modalData1.start | date: \"medium\" }}</p>\r\n            <p>Meeting starts at: {{ modalData1.end | date: \"medium\" }}</p>\r\n          </div>\r\n\r\n          <div class=\"modal-footer\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-outline-secondary\"\r\n              (click)=\"close()\"\r\n            >\r\n              OK\r\n            </button>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template #reminderModal let-close=\"close\">\r\n          <div class=\"modal-header\"><span class=\"bell fa fa-bell\"></span></div>\r\n          <div class=\"modal-body\">\r\n            <p>\r\n              <strong>{{ modalData2 }}</strong>\r\n            </p>\r\n            <p>\r\n              You can snooze this reminder if desired.\r\n            </p>\r\n            <div class=\"text-center\">\r\n              <button\r\n                type=\"button\"\r\n                ngbAutofocus\r\n                class=\"btn btn-danger mx-2\"\r\n                (click)=\"callTheReminderAgain()\"\r\n              >\r\n                Snooze\r\n              </button>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-outline-secondary mx-2\"\r\n                (click)=\"close()\"\r\n              >\r\n                Ok\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
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

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
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

        while (_) {
          try {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
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
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

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
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
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

    var AdminRouteGuardService = /*#__PURE__*/function () {
      function AdminRouteGuardService(router, appService, toastr) {
        _classCallCheck(this, AdminRouteGuardService);

        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(AdminRouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          var authToken = this.appService.getAuthToken(); // console.log("in guard service", authToken, route.data);

          if (authToken === undefined || authToken === "" || authToken === null) {
            this.router.navigate(["/"]);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AdminRouteGuardService;
    }();

    AdminRouteGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

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

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

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


    __webpack_exports__["default"] = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 56px);\r\n}\r\n\r\n.accordion {\r\n  background-color: #eee;\r\n  color: #444;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  transition: 0.4s;\r\n}\r\n\r\n.no-users{\r\n  background-color: #eee;\r\n  color: #444;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  transition: 0.4s;\r\n}\r\n\r\n.active,\r\n.accordion:hover {\r\n  background-color: #ccc;\r\n}\r\n\r\n.accordion:after {\r\n  content: \"\\002B\";\r\n  color: #777;\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\r\n\r\n.active:after {\r\n  content: \"\\2212\";\r\n}\r\n\r\n.panel {\r\n  padding: 0 18px;\r\n  background-color: white;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n\r\n/*custom color for bootstrap button*/\r\n\r\n.btn-primary {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal; */\r\n  /* border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:hover {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: #004d4d;\r\n  border-color: #009a9a; */\r\n  background-color: #03a7dd;\r\n  border-color: #03a7dd;\r\n}\r\n\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\r\n  box-shadow: 0 0 0 0.2rem #03a7dd;\r\n}\r\n\r\n.btn-primary.disabled,\r\n.btn-primary:disabled {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal;\r\n  border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active,\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  /* color: #fff; */\r\n  color: #fff;\r\n  /* background-color: #00b3b3; */\r\n  background-color: #024e68;\r\n  border-color: #024e68;\r\n  /* border-color: #000; */\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1g7MEJBQ3dCO0VBQ3hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsbURBQW1EO0VBQ25ELGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOzs7RUFHRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFDQTs7O0VBR0UsNkNBQTZDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm5vLXVzZXJze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmFjY29yZGlvbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDAwMkJcIjtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2ZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDIyMTJcIjtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLypjdXN0b20gY29sb3IgZm9yIGJvb3RzdHJhcCBidXR0b24qL1xyXG4uYnRuLXByaW1hcnkge1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRlYWw7ICovXHJcbiAgLyogYm9yZGVyLWNvbG9yOiAjMDA1YTVhOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhjN2ZhO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDRkNGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA5YTlhOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E3ZGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDNhN2RkO1xyXG59XHJcbi5idG4tcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5LmZvY3VzIHtcclxuICAvKiBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCA5MCwgOTAsIDAuNSk7ICovXHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMwM2E3ZGQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLFxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA1YTVhOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM3ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhjN2ZhO1xyXG59XHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwYjNiMzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZTY4O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyNGU2ODtcclxuICAvKiBib3JkZXItY29sb3I6ICMwMDA7ICovXHJcbn1cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCA5MCwgOTAsIDAuNSk7XHJcbn0iXX0= */";
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

    var AdmindashboardComponent = /*#__PURE__*/function () {
      function AdmindashboardComponent(appService, socketService, _route, router, toastr, spinner) {
        var _this = this;

        _classCallCheck(this, AdmindashboardComponent);

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

        this.checkStatus = function () {
          if (_this.localStorage === undefined || _this.localStorage === "" || _this.localStorage === null) {
            _this.router.navigate(["/"]);

            return false;
          } else {
            return true;
          }
        }; //end checkStatus


        this.verifyUserConfirmation = function () {
          _this.socketService.verifyUser().subscribe(function (data) {
            // console.log("verifyUserConfirmation", data);
            _this.socketService.setUser(_this.authToken); // console.log("data got after user comes online", data);

          });
        };

        this.getOnlineUserList = function () {
          _this.socketService.onlineUsersList().subscribe(function (userList) {
            // console.log("getOnlineUserList", userList);
            _this.onlineUsers = _toConsumableArray(userList);
            console.log("online", _this.onlineUsers);
          });
        };

        this.logout = function (name) {
          _this.toastr.success("".concat(name));
        };

        this.getNormalUsers = function () {
          _this.spinner.show();

          _this.appService.getAllUsers().subscribe(function (apiResponse) {
            // console.log(apiResponse);
            if (apiResponse.status == 200) {
              _this.spinner.hide(); // console.log(apiResponse.data);


              _this.users = apiResponse.data; // console.log(this.users);
            } else {
              console.log(apiResponse);

              _this.spinner.hide();
            }
          }, function (err) {
            console.log(err.error);

            _this.toastr.error("some error occured");
          });
        };
      }

      _createClass(AdmindashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localStorage = this.appService.getUserInfoFromLocalStorage();
          this.userId = this.localStorage.userId;
          this.authToken = this.appService.getAuthToken(); // this.checkStatus();

          this.getNormalUsers();
          this.verifyUserConfirmation();
          this.getOnlineUserList();
        }
      }, {
        key: "toggleAccordian",
        value: function toggleAccordian(event, index) {
          var element = event.target;
          element.classList.toggle("active");
          var panel = element.nextElementSibling;

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
      }]);

      return AdmindashboardComponent;
    }();

    AdmindashboardComponent.ctorParameters = function () {
      return [{
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
    };

    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admindashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admindashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admindashboard/admindashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admindashboard.component.css */
      "./src/app/admin/admindashboard/admindashboard.component.css"))["default"]]
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


    __webpack_exports__["default"] = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 56px);\r\n}\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n.icon-background {\r\n  color: #002651;\r\n}\r\n.icon-background:hover {\r\n  color: #28c7fa;\r\n}\r\n.btn-outline-success {\r\n  color: #002651;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:hover {\r\n  color: #28c7fa;\r\n  font-weight: 600;\r\n  background-color: #002651;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #073263;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n.card {\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n/*custom spinner*/\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: \"\";\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlLW1lZXRpbmcvY3JlYXRlLW1lZXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGdDQUFnQztBQUNsQztBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRTtrQ0FDZ0M7QUFDbEM7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUlqRCx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBTXBCOzs7O3dDQUlzQztBQUN4QztBQUVBLGNBQWM7QUFFZDtFQUNFO0lBS0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFLRSx5QkFBeUI7RUFDM0I7QUFDRjtBQWlDQTtFQUNFO0lBS0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFLRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS1tZWV0aW5nL2NyZWF0ZS1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG59XHJcbi5ub3RpZnlFcnJvciB7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuXHJcbi5pY29uLWJhY2tncm91bmQge1xyXG4gIGNvbG9yOiAjMDAyNjUxO1xyXG59XHJcblxyXG4uaWNvbi1iYWNrZ3JvdW5kOmhvdmVyIHtcclxuICBjb2xvcjogIzI4YzdmYTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMDAyNjUxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBjb2xvcjogIzI4YzdmYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI2NTE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZGlzYWJsZWQsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmRpc2FibGVkIHtcclxuICBjb2xvcjogIzA3MzI2MztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAyNjUxO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICMwMDI2NTE7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi8qY3VzdG9tIHNwaW5uZXIqL1xyXG4ubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuLmxvYWRpbmc6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4vKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAvKiBoaWRlIFwibG9hZGluZy4uLlwiIHRleHQgKi9cclxuICBmb250OiAwLzAgYTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */";
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

    var CreateMeetingComponent = /*#__PURE__*/function () {
      function CreateMeetingComponent(appService, socketService, location1, _route, router, toastr, spinner) {
        _classCallCheck(this, CreateMeetingComponent);

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

      _createClass(CreateMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localStorage = this.appService.getUserInfoFromLocalStorage();
          this.admin_name = this.localStorage.userName;
          this.userId = this._route.snapshot.paramMap.get("id"); // console.log(this.userId);

          this.createdBy = this.localStorage._id;
          this.getSingleUser(this.userId);
        }
      }, {
        key: "disabledDay",
        value: function disabledDay(date) {
          if (date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
            return date.getDate() < new Date().getDate();
          }
        }
      }, {
        key: "getSingleUser",
        value: function getSingleUser(userId) {
          var _this2 = this;

          // console.log("getSingleusercalled", userId);
          this.appService.getSingleUser(userId).subscribe(function (data) {
            // console.log(data);
            _this2.userObject = data.data._id; // console.log("this.userObject", data.data._id);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location1.back();
        }
      }, {
        key: "createMeeting",
        value: function createMeeting() {
          var _this3 = this;

          var data = {
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
          this.appService.createMeeting(data, this.userId).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status == 201) {
              var message = "A new meeting on ".concat(apiResponse.data.purpose, " is created by ").concat(_this3.admin_name);
              var messageObj = {
                userId: data.userId,
                message: message
              };

              _this3.socketService.informServer(messageObj);

              _this3.toastr.success(apiResponse.message); // this.appService.hideLoadingSpinner();


              _this3.spinner.hide();

              _this3.router.navigate(["admin/user/", _this3.userId]);
            } else {
              // this.appService.hideLoadingSpinner();
              _this3.spinner.hide();

              _this3.toastr.error(apiResponse.message);
            }
          }, function (err) {
            _this3.toastr.error("Some error occured");
          });
        }
      }]);

      return CreateMeetingComponent;
    }();

    CreateMeetingComponent.ctorParameters = function () {
      return [{
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
    };

    CreateMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-create-meeting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-meeting/create-meeting.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-meeting.component.css */
      "./src/app/admin/create-meeting/create-meeting.component.css"))["default"]]
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


    __webpack_exports__["default"] = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 56px);\r\n}\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n.loading {\r\n  color: white;\r\n  padding-top: 50px;\r\n}\r\n.icon-background {\r\n  color: #002651;\r\n}\r\n.icon-background:hover {\r\n  color: #28c7fa;\r\n}\r\n.btn-outline-success {\r\n  color: #002651;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:hover {\r\n  color: #28c7fa;\r\n  font-weight: 600;\r\n  background-color: #002651;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #073263;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #002651;\r\n}\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n.card {\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZWRpdC1tZWV0aW5nL2VkaXQtbWVldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2QjtBQUNBOzs7RUFHRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFO2tDQUNnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtbWVldGluZy9lZGl0LW1lZXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuLm5vdGlmeUVycm9yIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG4uaWNvbi1iYWNrZ3JvdW5kIHtcclxuICBjb2xvcjogIzAwMjY1MTtcclxufVxyXG5cclxuLmljb24tYmFja2dyb3VuZDpob3ZlciB7XHJcbiAgY29sb3I6ICMyOGM3ZmE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICBjb2xvcjogIzAwMjY1MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgY29sb3I6ICMyOGM3ZmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNjUxO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjMDAyNjUxO1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmRpc2FibGVkLFxyXG4uYnRuLW91dGxpbmUtc3VjY2VzczpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICMwNzMyNjM7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMjY1MTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjMDAyNjUxO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogLTE1cHggMCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4iXX0= */";
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

    var EditMeetingComponent = /*#__PURE__*/function () {
      function EditMeetingComponent(appService, socketService, _route, router, location1, modal, toastr, spinner) {
        var _this4 = this;

        _classCallCheck(this, EditMeetingComponent);

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

        this.getMeeting = function () {
          _this4.spinner.show();

          _this4.appService.getAMeetingDetail(_this4.meetid).subscribe(function (apiResponse) {
            _this4.spinner.hide();

            console.log(apiResponse);
            _this4.editForm.purpose = apiResponse.data.purpose;
            _this4.editForm.location = apiResponse.data.location;
            _this4.editForm.startDate = apiResponse.data.startDate;
            _this4.editForm.endDate = apiResponse.data.endDate;
            _this4.editForm.admin_name = apiResponse.data.createdBy.userName;
          }, function (err) {
            console.log(err);
          });
        };

        this.editMeeting = function () {
          _this4.spinner.show();

          _this4.appService.editMeeting(_this4.userId, _this4.meetid, _this4.editForm).subscribe(function (apiResponse) {
            _this4.spinner.hide();

            console.log(apiResponse);

            _this4.toastr.info(apiResponse.message);

            var message = "A meeting on ".concat(_this4.editForm.purpose, " is edited by ").concat(_this4.admin);
            var messageObj = {
              userId: _this4.userId,
              message: message
            };

            _this4.socketService.informServer(messageObj);

            _this4.location1.back();
          }, function (err) {
            _this4.spinner.hide();

            console.log(err);
          });
        };

        this.deleteMeeting = function () {
          _this4.appService.deleteMeeting(_this4.userId, _this4.meetid).subscribe(function (apiResponse) {
            console.log(apiResponse);

            _this4.modalReference.close();

            _this4.location1.back();
          }, function (err) {
            console.log(err);
          });
        };

        this.openConfirmModal = function () {
          _this4.modalReference = _this4.modal.open(_this4.modalContent, {
            centered: true
          });
        };
      }

      _createClass(EditMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localStorage = this.appService.getUserInfoFromLocalStorage();
          this.admin = this.localStorage.userName; // console.log(this.meetid);

          this.getMeeting();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location1.back();
        }
      }]);

      return EditMeetingComponent;
    }();

    EditMeetingComponent.ctorParameters = function () {
      return [{
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
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      "static": true
    })], EditMeetingComponent.prototype, "modalContent", void 0);
    EditMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-meeting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-meeting/edit-meeting.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-meeting.component.css */
      "./src/app/admin/edit-meeting/edit-meeting.component.css"))["default"]]
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


    __webpack_exports__["default"] = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 56px);\r\n}\r\n\r\n/*custom color for bootstrap button*/\r\n\r\n.btn-primary {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal; */\r\n  /* border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:hover {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: #004d4d;\r\n  border-color: #009a9a; */\r\n  background-color: #03a7dd;\r\n  border-color: #03a7dd;\r\n}\r\n\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\r\n  box-shadow: 0 0 0 0.2rem #03a7dd;\r\n}\r\n\r\n.btn-primary.disabled,\r\n.btn-primary:disabled {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal;\r\n  border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active,\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  /* color: #fff; */\r\n  color: #fff;\r\n  /* background-color: #00b3b3; */\r\n  background-color: #024e68;\r\n  border-color: #024e68;\r\n  /* border-color: #000; */\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\r\n}\r\n\r\n.btn-outline-primary {\r\n  color: #000;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n  color: #000;\r\n  background-color: #03a7dd;\r\n  border-color: #03a7dd;\r\n}\r\n\r\n.btn-outline-primary:focus,\r\n.btn-outline-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem #024e68;\r\n  border-color: #024e68;\r\n}\r\n\r\n.btn-outline-primary.disabled,\r\n.btn-outline-primary:disabled {\r\n  color: #000;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: #000;\r\n  background-color: transparent;\r\n  border-color: #024e68;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem #024e68;\r\n}\r\n\r\n.calendar {\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1g7MEJBQ3dCO0VBQ3hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsbURBQW1EO0VBQ25ELGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYOzBCQUN3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOzs7RUFHRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFDQTs7O0VBR0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuXHJcbi8qY3VzdG9tIGNvbG9yIGZvciBib290c3RyYXAgYnV0dG9uKi9cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICBjb2xvcjogIzAwMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsOyAqL1xyXG4gIC8qIGJvcmRlci1jb2xvcjogIzAwNWE1YTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjN2ZhO1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YzdmYTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICBjb2xvcjogIzAwMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDRkO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwOWE5YTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhN2RkO1xyXG4gIGJvcmRlci1jb2xvcjogIzAzYTdkZDtcclxufVxyXG4uYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeS5mb2N1cyB7XHJcbiAgLyogYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgOTAsIDkwLCAwLjUpOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDNhN2RkO1xyXG59XHJcbi5idG4tcHJpbWFyeS5kaXNhYmxlZCxcclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICBjb2xvcjogIzAwMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNWE1YTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjN2ZhO1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YzdmYTtcclxufVxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMGIzYjM7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGU2ODtcclxuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XHJcbiAgLyogYm9yZGVyLWNvbG9yOiAjMDAwOyAqL1xyXG59XHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgOTAsIDkwLCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E3ZGQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDNhN2RkO1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5mb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMwMjRlNjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDI0ZTY4O1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LmRpc2FibGVkLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICMwMjRlNjg7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzAyNGU2ODtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbiJdfQ== */";
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

    var UserdataComponent = /*#__PURE__*/function () {
      function UserdataComponent(appService, socketService, _route, router, toastr, modal, spinner) {
        var _this5 = this;

        _classCallCheck(this, UserdataComponent);

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
          onClick: function onClick(_ref) {
            var event = _ref.event;

            // this.events = this.events.filter(iEvent => iEvent !== event);
            _this5.handleEvent("Edited", event);
          }
        }, {
          label: '<i class="fa fa-fw fa-times"></i>',
          a11yLabel: "Delete",
          onClick: function onClick(_ref2) {
            var event = _ref2.event;

            _this5.handleEvent("Deleted", event); // this.events = this.events.filter(iEvent => iEvent !== event);

          }
        }];

        this.deleteMeeting = function (meetingId) {
          _this5.appService.deleteMeeting(_this5.userId, meetingId).subscribe(function (apiResponse) {
            _this5.modalReference.close();

            _this5.toastr.success(apiResponse.message);

            var message = "A meeting on ".concat(_this5.purpose, " is deleted by ").concat(_this5.admin_name);
            var messageObj = {
              userId: _this5.userId,
              message: message
            };

            _this5.socketService.informServer(messageObj);

            _this5.events = _this5.events.filter(function (iEvent) {
              return iEvent.meetingId !== meetingId;
            }); //Go back to the route by using skip location method

            _this5.router.navigateByUrl("/admindashboard", {
              skipLocationChange: true
            }).then(function () {
              _this5.router.navigate(["/admin/user/".concat(_this5.userId)]);

              _this5.view = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"].Day;
            });
          }, function (err) {
            console.log(err);
          });
        };

        this.createMeeting = function () {
          var id = _this5._route.snapshot.paramMap.get("id");

          console.log("create meeting called", id);

          _this5.router.navigate(["admin/user/create/", id]);
        };

        this.currentSelectedUser = function () {
          var id = _this5._route.snapshot.paramMap.get("id");

          _this5.appService.getSingleUser(id).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              _this5.currentUser = apiResponse.data.firstName;
            } else {
              _this5.toastr.error(apiResponse.message);
            }
          }, function (err) {
            console.log(err.message);
          });
        };

        this.logout = function (name) {
          _this5.toastr.success("".concat(name));
        };
      }

      _createClass(UserdataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.localStorage = this.appService.getUserInfoFromLocalStorage();
          this.admin_name = this.localStorage.userName;
          this.getAllMeetings();

          if (this.userId == "undefined") {
            this.toastr.error("Please select a user to view the planner");
            this.showTemplate = false;
            setTimeout(function () {
              _this6.router.navigate(["/admindashboard"]);
            }, 2000);
          } // console.log(this.currentUser);

        }
      }, {
        key: "dayClicked",
        value: function dayClicked(_ref3) {
          var date = _ref3.date,
              events = _ref3.events;

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
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          this.purpose = event["title"];

          if (action == "Clicked") {
            this.modalData = event;
            this.modalReference = this.modal.open(this.modalContent, {
              centered: true
            });
          } else if (action == "Edited") {
            this.modalData = event;

            var id = this._route.snapshot.paramMap.get("id");

            this.router.navigate(["admin/user/".concat(id, "/meeting/").concat(this.modalData["meetingId"])]);
          } else {
            this.meetingToDelete = event["meetingId"];
            this.modalReference = this.modal.open(this.confirmForDelete, {
              centered: true
            });
          }
        }
      }, {
        key: "editMeet",
        value: function editMeet(e) {
          this.modalReference.close();

          var id = this._route.snapshot.paramMap.get("id");

          this.router.navigate(["admin/user/".concat(id, "/meeting/").concat(e)]);
        }
      }, {
        key: "deleteMeet",
        value: function deleteMeet(e) {
          this.modalReference.close();
          this.meetingToDelete = e;
          this.modalReference = this.modal.open(this.confirmForDelete, {
            centered: true
          });
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(e) {
          if (e.target.childNodes[0].data) {
            this.deleteMeeting(this.meetingToDelete);
          }
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }, {
        key: "getAllMeetings",
        value: function getAllMeetings() {
          var _this7 = this;

          this.spinner.show();
          this.appService.getAllMeetings(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              _this7.spinner.hide();

              apiResponse.data.map(function (meeting) {
                _this7.events.push({
                  start: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"])(meeting.startDate), 0), 0),
                  end: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"])(meeting.endDate), 0),
                  title: meeting.purpose,
                  color: meeting.color,
                  actions: _this7.actions,
                  location: meeting.location,
                  meetingId: meeting.meetingId,
                  createdBy: meeting.createdBy,
                  userId: meeting.userId
                });

                _this7.refresh.next();
              });
            } else if (apiResponse.status == 204) {
              _this7.spinner.hide(); // this.toastr.info(apiResponse.message);


              console.log(apiResponse.message);
            } else {
              _this7.toastr.error(apiResponse.message);
            }
          }, function (err) {
            console.log(err.message);
          });
          this.currentSelectedUser();
        }
      }]);

      return UserdataComponent;
    }();

    UserdataComponent.ctorParameters = function () {
      return [{
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
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      "static": true
    })], UserdataComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmForDelete", {
      "static": true
    })], UserdataComponent.prototype, "confirmForDelete", void 0);
    UserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userdata",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdata.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/userdata/userdata.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdata.component.css */
      "./src/app/admin/userdata/userdata.component.css"))["default"]]
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

    var routes = [{
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

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

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


    var AppComponent = // import { slideInAnimation } from "./animation";
    // import { RouterOutlet } from "@angular/router";
    function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "meet-up-application"; // getAnimationData(outlet: RouterOutlet) {
      //   return (
      //     outlet &&
      //     outlet.activatedRouteData &&
      //     outlet.activatedRouteData["animation"]
      //   );
      // }
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
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


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

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


    var AppService = /*#__PURE__*/function () {
      function AppService(_http) {
        _classCallCheck(this, AppService);

        this._http = _http; // private url = "http://localhost:3000/api/v1";

        this.url = "http://apimeetup.naikvaibhav.online/api/v1";
        this.showSpinner = false;
        this.hideSideNav = false;

        this.setUserInfoInLocalStorage = function (data) {
          localStorage.setItem("userInfo", JSON.stringify(data));
        };

        this.getUserInfoFromLocalStorage = function () {
          return JSON.parse(localStorage.getItem("userInfo"));
        };

        this.setAuthToken = function (data) {
          localStorage.setItem("authToken", JSON.stringify(data));
        };

        this.getAuthToken = function () {
          return JSON.parse(localStorage.getItem("authToken"));
        };

        this.removeUserInfoFromLocalStorage = function () {
          localStorage.removeItem("userInfo");
        };

        this.removeAuthTokenFromLocalStorage = function () {
          localStorage.removeItem("authToken");
        };
      }

      _createClass(AppService, [{
        key: "showLoadingSpinner",
        value: function showLoadingSpinner() {
          this.showSpinner = true;
        }
      }, {
        key: "hideLoadingSpinner",
        value: function hideLoadingSpinner() {
          this.showSpinner = false;
        }
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav() {
          this.hideSideNav = !this.hideSideNav;
        } //user related services

      }, {
        key: "signUpFunction",
        value: function signUpFunction(data) {
          // console.log(data);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("firstName", data.firstName).set("lastName", data.lastName).set("email", data.email).set("mobileNumber", data.mobileNumber).set("password", data.password).set("userRole", data.userRole).set("userName", data.userName).set("countryCode", data.countryCode).set("countryName", data.countryName).set("internationalCode", data.internationalCode).set("avatar", data.avatar); // console.log(params);

          return this._http.post("".concat(this.url, "/users/signup"), params);
        }
      }, {
        key: "loginFunction",
        value: function loginFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", data.email).set("password", data.password); // console.log("params", params);

          return this._http.post("".concat(this.url, "/users/login"), params);
        }
      }, {
        key: "forgotPasswordFunction",
        value: function forgotPasswordFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", data.email); // console.log("params", params);

          return this._http.post("".concat(this.url, "/users/forgotPassword"), params);
        }
      }, {
        key: "verifyPasswordResetLink",
        value: function verifyPasswordResetLink(id, token) {
          // console.log(id, token);
          return this._http.get("".concat(this.url, "/users/resetPassword/").concat(id, "/").concat(token));
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(data) {
          // console.log(data);
          return this._http.post("".concat(this.url, "/users/updatePassword"), data);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          return this._http.get("".concat(this.url, "/users"), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getSingleUser",
        value: function getSingleUser(userId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken()); // console.log(userId);

          return this._http.get("".concat(this.url, "/users/").concat(userId), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "logout",
        value: function logout(userId) {
          // console.log(userId);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userId", userId); // console.log("params", params);
          // let authToken = this.getAuthToken();
          // const params = new HttpParams().set("authToken", authToken);

          return this._http.post("".concat(this.url, "/users/logout"), params);
        } //meeting related services

      }, {
        key: "createMeeting",
        value: function createMeeting(data, userId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          console.log(data);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("purpose", data.purpose).set("location", data.location).set("startDate", data.startDate).set("endDate", data.endDate).set("createdBy", data.createdBy).set("userId", data.userId).set("userDetails", data.userDetails);
          console.log(params);
          return this._http.post("".concat(this.url, "/meetings/create/").concat(userId), params, {
            headers: headers
          });
        }
      }, {
        key: "getAllMeetings",
        value: function getAllMeetings(userId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          return this._http.get("".concat(this.url, "/meetings/user/").concat(userId), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getAMeetingDetail",
        value: function getAMeetingDetail(meetid) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          return this._http.get("".concat(this.url, "/meetings/meeting/").concat(meetid), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteMeeting",
        value: function deleteMeeting(userid, meetid) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          var data = {};
          return this._http.post("".concat(this.url, "/meetings/user/").concat(userid, "/meeting/").concat(meetid), data, {
            headers: headers
          });
        }
      }, {
        key: "editMeeting",
        value: function editMeeting(userid, meetid, options) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
          return this._http.put("".concat(this.url, "/meetings/user/").concat(userid, "/meeting/").concat(meetid), options, {
            headers: headers
          });
        } //exception handler

      }, {
        key: "handleError",
        value: function handleError(err) {
          console.log("Handle error Http Calls");
          console.log(err.message);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](err.message);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

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


    __webpack_exports__["default"] = "* {\r\n  /* margin: 0;\r\n  padding: 0; */\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\nhtml body {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0px 3px 20px 2px #35baee;\r\n}\r\n\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n\r\n.loginBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n.signUpBtn {\r\n  margin-top: 2vh;\r\n}\r\n\r\nbody {\r\n  overflow-y: hidden;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .forgotPasswordForm {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n  .forgotPasswordForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtlQUNhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFHQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAvKiBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDsgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaHRtbCBib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzM1YmFlZTtcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ2luQnRuIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uc2lnblVwQnRuIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuLm5vdGlmeUVycm9yIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG4iXX0= */";
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

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this8 = this;

        _classCallCheck(this, ForgotPasswordComponent);

        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;

        this.checkFormValidation = function () {
          if (!_this8.email) {
            _this8.toastr.warning("Email is missing");
          } else {
            return;
          }
        }; //end of checkFormValidation

      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.resetPasswordLinkFetched();
        }
      }, {
        key: "forgotPasswordFunction",
        value: function forgotPasswordFunction() {
          var _this9 = this;

          this.checkFormValidation();
          var data = {
            email: this.email
          }; // console.log("data", data);

          this.appService.forgotPasswordFunction(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              _this9.toastr.success(apiResponse.message);

              _this9.router.navigate(["/"]);
            } else {
              _this9.toastr.error(apiResponse.message);

              _this9.router.navigate(["/"]);
            }
          }, function (err) {
            _this9.toastr.error("Some error occured");
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forgot-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/home/forgot-password/forgot-password.component.css"))["default"]]
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

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

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


    __webpack_exports__["default"] = "* {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #002651;\r\n}\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-outline-success {\r\n  color: #002651;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background-color: #002651;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #073263;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n\r\n.card {\r\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n\r\n.loginBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n.signUpBtn {\r\n  margin-top: 2vh;\r\n}\r\n\r\nbody {\r\n  overflow-y: hidden;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .loginForm {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  .loginForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .loginForm {\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUNBOzs7RUFHRSw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUNBOzs7RUFHRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUM7a0NBQ2dDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAyNjUxO1xyXG59XHJcblxyXG4vKmN1c3RvbSBjb2xvciBmb3IgYm9vdHN0cmFwIGJ1dHRvbnMqL1xyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMwMDI2NTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY1MTtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjMDczMjYzO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIC8qIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzM1YmFlZTsgKi9cclxuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9naW5CdG4ge1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5zaWduVXBCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ2luRm9ybSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmxvZ2luRm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuLm5vdGlmeUVycm9yIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG4iXX0= */";
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


    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(appService, _route, router, toastr) {
        var _this10 = this;

        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = "";
        this.password = "";

        this.checkFormValidation = function () {
          if (!_this10.email) {
            _this10.toastr.warning("Email is missing");
          } else if (!_this10.password) {
            _this10.toastr.warning("Password is missing");
          } else {
            return;
          }
        }; //end of checkFormValidation


        this.loginFunction = function () {
          document.querySelector(".loginBtn").textContent = "Logging....";

          _this10.checkFormValidation();

          var data = {
            email: _this10.email,
            password: _this10.password
          }; // console.log("data", data);

          _this10.appService.loginFunction(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              if (apiResponse.data.userDetails.userRole == "admin") {
                _this10.router.navigate(["/admindashboard"]);

                _this10.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

                _this10.appService.setAuthToken(apiResponse.data.authToken);

                _this10.toastr.success(apiResponse.message);
              } else {
                _this10.router.navigate(["/userdashboard/".concat(apiResponse.data.userDetails.userId)]);

                _this10.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

                _this10.appService.setAuthToken(apiResponse.data.authToken);

                _this10.toastr.success(apiResponse.message);
              }
            } else {
              console.log(apiResponse);

              _this10.toastr.error(apiResponse.message);
            }
          }, function (err) {
            document.querySelector(".loginBtn").textContent = "Login";

            _this10.toastr.error(err.error.message);
          });
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/home/login/login.component.css"))["default"]]
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


    __webpack_exports__["default"] = "a.active {\r\n  color: #fff;\r\n  border-bottom: 5px solid#f90;\r\n  background-color: rgba(148, 134, 134, 0.5);\r\n  font-weight: bold;\r\n}\r\n\r\na:hover:not(.active):not(.navbar-brand) {\r\n  background-color: rgba(5, 81, 168, 0.5);\r\n}\r\n\r\n.navbar-color {\r\n  background: #002651;\r\n}\r\n\r\n.navbar-toggler {\r\n  color: #fff;\r\n  border: none !important;\r\n  outline: none !important;\r\n}\r\n\r\n.navbar-toggler .fa {\r\n  color: #fff;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.nav-link {\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQjZjkwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxMzQsIDEzNCwgMC41KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYTpob3Zlcjpub3QoLmFjdGl2ZSk6bm90KC5uYXZiYXItYnJhbmQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDgxLCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICMwMDI2NTE7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciAuZmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */";
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

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/home/navbar/navbar.component.css"))["default"]]
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


    __webpack_exports__["default"] = "* {\r\n  /* margin: 0;\r\n    padding: 0; */\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\nhtml body {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\n.card {\r\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n\r\n.loginBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n.signUpBtn {\r\n  margin-top: 2vh;\r\n}\r\n\r\nbody {\r\n  overflow-y: hidden;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .forgotPasswordForm {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n  .forgotPasswordForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLyogbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDsgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaHRtbCBib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgLyogYm94LXNoYWRvdzogMHB4IDNweCAyMHB4IDJweCAjMzViYWVlOyAqL1xyXG4gIGJveC1zaGFkb3c6IC0xNXB4IDAgMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgLTE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAwIDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzd29yZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2dpbkJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnNpZ25VcEJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0MjtcclxufVxyXG4ubm90aWZ5RXJyb3Ige1xyXG4gIGNvbG9yOiAjYTk0NDQyO1xyXG59XHJcbiJdfQ== */";
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

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/home/page-not-found/page-not-found.component.css"))["default"]]
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


    __webpack_exports__["default"] = "* {\r\n  /* margin: 0;\r\n    padding: 0; */\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\nhtml {\r\n  margin: 0;\r\n}\r\nbody {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n.card {\r\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n.loginBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n.signUpBtn {\r\n  margin-top: 2vh;\r\n}\r\nbody {\r\n  overflow-y: hidden;\r\n}\r\n@media screen and (min-width: 768px) {\r\n  .resetPasswordForm {\r\n    width: 500px;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .resetPasswordForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsMENBQTBDO0VBQzFDO2tDQUNnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgLyogbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDsgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5odG1sIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAvKiBib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMnB4ICMzNWJhZWU7ICovXHJcbiAgYm94LXNoYWRvdzogLTE1cHggMCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgIDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3JkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ2luQnRuIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uc2lnblVwQnRuIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5yZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlc2V0UGFzc3dvcmRGb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQubmctZGlydHkubmctdmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzQyYTk0ODtcclxufVxyXG5cclxuaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xyXG59XHJcbi5ub3RpZnlFcnJvciB7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuIl19 */";
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

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(appService, _route, router, toastr, modal) {
        var _this11 = this;

        _classCallCheck(this, ResetPasswordComponent);

        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.isLink = false;

        this.updatePasswordFunction = function () {
          var data = {
            userId: _this11.userId,
            token: _this11.token,
            password: _this11.password
          };

          _this11.appService.updatePassword(data).subscribe(function (apiResponse) {
            console.log("Data posted");
            console.log(apiResponse);

            _this11.toastr.success(apiResponse.message);

            _this11.router.navigate(["/"]);
          }, function (err) {
            console.log(err);

            _this11.router.navigate(["/"]);
          });
        };
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var id = this._route.snapshot.paramMap.get("id");

          var token = this._route.snapshot.paramMap.get("token"); // console.log("id", id);
          // console.log("token", token);


          this.appService.verifyPasswordResetLink(id, token).subscribe(function (apiResponse) {
            _this12.isLink = true; // console.log(apiResponse);
            // console.log(apiResponse.data.token);
            // console.log(apiResponse.data.userId);

            _this12.token = apiResponse.data.token;
            _this12.userId = apiResponse.data.userId;
          }, function (err) {
            console.log(err);
            console.log("Link expired");

            _this12.toastr.error("Link expired");
          });
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
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
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reset-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/home/reset-password/reset-password.component.css"))["default"]]
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


    __webpack_exports__["default"] = "* {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\nhtml {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\n.btn-outline-success {\r\n  color: #002651;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background-color: #002651;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #073263;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #002651;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #002651;\r\n}\r\n\r\n.crop {\r\n  border-radius: 100%;\r\n  line-height: 1em;\r\n  padding: 1em;\r\n  width: 6em;\r\n  height: 6em;\r\n  margin: 0 auto;\r\n  float: none;\r\n}\r\n\r\n.card {\r\n  /* box-shadow: 0px 3px 20px 2px #35baee; */\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .signUpForm {\r\n    width: 500px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  .signUpForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .signUpForm {\r\n    /* width: 300px; */\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\nselect.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\nselect.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n.active {\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFDQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMwMDI2NTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY1MTtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjMDczMjYzO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICMwMDI2NTE7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gIzAwMjY1MTtcclxufVxyXG5cclxuLmNyb3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIC8qIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAycHggIzM1YmFlZTsgKi9cclxuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaWduVXBGb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuc2lnblVwRm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuc2lnblVwRm9ybSB7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0MjtcclxufVxyXG5zZWxlY3QubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xyXG59XHJcbnNlbGVjdC5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcbi5ub3RpZnlFcnJvciB7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */";
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


    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(appService, _route, router, toastr, imageUploadService) {
        var _this13 = this;

        _classCallCheck(this, SignupComponent);

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

        this.getCountryName = function () {
          var result = Object.keys(_assets_names_json__WEBPACK_IMPORTED_MODULE_5__).map(function (data) {
            return {
              code: data,
              name: _assets_names_json__WEBPACK_IMPORTED_MODULE_5__[data]
            };
          });
          return _this13.countryName = result;
        };

        this.getPhoneCode = function () {
          var result = Object.keys(_assets_phones_json__WEBPACK_IMPORTED_MODULE_6__).map(function (data) {
            return {
              code: data,
              number: _assets_phones_json__WEBPACK_IMPORTED_MODULE_6__[data]
            };
          });
          return _this13.phoneCode = result;
        };

        this.changed = function (event) {
          _this13.selectCountry(_this13.selectedCountryCode);

          var _iterator = _createForOfIteratorHelper(_this13.getPhoneCode()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var each = _step.value;

              if (event.target.value === each.code) {
                _this13.internationalCode = each.number;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };

        this.selectRole = function (event) {
          console.log(_this13.userRole);
          _this13.userRole == "admin" ? _this13.userName = "".concat(_this13.userName, "-").concat(_this13.userRole) : _this13.userName = _this13.userName.substring(0, _this13.userName.indexOf("-"));
          console.log(_this13.userName);
        };

        this.selectCountry = function (name) {
          Object.keys(_assets_names_json__WEBPACK_IMPORTED_MODULE_5__).map(function (data) {
            if (data == name) {
              _this13.selectedCountryName = _assets_names_json__WEBPACK_IMPORTED_MODULE_5__[data];
            }
          });
        };

        this.goToSignIn = function () {
          _this13.router.navigate(["/"]);
        }; //end of goToSignIn


        this.signUpFunction = function () {
          var data = {
            firstName: _this13.firstName,
            lastName: _this13.lastName,
            mobileNumber: _this13.mobileNumber,
            email: _this13.email,
            password: _this13.password,
            userRole: _this13.userRole,
            userName: _this13.userName,
            countryCode: _this13.selectedCountryCode,
            countryName: _this13.selectedCountryName,
            internationalCode: _this13.internationalCode,
            avatar: _this13.imageUrl
          }; // console.log("data", data);

          document.querySelector(".signUpBtn").textContent = "Signing....";

          _this13.appService.signUpFunction(data).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              _this13.toastr.success("Signup successful");

              setTimeout(function () {
                _this13.goToSignIn();
              }, 200);
            } else {
              _this13.toastr.error(apiResponse.message);
            }
          }, function (err) {
            console.log(err);
            document.querySelector(".signUpBtn").textContent = "Sign Up";

            _this13.toastr.error(err.error.message);
          });
        };

        this.cancelRegister = function () {
          _this13.firstName = "";
          _this13.lastName = "";
          _this13.email = "";
          _this13.password = "";
          _this13.selectedCountryName = "";
          _this13.userName = "";
        };
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountryName();
          this.getPhoneCode();
          this.selectCountry(this.selectedCountryCode); // console.log(this.userRole);
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          var _this14 = this;

          document.querySelector(".custom-file-label").textContent = event.target.files[0].name;

          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url

            console.log("event.target.files[0]", event.target.files[0]);
            this.imageObj = event.target.files[0];

            reader.onload = function (event) {
              // called once readAsDataURL is completed
              console.log("onload", event.target["result"]);
              _this14.url = event.target["result"];
            };
          }
        }
      }, {
        key: "onImageUpload",
        value: function onImageUpload() {
          var _this15 = this;

          this.appService.showLoadingSpinner();

          if (this.url != undefined) {
            document.getElementById("imagePreview").style.display = "none";
          }

          var imageForm = new FormData();
          imageForm.append("image", this.imageObj);
          this.imageUploadService.imageUpload(imageForm).subscribe(function (res) {
            _this15.appService.hideLoadingSpinner();

            _this15.imageUrl = res["image"];
            _this15.imageUrl = "https://project-images-upload.s3.amazonaws.com/".concat(_this15.imageUrl);
            console.log(_this15.imageUrl);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
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
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/home/signup/signup.component.css"))["default"]]
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

    var ImageUploadService = /*#__PURE__*/function () {
      function ImageUploadService(_http) {
        _classCallCheck(this, ImageUploadService);

        this._http = _http; // private url = "http://localhost:3000/api/v1";

        this.url = "http://apimeetup.naikvaibhav.online/api/v1";
      }

      _createClass(ImageUploadService, [{
        key: "imageUpload",
        value: function imageUpload(imageForm) {
          // console.log("image uploading", imageForm);
          return this._http.post("".concat(this.url, "/users/upload"), imageForm);
        }
      }]);

      return ImageUploadService;
    }();

    ImageUploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

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

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

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


    __webpack_exports__["default"] = ":host {\r\n  background: #002651;\r\n}\r\n\r\n#sidebar {\r\n  min-width: 225px;\r\n  max-width: 225px;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  font-weight: 300;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: flex-end;\r\n  background: #002651;\r\n}\r\n\r\n.filter-white {\r\n  -webkit-filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n          filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n}\r\n\r\n#sidebar.hidden {\r\n  margin-left: -225px;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  #sidebar {\r\n    margin-left: -225px;\r\n    position: absolute;\r\n    height: 100vh;\r\n    z-index: 2;\r\n  }\r\n  #sidebar.hidden {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n.active {\r\n  color: #fff;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 15px;\r\n  display: block;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n#sidebar ul li a.active {\r\n  border-right: 5px solid#f90;\r\n  font-weight: bold;\r\n  color: #28c7fa;\r\n  background-color: rgba(148, 134, 134, 0.5);\r\n}\r\n\r\n.focus {\r\n  border-right: 5px solid#f90;\r\n  background-color: rgba(148, 134, 134, 0.5);\r\n}\r\n\r\n#sidebar ul li a:hover:not(.active) {\r\n  background-color: rgba(5, 81, 168, 0.5);\r\n}\r\n\r\nhr {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  z-index: 100;\r\n}\r\n\r\n.crop {\r\n  border-radius: 100%;\r\n  line-height: 1em;\r\n  padding: 1em;\r\n  width: 5em;\r\n  height: 5em;\r\n  margin: 0 auto;\r\n  float: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO2tDQUNnQztVQURoQztrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogIzAwMjY1MTtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgbWF4LXdpZHRoOiAyMjVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gIGJhY2tncm91bmQ6ICMwMDI2NTE7XHJcbn1cclxuXHJcbi5maWx0ZXItd2hpdGUge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIwMzMlKSBodWUtcm90YXRlKDEyNGRlZylcclxuICAgIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcclxufVxyXG5cclxuI3NpZGViYXIuaGlkZGVuIHtcclxuICBtYXJnaW4tbGVmdDogLTIyNXB4O1xyXG59XHJcblxyXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAjc2lkZWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gICNzaWRlYmFyLmhpZGRlbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQjZjkwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMjhjN2ZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxMzQsIDEzNCwgMC41KTtcclxufVxyXG4uZm9jdXMge1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkI2Y5MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTM0LCAxMzQsIDAuNSk7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDgxLCAxNjgsIDAuNSk7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNyb3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDVlbTtcclxuICBoZWlnaHQ6IDVlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG4iXX0= */";
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

    var SidenavComponent = /*#__PURE__*/function () {
      function SidenavComponent(appService, socketService, router, _route) {
        var _this16 = this;

        _classCallCheck(this, SidenavComponent);

        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this._route = _route;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.logout = function () {
          // Cookie.deleteAll();
          // this.router.navigate(["/"]);
          if (_this16.adminUserId) {
            console.log(_this16.adminUserId);

            _this16.appService.logout(_this16.adminUserId).subscribe(function (apiResponse) {
              console.log("apiResponse", apiResponse);

              _this16.notify.emit(apiResponse.message);

              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                // Cookie.delete("authToken");
                // Cookie.delete("receiverId");
                // Cookie.delete("receiverName");
                _this16.appService.removeUserInfoFromLocalStorage();

                _this16.appService.removeAuthTokenFromLocalStorage();

                _this16.socketService.disconnectedSocket(); // this.appService.removeUserInfoFromLocalStorage();
                // this.appService.removeAuthTokenFromLocalStorage();


                console.log("disconnected socket from socket service is called");

                _this16.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, function (err) {
              console.log(err.error);
              console.log("some error occured");
            });
          } else {
            console.log(_this16.normalUserId);

            _this16.appService.logout(_this16.normalUserId).subscribe(function (apiResponse) {
              console.log("apiResponse", apiResponse);

              _this16.notify.emit(apiResponse.message);

              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                // Cookie.delete("authToken");
                // Cookie.delete("receiverId");
                // Cookie.delete("receiverName");
                _this16.appService.removeUserInfoFromLocalStorage();

                _this16.appService.removeAuthTokenFromLocalStorage();

                _this16.socketService.disconnectedSocket(); // this.appService.removeUserInfoFromLocalStorage();
                // this.appService.removeAuthTokenFromLocalStorage();


                console.log("disconnected socket from socket service is called");

                _this16.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, function (err) {
              console.log(err.error);
              console.log("some error occured");
            });
          }
        };
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log("normalUserId", this.normalUserId);
          // console.log("admin user id", this.adminUserId);
          var x = this.appService.getUserInfoFromLocalStorage();
          this.role = x.userRole;
        }
      }, {
        key: "goToAdminDashboard",
        value: function goToAdminDashboard() {
          this.router.navigate(["/admindashboard"]);
        }
      }, {
        key: "goToUserDashboard",
        value: function goToUserDashboard() {
          this.router.navigate(["/userdashboard/".concat(this._route.snapshot.paramMap.get("id"))]);
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "normalUserId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "adminUserId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SidenavComponent.prototype, "notify", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidenav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenav/sidenav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav.component.css */
      "./src/app/shared/sidenav/sidenav.component.css"))["default"]]
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


    __webpack_exports__["default"] = ".navbar-toggler {\r\n  color: #fff;\r\n  border: none !important;\r\n  outline: none !important;\r\n}\r\n.navbar-toggler .fa {\r\n  color: #fff;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGVuYXZ0b2dnbGVyL3NpZGVuYXZ0b2dnbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlbmF2dG9nZ2xlci9zaWRlbmF2dG9nZ2xlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyIC5mYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuIl19 */";
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

    var SidenavtogglerComponent = /*#__PURE__*/function () {
      function SidenavtogglerComponent(appService) {
        _classCallCheck(this, SidenavtogglerComponent);

        this.appService = appService;
      }

      _createClass(SidenavtogglerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavtogglerComponent;
    }();

    SidenavtogglerComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    SidenavtogglerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidenavtoggler",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenavtoggler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidenavtoggler/sidenavtoggler.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenavtoggler.component.css */
      "./src/app/shared/sidenavtoggler/sidenavtoggler.component.css"))["default"]]
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


    __webpack_exports__["default"] = "p {\r\n  color: #ffff;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-left: auto;\r\n}\r\n/* svg color */\r\n.filter-white {\r\n  -webkit-filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n          filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n}\r\n.navbar-color {\r\n  background: #002651;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQSxjQUFjO0FBQ2Q7RUFDRTtrQ0FDZ0M7VUFEaEM7a0NBQ2dDO0FBQ2xDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIHN2ZyBjb2xvciAqL1xyXG4uZmlsdGVyLXdoaXRlIHtcclxuICBmaWx0ZXI6IGludmVydCg5NyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMDMzJSkgaHVlLXJvdGF0ZSgxMjRkZWcpXHJcbiAgICBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDk2JSk7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICMwMDI2NTE7XHJcbn1cclxuIl19 */";
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

    var TopnavComponent = /*#__PURE__*/function () {
      function TopnavComponent(appService, router, socketService) {
        var _this17 = this;

        _classCallCheck(this, TopnavComponent);

        this.appService = appService;
        this.router = router;
        this.socketService = socketService;
        this.name = "";
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.logout = function () {
          _this17.appService.logout(_this17.User).subscribe(function (apiResponse) {
            console.log("apiResponse", apiResponse);

            _this17.notify.emit(apiResponse.message);

            console.log("logout sucessfull");

            if (apiResponse.status == 200) {
              _this17.appService.removeUserInfoFromLocalStorage();

              _this17.appService.removeAuthTokenFromLocalStorage();

              _this17.socketService.disconnectedSocket();

              console.log("disconnected socket from socket service is called");

              _this17.router.navigate(["/"]);
            } else {
              console.log(apiResponse.message);
            }
          }, function (err) {
            console.log(err.error);
            console.log("some error occured");
          });
        };
      }

      _createClass(TopnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = this.dashboardName;
        }
      }]);

      return TopnavComponent;
    }();

    TopnavComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopnavComponent.prototype, "dashboardName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopnavComponent.prototype, "User", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TopnavComponent.prototype, "notify", void 0);
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-topnav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/topnav/topnav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topnav.component.css */
      "./src/app/shared/topnav/topnav.component.css"))["default"]]
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

    var SocketService = /*#__PURE__*/function () {
      function SocketService(_http) {
        var _this18 = this;

        _classCallCheck(this, SocketService);

        this._http = _http;

        this.verifyUser = function () {
          console.log("verifyUser called");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.on("verifyUser", function (data) {
              console.log("verifyUser is catched", data);
              observer.next(data);
            });
          });
        }; //events to be emitted


        this.setUser = function (token) {
          // const token = JSON.parse(localStorage.getItem("authToken"));
          console.log("setUser");
          console.log("set-user is emitted");

          _this18.socket.emit("set-user", token);
        }; //end setUser


        this.onlineUsersList = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.on("online-user-list", function (userList) {
              // console.log("online-user-list catched");
              // console.log("userlist", userList);
              observer.next(userList);
            });
          });
        };

        this.exitSocket = function () {
          _this18.socket.disconnect();
        };

        this.informServer = function (data) {
          // console.log("informServer is emitted");
          _this18.socket.emit("inform-server", data);
        };

        this.informUser = function (userId) {
          // console.log("MyIO emit is being catched", userId);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.on(userId, function (data) {
              observer.next(data);
            }); //end Socket

          }); //end Observable
        };

        this.meetingNotification = function (userId) {
          // console.log("MyIO emit is being catched", userId);
          // this.socket.removeAllListeners(userId);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.on(userId, function (data) {
              observer.next(data);
            }); //end Socket

          }); //end Observable
        }; //end of meetingNotification


        this.disconnectedSocket = function () {
          console.log("disconnected socket called");
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this18.socket.emit("disconnect", function () {
              // console.log("disconnected is catched");
              // console.log("disconnect called");
              observer.next();
            });
          });
        }; //connection is being created
        //that handshake
        // this.socket = io("http://localhost:3000");


        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://apimeetup.naikvaibhav.online");
        this.authToken = JSON.parse(localStorage.getItem("authToken"));
      } //exception handler


      _createClass(SocketService, [{
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = "";

          if (err.error instanceof Error) {
            errorMessage = "An error occured: ".concat(err.error.message);
          } else {
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.error.message);
          }

          console.error(errorMessage);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](errorMessage);
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

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

    var UserRouteGuardService = /*#__PURE__*/function () {
      function UserRouteGuardService(router, appService, toastr) {
        _classCallCheck(this, UserRouteGuardService);

        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(UserRouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          var authToken = this.appService.getAuthToken(); // console.log("in guard service", authToken, route.data);

          if (authToken === undefined || authToken === "" || authToken === null) {
            this.router.navigate(["/"]);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return UserRouteGuardService;
    }();

    UserRouteGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

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

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

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


    __webpack_exports__["default"] = ".wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 56px);\r\n}\r\n\r\n.crop {\r\n  border-radius: 100%;\r\n  line-height: 1em;\r\n  padding: 1em;\r\n  width: 6em;\r\n  height: 6em;\r\n  margin: 0 auto;\r\n  float: none;\r\n}\r\n\r\n.calendar {\r\n  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.1), 0 -15px 35px rgba(0, 0, 0, 0.1),\r\n    0 15px 35px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*bell icon animation*/\r\n\r\n.bell {\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  font-size: 40px;\r\n  margin: 50px auto 0;\r\n  color: #9e9e9e;\r\n  -webkit-animation: ring 4s 0.7s ease-in-out infinite;\r\n  -webkit-transform-origin: 50% 4px;\r\n  -moz-animation: ring 4s 0.7s ease-in-out infinite;\r\n  -moz-transform-origin: 50% 4px;\r\n  animation: ring 4s 0.7s ease-in-out infinite;\r\n  transform-origin: 50% 4px;\r\n}\r\n\r\n@-webkit-keyframes ring {\r\n  0% {\r\n    -webkit-transform: rotateZ(0);\r\n  }\r\n  1% {\r\n    -webkit-transform: rotateZ(30deg);\r\n  }\r\n  3% {\r\n    -webkit-transform: rotateZ(-28deg);\r\n  }\r\n  5% {\r\n    -webkit-transform: rotateZ(34deg);\r\n  }\r\n  7% {\r\n    -webkit-transform: rotateZ(-32deg);\r\n  }\r\n  9% {\r\n    -webkit-transform: rotateZ(30deg);\r\n  }\r\n  11% {\r\n    -webkit-transform: rotateZ(-28deg);\r\n  }\r\n  13% {\r\n    -webkit-transform: rotateZ(26deg);\r\n  }\r\n  15% {\r\n    -webkit-transform: rotateZ(-24deg);\r\n  }\r\n  17% {\r\n    -webkit-transform: rotateZ(22deg);\r\n  }\r\n  19% {\r\n    -webkit-transform: rotateZ(-20deg);\r\n  }\r\n  21% {\r\n    -webkit-transform: rotateZ(18deg);\r\n  }\r\n  23% {\r\n    -webkit-transform: rotateZ(-16deg);\r\n  }\r\n  25% {\r\n    -webkit-transform: rotateZ(14deg);\r\n  }\r\n  27% {\r\n    -webkit-transform: rotateZ(-12deg);\r\n  }\r\n  29% {\r\n    -webkit-transform: rotateZ(10deg);\r\n  }\r\n  31% {\r\n    -webkit-transform: rotateZ(-8deg);\r\n  }\r\n  33% {\r\n    -webkit-transform: rotateZ(6deg);\r\n  }\r\n  35% {\r\n    -webkit-transform: rotateZ(-4deg);\r\n  }\r\n  37% {\r\n    -webkit-transform: rotateZ(2deg);\r\n  }\r\n  39% {\r\n    -webkit-transform: rotateZ(-1deg);\r\n  }\r\n  41% {\r\n    -webkit-transform: rotateZ(1deg);\r\n  }\r\n\r\n  43% {\r\n    -webkit-transform: rotateZ(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateZ(0);\r\n  }\r\n}\r\n\r\n@keyframes ring {\r\n  0% {\r\n    transform: rotate(0);\r\n  }\r\n  1% {\r\n    transform: rotate(30deg);\r\n  }\r\n  3% {\r\n    transform: rotate(-28deg);\r\n  }\r\n  5% {\r\n    transform: rotate(34deg);\r\n  }\r\n  7% {\r\n    transform: rotate(-32deg);\r\n  }\r\n  9% {\r\n    transform: rotate(30deg);\r\n  }\r\n  11% {\r\n    transform: rotate(-28deg);\r\n  }\r\n  13% {\r\n    transform: rotate(26deg);\r\n  }\r\n  15% {\r\n    transform: rotate(-24deg);\r\n  }\r\n  17% {\r\n    transform: rotate(22deg);\r\n  }\r\n  19% {\r\n    transform: rotate(-20deg);\r\n  }\r\n  21% {\r\n    transform: rotate(18deg);\r\n  }\r\n  23% {\r\n    transform: rotate(-16deg);\r\n  }\r\n  25% {\r\n    transform: rotate(14deg);\r\n  }\r\n  27% {\r\n    transform: rotate(-12deg);\r\n  }\r\n  29% {\r\n    transform: rotate(10deg);\r\n  }\r\n  31% {\r\n    transform: rotate(-8deg);\r\n  }\r\n  33% {\r\n    transform: rotate(6deg);\r\n  }\r\n  35% {\r\n    transform: rotate(-4deg);\r\n  }\r\n  37% {\r\n    transform: rotate(2deg);\r\n  }\r\n  39% {\r\n    transform: rotate(-1deg);\r\n  }\r\n  41% {\r\n    transform: rotate(1deg);\r\n  }\r\n\r\n  43% {\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n/*custom color for bootstrap button*/\r\n\r\n.btn-primary {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal; */\r\n  /* border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:hover {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: #004d4d;\r\n  border-color: #009a9a; */\r\n  background-color: #03a7dd;\r\n  border-color: #03a7dd;\r\n}\r\n\r\n.btn-primary:focus,\r\n.btn-primary.focus {\r\n  /* box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5); */\r\n  box-shadow: 0 0 0 0.2rem #03a7dd;\r\n}\r\n\r\n.btn-primary.disabled,\r\n.btn-primary:disabled {\r\n  /* color: #fff; */\r\n  color: #000;\r\n  /* background-color: teal;\r\n  border-color: #005a5a; */\r\n  background-color: #28c7fa;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active,\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  /* color: #fff; */\r\n  color: #fff;\r\n  /* background-color: #00b3b3; */\r\n  background-color: #024e68;\r\n  border-color: #024e68;\r\n  /* border-color: #000; */\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 90, 90, 0.5);\r\n}\r\n\r\n.btn-outline-primary {\r\n  color: #000;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #28c7fa;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n  color: #000;\r\n  background-color: #03a7dd;\r\n  border-color: #03a7dd;\r\n}\r\n\r\n.btn-outline-primary:focus,\r\n.btn-outline-primary.focus {\r\n  box-shadow: 0 0 0 0.2rem #024e68;\r\n  border-color: #024e68;\r\n}\r\n\r\n.btn-outline-primary.disabled,\r\n.btn-outline-primary:disabled {\r\n  color: #000;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: #000;\r\n  background-color: transparent;\r\n  border-color: #024e68;\r\n}\r\n\r\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.2rem #024e68;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyZGFzaGJvYXJkL3VzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0U7a0NBQ2dDO0FBQ2xDOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvREFBb0Q7RUFDcEQsaUNBQWlDO0VBQ2pDLGlEQUFpRDtFQUNqRCw4QkFBOEI7RUFDOUIsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUE4RUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWDswQkFDd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxtREFBbUQ7RUFDbkQsZ0NBQWdDO0FBQ2xDOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1g7MEJBQ3dCO0VBQ3hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUNBOzs7RUFHRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBQ0E7OztFQUdFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUNBOzs7RUFHRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXJkYXNoYm9hcmQvdXNlcmRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxufVxyXG5cclxuLmNyb3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICBib3gtc2hhZG93OiAtMTVweCAwIDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIC0xNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4vKmJlbGwgaWNvbiBhbmltYXRpb24qL1xyXG4uYmVsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW46IDUwcHggYXV0byAwO1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaW5nIDRzIDAuN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNHB4O1xyXG4gIC1tb3otYW5pbWF0aW9uOiByaW5nIDRzIDAuN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNHB4O1xyXG4gIGFuaW1hdGlvbjogcmluZyA0cyAwLjdzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA0cHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByaW5nIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcclxuICB9XHJcbiAgMSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzBkZWcpO1xyXG4gIH1cclxuICAzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMjhkZWcpO1xyXG4gIH1cclxuICA1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNGRlZyk7XHJcbiAgfVxyXG4gIDclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0zMmRlZyk7XHJcbiAgfVxyXG4gIDklIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwZGVnKTtcclxuICB9XHJcbiAgMTElIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yOGRlZyk7XHJcbiAgfVxyXG4gIDEzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyNmRlZyk7XHJcbiAgfVxyXG4gIDE1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMjRkZWcpO1xyXG4gIH1cclxuICAxNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjJkZWcpO1xyXG4gIH1cclxuICAxOSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTIwZGVnKTtcclxuICB9XHJcbiAgMjElIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE4ZGVnKTtcclxuICB9XHJcbiAgMjMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0xNmRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7XHJcbiAgfVxyXG4gIDI3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMTJkZWcpO1xyXG4gIH1cclxuICAyOSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTBkZWcpO1xyXG4gIH1cclxuICAzMSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLThkZWcpO1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNmRlZyk7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtNGRlZyk7XHJcbiAgfVxyXG4gIDM3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyZGVnKTtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0xZGVnKTtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xyXG4gIH1cclxuXHJcbiAgNDMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDApO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHJpbmcge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIDElIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuICAzJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpO1xyXG4gIH1cclxuICA3JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zMmRlZyk7XHJcbiAgfVxyXG4gIDklIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuICAxMSUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpO1xyXG4gIH1cclxuICAxMyUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNmRlZyk7XHJcbiAgfVxyXG4gIDE1JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTtcclxuICB9XHJcbiAgMTklIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcclxuICB9XHJcbiAgMjElIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xyXG4gIH1cclxuICAyMyUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XHJcbiAgfVxyXG4gIDI3JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgfVxyXG4gIDI5JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcbiAgMzElIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICAzNyUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcclxuICB9XHJcblxyXG4gIDQzJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAxJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgfVxyXG4gIDMlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM0ZGVnKTtcclxuICB9XHJcbiAgNyUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTtcclxuICB9XHJcbiAgOSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuICAxMSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTtcclxuICB9XHJcbiAgMTMlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTtcclxuICB9XHJcbiAgMTUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XHJcbiAgfVxyXG4gIDE5JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xyXG4gIH1cclxuICAyMSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xyXG4gIH1cclxuICAyMyUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcclxuICB9XHJcbiAgMjclIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgfVxyXG4gIDI5JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgfVxyXG4gIDMxJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTtcclxuICB9XHJcbiAgMzclIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gIH1cclxuICAzOSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XHJcbiAgfVxyXG5cclxuICA0MyUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKmN1c3RvbSBjb2xvciBmb3IgYm9vdHN0cmFwIGJ1dHRvbiovXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdGVhbDsgKi9cclxuICAvKiBib3JkZXItY29sb3I6ICMwMDVhNWE7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzdmYTtcclxuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwNGQ0ZDtcclxuICBib3JkZXItY29sb3I6ICMwMDlhOWE7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTdkZDtcclxuICBib3JkZXItY29sb3I6ICMwM2E3ZGQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLXByaW1hcnkuZm9jdXMge1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDkwLCA5MCwgMC41KTsgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gIzAzYTdkZDtcclxufVxyXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsXHJcbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XHJcbiAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICBib3JkZXItY29sb3I6ICMwMDVhNWE7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzdmYTtcclxuICBib3JkZXItY29sb3I6ICMyOGM3ZmE7XHJcbn1cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICBjb2xvcjogI2ZmZjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2IzOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRlNjg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDI0ZTY4O1xyXG4gIC8qIGJvcmRlci1jb2xvcjogIzAwMDsgKi9cclxufVxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDkwLCA5MCwgMC41KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhjN2ZhO1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhN2RkO1xyXG4gIGJvcmRlci1jb2xvcjogIzAzYTdkZDtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkuZm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMDI0ZTY4O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyNGU2ODtcclxufVxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeS5kaXNhYmxlZCxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDI0ZTY4O1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICMwMjRlNjg7XHJcbn1cclxuIl19 */";
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

    var UserdashboardComponent = /*#__PURE__*/function () {
      function UserdashboardComponent(appService, socketService, _route, router, toastr, modal, imageUploadService) {
        var _this19 = this;

        _classCallCheck(this, UserdashboardComponent);

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

        this.checkStatus = function () {
          if (_this19._route.snapshot.paramMap.get("id") == _this19.localStorage.userId) {
            _this19.router.navigate(["/userdashboard/".concat(_this19._route.snapshot.paramMap.get("id"))]);

            return true;
          } else {
            _this19.appService.logout(_this19.localStorage.userId).subscribe(function (apiResponse) {
              // console.log("apiResponse", apiResponse);
              _this19.toastr.success("You are logged out as you tried to access invalid user id");

              console.log("logout sucessfull");

              if (apiResponse.status == 200) {
                _this19.appService.removeUserInfoFromLocalStorage();

                _this19.appService.removeAuthTokenFromLocalStorage();

                _this19.socketService.disconnectedSocket();

                console.log("disconnected socket from socket service is called");

                _this19.router.navigate(["/"]);
              } else {
                console.log(apiResponse.message);
              }
            }, function (err) {
              console.log(err.error);
              console.log("some error occured");
            });

            return false;
          }
        }; //end checkStatus


        this.verifyUserConfirmation = function () {
          _this19.socketService.verifyUser().subscribe(function (data) {
            // console.log("verifyUserConfirmation", data);
            _this19.socketService.setUser(_this19.authToken);
          });
        };

        this.getOnlineUserList = function () {
          _this19.socketService.onlineUsersList().subscribe(function (userList) {// console.log("getOnlineUserList", userList);
          });
        };

        this.getMessageFromAdmin = function () {
          _this19.socketService.meetingNotification(_this19.userId).subscribe(function (data) {
            // console.log(data.userId);
            if (data.userId === _this19.userId) {
              // console.log(
              //   "data.userId",
              //   data.userId,
              //   "this.userId",
              //   this.userId,
              //   data.message
              // );
              if (data.isReminder) {
                _this19.modalData2 = data.message;
                _this19.modalReference = _this19.modal.open(_this19.reminderModal, {
                  centered: true
                });

                _this19.playAudio();
              } else _this19.toastr.info(data.message, null, {
                disableTimeOut: true,
                tapToDismiss: true,
                closeButton: true
              });
            }
          }); //end of subscribe

        }; //end get message from a user


        this.logout = function (name) {
          _this19.toastr.success("".concat(name));
        };
      }

      _createClass(UserdashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localStorage = this.appService.getUserInfoFromLocalStorage();
          this.authToken = this.appService.getAuthToken();
          this.checkStatus();
          this.getAllMeetings();
          this.verifyUserConfirmation();
          this.getOnlineUserList();
          this.getMessageFromAdmin();
        }
      }, {
        key: "callTheReminderAgain",
        value: function callTheReminderAgain() {
          var _this20 = this;

          this.modalReference.close(); // console.log("showAgain called");

          setTimeout(function () {
            _this20.modalReference = _this20.modal.open(_this20.reminderModal, {
              centered: true
            });

            _this20.playAudio();
          }, 5000);
        }
      }, {
        key: "playAudio",
        value: function playAudio() {
          var audio = new Audio();
          audio.src = "../../assets/alert-sound.mp3";
          audio.load();
          audio.play();
        }
      }, {
        key: "dayClicked",
        value: function dayClicked(_ref4) {
          var date = _ref4.date,
              events = _ref4.events;

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
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          this.modalData1 = event;
          this.modal.open(this.modalContent, {
            centered: true
          });
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }, {
        key: "getAllMeetings",
        value: function getAllMeetings() {
          var _this21 = this;

          this.appService.getAllMeetings(this.userId).subscribe(function (apiResponse) {
            apiResponse.data.map(function (meeting) {
              _this21.events.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["parseISO"])(meeting.startDate), 0), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["parseISO"])(meeting.endDate), 0),
                title: meeting.purpose,
                color: meeting.color,
                location: meeting.location,
                meetingId: meeting.meetingId,
                createdBy: meeting.createdBy,
                userId: meeting.userId
              });

              _this21.refresh.next();
            });
          });
        }
      }]);

      return UserdashboardComponent;
    }();

    UserdashboardComponent.ctorParameters = function () {
      return [{
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
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", {
      "static": true
    })], UserdashboardComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmTemplate", {
      "static": true
    })], UserdashboardComponent.prototype, "confirmTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("reminderModal", {
      "static": true
    })], UserdashboardComponent.prototype, "reminderModal", void 0);
    UserdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userdashboard",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userdashboard/userdashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdashboard.component.css */
      "./src/app/user/userdashboard/userdashboard.component.css"))["default"]]
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


    var environment = {
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\mean stack development\Nodejs\meetup\src\main.ts */
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