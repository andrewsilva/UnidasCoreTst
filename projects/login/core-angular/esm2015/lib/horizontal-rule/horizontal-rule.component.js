import { Component } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HorizontalRuleComponent extends BaseComponent {
    constructor() {
        super('horizontal-rule');
    }
    get rootStyleClasses() {
        return {
            [`${this.cssPrefix}`]: true,
        };
    }
}
HorizontalRuleComponent.ɵfac = function HorizontalRuleComponent_Factory(t) { return new (t || HorizontalRuleComponent)(); };
HorizontalRuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HorizontalRuleComponent, selectors: [["und-hr"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass"]], template: function HorizontalRuleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "hr", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HorizontalRuleComponent, [{
        type: Component,
        args: [{
                selector: 'und-hr',
                templateUrl: './horizontal-rule.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC1ydWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2hvcml6b250YWwtcnVsZS9ob3Jpem9udGFsLXJ1bGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvaG9yaXpvbnRhbC1ydWxlL2hvcml6b250YWwtcnVsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7OztBQU1oRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUV4RDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQTtJQUNILENBQUM7OzhGQVZVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUHBDLHdCQUNBOztRQURJLDhDQUE0Qjs7a0RET25CLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1ocicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3Jpem9udGFsLXJ1bGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsUnVsZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdob3Jpem9udGFsLXJ1bGUnKTtcbiAgfVxuXG4gIGdldCByb290U3R5bGVDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9YF06IHRydWUsXG4gICAgfVxuICB9XG5cbn1cbiIsIjxociBbbmdDbGFzc109XCJyb290U3R5bGVDbGFzc2VzXCIgLz5cbiJdfQ==