import { Component } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class SideNavbarComponent extends BaseComponent {
    constructor() {
        super('side-navbar');
    }
    get rootClasses() {
        return {
            [`${this.cssPrefix}`]: true,
        };
    }
}
SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) { return new (t || SideNavbarComponent)(); };
SideNavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SideNavbarComponent, selectors: [["und-side-navbar"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function SideNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.rootClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SideNavbarComponent, [{
        type: Component,
        args: [{
                selector: 'und-side-navbar',
                templateUrl: './side-navbar.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvc2lkZS1uYXZiYXIvc2lkZS1uYXZiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvc2lkZS1uYXZiYXIvc2lkZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBc0MsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7O0FBTWhELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBQ3BEO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQTtJQUNILENBQUM7O3NGQVRVLG1CQUFtQjt3REFBbkIsbUJBQW1COztRQ1BoQyw4QkFHRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQU07O1FBSEoseUNBQXVCOztrRERNWixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vYmFzZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLXNpZGUtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZU5hdmJhckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignc2lkZS1uYXZiYXInKTtcbiAgfVxuXG4gIGdldCByb290Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgIH1cbiAgfVxufVxuIiwiPG5hdlxuICBbbmdDbGFzc109XCJyb290Q2xhc3Nlc1wiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmF2PlxuIl19