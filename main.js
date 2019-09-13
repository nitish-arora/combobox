(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/config/route.config */ "./src/app/shared/config/route.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: _shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["APP_ROUTES"].REGISTRATION
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOninit = function () {
        debugger;
        window.addEventListener("message", this.messageHandler, false);
    };
    AppComponent.prototype.messageHandler = function (event) {
        debugger;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _registration_registration_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.module */ "./src/app/registration/registration.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _registration_registration_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CoreModule = /** @class */ (function () {
    function CoreModule(parent) {
        if (parent) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            exports: [],
            declarations: [],
            providers: [],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../registration/shared/config/route.config */ "./src/app/registration/shared/config/route.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (route.url[0] && route.url[0].path === _registration_shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_ROUTES"].SUCCESS && !localStorage.getItem("email")) {
            this.router.navigate(['/', _registration_shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_ROUTES"].REGISTRATION, _registration_shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_ROUTES"].HOME]);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/registration/home/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/registration/home/home.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-form-container {\r\n    width: 100%;\r\n}\r\n\r\n.registration-form-container .form-header {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: grey;\r\n    text-align: center;\r\n}\r\n\r\n.registration-form-container .registration-form {\r\n    width: 60%;\r\n    margin: auto;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 5px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.registration-form .form-text-field {\r\n    padding: 3px 15px;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.registration-form .form-combo-field {\r\n    padding: 3px 15px;\r\n}\r\n\r\n.registration-form .buttons {\r\n    padding: 15px;\r\n}\r\n\r\n.form-combo-field .selected-fields {\r\n    font-size: 12px;\r\n    word-wrap: break-word;\r\n    padding-top: 5px;\r\n}\r\n\r\n.form-combo-field .game-label {\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.registration-form input {\r\n    border: none;    \r\n    width: 100%;\r\n    height: 30px;\r\n    padding-left: 10px;\r\n    border-bottom: 1px solid lightgrey;\r\n}\r\n\r\n.registration-form .form-field-error {\r\n    font-size: 10px;\r\n    color: red;\r\n    padding-left: 15px;\r\n    height: 15px;\r\n}"

/***/ }),

/***/ "./src/app/registration/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/registration/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration-form-container\">\r\n    <div class=\"form-header\">\r\n        Registration\r\n    </div>\r\n    <div class=\"registration-form\">\r\n        <form #registrationForm=\"ngForm\" (ngSubmit)=\"register()\">\r\n        <div class=\"form-text-field\">\r\n            <input placeholder=\"Name*\" [(ngModel)]=\"registerModel.name\" #name=\"ngModel\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"form-field-error\" *ngIf=\"(name.dirty || name.touched) && name.errors?.required\">Please enter name</div>\r\n        <div class=\"form-text-field\">\r\n            <input placeholder=\"Email*\" #userEmail=\"ngModel\" [(ngModel)]=\"registerModel.email\" name=\"email\" required email>\r\n        </div>\r\n        <div class=\"form-field-error\" *ngIf=\"(userEmail.dirty || userEmail.touched) && userEmail.errors?.email\">Please enter valid email</div>\r\n        <div class=\"form-field-error\" *ngIf=\"(userEmail.dirty || userEmail.touched) && userEmail.errors?.required\">Please enter email</div>\r\n        <div class=\"form-combo-field\">\r\n            <div class=\"game-label\">Pick a game below</div>\r\n            <app-combo-box [selectableFields]=\"selectableFields\" [placeholder]=\"placeholder\" (fieldSelection)=\"gameSelected($event)\" [scrollHeight]=\"scrollHeight\"></app-combo-box>\r\n            <div class=\"selected-fields\">\r\n                The selected games are: {{registerModel.selectedGames}}\r\n            </div>\r\n        </div>\r\n        <div class=\"form-field-error\" *ngIf=\"isGameDropDownTouched && (selectedGamesCount === 0)\">Please select atleast one game</div>\r\n        <div class=\"buttons\">\r\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"registrationForm.invalid || (selectedGamesCount === 0)\">Submit</button>\r\n        </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/registration/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationHomeComponent", function() { return RegistrationHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_register_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/models/register-user.class */ "./src/app/registration/shared/models/register-user.class.ts");
/* harmony import */ var _shared_services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/services/registration.service */ "./src/app/registration/shared/services/registration.service.ts");
/* harmony import */ var _shared_config_route_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/config/route.config */ "./src/app/registration/shared/config/route.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationHomeComponent = /** @class */ (function () {
    function RegistrationHomeComponent(registrationService, router) {
        this.registrationService = registrationService;
        this.router = router;
        this.registerModel = new _shared_models_register_user_class__WEBPACK_IMPORTED_MODULE_2__["RegisterUser"]();
        this.placeholder = "Games";
        this.scrollHeight = "160px";
        this.selectedGamesCount = 0;
        this.isGameDropDownTouched = false;
    }
    /**
     * calling api to get list of games for drop down and clear local storage
     */
    RegistrationHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.clear();
        this.registrationService.getSelectableFields().subscribe(function (res) {
            _this.selectableFields = res['games'];
        });
    };
    /**
     * if valid email is entered navigate to success page
     */
    RegistrationHomeComponent.prototype.register = function () {
        if (this.registrationForm.valid) {
            this.router.navigate(["/" + _shared_config_route_config__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_ROUTES"].REGISTRATION, _shared_config_route_config__WEBPACK_IMPORTED_MODULE_4__["REGISTRATION_ROUTES"].SUCCESS]);
            localStorage.setItem("email", this.registerModel.email);
        }
    };
    /**
     * output function emitted for combobox selection
     * @param games array of selected games
     */
    RegistrationHomeComponent.prototype.gameSelected = function (games) {
        this.isGameDropDownTouched = true;
        this.selectedGamesCount = games.length;
        this.registerModel.selectedGames = games.join(',');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registrationForm'),
        __metadata("design:type", Object)
    ], RegistrationHomeComponent.prototype, "registrationForm", void 0);
    RegistrationHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-register',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/registration/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/registration/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationHomeComponent);
    return RegistrationHomeComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _shared_config_route_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/config/route.config */ "./src/app/registration/shared/config/route.config.ts");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/registration/home/home.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success/success.component */ "./src/app/registration/success/success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: _shared_config_route_config__WEBPACK_IMPORTED_MODULE_3__["REGISTRATION_ROUTES"].REGISTRATION,
        component: _registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        children: [
            {
                path: _shared_config_route_config__WEBPACK_IMPORTED_MODULE_3__["REGISTRATION_ROUTES"].HOME,
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationHomeComponent"]
            },
            {
                path: _shared_config_route_config__WEBPACK_IMPORTED_MODULE_3__["REGISTRATION_ROUTES"].SUCCESS,
                component: _success_success_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationSuccessComponent"],
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
            },
            {
                path: '',
                redirectTo: _shared_config_route_config__WEBPACK_IMPORTED_MODULE_3__["REGISTRATION_ROUTES"].HOME,
                pathMatch: 'full'
            },
        ]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/registration/home/home.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./success/success.component */ "./src/app/registration/success/success.component.ts");
