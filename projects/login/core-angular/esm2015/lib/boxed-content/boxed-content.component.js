import { Component, Input } from '@angular/core';
import { BoxedContentSizesEnum } from './enum/boxed-content-sizes.enum';
import { BoxedContentShadowSizesEnum } from "./enum/boxed-content-shadow-sizes.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a1, a2, a3, a4, a5, a6) { return { "und-boxed-content": true, "und-boxed-content--is-small": a1, "und-boxed-content--is-medium": a2, "und-boxed-content--is-large": a3, "und-boxed-content--is-shaded": a4, "und-boxed-content--has-small-shadow": a5, "und-boxed-content--has-no-padding": a6 }; };
const _c1 = ["*"];
export class BoxedContentComponent {
    constructor() {
        this.size = BoxedContentSizesEnum.MEDIUM;
        this.shadowSize = BoxedContentShadowSizesEnum.MEDIUM;
    }
    ngOnInit() {
    }
    get boxAvailableSizes() {
        return BoxedContentSizesEnum;
    }
    get boxAvailableShadowSizes() {
        return BoxedContentShadowSizesEnum;
    }
}
BoxedContentComponent.ɵfac = function BoxedContentComponent_Factory(t) { return new (t || BoxedContentComponent)(); };
BoxedContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoxedContentComponent, selectors: [["und-boxed-content"]], inputs: { isShaded: ["shaded", "isShaded"], maxWidth: "maxWidth", size: "size", shadowSize: "shadowSize", noPadding: "noPadding" }, ngContentSelectors: _c1, decls: 2, vars: 10, consts: [[3, "ngClass"]], template: function BoxedContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("max-width", ctx.maxWidth, "px");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(3, _c0, ctx.size === ctx.boxAvailableSizes.SMALL, ctx.size === ctx.boxAvailableSizes.MEDIUM, ctx.size === ctx.boxAvailableSizes.LARGE, ctx.isShaded, ctx.shadowSize === ctx.boxAvailableShadowSizes.SMALL, ctx.noPadding));
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BoxedContentComponent, [{
        type: Component,
        args: [{
                selector: 'und-boxed-content',
                templateUrl: './boxed-content.component.html',
            }]
    }], function () { return []; }, { isShaded: [{
            type: Input,
            args: ['shaded']
        }], maxWidth: [{
            type: Input,
            args: ['maxWidth']
        }], size: [{
            type: Input,
            args: ['size']
        }], shadowSize: [{
            type: Input,
            args: ['shadowSize']
        }], noPadding: [{
            type: Input,
            args: ['noPadding']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94ZWQtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9ib3hlZC1jb250ZW50L2JveGVkLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvYm94ZWQtY29udGVudC9ib3hlZC1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQU1uRixNQUFNLE9BQU8scUJBQXFCO0lBZ0JoQztRQVJBLFNBQUksR0FBMEIscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBRzNELGVBQVUsR0FBZ0MsMkJBQTJCLENBQUMsTUFBTSxDQUFDO0lBSzdELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7OzBGQTNCVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7UUNSbEMsOEJBWUU7UUFBQSxrQkFBWTtRQUNkLGlCQUFNOztRQUhKLCtDQUErQjtRQVQvQixzUUFRRTs7a0RERFMscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDOztrQkFFRSxLQUFLO21CQUFDLFFBQVE7O2tCQUdkLEtBQUs7bUJBQUMsVUFBVTs7a0JBR2hCLEtBQUs7bUJBQUMsTUFBTTs7a0JBR1osS0FBSzttQkFBQyxZQUFZOztrQkFHbEIsS0FBSzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb3hlZENvbnRlbnRTaXplc0VudW0gfSBmcm9tICcuL2VudW0vYm94ZWQtY29udGVudC1zaXplcy5lbnVtJztcbmltcG9ydCB7Qm94ZWRDb250ZW50U2hhZG93U2l6ZXNFbnVtfSBmcm9tIFwiLi9lbnVtL2JveGVkLWNvbnRlbnQtc2hhZG93LXNpemVzLmVudW1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLWJveGVkLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm94ZWQtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJveGVkQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2hhZGVkJylcbiAgaXNTaGFkZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCdtYXhXaWR0aCcpXG4gIG1heFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KCdzaXplJylcbiAgc2l6ZTogQm94ZWRDb250ZW50U2l6ZXNFbnVtID0gQm94ZWRDb250ZW50U2l6ZXNFbnVtLk1FRElVTTtcblxuICBASW5wdXQoJ3NoYWRvd1NpemUnKVxuICBzaGFkb3dTaXplOiBCb3hlZENvbnRlbnRTaGFkb3dTaXplc0VudW0gPSBCb3hlZENvbnRlbnRTaGFkb3dTaXplc0VudW0uTUVESVVNO1xuXG4gIEBJbnB1dCgnbm9QYWRkaW5nJylcbiAgbm9QYWRkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXQgYm94QXZhaWxhYmxlU2l6ZXMoKSB7XG4gICAgcmV0dXJuIEJveGVkQ29udGVudFNpemVzRW51bTtcbiAgfVxuXG4gIGdldCBib3hBdmFpbGFibGVTaGFkb3dTaXplcygpIHtcbiAgICByZXR1cm4gQm94ZWRDb250ZW50U2hhZG93U2l6ZXNFbnVtO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtuZ0NsYXNzXT1cIntcbiAgICAgJ3VuZC1ib3hlZC1jb250ZW50JzogdHJ1ZSxcbiAgICAgJ3VuZC1ib3hlZC1jb250ZW50LS1pcy1zbWFsbCc6IHNpemUgPT09IGJveEF2YWlsYWJsZVNpemVzLlNNQUxMLFxuICAgICAndW5kLWJveGVkLWNvbnRlbnQtLWlzLW1lZGl1bSc6IHNpemUgPT09IGJveEF2YWlsYWJsZVNpemVzLk1FRElVTSxcbiAgICAgJ3VuZC1ib3hlZC1jb250ZW50LS1pcy1sYXJnZSc6IHNpemUgPT09IGJveEF2YWlsYWJsZVNpemVzLkxBUkdFLFxuICAgICAndW5kLWJveGVkLWNvbnRlbnQtLWlzLXNoYWRlZCc6IGlzU2hhZGVkLFxuICAgICAndW5kLWJveGVkLWNvbnRlbnQtLWhhcy1zbWFsbC1zaGFkb3cnOiBzaGFkb3dTaXplID09PSBib3hBdmFpbGFibGVTaGFkb3dTaXplcy5TTUFMTCxcbiAgICAgJ3VuZC1ib3hlZC1jb250ZW50LS1oYXMtbm8tcGFkZGluZyc6IG5vUGFkZGluZ1xuICB9XCJcbiAgW3N0eWxlLm1heC13aWR0aC5weF09XCJtYXhXaWR0aFwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19