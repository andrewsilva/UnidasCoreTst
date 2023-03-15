import { Component, Input } from '@angular/core';
import { BaseComponent } from "../../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icons/arrow-up-icon.component";
const _c0 = ["*"];
export class AsideComponent extends BaseComponent {
    constructor() {
        super('aside');
        this.isOpen = false;
    }
    ngOnInit() {
    }
    toggleVisibility(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
    get rootClassNames() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-open`]: this.isOpen,
        };
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AsideComponent, selectors: [["und-aside"]], inputs: { width: "width" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 6, vars: 7, consts: [[3, "ngClass"], ["href", "#", 3, "click"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width && ctx.width + "px");
        i0.ɵɵproperty("ngClass", ctx.rootClassNames);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__mobile-toggle-button");
        i0.ɵɵadvance(3);
        i0.ɵɵclassMap(ctx.cssPrefix + "__content");
    } }, directives: [i1.NgClass, i2.ArrowUpIconComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AsideComponent, [{
        type: Component,
        args: [{
                selector: 'und-aside',
                templateUrl: './aside.component.html',
            }]
    }], function () { return []; }, { width: [{
            type: Input,
            args: ['width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbGF5b3V0L2FzaWRlL2FzaWRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2xheW91dC9hc2lkZS9hc2lkZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTW5ELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQU0vQztRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhqQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBSWYsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBaUI7UUFDaEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUM1QyxDQUFBO0lBQ0gsQ0FBQzs7NEVBdkJVLGNBQWM7bURBQWQsY0FBYzs7UUNQM0IsZ0NBQ0U7UUFBQSwyQkFDRTtRQUFBLDRCQUErQztRQUFuQyw0RkFBUyw0QkFBd0IsSUFBQztRQUFDLG9DQUF1QztRQUFBLGlCQUFJO1FBQzVGLGlCQUFNO1FBQ04sMkJBQ0U7UUFBQSxrQkFBWTtRQUNkLGlCQUFNO1FBQ1IsaUJBQVE7O1FBUDBCLHNEQUFtQztRQUE5RCw0Q0FBMEI7UUFDMUIsZUFBNEM7UUFBNUMsdURBQTRDO1FBRzVDLGVBQStCO1FBQS9CLDBDQUErQjs7a0RER3pCLGNBQWM7Y0FKMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDOztrQkFFRSxLQUFLO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2Jhc2UuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1hc2lkZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc2lkZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnd2lkdGgnKVxuICB3aWR0aDogbnVtYmVyO1xuXG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdhc2lkZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIGdldCByb290Q2xhc3NOYW1lcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtb3BlbmBdOiB0aGlzLmlzT3BlbixcbiAgICB9XG4gIH1cbn1cbiIsIjxhc2lkZSBbbmdDbGFzc109XCJyb290Q2xhc3NOYW1lc1wiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCAmJiB3aWR0aCsncHgnXCI+XG4gIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19tb2JpbGUtdG9nZ2xlLWJ1dHRvbidcIj5cbiAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJ0b2dnbGVWaXNpYmlsaXR5KCRldmVudClcIj48dW5kLWFycm93LXVwLWljb24+PC91bmQtYXJyb3ctdXAtaWNvbj48L2E+XG4gIDwvZGl2PlxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fY29udGVudCdcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9hc2lkZT5cbiJdfQ==