/* harmony import */ var _shared_services_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/registration.service */ "./src/app/registration/shared/services/registration.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_7__["RegistrationRoutingModule"]
            ],
            declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationHomeComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationSuccessComponent"]],
            providers: [_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"]]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ }),

/***/ "./src/app/registration/shared/config/route.config.ts":
/*!************************************************************!*\
  !*** ./src/app/registration/shared/config/route.config.ts ***!
  \************************************************************/
/*! exports provided: REGISTRATION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_ROUTES", function() { return REGISTRATION_ROUTES; });
var REGISTRATION_ROUTES = {
    HOME: 'home',
    SUCCESS: 'success',
    REGISTRATION: 'registration'
};


/***/ }),

/***/ "./src/app/registration/shared/models/register-user.class.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registration/shared/models/register-user.class.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
var RegisterUser = /** @class */ (function () {
    function RegisterUser(name, email, selectedGames) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (selectedGames === void 0) { selectedGames = ''; }
        this.name = name;
        this.email = email;
        this.selectedGames = selectedGames;
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./src/app/registration/shared/services/registration.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/registration/shared/services/registration.service.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.getSelectableFields = function () {
        return this.http.get('assets/games.json');
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/registration/success/success.component.css":
/*!************************************************************!*\
  !*** ./src/app/registration/success/success.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-container {\r\n    margin: auto;\r\n    width: 60%;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.success-container div.thanks-quote {\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n\r\n.success-container .registration-btn {\r\n    margin: 40px 10px;\r\n    text-align: center;\r\n}\r\n\r\n.registration-btn .register-link {\r\n    color: blue;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/registration/success/success.component.html":
/*!*************************************************************!*\
  !*** ./src/app/registration/success/success.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"success-container\">\r\n    <div class=\"thanks-quote\">Thanks for registering with us. Further details have been sent to {{email}}</div>\r\n    <div class=\"registration-btn\">\r\n        Go back to <a class=\"register-link\" (click)=\"goToRegistration()\">Registration</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/registration/success/success.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/registration/success/success.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccessComponent", function() { return RegistrationSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/config/route.config */ "./src/app/registration/shared/config/route.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationSuccessComponent = /** @class */ (function () {
    function RegistrationSuccessComponent(router) {
        this.router = router;
    }
    /**
     * get email from local storage in order to show it on success page
     */
    RegistrationSuccessComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem("email");
    };
    /**
     * navigate to home and clear localstorage on going back to registration
     */
    RegistrationSuccessComponent.prototype.goToRegistration = function () {
        this.router.navigate(["/" + _shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_ROUTES"].REGISTRATION, _shared_config_route_config__WEBPACK_IMPORTED_MODULE_2__["REGISTRATION_ROUTES"].HOME]).then(function () {
            localStorage.clear();
        });
    };
    RegistrationSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/registration/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/registration/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationSuccessComponent);
    return RegistrationSuccessComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/combobox/combo-box.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/combobox/combo-box.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combo-box-container {\r\n    position: relative;\r\n}\r\n\r\n.combo-box-container .popup {\r\n    width: 212px;\r\n    border: 1px solid #E5E5E5;\r\n    border-radius: 2px;\r\n    background-color: #FFFFFF;\r\n    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.25);\r\n    position: absolute;\r\n    z-index: 1;\r\n    color: #3F3F3F;\r\n    margin-top: 1px;\r\n    overflow: none;\r\n}\r\n\r\n.popup .options-container {\r\n    overflow-y: auto;\r\n}\r\n\r\n.input-container input, .search-box-container input {\r\n    border: none;    \r\n    width: 100%;\r\n    height: 30px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.input-container input {\r\n    border-bottom: 1px solid lightgrey;    \r\n}\r\n\r\n.search-box-container {\r\n    border-bottom: 1px solid lightgrey;\r\n}\r\n\r\n.search-box-container input {\r\n    padding-left: 10px;\r\n}\r\n\r\n.popup .search-box-container {\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.popup > div.options-container {\r\n    padding: 0 10px;\r\n}\r\n\r\n.options-container .options {\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/combobox/combo-box.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/combobox/combo-box.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"combo-box-container\" (outsideClick)=\"outsideClick()\">\r\n    <div class=\"input-container\">\r\n        <input type=\"text\" placeholder=\"{{lengthPlaceholder ? lengthPlaceholder : placeholder}}\" (click)=\"togglePopup()\" readonly>            \r\n    </div>\r\n    <div class=\"popup\" *ngIf=\"isOptionsVisible\">\r\n        <div class=\"search-box-container\">\r\n            <input type=\"text\" placeholder=\"Search for a {{placeholder | lowercase}}...\" (keyup)=\"searchGame($event.target.value)\">\r\n        </div>\r\n        <div class=\"options-container\" [style.maxHeight]=\"scrollHeight\">\r\n            <div class=\"options\" *ngFor=\"let field of selectableFields\">\r\n                <input type=\"checkbox\" value=\"{{field.value}}\" [checked]=\"field.checked\" (change)=\"onOptionChange($event)\">{{field.label}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/combobox/combo-box.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/combobox/combo-box.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComboboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxComponent", function() { return ComboboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComboboxComponent = /** @class */ (function () {
    function ComboboxComponent() {
        //values in array of selected checked boxes
        this.fieldSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOptionsVisible = false;
        this.gameSelected = [];
    }
    /**
     * on selectableField change
     * put checked property with value false in each element
     * took temperory variable in order to maintain listing for search text
     * @param changes
     */
    ComboboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectableFields'].previousValue !== changes['selectableFields'].currentValue) {
            this.selectableFields.forEach(function (item) {
                item['checked'] = false;
            });
            this.tempSelectableFields = this.selectableFields;
        }
    };
    /**
     * toggle popup of dropdwon
     */
    ComboboxComponent.prototype.togglePopup = function () {
        this.isOptionsVisible = !this.isOptionsVisible;
    };
    /**
     * function to filter the options of dropdown based on search text
     * @param searchText text in search box
     */
    ComboboxComponent.prototype.searchGame = function (searchText) {
        this.selectableFields = this.tempSelectableFields;
        if (searchText) {
            searchText = searchText.toLowerCase();
            var filteredGames = this.selectableFields.filter(function (game) {
                return game.label.toLowerCase().indexOf(searchText) !== -1;
            });
            this.selectableFields = filteredGames;
        }
    };
    /**
     * on checkbox change
     * update list of game selected
     * update placeholder for input text
     */
    ComboboxComponent.prototype.onOptionChange = function (event) {
        if (event.target.checked) {
            this.gameSelected.push(event.target.value);
        }
        else {
            this.gameSelected = this.gameSelected.filter(function (game) {
                return game != event.target.value;
            });
        }
        var gameSelectionChanged = this.tempSelectableFields.find(function (item) { return item.value === event.target.value; });
        gameSelectionChanged['checked'] = event.target.checked;
        this.lengthPlaceholder = this.gameSelected.length > 0 ? this.gameSelected.length + " " + this.placeholder + " selected" : null;
        this.fieldSelection.emit(this.gameSelected);
    };
    /**
     * on outside click of dropdown hide dropdown and reset the dropdown list
     */
    ComboboxComponent.prototype.outsideClick = function () {
        this.isOptionsVisible = false;
        this.selectableFields = this.tempSelectableFields;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboboxComponent.prototype, "selectableFields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboboxComponent.prototype, "scrollHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ComboboxComponent.prototype, "fieldSelection", void 0);
    ComboboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-combo-box',
            template: __webpack_require__(/*! ./combo-box.component.html */ "./src/app/shared/components/combobox/combo-box.component.html"),
            styles: [__webpack_require__(/*! ./combo-box.component.css */ "./src/app/shared/components/combobox/combo-box.component.css")]
        })
    ], ComboboxComponent);
    return ComboboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/config/route.config.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/config/route.config.ts ***!
  \***********************************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
