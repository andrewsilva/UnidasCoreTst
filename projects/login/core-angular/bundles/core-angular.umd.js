(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/forms'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('core-angular', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/forms', '@angular/router'], factory) :
    (global = global || self, factory(global['core-angular'] = {}, global.ng.core, global.ng.common, global.ng.common.http, global.ng.forms, global.ng.router));
}(this, (function (exports, i0, i1, http, i2, i4) { 'use strict';

    (function (BoxedContentSizesEnum) {
        BoxedContentSizesEnum["SMALL"] = "small";
        BoxedContentSizesEnum["MEDIUM"] = "medium";
        BoxedContentSizesEnum["LARGE"] = "large";
    })(exports.BoxedContentSizesEnum || (exports.BoxedContentSizesEnum = {}));

    (function (BoxedContentShadowSizesEnum) {
        BoxedContentShadowSizesEnum["SMALL"] = "small";
        BoxedContentShadowSizesEnum["MEDIUM"] = "medium";
        BoxedContentShadowSizesEnum["LARGE"] = "large";
    })(exports.BoxedContentShadowSizesEnum || (exports.BoxedContentShadowSizesEnum = {}));

    var _c0 = function (a1, a2, a3, a4, a5, a6) { return { "und-boxed-content": true, "und-boxed-content--is-small": a1, "und-boxed-content--is-medium": a2, "und-boxed-content--is-large": a3, "und-boxed-content--is-shaded": a4, "und-boxed-content--has-small-shadow": a5, "und-boxed-content--has-no-padding": a6 }; };
    var _c1 = ["*"];
    var BoxedContentComponent = /** @class */ (function () {
        function BoxedContentComponent() {
            this.size = exports.BoxedContentSizesEnum.MEDIUM;
            this.shadowSize = exports.BoxedContentShadowSizesEnum.MEDIUM;
        }
        BoxedContentComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(BoxedContentComponent.prototype, "boxAvailableSizes", {
            get: function () {
                return exports.BoxedContentSizesEnum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoxedContentComponent.prototype, "boxAvailableShadowSizes", {
            get: function () {
                return exports.BoxedContentShadowSizesEnum;
            },
            enumerable: false,
            configurable: true
        });
        return BoxedContentComponent;
    }());
    BoxedContentComponent.ɵfac = function BoxedContentComponent_Factory(t) { return new (t || BoxedContentComponent)(); };
    BoxedContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoxedContentComponent, selectors: [["und-boxed-content"]], inputs: { isShaded: ["shaded", "isShaded"], maxWidth: "maxWidth", size: "size", shadowSize: "shadowSize", noPadding: "noPadding" }, ngContentSelectors: _c1, decls: 2, vars: 10, consts: [[3, "ngClass"]], template: function BoxedContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("max-width", ctx.maxWidth, "px");
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(3, _c0, ctx.size === ctx.boxAvailableSizes.SMALL, ctx.size === ctx.boxAvailableSizes.MEDIUM, ctx.size === ctx.boxAvailableSizes.LARGE, ctx.isShaded, ctx.shadowSize === ctx.boxAvailableShadowSizes.SMALL, ctx.noPadding));
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BoxedContentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-boxed-content',
                        templateUrl: './boxed-content.component.html',
                    }]
            }], function () { return []; }, { isShaded: [{
                    type: i0.Input,
                    args: ['shaded']
                }], maxWidth: [{
                    type: i0.Input,
                    args: ['maxWidth']
                }], size: [{
                    type: i0.Input,
                    args: ['size']
                }], shadowSize: [{
                    type: i0.Input,
                    args: ['shadowSize']
                }], noPadding: [{
                    type: i0.Input,
                    args: ['noPadding']
                }] });
    })();

    var BoxedContentModule = /** @class */ (function () {
        function BoxedContentModule() {
        }
        return BoxedContentModule;
    }());
    BoxedContentModule.ɵmod = i0.ɵɵdefineNgModule({ type: BoxedContentModule });
    BoxedContentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BoxedContentModule_Factory(t) { return new (t || BoxedContentModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BoxedContentModule, { declarations: [BoxedContentComponent], imports: [i1.CommonModule], exports: [BoxedContentComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BoxedContentModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [BoxedContentComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [BoxedContentComponent]
                    }]
            }], null, null);
    })();

    (function (HeroImageBackdropTypesEnum) {
        HeroImageBackdropTypesEnum["BLUE"] = "blue";
    })(exports.HeroImageBackdropTypesEnum || (exports.HeroImageBackdropTypesEnum = {}));

    (function (HeroImageAnimationTypesEnum) {
        HeroImageAnimationTypesEnum["FADEIN"] = "fadein";
    })(exports.HeroImageAnimationTypesEnum || (exports.HeroImageAnimationTypesEnum = {}));

    function HeroImageComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵprojection(4, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r0.fadeoutClassNames);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx_r0.fadeinClassNames);
        }
    }
    function HeroImageComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵprojection(1, 2);
            i0.ɵɵelementContainerEnd();
        }
    }
    var _c0$1 = [[["", "fadeout", ""]], [["", "fadein", ""]], "*"];
    var _c1$1 = function (a0) { return { "background-image": a0 }; };
    var _c2 = function (a1) { return { "und-hero-image__backdrop": true, "und-hero-image__backdrop--is-blue": a1 }; };
    var _c3 = ["[fadeout]", "[fadein]", "*"];
    var HeroImageComponent = /** @class */ (function () {
        function HeroImageComponent() {
            this.animationDelay = 3000;
            this.bgImage = '';
            this.version = '';
        }
        Object.defineProperty(HeroImageComponent.prototype, "backdropTypes", {
            get: function () {
                return exports.HeroImageBackdropTypesEnum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HeroImageComponent.prototype, "animationTypes", {
            get: function () {
                return exports.HeroImageAnimationTypesEnum;
            },
            enumerable: false,
            configurable: true
        });
        HeroImageComponent.prototype.ngOnInit = function () {
            if (this.animationType === exports.HeroImageAnimationTypesEnum.FADEIN) {
                this.startAnimation();
            }
        };
        HeroImageComponent.prototype.ngOnChanges = function (changes) {
            if (!changes.bgImage.currentValue) {
                this.bgImageToStyle = '';
                return;
            }
            if (changes.bgImage.firstChange) {
                this.bgImageToStyle = "url(" + changes.bgImage.currentValue + ")";
            }
        };
        HeroImageComponent.prototype.startAnimation = function () {
            var _this = this;
            window.setTimeout(function () {
                _this.isFadeinAnimating = true;
                _this.isFadeoutAnimating = true;
            }, this.animationDelay);
        };
        Object.defineProperty(HeroImageComponent.prototype, "fadeinClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a['und-hero-image__fadein'] = true,
                    _a['--animating'] = this.isFadeinAnimating,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HeroImageComponent.prototype, "fadeoutClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a['und-hero-image__fadeout'] = true,
                    _a['--animating'] = this.isFadeoutAnimating,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return HeroImageComponent;
    }());
    HeroImageComponent.ɵfac = function HeroImageComponent_Factory(t) { return new (t || HeroImageComponent)(); };
    HeroImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeroImageComponent, selectors: [["und-hero-image"]], inputs: { animationType: ["animation", "animationType"], animationDelay: "animationDelay", backdropType: "backdropType", bgImage: ["backgroundImage", "bgImage"], version: ["versionApp", "version"] }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 7, vars: 9, consts: [[1, "und-hero-image", 3, "ngStyle"], [3, "ngClass"], [1, "und-hero-image__content"], [4, "ngIf"], [1, "und-text-version"]], template: function HeroImageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0$1);
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, HeroImageComponent_ng_container_3_Template, 5, 2, "ng-container", 3);
                i0.ɵɵtemplate(4, HeroImageComponent_ng_container_4_Template, 2, 0, "ng-container", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "p", 4);
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1$1, ctx.bgImageToStyle));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c2, ctx.backdropType == ctx.backdropTypes.BLUE));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.animationType === ctx.animationTypes.FADEIN);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.animationType);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.version);
            }
        }, directives: [i1.NgStyle, i1.NgClass, i1.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeroImageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-hero-image',
                        templateUrl: './hero-image.component.html',
                    }]
            }], function () { return []; }, { animationType: [{
                    type: i0.Input,
                    args: ['animation']
                }], animationDelay: [{
                    type: i0.Input,
                    args: ['animationDelay']
                }], backdropType: [{
                    type: i0.Input,
                    args: ['backdropType']
                }], bgImage: [{
                    type: i0.Input,
                    args: ['backgroundImage']
                }], version: [{
                    type: i0.Input,
                    args: ['versionApp']
                }] });
    })();

    var HeroImageModule = /** @class */ (function () {
        function HeroImageModule() {
        }
        return HeroImageModule;
    }());
    HeroImageModule.ɵmod = i0.ɵɵdefineNgModule({ type: HeroImageModule });
    HeroImageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HeroImageModule_Factory(t) { return new (t || HeroImageModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HeroImageModule, { declarations: [HeroImageComponent], imports: [i1.CommonModule], exports: [HeroImageComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeroImageModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [HeroImageComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [HeroImageComponent]
                    }]
            }], null, null);
    })();

    var _c0$2 = [[["", "header", ""]], [["", "content", ""]], [["", "footer", ""]]];
    var _c1$2 = ["[header]", "[content]", "[footer]"];
    var CallToActionAreaComponent = /** @class */ (function () {
        function CallToActionAreaComponent() {
        }
        CallToActionAreaComponent.prototype.ngOnInit = function () {
        };
        return CallToActionAreaComponent;
    }());
    CallToActionAreaComponent.ɵfac = function CallToActionAreaComponent_Factory(t) { return new (t || CallToActionAreaComponent)(); };
    CallToActionAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CallToActionAreaComponent, selectors: [["und-call-to-action-area"]], ngContentSelectors: _c1$2, decls: 7, vars: 0, consts: [[1, "und-call-to-action-area"], [1, "und-call-to-action-area__header"], [1, "und-call-to-action-area__content"], [1, "und-call-to-action-area__footer"]], template: function CallToActionAreaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0$2);
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵprojection(4, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵprojection(6, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CallToActionAreaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-call-to-action-area',
                        templateUrl: './call-to-action-area.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var CallToActionAreaModule = /** @class */ (function () {
        function CallToActionAreaModule() {
        }
        return CallToActionAreaModule;
    }());
    CallToActionAreaModule.ɵmod = i0.ɵɵdefineNgModule({ type: CallToActionAreaModule });
    CallToActionAreaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CallToActionAreaModule_Factory(t) { return new (t || CallToActionAreaModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CallToActionAreaModule, { declarations: [CallToActionAreaComponent], imports: [i1.CommonModule], exports: [CallToActionAreaComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CallToActionAreaModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CallToActionAreaComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [CallToActionAreaComponent]
                    }]
            }], null, null);
    })();

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
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

    (function (SpacerSidesEnum) {
        SpacerSidesEnum["TOP"] = "top";
        SpacerSidesEnum["RIGHT"] = "right";
        SpacerSidesEnum["BOTTOM"] = "bottom";
        SpacerSidesEnum["LEFT"] = "left";
    })(exports.SpacerSidesEnum || (exports.SpacerSidesEnum = {}));

    (function (SpacerSizesEnum) {
        SpacerSizesEnum["EXTRA_LARGE"] = "extra-large";
        SpacerSizesEnum["LARGE"] = "large";
        SpacerSizesEnum["MEDIUM"] = "medium";
        SpacerSizesEnum["SMALL"] = "small";
    })(exports.SpacerSizesEnum || (exports.SpacerSizesEnum = {}));

    var BaseComponent = /** @class */ (function () {
        function BaseComponent(appSelector) {
            this.appPrefix = 'und';
            this.cssPrefix = this.appPrefix + "-" + appSelector;
        }
        return BaseComponent;
    }());

    var _c0$3 = ["*"];
    var SpacerComponent = /** @class */ (function (_super) {
        __extends(SpacerComponent, _super);
        function SpacerComponent() {
            var _this = _super.call(this, 'spacer') || this;
            _this.side = exports.SpacerSidesEnum.BOTTOM;
            _this.size = exports.SpacerSizesEnum.MEDIUM;
            return _this;
        }
        Object.defineProperty(SpacerComponent.prototype, "availableSizes", {
            get: function () {
                return exports.SpacerSizesEnum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpacerComponent.prototype, "availableSides", {
            get: function () {
                return exports.SpacerSidesEnum;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SpacerComponent.prototype, "spacerClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.appPrefix + "-margin-top-xl"] = this.side == exports.SpacerSidesEnum.TOP
                        && this.size == exports.SpacerSizesEnum.EXTRA_LARGE,
                    _a[this.appPrefix + "-margin-top-lg"] = this.side == exports.SpacerSidesEnum.TOP
                        && this.size == exports.SpacerSizesEnum.LARGE,
                    _a[this.appPrefix + "-margin-top-md"] = this.side == exports.SpacerSidesEnum.TOP
                        && this.size == exports.SpacerSizesEnum.MEDIUM,
                    _a[this.appPrefix + "-margin-top-sm"] = this.side == exports.SpacerSidesEnum.TOP
                        && this.size == exports.SpacerSizesEnum.SMALL,
                    _a[this.appPrefix + "-margin-right-xl"] = this.side == exports.SpacerSidesEnum.RIGHT
                        && this.size == exports.SpacerSizesEnum.EXTRA_LARGE,
                    _a[this.appPrefix + "-margin-right-lg"] = this.side == exports.SpacerSidesEnum.RIGHT
                        && this.size == exports.SpacerSizesEnum.LARGE,
                    _a[this.appPrefix + "-margin-right-md"] = this.side == exports.SpacerSidesEnum.RIGHT
                        && this.size == exports.SpacerSizesEnum.MEDIUM,
                    _a[this.appPrefix + "-margin-right-sm"] = this.side == exports.SpacerSidesEnum.RIGHT
                        && this.size == exports.SpacerSizesEnum.SMALL,
                    _a[this.appPrefix + "-margin-bottom-xl"] = this.side == exports.SpacerSidesEnum.BOTTOM
                        && this.size == exports.SpacerSizesEnum.EXTRA_LARGE,
                    _a[this.appPrefix + "-margin-bottom-lg"] = this.side == exports.SpacerSidesEnum.BOTTOM
                        && this.size == exports.SpacerSizesEnum.LARGE,
                    _a[this.appPrefix + "-margin-bottom-md"] = this.side == exports.SpacerSidesEnum.BOTTOM
                        && this.size == exports.SpacerSizesEnum.MEDIUM,
                    _a[this.appPrefix + "-margin-bottom-sm"] = this.side == exports.SpacerSidesEnum.BOTTOM
                        && this.size == exports.SpacerSizesEnum.SMALL,
                    _a[this.appPrefix + "-margin-left-xl"] = this.side == exports.SpacerSidesEnum.LEFT
                        && this.size == exports.SpacerSizesEnum.EXTRA_LARGE,
                    _a[this.appPrefix + "-margin-left-lg"] = this.side == exports.SpacerSidesEnum.LEFT
                        && this.size == exports.SpacerSizesEnum.LARGE,
                    _a[this.appPrefix + "-margin-left-md"] = this.side == exports.SpacerSidesEnum.LEFT
                        && this.size == exports.SpacerSizesEnum.MEDIUM,
                    _a[this.appPrefix + "-margin-left-sm"] = this.side == exports.SpacerSidesEnum.LEFT
                        && this.size == exports.SpacerSizesEnum.SMALL,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return SpacerComponent;
    }(BaseComponent));
    SpacerComponent.ɵfac = function SpacerComponent_Factory(t) { return new (t || SpacerComponent)(); };
    SpacerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpacerComponent, selectors: [["und-spacer"]], inputs: { side: "side", size: "size" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$3, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function SpacerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.spacerClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpacerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-spacer',
                        templateUrl: './spacer.component.html',
                    }]
            }], function () { return []; }, { side: [{
                    type: i0.Input,
                    args: ['side']
                }], size: [{
                    type: i0.Input,
                    args: ['size']
                }] });
    })();

    var SpacerModule = /** @class */ (function () {
        function SpacerModule() {
        }
        return SpacerModule;
    }());
    SpacerModule.ɵmod = i0.ɵɵdefineNgModule({ type: SpacerModule });
    SpacerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SpacerModule_Factory(t) { return new (t || SpacerModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SpacerModule, { declarations: [SpacerComponent], imports: [i1.CommonModule], exports: [SpacerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpacerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SpacerComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            SpacerComponent,
                        ]
                    }]
            }], null, null);
    })();

    var HttpRequestModule = /** @class */ (function () {
        function HttpRequestModule() {
        }
        return HttpRequestModule;
    }());
    HttpRequestModule.ɵmod = i0.ɵɵdefineNgModule({ type: HttpRequestModule });
    HttpRequestModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HttpRequestModule_Factory(t) { return new (t || HttpRequestModule)(); }, imports: [[
                i1.CommonModule,
                http.HttpClientModule
            ], http.HttpClientModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HttpRequestModule, { imports: [i1.CommonModule,
                http.HttpClientModule], exports: [http.HttpClientModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HttpRequestModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i1.CommonModule,
                            http.HttpClientModule
                        ],
                        exports: [
                            http.HttpClientModule,
                        ],
                    }]
            }], null, null);
    })();

    (function (ButtonSizesEnum) {
        ButtonSizesEnum["SMALL"] = "small";
        ButtonSizesEnum["MEDIUM"] = "medium";
        ButtonSizesEnum["LARGE"] = "large";
    })(exports.ButtonSizesEnum || (exports.ButtonSizesEnum = {}));

    (function (ButtonTypesEnum) {
        ButtonTypesEnum["PRIMARY"] = "primary";
        ButtonTypesEnum["SECONDARY"] = "secondary";
        ButtonTypesEnum["TEXT"] = "text";
        ButtonTypesEnum["NONE"] = "none";
    })(exports.ButtonTypesEnum || (exports.ButtonTypesEnum = {}));

    (function (SpinnerSizesEnum) {
        SpinnerSizesEnum["SMALL"] = "small";
        SpinnerSizesEnum["MEDIUM"] = "medium";
    })(exports.SpinnerSizesEnum || (exports.SpinnerSizesEnum = {}));

    (function (SpinnerTypesEnum) {
        SpinnerTypesEnum["SPIN"] = "spin";
        SpinnerTypesEnum["GROWING_CIRCLE"] = "growing-circle";
    })(exports.SpinnerTypesEnum || (exports.SpinnerTypesEnum = {}));

    var SpinnerComponent = /** @class */ (function (_super) {
        __extends(SpinnerComponent, _super);
        function SpinnerComponent() {
            var _this = _super.call(this, 'spinner') || this;
            _this.spinnerSize = exports.SpinnerSizesEnum.MEDIUM;
            _this.spinnerType = exports.SpinnerTypesEnum.SPIN;
            return _this;
        }
        Object.defineProperty(SpinnerComponent.prototype, "spinnerClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-small"] = this.spinnerSize === exports.SpinnerSizesEnum.SMALL,
                    _a[this.cssPrefix + "--is-growing-circle"] = this.spinnerType === exports.SpinnerTypesEnum.GROWING_CIRCLE,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return SpinnerComponent;
    }(BaseComponent));
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
    SpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["und-spinner"]], inputs: { spinnerSize: ["size", "spinnerSize"], spinnerType: ["type", "spinnerType"] }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["role", "status", 3, "ngClass"]], template: function SpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.spinnerClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-spinner',
                        templateUrl: './spinner.component.html',
                    }]
            }], function () { return []; }, { spinnerSize: [{
                    type: i0.Input,
                    args: ['size']
                }], spinnerType: [{
                    type: i0.Input,
                    args: ['type']
                }] });
    })();

    function ButtonComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 2);
            i0.ɵɵelement(1, "und-spinner", 3);
            i0.ɵɵelementEnd();
        }
    }
    var _c0$4 = ["*"];
    var ButtonComponent = /** @class */ (function (_super) {
        __extends(ButtonComponent, _super);
        function ButtonComponent() {
            var _this = _super.call(this, 'button') || this;
            _this.onClick = new i0.EventEmitter();
            _this.htmlType = 'button';
            _this.buttonSize = exports.ButtonSizesEnum.MEDIUM;
            _this.buttonType = exports.ButtonTypesEnum.SECONDARY;
            return _this;
        }
        Object.defineProperty(ButtonComponent.prototype, "buttonClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-small"] = this.buttonSize === exports.ButtonSizesEnum.SMALL,
                    _a[this.cssPrefix + "--is-medium"] = this.buttonSize === exports.ButtonSizesEnum.MEDIUM,
                    _a[this.cssPrefix + "--is-large"] = this.buttonSize === exports.ButtonSizesEnum.LARGE,
                    _a[this.cssPrefix + "--is-primary"] = this.buttonType === exports.ButtonTypesEnum.PRIMARY,
                    _a[this.cssPrefix + "--is-secondary"] = this.buttonType === exports.ButtonTypesEnum.SECONDARY,
                    _a[this.cssPrefix + "--is-text"] = this.buttonType === exports.ButtonTypesEnum.TEXT,
                    _a[this.cssPrefix + "--is-outline"] = this.buttonIsOutline === true,
                    _a[this.cssPrefix + "--is-block"] = this.buttonIsBlock === true,
                    _a[this.cssPrefix + "--is-disabled"] = this.buttonIsDisabled === true,
                    _a[this.cssPrefix + "--is-spinning"] = this.isSpinning,
                    _a[this.cssPrefix + "--is-wrapper"] = this.buttonType === exports.ButtonTypesEnum.NONE,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        ButtonComponent.prototype.onClickHandler = function () {
            this.onClick.emit();
        };
        return ButtonComponent;
    }(BaseComponent));
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["und-button"]], inputs: { isSpinning: ["spinning", "isSpinning"], htmlType: "htmlType", buttonSize: ["size", "buttonSize"], buttonType: ["type", "buttonType"], buttonIsOutline: ["outline", "buttonIsOutline"], buttonIsBlock: ["block", "buttonIsBlock"], buttonIsDisabled: ["disabled", "buttonIsDisabled"] }, outputs: { onClick: "onClick" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$4, decls: 3, vars: 4, consts: [[3, "type", "disabled", "ngClass", "click"], ["class", "und-button__spin", 4, "ngIf"], [1, "und-button__spin"], ["size", "small"]], template: function ButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClickHandler(); });
                i0.ɵɵtemplate(1, ButtonComponent_span_1_Template, 2, 0, "span", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("type", ctx.htmlType)("disabled", ctx.buttonIsDisabled)("ngClass", ctx.buttonClasses);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isSpinning);
            }
        }, directives: [i1.NgClass, i1.NgIf, SpinnerComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-button',
                        templateUrl: './button.component.html',
                    }]
            }], function () { return []; }, { onClick: [{
                    type: i0.Output
                }], isSpinning: [{
                    type: i0.Input,
                    args: ['spinning']
                }], htmlType: [{
                    type: i0.Input
                }], buttonSize: [{
                    type: i0.Input,
                    args: ['size']
                }], buttonType: [{
                    type: i0.Input,
                    args: ['type']
                }], buttonIsOutline: [{
                    type: i0.Input,
                    args: ['outline']
                }], buttonIsBlock: [{
                    type: i0.Input,
                    args: ['block']
                }], buttonIsDisabled: [{
                    type: i0.Input,
                    args: ['disabled']
                }] });
    })();

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.ɵmod = i0.ɵɵdefineNgModule({ type: SpinnerModule });
    SpinnerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SpinnerModule, { declarations: [SpinnerComponent], imports: [i1.CommonModule], exports: [SpinnerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SpinnerComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [SpinnerComponent]
                    }]
            }], null, null);
    })();

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonModule });
    ButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
                i1.CommonModule,
                SpinnerModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [i1.CommonModule,
                SpinnerModule], exports: [ButtonComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ButtonModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ButtonComponent],
                        imports: [
                            i1.CommonModule,
                            SpinnerModule
                        ],
                        exports: [ButtonComponent]
                    }]
            }], null, null);
    })();

    var FormComponent = /** @class */ (function () {
        function FormComponent() {
        }
        FormComponent.prototype.ngOnInit = function () {
        };
        return FormComponent;
    }());
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
    FormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["und-form"]], decls: 2, vars: 0, template: function FormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "CoreAngular Form Component");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-form',
                        templateUrl: './form.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var CoreAngularService = /** @class */ (function () {
        function CoreAngularService() {
        }
        CoreAngularService.prototype.generateUniqueId = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return CoreAngularService;
    }());
    CoreAngularService.ɵfac = function CoreAngularService_Factory(t) { return new (t || CoreAngularService)(); };
    CoreAngularService.ɵprov = i0.ɵɵdefineInjectable({ token: CoreAngularService, factory: CoreAngularService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreAngularService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$5 = ["inputElement"];
    var _c1$3 = ["*"];
    var CheckboxComponent = /** @class */ (function (_super) {
        __extends(CheckboxComponent, _super);
        function CheckboxComponent(caService, _renderer) {
            var _this = _super.call(this, 'checkbox') || this;
            _this.caService = caService;
            _this._renderer = _renderer;
            _this.isBlock = false;
            _this.noBullet = false;
            _this.valueChangesGroup = new i0.EventEmitter();
            _this.onChange = function () { };
            _this.onTouched = function () { };
            return _this;
        }
        CheckboxComponent.prototype.ngOnInit = function () {
            if (!this.id) {
                this.id = this.caService.generateUniqueId();
            }
        };
        CheckboxComponent.prototype.writeValue = function (newValue) {
            this.value = newValue;
            if (newValue === this.checkboxValue) {
                this.setChecked(true);
                return;
            }
            this.setChecked(false);
        };
        CheckboxComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CheckboxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this.inputElement.nativeElement, 'disabled', isDisabled);
        };
        Object.defineProperty(CheckboxComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
                this.onChange(this._value);
                this.onTouched();
            },
            enumerable: false,
            configurable: true
        });
        CheckboxComponent.prototype.onChangeByGroup = function (id, value, isChecked) {
            this.valueChangesGroup.emit({ id: id, value: value, isChecked: isChecked });
        };
        CheckboxComponent.prototype.onValueChange = function (isChecked, value, id) {
            this.onChangeByGroup(id, value, isChecked);
            this.value = this.checkboxValue ? value : isChecked;
        };
        CheckboxComponent.prototype.setChecked = function (value) {
            if (!this.inputElement) {
                return;
            }
            this._renderer.setProperty(this.inputElement.nativeElement, 'checked', value);
        };
        Object.defineProperty(CheckboxComponent.prototype, "cssClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a[this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-block"] = this.isBlock,
                    _a[this.cssPrefix + "--has-no-bullet"] = this.noBullet,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return CheckboxComponent;
    }(BaseComponent));
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["und-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$5, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            }
        }, inputs: { id: "id", checkboxValue: "checkboxValue", checkboxName: "checkboxName", isChecked: "isChecked", disabled: "disabled", isBlock: "isBlock", noBullet: "noBullet" }, outputs: { valueChangesGroup: "valueChangesGroup" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CheckboxComponent; }),
                    multi: true,
                }
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$3, decls: 6, vars: 12, consts: [[3, "ngClass"], ["type", "checkbox", 3, "id", "name", "value", "checked", "disabled", "change"], ["inputElement", ""]], template: function CheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "label", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("change", function CheckboxComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(2); return ctx.onValueChange(_r0.checked, _r0.value, _r0.id); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "span");
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.cssClassNames);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__input");
                i0.ɵɵproperty("id", ctx.id)("name", ctx.checkboxName)("value", ctx.checkboxValue)("checked", ctx.isChecked)("disabled", ctx.disabled);
                i0.ɵɵadvance(2);
                i0.ɵɵclassMap(ctx.cssPrefix + "__marker");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__content");
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-checkbox',
                        templateUrl: './checkbox.component.html',
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CheckboxComponent; }),
                                multi: true,
                            }
                        ]
                    }]
            }], function () { return [{ type: CoreAngularService }, { type: i0.Renderer2 }]; }, { id: [{
                    type: i0.Input
                }], inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement']
                }], checkboxValue: [{
                    type: i0.Input,
                    args: ['checkboxValue']
                }], checkboxName: [{
                    type: i0.Input,
                    args: ['checkboxName']
                }], isChecked: [{
                    type: i0.Input,
                    args: ['isChecked']
                }], disabled: [{
                    type: i0.Input,
                    args: ['disabled']
                }], isBlock: [{
                    type: i0.Input,
                    args: ['isBlock']
                }], noBullet: [{
                    type: i0.Input,
                    args: ['noBullet']
                }], valueChangesGroup: [{
                    type: i0.Output
                }] });
    })();

    var _c0$6 = ["inputElement"];
    var _c1$4 = ["*"];
    var RadioButtonComponent = /** @class */ (function (_super) {
        __extends(RadioButtonComponent, _super);
        function RadioButtonComponent(caService, _renderer) {
            var _this = _super.call(this, 'radio-button') || this;
            _this.caService = caService;
            _this._renderer = _renderer;
            _this.isBlock = false;
            _this.noBullet = false;
            _this.onChange = function () { };
            _this.onTouched = function () { };
            _this.id = caService.generateUniqueId();
            return _this;
        }
        RadioButtonComponent.prototype.ngOnInit = function () {
        };
        RadioButtonComponent.prototype.writeValue = function (newValue) {
            this.value = newValue;
            if (newValue === this.radioValue) {
                this.setChecked(true);
                return;
            }
            this.setChecked(false);
        };
        RadioButtonComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        RadioButtonComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        RadioButtonComponent.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this.inputElement.nativeElement, 'disabled', isDisabled);
        };
        Object.defineProperty(RadioButtonComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
                this.onChange(this._value);
                this.onTouched();
            },
            enumerable: false,
            configurable: true
        });
        RadioButtonComponent.prototype.onValueChange = function (isChecked, value) {
            if (!isChecked) {
                return;
            }
            this.value = value;
        };
        RadioButtonComponent.prototype.setChecked = function (value) {
            if (!this.inputElement) {
                return;
            }
            this._renderer.setProperty(this.inputElement.nativeElement, 'checked', value);
        };
        Object.defineProperty(RadioButtonComponent.prototype, "cssClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a[this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-block"] = this.isBlock,
                    _a[this.cssPrefix + "--has-no-bullet"] = this.noBullet,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return RadioButtonComponent;
    }(BaseComponent));
    RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) { return new (t || RadioButtonComponent)(i0.ɵɵdirectiveInject(CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    RadioButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioButtonComponent, selectors: [["und-radio-button"]], viewQuery: function RadioButtonComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$6, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            }
        }, inputs: { radioValue: "radioValue", radioName: "radioName", isBlock: "isBlock", noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return RadioButtonComponent; }),
                    multi: true,
                }
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$4, decls: 6, vars: 10, consts: [[3, "ngClass"], ["type", "radio", 3, "id", "name", "value", "change"], ["inputElement", ""]], template: function RadioButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "label", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("change", function RadioButtonComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(2); return ctx.onValueChange(_r0.checked, _r0.value); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "span");
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.cssClassNames);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__input");
                i0.ɵɵproperty("id", ctx.id)("name", ctx.radioName)("value", ctx.radioValue);
                i0.ɵɵadvance(2);
                i0.ɵɵclassMap(ctx.cssPrefix + "__marker");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__content");
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-radio-button',
                        templateUrl: './radio-button.component.html',
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return RadioButtonComponent; }),
                                multi: true,
                            }
                        ]
                    }]
            }], function () { return [{ type: CoreAngularService }, { type: i0.Renderer2 }]; }, { inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement']
                }], radioValue: [{
                    type: i0.Input,
                    args: ['radioValue']
                }], radioName: [{
                    type: i0.Input,
                    args: ['radioName']
                }], isBlock: [{
                    type: i0.Input,
                    args: ['isBlock']
                }], noBullet: [{
                    type: i0.Input,
                    args: ['noBullet']
                }] });
    })();

    function RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 6);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var extraInfo_r7 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngClass", ctx_r6.cssPrefix + "__extra-info-item");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r6.appPrefix + "-text-color-primary ");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(extraInfo_r7.title);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", extraInfo_r7.description, " ");
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_p_1_Template, 4, 5, "p", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var radioItem_r1 = i0.ɵɵnextContext(2).$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r5.cssPrefix + "__extra-info");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", radioItem_r1.extraInfo);
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_Template, 2, 2, "div", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var radioItem_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", radioItem_r1.label, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", radioItem_r1.extraInfo.length);
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_h2_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var radioItem_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(radioItem_r1.label);
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_p_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 6);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "br");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var extraInfo_r13 = ctx.$implicit;
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", ctx_r11.cssPrefix + "__extra-info-item");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r11.appPrefix + "-text-color-primary ");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(extraInfo_r13.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", extraInfo_r13.description, " ");
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_h2_1_Template, 2, 1, "h2", 9);
            i0.ɵɵelementStart(2, "div", 6);
            i0.ɵɵtemplate(3, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_p_3_Template, 5, 5, "p", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var radioItem_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", radioItem_r1.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx_r4.cssPrefix + "__extra-info");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", radioItem_r1.extraInfo);
        }
    }
    function RadioButtonGroupComponent_und_radio_button_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "und-radio-button", 2);
            i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_div_1_Template, 3, 2, "div", 3);
            i0.ɵɵtemplate(2, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_Template, 4, 3, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var radioItem_r1 = ctx.$implicit;
            var _r3 = i0.ɵɵreference(3);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("radioValue", radioItem_r1.value)("radioName", ctx_r0.groupName)("isBlock", ctx_r0.layout === "card")("noBullet", ctx_r0.noBullet);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.layout !== "card")("ngIfElse", _r3);
        }
    }
    var RadioButtonGroupComponent = /** @class */ (function (_super) {
        __extends(RadioButtonGroupComponent, _super);
        function RadioButtonGroupComponent(caService, _renderer, _fb) {
            var _this = _super.call(this, 'radio-button-group') || this;
            _this.caService = caService;
            _this._renderer = _renderer;
            _this._fb = _fb;
            _this.layout = 'normal';
            _this.noBullet = false;
            _this.onChange = function () { };
            _this.onTouched = function () { };
            _this.id = caService.generateUniqueId();
            _this.groupName = _this.id + "-name";
            _this.form = _this._fb.group({
                radiosGroup: [null]
            });
            return _this;
        }
        RadioButtonGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.form.get('radiosGroup').valueChanges.subscribe(function (value) {
                _this.onValueChange(value);
            });
        };
        RadioButtonGroupComponent.prototype.writeValue = function (newValue) {
            this.value = newValue;
            this.setNewValue(newValue);
        };
        RadioButtonGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        RadioButtonGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        RadioButtonGroupComponent.prototype.setDisabledState = function (isDisabled) {
            // this._renderer.setProperty(this.inputElement.nativeElement, 'disabled',  isDisabled);
        };
        Object.defineProperty(RadioButtonGroupComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
                this.onChange(this._value);
                this.onTouched();
            },
            enumerable: false,
            configurable: true
        });
        RadioButtonGroupComponent.prototype.onValueChange = function (value) {
            this.value = value;
        };
        RadioButtonGroupComponent.prototype.setNewValue = function (value) {
            this.form.get('radiosGroup').setValue(value);
        };
        return RadioButtonGroupComponent;
    }(BaseComponent));
    RadioButtonGroupComponent.ɵfac = function RadioButtonGroupComponent_Factory(t) { return new (t || RadioButtonGroupComponent)(i0.ɵɵdirectiveInject(CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
    RadioButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioButtonGroupComponent, selectors: [["und-radio-button-group"]], inputs: { layout: "layout", radioItems: ["items", "radioItems"], noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return RadioButtonGroupComponent; }),
                    multi: true,
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "formGroup", "ngClass"], ["formControlName", "radiosGroup", 3, "radioValue", "radioName", "isBlock", "noBullet", 4, "ngFor", "ngForOf"], ["formControlName", "radiosGroup", 3, "radioValue", "radioName", "isBlock", "noBullet"], [4, "ngIf", "ngIfElse"], ["cardLayoutBlock", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "und-card"], [4, "ngIf"]], template: function RadioButtonGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_Template, 4, 6, "und-radio-button", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form)("ngClass", ctx.cssPrefix);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.radioItems);
            }
        }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i1.NgClass, i1.NgForOf, RadioButtonComponent, i2.NgControlStatus, i2.FormControlName, i1.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RadioButtonGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-radio-button-group',
                        templateUrl: './radio-button-group.component.html',
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return RadioButtonGroupComponent; }),
                                multi: true,
                            }
                        ]
                    }]
            }], function () { return [{ type: CoreAngularService }, { type: i0.Renderer2 }, { type: i2.FormBuilder }]; }, { layout: [{
                    type: i0.Input,
                    args: ['layout']
                }], radioItems: [{
                    type: i0.Input,
                    args: ['items']
                }], noBullet: [{
                    type: i0.Input,
                    args: ['noBullet']
                }] });
    })();

    function CheckboxGroupComponent_und_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "und-checkbox", 2);
            i0.ɵɵlistener("valueChangesGroup", function CheckboxGroupComponent_und_checkbox_1_Template_und_checkbox_valueChangesGroup_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onCheckboxValueChanges($event); });
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "br");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var checkboxItem_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("id", checkboxItem_r1.id)("checkboxValue", checkboxItem_r1.value)("checkboxName", ctx_r0.groupName)("isBlock", ctx_r0.layout === "card")("noBullet", ctx_r0.noBullet);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(checkboxItem_r1.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", checkboxItem_r1.description, " ");
        }
    }
    var CheckboxGroupComponent = /** @class */ (function (_super) {
        __extends(CheckboxGroupComponent, _super);
        function CheckboxGroupComponent(caService, _renderer, _fb) {
            var _this = _super.call(this, 'checkbox-group') || this;
            _this.caService = caService;
            _this._renderer = _renderer;
            _this._fb = _fb;
            _this._value = [];
            _this.layout = 'normal';
            _this.noBullet = false;
            _this.onChange = function () { };
            _this.onTouched = function () { };
            _this.id = caService.generateUniqueId();
            _this.groupName = _this.id + "-name";
            return _this;
            // this.form = this._fb.group({
            //   checkboxGroup: [[]]
            // });
        }
        CheckboxGroupComponent.prototype.ngOnInit = function () {
            console.log('iniciou', this.checkboxItems);
            // this.form.get('checkboxGroup').valueChanges.subscribe(value => {
            //   this.onValueChange(value);
            // });
        };
        CheckboxGroupComponent.prototype.writeValue = function (newValue) {
            this.value = newValue;
            this.setNewValue(newValue);
        };
        CheckboxGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CheckboxGroupComponent.prototype.setDisabledState = function (isDisabled) {
            // this._renderer.setProperty(this.inputElement.nativeElement, 'disabled',  isDisabled);
        };
        Object.defineProperty(CheckboxGroupComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                this._value = v;
                this.onChange(this._value);
                this.onTouched();
            },
            enumerable: false,
            configurable: true
        });
        CheckboxGroupComponent.prototype.onValueChange = function (value) {
            this.value = value;
        };
        CheckboxGroupComponent.prototype.setNewValue = function (value) {
            // this.form.get('checkboxGroup').setValue(value);
        };
        CheckboxGroupComponent.prototype.onCheckboxValueChanges = function (_a) {
            var id = _a.id, value = _a.value, isChecked = _a.isChecked;
            var previousValues = this.value;
            if (isChecked) {
                this.value = __spread(previousValues, [value]);
            }
            else {
                this.value = previousValues.filter(function (oldValue) { return oldValue !== value; });
            }
        };
        CheckboxGroupComponent.prototype.ngOnChanges = function (changes) {
            console.log('changes', changes);
            // this.checkboxItems = this.checkboxItems.map(item => {
            //   item.id = this.caService.generateUniqueId();
            //   return item;
            // });
        };
        return CheckboxGroupComponent;
    }(BaseComponent));
    CheckboxGroupComponent.ɵfac = function CheckboxGroupComponent_Factory(t) { return new (t || CheckboxGroupComponent)(i0.ɵɵdirectiveInject(CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
    CheckboxGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxGroupComponent, selectors: [["und-checkbox-group"]], inputs: { layout: "layout", checkboxItems: ["items", "checkboxItems"], noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i2.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CheckboxGroupComponent; }),
                    multi: true,
                }
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngClass"], [3, "id", "checkboxValue", "checkboxName", "isBlock", "noBullet", "valueChangesGroup", 4, "ngFor", "ngForOf"], [3, "id", "checkboxValue", "checkboxName", "isBlock", "noBullet", "valueChangesGroup"]], template: function CheckboxGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, CheckboxGroupComponent_und_checkbox_1_Template, 5, 7, "und-checkbox", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.cssPrefix);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.checkboxItems);
            }
        }, directives: [i1.NgClass, i1.NgForOf, CheckboxComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CheckboxGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-checkbox-group',
                        templateUrl: './checkbox-group.component.html',
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CheckboxGroupComponent; }),
                                multi: true,
                            }
                        ]
                    }]
            }], function () { return [{ type: CoreAngularService }, { type: i0.Renderer2 }, { type: i2.FormBuilder }]; }, { layout: [{
                    type: i0.Input,
                    args: ['layout']
                }], checkboxItems: [{
                    type: i0.Input,
                    args: ['items']
                }], noBullet: [{
                    type: i0.Input,
                    args: ['noBullet']
                }] });
    })();

    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        return FormModule;
    }());
    FormModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormModule });
    FormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
                i2.ReactiveFormsModule,
                i1.CommonModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormModule, { declarations: [FormComponent,
                CheckboxComponent,
                RadioButtonComponent,
                RadioButtonGroupComponent,
                CheckboxGroupComponent], imports: [i2.ReactiveFormsModule,
                i1.CommonModule], exports: [FormComponent,
                CheckboxComponent,
                RadioButtonComponent,
                RadioButtonGroupComponent,
                CheckboxGroupComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FormModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FormComponent,
                            CheckboxComponent,
                            RadioButtonComponent,
                            RadioButtonGroupComponent,
                            CheckboxGroupComponent,
                        ],
                        imports: [
                            i2.ReactiveFormsModule,
                            i1.CommonModule,
                        ],
                        exports: [
                            FormComponent,
                            CheckboxComponent,
                            RadioButtonComponent,
                            RadioButtonGroupComponent,
                            CheckboxGroupComponent,
                        ]
                    }]
            }], null, null);
    })();

    var BaseIconComponent = /** @class */ (function () {
        function BaseIconComponent(appSelector) {
            this.appPrefix = 'und-icon';
            this.cssPrefix = this.appPrefix + "-" + appSelector;
        }
        return BaseIconComponent;
    }());

    var CloseIconComponent = /** @class */ (function (_super) {
        __extends(CloseIconComponent, _super);
        function CloseIconComponent() {
            return _super.call(this, 'close-icon') || this;
        }
        Object.defineProperty(CloseIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return CloseIconComponent;
    }(BaseIconComponent));
    CloseIconComponent.ɵfac = function CloseIconComponent_Factory(t) { return new (t || CloseIconComponent)(); };
    CloseIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CloseIconComponent, selectors: [["und-close-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7.70711 4.89289C7.31658 5.28342 6.68342 5.28342 6.29289 4.89289L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L4.89289 6.29289C5.28342 6.68342 5.28342 7.31658 4.89289 7.70711L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L6.29289 9.10711C6.68342 8.71658 7.31658 8.71658 7.70711 9.10711L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L9.10711 7.70711C8.71658 7.31658 8.71658 6.68342 9.10711 6.29289L13.3 2.1Z", "fill", "currentColor"]], template: function CloseIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CloseIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-close-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7.70711 4.89289C7.31658 5.28342 6.68342 5.28342 6.29289 4.89289L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L4.89289 6.29289C5.28342 6.68342 5.28342 7.31658 4.89289 7.70711L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L6.29289 9.10711C6.68342 8.71658 7.31658 8.71658 7.70711 9.10711L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L9.10711 7.70711C8.71658 7.31658 8.71658 6.68342 9.10711 6.29289L13.3 2.1Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    function ModalComponent_section_0_div_3_a_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 5);
            i0.ɵɵlistener("click", function ModalComponent_section_0_div_3_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(3); return ctx_r3.onCloseHandler(); });
            i0.ɵɵelement(1, "und-close-icon");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMap(ctx_r2.cssPrefix + "__header-close-button");
        }
    }
    function ModalComponent_section_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ModalComponent_section_0_div_3_a_3_Template, 2, 2, "a", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap(ctx_r1.cssPrefix + "__content-header");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r1.cssPrefix + "__header-title");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r1.noCloseButton);
        }
    }
    function ModalComponent_section_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "und-boxed-content", 2);
            i0.ɵɵtemplate(3, ModalComponent_section_0_div_3_Template, 4, 6, "div", 3);
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r0.rootClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r0.cssPrefix + "__content");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("shaded", true)("noPadding", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.noHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r0.cssPrefix + "__content-body");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx_r0.appPrefix + "-backdrop");
        }
    }
    var _c0$7 = ["*"];
    var ModalComponent = /** @class */ (function (_super) {
        __extends(ModalComponent, _super);
        function ModalComponent() {
            var _this = _super.call(this, 'modal') || this;
            _this.onClose = new i0.EventEmitter();
            return _this;
        }
        ModalComponent.prototype.onCloseHandler = function () {
            this.onClose.emit();
        };
        Object.defineProperty(ModalComponent.prototype, "rootClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-visible"] = this.isVisible,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ModalComponent;
    }(BaseComponent));
    ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
    ModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["und-modal"]], inputs: { noTitle: "noTitle", noCloseButton: "noCloseButton", noHeader: "noHeader", title: "title", isVisible: "isVisible" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$7, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["size", "small", "shadowSize", "small", 3, "shaded", "noPadding"], [3, "class", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"]], template: function ModalComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, ModalComponent_section_0_Template, 7, 10, "section", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isVisible);
            }
        }, directives: [i1.NgIf, i1.NgClass, BoxedContentComponent, CloseIconComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ModalComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-modal',
                        templateUrl: './modal.component.html',
                    }]
            }], function () { return []; }, { onClose: [{
                    type: i0.Output
                }], noTitle: [{
                    type: i0.Input,
                    args: ['noTitle']
                }], noCloseButton: [{
                    type: i0.Input,
                    args: ['noCloseButton']
                }], noHeader: [{
                    type: i0.Input,
                    args: ['noHeader']
                }], title: [{
                    type: i0.Input,
                    args: ['title']
                }], isVisible: [{
                    type: i0.Input,
                    args: ['isVisible']
                }] });
    })();

    var NonRevenueIconComponent = /** @class */ (function (_super) {
        __extends(NonRevenueIconComponent, _super);
        function NonRevenueIconComponent() {
            return _super.call(this, 'non-revenue-icon') || this;
        }
        Object.defineProperty(NonRevenueIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return NonRevenueIconComponent;
    }(BaseIconComponent));
    NonRevenueIconComponent.ɵfac = function NonRevenueIconComponent_Factory(t) { return new (t || NonRevenueIconComponent)(); };
    NonRevenueIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NonRevenueIconComponent, selectors: [["und-non-revenue-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "1em", "height", "1em", "viewBox", "0 0 49.178 58", 3, "ngClass"], ["d", "M36.7,0H3.4A3.4,3.4,0,0,0,0,3.4V14.953a1.133,1.133,0,0,0,2.266,0V3.4A1.134,1.134,0,0,1,3.4,2.266H36.7A1.134,1.134,0,0,1,37.836,3.4V45.539A1.134,1.134,0,0,1,36.7,46.672H3.4a1.134,1.134,0,0,1-1.133-1.133V24.507a1.133,1.133,0,0,0-2.266,0V45.539a3.4,3.4,0,0,0,3.4,3.4H36.7a3.4,3.4,0,0,0,3.4-3.4V3.4A3.4,3.4,0,0,0,36.7,0Z", "fill", "#2f80ed"], ["d", "M1.934,10.319a1.135,1.135,0,0,0-1.6,0,1.133,1.133,0,0,0,.8,1.935,1.133,1.133,0,0,0,.8-1.935Z", "transform", "translate(0 8.905)", "fill", "#2f80ed"], ["d", "M3.532,27.074a1.133,1.133,0,1,1-.8.332A1.139,1.139,0,0,1,3.532,27.074Z", "transform", "translate(2.139 24.136)", "fill", "#2f80ed"], ["d", "M39.233,2.4A1.133,1.133,0,0,0,38.1,3.532V47.938a1.134,1.134,0,0,1-1.133,1.133H5.928a1.133,1.133,0,0,0,0,2.266H36.967a3.4,3.4,0,0,0,3.4-3.4V3.532A1.133,1.133,0,0,0,39.233,2.4Z", "transform", "translate(4.275 2.139)", "fill", "#2f80ed"], ["d", "M42.635,5.924a1.133,1.133,0,0,1,2.266,0V50.33a3.4,3.4,0,0,1-3.4,3.4H5.932a1.133,1.133,0,0,1,0-2.266H41.5a1.134,1.134,0,0,0,1.133-1.133Z", "transform", "translate(4.278 4.271)", "fill", "#2f80ed"], ["d", "M15.362,4.432H4.487A1.133,1.133,0,0,0,3.354,5.565V16.44a1.133,1.133,0,0,0,1.133,1.133H15.362a1.133,1.133,0,0,0,1.133-1.133V5.565A1.133,1.133,0,0,0,15.362,4.432ZM14.229,15.307H5.619V6.7h8.609Z", "transform", "translate(2.99 3.951)", "fill", "#2f80ed", "fill-rule", "evenodd"], ["d", "M9.919,14.255a1.133,1.133,0,0,1,1.6,1.6L7.709,19.669a1.133,1.133,0,0,1-1.6,0l-2.2-2.2a1.133,1.133,0,0,1,1.6-1.6l1.4,1.4Z", "transform", "translate(3.186 12.412)", "fill", "#2f80ed"], ["d", "M24.351,14.913H11.135a1.133,1.133,0,0,0,0,2.266H24.351a1.133,1.133,0,0,0,0-2.266Z", "transform", "translate(8.916 13.294)", "fill", "#2f80ed"], ["d", "M13.59,4.432h7.93a1.133,1.133,0,0,1,0,2.266H13.59a1.133,1.133,0,0,1,0-2.266Z", "transform", "translate(11.105 3.951)", "fill", "#2f80ed"], ["d", "M21.52,7.307H13.59a1.133,1.133,0,0,0,0,2.266h7.93a1.133,1.133,0,0,0,0-2.266Z", "transform", "translate(11.105 6.514)", "fill", "#2f80ed"], ["d", "M13.59,10.181h7.93a1.133,1.133,0,0,1,0,2.266H13.59a1.133,1.133,0,1,1,0-2.266Z", "transform", "translate(11.105 9.076)", "fill", "#2f80ed"], ["d", "M11.521,18.828a1.133,1.133,0,0,0-1.6,0L6.908,21.84l-1.4-1.4a1.133,1.133,0,0,0-1.6,1.6l2.2,2.2a1.133,1.133,0,0,0,1.6,0l3.812-3.812A1.133,1.133,0,0,0,11.521,18.828Z", "transform", "translate(3.186 16.489)", "fill", "#2f80ed"], ["d", "M11.135,19.464H24.351a1.133,1.133,0,0,1,0,2.266H11.135a1.133,1.133,0,0,1,0-2.266Z", "transform", "translate(8.916 17.352)", "fill", "currentColor"]], template: function NonRevenueIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelement(10, "path", 10);
                i0.ɵɵelement(11, "path", 11);
                i0.ɵɵelement(12, "path", 12);
                i0.ɵɵelement(13, "path", 13);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NonRevenueIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-non-revenue-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 49.178 58\">\n    <path d=\"M36.7,0H3.4A3.4,3.4,0,0,0,0,3.4V14.953a1.133,1.133,0,0,0,2.266,0V3.4A1.134,1.134,0,0,1,3.4,2.266H36.7A1.134,1.134,0,0,1,37.836,3.4V45.539A1.134,1.134,0,0,1,36.7,46.672H3.4a1.134,1.134,0,0,1-1.133-1.133V24.507a1.133,1.133,0,0,0-2.266,0V45.539a3.4,3.4,0,0,0,3.4,3.4H36.7a3.4,3.4,0,0,0,3.4-3.4V3.4A3.4,3.4,0,0,0,36.7,0Z\" fill=\"#2f80ed\"/>\n    <path d=\"M1.934,10.319a1.135,1.135,0,0,0-1.6,0,1.133,1.133,0,0,0,.8,1.935,1.133,1.133,0,0,0,.8-1.935Z\" transform=\"translate(0 8.905)\" fill=\"#2f80ed\"/>\n    <path d=\"M3.532,27.074a1.133,1.133,0,1,1-.8.332A1.139,1.139,0,0,1,3.532,27.074Z\" transform=\"translate(2.139 24.136)\" fill=\"#2f80ed\"/>\n    <path d=\"M39.233,2.4A1.133,1.133,0,0,0,38.1,3.532V47.938a1.134,1.134,0,0,1-1.133,1.133H5.928a1.133,1.133,0,0,0,0,2.266H36.967a3.4,3.4,0,0,0,3.4-3.4V3.532A1.133,1.133,0,0,0,39.233,2.4Z\" transform=\"translate(4.275 2.139)\" fill=\"#2f80ed\"/>\n    <path d=\"M42.635,5.924a1.133,1.133,0,0,1,2.266,0V50.33a3.4,3.4,0,0,1-3.4,3.4H5.932a1.133,1.133,0,0,1,0-2.266H41.5a1.134,1.134,0,0,0,1.133-1.133Z\" transform=\"translate(4.278 4.271)\" fill=\"#2f80ed\"/><path d=\"M15.362,4.432H4.487A1.133,1.133,0,0,0,3.354,5.565V16.44a1.133,1.133,0,0,0,1.133,1.133H15.362a1.133,1.133,0,0,0,1.133-1.133V5.565A1.133,1.133,0,0,0,15.362,4.432ZM14.229,15.307H5.619V6.7h8.609Z\" transform=\"translate(2.99 3.951)\" fill=\"#2f80ed\" fill-rule=\"evenodd\"/><path d=\"M9.919,14.255a1.133,1.133,0,0,1,1.6,1.6L7.709,19.669a1.133,1.133,0,0,1-1.6,0l-2.2-2.2a1.133,1.133,0,0,1,1.6-1.6l1.4,1.4Z\" transform=\"translate(3.186 12.412)\" fill=\"#2f80ed\"/><path d=\"M24.351,14.913H11.135a1.133,1.133,0,0,0,0,2.266H24.351a1.133,1.133,0,0,0,0-2.266Z\" transform=\"translate(8.916 13.294)\" fill=\"#2f80ed\"/><path d=\"M13.59,4.432h7.93a1.133,1.133,0,0,1,0,2.266H13.59a1.133,1.133,0,0,1,0-2.266Z\" transform=\"translate(11.105 3.951)\" fill=\"#2f80ed\"/><path d=\"M21.52,7.307H13.59a1.133,1.133,0,0,0,0,2.266h7.93a1.133,1.133,0,0,0,0-2.266Z\" transform=\"translate(11.105 6.514)\" fill=\"#2f80ed\"/><path d=\"M13.59,10.181h7.93a1.133,1.133,0,0,1,0,2.266H13.59a1.133,1.133,0,1,1,0-2.266Z\" transform=\"translate(11.105 9.076)\" fill=\"#2f80ed\"/><path d=\"M11.521,18.828a1.133,1.133,0,0,0-1.6,0L6.908,21.84l-1.4-1.4a1.133,1.133,0,0,0-1.6,1.6l2.2,2.2a1.133,1.133,0,0,0,1.6,0l3.812-3.812A1.133,1.133,0,0,0,11.521,18.828Z\" transform=\"translate(3.186 16.489)\" fill=\"#2f80ed\"/><path d=\"M11.135,19.464H24.351a1.133,1.133,0,0,1,0,2.266H11.135a1.133,1.133,0,0,1,0-2.266Z\" transform=\"translate(8.916 17.352)\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ContractIconComponent = /** @class */ (function (_super) {
        __extends(ContractIconComponent, _super);
        function ContractIconComponent() {
            return _super.call(this, 'contract-icon') || this;
        }
        Object.defineProperty(ContractIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ContractIconComponent;
    }(BaseIconComponent));
    ContractIconComponent.ɵfac = function ContractIconComponent_Factory(t) { return new (t || ContractIconComponent)(); };
    ContractIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ContractIconComponent, selectors: [["und-contract-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "1rem", "height", "1rem", "viewBox", "0 0 40.195 42", 3, "ngClass"], ["transform", "translate(-11)"], ["d", "M51.121,9.5a.615.615,0,0,0-.366-.3L48.709,8.6l.368-1.23a1.331,1.331,0,0,0-.1-1.025,1.353,1.353,0,0,0-.251-.331L49.4,3.73a2.279,2.279,0,0,0-4.368-1.3l-.682,2.28a1.343,1.343,0,0,0-1,.827L38.073.507,37.98.418a2.123,2.123,0,0,0-.334-.28L37.63.128l-.006,0a.61.61,0,0,0-.154-.07A.929.929,0,0,0,37.151,0H12.165A1.166,1.166,0,0,0,11,1.164v17.6a.615.615,0,0,0,1.23,0V1.23H36.679l0,3.553A2.831,2.831,0,0,0,39.5,7.612h3.219l-2.53,8.459a.615.615,0,0,0,1.179.352L44.131,7.2c.005-.015.01-.03.014-.046l.347-1.159a.117.117,0,0,1,.143-.074l3.19.952a.114.114,0,0,1,.075.142l-.544,1.819v.008L40.644,31.274l-1.113-.332-2.294-.684,3.322-11.109A.615.615,0,0,0,39.38,18.8l-3.5,11.7,0,.011c0,.007,0,.015-.005.022s-.007.031-.009.047,0,.016,0,.023,0,.034,0,.051,0,.012,0,.018a.605.605,0,0,0,0,.07s0,0,0,0l.34,3.035.243,2.149a2.334,2.334,0,0,1-.619-.762c-.258-.421-.612-1-1.289-.871-.569.11-.837.585-1.1,1.045a5.438,5.438,0,0,1-.467.731c-.143.182-.24.234-.271.235s-.168-.012-.571-.413a1.458,1.458,0,0,0-2.27.01,1.3,1.3,0,0,1-.424.293c-.1.018-.293-.088-.508-.285a.615.615,0,0,0-.832.907,1.676,1.676,0,0,0,2.571.013,1.582,1.582,0,0,1,.338-.253s.084.015.258.187a2.137,2.137,0,0,0,1.434.771l.079,0a1.62,1.62,0,0,0,1.163-.7,6.609,6.609,0,0,0,.572-.889c.051-.091.112-.2.168-.288.033.052.066.106.1.154a2.5,2.5,0,0,0,2.4,1.484h.008a.594.594,0,0,0,.244-.053l.031-.015.006,0a.6.6,0,0,0,.085-.052,1.2,1.2,0,0,0,.195-.178l.021-.023,3.764-4.533.015-.021.02-.027a.615.615,0,0,0,.035-.059l.01-.018a.611.611,0,0,0,.033-.085l0-.007,1.73-5.787V40.769H12.23V21.613a.615.615,0,0,0-1.23,0v19.22A1.167,1.167,0,0,0,12.165,42H43.44a1.168,1.168,0,0,0,1.167-1.167V22.313L48.357,9.775l1.458.435-2.5,8.36a.615.615,0,1,0,1.179.352l2.677-8.95a.615.615,0,0,0-.048-.468ZM46.215,2.778a1.051,1.051,0,0,1,1.306-.7,1.049,1.049,0,0,1,.7,1.3l-.639,2.136-2.01-.6ZM37.906,4.784l0-2.735,4.548,4.332H39.5a1.6,1.6,0,0,1-1.6-1.6Zm-.3,30.451-.418-3.709,2.8.836Z", "fill", "currentColor"], ["d", "M105.932,195.568a.615.615,0,0,0,.615.615h16.7a.615.615,0,0,0,0-1.23h-16.7A.615.615,0,0,0,105.932,195.568Z", "transform", "translate(-87.145 -178.961)", "fill", "currentColor"], ["d", "M106.547,254.482h15.687a.615.615,0,1,0,0-1.23H106.547a.615.615,0,1,0,0,1.23Z", "transform", "translate(-87.145 -232.477)", "fill", "currentColor"], ["d", "M106.547,312.781H121.02a.615.615,0,1,0,0-1.23H106.547a.615.615,0,0,0,0,1.23Z", "transform", "translate(-87.145 -285.994)", "fill", "currentColor"], ["d", "M106.547,371.081h9.912a.615.615,0,0,0,0-1.23h-9.912a.615.615,0,1,0,0,1.23Z", "transform", "translate(-87.145 -339.511)", "fill", "currentColor"], ["d", "M130.132,101.4a1.036,1.036,0,0,0,1.035-1.034V97.888a1.036,1.036,0,0,0-1.035-1.034H116.593a1.035,1.035,0,0,0-1.035,1.034v2.481a1.035,1.035,0,0,0,1.035,1.034h13.539Zm-13.343-3.318h13.147v2.088H116.789Z", "transform", "translate(-95.982 -88.909)", "fill", "currentColor"]], template: function ContractIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ContractIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-contract-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 40.195 42\">\n    <g transform=\"translate(-11)\">\n    <path d=\"M51.121,9.5a.615.615,0,0,0-.366-.3L48.709,8.6l.368-1.23a1.331,1.331,0,0,0-.1-1.025,1.353,1.353,0,0,0-.251-.331L49.4,3.73a2.279,2.279,0,0,0-4.368-1.3l-.682,2.28a1.343,1.343,0,0,0-1,.827L38.073.507,37.98.418a2.123,2.123,0,0,0-.334-.28L37.63.128l-.006,0a.61.61,0,0,0-.154-.07A.929.929,0,0,0,37.151,0H12.165A1.166,1.166,0,0,0,11,1.164v17.6a.615.615,0,0,0,1.23,0V1.23H36.679l0,3.553A2.831,2.831,0,0,0,39.5,7.612h3.219l-2.53,8.459a.615.615,0,0,0,1.179.352L44.131,7.2c.005-.015.01-.03.014-.046l.347-1.159a.117.117,0,0,1,.143-.074l3.19.952a.114.114,0,0,1,.075.142l-.544,1.819v.008L40.644,31.274l-1.113-.332-2.294-.684,3.322-11.109A.615.615,0,0,0,39.38,18.8l-3.5,11.7,0,.011c0,.007,0,.015-.005.022s-.007.031-.009.047,0,.016,0,.023,0,.034,0,.051,0,.012,0,.018a.605.605,0,0,0,0,.07s0,0,0,0l.34,3.035.243,2.149a2.334,2.334,0,0,1-.619-.762c-.258-.421-.612-1-1.289-.871-.569.11-.837.585-1.1,1.045a5.438,5.438,0,0,1-.467.731c-.143.182-.24.234-.271.235s-.168-.012-.571-.413a1.458,1.458,0,0,0-2.27.01,1.3,1.3,0,0,1-.424.293c-.1.018-.293-.088-.508-.285a.615.615,0,0,0-.832.907,1.676,1.676,0,0,0,2.571.013,1.582,1.582,0,0,1,.338-.253s.084.015.258.187a2.137,2.137,0,0,0,1.434.771l.079,0a1.62,1.62,0,0,0,1.163-.7,6.609,6.609,0,0,0,.572-.889c.051-.091.112-.2.168-.288.033.052.066.106.1.154a2.5,2.5,0,0,0,2.4,1.484h.008a.594.594,0,0,0,.244-.053l.031-.015.006,0a.6.6,0,0,0,.085-.052,1.2,1.2,0,0,0,.195-.178l.021-.023,3.764-4.533.015-.021.02-.027a.615.615,0,0,0,.035-.059l.01-.018a.611.611,0,0,0,.033-.085l0-.007,1.73-5.787V40.769H12.23V21.613a.615.615,0,0,0-1.23,0v19.22A1.167,1.167,0,0,0,12.165,42H43.44a1.168,1.168,0,0,0,1.167-1.167V22.313L48.357,9.775l1.458.435-2.5,8.36a.615.615,0,1,0,1.179.352l2.677-8.95a.615.615,0,0,0-.048-.468ZM46.215,2.778a1.051,1.051,0,0,1,1.306-.7,1.049,1.049,0,0,1,.7,1.3l-.639,2.136-2.01-.6ZM37.906,4.784l0-2.735,4.548,4.332H39.5a1.6,1.6,0,0,1-1.6-1.6Zm-.3,30.451-.418-3.709,2.8.836Z\" fill=\"currentColor\"/>\n    <path d=\"M105.932,195.568a.615.615,0,0,0,.615.615h16.7a.615.615,0,0,0,0-1.23h-16.7A.615.615,0,0,0,105.932,195.568Z\" transform=\"translate(-87.145 -178.961)\" fill=\"currentColor\"/>\n    <path d=\"M106.547,254.482h15.687a.615.615,0,1,0,0-1.23H106.547a.615.615,0,1,0,0,1.23Z\" transform=\"translate(-87.145 -232.477)\" fill=\"currentColor\"/>\n    <path d=\"M106.547,312.781H121.02a.615.615,0,1,0,0-1.23H106.547a.615.615,0,0,0,0,1.23Z\" transform=\"translate(-87.145 -285.994)\" fill=\"currentColor\"/>\n    <path d=\"M106.547,371.081h9.912a.615.615,0,0,0,0-1.23h-9.912a.615.615,0,1,0,0,1.23Z\" transform=\"translate(-87.145 -339.511)\" fill=\"currentColor\"/>\n    <path d=\"M130.132,101.4a1.036,1.036,0,0,0,1.035-1.034V97.888a1.036,1.036,0,0,0-1.035-1.034H116.593a1.035,1.035,0,0,0-1.035,1.034v2.481a1.035,1.035,0,0,0,1.035,1.034h13.539Zm-13.343-3.318h13.147v2.088H116.789Z\" transform=\"translate(-95.982 -88.909)\" fill=\"currentColor\"/>\n    </g>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var SmsIconComponent = /** @class */ (function (_super) {
        __extends(SmsIconComponent, _super);
        function SmsIconComponent() {
            return _super.call(this, 'sms-icon') || this;
        }
        Object.defineProperty(SmsIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return SmsIconComponent;
    }(BaseIconComponent));
    SmsIconComponent.ɵfac = function SmsIconComponent_Factory(t) { return new (t || SmsIconComponent)(); };
    SmsIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SmsIconComponent, selectors: [["und-sms-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 22 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M18.1242 0.931641H2.95777C1.34759 0.93351 0.0428848 2.23821 0.0410156 3.8484V33.0149C0.0428848 34.6251 1.34759 35.9298 2.95777 35.9316H18.1242C19.7344 35.9298 21.0391 34.6251 21.041 33.0149V3.8484C21.0391 2.23821 19.7344 0.93351 18.1242 0.931641ZM2.95777 2.09829H18.1242C19.0909 2.09829 19.8743 2.88175 19.8743 3.8484V5.59824H1.20766V3.8484C1.20766 2.88175 1.99113 2.09829 2.95777 2.09829ZM19.8743 6.76489V30.0984H1.20766V6.76489H19.8743ZM18.1242 34.765H2.95777C1.99113 34.765 1.20766 33.9815 1.20766 33.0149V31.2648H19.8743V33.0149C19.8743 33.9815 19.0909 34.765 18.1242 34.765Z", "fill", "currentColor"], ["d", "M11.1243 32.4317H9.95766C9.63562 32.4317 9.37446 32.6929 9.37446 33.0149C9.37446 33.3372 9.63562 33.5984 9.95766 33.5984H11.1243C11.4466 33.5984 11.7078 33.3372 11.7078 33.0149C11.7078 32.6929 11.4466 32.4317 11.1243 32.4317Z", "fill", "currentColor"], ["d", "M3.54099 4.43157H4.70764C5.02994 4.43157 5.29109 4.17041 5.29109 3.84838C5.29109 3.52607 5.02994 3.26492 4.70764 3.26492H3.54099C3.21895 3.26492 2.9578 3.52607 2.9578 3.84838C2.9578 4.17041 3.21895 4.43157 3.54099 4.43157Z", "fill", "currentColor"], ["d", "M7.04122 4.43157H10.5412C10.8632 4.43157 11.1243 4.17041 11.1243 3.84838C11.1243 3.52607 10.8632 3.26492 10.5412 3.26492H7.04122C6.71891 3.26492 6.45776 3.52607 6.45776 3.84838C6.45776 4.17041 6.71891 4.43157 7.04122 4.43157Z", "fill", "currentColor"], ["d", "M4.12443 19.0148H5.29108C5.61311 19.0148 5.87427 19.276 5.87427 19.5983V20.7649C5.87427 21.0872 5.61311 21.3481 5.29108 21.3481H4.12443C3.80212 21.3481 3.54097 21.0872 3.54097 20.7649C3.54097 20.4426 3.27982 20.1815 2.95778 20.1815C2.63548 20.1815 2.37432 20.4426 2.37432 20.7649C2.37432 21.7313 3.15778 22.515 4.12443 22.515H5.29108C6.25745 22.515 7.04118 21.7316 7.04118 20.7649V19.5983C7.04118 18.6319 6.25772 17.8482 5.29108 17.8482H4.12443C3.80212 17.8482 3.54097 17.587 3.54097 17.265V16.0984C3.54097 15.776 3.80212 15.5149 4.12443 15.5149H5.29108C5.61311 15.5149 5.87427 15.776 5.87427 16.0984C5.87427 16.4204 6.13542 16.6815 6.45773 16.6815C6.77976 16.6815 7.04092 16.4204 7.04092 16.0984C7.04092 15.1317 6.25745 14.3482 5.29108 14.3482H4.12443C3.15778 14.3482 2.37432 15.1317 2.37432 16.0984V17.265C2.37432 18.2314 3.15778 19.0148 4.12443 19.0148Z", "fill", "currentColor"], ["d", "M16.9576 21.3484H15.7912C15.4689 21.3484 15.2077 21.0872 15.2077 20.7649C15.2077 20.4429 14.9466 20.1818 14.6246 20.1818C14.3023 20.1818 14.0411 20.4429 14.0411 20.7649C14.0411 21.7316 14.8246 22.515 15.7912 22.515H16.9578C17.9242 22.515 18.7077 21.7316 18.7077 20.7649V19.5983C18.7077 18.6319 17.9242 17.8482 16.9578 17.8482H15.7912C15.4689 17.8482 15.2077 17.5873 15.2077 17.265V16.0984C15.2077 15.776 15.4689 15.5152 15.7912 15.5152H16.9578C17.2799 15.5152 17.541 15.7763 17.541 16.0984C17.541 16.4207 17.8022 16.6818 18.1245 16.6818C18.4465 16.6818 18.7077 16.4207 18.7077 16.0984C18.7077 15.132 17.9242 14.3482 16.9576 14.3482H15.7912C14.8246 14.3482 14.0411 15.1317 14.0411 16.0984V17.265C14.0411 18.2314 14.8246 19.0151 15.7912 19.0151H16.9576C17.2799 19.0151 17.541 19.2763 17.541 19.5983V20.7649C17.541 21.0872 17.2799 21.3484 16.9576 21.3484Z", "fill", "currentColor"], ["d", "M8.20757 22.515C8.52987 22.515 8.79103 22.2539 8.79103 21.9316V16.0984L10.1911 17.1483C10.3985 17.304 10.6837 17.304 10.8909 17.1483L12.291 16.0984V21.9316C12.291 22.2539 12.5521 22.515 12.8744 22.515C13.1965 22.515 13.4576 22.2539 13.4576 21.9316V14.9317C13.4576 14.6094 13.1965 14.3482 12.8744 14.3482C12.7481 14.3482 12.6253 14.3894 12.5244 14.4649L10.5411 15.9526L8.55765 14.4649C8.29996 14.2716 7.9344 14.3239 7.74107 14.5816C7.66524 14.6826 7.62438 14.8054 7.62438 14.9317V21.9316C7.62438 22.2539 7.88553 22.515 8.20757 22.515Z", "fill", "currentColor"]], template: function SmsIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SmsIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-sms-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 22 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M18.1242 0.931641H2.95777C1.34759 0.93351 0.0428848 2.23821 0.0410156 3.8484V33.0149C0.0428848 34.6251 1.34759 35.9298 2.95777 35.9316H18.1242C19.7344 35.9298 21.0391 34.6251 21.041 33.0149V3.8484C21.0391 2.23821 19.7344 0.93351 18.1242 0.931641ZM2.95777 2.09829H18.1242C19.0909 2.09829 19.8743 2.88175 19.8743 3.8484V5.59824H1.20766V3.8484C1.20766 2.88175 1.99113 2.09829 2.95777 2.09829ZM19.8743 6.76489V30.0984H1.20766V6.76489H19.8743ZM18.1242 34.765H2.95777C1.99113 34.765 1.20766 33.9815 1.20766 33.0149V31.2648H19.8743V33.0149C19.8743 33.9815 19.0909 34.765 18.1242 34.765Z\" fill=\"currentColor\"/>\n      <path d=\"M11.1243 32.4317H9.95766C9.63562 32.4317 9.37446 32.6929 9.37446 33.0149C9.37446 33.3372 9.63562 33.5984 9.95766 33.5984H11.1243C11.4466 33.5984 11.7078 33.3372 11.7078 33.0149C11.7078 32.6929 11.4466 32.4317 11.1243 32.4317Z\" fill=\"currentColor\"/>\n      <path d=\"M3.54099 4.43157H4.70764C5.02994 4.43157 5.29109 4.17041 5.29109 3.84838C5.29109 3.52607 5.02994 3.26492 4.70764 3.26492H3.54099C3.21895 3.26492 2.9578 3.52607 2.9578 3.84838C2.9578 4.17041 3.21895 4.43157 3.54099 4.43157Z\" fill=\"currentColor\"/>\n      <path d=\"M7.04122 4.43157H10.5412C10.8632 4.43157 11.1243 4.17041 11.1243 3.84838C11.1243 3.52607 10.8632 3.26492 10.5412 3.26492H7.04122C6.71891 3.26492 6.45776 3.52607 6.45776 3.84838C6.45776 4.17041 6.71891 4.43157 7.04122 4.43157Z\" fill=\"currentColor\"/>\n      <path d=\"M4.12443 19.0148H5.29108C5.61311 19.0148 5.87427 19.276 5.87427 19.5983V20.7649C5.87427 21.0872 5.61311 21.3481 5.29108 21.3481H4.12443C3.80212 21.3481 3.54097 21.0872 3.54097 20.7649C3.54097 20.4426 3.27982 20.1815 2.95778 20.1815C2.63548 20.1815 2.37432 20.4426 2.37432 20.7649C2.37432 21.7313 3.15778 22.515 4.12443 22.515H5.29108C6.25745 22.515 7.04118 21.7316 7.04118 20.7649V19.5983C7.04118 18.6319 6.25772 17.8482 5.29108 17.8482H4.12443C3.80212 17.8482 3.54097 17.587 3.54097 17.265V16.0984C3.54097 15.776 3.80212 15.5149 4.12443 15.5149H5.29108C5.61311 15.5149 5.87427 15.776 5.87427 16.0984C5.87427 16.4204 6.13542 16.6815 6.45773 16.6815C6.77976 16.6815 7.04092 16.4204 7.04092 16.0984C7.04092 15.1317 6.25745 14.3482 5.29108 14.3482H4.12443C3.15778 14.3482 2.37432 15.1317 2.37432 16.0984V17.265C2.37432 18.2314 3.15778 19.0148 4.12443 19.0148Z\" fill=\"currentColor\"/>\n      <path d=\"M16.9576 21.3484H15.7912C15.4689 21.3484 15.2077 21.0872 15.2077 20.7649C15.2077 20.4429 14.9466 20.1818 14.6246 20.1818C14.3023 20.1818 14.0411 20.4429 14.0411 20.7649C14.0411 21.7316 14.8246 22.515 15.7912 22.515H16.9578C17.9242 22.515 18.7077 21.7316 18.7077 20.7649V19.5983C18.7077 18.6319 17.9242 17.8482 16.9578 17.8482H15.7912C15.4689 17.8482 15.2077 17.5873 15.2077 17.265V16.0984C15.2077 15.776 15.4689 15.5152 15.7912 15.5152H16.9578C17.2799 15.5152 17.541 15.7763 17.541 16.0984C17.541 16.4207 17.8022 16.6818 18.1245 16.6818C18.4465 16.6818 18.7077 16.4207 18.7077 16.0984C18.7077 15.132 17.9242 14.3482 16.9576 14.3482H15.7912C14.8246 14.3482 14.0411 15.1317 14.0411 16.0984V17.265C14.0411 18.2314 14.8246 19.0151 15.7912 19.0151H16.9576C17.2799 19.0151 17.541 19.2763 17.541 19.5983V20.7649C17.541 21.0872 17.2799 21.3484 16.9576 21.3484Z\" fill=\"currentColor\"/>\n      <path d=\"M8.20757 22.515C8.52987 22.515 8.79103 22.2539 8.79103 21.9316V16.0984L10.1911 17.1483C10.3985 17.304 10.6837 17.304 10.8909 17.1483L12.291 16.0984V21.9316C12.291 22.2539 12.5521 22.515 12.8744 22.515C13.1965 22.515 13.4576 22.2539 13.4576 21.9316V14.9317C13.4576 14.6094 13.1965 14.3482 12.8744 14.3482C12.7481 14.3482 12.6253 14.3894 12.5244 14.4649L10.5411 15.9526L8.55765 14.4649C8.29996 14.2716 7.9344 14.3239 7.74107 14.5816C7.66524 14.6826 7.62438 14.8054 7.62438 14.9317V21.9316C7.62438 22.2539 7.88553 22.515 8.20757 22.515Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var EmailIconComponent = /** @class */ (function (_super) {
        __extends(EmailIconComponent, _super);
        function EmailIconComponent() {
            return _super.call(this, 'email-icon') || this;
        }
        Object.defineProperty(EmailIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return EmailIconComponent;
    }(BaseIconComponent));
    EmailIconComponent.ɵfac = function EmailIconComponent_Factory(t) { return new (t || EmailIconComponent)(); };
    EmailIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailIconComponent, selectors: [["und-email-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 29 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M28.3024 17.5307L28.3024 3.13762C28.3024 1.57976 27.035 0.312317 25.4771 0.312317L3.01524 0.312362C2.23632 0.312408 1.52999 0.629248 1.01841 1.14083C0.506825 1.65241 0.189987 2.35874 0.189941 3.13766C0.18994 7.93534 0.189975 12.733 0.189942 17.5307C0.190033 19.0885 1.45743 20.3559 3.01524 20.356L25.4771 20.3559C26.2317 20.356 26.9413 20.0621 27.4749 19.5285C28.0085 18.9948 28.3024 18.2853 28.3024 17.5307ZM1.65054 18.2331C1.54157 18.0223 1.47895 17.7839 1.47895 17.5306L1.47899 3.13766C1.47904 2.56966 1.78963 2.07385 2.24912 1.80805L10.1624 9.72128L1.65054 18.2331ZM9.42645 7.16237L12.1293 7.16237C12.4853 7.16237 12.7739 6.87383 12.7739 6.51784C12.7738 6.16185 12.4853 5.87327 12.1293 5.87332L8.13735 5.87327L6.80952 4.54544L15.0501 4.54544C15.406 4.54539 15.6946 4.25685 15.6946 3.90087C15.6946 3.54492 15.4061 3.25634 15.0501 3.2563L5.52047 3.25639L3.86554 1.60146L24.6268 1.60141L15.3325 10.8958C14.7335 11.4948 13.7589 11.4948 13.1599 10.8958L9.42645 7.16237ZM25.4771 19.067L3.01524 19.0669C2.89939 19.0669 2.78686 19.0529 2.67821 19.0285L11.0739 10.6328L12.2484 11.8074C13.35 12.9089 15.1424 12.9089 16.244 11.8073L17.4185 10.6328L22.6425 15.8568L17.3679 15.8569C17.19 15.8569 17.0288 15.929 16.9121 16.0457C16.7955 16.1623 16.7234 16.3234 16.7234 16.5014C16.7234 16.8574 17.0119 17.1459 17.3679 17.146H23.931L25.8151 19.0295C25.7053 19.054 25.5923 19.067 25.4771 19.067ZM18.33 9.72128L26.2432 1.80805C26.7027 2.07389 27.0133 2.5697 27.0133 3.13766V17.5307C27.0134 17.7797 26.9542 18.0194 26.8431 18.2344L18.33 9.72128Z", "fill", "currentColor"], ["d", "M17.9256 3.90112C17.926 3.73112 17.8568 3.56523 17.7369 3.44537C17.6166 3.32505 17.4511 3.25623 17.2812 3.25669C17.1116 3.25669 16.9457 3.32505 16.8254 3.44537C16.7055 3.56523 16.6367 3.73158 16.6367 3.90112C16.6367 4.07066 16.7051 4.23655 16.8254 4.35687C16.9453 4.47673 17.1116 4.54555 17.2812 4.54555C17.4507 4.54555 17.617 4.47673 17.7369 4.35687C17.8572 4.23655 17.9256 4.07066 17.9256 3.90112Z", "fill", "currentColor"]], template: function EmailIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EmailIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-email-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 29 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M28.3024 17.5307L28.3024 3.13762C28.3024 1.57976 27.035 0.312317 25.4771 0.312317L3.01524 0.312362C2.23632 0.312408 1.52999 0.629248 1.01841 1.14083C0.506825 1.65241 0.189987 2.35874 0.189941 3.13766C0.18994 7.93534 0.189975 12.733 0.189942 17.5307C0.190033 19.0885 1.45743 20.3559 3.01524 20.356L25.4771 20.3559C26.2317 20.356 26.9413 20.0621 27.4749 19.5285C28.0085 18.9948 28.3024 18.2853 28.3024 17.5307ZM1.65054 18.2331C1.54157 18.0223 1.47895 17.7839 1.47895 17.5306L1.47899 3.13766C1.47904 2.56966 1.78963 2.07385 2.24912 1.80805L10.1624 9.72128L1.65054 18.2331ZM9.42645 7.16237L12.1293 7.16237C12.4853 7.16237 12.7739 6.87383 12.7739 6.51784C12.7738 6.16185 12.4853 5.87327 12.1293 5.87332L8.13735 5.87327L6.80952 4.54544L15.0501 4.54544C15.406 4.54539 15.6946 4.25685 15.6946 3.90087C15.6946 3.54492 15.4061 3.25634 15.0501 3.2563L5.52047 3.25639L3.86554 1.60146L24.6268 1.60141L15.3325 10.8958C14.7335 11.4948 13.7589 11.4948 13.1599 10.8958L9.42645 7.16237ZM25.4771 19.067L3.01524 19.0669C2.89939 19.0669 2.78686 19.0529 2.67821 19.0285L11.0739 10.6328L12.2484 11.8074C13.35 12.9089 15.1424 12.9089 16.244 11.8073L17.4185 10.6328L22.6425 15.8568L17.3679 15.8569C17.19 15.8569 17.0288 15.929 16.9121 16.0457C16.7955 16.1623 16.7234 16.3234 16.7234 16.5014C16.7234 16.8574 17.0119 17.1459 17.3679 17.146H23.931L25.8151 19.0295C25.7053 19.054 25.5923 19.067 25.4771 19.067ZM18.33 9.72128L26.2432 1.80805C26.7027 2.07389 27.0133 2.5697 27.0133 3.13766V17.5307C27.0134 17.7797 26.9542 18.0194 26.8431 18.2344L18.33 9.72128Z\" fill=\"currentColor\"/>\n      <path d=\"M17.9256 3.90112C17.926 3.73112 17.8568 3.56523 17.7369 3.44537C17.6166 3.32505 17.4511 3.25623 17.2812 3.25669C17.1116 3.25669 16.9457 3.32505 16.8254 3.44537C16.7055 3.56523 16.6367 3.73158 16.6367 3.90112C16.6367 4.07066 16.7051 4.23655 16.8254 4.35687C16.9453 4.47673 17.1116 4.54555 17.2812 4.54555C17.4507 4.54555 17.617 4.47673 17.7369 4.35687C17.8572 4.23655 17.9256 4.07066 17.9256 3.90112Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var DoneIconComponent = /** @class */ (function (_super) {
        __extends(DoneIconComponent, _super);
        function DoneIconComponent() {
            return _super.call(this, 'done-icon') || this;
        }
        Object.defineProperty(DoneIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return DoneIconComponent;
    }(BaseIconComponent));
    DoneIconComponent.ɵfac = function DoneIconComponent_Factory(t) { return new (t || DoneIconComponent)(); };
    DoneIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DoneIconComponent, selectors: [["und-done-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 90 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M61.7184 25.6825C64.1649 23.236 68.1458 23.236 70.5924 25.6825C73.0387 28.1289 73.0387 32.11 70.5924 34.5567L39.7558 65.3932C38.5703 66.5784 36.9946 67.231 35.3187 67.231C33.6428 67.231 32.0671 66.5786 30.8818 65.3934L17.794 52.3058C15.3475 49.8591 15.3475 45.8782 17.794 43.4317C20.2405 40.9852 24.2214 40.9852 26.668 43.4317L35.3187 52.082L61.7184 25.6825ZM37.2205 62.8576L68.0569 32.021C69.1054 30.9723 69.1054 29.2663 68.0571 28.2178C67.0085 27.1693 65.3024 27.1693 64.2537 28.2178L36.5866 55.8852C35.8863 56.5854 34.7514 56.5854 34.0509 55.8852L24.1327 45.967C23.6087 45.4428 22.9198 45.1805 22.2312 45.1805C21.5425 45.1805 20.8538 45.4426 20.3296 45.9668C19.2811 47.0153 19.2811 48.7213 20.3298 49.77L33.4174 62.8576C33.9253 63.3656 34.6006 63.6455 35.3189 63.6455C36.0371 63.6455 36.7124 63.3654 37.2205 62.8576Z", "fill", "currentColor"], ["d", "M81.2339 52.4062C80.2735 52.1615 79.2984 52.7414 79.0543 53.701C75.0895 69.2675 61.0861 80.1394 45 80.1394C44.01 80.1394 43.2072 80.942 43.2072 81.9322C43.2072 82.9223 44.01 83.725 45 83.725C62.727 83.725 78.1593 71.7426 82.5289 54.5859C82.7733 53.6266 82.1937 52.6505 81.2339 52.4062Z", "fill", "currentColor"], ["d", "M80.1395 45.0002C80.1395 44.01 80.9423 43.2074 81.9323 43.2074C82.9223 43.2074 83.7251 44.01 83.7251 45.0002C83.7251 45.5641 83.713 46.1329 83.6887 46.691C83.6471 47.6538 82.8534 48.4065 81.8989 48.4065C81.8727 48.4065 81.8465 48.4059 81.8202 48.4049C80.8309 48.3622 80.0636 47.5255 80.1065 46.5363C80.1284 46.0294 80.1395 45.5128 80.1395 45.0002Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M45 0C57.0201 0 68.3204 4.68071 76.8197 13.1801C85.3193 21.6796 90 32.9801 90 45C90 57.0199 85.3193 68.3204 76.8197 76.8199C68.3204 85.3193 57.0201 90 45 90C32.9799 90 21.6796 85.3193 13.1804 76.8199C4.68071 68.3204 0 57.0199 0 45C0 32.9801 4.68071 21.6796 13.1804 13.1801C21.6796 4.68071 32.9799 0 45 0ZM3.58559 45C3.58559 67.8361 22.1641 86.4144 45 86.4144C67.8359 86.4144 86.4144 67.8359 86.4144 45C86.4144 22.1641 67.8359 3.58559 45 3.58559C22.1641 3.58559 3.58559 22.1639 3.58559 45Z", "fill", "currentColor"]], template: function DoneIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DoneIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-done-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 90 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M61.7184 25.6825C64.1649 23.236 68.1458 23.236 70.5924 25.6825C73.0387 28.1289 73.0387 32.11 70.5924 34.5567L39.7558 65.3932C38.5703 66.5784 36.9946 67.231 35.3187 67.231C33.6428 67.231 32.0671 66.5786 30.8818 65.3934L17.794 52.3058C15.3475 49.8591 15.3475 45.8782 17.794 43.4317C20.2405 40.9852 24.2214 40.9852 26.668 43.4317L35.3187 52.082L61.7184 25.6825ZM37.2205 62.8576L68.0569 32.021C69.1054 30.9723 69.1054 29.2663 68.0571 28.2178C67.0085 27.1693 65.3024 27.1693 64.2537 28.2178L36.5866 55.8852C35.8863 56.5854 34.7514 56.5854 34.0509 55.8852L24.1327 45.967C23.6087 45.4428 22.9198 45.1805 22.2312 45.1805C21.5425 45.1805 20.8538 45.4426 20.3296 45.9668C19.2811 47.0153 19.2811 48.7213 20.3298 49.77L33.4174 62.8576C33.9253 63.3656 34.6006 63.6455 35.3189 63.6455C36.0371 63.6455 36.7124 63.3654 37.2205 62.8576Z\" fill=\"currentColor\"/>\n      <path d=\"M81.2339 52.4062C80.2735 52.1615 79.2984 52.7414 79.0543 53.701C75.0895 69.2675 61.0861 80.1394 45 80.1394C44.01 80.1394 43.2072 80.942 43.2072 81.9322C43.2072 82.9223 44.01 83.725 45 83.725C62.727 83.725 78.1593 71.7426 82.5289 54.5859C82.7733 53.6266 82.1937 52.6505 81.2339 52.4062Z\" fill=\"currentColor\"/>\n      <path d=\"M80.1395 45.0002C80.1395 44.01 80.9423 43.2074 81.9323 43.2074C82.9223 43.2074 83.7251 44.01 83.7251 45.0002C83.7251 45.5641 83.713 46.1329 83.6887 46.691C83.6471 47.6538 82.8534 48.4065 81.8989 48.4065C81.8727 48.4065 81.8465 48.4059 81.8202 48.4049C80.8309 48.3622 80.0636 47.5255 80.1065 46.5363C80.1284 46.0294 80.1395 45.5128 80.1395 45.0002Z\" fill=\"currentColor\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45 0C57.0201 0 68.3204 4.68071 76.8197 13.1801C85.3193 21.6796 90 32.9801 90 45C90 57.0199 85.3193 68.3204 76.8197 76.8199C68.3204 85.3193 57.0201 90 45 90C32.9799 90 21.6796 85.3193 13.1804 76.8199C4.68071 68.3204 0 57.0199 0 45C0 32.9801 4.68071 21.6796 13.1804 13.1801C21.6796 4.68071 32.9799 0 45 0ZM3.58559 45C3.58559 67.8361 22.1641 86.4144 45 86.4144C67.8359 86.4144 86.4144 67.8359 86.4144 45C86.4144 22.1641 67.8359 3.58559 45 3.58559C22.1641 3.58559 3.58559 22.1639 3.58559 45Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var UnidasLogoIconComponent = /** @class */ (function (_super) {
        __extends(UnidasLogoIconComponent, _super);
        function UnidasLogoIconComponent() {
            return _super.call(this, 'unidas-logo-icon') || this;
        }
        Object.defineProperty(UnidasLogoIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return UnidasLogoIconComponent;
    }(BaseIconComponent));
    UnidasLogoIconComponent.ɵfac = function UnidasLogoIconComponent_Factory(t) { return new (t || UnidasLogoIconComponent)(); };
    UnidasLogoIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UnidasLogoIconComponent, selectors: [["und-unidas-logo-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 58 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M44.1046 11.6641C43.6077 11.6641 43.1533 11.6925 42.699 11.6499C42.3725 11.6215 42.3157 11.3376 42.3441 11.0111C42.2447 11.0678 42.1737 11.0962 42.1169 11.153C40.7398 12.3314 38.8515 12.1468 37.7299 10.7129C36.509 9.1512 36.6509 6.59567 38.0991 5.26111C39.2065 4.2389 40.5268 4.01174 41.9608 4.43766C42.0601 4.46606 42.1453 4.49445 42.3015 4.55124C42.3015 3.47224 42.3015 2.43583 42.3015 1.34263C42.841 1.34263 43.3237 1.32844 43.8064 1.35683C43.9058 1.35683 44.0052 1.5414 44.0904 1.65498C44.133 1.71177 44.1046 1.81115 44.1046 1.88213C44.1046 5.01976 44.1046 8.17158 44.1046 11.3092C44.1046 11.4086 44.1046 11.508 44.1046 11.6641ZM42.3867 7.4901C42.3725 7.4901 42.3583 7.4901 42.3299 7.4901C42.3299 7.13517 42.3441 6.78023 42.3157 6.4395C42.3015 6.31172 42.2305 6.15555 42.1311 6.08456C41.4497 5.61605 40.1009 5.74382 39.5046 6.32592C38.738 7.06418 38.525 8.39874 39.0361 9.40675C39.391 10.1308 39.9589 10.4148 40.825 10.358C41.4781 10.3012 42.0459 9.86107 42.2021 9.1512C42.3157 8.5975 42.3299 8.0438 42.3867 7.4901Z", "fill", "currentColor"], ["d", "M51.1748 11.6641C50.6921 11.6641 50.252 11.7209 49.8119 11.6357C49.6273 11.6073 49.4854 11.3092 49.3576 11.1814C48.9033 11.3802 48.4206 11.6783 47.8811 11.8203C46.9724 12.0474 46.1064 11.9055 45.3539 11.2666C44.2607 10.3438 44.3317 8.01539 46.0922 7.27712C46.802 6.97898 47.5545 6.92219 48.3212 6.96478C48.6761 6.97898 49.0168 6.96478 49.3718 6.96478C49.4996 6.3117 49.0168 5.7722 48.236 5.67282C47.5403 5.58763 46.8588 5.65862 46.22 6.01356C45.8224 6.22652 45.6947 6.18392 45.4391 5.80059C45.2687 5.55924 45.1126 5.31788 44.9422 5.06233C45.5385 4.60801 46.1916 4.36666 46.8872 4.23888C47.6823 4.1111 48.4631 4.06851 49.244 4.30987C50.4792 4.679 51.1606 5.58763 51.1606 6.8796C51.1748 8.45551 51.1748 10.0314 51.1748 11.6641ZM49.4002 8.35613C48.7187 8.35613 48.0514 8.35613 47.3983 8.35613C47.2706 8.35613 47.1286 8.42711 47.015 8.4839C46.5607 8.71106 46.3335 9.17957 46.4045 9.66229C46.4755 10.074 46.8304 10.3722 47.3132 10.4431C48.6903 10.6703 49.5705 9.80426 49.4002 8.35613Z", "fill", "currentColor"], ["d", "M27.3942 4.40926C27.8627 4.40926 28.3171 4.38087 28.7714 4.42346C28.8992 4.43766 29.0269 4.60802 29.1121 4.7358C29.1689 4.83518 29.1689 4.99135 29.1831 5.16172C29.2683 5.10493 29.3109 5.06234 29.3677 5.01975C30.3615 4.11112 31.5115 4.02593 32.6899 4.50864C33.6695 4.90617 34.0812 5.78641 34.1238 6.76603C34.1806 8.34194 34.1522 9.91785 34.1522 11.4938C34.1522 11.5363 34.138 11.5789 34.1238 11.6499C33.6411 11.6499 33.1726 11.6783 32.7041 11.6357C32.4059 11.6215 32.3633 11.3518 32.3633 11.0962C32.3633 10.2444 32.3633 9.39255 32.3633 8.5407C32.3633 8.11478 32.3633 7.67466 32.3633 7.24874C32.3633 6.63825 32.1646 6.11295 31.5541 5.87159C30.9152 5.63024 30.3189 5.74381 29.822 6.21233C29.3819 6.62405 29.1973 7.14936 29.1973 7.74565C29.1831 8.89564 29.1973 10.0314 29.1973 11.1814C29.1973 11.3234 29.1973 11.4512 29.1973 11.6357C28.6862 11.6357 28.2035 11.6499 27.7208 11.6215C27.6214 11.6215 27.4936 11.4512 27.4226 11.3376C27.38 11.2666 27.38 11.1388 27.38 11.0394C27.38 8.93823 27.38 6.83701 27.38 4.7358C27.3658 4.65062 27.38 4.53704 27.3942 4.40926Z", "fill", "currentColor"], ["d", "M24.9381 4.40924C25.5486 4.40924 26.1023 4.40924 26.6843 4.40924C26.6843 6.8086 26.6843 9.20796 26.6843 11.6641C26.23 11.6641 25.7615 11.6925 25.3072 11.6499C25.1794 11.6357 25.0516 11.4228 24.9665 11.2808C24.9097 11.1956 24.9381 11.0678 24.9239 10.8833C24.7677 11.011 24.6399 11.1104 24.5263 11.2098C23.4757 12.1326 21.2042 12.0616 20.4091 10.7271C20.0826 10.1734 19.9406 9.57709 19.9264 8.93821C19.9122 7.49008 19.9264 6.05614 19.9264 4.608C19.9264 4.55122 19.9406 4.49443 19.9548 4.39504C20.4375 4.39504 20.9202 4.36665 21.4029 4.40924C21.6869 4.42344 21.7295 4.67899 21.7295 4.92035C21.7295 6.14132 21.7295 7.3765 21.7295 8.59747C21.7295 8.69685 21.7295 8.79624 21.7295 8.90981C21.7863 9.49191 21.9992 9.97462 22.5813 10.1876C23.1918 10.4005 23.7739 10.2728 24.2566 9.83265C24.6257 9.49191 24.8529 9.05179 24.8671 8.54068C24.8813 7.31971 24.8813 6.08453 24.8813 4.86356C24.9239 4.72158 24.9381 4.57961 24.9381 4.40924Z", "fill", "currentColor"], ["d", "M51.5866 10.8265C51.8705 10.5283 52.0835 10.2728 52.3106 10.0456C52.6088 9.7191 52.7366 9.7049 53.1057 9.94626C53.8298 10.4148 54.6248 10.5142 55.4625 10.3438C55.7748 10.2728 56.0588 10.145 56.0871 9.77589C56.1155 9.42095 55.8884 9.20799 55.576 9.09441C55.1501 8.93824 54.7242 8.81047 54.2841 8.68269C53.6878 8.51232 53.1057 8.34195 52.623 7.94443C51.6576 7.13518 51.6292 5.77223 52.5946 4.94878C53.347 4.3099 54.2415 4.11113 55.1927 4.16792C56.0871 4.21052 56.939 4.38088 57.7198 4.96298C57.4643 5.30371 57.2371 5.64445 56.9674 5.95679C56.8112 6.14136 56.6124 6.11296 56.4137 6.01358C55.8032 5.70124 55.1643 5.61606 54.497 5.68704C54.3693 5.70124 54.2131 5.70124 54.1421 5.77223C53.9717 5.9284 53.773 6.11296 53.7162 6.32592C53.6452 6.58148 53.8582 6.78024 54.0853 6.86543C54.5964 7.04999 55.1217 7.17777 55.6328 7.36233C56.0446 7.50431 56.4847 7.61789 56.868 7.84504C58.2026 8.6117 58.2593 10.429 56.9958 11.3092C56.4421 11.6925 55.8174 11.8771 55.1501 11.9339C54.1563 12.0049 53.2051 11.8771 52.3248 11.3944C52.0835 11.224 51.8563 11.0253 51.5866 10.8265Z", "fill", "currentColor"], ["d", "M34.6917 4.39504C35.2028 4.39504 35.6571 4.36665 36.0972 4.40924C36.225 4.42344 36.367 4.57961 36.4522 4.70739C36.5089 4.80677 36.4948 4.94874 36.4948 5.07652C36.4948 7.14934 36.4948 9.23635 36.4948 11.3092C36.4948 11.4228 36.4806 11.5363 36.4664 11.6641C35.9836 11.6641 35.5151 11.6783 35.0466 11.6641C34.8195 11.6641 34.6917 11.5221 34.6917 11.295C34.6917 11.1956 34.6917 11.0962 34.6917 10.9826C34.6917 8.93821 34.6917 6.89379 34.6917 4.84936C34.6917 4.72159 34.6917 4.59381 34.6917 4.39504Z", "fill", "currentColor"], ["d", "M35.6003 1.32843C36.154 1.32843 36.58 1.76855 36.5658 2.29386C36.5516 2.83336 36.1114 3.25928 35.5719 3.24508C35.0324 3.24508 34.6207 2.80496 34.6207 2.25127C34.6349 1.69757 35.0324 1.31424 35.6003 1.32843Z", "fill", "currentColor"], ["d", "M7.95502 15.9343C3.7098 16.0128 -0.0259882 12.4311 0.000136201 7.93449C0.0262606 3.55549 3.56612 0 7.96808 0C12.3831 0 15.923 3.55549 15.936 7.99985C15.9491 12.4573 12.2002 16.0258 7.95502 15.9343ZM7.95502 12.1174C10.2017 12.1174 12.0957 10.2482 12.1088 7.98678C12.1219 5.72538 10.2148 3.81692 7.96808 3.81692C5.70832 3.82999 3.82736 5.71231 3.82736 7.9737C3.82736 10.222 5.70832 12.1174 7.95502 12.1174Z", "fill", "currentColor"]], template: function UnidasLogoIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UnidasLogoIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-unidas-logo-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 58 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M44.1046 11.6641C43.6077 11.6641 43.1533 11.6925 42.699 11.6499C42.3725 11.6215 42.3157 11.3376 42.3441 11.0111C42.2447 11.0678 42.1737 11.0962 42.1169 11.153C40.7398 12.3314 38.8515 12.1468 37.7299 10.7129C36.509 9.1512 36.6509 6.59567 38.0991 5.26111C39.2065 4.2389 40.5268 4.01174 41.9608 4.43766C42.0601 4.46606 42.1453 4.49445 42.3015 4.55124C42.3015 3.47224 42.3015 2.43583 42.3015 1.34263C42.841 1.34263 43.3237 1.32844 43.8064 1.35683C43.9058 1.35683 44.0052 1.5414 44.0904 1.65498C44.133 1.71177 44.1046 1.81115 44.1046 1.88213C44.1046 5.01976 44.1046 8.17158 44.1046 11.3092C44.1046 11.4086 44.1046 11.508 44.1046 11.6641ZM42.3867 7.4901C42.3725 7.4901 42.3583 7.4901 42.3299 7.4901C42.3299 7.13517 42.3441 6.78023 42.3157 6.4395C42.3015 6.31172 42.2305 6.15555 42.1311 6.08456C41.4497 5.61605 40.1009 5.74382 39.5046 6.32592C38.738 7.06418 38.525 8.39874 39.0361 9.40675C39.391 10.1308 39.9589 10.4148 40.825 10.358C41.4781 10.3012 42.0459 9.86107 42.2021 9.1512C42.3157 8.5975 42.3299 8.0438 42.3867 7.4901Z\" fill=\"currentColor\"/>\n      <path d=\"M51.1748 11.6641C50.6921 11.6641 50.252 11.7209 49.8119 11.6357C49.6273 11.6073 49.4854 11.3092 49.3576 11.1814C48.9033 11.3802 48.4206 11.6783 47.8811 11.8203C46.9724 12.0474 46.1064 11.9055 45.3539 11.2666C44.2607 10.3438 44.3317 8.01539 46.0922 7.27712C46.802 6.97898 47.5545 6.92219 48.3212 6.96478C48.6761 6.97898 49.0168 6.96478 49.3718 6.96478C49.4996 6.3117 49.0168 5.7722 48.236 5.67282C47.5403 5.58763 46.8588 5.65862 46.22 6.01356C45.8224 6.22652 45.6947 6.18392 45.4391 5.80059C45.2687 5.55924 45.1126 5.31788 44.9422 5.06233C45.5385 4.60801 46.1916 4.36666 46.8872 4.23888C47.6823 4.1111 48.4631 4.06851 49.244 4.30987C50.4792 4.679 51.1606 5.58763 51.1606 6.8796C51.1748 8.45551 51.1748 10.0314 51.1748 11.6641ZM49.4002 8.35613C48.7187 8.35613 48.0514 8.35613 47.3983 8.35613C47.2706 8.35613 47.1286 8.42711 47.015 8.4839C46.5607 8.71106 46.3335 9.17957 46.4045 9.66229C46.4755 10.074 46.8304 10.3722 47.3132 10.4431C48.6903 10.6703 49.5705 9.80426 49.4002 8.35613Z\" fill=\"currentColor\"/>\n      <path d=\"M27.3942 4.40926C27.8627 4.40926 28.3171 4.38087 28.7714 4.42346C28.8992 4.43766 29.0269 4.60802 29.1121 4.7358C29.1689 4.83518 29.1689 4.99135 29.1831 5.16172C29.2683 5.10493 29.3109 5.06234 29.3677 5.01975C30.3615 4.11112 31.5115 4.02593 32.6899 4.50864C33.6695 4.90617 34.0812 5.78641 34.1238 6.76603C34.1806 8.34194 34.1522 9.91785 34.1522 11.4938C34.1522 11.5363 34.138 11.5789 34.1238 11.6499C33.6411 11.6499 33.1726 11.6783 32.7041 11.6357C32.4059 11.6215 32.3633 11.3518 32.3633 11.0962C32.3633 10.2444 32.3633 9.39255 32.3633 8.5407C32.3633 8.11478 32.3633 7.67466 32.3633 7.24874C32.3633 6.63825 32.1646 6.11295 31.5541 5.87159C30.9152 5.63024 30.3189 5.74381 29.822 6.21233C29.3819 6.62405 29.1973 7.14936 29.1973 7.74565C29.1831 8.89564 29.1973 10.0314 29.1973 11.1814C29.1973 11.3234 29.1973 11.4512 29.1973 11.6357C28.6862 11.6357 28.2035 11.6499 27.7208 11.6215C27.6214 11.6215 27.4936 11.4512 27.4226 11.3376C27.38 11.2666 27.38 11.1388 27.38 11.0394C27.38 8.93823 27.38 6.83701 27.38 4.7358C27.3658 4.65062 27.38 4.53704 27.3942 4.40926Z\" fill=\"currentColor\"/>\n      <path d=\"M24.9381 4.40924C25.5486 4.40924 26.1023 4.40924 26.6843 4.40924C26.6843 6.8086 26.6843 9.20796 26.6843 11.6641C26.23 11.6641 25.7615 11.6925 25.3072 11.6499C25.1794 11.6357 25.0516 11.4228 24.9665 11.2808C24.9097 11.1956 24.9381 11.0678 24.9239 10.8833C24.7677 11.011 24.6399 11.1104 24.5263 11.2098C23.4757 12.1326 21.2042 12.0616 20.4091 10.7271C20.0826 10.1734 19.9406 9.57709 19.9264 8.93821C19.9122 7.49008 19.9264 6.05614 19.9264 4.608C19.9264 4.55122 19.9406 4.49443 19.9548 4.39504C20.4375 4.39504 20.9202 4.36665 21.4029 4.40924C21.6869 4.42344 21.7295 4.67899 21.7295 4.92035C21.7295 6.14132 21.7295 7.3765 21.7295 8.59747C21.7295 8.69685 21.7295 8.79624 21.7295 8.90981C21.7863 9.49191 21.9992 9.97462 22.5813 10.1876C23.1918 10.4005 23.7739 10.2728 24.2566 9.83265C24.6257 9.49191 24.8529 9.05179 24.8671 8.54068C24.8813 7.31971 24.8813 6.08453 24.8813 4.86356C24.9239 4.72158 24.9381 4.57961 24.9381 4.40924Z\" fill=\"currentColor\"/>\n      <path d=\"M51.5866 10.8265C51.8705 10.5283 52.0835 10.2728 52.3106 10.0456C52.6088 9.7191 52.7366 9.7049 53.1057 9.94626C53.8298 10.4148 54.6248 10.5142 55.4625 10.3438C55.7748 10.2728 56.0588 10.145 56.0871 9.77589C56.1155 9.42095 55.8884 9.20799 55.576 9.09441C55.1501 8.93824 54.7242 8.81047 54.2841 8.68269C53.6878 8.51232 53.1057 8.34195 52.623 7.94443C51.6576 7.13518 51.6292 5.77223 52.5946 4.94878C53.347 4.3099 54.2415 4.11113 55.1927 4.16792C56.0871 4.21052 56.939 4.38088 57.7198 4.96298C57.4643 5.30371 57.2371 5.64445 56.9674 5.95679C56.8112 6.14136 56.6124 6.11296 56.4137 6.01358C55.8032 5.70124 55.1643 5.61606 54.497 5.68704C54.3693 5.70124 54.2131 5.70124 54.1421 5.77223C53.9717 5.9284 53.773 6.11296 53.7162 6.32592C53.6452 6.58148 53.8582 6.78024 54.0853 6.86543C54.5964 7.04999 55.1217 7.17777 55.6328 7.36233C56.0446 7.50431 56.4847 7.61789 56.868 7.84504C58.2026 8.6117 58.2593 10.429 56.9958 11.3092C56.4421 11.6925 55.8174 11.8771 55.1501 11.9339C54.1563 12.0049 53.2051 11.8771 52.3248 11.3944C52.0835 11.224 51.8563 11.0253 51.5866 10.8265Z\" fill=\"currentColor\"/>\n      <path d=\"M34.6917 4.39504C35.2028 4.39504 35.6571 4.36665 36.0972 4.40924C36.225 4.42344 36.367 4.57961 36.4522 4.70739C36.5089 4.80677 36.4948 4.94874 36.4948 5.07652C36.4948 7.14934 36.4948 9.23635 36.4948 11.3092C36.4948 11.4228 36.4806 11.5363 36.4664 11.6641C35.9836 11.6641 35.5151 11.6783 35.0466 11.6641C34.8195 11.6641 34.6917 11.5221 34.6917 11.295C34.6917 11.1956 34.6917 11.0962 34.6917 10.9826C34.6917 8.93821 34.6917 6.89379 34.6917 4.84936C34.6917 4.72159 34.6917 4.59381 34.6917 4.39504Z\" fill=\"currentColor\"/>\n      <path d=\"M35.6003 1.32843C36.154 1.32843 36.58 1.76855 36.5658 2.29386C36.5516 2.83336 36.1114 3.25928 35.5719 3.24508C35.0324 3.24508 34.6207 2.80496 34.6207 2.25127C34.6349 1.69757 35.0324 1.31424 35.6003 1.32843Z\" fill=\"currentColor\"/>\n      <path d=\"M7.95502 15.9343C3.7098 16.0128 -0.0259882 12.4311 0.000136201 7.93449C0.0262606 3.55549 3.56612 0 7.96808 0C12.3831 0 15.923 3.55549 15.936 7.99985C15.9491 12.4573 12.2002 16.0258 7.95502 15.9343ZM7.95502 12.1174C10.2017 12.1174 12.0957 10.2482 12.1088 7.98678C12.1219 5.72538 10.2148 3.81692 7.96808 3.81692C5.70832 3.82999 3.82736 5.71231 3.82736 7.9737C3.82736 10.222 5.70832 12.1174 7.95502 12.1174Z\" fill=\"currentColor\"/>\n    </svg>\n\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var MenuOutlinedIconComponent = /** @class */ (function (_super) {
        __extends(MenuOutlinedIconComponent, _super);
        function MenuOutlinedIconComponent() {
            return _super.call(this, 'menu-outlined-icon') || this;
        }
        Object.defineProperty(MenuOutlinedIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return MenuOutlinedIconComponent;
    }(BaseIconComponent));
    MenuOutlinedIconComponent.ɵfac = function MenuOutlinedIconComponent_Factory(t) { return new (t || MenuOutlinedIconComponent)(); };
    MenuOutlinedIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOutlinedIconComponent, selectors: [["und-menu-outlined-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 18 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.947368 0C0.947368 0 0 0 0 1C0 2 0.947368 2 0.947368 2H1.89474H17C17 2 18 2 18 1C18 0 17 0 17 0H1.89474H0.947368Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.947368 5C0.947368 5 0 5 0 6C0 7 0.947368 7 0.947368 7H1.89474H17C17 7 18 7 18 6C18 5 17 5 17 5H1.89474H0.947368Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.947368 10C0.947368 10 0 10 0 11C0 12 0.947368 12 0.947368 12H1.89474H17C17 12 18 12 18 11C18 10 17 10 17 10H1.89474H0.947368Z", "fill", "currentColor"]], template: function MenuOutlinedIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MenuOutlinedIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-menu-outlined-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 18 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.947368 0C0.947368 0 0 0 0 1C0 2 0.947368 2 0.947368 2H1.89474H17C17 2 18 2 18 1C18 0 17 0 17 0H1.89474H0.947368Z\" fill=\"currentColor\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.947368 5C0.947368 5 0 5 0 6C0 7 0.947368 7 0.947368 7H1.89474H17C17 7 18 7 18 6C18 5 17 5 17 5H1.89474H0.947368Z\" fill=\"currentColor\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.947368 10C0.947368 10 0 10 0 11C0 12 0.947368 12 0.947368 12H1.89474H17C17 12 18 12 18 11C18 10 17 10 17 10H1.89474H0.947368Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ListIconComponent = /** @class */ (function (_super) {
        __extends(ListIconComponent, _super);
        function ListIconComponent() {
            return _super.call(this, 'list-icon') || this;
        }
        Object.defineProperty(ListIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ListIconComponent;
    }(BaseIconComponent));
    ListIconComponent.ɵfac = function ListIconComponent_Factory(t) { return new (t || ListIconComponent)(); };
    ListIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListIconComponent, selectors: [["und-list-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M23.3333 0H1.66665C0.746192 0 0 0.746192 0 1.66665V3.75C0 3.98013 0.186523 4.16665 0.41665 4.16665H19.1666C19.3968 4.16665 19.5833 3.98013 19.5833 3.75C19.5833 3.51987 19.3967 3.33335 19.1666 3.33335H0.83335V1.66665C0.83335 1.2064 1.20645 0.833301 1.6667 0.833301H23.3333C23.7936 0.833301 24.1667 1.2064 24.1667 1.66665V3.3333H21.6667C21.4366 3.3333 21.25 3.51983 21.25 3.74995C21.25 3.98008 21.4366 4.1666 21.6667 4.1666H24.5833C24.8135 4.1666 25 3.98008 25 3.74995V1.66665C25 0.746192 24.2538 0 23.3333 0Z", "fill", "currentColor"], ["d", "M24.4802 5.3333C24.25 5.3333 24.0635 5.51982 24.0635 5.74995L24.1667 23.3333C24.1667 23.7936 23.7936 24.1667 23.3333 24.1667H1.66665C1.2064 24.1667 0.833301 23.7936 0.833301 23.3333L1.06343 5.74995C1.06343 5.51982 0.876904 5.3333 0.646777 5.3333C0.41665 5.3333 0.230127 5.51987 0.230127 5.74995L0 23.3333C0 24.2538 0.746192 25 1.66665 25H23.3333C24.2538 25 25 24.2538 25 23.3333L24.8968 5.74995C24.8968 5.51987 24.7103 5.3333 24.4802 5.3333Z", "fill", "currentColor"], ["d", "M2.50001 18.1667C2.50001 18.6269 2.8731 19 3.33336 19H4.58336C4.81348 19 5.00001 18.8135 5.00001 18.5834C5.00001 18.3532 4.81344 18.1667 4.58336 18.1667H3.33336V14.1667H21.6667V18.1667H6.66671C6.43658 18.1667 6.25006 18.3533 6.25006 18.5834C6.25006 18.8134 6.43658 19 6.66671 19H21.6667C22.127 19 22.5001 18.6269 22.5001 18.1667V14.1666C22.5001 13.7064 22.127 13.3333 21.6667 13.3333H3.33336C2.8731 13.3333 2.50001 13.7064 2.50001 14.1666V18.1667Z", "fill", "currentColor"], ["d", "M18.3333 20.8334C17.643 20.8334 17.0833 21.393 17.0833 22.0834C17.0833 22.7737 17.643 23.3334 18.3333 23.3334H20.8333C21.5237 23.3334 22.0833 22.7737 22.0833 22.0834C22.0833 21.393 21.5237 20.8334 20.8333 20.8334H18.3333ZM21.25 22.0834C21.25 22.3135 21.0635 22.5 20.8333 22.5H18.3333C18.1032 22.5 17.9167 22.3134 17.9167 22.0834C17.9167 21.8532 18.1032 21.6667 18.3333 21.6667H20.8333C21.0635 21.6667 21.25 21.8532 21.25 22.0834Z", "fill", "currentColor"], ["d", "M2.08334 1.66666C1.85321 1.66666 1.66669 1.85318 1.66669 2.08331C1.66669 2.31344 1.85321 2.49996 2.08334 2.49996H2.49999C2.73012 2.49996 2.91664 2.31344 2.91664 2.08331C2.91664 1.85318 2.73012 1.66666 2.49999 1.66666H2.08334Z", "fill", "currentColor"], ["d", "M4.16664 1.66666C3.93652 1.66666 3.74999 1.85318 3.74999 2.08331C3.74999 2.31344 3.93652 2.49996 4.16664 2.49996H4.58329C4.81342 2.49996 4.99994 2.31344 4.99994 2.08331C4.99994 1.85318 4.81337 1.66666 4.58329 1.66666H4.16664Z", "fill", "currentColor"], ["d", "M6.25 1.66666C6.01988 1.66666 5.83335 1.85318 5.83335 2.08331C5.83335 2.31344 6.01988 2.50001 6.25 2.50001H6.66665C6.89678 2.50001 7.0833 2.31349 7.0833 2.08336C7.0833 1.85323 6.89678 1.66671 6.66665 1.66671L6.25 1.66666Z", "fill", "currentColor"], ["d", "M2.50001 11.1666C2.50001 11.6269 2.8731 12 3.33336 12H4.58336C4.81349 12 5.00001 11.8135 5.00001 11.5833C5.00001 11.3532 4.81344 11.1667 4.58336 11.1667H3.33336V7.1667H21.6667V11.1667H6.66671C6.43658 11.1667 6.25006 11.3533 6.25006 11.5833C6.25006 11.8134 6.43658 12 6.66671 12H21.6667C22.127 12 22.5001 11.6269 22.5001 11.1666V7.16665C22.5001 6.70639 22.127 6.3333 21.6667 6.3333H3.33336C2.8731 6.3333 2.50001 6.70639 2.50001 7.16665V11.1666Z", "fill", "currentColor"]], template: function ListIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ListIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-list-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M23.3333 0H1.66665C0.746192 0 0 0.746192 0 1.66665V3.75C0 3.98013 0.186523 4.16665 0.41665 4.16665H19.1666C19.3968 4.16665 19.5833 3.98013 19.5833 3.75C19.5833 3.51987 19.3967 3.33335 19.1666 3.33335H0.83335V1.66665C0.83335 1.2064 1.20645 0.833301 1.6667 0.833301H23.3333C23.7936 0.833301 24.1667 1.2064 24.1667 1.66665V3.3333H21.6667C21.4366 3.3333 21.25 3.51983 21.25 3.74995C21.25 3.98008 21.4366 4.1666 21.6667 4.1666H24.5833C24.8135 4.1666 25 3.98008 25 3.74995V1.66665C25 0.746192 24.2538 0 23.3333 0Z\" fill=\"currentColor\"/>\n      <path d=\"M24.4802 5.3333C24.25 5.3333 24.0635 5.51982 24.0635 5.74995L24.1667 23.3333C24.1667 23.7936 23.7936 24.1667 23.3333 24.1667H1.66665C1.2064 24.1667 0.833301 23.7936 0.833301 23.3333L1.06343 5.74995C1.06343 5.51982 0.876904 5.3333 0.646777 5.3333C0.41665 5.3333 0.230127 5.51987 0.230127 5.74995L0 23.3333C0 24.2538 0.746192 25 1.66665 25H23.3333C24.2538 25 25 24.2538 25 23.3333L24.8968 5.74995C24.8968 5.51987 24.7103 5.3333 24.4802 5.3333Z\" fill=\"currentColor\"/>\n      <path d=\"M2.50001 18.1667C2.50001 18.6269 2.8731 19 3.33336 19H4.58336C4.81348 19 5.00001 18.8135 5.00001 18.5834C5.00001 18.3532 4.81344 18.1667 4.58336 18.1667H3.33336V14.1667H21.6667V18.1667H6.66671C6.43658 18.1667 6.25006 18.3533 6.25006 18.5834C6.25006 18.8134 6.43658 19 6.66671 19H21.6667C22.127 19 22.5001 18.6269 22.5001 18.1667V14.1666C22.5001 13.7064 22.127 13.3333 21.6667 13.3333H3.33336C2.8731 13.3333 2.50001 13.7064 2.50001 14.1666V18.1667Z\" fill=\"currentColor\"/>\n      <path d=\"M18.3333 20.8334C17.643 20.8334 17.0833 21.393 17.0833 22.0834C17.0833 22.7737 17.643 23.3334 18.3333 23.3334H20.8333C21.5237 23.3334 22.0833 22.7737 22.0833 22.0834C22.0833 21.393 21.5237 20.8334 20.8333 20.8334H18.3333ZM21.25 22.0834C21.25 22.3135 21.0635 22.5 20.8333 22.5H18.3333C18.1032 22.5 17.9167 22.3134 17.9167 22.0834C17.9167 21.8532 18.1032 21.6667 18.3333 21.6667H20.8333C21.0635 21.6667 21.25 21.8532 21.25 22.0834Z\" fill=\"currentColor\"/>\n      <path d=\"M2.08334 1.66666C1.85321 1.66666 1.66669 1.85318 1.66669 2.08331C1.66669 2.31344 1.85321 2.49996 2.08334 2.49996H2.49999C2.73012 2.49996 2.91664 2.31344 2.91664 2.08331C2.91664 1.85318 2.73012 1.66666 2.49999 1.66666H2.08334Z\" fill=\"currentColor\"/>\n      <path d=\"M4.16664 1.66666C3.93652 1.66666 3.74999 1.85318 3.74999 2.08331C3.74999 2.31344 3.93652 2.49996 4.16664 2.49996H4.58329C4.81342 2.49996 4.99994 2.31344 4.99994 2.08331C4.99994 1.85318 4.81337 1.66666 4.58329 1.66666H4.16664Z\" fill=\"currentColor\"/>\n      <path d=\"M6.25 1.66666C6.01988 1.66666 5.83335 1.85318 5.83335 2.08331C5.83335 2.31344 6.01988 2.50001 6.25 2.50001H6.66665C6.89678 2.50001 7.0833 2.31349 7.0833 2.08336C7.0833 1.85323 6.89678 1.66671 6.66665 1.66671L6.25 1.66666Z\" fill=\"currentColor\"/>\n      <path d=\"M2.50001 11.1666C2.50001 11.6269 2.8731 12 3.33336 12H4.58336C4.81349 12 5.00001 11.8135 5.00001 11.5833C5.00001 11.3532 4.81344 11.1667 4.58336 11.1667H3.33336V7.1667H21.6667V11.1667H6.66671C6.43658 11.1667 6.25006 11.3533 6.25006 11.5833C6.25006 11.8134 6.43658 12 6.66671 12H21.6667C22.127 12 22.5001 11.6269 22.5001 11.1666V7.16665C22.5001 6.70639 22.127 6.3333 21.6667 6.3333H3.33336C2.8731 6.3333 2.50001 6.70639 2.50001 7.16665V11.1666Z\" fill=\"currentColor\"/>\n    </svg>\n\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ExitIconComponent = /** @class */ (function (_super) {
        __extends(ExitIconComponent, _super);
        function ExitIconComponent() {
            return _super.call(this, 'exit-icon') || this;
        }
        Object.defineProperty(ExitIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ExitIconComponent;
    }(BaseIconComponent));
    ExitIconComponent.ɵfac = function ExitIconComponent_Factory(t) { return new (t || ExitIconComponent)(); };
    ExitIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExitIconComponent, selectors: [["und-exit-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M22.2806 10.7809H13.1766C12.7799 10.7809 12.4579 10.4589 12.4579 10.0622C12.4579 9.66545 12.7799 9.34347 13.1766 9.34347H22.2806C22.6773 9.34347 22.9993 9.66545 22.9993 10.0622C22.9993 10.4589 22.6773 10.7809 22.2806 10.7809Z", "fill", "currentColor"], ["d", "M18.6869 14.3745C18.5028 14.3745 18.319 14.3045 18.1789 14.1638C17.8982 13.8829 17.8982 13.4277 18.1789 13.1469L21.2648 10.0613L18.1789 6.97548C17.8982 6.69472 17.8982 6.23955 18.1789 5.9588C18.4599 5.67787 18.915 5.67787 19.1958 5.9588L22.7894 9.55244C23.0702 9.83319 23.0702 10.2884 22.7894 10.5691L19.1958 14.1627C19.0549 14.3045 18.871 14.3745 18.6869 14.3745Z", "fill", "currentColor"], ["d", "M7.66649 23.0004C7.46136 23.0004 7.26677 22.9717 7.07234 22.9113L1.30515 20.9899C0.520446 20.7158 0 19.9846 0 19.1673V1.91781C0 0.860774 0.859631 0.00114326 1.91667 0.00114326C2.12162 0.00114326 2.31621 0.0299205 2.51081 0.0902824L8.27783 2.01169C9.06271 2.28577 9.58298 3.01696 9.58298 3.8343V21.0838C9.58298 22.1408 8.72352 23.0004 7.66649 23.0004ZM1.91667 1.4386C1.65311 1.4386 1.43746 1.65425 1.43746 1.91781V19.1673C1.43746 19.3713 1.5745 19.561 1.76997 19.6291L7.51014 21.5419C7.55138 21.5553 7.60507 21.563 7.66649 21.563C7.93004 21.563 8.14552 21.3473 8.14552 21.0838V3.8343C8.14552 3.63023 8.00848 3.44054 7.81301 3.37246L2.07283 1.45966C2.0316 1.44632 1.9779 1.4386 1.91667 1.4386Z", "fill", "currentColor"], ["d", "M14.6141 7.66649C14.2173 7.66649 13.8953 7.3445 13.8953 6.94776V2.63539C13.8953 1.9751 13.3579 1.43746 12.6976 1.43746H1.91666C1.51992 1.43746 1.19793 1.11547 1.19793 0.718728C1.19793 0.321989 1.51992 0 1.91666 0H12.6976C14.1513 0 15.3328 1.18162 15.3328 2.63539V6.94776C15.3328 7.3445 15.0108 7.66649 14.6141 7.66649Z", "fill", "currentColor"], ["d", "M12.6976 20.1244H8.86425C8.46751 20.1244 8.14552 19.8024 8.14552 19.4056C8.14552 19.0089 8.46751 18.6869 8.86425 18.6869H12.6976C13.3579 18.6869 13.8953 18.1493 13.8953 17.489V13.1766C13.8953 12.7799 14.2173 12.4579 14.6141 12.4579C15.0108 12.4579 15.3328 12.7799 15.3328 13.1766V17.489C15.3328 18.9427 14.1514 20.1244 12.6976 20.1244Z", "fill", "currentColor"]], template: function ExitIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ExitIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-exit-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 23 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M22.2806 10.7809H13.1766C12.7799 10.7809 12.4579 10.4589 12.4579 10.0622C12.4579 9.66545 12.7799 9.34347 13.1766 9.34347H22.2806C22.6773 9.34347 22.9993 9.66545 22.9993 10.0622C22.9993 10.4589 22.6773 10.7809 22.2806 10.7809Z\" fill=\"currentColor\"/>\n      <path d=\"M18.6869 14.3745C18.5028 14.3745 18.319 14.3045 18.1789 14.1638C17.8982 13.8829 17.8982 13.4277 18.1789 13.1469L21.2648 10.0613L18.1789 6.97548C17.8982 6.69472 17.8982 6.23955 18.1789 5.9588C18.4599 5.67787 18.915 5.67787 19.1958 5.9588L22.7894 9.55244C23.0702 9.83319 23.0702 10.2884 22.7894 10.5691L19.1958 14.1627C19.0549 14.3045 18.871 14.3745 18.6869 14.3745Z\" fill=\"currentColor\"/>\n      <path d=\"M7.66649 23.0004C7.46136 23.0004 7.26677 22.9717 7.07234 22.9113L1.30515 20.9899C0.520446 20.7158 0 19.9846 0 19.1673V1.91781C0 0.860774 0.859631 0.00114326 1.91667 0.00114326C2.12162 0.00114326 2.31621 0.0299205 2.51081 0.0902824L8.27783 2.01169C9.06271 2.28577 9.58298 3.01696 9.58298 3.8343V21.0838C9.58298 22.1408 8.72352 23.0004 7.66649 23.0004ZM1.91667 1.4386C1.65311 1.4386 1.43746 1.65425 1.43746 1.91781V19.1673C1.43746 19.3713 1.5745 19.561 1.76997 19.6291L7.51014 21.5419C7.55138 21.5553 7.60507 21.563 7.66649 21.563C7.93004 21.563 8.14552 21.3473 8.14552 21.0838V3.8343C8.14552 3.63023 8.00848 3.44054 7.81301 3.37246L2.07283 1.45966C2.0316 1.44632 1.9779 1.4386 1.91667 1.4386Z\" fill=\"currentColor\"/>\n      <path d=\"M14.6141 7.66649C14.2173 7.66649 13.8953 7.3445 13.8953 6.94776V2.63539C13.8953 1.9751 13.3579 1.43746 12.6976 1.43746H1.91666C1.51992 1.43746 1.19793 1.11547 1.19793 0.718728C1.19793 0.321989 1.51992 0 1.91666 0H12.6976C14.1513 0 15.3328 1.18162 15.3328 2.63539V6.94776C15.3328 7.3445 15.0108 7.66649 14.6141 7.66649Z\" fill=\"currentColor\"/>\n      <path d=\"M12.6976 20.1244H8.86425C8.46751 20.1244 8.14552 19.8024 8.14552 19.4056C8.14552 19.0089 8.46751 18.6869 8.86425 18.6869H12.6976C13.3579 18.6869 13.8953 18.1493 13.8953 17.489V13.1766C13.8953 12.7799 14.2173 12.4579 14.6141 12.4579C15.0108 12.4579 15.3328 12.7799 15.3328 13.1766V17.489C15.3328 18.9427 14.1514 20.1244 12.6976 20.1244Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var HomeIconComponent = /** @class */ (function (_super) {
        __extends(HomeIconComponent, _super);
        function HomeIconComponent() {
            return _super.call(this, 'home-icon') || this;
        }
        Object.defineProperty(HomeIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return HomeIconComponent;
    }(BaseIconComponent));
    HomeIconComponent.ɵfac = function HomeIconComponent_Factory(t) { return new (t || HomeIconComponent)(); };
    HomeIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeIconComponent, selectors: [["und-home-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 27 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M20.6392 6.87907L26.7797 13.0458C27.0839 13.3537 27.0628 13.8668 26.7797 14.1505C26.6239 14.2773 26.4401 14.3498 26.2279 14.3498C25.9873 14.3498 25.8029 14.2773 25.6761 14.1505L13.5081 1.86843L1.31171 14.0358C1.00654 14.3407 0.51935 14.3618 0.23651 14.0358C-0.0888589 13.7551 -0.0686529 13.2661 0.23651 12.9612L12.9563 0.241501C13.1118 0.0875297 13.2959 0 13.5081 0C13.6919 0 13.8763 0.0845297 14.0315 0.241501L19.0968 5.33667V2.67438C19.0968 2.23673 19.4363 1.89865 19.8468 1.89865C20.2854 1.89865 20.6392 2.23668 20.6392 2.67438V6.87907Z", "fill", "currentColor"], ["d", "M21.7711 13.2179C21.7711 12.7772 22.1107 12.4391 22.5492 12.4391C22.9595 12.4391 23.299 12.7773 23.299 13.2179V24.6337C23.299 25.0442 22.9595 25.3852 22.5492 25.3852H15.5029C15.0643 25.3852 14.7248 25.0442 14.7248 24.6337V20.2901H12.2629V24.6337C12.2629 25.0442 11.9234 25.3852 11.5131 25.3852H4.43849C4.02829 25.3852 3.68871 25.0442 3.68871 24.6337V13.571C3.68871 13.1605 4.02829 12.8194 4.43849 12.8194C4.87738 12.8194 5.21664 13.1605 5.21664 13.571V23.8549H10.7208V19.5114C10.7208 19.1038 11.0743 18.7477 11.5131 18.7477H15.5029C15.9135 18.7477 16.253 19.1039 16.253 19.5114V23.8549H21.7711V13.2179Z", "fill", "currentColor"]], template: function HomeIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HomeIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-home-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 27 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M20.6392 6.87907L26.7797 13.0458C27.0839 13.3537 27.0628 13.8668 26.7797 14.1505C26.6239 14.2773 26.4401 14.3498 26.2279 14.3498C25.9873 14.3498 25.8029 14.2773 25.6761 14.1505L13.5081 1.86843L1.31171 14.0358C1.00654 14.3407 0.51935 14.3618 0.23651 14.0358C-0.0888589 13.7551 -0.0686529 13.2661 0.23651 12.9612L12.9563 0.241501C13.1118 0.0875297 13.2959 0 13.5081 0C13.6919 0 13.8763 0.0845297 14.0315 0.241501L19.0968 5.33667V2.67438C19.0968 2.23673 19.4363 1.89865 19.8468 1.89865C20.2854 1.89865 20.6392 2.23668 20.6392 2.67438V6.87907Z\" fill=\"currentColor\"/>\n      <path d=\"M21.7711 13.2179C21.7711 12.7772 22.1107 12.4391 22.5492 12.4391C22.9595 12.4391 23.299 12.7773 23.299 13.2179V24.6337C23.299 25.0442 22.9595 25.3852 22.5492 25.3852H15.5029C15.0643 25.3852 14.7248 25.0442 14.7248 24.6337V20.2901H12.2629V24.6337C12.2629 25.0442 11.9234 25.3852 11.5131 25.3852H4.43849C4.02829 25.3852 3.68871 25.0442 3.68871 24.6337V13.571C3.68871 13.1605 4.02829 12.8194 4.43849 12.8194C4.87738 12.8194 5.21664 13.1605 5.21664 13.571V23.8549H10.7208V19.5114C10.7208 19.1038 11.0743 18.7477 11.5131 18.7477H15.5029C15.9135 18.7477 16.253 19.1039 16.253 19.5114V23.8549H21.7711V13.2179Z\" fill=\"currentColor\"/>\n    </svg>\n\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var CalendarCheckIconComponent = /** @class */ (function (_super) {
        __extends(CalendarCheckIconComponent, _super);
        function CalendarCheckIconComponent() {
            return _super.call(this, 'calendar-check-icon') || this;
        }
        Object.defineProperty(CalendarCheckIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return CalendarCheckIconComponent;
    }(BaseIconComponent));
    CalendarCheckIconComponent.ɵfac = function CalendarCheckIconComponent_Factory(t) { return new (t || CalendarCheckIconComponent)(); };
    CalendarCheckIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarCheckIconComponent, selectors: [["und-calendar-check-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M5.99173 0C5.57851 0 5.23416 0.344353 5.23416 0.757576V1.97429H3.76492C1.67585 1.99725 0 3.67309 0 5.73921V21.258C0 23.3241 1.67585 25 3.74196 25H21.258C23.3241 25 25 23.3241 25 21.258C25 20.8448 24.6556 20.5005 24.2424 20.5005C23.8292 20.5005 23.4848 20.8448 23.4848 21.258C23.4848 22.4747 22.4977 23.4848 21.258 23.4848H3.74196C2.52525 23.4848 1.51515 22.4977 1.51515 21.258V5.73921C1.51515 4.5225 2.5023 3.5124 3.74196 3.5124H5.2112V4.72911C5.2112 5.14233 5.55556 5.48668 5.96878 5.48668C6.382 5.48668 6.72635 5.14233 6.72635 4.72911V3.5124H11.6621V4.72911C11.6621 5.14233 12.0064 5.48668 12.4197 5.48668C12.8329 5.48668 13.1772 5.14233 13.1772 4.72911V3.5124H18.1589V4.72911C18.1589 5.14233 18.5032 5.48668 18.9164 5.48668C19.3297 5.48668 19.674 5.14233 19.674 4.72911V3.5124L21.258 3.54242C22.4747 3.54242 23.4848 4.52956 23.4848 5.76923V16.2764C23.4848 16.6896 23.8292 17.034 24.2424 17.034C24.6556 17.034 25 16.6896 25 16.2764V5.76923C25 3.70311 23.3242 2.02727 21.258 2.02727L19.7429 1.99724V0.757576C19.7429 0.344353 19.3985 0 18.9853 0C18.5721 0 18.2277 0.344353 18.2277 0.757576V1.97429H13.2231V0.757576C13.2231 0.344353 12.8788 0 12.4656 0C12.0523 0 11.708 0.344353 11.708 0.757576V1.97429H6.74931V0.757576C6.74931 0.344353 6.40496 0 5.99173 0Z", "fill", "currentColor"], ["d", "M6.56566 14.7612C6.56566 14.9679 6.65748 15.1515 6.79522 15.2893L9.96327 18.3425C10.4224 18.7787 11.0882 19.0312 11.7309 18.9853C12.3737 18.9394 12.9936 18.618 13.3838 18.1129L13.4068 18.067L18.3196 11.18C18.4343 11.0193 18.4803 10.8127 18.4573 10.6061C18.4343 10.3994 18.3196 10.2388 18.1589 10.101C17.8145 9.84848 17.3324 9.94031 17.0799 10.2847L12.213 17.1717C12.0064 17.4013 11.7769 17.4472 11.6391 17.4702C11.5243 17.4702 11.2718 17.4702 11.0422 17.2635L7.8742 14.1873C7.73645 14.0496 7.5528 13.9807 7.34619 13.9807C7.34619 13.9807 7.34619 13.9807 7.32323 13.9807C7.11662 13.9807 6.93297 14.0725 6.79522 14.2103C6.63453 14.371 6.56566 14.5546 6.56566 14.7612Z", "fill", "currentColor"]], template: function CalendarCheckIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CalendarCheckIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-calendar-check-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M5.99173 0C5.57851 0 5.23416 0.344353 5.23416 0.757576V1.97429H3.76492C1.67585 1.99725 0 3.67309 0 5.73921V21.258C0 23.3241 1.67585 25 3.74196 25H21.258C23.3241 25 25 23.3241 25 21.258C25 20.8448 24.6556 20.5005 24.2424 20.5005C23.8292 20.5005 23.4848 20.8448 23.4848 21.258C23.4848 22.4747 22.4977 23.4848 21.258 23.4848H3.74196C2.52525 23.4848 1.51515 22.4977 1.51515 21.258V5.73921C1.51515 4.5225 2.5023 3.5124 3.74196 3.5124H5.2112V4.72911C5.2112 5.14233 5.55556 5.48668 5.96878 5.48668C6.382 5.48668 6.72635 5.14233 6.72635 4.72911V3.5124H11.6621V4.72911C11.6621 5.14233 12.0064 5.48668 12.4197 5.48668C12.8329 5.48668 13.1772 5.14233 13.1772 4.72911V3.5124H18.1589V4.72911C18.1589 5.14233 18.5032 5.48668 18.9164 5.48668C19.3297 5.48668 19.674 5.14233 19.674 4.72911V3.5124L21.258 3.54242C22.4747 3.54242 23.4848 4.52956 23.4848 5.76923V16.2764C23.4848 16.6896 23.8292 17.034 24.2424 17.034C24.6556 17.034 25 16.6896 25 16.2764V5.76923C25 3.70311 23.3242 2.02727 21.258 2.02727L19.7429 1.99724V0.757576C19.7429 0.344353 19.3985 0 18.9853 0C18.5721 0 18.2277 0.344353 18.2277 0.757576V1.97429H13.2231V0.757576C13.2231 0.344353 12.8788 0 12.4656 0C12.0523 0 11.708 0.344353 11.708 0.757576V1.97429H6.74931V0.757576C6.74931 0.344353 6.40496 0 5.99173 0Z\" fill=\"currentColor\"/>\n      <path d=\"M6.56566 14.7612C6.56566 14.9679 6.65748 15.1515 6.79522 15.2893L9.96327 18.3425C10.4224 18.7787 11.0882 19.0312 11.7309 18.9853C12.3737 18.9394 12.9936 18.618 13.3838 18.1129L13.4068 18.067L18.3196 11.18C18.4343 11.0193 18.4803 10.8127 18.4573 10.6061C18.4343 10.3994 18.3196 10.2388 18.1589 10.101C17.8145 9.84848 17.3324 9.94031 17.0799 10.2847L12.213 17.1717C12.0064 17.4013 11.7769 17.4472 11.6391 17.4702C11.5243 17.4702 11.2718 17.4702 11.0422 17.2635L7.8742 14.1873C7.73645 14.0496 7.5528 13.9807 7.34619 13.9807C7.34619 13.9807 7.34619 13.9807 7.32323 13.9807C7.11662 13.9807 6.93297 14.0725 6.79522 14.2103C6.63453 14.371 6.56566 14.5546 6.56566 14.7612Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ReportIconComponent = /** @class */ (function (_super) {
        __extends(ReportIconComponent, _super);
        function ReportIconComponent() {
            return _super.call(this, 'report-icon') || this;
        }
        Object.defineProperty(ReportIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ReportIconComponent;
    }(BaseIconComponent));
    ReportIconComponent.ɵfac = function ReportIconComponent_Factory(t) { return new (t || ReportIconComponent)(); };
    ReportIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReportIconComponent, selectors: [["und-report-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 28 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M7.69606 19.966L8.59869 20.6316C8.83622 20.8217 9.16877 20.9168 9.4538 20.9168C9.50131 20.9168 9.59632 20.9168 9.64383 20.9168C10.0239 20.8693 10.3564 20.6791 10.594 20.3939L14.632 15.1647H20.7129C20.9029 15.1647 21.1404 15.0696 21.2354 14.8795L23.5157 10.8862C23.6108 11.0764 23.8008 11.1715 24.0383 11.1715L26.8412 11.0764C27.1737 11.0764 27.4113 10.8387 27.4113 10.5059V1.28353C27.4113 0.847878 26.9504 0.545153 26.5562 0.808149L18.4801 5.18166C18.195 5.32428 18.1 5.65705 18.2425 5.94228L19.4777 8.4618C19.5252 8.60441 19.6677 8.69949 19.8102 8.74703C19.9052 8.79457 20.0478 8.79457 20.1428 8.74703L18.8126 11.1715H13.0168C12.8268 11.1715 12.6367 11.219 12.5417 11.4092L7.45853 17.9694C7.221 18.2547 7.12598 18.635 7.17349 19.0153C7.221 19.3956 7.41102 19.7284 7.69606 19.966ZM8.36115 18.6825L13.2543 12.3124H19.1451C19.3827 12.3124 19.5727 12.1698 19.6677 11.9796L22.0905 7.70119C22.1856 7.55857 22.1856 7.41596 22.1381 7.27334C22.0905 7.13073 21.9955 6.98812 21.853 6.94058C21.7105 6.8455 21.473 6.8455 21.3304 6.94058L20.2853 7.4635L19.5252 5.94228L26.2711 2.32937V10.0306L24.5609 10.0781L24.5134 8.98472C24.5134 8.65195 24.2283 8.41426 23.8958 8.41426C23.7058 8.41426 23.5157 8.50934 23.4207 8.69949L20.3803 14.0238H14.2995C14.1094 14.0238 13.9669 14.1188 13.8244 14.2615L9.59632 19.7284C9.59632 19.7284 9.44038 20 9.21627 19.7759C8.99216 19.5518 8.36115 19.1104 8.36115 19.1104C8.21394 18.963 8.20592 18.8378 8.36115 18.6825Z", "fill", "currentColor"], ["d", "M27.8863 23.1036C27.7913 23.0085 27.6488 22.9134 27.4588 22.9134H5.13071V0.570458C5.13071 0.237691 4.89318 0 4.56063 0C4.22808 0 3.99055 0.237691 3.99055 0.570458V22.9134H0.570079C0.237533 22.9134 0 23.1511 0 23.4839C0 23.8166 0.237533 24.0543 0.570079 24.0543H3.94304V27.4295C3.94304 27.7623 4.18058 28 4.51312 28C4.84567 28 5.0832 27.7623 5.0832 27.4295V24.0543H27.4113C27.7438 24.0543 27.9814 23.8166 27.9814 23.4839C28.0289 23.3413 27.9814 23.1986 27.8863 23.1036Z", "fill", "currentColor"]], template: function ReportIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ReportIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-report-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M7.69606 19.966L8.59869 20.6316C8.83622 20.8217 9.16877 20.9168 9.4538 20.9168C9.50131 20.9168 9.59632 20.9168 9.64383 20.9168C10.0239 20.8693 10.3564 20.6791 10.594 20.3939L14.632 15.1647H20.7129C20.9029 15.1647 21.1404 15.0696 21.2354 14.8795L23.5157 10.8862C23.6108 11.0764 23.8008 11.1715 24.0383 11.1715L26.8412 11.0764C27.1737 11.0764 27.4113 10.8387 27.4113 10.5059V1.28353C27.4113 0.847878 26.9504 0.545153 26.5562 0.808149L18.4801 5.18166C18.195 5.32428 18.1 5.65705 18.2425 5.94228L19.4777 8.4618C19.5252 8.60441 19.6677 8.69949 19.8102 8.74703C19.9052 8.79457 20.0478 8.79457 20.1428 8.74703L18.8126 11.1715H13.0168C12.8268 11.1715 12.6367 11.219 12.5417 11.4092L7.45853 17.9694C7.221 18.2547 7.12598 18.635 7.17349 19.0153C7.221 19.3956 7.41102 19.7284 7.69606 19.966ZM8.36115 18.6825L13.2543 12.3124H19.1451C19.3827 12.3124 19.5727 12.1698 19.6677 11.9796L22.0905 7.70119C22.1856 7.55857 22.1856 7.41596 22.1381 7.27334C22.0905 7.13073 21.9955 6.98812 21.853 6.94058C21.7105 6.8455 21.473 6.8455 21.3304 6.94058L20.2853 7.4635L19.5252 5.94228L26.2711 2.32937V10.0306L24.5609 10.0781L24.5134 8.98472C24.5134 8.65195 24.2283 8.41426 23.8958 8.41426C23.7058 8.41426 23.5157 8.50934 23.4207 8.69949L20.3803 14.0238H14.2995C14.1094 14.0238 13.9669 14.1188 13.8244 14.2615L9.59632 19.7284C9.59632 19.7284 9.44038 20 9.21627 19.7759C8.99216 19.5518 8.36115 19.1104 8.36115 19.1104C8.21394 18.963 8.20592 18.8378 8.36115 18.6825Z\" fill=\"currentColor\"/>\n      <path d=\"M27.8863 23.1036C27.7913 23.0085 27.6488 22.9134 27.4588 22.9134H5.13071V0.570458C5.13071 0.237691 4.89318 0 4.56063 0C4.22808 0 3.99055 0.237691 3.99055 0.570458V22.9134H0.570079C0.237533 22.9134 0 23.1511 0 23.4839C0 23.8166 0.237533 24.0543 0.570079 24.0543H3.94304V27.4295C3.94304 27.7623 4.18058 28 4.51312 28C4.84567 28 5.0832 27.7623 5.0832 27.4295V24.0543H27.4113C27.7438 24.0543 27.9814 23.8166 27.9814 23.4839C28.0289 23.3413 27.9814 23.1986 27.8863 23.1036Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var DocumentsIconComponent = /** @class */ (function (_super) {
        __extends(DocumentsIconComponent, _super);
        function DocumentsIconComponent() {
            return _super.call(this, 'documents-icon') || this;
        }
        Object.defineProperty(DocumentsIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return DocumentsIconComponent;
    }(BaseIconComponent));
    DocumentsIconComponent.ɵfac = function DocumentsIconComponent_Factory(t) { return new (t || DocumentsIconComponent)(); };
    DocumentsIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DocumentsIconComponent, selectors: [["und-documents-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 26 31", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M19.4045 0H1.79671C0.806005 0 0 0.806006 0 1.79671V7.90554C0 8.23631 0.268189 8.50444 0.598904 8.50444C0.92962 8.50444 1.19781 8.23631 1.19781 7.90554V1.79671C1.19781 1.46648 1.46648 1.19781 1.79671 1.19781H19.4045C19.7347 1.19781 20.0034 1.46648 20.0034 1.79671V24.076C20.0034 24.4062 19.7347 24.6749 19.4045 24.6749H1.79671C1.46648 24.6749 1.19781 24.4062 1.19781 24.076V12.9563C1.19781 12.6255 0.92962 12.3574 0.598904 12.3574C0.268189 12.3574 0 12.6255 0 12.9563V24.076C0 25.0667 0.806005 25.8727 1.79671 25.8727H19.4045C20.3952 25.8727 21.2012 25.0667 21.2012 24.076V1.79671C21.2012 0.806006 20.3952 0 19.4045 0Z", "fill", "currentColor"], ["d", "M1.02227 10.1634C0.910934 10.052 0.756416 9.98856 0.598904 9.98856C0.441393 9.98856 0.286875 10.052 0.175479 10.1634C0.0640229 10.2754 0 10.4299 0 10.5869C0 10.745 0.0640828 10.8989 0.175479 11.0109C0.286875 11.1223 0.441393 11.1864 0.598904 11.1864C0.756356 11.1864 0.910874 11.1223 1.02227 11.0109C1.13373 10.8995 1.19781 10.745 1.19781 10.5869C1.19781 10.4293 1.13367 10.2754 1.02227 10.1634Z", "fill", "currentColor"], ["d", "M2.99804 27.0741C3.15621 27.0741 3.31007 27.1381 3.42147 27.2495C3.53287 27.3609 3.59695 27.5155 3.59695 27.673C3.59695 27.8311 3.53293 27.985 3.42147 28.0964C3.31007 28.2084 3.15621 28.2719 2.99804 28.2719C2.84053 28.2719 2.68601 28.2084 2.57468 28.0964C2.46328 27.985 2.39914 27.8311 2.39914 27.673C2.39914 27.5155 2.46322 27.3609 2.57468 27.2495C2.68601 27.1381 2.84053 27.0741 2.99804 27.0741Z", "fill", "currentColor"], ["d", "M23.0017 2.39938C22.671 2.39938 22.4028 2.66751 22.4028 2.99829V26.4753C22.4028 26.8056 22.1341 27.0742 21.8039 27.0742H5.39392C5.0632 27.0742 4.79501 27.3424 4.79501 27.6732C4.79501 28.0039 5.0632 28.2721 5.39392 28.2721H21.8039C22.7946 28.2721 23.6006 27.4661 23.6006 26.4753V2.99829C23.6006 2.66751 23.3324 2.39938 23.0017 2.39938Z", "fill", "currentColor"], ["d", "M24.8022 5.39013C24.8022 5.05936 25.0704 4.79123 25.4011 4.79123C25.7318 4.79123 26 5.05936 26 5.39013V28.8672C26 29.8579 25.194 30.6639 24.2033 30.6639H5.39767C5.06696 30.6639 4.79877 30.3958 4.79877 30.065C4.79877 29.7342 5.06696 29.4661 5.39767 29.4661H24.2033C24.5335 29.4661 24.8022 29.1974 24.8022 28.8672V5.39013Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.70224 4.43188H3.95276C3.62204 4.43188 3.35385 4.70001 3.35385 5.03079V10.7803C3.35385 11.111 3.62204 11.3792 3.95276 11.3792H9.70224C10.033 11.3792 10.3011 11.111 10.3011 10.7803V5.03079C10.3011 4.70001 10.033 4.43188 9.70224 4.43188ZM9.10333 10.1814H4.55166V5.62969H9.10333V10.1814Z", "fill", "currentColor"], ["d", "M6.9282 14.0984C7.1622 13.8645 7.5413 13.8645 7.77523 14.0984C8.00911 14.3322 8.00911 14.7115 7.77523 14.9453L5.75968 16.9609C5.64727 17.0732 5.49503 17.1363 5.33614 17.1363C5.17731 17.1363 5.02501 17.0732 4.91265 16.9609L3.74886 15.7971C3.51499 15.5632 3.51499 15.184 3.74886 14.9501C3.98291 14.7163 4.36202 14.7162 4.59589 14.9501L5.33614 15.6904L6.9282 14.0984Z", "fill", "currentColor"], ["d", "M17.5879 14.9127H10.6006C10.2699 14.9127 10.0017 15.1808 10.0017 15.5116C10.0017 15.8424 10.2699 16.1105 10.6006 16.1105H17.5879C17.9186 16.1105 18.1868 15.8424 18.1868 15.5116C18.1868 15.1808 17.9186 14.9127 17.5879 14.9127Z", "fill", "currentColor"], ["d", "M13.0561 4.43188H17.2485C17.5792 4.43188 17.8474 4.70001 17.8474 5.03079C17.8474 5.36156 17.5792 5.62969 17.2485 5.62969H13.0561C12.7254 5.62969 12.4572 5.36156 12.4572 5.03079C12.4572 4.70001 12.7254 4.43188 13.0561 4.43188Z", "fill", "currentColor"], ["d", "M17.2485 7.30664H13.0561C12.7254 7.30664 12.4572 7.57477 12.4572 7.90555C12.4572 8.23632 12.7254 8.50445 13.0561 8.50445H17.2485C17.5792 8.50445 17.8474 8.23632 17.8474 7.90555C17.8474 7.57477 17.5792 7.30664 17.2485 7.30664Z", "fill", "currentColor"], ["d", "M13.0561 10.1814H17.2485C17.5792 10.1814 17.8474 10.4495 17.8474 10.7803C17.8474 11.111 17.5792 11.3792 17.2485 11.3792H13.0561C12.7254 11.3792 12.4572 11.111 12.4572 10.7803C12.4572 10.4495 12.7254 10.1814 13.0561 10.1814Z", "fill", "currentColor"], ["d", "M7.77523 18.672C7.5413 18.4382 7.1622 18.4381 6.9282 18.672L5.33614 20.2641L4.59589 19.5238C4.36202 19.2899 3.98291 19.2899 3.74886 19.5238C3.51499 19.7576 3.51499 20.1369 3.74886 20.3707L4.91265 21.5345C5.02501 21.6468 5.17731 21.7099 5.33614 21.7099C5.49503 21.7099 5.64727 21.6468 5.75968 21.5345L7.77523 19.519C8.00911 19.2851 8.00911 18.9059 7.77523 18.672Z", "fill", "currentColor"], ["d", "M10.6006 19.4644H17.5879C17.9186 19.4644 18.1868 19.7325 18.1868 20.0633C18.1868 20.3941 17.9186 20.6622 17.5879 20.6622H10.6006C10.2699 20.6622 10.0017 20.3941 10.0017 20.0633C10.0017 19.7325 10.2699 19.4644 10.6006 19.4644Z", "fill", "currentColor"]], template: function DocumentsIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelement(10, "path", 10);
                i0.ɵɵelement(11, "path", 11);
                i0.ɵɵelement(12, "path", 12);
                i0.ɵɵelement(13, "path", 13);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DocumentsIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-documents-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 26 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M19.4045 0H1.79671C0.806005 0 0 0.806006 0 1.79671V7.90554C0 8.23631 0.268189 8.50444 0.598904 8.50444C0.92962 8.50444 1.19781 8.23631 1.19781 7.90554V1.79671C1.19781 1.46648 1.46648 1.19781 1.79671 1.19781H19.4045C19.7347 1.19781 20.0034 1.46648 20.0034 1.79671V24.076C20.0034 24.4062 19.7347 24.6749 19.4045 24.6749H1.79671C1.46648 24.6749 1.19781 24.4062 1.19781 24.076V12.9563C1.19781 12.6255 0.92962 12.3574 0.598904 12.3574C0.268189 12.3574 0 12.6255 0 12.9563V24.076C0 25.0667 0.806005 25.8727 1.79671 25.8727H19.4045C20.3952 25.8727 21.2012 25.0667 21.2012 24.076V1.79671C21.2012 0.806006 20.3952 0 19.4045 0Z\" fill=\"currentColor\"/>\n      <path d=\"M1.02227 10.1634C0.910934 10.052 0.756416 9.98856 0.598904 9.98856C0.441393 9.98856 0.286875 10.052 0.175479 10.1634C0.0640229 10.2754 0 10.4299 0 10.5869C0 10.745 0.0640828 10.8989 0.175479 11.0109C0.286875 11.1223 0.441393 11.1864 0.598904 11.1864C0.756356 11.1864 0.910874 11.1223 1.02227 11.0109C1.13373 10.8995 1.19781 10.745 1.19781 10.5869C1.19781 10.4293 1.13367 10.2754 1.02227 10.1634Z\" fill=\"currentColor\"/>\n      <path d=\"M2.99804 27.0741C3.15621 27.0741 3.31007 27.1381 3.42147 27.2495C3.53287 27.3609 3.59695 27.5155 3.59695 27.673C3.59695 27.8311 3.53293 27.985 3.42147 28.0964C3.31007 28.2084 3.15621 28.2719 2.99804 28.2719C2.84053 28.2719 2.68601 28.2084 2.57468 28.0964C2.46328 27.985 2.39914 27.8311 2.39914 27.673C2.39914 27.5155 2.46322 27.3609 2.57468 27.2495C2.68601 27.1381 2.84053 27.0741 2.99804 27.0741Z\" fill=\"currentColor\"/>\n      <path d=\"M23.0017 2.39938C22.671 2.39938 22.4028 2.66751 22.4028 2.99829V26.4753C22.4028 26.8056 22.1341 27.0742 21.8039 27.0742H5.39392C5.0632 27.0742 4.79501 27.3424 4.79501 27.6732C4.79501 28.0039 5.0632 28.2721 5.39392 28.2721H21.8039C22.7946 28.2721 23.6006 27.4661 23.6006 26.4753V2.99829C23.6006 2.66751 23.3324 2.39938 23.0017 2.39938Z\" fill=\"currentColor\"/>\n      <path d=\"M24.8022 5.39013C24.8022 5.05936 25.0704 4.79123 25.4011 4.79123C25.7318 4.79123 26 5.05936 26 5.39013V28.8672C26 29.8579 25.194 30.6639 24.2033 30.6639H5.39767C5.06696 30.6639 4.79877 30.3958 4.79877 30.065C4.79877 29.7342 5.06696 29.4661 5.39767 29.4661H24.2033C24.5335 29.4661 24.8022 29.1974 24.8022 28.8672V5.39013Z\" fill=\"currentColor\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.70224 4.43188H3.95276C3.62204 4.43188 3.35385 4.70001 3.35385 5.03079V10.7803C3.35385 11.111 3.62204 11.3792 3.95276 11.3792H9.70224C10.033 11.3792 10.3011 11.111 10.3011 10.7803V5.03079C10.3011 4.70001 10.033 4.43188 9.70224 4.43188ZM9.10333 10.1814H4.55166V5.62969H9.10333V10.1814Z\" fill=\"currentColor\"/>\n      <path d=\"M6.9282 14.0984C7.1622 13.8645 7.5413 13.8645 7.77523 14.0984C8.00911 14.3322 8.00911 14.7115 7.77523 14.9453L5.75968 16.9609C5.64727 17.0732 5.49503 17.1363 5.33614 17.1363C5.17731 17.1363 5.02501 17.0732 4.91265 16.9609L3.74886 15.7971C3.51499 15.5632 3.51499 15.184 3.74886 14.9501C3.98291 14.7163 4.36202 14.7162 4.59589 14.9501L5.33614 15.6904L6.9282 14.0984Z\" fill=\"currentColor\"/>\n      <path d=\"M17.5879 14.9127H10.6006C10.2699 14.9127 10.0017 15.1808 10.0017 15.5116C10.0017 15.8424 10.2699 16.1105 10.6006 16.1105H17.5879C17.9186 16.1105 18.1868 15.8424 18.1868 15.5116C18.1868 15.1808 17.9186 14.9127 17.5879 14.9127Z\" fill=\"currentColor\"/>\n      <path d=\"M13.0561 4.43188H17.2485C17.5792 4.43188 17.8474 4.70001 17.8474 5.03079C17.8474 5.36156 17.5792 5.62969 17.2485 5.62969H13.0561C12.7254 5.62969 12.4572 5.36156 12.4572 5.03079C12.4572 4.70001 12.7254 4.43188 13.0561 4.43188Z\" fill=\"currentColor\"/>\n      <path d=\"M17.2485 7.30664H13.0561C12.7254 7.30664 12.4572 7.57477 12.4572 7.90555C12.4572 8.23632 12.7254 8.50445 13.0561 8.50445H17.2485C17.5792 8.50445 17.8474 8.23632 17.8474 7.90555C17.8474 7.57477 17.5792 7.30664 17.2485 7.30664Z\" fill=\"currentColor\"/>\n      <path d=\"M13.0561 10.1814H17.2485C17.5792 10.1814 17.8474 10.4495 17.8474 10.7803C17.8474 11.111 17.5792 11.3792 17.2485 11.3792H13.0561C12.7254 11.3792 12.4572 11.111 12.4572 10.7803C12.4572 10.4495 12.7254 10.1814 13.0561 10.1814Z\" fill=\"currentColor\"/>\n      <path d=\"M7.77523 18.672C7.5413 18.4382 7.1622 18.4381 6.9282 18.672L5.33614 20.2641L4.59589 19.5238C4.36202 19.2899 3.98291 19.2899 3.74886 19.5238C3.51499 19.7576 3.51499 20.1369 3.74886 20.3707L4.91265 21.5345C5.02501 21.6468 5.17731 21.7099 5.33614 21.7099C5.49503 21.7099 5.64727 21.6468 5.75968 21.5345L7.77523 19.519C8.00911 19.2851 8.00911 18.9059 7.77523 18.672Z\" fill=\"currentColor\"/>\n      <path d=\"M10.6006 19.4644H17.5879C17.9186 19.4644 18.1868 19.7325 18.1868 20.0633C18.1868 20.3941 17.9186 20.6622 17.5879 20.6622H10.6006C10.2699 20.6622 10.0017 20.3941 10.0017 20.0633C10.0017 19.7325 10.2699 19.4644 10.6006 19.4644Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var UserIconComponent = /** @class */ (function (_super) {
        __extends(UserIconComponent, _super);
        function UserIconComponent() {
            return _super.call(this, 'user-icon') || this;
        }
        Object.defineProperty(UserIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return UserIconComponent;
    }(BaseIconComponent));
    UserIconComponent.ɵfac = function UserIconComponent_Factory(t) { return new (t || UserIconComponent)(); };
    UserIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserIconComponent, selectors: [["und-user-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 26 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M19.1306 13.737C19.0692 13.5528 18.9259 13.4094 18.7518 13.3173C18.2503 13.0819 17.7384 12.8772 17.2164 12.7031L16.6534 12.5189L17.1243 12.1606C18.8542 10.8709 19.8471 8.89528 19.8471 6.74567C19.8574 3.02992 16.8069 0 13.0605 0C9.31397 0 6.26355 3.02992 6.26355 6.76614C6.26355 8.91575 7.25647 10.8913 8.99664 12.1811L9.46751 12.5394L8.90451 12.7134C7.33836 13.2252 5.89504 14.0134 4.62574 15.0575C2.29186 16.9717 0.664285 19.6331 0.060343 22.5606C-0.113674 23.4102 0.0910519 24.2803 0.643813 24.9457C1.18634 25.611 1.99501 26 2.86509 26H5.30133C5.70055 26 6.01787 25.6827 6.01787 25.2835C6.01787 24.8843 5.69031 24.5669 5.30133 24.5669H2.87533C2.31233 24.5669 1.95406 24.2291 1.78004 24.0244C1.5139 23.6968 1.41154 23.2772 1.49343 22.8575C2.59895 17.5756 7.33836 13.6449 12.7636 13.522C12.9786 13.5323 13.1423 13.5323 13.3164 13.522C15.0054 13.563 16.6125 13.9417 18.107 14.648C18.4755 14.822 18.9156 14.6685 19.0896 14.3C19.192 14.126 19.2022 13.9213 19.1306 13.737ZM12.8148 12.048C9.95885 11.9047 7.73757 9.5811 7.73757 6.75591C7.73757 3.83858 10.1226 1.46378 13.0605 1.46378C15.9983 1.46378 18.3833 3.83858 18.3833 6.75591C18.3833 9.5811 16.1621 11.9047 13.3368 12.048H12.8148Z", "fill", "currentColor"], ["d", "M7.55332 25.2835C7.55332 25.6827 7.87065 26 8.26986 26H23.0409C23.9314 26 24.7606 25.5906 25.3236 24.8843C25.8558 24.2189 26.2551 23.4819 25.8047 21.3016C25.7842 21.2197 25.4669 20.0118 24.648 18.589C24.5047 18.3126 24.2487 18.1591 23.9621 18.1591C23.5424 18.1591 23.1944 18.4968 23.1944 18.9268C23.1944 19.0701 23.2353 19.2134 23.307 19.326C24.5354 21.5165 24.4944 22.6425 24.4944 22.6937C24.5456 23.0724 24.4125 23.5433 24.1464 23.8709C23.9826 24.0756 23.2968 24.5669 22.7235 24.5669H8.26986C7.88088 24.5669 7.55332 24.8843 7.55332 25.2835Z", "fill", "currentColor"]], template: function UserIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-user-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M19.1306 13.737C19.0692 13.5528 18.9259 13.4094 18.7518 13.3173C18.2503 13.0819 17.7384 12.8772 17.2164 12.7031L16.6534 12.5189L17.1243 12.1606C18.8542 10.8709 19.8471 8.89528 19.8471 6.74567C19.8574 3.02992 16.8069 0 13.0605 0C9.31397 0 6.26355 3.02992 6.26355 6.76614C6.26355 8.91575 7.25647 10.8913 8.99664 12.1811L9.46751 12.5394L8.90451 12.7134C7.33836 13.2252 5.89504 14.0134 4.62574 15.0575C2.29186 16.9717 0.664285 19.6331 0.060343 22.5606C-0.113674 23.4102 0.0910519 24.2803 0.643813 24.9457C1.18634 25.611 1.99501 26 2.86509 26H5.30133C5.70055 26 6.01787 25.6827 6.01787 25.2835C6.01787 24.8843 5.69031 24.5669 5.30133 24.5669H2.87533C2.31233 24.5669 1.95406 24.2291 1.78004 24.0244C1.5139 23.6968 1.41154 23.2772 1.49343 22.8575C2.59895 17.5756 7.33836 13.6449 12.7636 13.522C12.9786 13.5323 13.1423 13.5323 13.3164 13.522C15.0054 13.563 16.6125 13.9417 18.107 14.648C18.4755 14.822 18.9156 14.6685 19.0896 14.3C19.192 14.126 19.2022 13.9213 19.1306 13.737ZM12.8148 12.048C9.95885 11.9047 7.73757 9.5811 7.73757 6.75591C7.73757 3.83858 10.1226 1.46378 13.0605 1.46378C15.9983 1.46378 18.3833 3.83858 18.3833 6.75591C18.3833 9.5811 16.1621 11.9047 13.3368 12.048H12.8148Z\" fill=\"currentColor\"/>\n      <path d=\"M7.55332 25.2835C7.55332 25.6827 7.87065 26 8.26986 26H23.0409C23.9314 26 24.7606 25.5906 25.3236 24.8843C25.8558 24.2189 26.2551 23.4819 25.8047 21.3016C25.7842 21.2197 25.4669 20.0118 24.648 18.589C24.5047 18.3126 24.2487 18.1591 23.9621 18.1591C23.5424 18.1591 23.1944 18.4968 23.1944 18.9268C23.1944 19.0701 23.2353 19.2134 23.307 19.326C24.5354 21.5165 24.4944 22.6425 24.4944 22.6937C24.5456 23.0724 24.4125 23.5433 24.1464 23.8709C23.9826 24.0756 23.2968 24.5669 22.7235 24.5669H8.26986C7.88088 24.5669 7.55332 24.8843 7.55332 25.2835Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var StoreIconComponent = /** @class */ (function (_super) {
        __extends(StoreIconComponent, _super);
        function StoreIconComponent() {
            return _super.call(this, 'store-icon') || this;
        }
        Object.defineProperty(StoreIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return StoreIconComponent;
    }(BaseIconComponent));
    StoreIconComponent.ɵfac = function StoreIconComponent_Factory(t) { return new (t || StoreIconComponent)(); };
    StoreIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StoreIconComponent, selectors: [["und-store-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 30 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M29.2079 4.62871L24.7525 3.14356C24.6535 3.14356 24.4554 3.14356 24.3564 3.14356C24.2574 3.24257 24.1584 3.34158 24.0594 3.5396C23.9604 3.83663 24.1584 4.23267 24.4554 4.33168L28.9109 5.81683V23.1436C28.9109 23.2426 28.8119 23.2426 28.8119 23.2426H26.7327V7.10396C26.7327 6.5099 26.2376 5.91584 25.6436 5.91584H4.35644C3.76238 5.91584 3.26733 6.41089 3.26733 7.10396V23.2426H1.28713C1.18812 23.2426 1.18812 23.1436 1.18812 23.1436V5.81683L14.8515 1.26238C14.9505 1.26238 15.0495 1.26238 15.1485 1.26238L22.4752 3.63861C22.6733 3.63861 22.7723 3.63861 22.8713 3.63861C22.9703 3.5396 23.1683 3.44059 23.1683 3.24257C23.2673 2.94554 23.0693 2.5495 22.7723 2.4505L15.4455 0.0742574C15.1485 -0.0247525 14.7525 -0.0247525 14.4554 0.0742574L0.792079 4.62871C0.29703 4.72772 0 5.22277 0 5.71782V23.0446C0 23.7376 0.594059 24.3317 1.28713 24.3317H28.7129C29.4059 24.3317 30 23.7376 30 23.0446V5.71782C30 5.22277 29.703 4.72772 29.2079 4.62871ZM20.396 22.6485V23.1436C20.396 23.1436 20.396 23.2426 20.297 23.2426H19.3069V22.6485H20.396ZM18.1188 22.6485V23.2426H11.6832C11.6832 23.2426 11.6832 23.2426 11.6832 23.1436V22.6485H18.1188ZM10.495 22.6485V23.1436C10.495 23.1436 10.495 23.2426 10.396 23.2426H9.40594V22.6485H10.495ZM9.90099 10.2723C9.90099 10.5693 10.198 10.8663 10.495 10.8663H25.4455V23.2426H21.4851C21.4851 23.2426 21.4851 23.2426 21.4851 23.1436V22.6485H21.5842C22.3762 22.6485 22.9703 21.9554 22.9703 21.1634V16.9059C22.9703 16.5099 22.7723 16.1139 22.4752 15.8168H22.7723C23.0693 15.8168 23.3663 15.5198 23.3663 15.2228C23.3663 14.9257 23.0693 14.6287 22.7723 14.6287H21.1881L20.9901 13.5396C20.7921 12.5495 19.901 11.8564 18.9109 11.8564H10.8911C9.90099 11.8564 9.0099 12.5495 8.81188 13.5396L8.61386 14.6287H6.93069C6.63366 14.6287 6.33663 14.9257 6.33663 15.2228C6.33663 15.5198 6.63366 15.8168 6.93069 15.8168H7.22772C6.93069 16.0149 6.73267 16.5099 6.73267 16.9059V21.0644C6.73267 21.8564 7.42574 22.5495 8.21782 22.5495H8.31683V23.1436H4.45545V10.8663H8.41584C8.71287 10.8663 9.0099 10.5693 9.0099 10.2723C9.0099 9.97525 8.71287 9.67822 8.41584 9.67822H4.45545V7.20297H25.4455V9.67822H10.495C10.099 9.67822 9.90099 9.87624 9.90099 10.2723ZM7.92079 16.9059C7.92079 16.7079 8.0198 16.6089 8.21782 16.6089H15.7426C16.0396 16.6089 16.3366 16.3119 16.3366 16.0149C16.3366 15.7178 16.0396 15.4208 15.7426 15.4208H9.60396L10 13.7376C10.099 13.2426 10.495 12.9455 10.9901 12.9455H19.0099C19.505 12.9455 19.901 13.2426 20 13.7376L20.396 15.4208H17.8218C17.5248 15.4208 17.2277 15.7178 17.2277 16.0149C17.2277 16.3119 17.5248 16.6089 17.8218 16.6089H21.7822C21.8812 16.6089 21.9802 16.7079 21.9802 16.8069V21.0644C21.9802 21.1634 21.8812 21.2624 21.7822 21.2624H8.21782C8.0198 21.2624 7.92079 21.1634 7.92079 20.9653V16.9059Z", "fill", "currentColor"], ["d", "M9.80198 20.372C10.6931 20.372 11.4851 19.58 11.4851 18.5899C11.4851 17.5998 10.6931 16.8077 9.80198 16.8077C8.91089 16.8077 8.11881 17.5998 8.11881 18.5899C8.11881 19.58 8.91089 20.372 9.80198 20.372ZM9.80198 18.0948C10.099 18.0948 10.297 18.2928 10.297 18.6889C10.297 19.0849 10.099 19.2829 9.80198 19.2829C9.50495 19.2829 9.30693 19.0849 9.30693 18.6889C9.30693 18.2928 9.50495 18.0948 9.80198 18.0948Z", "fill", "currentColor"], ["d", "M20 20.372C20.8911 20.372 21.6832 19.58 21.6832 18.5899C21.6832 17.5998 20.8911 16.8077 20 16.8077C19.1089 16.8077 18.3168 17.5998 18.3168 18.5899C18.3168 19.58 19.0099 20.372 20 20.372ZM20 18.0948C20.297 18.0948 20.4951 18.2928 20.4951 18.6889C20.4951 19.0849 20.297 19.2829 20 19.2829C19.703 19.2829 19.505 19.0849 19.505 18.6889C19.505 18.2928 19.703 18.0948 20 18.0948Z", "fill", "currentColor"], ["d", "M12.4752 21.0651H17.3267C17.7228 21.0651 18.1188 20.6691 18.1188 20.273V19.1839C18.1188 18.7879 17.8218 18.3918 17.3267 18.3918H12.4752C12.0792 18.3918 11.6832 18.7879 11.6832 19.1839V20.273C11.6832 20.7681 12.0792 21.0651 12.4752 21.0651ZM12.8713 19.877V19.58H16.9307V19.877H12.8713Z", "fill", "currentColor"]], template: function StoreIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StoreIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-store-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 30 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M29.2079 4.62871L24.7525 3.14356C24.6535 3.14356 24.4554 3.14356 24.3564 3.14356C24.2574 3.24257 24.1584 3.34158 24.0594 3.5396C23.9604 3.83663 24.1584 4.23267 24.4554 4.33168L28.9109 5.81683V23.1436C28.9109 23.2426 28.8119 23.2426 28.8119 23.2426H26.7327V7.10396C26.7327 6.5099 26.2376 5.91584 25.6436 5.91584H4.35644C3.76238 5.91584 3.26733 6.41089 3.26733 7.10396V23.2426H1.28713C1.18812 23.2426 1.18812 23.1436 1.18812 23.1436V5.81683L14.8515 1.26238C14.9505 1.26238 15.0495 1.26238 15.1485 1.26238L22.4752 3.63861C22.6733 3.63861 22.7723 3.63861 22.8713 3.63861C22.9703 3.5396 23.1683 3.44059 23.1683 3.24257C23.2673 2.94554 23.0693 2.5495 22.7723 2.4505L15.4455 0.0742574C15.1485 -0.0247525 14.7525 -0.0247525 14.4554 0.0742574L0.792079 4.62871C0.29703 4.72772 0 5.22277 0 5.71782V23.0446C0 23.7376 0.594059 24.3317 1.28713 24.3317H28.7129C29.4059 24.3317 30 23.7376 30 23.0446V5.71782C30 5.22277 29.703 4.72772 29.2079 4.62871ZM20.396 22.6485V23.1436C20.396 23.1436 20.396 23.2426 20.297 23.2426H19.3069V22.6485H20.396ZM18.1188 22.6485V23.2426H11.6832C11.6832 23.2426 11.6832 23.2426 11.6832 23.1436V22.6485H18.1188ZM10.495 22.6485V23.1436C10.495 23.1436 10.495 23.2426 10.396 23.2426H9.40594V22.6485H10.495ZM9.90099 10.2723C9.90099 10.5693 10.198 10.8663 10.495 10.8663H25.4455V23.2426H21.4851C21.4851 23.2426 21.4851 23.2426 21.4851 23.1436V22.6485H21.5842C22.3762 22.6485 22.9703 21.9554 22.9703 21.1634V16.9059C22.9703 16.5099 22.7723 16.1139 22.4752 15.8168H22.7723C23.0693 15.8168 23.3663 15.5198 23.3663 15.2228C23.3663 14.9257 23.0693 14.6287 22.7723 14.6287H21.1881L20.9901 13.5396C20.7921 12.5495 19.901 11.8564 18.9109 11.8564H10.8911C9.90099 11.8564 9.0099 12.5495 8.81188 13.5396L8.61386 14.6287H6.93069C6.63366 14.6287 6.33663 14.9257 6.33663 15.2228C6.33663 15.5198 6.63366 15.8168 6.93069 15.8168H7.22772C6.93069 16.0149 6.73267 16.5099 6.73267 16.9059V21.0644C6.73267 21.8564 7.42574 22.5495 8.21782 22.5495H8.31683V23.1436H4.45545V10.8663H8.41584C8.71287 10.8663 9.0099 10.5693 9.0099 10.2723C9.0099 9.97525 8.71287 9.67822 8.41584 9.67822H4.45545V7.20297H25.4455V9.67822H10.495C10.099 9.67822 9.90099 9.87624 9.90099 10.2723ZM7.92079 16.9059C7.92079 16.7079 8.0198 16.6089 8.21782 16.6089H15.7426C16.0396 16.6089 16.3366 16.3119 16.3366 16.0149C16.3366 15.7178 16.0396 15.4208 15.7426 15.4208H9.60396L10 13.7376C10.099 13.2426 10.495 12.9455 10.9901 12.9455H19.0099C19.505 12.9455 19.901 13.2426 20 13.7376L20.396 15.4208H17.8218C17.5248 15.4208 17.2277 15.7178 17.2277 16.0149C17.2277 16.3119 17.5248 16.6089 17.8218 16.6089H21.7822C21.8812 16.6089 21.9802 16.7079 21.9802 16.8069V21.0644C21.9802 21.1634 21.8812 21.2624 21.7822 21.2624H8.21782C8.0198 21.2624 7.92079 21.1634 7.92079 20.9653V16.9059Z\" fill=\"currentColor\"/>\n      <path d=\"M9.80198 20.372C10.6931 20.372 11.4851 19.58 11.4851 18.5899C11.4851 17.5998 10.6931 16.8077 9.80198 16.8077C8.91089 16.8077 8.11881 17.5998 8.11881 18.5899C8.11881 19.58 8.91089 20.372 9.80198 20.372ZM9.80198 18.0948C10.099 18.0948 10.297 18.2928 10.297 18.6889C10.297 19.0849 10.099 19.2829 9.80198 19.2829C9.50495 19.2829 9.30693 19.0849 9.30693 18.6889C9.30693 18.2928 9.50495 18.0948 9.80198 18.0948Z\" fill=\"currentColor\"/>\n      <path d=\"M20 20.372C20.8911 20.372 21.6832 19.58 21.6832 18.5899C21.6832 17.5998 20.8911 16.8077 20 16.8077C19.1089 16.8077 18.3168 17.5998 18.3168 18.5899C18.3168 19.58 19.0099 20.372 20 20.372ZM20 18.0948C20.297 18.0948 20.4951 18.2928 20.4951 18.6889C20.4951 19.0849 20.297 19.2829 20 19.2829C19.703 19.2829 19.505 19.0849 19.505 18.6889C19.505 18.2928 19.703 18.0948 20 18.0948Z\" fill=\"currentColor\"/>\n      <path d=\"M12.4752 21.0651H17.3267C17.7228 21.0651 18.1188 20.6691 18.1188 20.273V19.1839C18.1188 18.7879 17.8218 18.3918 17.3267 18.3918H12.4752C12.0792 18.3918 11.6832 18.7879 11.6832 19.1839V20.273C11.6832 20.7681 12.0792 21.0651 12.4752 21.0651ZM12.8713 19.877V19.58H16.9307V19.877H12.8713Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var SupportIconComponent = /** @class */ (function (_super) {
        __extends(SupportIconComponent, _super);
        function SupportIconComponent() {
            return _super.call(this, 'support-icon') || this;
        }
        Object.defineProperty(SupportIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return SupportIconComponent;
    }(BaseIconComponent));
    SupportIconComponent.ɵfac = function SupportIconComponent_Factory(t) { return new (t || SupportIconComponent)(); };
    SupportIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SupportIconComponent, selectors: [["und-support-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 29 29", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M5.83828 16.0263H6.41254V14.7862H5.83828C4.59406 14.7862 3.63696 13.7368 3.54125 12.4967V7.25C3.54125 3.91118 6.22112 1.14474 9.66667 1.14474C13.1122 1.14474 15.6964 3.81579 15.6964 7.25V12.4967C15.6964 13.7368 14.6436 14.6908 13.495 14.7862H12.9208V16.0263H13.495C15.4092 16.0263 16.9406 14.5 17.0363 12.4967V7.25C17.0363 3.24342 13.7822 0 9.66667 0C5.55115 0 2.39274 3.24342 2.39274 7.25V12.4967C2.39274 14.5 3.92409 16.0263 5.83828 16.0263Z", "fill", "currentColor"], ["d", "M4.7125 22.0362L3.54125 21.3684L3.15842 22.0362C2.10561 23.7533 2.20132 25.9474 3.34983 27.5691V29H4.59406V27.2829C4.59406 27.1875 4.56943 26.9934 4.49835 26.9013C3.54125 25.6612 3.44554 23.9441 4.30693 22.7039L4.7125 22.0362Z", "fill", "currentColor"], ["d", "M23.736 2.38487H20.099V3.625H23.736V2.38487Z", "fill", "currentColor"], ["d", "M26.6073 2.38487H24.4059V3.625H26.6073V2.38487Z", "fill", "currentColor"], ["d", "M26.6073 4.29276H20.099V5.53289H26.6073V4.29276Z", "fill", "currentColor"], ["d", "M23.736 6.20066H20.099V7.44079H23.736V6.20066Z", "fill", "currentColor"], ["d", "M26.4158 0H20.1947C18.7591 0 17.7063 1.14474 17.6106 2.48026V7.25C17.6106 8.68092 18.7591 9.73026 20.1947 9.73026H21.0561V11.5428C21.0561 11.8289 21.1753 12.0624 21.4389 12.1151C21.6715 12.1617 21.9435 12.0897 22.1089 11.9243L24.3102 9.73026H26.4158C27.8515 9.73026 28.9043 8.58553 29 7.25V2.48026C29 1.14474 27.8515 0 26.4158 0ZM21.6304 8.58553H20.1947C19.5248 8.58553 18.9505 8.01316 18.9505 7.25V2.48026C18.9505 1.8125 19.5248 1.14474 20.1947 1.14474H26.4158C27.0858 1.14474 27.6601 1.71711 27.6601 2.48026V7.25C27.7558 8.01316 27.1815 8.58553 26.4158 8.58553H24.0231C23.8317 8.58553 23.736 8.68092 23.5446 8.77632L22.2046 10.1118V9.15789C22.3003 8.87171 22.0132 8.58553 21.6304 8.58553Z", "fill", "currentColor"], ["d", "M15.8878 21.3684L14.835 22.0362L15.2178 22.7039C16.0792 24.0395 15.9835 25.7566 15.0264 26.9013C14.9307 26.9967 14.9307 27.1875 14.9307 27.2829V29H16.1749V27.5691C17.3234 25.9474 17.4191 23.7533 16.3663 22.0362L15.8878 21.3684Z", "fill", "currentColor"], ["d", "M28.33 16.2171H24.0231C22.1089 16.2171 20.6733 17.648 20.5776 19.5559L19.429 21.6546V20.2237C19.429 18.3158 17.8977 16.7895 15.8878 16.6941C14.8601 16.6941 13.9375 16.6941 12.9208 16.6941C12.4422 16.6941 12.0594 16.3125 12.0594 15.9309V14.8816C13.495 14.023 14.4521 12.4013 14.4521 10.6842V6.86842C14.4521 6.00987 14.2607 5.24671 13.8779 4.57895C13.6865 4.29276 13.3993 4.19737 13.1122 4.29276C13.1122 4.29276 5.16832 8.02179 4.9769 8.10855C4.78548 8.19531 4.78548 8.26953 4.78548 8.58553V10.6842C4.78548 12.4013 5.74257 14.023 7.17822 14.8816V15.9309C7.17822 16.4079 6.79538 16.6941 6.31683 16.6941H3.44554C1.53135 16.6941 0 18.2204 0 20.2237V29H1.24422V20.2237C1.24422 18.9836 2.29703 18.0296 3.54125 18.0296H4.9769L9.18812 23.8487C9.18812 23.8487 9.42878 24.1667 9.66667 24.1667C9.90456 24.1667 10.1452 23.8487 10.1452 23.8487L14.6436 17.9342H15.8878C17.132 17.9342 18.0891 18.9836 18.0891 20.1283V23.9441C18.0891 24.5355 19.0387 24.9131 19.3333 24.3257L21.5347 20.3191H23.9274L19.333 29H20.7687L25.363 20.3191H25.4587C27.3729 20.3191 28.9043 18.7928 29 16.7895C29 16.5033 28.7129 16.2171 28.33 16.2171ZM27.6601 17.4572C27.3729 18.4112 26.5116 19.0789 25.4587 19.0789H21.8218C22.1089 18.125 22.9703 17.4572 24.0231 17.4572H27.6601ZM11.0066 20.7961L9.76238 22.5132L8.51815 20.7961H11.0066ZM8.42244 15.8355V15.3586C9.28383 15.5493 10.1452 15.5493 11.0066 15.3586V15.8355C11.0066 16.9803 11.9637 17.9342 13.0165 17.9342H13.1122L11.868 19.5559H7.65677L6.50825 17.9342C7.56106 17.8388 8.42244 16.9803 8.42244 15.8355ZM9.66667 14.3092C7.65676 14.3092 5.93399 12.6875 5.93399 10.5888V8.9671L13.1122 5.62829C13.3036 6.00987 13.3993 6.39145 13.3993 6.77303V10.5888C13.3993 12.6875 11.7723 14.3092 9.66667 14.3092Z", "fill", "currentColor"]], template: function SupportIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SupportIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-support-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M5.83828 16.0263H6.41254V14.7862H5.83828C4.59406 14.7862 3.63696 13.7368 3.54125 12.4967V7.25C3.54125 3.91118 6.22112 1.14474 9.66667 1.14474C13.1122 1.14474 15.6964 3.81579 15.6964 7.25V12.4967C15.6964 13.7368 14.6436 14.6908 13.495 14.7862H12.9208V16.0263H13.495C15.4092 16.0263 16.9406 14.5 17.0363 12.4967V7.25C17.0363 3.24342 13.7822 0 9.66667 0C5.55115 0 2.39274 3.24342 2.39274 7.25V12.4967C2.39274 14.5 3.92409 16.0263 5.83828 16.0263Z\" fill=\"currentColor\"/>\n      <path d=\"M4.7125 22.0362L3.54125 21.3684L3.15842 22.0362C2.10561 23.7533 2.20132 25.9474 3.34983 27.5691V29H4.59406V27.2829C4.59406 27.1875 4.56943 26.9934 4.49835 26.9013C3.54125 25.6612 3.44554 23.9441 4.30693 22.7039L4.7125 22.0362Z\" fill=\"currentColor\"/>\n      <path d=\"M23.736 2.38487H20.099V3.625H23.736V2.38487Z\" fill=\"currentColor\"/>\n      <path d=\"M26.6073 2.38487H24.4059V3.625H26.6073V2.38487Z\" fill=\"currentColor\"/>\n      <path d=\"M26.6073 4.29276H20.099V5.53289H26.6073V4.29276Z\" fill=\"currentColor\"/>\n      <path d=\"M23.736 6.20066H20.099V7.44079H23.736V6.20066Z\" fill=\"currentColor\"/>\n      <path d=\"M26.4158 0H20.1947C18.7591 0 17.7063 1.14474 17.6106 2.48026V7.25C17.6106 8.68092 18.7591 9.73026 20.1947 9.73026H21.0561V11.5428C21.0561 11.8289 21.1753 12.0624 21.4389 12.1151C21.6715 12.1617 21.9435 12.0897 22.1089 11.9243L24.3102 9.73026H26.4158C27.8515 9.73026 28.9043 8.58553 29 7.25V2.48026C29 1.14474 27.8515 0 26.4158 0ZM21.6304 8.58553H20.1947C19.5248 8.58553 18.9505 8.01316 18.9505 7.25V2.48026C18.9505 1.8125 19.5248 1.14474 20.1947 1.14474H26.4158C27.0858 1.14474 27.6601 1.71711 27.6601 2.48026V7.25C27.7558 8.01316 27.1815 8.58553 26.4158 8.58553H24.0231C23.8317 8.58553 23.736 8.68092 23.5446 8.77632L22.2046 10.1118V9.15789C22.3003 8.87171 22.0132 8.58553 21.6304 8.58553Z\" fill=\"currentColor\"/>\n      <path d=\"M15.8878 21.3684L14.835 22.0362L15.2178 22.7039C16.0792 24.0395 15.9835 25.7566 15.0264 26.9013C14.9307 26.9967 14.9307 27.1875 14.9307 27.2829V29H16.1749V27.5691C17.3234 25.9474 17.4191 23.7533 16.3663 22.0362L15.8878 21.3684Z\" fill=\"currentColor\"/>\n      <path d=\"M28.33 16.2171H24.0231C22.1089 16.2171 20.6733 17.648 20.5776 19.5559L19.429 21.6546V20.2237C19.429 18.3158 17.8977 16.7895 15.8878 16.6941C14.8601 16.6941 13.9375 16.6941 12.9208 16.6941C12.4422 16.6941 12.0594 16.3125 12.0594 15.9309V14.8816C13.495 14.023 14.4521 12.4013 14.4521 10.6842V6.86842C14.4521 6.00987 14.2607 5.24671 13.8779 4.57895C13.6865 4.29276 13.3993 4.19737 13.1122 4.29276C13.1122 4.29276 5.16832 8.02179 4.9769 8.10855C4.78548 8.19531 4.78548 8.26953 4.78548 8.58553V10.6842C4.78548 12.4013 5.74257 14.023 7.17822 14.8816V15.9309C7.17822 16.4079 6.79538 16.6941 6.31683 16.6941H3.44554C1.53135 16.6941 0 18.2204 0 20.2237V29H1.24422V20.2237C1.24422 18.9836 2.29703 18.0296 3.54125 18.0296H4.9769L9.18812 23.8487C9.18812 23.8487 9.42878 24.1667 9.66667 24.1667C9.90456 24.1667 10.1452 23.8487 10.1452 23.8487L14.6436 17.9342H15.8878C17.132 17.9342 18.0891 18.9836 18.0891 20.1283V23.9441C18.0891 24.5355 19.0387 24.9131 19.3333 24.3257L21.5347 20.3191H23.9274L19.333 29H20.7687L25.363 20.3191H25.4587C27.3729 20.3191 28.9043 18.7928 29 16.7895C29 16.5033 28.7129 16.2171 28.33 16.2171ZM27.6601 17.4572C27.3729 18.4112 26.5116 19.0789 25.4587 19.0789H21.8218C22.1089 18.125 22.9703 17.4572 24.0231 17.4572H27.6601ZM11.0066 20.7961L9.76238 22.5132L8.51815 20.7961H11.0066ZM8.42244 15.8355V15.3586C9.28383 15.5493 10.1452 15.5493 11.0066 15.3586V15.8355C11.0066 16.9803 11.9637 17.9342 13.0165 17.9342H13.1122L11.868 19.5559H7.65677L6.50825 17.9342C7.56106 17.8388 8.42244 16.9803 8.42244 15.8355ZM9.66667 14.3092C7.65676 14.3092 5.93399 12.6875 5.93399 10.5888V8.9671L13.1122 5.62829C13.3036 6.00987 13.3993 6.39145 13.3993 6.77303V10.5888C13.3993 12.6875 11.7723 14.3092 9.66667 14.3092Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ArrowUpIconComponent = /** @class */ (function (_super) {
        __extends(ArrowUpIconComponent, _super);
        function ArrowUpIconComponent() {
            return _super.call(this, 'arrow-up-icon') || this;
        }
        Object.defineProperty(ArrowUpIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ArrowUpIconComponent;
    }(BaseIconComponent));
    ArrowUpIconComponent.ɵfac = function ArrowUpIconComponent_Factory(t) { return new (t || ArrowUpIconComponent)(); };
    ArrowUpIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ArrowUpIconComponent, selectors: [["und-arrow-up-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 15 9", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8.21621 0.457102C7.8237 0.0543175 7.17635 0.0543186 6.78384 0.457104L1.06902 6.32155C0.690598 6.70988 0.6906 7.32905 1.06902 7.71738L1.33199 7.98723C1.7245 8.39002 2.37185 8.39002 2.76436 7.98723L6.78384 3.86251C7.17635 3.45972 7.8237 3.45972 8.21621 3.86251L12.2357 7.98723C12.6282 8.39002 13.2756 8.39002 13.6681 7.98723L13.931 7.71738C14.3095 7.32905 14.3095 6.70988 13.931 6.32155L8.21621 0.457102Z", "fill", "currentColor"]], template: function ArrowUpIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ArrowUpIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-arrow-up-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 15 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.21621 0.457102C7.8237 0.0543175 7.17635 0.0543186 6.78384 0.457104L1.06902 6.32155C0.690598 6.70988 0.6906 7.32905 1.06902 7.71738L1.33199 7.98723C1.7245 8.39002 2.37185 8.39002 2.76436 7.98723L6.78384 3.86251C7.17635 3.45972 7.8237 3.45972 8.21621 3.86251L12.2357 7.98723C12.6282 8.39002 13.2756 8.39002 13.6681 7.98723L13.931 7.71738C14.3095 7.32905 14.3095 6.70988 13.931 6.32155L8.21621 0.457102Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var CalendarSearchIconComponent = /** @class */ (function (_super) {
        __extends(CalendarSearchIconComponent, _super);
        function CalendarSearchIconComponent() {
            return _super.call(this, 'calendar-search-icon') || this;
        }
        Object.defineProperty(CalendarSearchIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return CalendarSearchIconComponent;
    }(BaseIconComponent));
    CalendarSearchIconComponent.ɵfac = function CalendarSearchIconComponent_Factory(t) { return new (t || CalendarSearchIconComponent)(); };
    CalendarSearchIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CalendarSearchIconComponent, selectors: [["und-calendar-search-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 17 17", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M9.92773 10.5254C10.2945 10.5254 10.5918 10.2281 10.5918 9.86133C10.5918 9.49458 10.2945 9.19727 9.92773 9.19727C9.56098 9.19727 9.26367 9.49458 9.26367 9.86133C9.26367 10.2281 9.56098 10.5254 9.92773 10.5254Z", "fill", "currentColor"], ["d", "M9.92773 7.63672C10.2945 7.63672 10.5918 7.33941 10.5918 6.97266C10.5918 6.6059 10.2945 6.30859 9.92773 6.30859C9.56098 6.30859 9.26367 6.6059 9.26367 6.97266C9.26367 7.33941 9.56098 7.63672 9.92773 7.63672Z", "fill", "currentColor"], ["d", "M7.03906 10.5254C7.40581 10.5254 7.70312 10.2281 7.70312 9.86133C7.70312 9.49458 7.40581 9.19727 7.03906 9.19727C6.67231 9.19727 6.375 9.49458 6.375 9.86133C6.375 10.2281 6.67231 10.5254 7.03906 10.5254Z", "fill", "currentColor"], ["d", "M7.03906 7.63672C7.40581 7.63672 7.70312 7.33941 7.70312 6.97266C7.70312 6.6059 7.40581 6.30859 7.03906 6.30859C6.67231 6.30859 6.375 6.6059 6.375 6.97266C6.375 7.33941 6.67231 7.63672 7.03906 7.63672Z", "fill", "currentColor"], ["d", "M7.03906 13.4141C7.40581 13.4141 7.70312 13.1168 7.70312 12.75C7.70312 12.3832 7.40581 12.0859 7.03906 12.0859C6.67231 12.0859 6.375 12.3832 6.375 12.75C6.375 13.1168 6.67231 13.4141 7.03906 13.4141Z", "fill", "currentColor"], ["d", "M12.8164 7.63672C13.1832 7.63672 13.4805 7.33941 13.4805 6.97266C13.4805 6.6059 13.1832 6.30859 12.8164 6.30859C12.4497 6.30859 12.1523 6.6059 12.1523 6.97266C12.1523 7.33941 12.4497 7.63672 12.8164 7.63672Z", "fill", "currentColor"], ["d", "M4.15039 7.63672C4.51714 7.63672 4.81445 7.33941 4.81445 6.97266C4.81445 6.6059 4.51714 6.30859 4.15039 6.30859C3.78364 6.30859 3.48633 6.6059 3.48633 6.97266C3.48633 7.33941 3.78364 7.63672 4.15039 7.63672Z", "fill", "currentColor"], ["d", "M14.0116 9.76172C12.3639 9.76172 11.0233 11.1023 11.0233 12.75C11.0233 13.308 11.1773 13.8308 11.4446 14.2782L9.85647 15.8664C9.59716 16.1257 9.59716 16.5461 9.85647 16.8055C9.98617 16.9352 10.1561 17 10.3261 17C10.496 17 10.666 16.9352 10.7956 16.8055L12.3612 15.2399C12.8345 15.5546 13.4019 15.7383 14.0116 15.7383C15.6594 15.7383 16.9999 14.3977 16.9999 12.75C16.9999 11.1023 15.6594 9.76172 14.0116 9.76172ZM14.0116 14.4102C13.0962 14.4102 12.3515 13.6654 12.3515 12.75C12.3515 11.8346 13.0962 11.0898 14.0116 11.0898C14.927 11.0898 15.6718 11.8346 15.6718 12.75C15.6718 13.6654 14.927 14.4102 14.0116 14.4102Z", "fill", "currentColor"], ["d", "M4.15039 13.4141C4.51714 13.4141 4.81445 13.1168 4.81445 12.75C4.81445 12.3832 4.51714 12.0859 4.15039 12.0859C3.78364 12.0859 3.48633 12.3832 3.48633 12.75C3.48633 13.1168 3.78364 13.4141 4.15039 13.4141Z", "fill", "currentColor"], ["d", "M14.3438 1.32812H13.4805V0.664062C13.4805 0.297301 13.1832 0 12.8164 0C12.4496 0 12.1523 0.297301 12.1523 0.664062V1.32812H9.13086V0.664062C9.13086 0.297301 8.83356 0 8.4668 0C8.10003 0 7.80273 0.297301 7.80273 0.664062V1.32812H4.81445V0.664062C4.81445 0.297301 4.51715 0 4.15039 0C3.78363 0 3.48633 0.297301 3.48633 0.664062V1.32812H2.65625C1.19159 1.32812 0 2.51972 0 3.98438V14.3438C0 15.8084 1.19159 17 2.65625 17H7.00586C7.37262 17 7.66992 16.7027 7.66992 16.3359C7.66992 15.9692 7.37262 15.6719 7.00586 15.6719H2.65625C1.92392 15.6719 1.32812 15.0761 1.32812 14.3438V3.98438C1.32812 3.25205 1.92392 2.65625 2.65625 2.65625H3.48633V3.32031C3.48633 3.68707 3.78363 3.98438 4.15039 3.98438C4.51715 3.98438 4.81445 3.68707 4.81445 3.32031V2.65625H7.80273V3.32031C7.80273 3.68707 8.10003 3.98438 8.4668 3.98438C8.83356 3.98438 9.13086 3.68707 9.13086 3.32031V2.65625H12.1523V3.32031C12.1523 3.68707 12.4496 3.98438 12.8164 3.98438C13.1832 3.98438 13.4805 3.68707 13.4805 3.32031V2.65625H14.3438C15.0761 2.65625 15.6719 3.25205 15.6719 3.98438V7.96875C15.6719 8.33551 15.9692 8.63281 16.3359 8.63281C16.7027 8.63281 17 8.33551 17 7.96875V3.98438C17 2.51972 15.8084 1.32812 14.3438 1.32812Z", "fill", "currentColor"], ["d", "M4.15039 10.5254C4.51714 10.5254 4.81445 10.2281 4.81445 9.86133C4.81445 9.49458 4.51714 9.19727 4.15039 9.19727C3.78364 9.19727 3.48633 9.49458 3.48633 9.86133C3.48633 10.2281 3.78364 10.5254 4.15039 10.5254Z", "fill", "currentColor"]], template: function CalendarSearchIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelement(6, "path", 6);
                i0.ɵɵelement(7, "path", 7);
                i0.ɵɵelement(8, "path", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelement(10, "path", 10);
                i0.ɵɵelement(11, "path", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CalendarSearchIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-calendar-search-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M9.92773 10.5254C10.2945 10.5254 10.5918 10.2281 10.5918 9.86133C10.5918 9.49458 10.2945 9.19727 9.92773 9.19727C9.56098 9.19727 9.26367 9.49458 9.26367 9.86133C9.26367 10.2281 9.56098 10.5254 9.92773 10.5254Z\" fill=\"currentColor\"/>\n    <path d=\"M9.92773 7.63672C10.2945 7.63672 10.5918 7.33941 10.5918 6.97266C10.5918 6.6059 10.2945 6.30859 9.92773 6.30859C9.56098 6.30859 9.26367 6.6059 9.26367 6.97266C9.26367 7.33941 9.56098 7.63672 9.92773 7.63672Z\" fill=\"currentColor\"/>\n    <path d=\"M7.03906 10.5254C7.40581 10.5254 7.70312 10.2281 7.70312 9.86133C7.70312 9.49458 7.40581 9.19727 7.03906 9.19727C6.67231 9.19727 6.375 9.49458 6.375 9.86133C6.375 10.2281 6.67231 10.5254 7.03906 10.5254Z\" fill=\"currentColor\"/>\n    <path d=\"M7.03906 7.63672C7.40581 7.63672 7.70312 7.33941 7.70312 6.97266C7.70312 6.6059 7.40581 6.30859 7.03906 6.30859C6.67231 6.30859 6.375 6.6059 6.375 6.97266C6.375 7.33941 6.67231 7.63672 7.03906 7.63672Z\" fill=\"currentColor\"/>\n    <path d=\"M7.03906 13.4141C7.40581 13.4141 7.70312 13.1168 7.70312 12.75C7.70312 12.3832 7.40581 12.0859 7.03906 12.0859C6.67231 12.0859 6.375 12.3832 6.375 12.75C6.375 13.1168 6.67231 13.4141 7.03906 13.4141Z\" fill=\"currentColor\"/>\n    <path d=\"M12.8164 7.63672C13.1832 7.63672 13.4805 7.33941 13.4805 6.97266C13.4805 6.6059 13.1832 6.30859 12.8164 6.30859C12.4497 6.30859 12.1523 6.6059 12.1523 6.97266C12.1523 7.33941 12.4497 7.63672 12.8164 7.63672Z\" fill=\"currentColor\"/>\n    <path d=\"M4.15039 7.63672C4.51714 7.63672 4.81445 7.33941 4.81445 6.97266C4.81445 6.6059 4.51714 6.30859 4.15039 6.30859C3.78364 6.30859 3.48633 6.6059 3.48633 6.97266C3.48633 7.33941 3.78364 7.63672 4.15039 7.63672Z\" fill=\"currentColor\"/>\n    <path d=\"M14.0116 9.76172C12.3639 9.76172 11.0233 11.1023 11.0233 12.75C11.0233 13.308 11.1773 13.8308 11.4446 14.2782L9.85647 15.8664C9.59716 16.1257 9.59716 16.5461 9.85647 16.8055C9.98617 16.9352 10.1561 17 10.3261 17C10.496 17 10.666 16.9352 10.7956 16.8055L12.3612 15.2399C12.8345 15.5546 13.4019 15.7383 14.0116 15.7383C15.6594 15.7383 16.9999 14.3977 16.9999 12.75C16.9999 11.1023 15.6594 9.76172 14.0116 9.76172ZM14.0116 14.4102C13.0962 14.4102 12.3515 13.6654 12.3515 12.75C12.3515 11.8346 13.0962 11.0898 14.0116 11.0898C14.927 11.0898 15.6718 11.8346 15.6718 12.75C15.6718 13.6654 14.927 14.4102 14.0116 14.4102Z\" fill=\"currentColor\"/>\n    <path d=\"M4.15039 13.4141C4.51714 13.4141 4.81445 13.1168 4.81445 12.75C4.81445 12.3832 4.51714 12.0859 4.15039 12.0859C3.78364 12.0859 3.48633 12.3832 3.48633 12.75C3.48633 13.1168 3.78364 13.4141 4.15039 13.4141Z\" fill=\"currentColor\"/>\n    <path d=\"M14.3438 1.32812H13.4805V0.664062C13.4805 0.297301 13.1832 0 12.8164 0C12.4496 0 12.1523 0.297301 12.1523 0.664062V1.32812H9.13086V0.664062C9.13086 0.297301 8.83356 0 8.4668 0C8.10003 0 7.80273 0.297301 7.80273 0.664062V1.32812H4.81445V0.664062C4.81445 0.297301 4.51715 0 4.15039 0C3.78363 0 3.48633 0.297301 3.48633 0.664062V1.32812H2.65625C1.19159 1.32812 0 2.51972 0 3.98438V14.3438C0 15.8084 1.19159 17 2.65625 17H7.00586C7.37262 17 7.66992 16.7027 7.66992 16.3359C7.66992 15.9692 7.37262 15.6719 7.00586 15.6719H2.65625C1.92392 15.6719 1.32812 15.0761 1.32812 14.3438V3.98438C1.32812 3.25205 1.92392 2.65625 2.65625 2.65625H3.48633V3.32031C3.48633 3.68707 3.78363 3.98438 4.15039 3.98438C4.51715 3.98438 4.81445 3.68707 4.81445 3.32031V2.65625H7.80273V3.32031C7.80273 3.68707 8.10003 3.98438 8.4668 3.98438C8.83356 3.98438 9.13086 3.68707 9.13086 3.32031V2.65625H12.1523V3.32031C12.1523 3.68707 12.4496 3.98438 12.8164 3.98438C13.1832 3.98438 13.4805 3.68707 13.4805 3.32031V2.65625H14.3438C15.0761 2.65625 15.6719 3.25205 15.6719 3.98438V7.96875C15.6719 8.33551 15.9692 8.63281 16.3359 8.63281C16.7027 8.63281 17 8.33551 17 7.96875V3.98438C17 2.51972 15.8084 1.32812 14.3438 1.32812Z\" fill=\"currentColor\"/>\n    <path d=\"M4.15039 10.5254C4.51714 10.5254 4.81445 10.2281 4.81445 9.86133C4.81445 9.49458 4.51714 9.19727 4.15039 9.19727C3.78364 9.19727 3.48633 9.49458 3.48633 9.86133C3.48633 10.2281 3.78364 10.5254 4.15039 10.5254Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var CarIconComponent = /** @class */ (function (_super) {
        __extends(CarIconComponent, _super);
        function CarIconComponent() {
            return _super.call(this, 'car-icon') || this;
        }
        Object.defineProperty(CarIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return CarIconComponent;
    }(BaseIconComponent));
    CarIconComponent.ɵfac = function CarIconComponent_Factory(t) { return new (t || CarIconComponent)(); };
    CarIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CarIconComponent, selectors: [["und-car-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 19 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M18.2733 7.61211L17.8592 7.17365L16.4058 3.25592C16.1581 2.59416 15.5248 2.1557 14.8184 2.15164H4.43739C3.73098 2.15164 3.09765 2.59416 2.85 3.25592L1.41688 7.12493L0.820086 7.67707C0.300427 8.11959 0 8.76916 0 9.45121V15.1593C0.00405983 16.0931 0.763248 16.8482 1.69701 16.8482H2.7688C3.70256 16.8482 4.46175 16.0931 4.46581 15.1593V14.3311H14.5342V15.1593C14.5382 16.0931 15.2974 16.8482 16.2312 16.8482H17.303C18.2368 16.8482 18.9959 16.0931 19 15.1593V9.301C18.9959 8.66361 18.7361 8.05463 18.2733 7.61211ZM3.61325 3.53198C3.74316 3.1869 4.07201 2.96361 4.43739 2.96361H14.8224C15.1878 2.96361 15.5167 3.19096 15.6466 3.53198L16.9132 6.94224H15.9673C15.744 5.4198 14.3271 4.36831 12.8047 4.59566C11.5908 4.77429 10.6368 5.72835 10.4581 6.94224H2.34658L3.61325 3.53198ZM15.1391 6.94224H11.2782C11.5015 5.8745 12.5489 5.19245 13.6167 5.41574C14.3799 5.57814 14.9767 6.17493 15.1391 6.94224ZM3.65385 15.1593C3.64979 15.6465 3.25598 16.0363 2.7688 16.0363H1.69701C1.20983 16.0363 0.816026 15.6465 0.811966 15.1593V14.0957C1.05556 14.254 1.37628 14.3311 1.69701 14.3311H3.65385V15.1593ZM18.188 15.1593C18.184 15.6465 17.7902 16.0363 17.303 16.0363H16.2312C15.744 16.0363 15.3502 15.6425 15.3462 15.1593V14.3311H17.303C17.6237 14.3311 17.9444 14.254 18.188 14.0957V15.1593ZM17.303 13.5192H1.69701C1.21389 13.5232 0.816026 13.1375 0.811966 12.6504V9.45121C0.811966 9.00463 1.0109 8.57835 1.35192 8.2901C1.35598 8.28604 1.3641 8.27792 1.36816 8.27386L1.9203 7.75421H17.2949L17.6846 8.17237C17.6887 8.18049 17.7009 8.18455 17.7049 8.19267C18.0094 8.48092 18.184 8.88284 18.184 9.301V12.6504H18.188C18.184 13.1335 17.7861 13.5232 17.303 13.5192Z", "fill", "currentColor"], ["d", "M5.35881 9.3782H2.31394C2.09065 9.3782 1.90796 9.5609 1.90796 9.78419V11.8953C1.90796 12.1186 2.09065 12.3013 2.31394 12.3013H5.35881C5.5821 12.3013 5.7648 12.1186 5.7648 11.8953V9.78419C5.7648 9.5609 5.5821 9.3782 5.35881 9.3782ZM4.95283 11.4893H2.71992V10.1902H4.95283V11.4893Z", "fill", "currentColor"], ["d", "M16.686 9.3782H13.6411C13.4178 9.3782 13.2351 9.5609 13.2351 9.78419V11.8953C13.2351 12.1186 13.4178 12.3013 13.6411 12.3013H16.686C16.9093 12.3013 17.0919 12.1186 17.0919 11.8953V9.78419C17.0919 9.5609 16.9093 9.3782 16.686 9.3782ZM16.28 11.4893H14.0471V10.1902H16.28V11.4893Z", "fill", "currentColor"], ["d", "M11.4611 11.0834H7.53928C7.31599 11.0834 7.1333 11.2661 7.1333 11.4894C7.1333 11.7126 7.31599 11.8953 7.53928 11.8953H11.4611C11.6844 11.8953 11.8671 11.7126 11.8671 11.4894C11.8671 11.2661 11.6844 11.0834 11.4611 11.0834Z", "fill", "currentColor"], ["d", "M11.4611 9.8248H7.53928C7.31599 9.8248 7.1333 10.0075 7.1333 10.2308C7.1333 10.4541 7.31599 10.6368 7.53928 10.6368H11.4611C11.6844 10.6368 11.8671 10.4541 11.8671 10.2308C11.8671 10.0075 11.6844 9.8248 11.4611 9.8248Z", "fill", "currentColor"]], template: function CarIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelement(5, "path", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CarIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-car-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 19 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M18.2733 7.61211L17.8592 7.17365L16.4058 3.25592C16.1581 2.59416 15.5248 2.1557 14.8184 2.15164H4.43739C3.73098 2.15164 3.09765 2.59416 2.85 3.25592L1.41688 7.12493L0.820086 7.67707C0.300427 8.11959 0 8.76916 0 9.45121V15.1593C0.00405983 16.0931 0.763248 16.8482 1.69701 16.8482H2.7688C3.70256 16.8482 4.46175 16.0931 4.46581 15.1593V14.3311H14.5342V15.1593C14.5382 16.0931 15.2974 16.8482 16.2312 16.8482H17.303C18.2368 16.8482 18.9959 16.0931 19 15.1593V9.301C18.9959 8.66361 18.7361 8.05463 18.2733 7.61211ZM3.61325 3.53198C3.74316 3.1869 4.07201 2.96361 4.43739 2.96361H14.8224C15.1878 2.96361 15.5167 3.19096 15.6466 3.53198L16.9132 6.94224H15.9673C15.744 5.4198 14.3271 4.36831 12.8047 4.59566C11.5908 4.77429 10.6368 5.72835 10.4581 6.94224H2.34658L3.61325 3.53198ZM15.1391 6.94224H11.2782C11.5015 5.8745 12.5489 5.19245 13.6167 5.41574C14.3799 5.57814 14.9767 6.17493 15.1391 6.94224ZM3.65385 15.1593C3.64979 15.6465 3.25598 16.0363 2.7688 16.0363H1.69701C1.20983 16.0363 0.816026 15.6465 0.811966 15.1593V14.0957C1.05556 14.254 1.37628 14.3311 1.69701 14.3311H3.65385V15.1593ZM18.188 15.1593C18.184 15.6465 17.7902 16.0363 17.303 16.0363H16.2312C15.744 16.0363 15.3502 15.6425 15.3462 15.1593V14.3311H17.303C17.6237 14.3311 17.9444 14.254 18.188 14.0957V15.1593ZM17.303 13.5192H1.69701C1.21389 13.5232 0.816026 13.1375 0.811966 12.6504V9.45121C0.811966 9.00463 1.0109 8.57835 1.35192 8.2901C1.35598 8.28604 1.3641 8.27792 1.36816 8.27386L1.9203 7.75421H17.2949L17.6846 8.17237C17.6887 8.18049 17.7009 8.18455 17.7049 8.19267C18.0094 8.48092 18.184 8.88284 18.184 9.301V12.6504H18.188C18.184 13.1335 17.7861 13.5232 17.303 13.5192Z\" fill=\"currentColor\"/>\n      <path d=\"M5.35881 9.3782H2.31394C2.09065 9.3782 1.90796 9.5609 1.90796 9.78419V11.8953C1.90796 12.1186 2.09065 12.3013 2.31394 12.3013H5.35881C5.5821 12.3013 5.7648 12.1186 5.7648 11.8953V9.78419C5.7648 9.5609 5.5821 9.3782 5.35881 9.3782ZM4.95283 11.4893H2.71992V10.1902H4.95283V11.4893Z\" fill=\"currentColor\"/>\n      <path d=\"M16.686 9.3782H13.6411C13.4178 9.3782 13.2351 9.5609 13.2351 9.78419V11.8953C13.2351 12.1186 13.4178 12.3013 13.6411 12.3013H16.686C16.9093 12.3013 17.0919 12.1186 17.0919 11.8953V9.78419C17.0919 9.5609 16.9093 9.3782 16.686 9.3782ZM16.28 11.4893H14.0471V10.1902H16.28V11.4893Z\" fill=\"currentColor\"/>\n      <path d=\"M11.4611 11.0834H7.53928C7.31599 11.0834 7.1333 11.2661 7.1333 11.4894C7.1333 11.7126 7.31599 11.8953 7.53928 11.8953H11.4611C11.6844 11.8953 11.8671 11.7126 11.8671 11.4894C11.8671 11.2661 11.6844 11.0834 11.4611 11.0834Z\" fill=\"currentColor\"/>\n      <path d=\"M11.4611 9.8248H7.53928C7.31599 9.8248 7.1333 10.0075 7.1333 10.2308C7.1333 10.4541 7.31599 10.6368 7.53928 10.6368H11.4611C11.6844 10.6368 11.8671 10.4541 11.8671 10.2308C11.8671 10.0075 11.6844 9.8248 11.4611 9.8248Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var ShieldIconComponent = /** @class */ (function (_super) {
        __extends(ShieldIconComponent, _super);
        function ShieldIconComponent() {
            return _super.call(this, 'shield-icon') || this;
        }
        Object.defineProperty(ShieldIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ShieldIconComponent;
    }(BaseIconComponent));
    ShieldIconComponent.ɵfac = function ShieldIconComponent_Factory(t) { return new (t || ShieldIconComponent)(); };
    ShieldIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShieldIconComponent, selectors: [["und-shield-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 511.5 511.5", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "m431.67 117.274c-34.158-11.538-61.493-38.644-73.121-72.509-1.604-4.67-5.98-7.808-10.89-7.808h-183.817c-4.909 0-9.285 3.138-10.89 7.809-11.628 33.864-38.963 60.97-73.12 72.507-4.704 1.588-7.864 5.972-7.864 10.908v87.138c0 59.381 18.837 115.86 54.475 163.331 31.479 41.932 75.979 75.078 125.303 93.332 2.582.955 5.426.955 8.007 0 42.682-15.796 81.242-42.224 111.511-76.426 2.745-3.102 2.456-7.842-.646-10.587-3.103-2.746-7.843-2.456-10.587.646-28.352 32.036-64.388 56.86-104.282 71.851-46.175-17.357-87.798-48.507-117.311-87.821-33.673-44.854-51.471-98.219-51.471-154.326v-84.649c36.665-13.169 66.067-42.336 79.349-78.714h178.866c13.282 36.378 42.684 65.545 79.349 78.714v84.649c0 51.166-14.981 100.562-43.323 142.848-2.306 3.441-1.387 8.1 2.054 10.406 3.441 2.307 8.1 1.387 10.406-2.054 30.004-44.765 45.863-97.049 45.863-151.199v-87.138c.001-4.936-3.159-9.32-7.861-10.908zm-198.42 185.134c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-19.663c2.948-4.43 4.5-9.563 4.5-14.924 0-7.397-3.085-14.553-8.464-19.633-5.456-5.152-12.599-7.749-20.112-7.322-13.277.76-24.162 11.315-25.319 24.551-.537 6.139 1.02 12.243 4.395 17.327zm10.549-35.685c.512-5.866 5.342-10.543 11.233-10.881.24-.014.479-.021.717-.021 3.085 0 5.988 1.147 8.238 3.273 2.427 2.292 3.763 5.391 3.763 8.727 0 2.573-.803 5.024-2.321 7.091-1.425 1.939-2.179 4.267-2.179 6.73v20.765c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-20.766c0-2.461-.754-4.79-2.181-6.732-1.217-1.657-2.6-4.423-2.27-8.186zm217.253-180.669c-37.301-3.795-67.167-33.379-71.014-70.346-.933-8.955-8.412-15.708-17.4-15.708h-233.776c-8.987 0-16.467 6.753-17.398 15.708-3.848 36.966-33.714 66.551-71.015 70.346-8.974.913-15.742 8.394-15.742 17.402v111.864c0 66.815 21.055 130.481 60.889 184.115 19.165 25.805 42.129 48.449 68.254 67.302 26.448 19.087 55.556 33.863 86.516 43.917 3.472 1.128 7.297 1.128 10.769 0 30.959-10.055 60.067-24.831 86.515-43.917 26.125-18.854 49.089-41.497 68.254-67.302 39.834-53.634 60.889-117.3 60.889-184.115v-111.864c0-9.008-6.767-16.49-15.741-17.402zm.741 129.266c0 63.57-20.032 124.143-57.931 175.172-37.163 50.038-88.12 86.656-147.361 105.896-.484.157-1.018.157-1.502 0-59.242-19.24-110.199-55.858-147.361-105.896-37.898-51.029-57.931-111.602-57.931-175.172v-111.864c0-1.283.971-2.349 2.26-2.479 44.334-4.51 79.836-39.718 84.416-83.716.134-1.289 1.2-2.261 2.479-2.261h233.776c1.279 0 2.345.972 2.479 2.261 4.58 43.998 40.082 79.206 84.417 83.716 1.288.131 2.259 1.197 2.259 2.479zm-266.857-88.502c2.206-3.506 1.152-8.136-2.354-10.342-3.506-2.207-8.137-1.151-10.342 2.354-8.688 13.809-13.28 29.75-13.28 46.1v41.715c-11.451 6.426-19.21 18.681-19.21 32.72v87c0 20.678 16.822 37.5 37.5 37.5h137c20.678 0 37.5-16.822 37.5-37.5v-87c0-14.039-7.759-26.293-19.21-32.72v-41.715c0-47.856-38.934-86.79-86.79-86.79-16.528 0-32.616 4.685-46.525 13.549-3.493 2.226-4.52 6.862-2.294 10.355 2.227 3.493 6.862 4.521 10.355 2.294 11.496-7.326 24.796-11.198 38.463-11.198 39.585 0 71.79 32.205 71.79 71.79v37.088c-1.085-.095-2.181-.153-3.29-.153h-11.71v-36.935c0-15.171-5.908-29.435-16.64-40.167-10.732-10.72-24.991-16.624-40.15-16.624-31.314 0-56.79 25.476-56.79 56.79v36.935h-11.71c-1.109 0-2.205.058-3.29.153v-37.087c.001-13.52 3.797-26.699 10.977-38.112zm19.024 38.112c0-23.043 18.747-41.79 41.79-41.79 11.156 0 21.65 4.346 29.547 12.233 7.895 7.896 12.243 18.393 12.243 29.557v36.935h-83.58zm-26.71 51.935h137c12.407 0 22.5 10.093 22.5 22.5v87c0 12.407-10.093 22.5-22.5 22.5h-137c-12.407 0-22.5-10.093-22.5-22.5v-87c0-12.407 10.094-22.5 22.5-22.5z", "fill", "currentColor"]], template: function ShieldIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g");
                i0.ɵɵelement(2, "path", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ShieldIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-shield-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 511.5 511.5\"  xmlns=\"http://www.w3.org/2000/svg\">\n      <g>\n        <path d=\"m431.67 117.274c-34.158-11.538-61.493-38.644-73.121-72.509-1.604-4.67-5.98-7.808-10.89-7.808h-183.817c-4.909 0-9.285 3.138-10.89 7.809-11.628 33.864-38.963 60.97-73.12 72.507-4.704 1.588-7.864 5.972-7.864 10.908v87.138c0 59.381 18.837 115.86 54.475 163.331 31.479 41.932 75.979 75.078 125.303 93.332 2.582.955 5.426.955 8.007 0 42.682-15.796 81.242-42.224 111.511-76.426 2.745-3.102 2.456-7.842-.646-10.587-3.103-2.746-7.843-2.456-10.587.646-28.352 32.036-64.388 56.86-104.282 71.851-46.175-17.357-87.798-48.507-117.311-87.821-33.673-44.854-51.471-98.219-51.471-154.326v-84.649c36.665-13.169 66.067-42.336 79.349-78.714h178.866c13.282 36.378 42.684 65.545 79.349 78.714v84.649c0 51.166-14.981 100.562-43.323 142.848-2.306 3.441-1.387 8.1 2.054 10.406 3.441 2.307 8.1 1.387 10.406-2.054 30.004-44.765 45.863-97.049 45.863-151.199v-87.138c.001-4.936-3.159-9.32-7.861-10.908zm-198.42 185.134c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-19.663c2.948-4.43 4.5-9.563 4.5-14.924 0-7.397-3.085-14.553-8.464-19.633-5.456-5.152-12.599-7.749-20.112-7.322-13.277.76-24.162 11.315-25.319 24.551-.537 6.139 1.02 12.243 4.395 17.327zm10.549-35.685c.512-5.866 5.342-10.543 11.233-10.881.24-.014.479-.021.717-.021 3.085 0 5.988 1.147 8.238 3.273 2.427 2.292 3.763 5.391 3.763 8.727 0 2.573-.803 5.024-2.321 7.091-1.425 1.939-2.179 4.267-2.179 6.73v20.765c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-20.766c0-2.461-.754-4.79-2.181-6.732-1.217-1.657-2.6-4.423-2.27-8.186zm217.253-180.669c-37.301-3.795-67.167-33.379-71.014-70.346-.933-8.955-8.412-15.708-17.4-15.708h-233.776c-8.987 0-16.467 6.753-17.398 15.708-3.848 36.966-33.714 66.551-71.015 70.346-8.974.913-15.742 8.394-15.742 17.402v111.864c0 66.815 21.055 130.481 60.889 184.115 19.165 25.805 42.129 48.449 68.254 67.302 26.448 19.087 55.556 33.863 86.516 43.917 3.472 1.128 7.297 1.128 10.769 0 30.959-10.055 60.067-24.831 86.515-43.917 26.125-18.854 49.089-41.497 68.254-67.302 39.834-53.634 60.889-117.3 60.889-184.115v-111.864c0-9.008-6.767-16.49-15.741-17.402zm.741 129.266c0 63.57-20.032 124.143-57.931 175.172-37.163 50.038-88.12 86.656-147.361 105.896-.484.157-1.018.157-1.502 0-59.242-19.24-110.199-55.858-147.361-105.896-37.898-51.029-57.931-111.602-57.931-175.172v-111.864c0-1.283.971-2.349 2.26-2.479 44.334-4.51 79.836-39.718 84.416-83.716.134-1.289 1.2-2.261 2.479-2.261h233.776c1.279 0 2.345.972 2.479 2.261 4.58 43.998 40.082 79.206 84.417 83.716 1.288.131 2.259 1.197 2.259 2.479zm-266.857-88.502c2.206-3.506 1.152-8.136-2.354-10.342-3.506-2.207-8.137-1.151-10.342 2.354-8.688 13.809-13.28 29.75-13.28 46.1v41.715c-11.451 6.426-19.21 18.681-19.21 32.72v87c0 20.678 16.822 37.5 37.5 37.5h137c20.678 0 37.5-16.822 37.5-37.5v-87c0-14.039-7.759-26.293-19.21-32.72v-41.715c0-47.856-38.934-86.79-86.79-86.79-16.528 0-32.616 4.685-46.525 13.549-3.493 2.226-4.52 6.862-2.294 10.355 2.227 3.493 6.862 4.521 10.355 2.294 11.496-7.326 24.796-11.198 38.463-11.198 39.585 0 71.79 32.205 71.79 71.79v37.088c-1.085-.095-2.181-.153-3.29-.153h-11.71v-36.935c0-15.171-5.908-29.435-16.64-40.167-10.732-10.72-24.991-16.624-40.15-16.624-31.314 0-56.79 25.476-56.79 56.79v36.935h-11.71c-1.109 0-2.205.058-3.29.153v-37.087c.001-13.52 3.797-26.699 10.977-38.112zm19.024 38.112c0-23.043 18.747-41.79 41.79-41.79 11.156 0 21.65 4.346 29.547 12.233 7.895 7.896 12.243 18.393 12.243 29.557v36.935h-83.58zm-26.71 51.935h137c12.407 0 22.5 10.093 22.5 22.5v87c0 12.407-10.093 22.5-22.5 22.5h-137c-12.407 0-22.5-10.093-22.5-22.5v-87c0-12.407 10.094-22.5 22.5-22.5z\" fill='currentColor'/>\n      </g>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var PaymentMethodsIconComponent = /** @class */ (function (_super) {
        __extends(PaymentMethodsIconComponent, _super);
        function PaymentMethodsIconComponent() {
            return _super.call(this, 'payment-methods-icon') || this;
        }
        Object.defineProperty(PaymentMethodsIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return PaymentMethodsIconComponent;
    }(BaseIconComponent));
    PaymentMethodsIconComponent.ɵfac = function PaymentMethodsIconComponent_Factory(t) { return new (t || PaymentMethodsIconComponent)(); };
    PaymentMethodsIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaymentMethodsIconComponent, selectors: [["und-payment-methods-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 24 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M21.396 0.188049H9.13562C7.70344 0.188049 6.53165 1.35984 6.53165 2.79203V5.07051H0.347197C0.151899 5.07051 0 5.22241 0 5.41771V15.4647C0 15.66 0.151899 15.8119 0.347197 15.8119H19.1826C19.3779 15.8119 19.5298 15.66 19.5298 15.4647V12.5569H21.396C22.8282 12.5569 24 11.3852 24 9.95297V2.77033C24 1.33814 22.8282 0.188049 21.396 0.188049ZM18.8354 15.1175H0.716094V5.7649H18.8354V15.1175ZM23.2839 9.95297C23.2839 10.9946 22.4376 11.8409 21.396 11.8409H19.5298V5.7649H23.2839V9.95297ZM23.2839 5.07051H19.1826H7.24774V3.63832H23.2839V5.07051ZM23.2839 2.92223H7.24774V2.77033C7.24774 1.72874 8.09403 0.882444 9.13562 0.882444H21.396C22.4376 0.882444 23.2839 1.72874 23.2839 2.77033V2.92223Z", "fill", "currentColor"], ["d", "M17.2294 7.82645H16.6652V7.43585C16.6652 7.24055 16.5133 7.08865 16.318 7.08865H3.10277C2.90747 7.08865 2.75557 7.24055 2.75557 7.43585V7.82645H2.14798C1.95268 7.82645 1.80078 7.97835 1.80078 8.17364V12.7089C1.80078 12.9042 1.95268 13.0561 2.14798 13.0561H2.75557V13.4467C2.75557 13.642 2.90747 13.7939 3.10277 13.7939H16.318C16.5133 13.7939 16.6652 13.642 16.6652 13.4467V13.0561H17.2294C17.4247 13.0561 17.5765 12.9042 17.5765 12.7089V8.17364C17.5765 7.97835 17.4247 7.82645 17.2294 7.82645ZM16.8822 12.34H16.318C16.1227 12.34 15.9708 12.4919 15.9708 12.6872V13.0778H3.44997V12.6872C3.44997 12.4919 3.29807 12.34 3.10277 12.34H2.49518V8.52084H3.10277C3.29807 8.52084 3.44997 8.36894 3.44997 8.17364V7.78305H15.9708V8.17364C15.9708 8.36894 16.1227 8.52084 16.318 8.52084H16.8822V12.34Z", "fill", "currentColor"]], template: function PaymentMethodsIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PaymentMethodsIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-payment-methods-icon',
                        template: "\n    <svg [ngClass]=\"componentCssClasses\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M21.396 0.188049H9.13562C7.70344 0.188049 6.53165 1.35984 6.53165 2.79203V5.07051H0.347197C0.151899 5.07051 0 5.22241 0 5.41771V15.4647C0 15.66 0.151899 15.8119 0.347197 15.8119H19.1826C19.3779 15.8119 19.5298 15.66 19.5298 15.4647V12.5569H21.396C22.8282 12.5569 24 11.3852 24 9.95297V2.77033C24 1.33814 22.8282 0.188049 21.396 0.188049ZM18.8354 15.1175H0.716094V5.7649H18.8354V15.1175ZM23.2839 9.95297C23.2839 10.9946 22.4376 11.8409 21.396 11.8409H19.5298V5.7649H23.2839V9.95297ZM23.2839 5.07051H19.1826H7.24774V3.63832H23.2839V5.07051ZM23.2839 2.92223H7.24774V2.77033C7.24774 1.72874 8.09403 0.882444 9.13562 0.882444H21.396C22.4376 0.882444 23.2839 1.72874 23.2839 2.77033V2.92223Z\" fill=\"currentColor\"/>\n      <path d=\"M17.2294 7.82645H16.6652V7.43585C16.6652 7.24055 16.5133 7.08865 16.318 7.08865H3.10277C2.90747 7.08865 2.75557 7.24055 2.75557 7.43585V7.82645H2.14798C1.95268 7.82645 1.80078 7.97835 1.80078 8.17364V12.7089C1.80078 12.9042 1.95268 13.0561 2.14798 13.0561H2.75557V13.4467C2.75557 13.642 2.90747 13.7939 3.10277 13.7939H16.318C16.5133 13.7939 16.6652 13.642 16.6652 13.4467V13.0561H17.2294C17.4247 13.0561 17.5765 12.9042 17.5765 12.7089V8.17364C17.5765 7.97835 17.4247 7.82645 17.2294 7.82645ZM16.8822 12.34H16.318C16.1227 12.34 15.9708 12.4919 15.9708 12.6872V13.0778H3.44997V12.6872C3.44997 12.4919 3.29807 12.34 3.10277 12.34H2.49518V8.52084H3.10277C3.29807 8.52084 3.44997 8.36894 3.44997 8.17364V7.78305H15.9708V8.17364C15.9708 8.36894 16.1227 8.52084 16.318 8.52084H16.8822V12.34Z\" fill=\"currentColor\"/>\n    </svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var FinancialIconComponent = /** @class */ (function (_super) {
        __extends(FinancialIconComponent, _super);
        function FinancialIconComponent() {
            return _super.call(this, 'financial-icon') || this;
        }
        Object.defineProperty(FinancialIconComponent.prototype, "componentCssClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.appPrefix] = true,
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return FinancialIconComponent;
    }(BaseIconComponent));
    FinancialIconComponent.ɵfac = function FinancialIconComponent_Factory(t) { return new (t || FinancialIconComponent)(); };
    FinancialIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FinancialIconComponent, selectors: [["und-financial-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "1em", "height", "1em", "viewBox", "0 0 60.611 59", 3, "ngClass"], ["d", "M18.043,9.843h40.3V1.27h-40.3Zm40.3,1.27h-40.3v2.276c.59-.123,1.2-.212,1.813-.282a21.479,21.479,0,0,1,2.623-.159A22.432,22.432,0,0,1,38.5,19.677H58.344Zm0,9.834H39.659a22.81,22.81,0,0,1,2.491,3.625,21.847,21.847,0,0,1,2.007,4.948H58.344Zm0,9.843H44.473c.132.635.229,1.279.317,1.923a23.829,23.829,0,0,1,.167,2.761,23.085,23.085,0,0,1-.123,2.337c-.053.52-.132,1.041-.211,1.543H58.344Zm0,9.834H44.359A21.887,21.887,0,0,1,42.607,45.5,22.2,22.2,0,0,1,40.3,49.2H58.344Zm-36.5-5.786V26.583h-3a2.5,2.5,0,0,0-1.8.75,2.542,2.542,0,0,0-.748,1.8V32.29a2.542,2.542,0,0,0,2.544,2.549Zm1.267,1.27v8.255h3a2.546,2.546,0,0,0,2.544-2.54V38.658a2.557,2.557,0,0,0-2.544-2.549ZM21.845,23.47v1.843h-3a3.758,3.758,0,0,0-2.693,1.12,3.81,3.81,0,0,0-1.118,2.7V32.29a3.828,3.828,0,0,0,3.811,3.819h3v8.255H15.666a.637.637,0,0,0-.634.635.645.645,0,0,0,.634.644h6.178v1.835a.634.634,0,1,0,1.267,0V45.643h3a3.828,3.828,0,0,0,3.811-3.819V38.658a3.82,3.82,0,0,0-3.811-3.819h-3V26.583h5a.635.635,0,0,0,0-1.27h-5V23.47a.634.634,0,1,0-1.267,0ZM38.462,49.445l.009-.009v-.009l.009-.009h.009v-.009l.062-.062.018-.027.035-.035.018-.026.018-.018a21.272,21.272,0,0,0,2.834-4.3,21,21,0,0,0,2.1-7.259c.07-.715.114-1.447.114-2.205a23.226,23.226,0,0,0-.159-2.611,21.57,21.57,0,0,0-.466-2.523.6.6,0,0,0-.018-.062A20.789,20.789,0,0,0,41.04,25.19a21.191,21.191,0,0,0-3.23-4.41.388.388,0,0,1-.062-.053,21.109,21.109,0,0,0-15.27-6.509,21.566,21.566,0,0,0-4.92.582h-.026A21.253,21.253,0,1,0,37.476,50.5C37.819,50.159,38.145,49.806,38.462,49.445Zm-9.373,2.029a17.367,17.367,0,0,0,5.606-3.757A17.556,17.556,0,0,0,38.444,42.1,17.3,17.3,0,0,0,22.479,18.16a17.221,17.221,0,0,0-12.216,5.08A17.338,17.338,0,0,0,6.513,42.1a17.555,17.555,0,0,0,3.749,5.618,17.259,17.259,0,0,0,18.826,3.757Zm-6.61.035A15.875,15.875,0,1,0,16.353,50.3,16.039,16.039,0,0,0,22.479,51.509ZM17.409,0H58.977a.632.632,0,0,1,.634.635v49.2a.632.632,0,0,1-.634.635H39.254c-.282.326-.581.635-.88.935a22.5,22.5,0,1,1-21.6-37.723V.635A.637.637,0,0,1,17.409,0Z", "transform", "translate(0.5 0.5)", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1", "fill-rule", "evenodd"]], template: function FinancialIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FinancialIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-financial-icon',
                        template: "\n    <svg  [ngClass]=\"componentCssClasses\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 60.611 59\">\n    <path d=\"M18.043,9.843h40.3V1.27h-40.3Zm40.3,1.27h-40.3v2.276c.59-.123,1.2-.212,1.813-.282a21.479,21.479,0,0,1,2.623-.159A22.432,22.432,0,0,1,38.5,19.677H58.344Zm0,9.834H39.659a22.81,22.81,0,0,1,2.491,3.625,21.847,21.847,0,0,1,2.007,4.948H58.344Zm0,9.843H44.473c.132.635.229,1.279.317,1.923a23.829,23.829,0,0,1,.167,2.761,23.085,23.085,0,0,1-.123,2.337c-.053.52-.132,1.041-.211,1.543H58.344Zm0,9.834H44.359A21.887,21.887,0,0,1,42.607,45.5,22.2,22.2,0,0,1,40.3,49.2H58.344Zm-36.5-5.786V26.583h-3a2.5,2.5,0,0,0-1.8.75,2.542,2.542,0,0,0-.748,1.8V32.29a2.542,2.542,0,0,0,2.544,2.549Zm1.267,1.27v8.255h3a2.546,2.546,0,0,0,2.544-2.54V38.658a2.557,2.557,0,0,0-2.544-2.549ZM21.845,23.47v1.843h-3a3.758,3.758,0,0,0-2.693,1.12,3.81,3.81,0,0,0-1.118,2.7V32.29a3.828,3.828,0,0,0,3.811,3.819h3v8.255H15.666a.637.637,0,0,0-.634.635.645.645,0,0,0,.634.644h6.178v1.835a.634.634,0,1,0,1.267,0V45.643h3a3.828,3.828,0,0,0,3.811-3.819V38.658a3.82,3.82,0,0,0-3.811-3.819h-3V26.583h5a.635.635,0,0,0,0-1.27h-5V23.47a.634.634,0,1,0-1.267,0ZM38.462,49.445l.009-.009v-.009l.009-.009h.009v-.009l.062-.062.018-.027.035-.035.018-.026.018-.018a21.272,21.272,0,0,0,2.834-4.3,21,21,0,0,0,2.1-7.259c.07-.715.114-1.447.114-2.205a23.226,23.226,0,0,0-.159-2.611,21.57,21.57,0,0,0-.466-2.523.6.6,0,0,0-.018-.062A20.789,20.789,0,0,0,41.04,25.19a21.191,21.191,0,0,0-3.23-4.41.388.388,0,0,1-.062-.053,21.109,21.109,0,0,0-15.27-6.509,21.566,21.566,0,0,0-4.92.582h-.026A21.253,21.253,0,1,0,37.476,50.5C37.819,50.159,38.145,49.806,38.462,49.445Zm-9.373,2.029a17.367,17.367,0,0,0,5.606-3.757A17.556,17.556,0,0,0,38.444,42.1,17.3,17.3,0,0,0,22.479,18.16a17.221,17.221,0,0,0-12.216,5.08A17.338,17.338,0,0,0,6.513,42.1a17.555,17.555,0,0,0,3.749,5.618,17.259,17.259,0,0,0,18.826,3.757Zm-6.61.035A15.875,15.875,0,1,0,16.353,50.3,16.039,16.039,0,0,0,22.479,51.509ZM17.409,0H58.977a.632.632,0,0,1,.634.635v49.2a.632.632,0,0,1-.634.635H39.254c-.282.326-.581.635-.88.935a22.5,22.5,0,1,1-21.6-37.723V.635A.637.637,0,0,1,17.409,0Z\" transform=\"translate(0.5 0.5)\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"1\" fill-rule=\"evenodd\"/></svg>\n  ",
                    }]
            }], function () { return []; }, null);
    })();

    var IconsModule = /** @class */ (function () {
        function IconsModule() {
        }
        return IconsModule;
    }());
    IconsModule.ɵmod = i0.ɵɵdefineNgModule({ type: IconsModule });
    IconsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconsModule, { declarations: [CloseIconComponent,
                SmsIconComponent,
                EmailIconComponent,
                DoneIconComponent,
                UnidasLogoIconComponent,
                MenuOutlinedIconComponent,
                ListIconComponent,
                ExitIconComponent,
                HomeIconComponent,
                CalendarCheckIconComponent,
                ReportIconComponent,
                DocumentsIconComponent,
                UserIconComponent,
                StoreIconComponent,
                SupportIconComponent,
                ArrowUpIconComponent,
                CalendarSearchIconComponent,
                CarIconComponent,
                ShieldIconComponent,
                PaymentMethodsIconComponent,
                FinancialIconComponent,
                ContractIconComponent,
                NonRevenueIconComponent], imports: [i1.CommonModule], exports: [CloseIconComponent,
                SmsIconComponent,
                EmailIconComponent,
                DoneIconComponent,
                UnidasLogoIconComponent,
                MenuOutlinedIconComponent,
                ListIconComponent,
                ExitIconComponent,
                HomeIconComponent,
                CalendarCheckIconComponent,
                ReportIconComponent,
                DocumentsIconComponent,
                UserIconComponent,
                StoreIconComponent,
                SupportIconComponent,
                ArrowUpIconComponent,
                CalendarSearchIconComponent,
                CarIconComponent,
                ShieldIconComponent,
                PaymentMethodsIconComponent,
                FinancialIconComponent,
                ContractIconComponent,
                NonRevenueIconComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IconsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CloseIconComponent,
                            SmsIconComponent,
                            EmailIconComponent,
                            DoneIconComponent,
                            UnidasLogoIconComponent,
                            MenuOutlinedIconComponent,
                            ListIconComponent,
                            ExitIconComponent,
                            HomeIconComponent,
                            CalendarCheckIconComponent,
                            ReportIconComponent,
                            DocumentsIconComponent,
                            UserIconComponent,
                            StoreIconComponent,
                            SupportIconComponent,
                            ArrowUpIconComponent,
                            CalendarSearchIconComponent,
                            CarIconComponent,
                            ShieldIconComponent,
                            PaymentMethodsIconComponent,
                            FinancialIconComponent,
                            ContractIconComponent,
                            NonRevenueIconComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            CloseIconComponent,
                            SmsIconComponent,
                            EmailIconComponent,
                            DoneIconComponent,
                            UnidasLogoIconComponent,
                            MenuOutlinedIconComponent,
                            ListIconComponent,
                            ExitIconComponent,
                            HomeIconComponent,
                            CalendarCheckIconComponent,
                            ReportIconComponent,
                            DocumentsIconComponent,
                            UserIconComponent,
                            StoreIconComponent,
                            SupportIconComponent,
                            ArrowUpIconComponent,
                            CalendarSearchIconComponent,
                            CarIconComponent,
                            ShieldIconComponent,
                            PaymentMethodsIconComponent,
                            FinancialIconComponent,
                            ContractIconComponent,
                            NonRevenueIconComponent
                        ]
                    }]
            }], null, null);
    })();

    (function (ParagraphSizesEnum) {
        ParagraphSizesEnum["MEDIUM"] = "medium";
        ParagraphSizesEnum["LARGE"] = "large";
    })(exports.ParagraphSizesEnum || (exports.ParagraphSizesEnum = {}));

    var _c0$8 = ["*"];
    var ParagraphComponent = /** @class */ (function (_super) {
        __extends(ParagraphComponent, _super);
        function ParagraphComponent() {
            var _this = _super.call(this, 'paragraph') || this;
            _this.size = exports.ParagraphSizesEnum.MEDIUM;
            _this.hasNoMargin = false;
            return _this;
        }
        Object.defineProperty(ParagraphComponent.prototype, "rootStyleClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-medium"] = this.size === exports.ParagraphSizesEnum.MEDIUM,
                    _a[this.cssPrefix + "--is-large"] = this.size === exports.ParagraphSizesEnum.LARGE,
                    _a[this.cssPrefix + "--has-no-margin"] = this.hasNoMargin,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ParagraphComponent;
    }(BaseComponent));
    ParagraphComponent.ɵfac = function ParagraphComponent_Factory(t) { return new (t || ParagraphComponent)(); };
    ParagraphComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ParagraphComponent, selectors: [["und-p"]], inputs: { size: "size", hasNoMargin: "hasNoMargin" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function ParagraphComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "p", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ParagraphComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-p',
                        templateUrl: './paragraph.component.html',
                    }]
            }], function () { return []; }, { size: [{
                    type: i0.Input,
                    args: ['size']
                }], hasNoMargin: [{
                    type: i0.Input
                }] });
    })();

    var ParagraphModule = /** @class */ (function () {
        function ParagraphModule() {
        }
        return ParagraphModule;
    }());
    ParagraphModule.ɵmod = i0.ɵɵdefineNgModule({ type: ParagraphModule });
    ParagraphModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ParagraphModule_Factory(t) { return new (t || ParagraphModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParagraphModule, { declarations: [ParagraphComponent], imports: [i1.CommonModule], exports: [ParagraphComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ParagraphModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ParagraphComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            ParagraphComponent,
                        ]
                    }]
            }], null, null);
    })();

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                BoxedContentModule,
                ButtonModule,
                IconsModule,
                SpacerModule,
                ParagraphModule
            ], BoxedContentModule,
            ButtonModule,
            IconsModule,
            SpacerModule,
            ParagraphModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [BoxedContentModule,
                ButtonModule,
                IconsModule,
                SpacerModule,
                ParagraphModule], exports: [BoxedContentModule,
                ButtonModule,
                IconsModule,
                SpacerModule,
                ParagraphModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            BoxedContentModule,
                            ButtonModule,
                            IconsModule,
                            SpacerModule,
                            ParagraphModule
                        ],
                        exports: [
                            BoxedContentModule,
                            ButtonModule,
                            IconsModule,
                            SpacerModule,
                            ParagraphModule
                        ]
                    }]
            }], null, null);
    })();

    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        return ModalModule;
    }());
    ModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModalModule });
    ModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[
                i1.CommonModule,
                SharedModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModalModule, { declarations: [ModalComponent], imports: [i1.CommonModule,
                SharedModule], exports: [ModalComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ModalModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ModalComponent],
                        imports: [
                            i1.CommonModule,
                            SharedModule
                        ],
                        exports: [
                            ModalComponent
                        ]
                    }]
            }], null, null);
    })();

    var HorizontalRuleComponent = /** @class */ (function (_super) {
        __extends(HorizontalRuleComponent, _super);
        function HorizontalRuleComponent() {
            return _super.call(this, 'horizontal-rule') || this;
        }
        Object.defineProperty(HorizontalRuleComponent.prototype, "rootStyleClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return HorizontalRuleComponent;
    }(BaseComponent));
    HorizontalRuleComponent.ɵfac = function HorizontalRuleComponent_Factory(t) { return new (t || HorizontalRuleComponent)(); };
    HorizontalRuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HorizontalRuleComponent, selectors: [["und-hr"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass"]], template: function HorizontalRuleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "hr", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HorizontalRuleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-hr',
                        templateUrl: './horizontal-rule.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var HorizontalRuleModule = /** @class */ (function () {
        function HorizontalRuleModule() {
        }
        return HorizontalRuleModule;
    }());
    HorizontalRuleModule.ɵmod = i0.ɵɵdefineNgModule({ type: HorizontalRuleModule });
    HorizontalRuleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HorizontalRuleModule_Factory(t) { return new (t || HorizontalRuleModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HorizontalRuleModule, { declarations: [HorizontalRuleComponent], imports: [i1.CommonModule], exports: [HorizontalRuleComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HorizontalRuleModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [HorizontalRuleComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            HorizontalRuleComponent,
                        ]
                    }]
            }], null, null);
    })();

    function AlertComponent_div_0_h2_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap(ctx_r1.cssPrefix + "__title");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.title);
        }
    }
    function AlertComponent_div_0_p_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMap(ctx_r2.cssPrefix + "__message");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.message);
        }
    }
    function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "und-modal", 2);
            i0.ɵɵelementStart(2, "und-spacer");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵtemplate(4, AlertComponent_div_0_h2_4_Template, 2, 3, "h2", 3);
            i0.ɵɵtemplate(5, AlertComponent_div_0_p_5_Template, 2, 3, "p", 3);
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵelement(7, "und-done-icon");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "und-button", 4);
            i0.ɵɵlistener("click", function AlertComponent_div_0_Template_und_button_click_8_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onOkClick(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", ctx_r0.rootClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("isVisible", ctx_r0.isVisible)("noHeader", true);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx_r0.cssPrefix + "__body");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.message);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx_r0.cssPrefix + "__icon");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("block", true);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.okText);
        }
    }
    var AlertComponent = /** @class */ (function (_super) {
        __extends(AlertComponent, _super);
        function AlertComponent() {
            var _this = _super.call(this, 'alert') || this;
            _this.okText = 'Continuar';
            _this.ok = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(AlertComponent.prototype, "rootClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        AlertComponent.prototype.onOkClick = function () {
            this.ok.emit();
        };
        return AlertComponent;
    }(BaseComponent));
    AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
    AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["und-alert"]], inputs: { title: "title", okText: "okText", message: "message", isVisible: "isVisible" }, outputs: { ok: "ok" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "isVisible", "noHeader"], [3, "class", 4, "ngIf"], ["type", "primary", 3, "block", "click"]], template: function AlertComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 10, 11, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isVisible);
            }
        }, directives: [i1.NgIf, i1.NgClass, ModalComponent, SpacerComponent, DoneIconComponent, ButtonComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-alert',
                        templateUrl: './alert.component.html',
                    }]
            }], function () { return []; }, { title: [{
                    type: i0.Input,
                    args: ['title']
                }], okText: [{
                    type: i0.Input,
                    args: ['okText']
                }], message: [{
                    type: i0.Input,
                    args: ['message']
                }], isVisible: [{
                    type: i0.Input,
                    args: ['isVisible']
                }], ok: [{
                    type: i0.Output
                }] });
    })();

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵmod = i0.ɵɵdefineNgModule({ type: AlertModule });
    AlertModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[
                i1.CommonModule,
                SharedModule,
                ModalModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AlertModule, { declarations: [AlertComponent], imports: [i1.CommonModule,
                SharedModule,
                ModalModule], exports: [AlertComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AlertModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [AlertComponent],
                        imports: [
                            i1.CommonModule,
                            SharedModule,
                            ModalModule,
                        ],
                        exports: [
                            AlertComponent
                        ]
                    }]
            }], null, null);
    })();

    var _c0$9 = [[["", "navbar", ""]], [["", "extraInformation", ""]], [["", "navbar", ""]]];
    var _c1$5 = function () { return ["/"]; };
    var _c2$1 = ["[navbar]", "[extraInformation]", "[navbar]"];
    var MainHeaderComponent = /** @class */ (function (_super) {
        __extends(MainHeaderComponent, _super);
        function MainHeaderComponent() {
            var _this = _super.call(this, 'main-header') || this;
            _this.isOpen = false;
            return _this;
        }
        Object.defineProperty(MainHeaderComponent.prototype, "rootClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-open"] = this.isOpen,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        MainHeaderComponent.prototype.toogleMenuVisibility = function () {
            this.isOpen = !this.isOpen;
        };
        return MainHeaderComponent;
    }(BaseComponent));
    MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
    MainHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainHeaderComponent, selectors: [["und-main-header"]], inputs: { title: "title" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2$1, decls: 26, vars: 28, consts: [[3, "ngClass"], ["type", "none", 3, "click"], ["href", "javascript:void(0)", 1, "link-logo", 3, "routerLink"]], template: function MainHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0$9);
                i0.ɵɵelementStart(0, "header", 0);
                i0.ɵɵelementStart(1, "div");
                i0.ɵɵelementStart(2, "nav");
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "und-button", 1);
                i0.ɵɵlistener("click", function MainHeaderComponent_Template_und_button_click_5_listener() { return ctx.toogleMenuVisibility(); });
                i0.ɵɵelement(6, "und-close-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵelementStart(8, "a", 2);
                i0.ɵɵelement(9, "und-unidas-logo-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "div");
                i0.ɵɵelementStart(11, "h1");
                i0.ɵɵtext(12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div");
                i0.ɵɵelementStart(14, "div");
                i0.ɵɵelementStart(15, "und-p");
                i0.ɵɵprojection(16, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div");
                i0.ɵɵelementStart(18, "und-button", 1);
                i0.ɵɵlistener("click", function MainHeaderComponent_Template_und_button_click_18_listener() { return ctx.toogleMenuVisibility(); });
                i0.ɵɵelement(19, "und-menu-outlined-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "div");
                i0.ɵɵelementStart(21, "nav");
                i0.ɵɵprojection(22, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div");
                i0.ɵɵelementStart(24, "und-button", 1);
                i0.ɵɵlistener("click", function MainHeaderComponent_Template_und_button_click_24_listener() { return ctx.toogleMenuVisibility(); });
                i0.ɵɵelement(25, "und-close-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootClasses);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-overlay");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-navbar");
                i0.ɵɵadvance(2);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-overlay-close-button");
                i0.ɵɵadvance(3);
                i0.ɵɵclassMap(ctx.cssPrefix + "__logo");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(27, _c1$5));
                i0.ɵɵadvance(2);
                i0.ɵɵclassMap(ctx.cssPrefix + "__separator");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__title");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__extra-info-and-menu-button");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__extra-primary-information");
                i0.ɵɵadvance(3);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-icon");
                i0.ɵɵadvance(3);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-overlay");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-navbar");
                i0.ɵɵadvance(2);
                i0.ɵɵclassMap(ctx.cssPrefix + "__menu-overlay-close-button");
            }
        }, directives: [i1.NgClass, ButtonComponent, CloseIconComponent, i4.RouterLinkWithHref, UnidasLogoIconComponent, ParagraphComponent, MenuOutlinedIconComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MainHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-main-header',
                        templateUrl: './main-header.component.html',
                    }]
            }], function () { return []; }, { title: [{
                    type: i0.Input,
                    args: ['title']
                }] });
    })();

    var MainHeaderModule = /** @class */ (function () {
        function MainHeaderModule() {
        }
        return MainHeaderModule;
    }());
    MainHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: MainHeaderModule });
    MainHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MainHeaderModule_Factory(t) { return new (t || MainHeaderModule)(); }, imports: [[
                i1.CommonModule,
                SharedModule,
                ModalModule,
                i4.RouterModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MainHeaderModule, { declarations: [MainHeaderComponent], imports: [i1.CommonModule,
                SharedModule,
                ModalModule,
                i4.RouterModule], exports: [MainHeaderComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MainHeaderModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MainHeaderComponent],
                        imports: [
                            i1.CommonModule,
                            SharedModule,
                            ModalModule,
                            i4.RouterModule
                        ],
                        exports: [
                            MainHeaderComponent
                        ]
                    }]
            }], null, null);
    })();

    var _c0$a = ["*"];
    var LayoutComponent = /** @class */ (function (_super) {
        __extends(LayoutComponent, _super);
        function LayoutComponent() {
            return _super.call(this, 'layout') || this;
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(LayoutComponent.prototype, "rootClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return LayoutComponent;
    }(BaseComponent));
    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
    LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["und-layout"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$a, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootClassNames);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-layout',
                        templateUrl: './layout.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$b = ["*"];
    var AsideComponent = /** @class */ (function (_super) {
        __extends(AsideComponent, _super);
        function AsideComponent() {
            var _this = _super.call(this, 'aside') || this;
            _this.isOpen = false;
            return _this;
        }
        AsideComponent.prototype.ngOnInit = function () {
        };
        AsideComponent.prototype.toggleVisibility = function (event) {
            event.preventDefault();
            this.isOpen = !this.isOpen;
        };
        Object.defineProperty(AsideComponent.prototype, "rootClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-open"] = this.isOpen,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return AsideComponent;
    }(BaseComponent));
    AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
    AsideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AsideComponent, selectors: [["und-aside"]], inputs: { width: "width" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$b, decls: 6, vars: 7, consts: [[3, "ngClass"], ["href", "#", 3, "click"]], template: function AsideComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "aside", 0);
                i0.ɵɵelementStart(1, "div");
                i0.ɵɵelementStart(2, "a", 1);
                i0.ɵɵlistener("click", function AsideComponent_Template_a_click_2_listener($event) { return ctx.toggleVisibility($event); });
                i0.ɵɵelement(3, "und-arrow-up-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("width", ctx.width && ctx.width + "px");
                i0.ɵɵproperty("ngClass", ctx.rootClassNames);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__mobile-toggle-button");
                i0.ɵɵadvance(3);
                i0.ɵɵclassMap(ctx.cssPrefix + "__content");
            }
        }, directives: [i1.NgClass, ArrowUpIconComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AsideComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-aside',
                        templateUrl: './aside.component.html',
                    }]
            }], function () { return []; }, { width: [{
                    type: i0.Input,
                    args: ['width']
                }] });
    })();

    var _c0$c = ["*"];
    var ArticleComponent = /** @class */ (function (_super) {
        __extends(ArticleComponent, _super);
        function ArticleComponent() {
            return _super.call(this, 'article') || this;
        }
        ArticleComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(ArticleComponent.prototype, "rootClassNames", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return ArticleComponent;
    }(BaseComponent));
    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(); };
    ArticleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ArticleComponent, selectors: [["und-article"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$c, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function ArticleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "aside", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootClassNames);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ArticleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-article',
                        templateUrl: './article.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
    LayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
                i2.ReactiveFormsModule,
                i1.CommonModule,
                SharedModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutComponent,
                AsideComponent,
                ArticleComponent], imports: [i2.ReactiveFormsModule,
                i1.CommonModule,
                SharedModule], exports: [LayoutComponent,
                AsideComponent,
                ArticleComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutComponent,
                            AsideComponent,
                            ArticleComponent,
                        ],
                        imports: [
                            i2.ReactiveFormsModule,
                            i1.CommonModule,
                            SharedModule,
                        ],
                        exports: [
                            LayoutComponent,
                            AsideComponent,
                            ArticleComponent,
                        ]
                    }]
            }], null, null);
    })();

    var _c0$d = ["*"];
    var SideNavbarComponent = /** @class */ (function (_super) {
        __extends(SideNavbarComponent, _super);
        function SideNavbarComponent() {
            return _super.call(this, 'side-navbar') || this;
        }
        Object.defineProperty(SideNavbarComponent.prototype, "rootClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        return SideNavbarComponent;
    }(BaseComponent));
    SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) { return new (t || SideNavbarComponent)(); };
    SideNavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SideNavbarComponent, selectors: [["und-side-navbar"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$d, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function SideNavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "nav", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootClasses);
            }
        }, directives: [i1.NgClass], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SideNavbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-side-navbar',
                        templateUrl: './side-navbar.component.html',
                    }]
            }], function () { return []; }, null);
    })();

    var SideNavbarModule = /** @class */ (function () {
        function SideNavbarModule() {
        }
        return SideNavbarModule;
    }());
    SideNavbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: SideNavbarModule });
    SideNavbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SideNavbarModule_Factory(t) { return new (t || SideNavbarModule)(); }, imports: [[
                i1.CommonModule,
                SharedModule,
                ModalModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SideNavbarModule, { declarations: [SideNavbarComponent], imports: [i1.CommonModule,
                SharedModule,
                ModalModule], exports: [SideNavbarComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SideNavbarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SideNavbarComponent],
                        imports: [
                            i1.CommonModule,
                            SharedModule,
                            ModalModule,
                        ],
                        exports: [
                            SideNavbarComponent
                        ]
                    }]
            }], null, null);
    })();

    var _c0$e = ["*"];
    var ExpandableTopicComponent = /** @class */ (function (_super) {
        __extends(ExpandableTopicComponent, _super);
        function ExpandableTopicComponent() {
            var _this = _super.call(this, 'expandable-topic') || this;
            _this.isClosed = false;
            return _this;
        }
        ExpandableTopicComponent.prototype.ngOnInit = function () {
            if (!this.startOpen) {
                this.isClosed = true;
            }
        };
        Object.defineProperty(ExpandableTopicComponent.prototype, "rootStyleClasses", {
            get: function () {
                var _a;
                return _a = {},
                    _a["" + this.cssPrefix] = true,
                    _a[this.cssPrefix + "--is-closed"] = this.isClosed,
                    _a;
            },
            enumerable: false,
            configurable: true
        });
        ExpandableTopicComponent.prototype.toggleOpenState = function (event) {
            event.preventDefault();
            this.isClosed = !this.isClosed;
        };
        return ExpandableTopicComponent;
    }(BaseComponent));
    ExpandableTopicComponent.ɵfac = function ExpandableTopicComponent_Factory(t) { return new (t || ExpandableTopicComponent)(); };
    ExpandableTopicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExpandableTopicComponent, selectors: [["und-expandable-topic"]], inputs: { title: "title", description: "description", startOpen: "startOpen" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$e, decls: 9, vars: 13, consts: [[3, "ngClass"], [3, "click"]], template: function ExpandableTopicComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵlistener("click", function ExpandableTopicComponent_Template_div_click_1_listener($event) { return ctx.toggleOpenState($event); });
                i0.ɵɵelementStart(2, "h3");
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "und-p");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "und-arrow-up-icon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵprojection(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__clickable-area");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__title");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.title);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__description");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.description);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__arrow-icon");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.cssPrefix + "__content");
            }
        }, directives: [i1.NgClass, ParagraphComponent, ArrowUpIconComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ExpandableTopicComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'und-expandable-topic',
                        templateUrl: './expandable-topic.component.html',
                    }]
            }], function () { return []; }, { title: [{
                    type: i0.Input
                }], description: [{
                    type: i0.Input
                }], startOpen: [{
                    type: i0.Input
                }] });
    })();

    var ExpandableTopicModule = /** @class */ (function () {
        function ExpandableTopicModule() {
        }
        return ExpandableTopicModule;
    }());
    ExpandableTopicModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExpandableTopicModule });
    ExpandableTopicModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExpandableTopicModule_Factory(t) { return new (t || ExpandableTopicModule)(); }, imports: [[
                i1.CommonModule,
                SharedModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpandableTopicModule, { declarations: [ExpandableTopicComponent], imports: [i1.CommonModule,
                SharedModule], exports: [ExpandableTopicComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ExpandableTopicModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ExpandableTopicComponent],
                        imports: [
                            i1.CommonModule,
                            SharedModule
                        ],
                        exports: [
                            ExpandableTopicComponent,
                        ]
                    }]
            }], null, null);
    })();

    var CoreAngularModule = /** @class */ (function () {
        function CoreAngularModule() {
        }
        return CoreAngularModule;
    }());
    CoreAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreAngularModule });
    CoreAngularModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreAngularModule_Factory(t) { return new (t || CoreAngularModule)(); }, imports: [[
                BoxedContentModule,
                HeroImageModule,
                CallToActionAreaModule,
                SpacerModule,
                HttpRequestModule,
                ButtonModule,
                FormModule,
                ModalModule,
                IconsModule,
                SpinnerModule,
                HorizontalRuleModule,
                ParagraphModule,
                AlertModule,
                MainHeaderModule,
                LayoutModule,
                SideNavbarModule,
                ExpandableTopicModule,
            ], BoxedContentModule,
            HeroImageModule,
            CallToActionAreaModule,
            SpacerModule,
            // HttpRequestModule,
            ButtonModule,
            FormModule,
            ModalModule,
            IconsModule,
            SpinnerModule,
            HorizontalRuleModule,
            ParagraphModule,
            AlertModule,
            MainHeaderModule,
            LayoutModule,
            SideNavbarModule,
            ExpandableTopicModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreAngularModule, { imports: [BoxedContentModule,
                HeroImageModule,
                CallToActionAreaModule,
                SpacerModule,
                HttpRequestModule,
                ButtonModule,
                FormModule,
                ModalModule,
                IconsModule,
                SpinnerModule,
                HorizontalRuleModule,
                ParagraphModule,
                AlertModule,
                MainHeaderModule,
                LayoutModule,
                SideNavbarModule,
                ExpandableTopicModule], exports: [BoxedContentModule,
                HeroImageModule,
                CallToActionAreaModule,
                SpacerModule,
                // HttpRequestModule,
                ButtonModule,
                FormModule,
                ModalModule,
                IconsModule,
                SpinnerModule,
                HorizontalRuleModule,
                ParagraphModule,
                AlertModule,
                MainHeaderModule,
                LayoutModule,
                SideNavbarModule,
                ExpandableTopicModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreAngularModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            BoxedContentModule,
                            HeroImageModule,
                            CallToActionAreaModule,
                            SpacerModule,
                            HttpRequestModule,
                            ButtonModule,
                            FormModule,
                            ModalModule,
                            IconsModule,
                            SpinnerModule,
                            HorizontalRuleModule,
                            ParagraphModule,
                            AlertModule,
                            MainHeaderModule,
                            LayoutModule,
                            SideNavbarModule,
                            ExpandableTopicModule,
                        ],
                        exports: [
                            BoxedContentModule,
                            HeroImageModule,
                            CallToActionAreaModule,
                            SpacerModule,
                            // HttpRequestModule,
                            ButtonModule,
                            FormModule,
                            ModalModule,
                            IconsModule,
                            SpinnerModule,
                            HorizontalRuleModule,
                            ParagraphModule,
                            AlertModule,
                            MainHeaderModule,
                            LayoutModule,
                            SideNavbarModule,
                            ExpandableTopicModule,
                        ]
                    }]
            }], null, null);
    })();

    var BaseStorage = /** @class */ (function () {
        function BaseStorage(storage) {
            this._storage = storage;
        }
        BaseStorage.prototype.setData = function (key, value) {
            if (!key || value === null || value === undefined) {
                throw new Error('key and value are requireds!');
            }
            this._storage.setItem(key, JSON.stringify(value));
        };
        BaseStorage.prototype.removeData = function (key) {
            if (!key) {
                throw new Error('key is required!');
            }
            this._storage.removeItem(key);
        };
        BaseStorage.prototype.getData = function (key) {
            if (!key) {
                throw new Error('key is required!');
            }
            return JSON.parse(this._storage.getItem(key));
        };
        return BaseStorage;
    }());

    var SessionStorageService = /** @class */ (function (_super) {
        __extends(SessionStorageService, _super);
        function SessionStorageService() {
            return _super.call(this, sessionStorage) || this;
        }
        return SessionStorageService;
    }(BaseStorage));
    SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
    SessionStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SessionStorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var LocalStorageService = /** @class */ (function (_super) {
        __extends(LocalStorageService, _super);
        function LocalStorageService() {
            return _super.call(this, localStorage) || this;
        }
        return LocalStorageService;
    }(BaseStorage));
    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
    LocalStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LocalStorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of core-angular
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;
    exports.ArrowUpIconComponent = ArrowUpIconComponent;
    exports.ArticleComponent = ArticleComponent;
    exports.AsideComponent = AsideComponent;
    exports.BaseIconComponent = BaseIconComponent;
    exports.BoxedContentComponent = BoxedContentComponent;
    exports.BoxedContentModule = BoxedContentModule;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CalendarCheckIconComponent = CalendarCheckIconComponent;
    exports.CalendarSearchIconComponent = CalendarSearchIconComponent;
    exports.CallToActionAreaComponent = CallToActionAreaComponent;
    exports.CallToActionAreaModule = CallToActionAreaModule;
    exports.CarIconComponent = CarIconComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxGroupComponent = CheckboxGroupComponent;
    exports.CloseIconComponent = CloseIconComponent;
    exports.ContractIconComponent = ContractIconComponent;
    exports.CoreAngularModule = CoreAngularModule;
    exports.DocumentsIconComponent = DocumentsIconComponent;
    exports.DoneIconComponent = DoneIconComponent;
    exports.EmailIconComponent = EmailIconComponent;
    exports.ExitIconComponent = ExitIconComponent;
    exports.ExpandableTopicComponent = ExpandableTopicComponent;
    exports.ExpandableTopicModule = ExpandableTopicModule;
    exports.FinancialIconComponent = FinancialIconComponent;
    exports.FormComponent = FormComponent;
    exports.FormModule = FormModule;
    exports.HeroImageComponent = HeroImageComponent;
    exports.HeroImageModule = HeroImageModule;
    exports.HomeIconComponent = HomeIconComponent;
    exports.HorizontalRuleComponent = HorizontalRuleComponent;
    exports.HorizontalRuleModule = HorizontalRuleModule;
    exports.IconsModule = IconsModule;
    exports.LayoutComponent = LayoutComponent;
    exports.LayoutModule = LayoutModule;
    exports.ListIconComponent = ListIconComponent;
    exports.LocalStorageService = LocalStorageService;
    exports.MainHeaderComponent = MainHeaderComponent;
    exports.MainHeaderModule = MainHeaderModule;
    exports.MenuOutlinedIconComponent = MenuOutlinedIconComponent;
    exports.ModalComponent = ModalComponent;
    exports.ModalModule = ModalModule;
    exports.NonRevenueIconComponent = NonRevenueIconComponent;
    exports.ParagraphComponent = ParagraphComponent;
    exports.ParagraphModule = ParagraphModule;
    exports.PaymentMethodsIconComponent = PaymentMethodsIconComponent;
    exports.RadioButtonComponent = RadioButtonComponent;
    exports.RadioButtonGroupComponent = RadioButtonGroupComponent;
    exports.ReportIconComponent = ReportIconComponent;
    exports.SessionStorageService = SessionStorageService;
    exports.ShieldIconComponent = ShieldIconComponent;
    exports.SideNavbarComponent = SideNavbarComponent;
    exports.SideNavbarModule = SideNavbarModule;
    exports.SmsIconComponent = SmsIconComponent;
    exports.SpacerComponent = SpacerComponent;
    exports.SpacerModule = SpacerModule;
    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.StoreIconComponent = StoreIconComponent;
    exports.SupportIconComponent = SupportIconComponent;
    exports.UnidasLogoIconComponent = UnidasLogoIconComponent;
    exports.UserIconComponent = UserIconComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core-angular.umd.js.map
