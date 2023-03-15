import { Component } from '@angular/core';
import { BaseComponent } from "../../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class ArticleComponent extends BaseComponent {
    constructor() {
        super('article');
    }
    ngOnInit() {
    }
    get rootClassNames() {
        return {
            [`${this.cssPrefix}`]: true,
        };
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(); };
ArticleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ArticleComponent, selectors: [["und-article"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "aside", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.rootClassNames);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ArticleComponent, [{
        type: Component,
        args: [{
                selector: 'und-article',
                templateUrl: './article.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9sYXlvdXQvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2xheW91dC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTW5ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBQ2pEO1FBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQTtJQUNILENBQUM7O2dGQVpVLGdCQUFnQjtxREFBaEIsZ0JBQWdCOztRQ1A3QixnQ0FDRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQVE7O1FBRkQsNENBQTBCOztrRERPcEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDBCQUEwQjthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYmFzZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLWFydGljbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXJ0aWNsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2FydGljbGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0IHJvb3RDbGFzc05hbWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9YF06IHRydWUsXG4gICAgfVxuICB9XG59XG4iLCI8YXNpZGUgW25nQ2xhc3NdPVwicm9vdENsYXNzTmFtZXNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9hc2lkZT5cbiJdfQ==