var APP_ROUTES = {
    REGISTRATION: 'registration'
};


/***/ }),

/***/ "./src/app/shared/directives/outside-click.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/outside-click.directive.ts ***!
  \**************************************************************/
/*! exports provided: OutsideClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideClickDirective", function() { return OutsideClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutsideClickDirective = /** @class */ (function () {
    function OutsideClickDirective(elementRef) {
        this.elementRef = elementRef;
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * on outside click of dropdown emit event to close dropdown
     * @param event
     */
    OutsideClickDirective.prototype.onDocumentClick = function (event) {
        var targetElement = event.target;
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.outsideClick.emit(event);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutsideClickDirective.prototype, "outsideClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], OutsideClickDirective.prototype, "onDocumentClick", null);
    OutsideClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[outsideClick]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OutsideClickDirective);
    return OutsideClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_combobox_combo_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/combobox/combo-box.component */ "./src/app/shared/components/combobox/combo-box.component.ts");
/* harmony import */ var _directives_outside_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/outside-click.directive */ "./src/app/shared/directives/outside-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var exportModules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: exportModules.slice(),
            exports: exportModules.concat([_components_combobox_combo_box_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxComponent"]]),
            declarations: [_components_combobox_combo_box_component__WEBPACK_IMPORTED_MODULE_3__["ComboboxComponent"], _directives_outside_click_directive__WEBPACK_IMPORTED_MODULE_4__["OutsideClickDirective"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-first\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map