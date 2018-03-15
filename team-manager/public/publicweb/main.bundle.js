webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_player_list_player_list_component__ = __webpack_require__("./src/app/team/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_status_game_status_game_component__ = __webpack_require__("./src/app/team/status-game/status-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_player_new_player_new_component__ = __webpack_require__("./src/app/team/player-new/player-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/team/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */],
        pathMatch: 'full'
    },
    {
        path: 'players/list',
        component: __WEBPACK_IMPORTED_MODULE_2__team_player_list_player_list_component__["a" /* PlayerListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'status/game/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__team_status_game_status_game_component__["a" /* StatusGameComponent */],
        pathMatch: 'full'
    },
    {
        path: 'players/addplayer',
        component: __WEBPACK_IMPORTED_MODULE_4__team_player_new_player_new_component__["a" /* PlayerNewComponent */],
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__team_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_team_service__ = __webpack_require__("./src/app/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/team/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_player_delete_player_delete_component__ = __webpack_require__("./src/app/team/player-delete/player-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_player_list_player_list_component__ = __webpack_require__("./src/app/team/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_player_new_player_new_component__ = __webpack_require__("./src/app/team/player-new/player-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__team_status_game_status_game_component__ = __webpack_require__("./src/app/team/status-game/status-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_8__team_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__team_player_delete_player_delete_component__["a" /* PlayerDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__team_player_list_player_list_component__["a" /* PlayerListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__team_player_new_player_new_component__["a" /* PlayerNewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__team_status_game_status_game_component__["a" /* StatusGameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__team_team_service__["a" /* TeamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/team/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/team/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/team/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/team/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/team/player-delete/player-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team/player-delete/player-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player-delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/team/player-delete/player-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerDeleteComponent = /** @class */ (function () {
    function PlayerDeleteComponent(_teamService, _router, _route) {
        this._teamService = _teamService;
        this._router = _router;
        this._route = _route;
    }
    PlayerDeleteComponent.prototype.ngOnInit = function () {
        this.getPlayer();
    };
    PlayerDeleteComponent.prototype.getPlayer = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._teamService.getPlayerById(params.get('id'), function (res) {
                _this.player = res;
            });
        });
    };
    PlayerDeleteComponent.prototype.deletePlayer = function (id) {
        this.player = this.player['_id'];
        this._teamService.destroyPlayer(this.player, function (res) {
            // this.recipie = res;
            // this.getRecipie();
        });
    };
    PlayerDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-delete',
            template: __webpack_require__("./src/app/team/player-delete/player-delete.component.html"),
            styles: [__webpack_require__("./src/app/team/player-delete/player-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PlayerDeleteComponent);
    return PlayerDeleteComponent;
}());



/***/ }),

/***/ "./src/app/team/player-list/player-list.component.css":
/***/ (function(module, exports) {

module.exports = ".right {\n    text-align: right;\n}\n.errors{\n    width: inherit;\n    height: 40px;\n    display: block;\n    margin: 0px auto;\n    color: red;\n}\nh3 {text-align: center;\n}\nlabel, button {font-weight: bold;\n    margin-left: 20px;\n}\n.box0 {width: 700px;\n    height: 180px;\n    margin: 10px;\n    padding: 10px;\n    background-color: #dfe3e4;\n    border: 2px solid grey;\n}"

/***/ }),

