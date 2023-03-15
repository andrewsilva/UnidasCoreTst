import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../boxed-content/boxed-content.component";
import * as i3 from "../icons/close-icon.component";
function ModalComponent_section_0_div_3_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function ModalComponent_section_0_div_3_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(3); return ctx_r3.onCloseHandler(); });
    i0.ɵɵelement(1, "und-close-icon");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r2.cssPrefix + "__header-close-button");
} }
function ModalComponent_section_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModalComponent_section_0_div_3_a_3_Template, 2, 2, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.cssPrefix + "__content-header");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r1.cssPrefix + "__header-title");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.noCloseButton);
} }
function ModalComponent_section_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
} }
const _c0 = ["*"];
export class ModalComponent extends BaseComponent {
    constructor() {
        super('modal');
        this.onClose = new EventEmitter();
    }
    onCloseHandler() {
        this.onClose.emit();
    }
    get rootClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-visible`]: this.isVisible,
        };
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["und-modal"]], inputs: { noTitle: "noTitle", noCloseButton: "noCloseButton", noHeader: "noHeader", title: "title", isVisible: "isVisible" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["size", "small", "shadowSize", "small", 3, "shaded", "noPadding"], [3, "class", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ModalComponent_section_0_Template, 7, 10, "section", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isVisible);
    } }, directives: [i1.NgIf, i1.NgClass, i2.BoxedContentComponent, i3.CloseIconComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: 'und-modal',
                templateUrl: './modal.component.html',
            }]
    }], function () { return []; }, { onClose: [{
            type: Output
        }], noTitle: [{
            type: Input,
            args: ['noTitle']
        }], noCloseButton: [{
            type: Input,
            args: ['noCloseButton']
        }], noHeader: [{
            type: Input,
            args: ['noHeader']
        }], title: [{
            type: Input,
            args: ['title']
        }], isVisible: [{
            type: Input,
            args: ['isVisible']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7SUNPeEMsNEJBS0U7SUFGQSxnTUFBMEI7SUFFMUIsaUNBQWlDO0lBQ25DLGlCQUFJOzs7SUFKRix5REFBMkM7OztJQUovQywyQkFDRTtJQUFBLDBCQUF5QztJQUFBLFlBQVM7SUFBQSxpQkFBSztJQUN2RCwyRUFLRTtJQUVKLGlCQUFNOzs7SUFUaUIsb0RBQXNDO0lBQ3ZELGVBQW9DO0lBQXBDLGtEQUFvQztJQUFDLGVBQVM7SUFBVCxrQ0FBUztJQUVoRCxlQUFzQjtJQUF0Qiw0Q0FBc0I7OztJQVRoQyxrQ0FJRTtJQUFBLDJCQUNFO0lBQUEsNENBQ0U7SUFBQSx5RUFDRTtJQVNGLDJCQUNFO0lBQUEsa0JBQVk7SUFDZCxpQkFBTTtJQUNSLGlCQUFvQjtJQUN0QixpQkFBTTtJQUNOLHNCQUEyQztJQUM3QyxpQkFBVTs7O0lBckJSLDRDQUF1QjtJQUdsQixlQUErQjtJQUEvQiw2Q0FBK0I7SUFDRixlQUFlO0lBQWYsNkJBQWUsbUJBQUE7SUFDeEMsZUFBaUI7SUFBakIsdUNBQWlCO0lBVWpCLGVBQW9DO0lBQXBDLGtEQUFvQztJQUt4QyxlQUErQjtJQUEvQiw2Q0FBK0I7OztBRGR0QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7SUFrQi9DO1FBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBbEJQLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1CMUQsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ2xELENBQUM7SUFDSixDQUFDOzs0RUEvQlUsY0FBYzttREFBZCxjQUFjOztRQ1AzQix3RUFJRTs7UUFGQSxvQ0FBaUI7O2tEREtOLGNBQWM7Y0FKMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDOztrQkFFRSxNQUFNOztrQkFFTixLQUFLO21CQUFDLFNBQVM7O2tCQUdmLEtBQUs7bUJBQUMsZUFBZTs7a0JBR3JCLEtBQUs7bUJBQUMsVUFBVTs7a0JBR2hCLEtBQUs7bUJBQUMsT0FBTzs7a0JBR2IsS0FBSzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vYmFzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdub1RpdGxlJylcbiAgbm9UaXRsZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ25vQ2xvc2VCdXR0b24nKVxuICBub0Nsb3NlQnV0dG9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm9IZWFkZXInKVxuICBub0hlYWRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoJ3RpdGxlJylcbiAgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoJ2lzVmlzaWJsZScpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignbW9kYWwnKTtcbiAgfVxuXG4gIG9uQ2xvc2VIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gIH1cblxuICBnZXQgcm9vdENsYXNzZXMoKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtdmlzaWJsZWBdOiB0aGlzLmlzVmlzaWJsZSxcbiAgICB9O1xuICB9XG5cbn1cbiIsIjxzZWN0aW9uXG4gIFtuZ0NsYXNzXT1cInJvb3RDbGFzc2VzXCJcbiAgKm5nSWY9XCJpc1Zpc2libGVcIlxuPlxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fY29udGVudCdcIj5cbiAgICA8dW5kLWJveGVkLWNvbnRlbnQgc2l6ZT1cInNtYWxsXCIgW3NoYWRlZF09XCJ0cnVlXCIgc2hhZG93U2l6ZT1cInNtYWxsXCIgW25vUGFkZGluZ109XCJ0cnVlXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIW5vSGVhZGVyXCIgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19jb250ZW50LWhlYWRlcidcIj5cbiAgICAgICAgPGgyIFtjbGFzc109XCJjc3NQcmVmaXgrJ19faGVhZGVyLXRpdGxlJ1wiPnt7dGl0bGV9fTwvaDI+XG4gICAgICAgIDxhXG4gICAgICAgICAgKm5nSWY9XCIhbm9DbG9zZUJ1dHRvblwiXG4gICAgICAgICAgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19oZWFkZXItY2xvc2UtYnV0dG9uJ1wiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2VIYW5kbGVyKClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHVuZC1jbG9zZS1pY29uPjwvdW5kLWNsb3NlLWljb24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2NvbnRlbnQtYm9keSdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC91bmQtYm94ZWQtY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgW2NsYXNzXT1cImFwcFByZWZpeCsnLWJhY2tkcm9wJ1wiPjwvZGl2PlxuPC9zZWN0aW9uPlxuIl19