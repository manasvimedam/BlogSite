(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




class AboutComponent {
    constructor(titleService, sharedService) {
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.title = 'About';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title + ' - ' + this.sharedService.blogTitle);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 0, consts: [[1, "section"], [1, "description"], [1, "container"], ["src", "assets/Images/Background.jpg", "alt", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse similique nisi doloribus reprehenderit tempore ex, praesentium accusamus rerum quaerat odio distinctio voluptate commodi adipisci minima voluptas assumenda earum cum fugit pariatur, voluptatem minus architecto labore? Aperiam sint omnis nesciunt accusantium optio laboriosam blanditiis delectus ipsam temporibus quibusdam, officia quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia molestias deserunt architecto quod, itaque debitis sint, expedita nostrum aperiam doloremque provident maiores cumque? Non, adipisci totam. Facere, ea error magnam neque, quos at est iste assumenda veritatis consequuntur, ipsum autem quod soluta alias modi hic eveniet impedit dolor nulla a tempora itaque quo architecto. Excepturi amet, illum totam nesciunt soluta minima ipsum sint modi illo a alias unde. Id suscipit porro alias nam numquam provident, labore in sequi ipsum praesentium autem possimus voluptates commodi earum expedita inventore ipsa nulla animi amet dignissimos ut corrupti et. Tenetur eligendi numquam voluptatibus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 450vw;\r\n  height: 70vh;\r\n  overflow: hidden;\r\n  margin: 25px;\r\n  border-radius: 50%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ1MHZ3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'Articles', component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"] },
    { path: 'About', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: ':key', component: _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'BlogSite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
        _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                    _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function ArticleListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Read More...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.date.toDateString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", article_r1.key, "");
} }
class ArticleListComponent {
    constructor(articleService, titleService, sharedService) {
        this.articleService = articleService;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.articles = [];
    }
    ngOnInit() {
        this.titleService.setTitle(this.sharedService.blogTitle);
        this.getArticles();
    }
    getArticles() {
        this.articleService
            .getArticles()
            .subscribe((articles) => (this.articles = articles));
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 2, vars: 1, consts: [[1, "grid-display"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "post-image-container"], [1, "post-image", 3, "src"], [1, "post-info"], [1, "title", "post-info"], [1, "article-date"], [1, "article-description"], [1, "read-more", 3, "routerLink"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleListComponent_div_1_Template, 15, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".grid-display[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 70vw;\r\n  margin: 20px;\r\n  background-color: white;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\r\n  transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.post-image-container[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin: auto;\r\n}\r\n\r\n.post-image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.post-info[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  font-weight: 500;\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.article-date[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.article-description[_ngcontent-%COMP%] {\r\n  color: black;\r\n  margin-top: 15px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  font-size: 18px;\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #a1a1a1;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-style: italic;\r\n  padding-bottom: 15px;\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%]:hover {\r\n  color: #ed9b85;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogNzB2dztcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wb3N0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBvc3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucG9zdC1pbmZvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFydGljbGUtZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5yZWFkLW1vcmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ExYTFhMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5yZWFkLW1vcmU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWQ5Yjg1O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.css'],
            }]
    }], function () { return [{ type: _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/article.service.ts":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mockarticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockarticles */ "./src/app/mockarticles.ts");




class ArticleService {
    constructor() { }
    getArticles() {
        const articles = _mockarticles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles);
    }
    getArticle(key) {
        const articles = _mockarticles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"].filter((a) => a.key === key);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles[0]);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
class Article {
    constructor() {
        this.title = '';
        this.key = '';
        this.date = new Date();
        this.content = '';
        this.description = '';
        this.imageUrl = '';
    }
}


/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







class ArticleComponent {
    constructor(route, articleService, router, titleService, sharedService, meta) {
        this.route = route;
        this.articleService = articleService;
        this.router = router;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.meta = meta;
        this.article = new _article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const key = params.key;
            this.articleService.getArticle(key).subscribe((article) => {
                if (article === undefined) {
                    this.router.navigateByUrl('404');
                    return;
                }
                this.article = article;
                this.titleService.setTitle(this.article.title + ' - ' + this.sharedService.blogTitle);
                this.meta.addTags([
                    { name: 'description', content: this.article.description },
                    {
                        property: 'og:title',
                        content: this.article.title + ' - ' + this.sharedService.blogTitle,
                    },
                    { property: 'og:type', content: 'website' },
                    {
                        property: 'og:url',
                        content: this.sharedService.baseURL + this.article.key,
                    },
                    {
                        property: 'og:image',
                        content: this.article.imageUrl,
                    },
                    {
                        property: 'og:description',
                        content: this.article.description,
                    },
                    {
                        property: 'og:site_name',
                        content: this.sharedService.blogTitle,
                    },
                ]);
            });
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 8, vars: 4, consts: [[1, "article"], [1, "article-image"], [3, "src"], [1, "title"], [3, "innerHTML"], [1, "meta-info", "article-date"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.article.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.date.toDateString(), " ");
    } }, styles: [".article[_ngcontent-%COMP%] {\r\n  max-width: 80vw;\r\n  margin: 0 auto;\r\n  padding: 40px;\r\n  background-color: white;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: 0em;\r\n  padding-top: 40px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.5em;\r\n  font-size: 21px;\r\n}\r\n\r\n.article-date[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin: 0em;\r\n  padding-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZSB7XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWltYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMGVtO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1kYXRlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiAwZW07XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




class HomeComponent {
    constructor(titleService, sharedService) {
        this.titleService = titleService;
        this.sharedService = sharedService;
    }
    ngOnInit() {
        this.titleService.setTitle(this.sharedService.blogTitle);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "container"], ["src", "assets/Images/Background.jpg"], [1, "centered"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"Favorite quote from book\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  height: 67vh;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 85vw;\r\n  margin: auto;\r\n  display: flex;\r\n}\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background-color: #f5f5f5;\r\n  width: 30vw;\r\n  height: 30vh;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-family: \"Sedgwick Ave\", cursive;\r\n  letter-spacing: 0.1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogNjd2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZGd3aWNrIEF2ZVwiLCBjdXJzaXZlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mockarticles.ts":
/*!*********************************!*\
  !*** ./src/app/mockarticles.ts ***!
  \*********************************/
/*! exports provided: ARTICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES", function() { return ARTICLES; });
const ARTICLES = [
    {
        id: 1,
        title: 'My First Article',
        content: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fuga ex dolor perspiciatis qui, unde dicta similique non nostrum possimus numquam soluta officiis ratione maxime vitae eos repellat esse! Minima voluptates, reiciendis laudantium non veniam quo. Fugit ipsa atque esse quo velit excepturi! Nesciunt non illum totam sequi inventore molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis perferendis tenetur amet consequatur rerum, laborum quidem, quos a laudantium suscipit illum itaque. Deserunt optio omnis reiciendis architecto animi inventore, aut natus magnam eius fugiat facilis dolorum deleniti? Possimus aspernatur ipsam facilis asperiores vitae quia, soluta sit odio mollitia delectus vel. </p> <p>Architecto dicta a veritatis exercitationem excepturi ut asperiores deserunt! Commodi blanditiis ex ut impedit voluptates harum, non cum laborum iusto atque, incidunt ad consectetur, cumque nisi tempora labore. Animi, ducimus aut exercitationem culpa nostrum tempore. Qui quos error incidunt iure, dolor ipsam asperiores repellendus illo perferendis vitae, aperiam dolorem.</p>',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fuga ex dolor perspiciatis qui, unde dicta similique non nostrum possimus numquam soluta officiis ratione maxime vitae eos repellat esse! Minima voluptates, reiciendis laudantium non veniam quo. Fugit ipsa atque esse quo velit excepturi! Nesciunt',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png',
    },
    {
        id: 2,
        title: 'May Second Article',
        content: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Aspernatur fuga ex dolor perspiciatis qui, unde dicta similique non nostrum possimus numquam soluta officiis ratione maxime vitae eos repellat esse! Minima voluptates, reiciendis laudantium non veniam quo.Fugit ipsa atque esse quo velit excepturi! Nesciunt non illum totam sequi inventore molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis debitis perferendis tenetur amet consequatur rerum, laborum quidem, quos a laudantium suscipit illum itaque.Deserunt optio omnis reiciendis architecto animi inventore, aut natus magnam eius fugiat facilis dolorum deleniti? Possimus aspernatur ipsam facilis asperiores vitae quia, solutasit odio mollitia delectus vel. < /p> <p>Architecto dicta a veritatis exercitationem excepturi ut asperiores deserunt! Commodi blanditiis ex ut impedit voluptates harum, non cum laborum iusto atque, incidunt ad consectetur, cumque nisi tempora labore. Animi, ducimus aut exercitationem culpa nostrum tempore. Qui quos error incidunt iure, dolor ipsam asperiores repellendus illo perferendis vitae, aperiam dolorem.</p >',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fuga ex dolor perspiciatis qui, unde dicta similique non nostrum possimus numquam soluta officiis ratione maxime vitae eos repellat esse! Minima voluptates, reiciendis laudantium non veniam quo. Fugit ipsa atque esse quo velit excepturi! Nesciunt',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png',
    },
];


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 26, vars: 0, consts: [[1, "nav-bar"], ["routerLink", "", 1, "blog-text", "first"], ["routerLink", "/Articles", 1, "blog-text"], ["routerLink", "/About", 1, "blog-text"], [1, "socials"], [1, "contacts"], ["href", "#", "id", "instagram"], [1, "fab", "fa-instagram", "fa-2x", "padding"], ["href", "#", "id", "linked-in"], [1, "fab", "fa-linkedin-in", "fa-2x", "padding"], ["href", "#", "id", "e-mail", 1, "last"], [1, "fas", "fa-envelope-open-text", "fa-2x", "padding"], [1, "title-visual"], ["routerLink", "", 1, "title"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "NAME OF BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav-bar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  padding-right: 35px;\r\n}\r\n\r\n.padding[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n  padding-left: 150px;\r\n}\r\n\r\n.last[_ngcontent-%COMP%] {\r\n  padding-right: 150px;\r\n}\r\n\r\n.title-visual[_ngcontent-%COMP%] {\r\n  padding-top: 80px;\r\n  padding-bottom: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-family: \"Sedgwick Ave\", cursive;\r\n  color: #000000;\r\n  font-size: 70px;\r\n  text-align: center;\r\n}\r\n\r\n.blog-text[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-family: \"Didact Gothic\", sans-serif;\r\n  color: #a1a1a1;\r\n  font-weight: 650;\r\n  font-size: 18px;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-left: 0px;\r\n  margin: 0px;\r\n  display: flex;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #b5b5b5;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: #ed9b85;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #ed9b85;\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMzVweDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4ubGFzdCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi50aXRsZS12aXN1YWwge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZGd3aWNrIEF2ZVwiLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibG9nLXRleHQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNhMWExYTE7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250YWN0cyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWN0cyA+IGxpID4gYSB7XHJcbiAgY29sb3I6ICNiNWI1YjU7XHJcbn1cclxuXHJcbi5jb250YWN0cyA+IGxpID4gYTpob3ZlciB7XHJcbiAgY29sb3I6ICNlZDliODU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWQ5Yjg1O1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ29sZDsgKi9cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, consts: [["routerLink", "/Articles"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Whoops! The page you are looking for doesn't exist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedService {
    constructor() {
        this.blogTitle = 'NAME OF BLOG';
        this.baseURL = 'http://localhost:4200/';
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Manasvi Medam\ComputerScienceProjects\BlogSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map