/***/ "./src/app/team/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"right\"><a [routerLink]=\"['/players/addplayer']\">Manage Players</a></p>\n<p class=\"right\"><a [routerLink]=\"['/status/game/1']\">Manage Player Status</a></p>\n<hr>\n  <div class='box'>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Team Name</th>\n        <th scope=\"col\">Preferred Position</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let player of team\">\n            <td>{{ player['name'] }}</td>\n            <td>{{ player['position'] }}</td>\n            <td><button (click)=\"deletePlayer(player['_id'])\" class=\"btn btn-primary btn-sm\">DELETE</button></td>   \n      </tr>\n      <br>\n\n    </tbody>\n  </table> \n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/team/player-list/player-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(_teamService, _router) {
        this._teamService = _teamService;
        this._router = _router;
        this.team = [];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent.prototype.playerList = function () {
        var _this = this;
        this._teamService.playersList(function (res) {
            _this.team = res;
        });
    };
    PlayerListComponent.prototype.deletePlayer = function (id) {
        var _this = this;
        this._teamService.destroyPlayer((id), function (res) {
            _this.player = res;
        });
        // this.playersList()
    };
    ;
    PlayerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-list',
            template: __webpack_require__("./src/app/team/player-list/player-list.component.html"),
            styles: [__webpack_require__("./src/app/team/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/team/player-new/player-new.component.css":
/***/ (function(module, exports) {

module.exports = ".errors{\n    width: inherit;\n    height: 40px;\n    display: block;\n    margin: 0px auto;\n    color: red;\n}\nh3 {text-align: center;\n}\nlabel, button {font-weight: bold;\n    margin-left: 20px;\n}\n.box0 {width: 700px;\n    height: 180px;\n    margin: 10px;\n    padding: 10px;\n    background-color: #dfe3e4;\n    border: 2px solid grey;\n}"

/***/ }),

/***/ "./src/app/team/player-new/player-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\" #formData=\"ngForm\">\n  <div class=\"form-group row box0\"> \n    <label class=\"col-form-label\">Name:</label>\n    <div class=\"col-sm-12\">\n        <input \n        type=\"text\" \n        class=\"form-control\" \n        name=\"player.name\" \n        required\n        [(ngModel)]=\"name\"\n        >\n    </div>\n    <label class=\"col-form-label\">Preferred Position:</label>\n    <div class=\"col-sm-12\">\n          <input \n          type=\"text\" \n          class=\"form-control\" \n          name=\"player.position\" \n          [(ngModel)]=\"position\"\n          >\n    </div>\n      <button class=\"btn btn-primary btn-sm\" type=\"submit\">Add</button>\n  </div>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/team/player-new/player-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__("./src/app/team/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerNewComponent = /** @class */ (function () {
    function PlayerNewComponent(_teamService, _router, _route) {
        this._teamService = _teamService;
        this._router = _router;
        this._route = _route;
    }
    PlayerNewComponent.prototype.ngOnInit = function () {
    };
    PlayerNewComponent.prototype.newPlayer = function () {
        var _this = this;
        this._teamService.newPlayer(this.player, function (res) {
            _this._router.navigate(['/players/addplayer', res]);
        });
    };
    ;
    PlayerNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-new',
            template: __webpack_require__("./src/app/team/player-new/player-new.component.html"),
            styles: [__webpack_require__("./src/app/team/player-new/player-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PlayerNewComponent);
    return PlayerNewComponent;
}());



/***/ }),

/***/ "./src/app/team/status-game/status-game.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team/status-game/status-game.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  status-game works!\n</p>\n"

/***/ }),

/***/ "./src/app/team/status-game/status-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusGameComponent = /** @class */ (function () {
    function StatusGameComponent() {
    }
    StatusGameComponent.prototype.ngOnInit = function () {
    };
    StatusGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-status-game',
            template: __webpack_require__("./src/app/team/status-game/status-game.component.html"),
            styles: [__webpack_require__("./src/app/team/status-game/status-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusGameComponent);
    return StatusGameComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\" #formData=\"ngForm\">\n  <div class=\"form-group row box0\"> \n      <label class=\"col-form-label\">Name:</label>\n      <div class=\"col-sm-12\">\n          <input \n          type=\"text\" \n          class=\"form-control\" \n          name=\"user\" \n          required\n          [(ngModel)]=\"user\"\n          >\n      </div>\n      <button class=\"btn btn-primary btn-sm\"  type=\"submit\">Create</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent(_teamService, _router) {
        this._teamService = _teamService;
        this._router = _router;
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.prototype.onSubmit = function () {
        var _this = this;
        this._teamService.login(this.user, function (res) {
            _this._router.navigate(['/players/list']);
        });
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("./src/app/team/team.component.html"),
            styles: [__webpack_require__("./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/team/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamService = /** @class */ (function () {
    function TeamService(_http) {
        this._http = _http;
    }
    TeamService.prototype.login = function (user, callback) {
        this.user = user;
        console.log('LOGIN success: ', this.user);
        callback(this.user);
    };
    TeamService.prototype.playersList = function (players) {
        this._http.get('/players/list').subscribe(function (res) {
            console.log('SUCCESS in getting tasks: ', res.json());
            players(res.json());
        }, function (err) {
            console.log('ERROR in getting tasks: ', err);
        });
    };
    TeamService.prototype.destroyPlayer = function (id, res) {
        this._http.delete('/players/delete/' + id).subscribe(function (res) {
            console.log('SUCCESS in deleting player: ', res.json());
            res.json();
        }, function (err) {
            console.log('ERROR in deleting player: ', err);
        });
    };
    TeamService.prototype.getPlayerById = function (id, callback) {
        this._http.get('/player/show/' + id).subscribe(function (res) {
            console.log('SUCCESS getting PlayerByID: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR getting PlayerByID: ', err);
        });
    };
    TeamService.prototype.newPlayer = function (player, callback) {
        this._http.post('/players/addplayer', { player: player }).subscribe(function (res) {
            console.log('SUCCESS creatting task: ', res.json());
            callback(res.json());
        }, function (err) {
            console.log('ERROR creatting task: ', err);
        });
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map