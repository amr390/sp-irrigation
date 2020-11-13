(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-connection-connection-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-connection/connection.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-connection/connection.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabConnectionConnectionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Datos de la conexión\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col class=\"connection-col\">\n      <ion-thumbnail class=\"connection-image\">\n        <img src=\"/assets/shapes.svg\">\n      </ion-thumbnail>\n      <ion-text color=\"dark\">\n        <h2 class=\"connection-host\">Detalles de la parcela</h2>\n      </ion-text>\n\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Nombre de dominio o IP</ion-label>\n          <ion-input color=\"primary\" [(ngModel)]=\"plot.host\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Puerto</ion-label>\n          <ion-input color=\"primary\" [(ngModel)]=\"plot.port\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"connection-col\">\n      <ion-list *ngFor=\"let channel of plot.channels\">\n        <ion-item><ion-icon slot=\"start\" name=\"leaf-outline\"></ion-icon> <ion-label position=\"stacked\">{{channel.name}}</ion-label></ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-footer>\n    <ion-toolbar class=\"connection-col\">\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"validateConnection()\">\n          <ion-icon slot=\"icon-only\" name=\"flash-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab-connection/connection-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/tab-connection/connection-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ConnectionPageRoutingModule */

    /***/
    function srcAppTabConnectionConnectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPageRoutingModule", function () {
        return ConnectionPageRoutingModule;
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


      var _connection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./connection.page */
      "./src/app/tab-connection/connection.page.ts");

      var routes = [{
        path: '',
        component: _connection_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionPage"]
      }];

      var ConnectionPageRoutingModule = function ConnectionPageRoutingModule() {
        _classCallCheck(this, ConnectionPageRoutingModule);
      };

      ConnectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConnectionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab-connection/connection.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/tab-connection/connection.module.ts ***!
      \*****************************************************/

    /*! exports provided: ConnectionPageModule */

    /***/
    function srcAppTabConnectionConnectionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function () {
        return ConnectionPageModule;
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


      var _connection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./connection.page */
      "./src/app/tab-connection/connection.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _connection_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./connection-routing.module */
      "./src/app/tab-connection/connection-routing.module.ts");

      var ConnectionPageModule = function ConnectionPageModule() {
        _classCallCheck(this, ConnectionPageModule);
      };

      ConnectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _connection_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConnectionPageRoutingModule"]],
        declarations: [_connection_page__WEBPACK_IMPORTED_MODULE_5__["ConnectionPage"]]
      })], ConnectionPageModule);
      /***/
    },

    /***/
    "./src/app/tab-connection/connection.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tab-connection/connection.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabConnectionConnectionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: rgb(0, 100, 42) !important;\n  --color: white;\n  text-align: center;\n}\n\nion-content {\n  --background: #fff url('sprinkler.svg') no-repeat center center / cover !important;\n  --padding-top: 16px;\n}\n\nion-content .connection-col {\n  --ion-grid-column-padding: 0px;\n}\n\nion-content .connection-image {\n  --size: 100px;\n  margin: auto;\n}\n\nion-content .connection-host {\n  background-color: rgba(61, 83, 66, 0.8);\n  color: #c7e4c2;\n  font-style: lato bold;\n  text-align: center;\n}\n\nion-icon[name=heart] {\n  fill: grey;\n}\n\nion-icon[name=heart].fav {\n  fill: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLWNvbm5lY3Rpb24vY29ubmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0Usa0ZBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBUUU7RUFDRSxVQUFBO0FBTEo7O0FBUUU7RUFDRSxTQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC90YWItY29ubmVjdGlvbi9jb25uZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAxMDAsIDQyKSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL3Nwcmlua2xlci5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5jb25uZWN0aW9uLWNvbCB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLmNvbm5lY3Rpb24taW1hZ2Uge1xuICAgIC0tc2l6ZTogMTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmNvbm5lY3Rpb24taG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgODMsIDY2LCAwLjgpO1xuICAgIGNvbG9yOiByZ2IoMTk5LCAyMjgsIDE5NCk7XG4gICAgZm9udC1zdHlsZTogbGF0byBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cbmlvbi1pY29uIHtcbiAgLy8gZGVmYXVsdDogbm90LWZhdlxuICAmW25hbWU9XCJoZWFydFwiXSB7XG4gICAgZmlsbDogZ3JleTtcbiAgfVxuXG4gICZbbmFtZT1cImhlYXJ0XCJdLmZhdiB7XG4gICAgZmlsbDogcmVkO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab-connection/connection.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab-connection/connection.page.ts ***!
      \***************************************************/

    /*! exports provided: ConnectionPage */

    /***/
    function srcAppTabConnectionConnectionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPage", function () {
        return ConnectionPage;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/connection.service */
      "./src/app/services/connection.service.ts");

      var ConnectionPage = /*#__PURE__*/function () {
        function ConnectionPage(connectionService, alertController) {
          _classCallCheck(this, ConnectionPage);

          this.connectionService = connectionService;
          this.alertController = alertController;
          this.savedConnections = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.plot = this.connectionService.getPlot();
        }

        _createClass(ConnectionPage, [{
          key: "validateConnection",
          value: function validateConnection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.connectionService.checkStatus(this.plot).subscribe(function (success) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  alert = this.alertController.create({
                                    cssClass: success ? 'alert-success' : 'alert-error',
                                    header: success ? 'Correcto!!' : 'Fallo!!',
                                    subHeader: success ? 'Prueba de conexión correcta' : 'La prueba de conexión falló',
                                    message: success ? 'Conexión establecida con éxito' : 'Fallo al establecer una conexión',
                                    buttons: ['OK']
                                  });
                                  _context.next = 3;
                                  return alert;

                                case 3:
                                  _context.sent.present();

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ConnectionPage;
      }();

      ConnectionPage.ctorParameters = function () {
        return [{
          type: _services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ConnectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./connection.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab-connection/connection.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./connection.page.scss */
        "./src/app/tab-connection/connection.page.scss"))["default"]]
      })], ConnectionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-connection-connection-module-es5.js.map