import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base.component";
import { ParagraphSizesEnum } from "./enum/paragraph-sizes.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class ParagraphComponent extends BaseComponent {
    constructor() {
        super('paragraph');
        this.size = ParagraphSizesEnum.MEDIUM;
        this.hasNoMargin = false;
    }
    get rootStyleClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-medium`]: this.size === ParagraphSizesEnum.MEDIUM,
            [`${this.cssPrefix}--is-large`]: this.size === ParagraphSizesEnum.LARGE,
            [`${this.cssPrefix}--has-no-margin`]: this.hasNoMargin,
        };
    }
}
ParagraphComponent.ɵfac = function ParagraphComponent_Factory(t) { return new (t || ParagraphComponent)(); };
ParagraphComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ParagraphComponent, selectors: [["und-p"]], inputs: { size: "size", hasNoMargin: "hasNoMargin" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function ParagraphComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "p", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ParagraphComponent, [{
        type: Component,
        args: [{
                selector: 'und-p',
                templateUrl: './paragraph.component.html',
            }]
    }], function () { return []; }, { size: [{
            type: Input,
            args: ['size']
        }], hasNoMargin: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFNL0QsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7SUFPbkQ7UUFDRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFOckIsU0FBSSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztRQUdqQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUlwQixDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLE1BQU07WUFDekUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsS0FBSztZQUN2RSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUN2RCxDQUFDO0lBQ0osQ0FBQzs7b0ZBbEJVLGtCQUFrQjt1REFBbEIsa0JBQWtCOztRQ1IvQiw0QkFBZ0M7UUFBQSxrQkFBWTtRQUFhLGlCQUFJOztRQUExRCw4Q0FBNEI7O2tERFFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixXQUFXLEVBQUUsNEJBQTRCO2FBQzFDOztrQkFFRSxLQUFLO21CQUFDLE1BQU07O2tCQUdaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhcmFncmFwaFNpemVzRW51bX0gZnJvbSBcIi4vZW51bS9wYXJhZ3JhcGgtc2l6ZXMuZW51bVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhZ3JhcGhDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCdzaXplJylcbiAgc2l6ZSA9IFBhcmFncmFwaFNpemVzRW51bS5NRURJVU07XG5cbiAgQElucHV0KClcbiAgaGFzTm9NYXJnaW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigncGFyYWdyYXBoJyk7XG4gIH1cblxuICBnZXQgcm9vdFN0eWxlQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtbWVkaXVtYF06IHRoaXMuc2l6ZSA9PT0gUGFyYWdyYXBoU2l6ZXNFbnVtLk1FRElVTSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLWxhcmdlYF06IHRoaXMuc2l6ZSA9PT0gUGFyYWdyYXBoU2l6ZXNFbnVtLkxBUkdFLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taGFzLW5vLW1hcmdpbmBdOiB0aGlzLmhhc05vTWFyZ2luLFxuICAgIH07XG4gIH1cblxufVxuIiwiPHAgW25nQ2xhc3NdPVwicm9vdFN0eWxlQ2xhc3Nlc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3A+XG4iXX0=