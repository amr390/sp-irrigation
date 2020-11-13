(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-panel-panel-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-panel/panel.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-panel/panel.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabPanelPanelPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Panel de Control\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngFor=\"let channel of plot.channels\">\n    <!-- <ion-header collapse=\"condense\"> -->\n    <ion-header>\n      <ion-title color=\"light\" size=\"large\">{{channel.name}} </ion-title>\n    </ion-header>\n    <ion-list class=\"parcel-controls\">\n      <ion-item>\n        <ion-label>Activar riego</ion-label>\n        <ion-toggle [ngModel]=\"channel.irrigantion\" (click)=\"toggleIrrigation($event, channel)\" color=\"primary\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Activar abono</ion-label>\n        <ion-toggle [ngModel]=\"channel.fertilizer\" (click)=\"toggleFertilizer($event, channel)\" color=\"secondary\"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab-panel/panel-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab-panel/panel-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: PanelPageRoutingModule */

    /***/
    function srcAppTabPanelPanelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelPageRoutingModule", function () {
        return PanelPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _panel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./panel.page */
      "./src/app/tab-panel/panel.page.ts");

      var routes = [{
        path: '',
        component: _panel_page__WEBPACK_IMPORTED_MODULE_3__["PanelPage"]
      }];

      var PanelPageRoutingModule = function PanelPageRoutingModule() {
        _classCallCheck(this, PanelPageRoutingModule);
      };

      PanelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PanelPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab-panel/panel.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/tab-panel/panel.module.ts ***!
      \*******************************************/

    /*! exports provided: PanelPageModule */

    /***/
    function srcAppTabPanelPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelPageModule", function () {
        return PanelPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _panel_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./panel.page */
      "./src/app/tab-panel/panel.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _panel_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./panel-routing.module */
      "./src/app/tab-panel/panel-routing.module.ts");

      var PanelPageModule = function PanelPageModule() {
        _classCallCheck(this, PanelPageModule);
      };

      PanelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _panel_routing_module__WEBPACK_IMPORTED_MODULE_7__["PanelPageRoutingModule"]],
        declarations: [_panel_page__WEBPACK_IMPORTED_MODULE_5__["PanelPage"]]
      })], PanelPageModule);
      /***/
    },

    /***/
    "./src/app/tab-panel/panel.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/tab-panel/panel.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabPanelPanelPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(0, 100, 42) !important;\n  --color: white;\n  text-align: center;\n}\n\nion-content {\n  --background: #fff url('sprinkler.svg') no-repeat center center / cover !important;\n  --padding-top: 16px;\n}\n\nion-content .connection-col {\n  --ion-grid-column-padding: 0px;\n}\n\nion-content .connection-image {\n  --size: 100px;\n  margin: auto;\n}\n\nion-content .parcel-controls {\n  justify-content: center;\n  display: flex !important;\n  flex-direction: column;\n  align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLXBhbmVsL3BhbmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxrRkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC90YWItcGFuZWwvcGFuZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDEwMCwgNDIpICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi9hc3NldHMvc3ByaW5rbGVyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgLmNvbm5lY3Rpb24tY29sIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuY29ubmVjdGlvbi1pbWFnZSB7XG4gICAgLS1zaXplOiAxMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5wYXJjZWwtY29udHJvbHMge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbiAgfVxuXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab-panel/panel.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/tab-panel/panel.page.ts ***!
      \*****************************************/

    /*! exports provided: PanelPage */

    /***/
    function srcAppTabPanelPanelPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelPage", function () {
        return PanelPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/connection.service */
      "./src/app/services/connection.service.ts");

      var PanelPage = /*#__PURE__*/function () {
        function PanelPage(connectionService, alertController) {
          _classCallCheck(this, PanelPage);

          this.connectionService = connectionService;
          this.alertController = alertController;
          this.plot = connectionService.getPlot();
        }

        _createClass(PanelPage, [{
          key: "toggleIrrigation",
          value: function toggleIrrigation(e, channel) {
            var _this = this;

            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            this.connectionService.toggleIrrigation(this.plot, channel).subscribe(function (success) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var alert;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        channel.irrigation = success ? !channel.irrigation : channel.irrigation;

                        if (success) {
                          _context.next = 6;
                          break;
                        }

                        alert = this.alertController.create({
                          cssClass: 'alert-error',
                          header: 'Fallo!!',
                          subHeader: 'Falló activar el riego',
                          message: 'Falló activar el riego',
                          buttons: ['OK']
                        });
                        _context.next = 5;
                        return alert;

                      case 5:
                        _context.sent.present();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "toggleFertilizer",
          value: function toggleFertilizer(e, channel) {
            var _this2 = this;

            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            this.connectionService.toggleFertilizer(this.plot, channel).subscribe(function (success) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var alert;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        channel.fertilizer = success ? !channel.fertilizer : channel.fertilizer;

                        if (success) {
                          _context2.next = 6;
                          break;
                        }

                        alert = this.alertController.create({
                          cssClass: 'alert-error',
                          header: 'Fallo!!',
                          subHeader: 'Falló activar el abono',
                          message: 'Falló activar el abono',
                          buttons: ['OK']
                        });
                        _context2.next = 5;
                        return alert;

                      case 5:
                        _context2.sent.present();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }]);

        return PanelPage;
      }();

      PanelPage.ctorParameters = function () {
        return [{
          type: _services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      PanelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./panel.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-panel/panel.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./panel.page.scss */
        "./src/app/tab-panel/panel.page.scss"))["default"]]
      })], PanelPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-panel-panel-module-es5.js.map