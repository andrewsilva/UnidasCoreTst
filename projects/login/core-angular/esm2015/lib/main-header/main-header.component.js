import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "../icons/close-icon.component";
import * as i4 from "@angular/router";
import * as i5 from "../icons/unidas-logo-icon.component";
import * as i6 from "../paragraph/paragraph.component";
import * as i7 from "../icons/menu-outlined-icon.component";
const _c0 = [[["", "navbar", ""]], [["", "extraInformation", ""]], [["", "navbar", ""]]];
const _c1 = function () { return ["/"]; };
const _c2 = ["[navbar]", "[extraInformation]", "[navbar]"];
export class MainHeaderComponent extends BaseComponent {
    constructor() {
        super('main-header');
        this.isOpen = false;
    }
    get rootClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-open`]: this.isOpen,
        };
    }
    toogleMenuVisibility() {
        this.isOpen = !this.isOpen;
    }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
MainHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainHeaderComponent, selectors: [["und-main-header"]], inputs: { title: "title" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 26, vars: 28, consts: [[3, "ngClass"], ["type", "none", 3, "click"], ["href", "javascript:void(0)", 1, "link-logo", 3, "routerLink"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
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
    } if (rf & 2) {
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
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(27, _c1));
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
    } }, directives: [i1.NgClass, i2.ButtonComponent, i3.CloseIconComponent, i4.RouterLinkWithHref, i5.UnidasLogoIconComponent, i6.ParagraphComponent, i7.MenuOutlinedIconComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MainHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'und-main-header',
                templateUrl: './main-header.component.html',
            }]
    }], function () { return []; }, { title: [{
            type: Input,
            args: ['title']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBTWhELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBS3BEO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSHZCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFJZixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUM1QyxDQUFBO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOztzRkFsQlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7O1FDUGhDLGlDQUdBO1FBQUEsMkJBQ0U7UUFBQSwyQkFDRTtRQUFBLGtCQUE4QjtRQUNoQyxpQkFBTTtRQUNOLDJCQUNFO1FBQUEscUNBQ0U7UUFEc0Isb0dBQVMsMEJBQXNCLElBQUM7UUFDdEQsaUNBQWlDO1FBQ25DLGlCQUFhO1FBQ2YsaUJBQU07UUFDUixpQkFBTTtRQUNKLDJCQUNFO1FBQUEsNEJBQ0U7UUFBQSx1Q0FBNkM7UUFDL0MsaUJBQUk7UUFDTixpQkFBTTtRQUVOLHVCQUE2QztRQUU3QywyQkFDRTtRQUFBLGFBQ0Y7UUFBQSxpQkFBSztRQUVMLDRCQUNFO1FBQUEsNEJBQ0U7UUFBQSw4QkFBTztRQUFBLHNCQUF3QztRQUFhLGlCQUFRO1FBQ3RFLGlCQUFNO1FBRU4sNEJBQ0U7UUFBQSxzQ0FDRTtRQURVLHFHQUFTLDBCQUFzQixJQUFDO1FBQzFDLDBDQUFpRDtRQUNuRCxpQkFBYTtRQUNmLGlCQUFNO1FBQ1IsaUJBQU07UUFFTiw0QkFDRTtRQUFBLDRCQUNFO1FBQUEsc0JBQThCO1FBQ2hDLGlCQUFNO1FBQ04sNEJBQ0U7UUFBQSxzQ0FDRTtRQURzQixxR0FBUywwQkFBc0IsSUFBQztRQUN0RCxrQ0FBaUM7UUFDbkMsaUJBQWE7UUFDZixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQVM7O1FBOUNQLHlDQUF1QjtRQUVwQixlQUFvQztRQUFwQywrQ0FBb0M7UUFDbEMsZUFBbUM7UUFBbkMsOENBQW1DO1FBR25DLGVBQWlEO1FBQWpELDREQUFpRDtRQU1qRCxlQUE0QjtRQUE1Qix1Q0FBNEI7UUFDRixlQUFvQjtRQUFwQix3REFBb0I7UUFLOUMsZUFBaUM7UUFBakMsNENBQWlDO1FBRWxDLGVBQTZCO1FBQTdCLHdDQUE2QjtRQUMvQixlQUNGO1FBREUsMENBQ0Y7UUFFSyxlQUFrRDtRQUFsRCw2REFBa0Q7UUFDaEQsZUFBaUQ7UUFBakQsNERBQWlEO1FBSWpELGVBQWlDO1FBQWpDLDRDQUFpQztRQU9uQyxlQUFvQztRQUFwQywrQ0FBb0M7UUFDbEMsZUFBbUM7UUFBbkMsOENBQW1DO1FBR25DLGVBQWlEO1FBQWpELDREQUFpRDs7a0REbEM3QyxtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUM7O2tCQUVFLEtBQUs7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi9iYXNlLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtbWFpbi1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbi1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgndGl0bGUnKVxuICB0aXRsZTogc3RyaW5nO1xuICBpc09wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignbWFpbi1oZWFkZXInKTtcbiAgfVxuXG4gIGdldCByb290Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtb3BlbmBdOiB0aGlzLmlzT3BlbixcbiAgICB9XG4gIH1cblxuICB0b29nbGVNZW51VmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxufVxuIiwiPGhlYWRlclxuICBbbmdDbGFzc109XCJyb290Q2xhc3Nlc1wiXG4+XG48ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fbWVudS1vdmVybGF5J1wiPlxuICA8bmF2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fbWVudS1uYXZiYXInXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25hdmJhcl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvbmF2PlxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fbWVudS1vdmVybGF5LWNsb3NlLWJ1dHRvbidcIj5cbiAgICA8dW5kLWJ1dHRvbiB0eXBlPVwibm9uZVwiIChjbGljayk9XCJ0b29nbGVNZW51VmlzaWJpbGl0eSgpXCI+XG4gICAgICA8dW5kLWNsb3NlLWljb24+PC91bmQtY2xvc2UtaWNvbj5cbiAgICA8L3VuZC1idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4gIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19sb2dvJ1wiPlxuICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBbcm91dGVyTGlua109XCJbJy8nXVwiIGNsYXNzPVwibGluay1sb2dvXCI+XG4gICAgICA8dW5kLXVuaWRhcy1sb2dvLWljb24+PC91bmQtdW5pZGFzLWxvZ28taWNvbj5cbiAgICA8L2E+IFxuICA8L2Rpdj5cblxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fc2VwYXJhdG9yJ1wiPjwvZGl2PlxuXG4gIDxoMSBbY2xhc3NdPVwiY3NzUHJlZml4KydfX3RpdGxlJ1wiPlxuICAgIHt7IHRpdGxlIH19XG4gIDwvaDE+XG5cbiAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2V4dHJhLWluZm8tYW5kLW1lbnUtYnV0dG9uJ1wiPlxuICAgIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19leHRyYS1wcmltYXJ5LWluZm9ybWF0aW9uJ1wiPlxuICAgICAgPHVuZC1wPjxuZy1jb250ZW50IHNlbGVjdD1cIltleHRyYUluZm9ybWF0aW9uXVwiPjwvbmctY29udGVudD48L3VuZC1wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX21lbnUtaWNvbidcIj5cbiAgICAgIDx1bmQtYnV0dG9uIChjbGljayk9XCJ0b29nbGVNZW51VmlzaWJpbGl0eSgpXCIgdHlwZT1cIm5vbmVcIj5cbiAgICAgICAgPHVuZC1tZW51LW91dGxpbmVkLWljb24+PC91bmQtbWVudS1vdXRsaW5lZC1pY29uPlxuICAgICAgPC91bmQtYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fbWVudS1vdmVybGF5J1wiPlxuICAgIDxuYXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19tZW51LW5hdmJhcidcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuYXZiYXJdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvbmF2PlxuICAgIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19tZW51LW92ZXJsYXktY2xvc2UtYnV0dG9uJ1wiPlxuICAgICAgPHVuZC1idXR0b24gdHlwZT1cIm5vbmVcIiAoY2xpY2spPVwidG9vZ2xlTWVudVZpc2liaWxpdHkoKVwiPlxuICAgICAgICA8dW5kLWNsb3NlLWljb24+PC91bmQtY2xvc2UtaWNvbj5cbiAgICAgIDwvdW5kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2hlYWRlcj5cbiJdfQ==