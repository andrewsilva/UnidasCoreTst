import { Component, Input } from '@angular/core';
import { SpinnerSizesEnum } from './enum/spinner-sizes.enum';
import { BaseComponent } from "../base.component";
import { SpinnerTypesEnum } from "./enum/spinner-types.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SpinnerComponent extends BaseComponent {
    constructor() {
        super('spinner');
        this.spinnerSize = SpinnerSizesEnum.MEDIUM;
        this.spinnerType = SpinnerTypesEnum.SPIN;
    }
    get spinnerClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-small`]: this.spinnerSize === SpinnerSizesEnum.SMALL,
            [`${this.cssPrefix}--is-growing-circle`]: this.spinnerType === SpinnerTypesEnum.GROWING_CIRCLE,
        };
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["und-spinner"]], inputs: { spinnerSize: ["size", "spinnerSize"], spinnerType: ["type", "spinnerType"] }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["role", "status", 3, "ngClass"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.spinnerClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'und-spinner',
                templateUrl: './spinner.component.html',
            }]
    }], function () { return []; }, { spinnerSize: [{
            type: Input,
            args: ['size']
        }], spinnerType: [{
            type: Input,
            args: ['type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7OztBQU0zRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsYUFBYTtJQU9qRDtRQUNFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQU5uQixnQkFBVyxHQUFXLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUc5QyxnQkFBVyxHQUFXLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUk1QyxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO1lBQzVFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEtBQUssZ0JBQWdCLENBQUMsY0FBYztTQUMvRixDQUFBO0lBQ0gsQ0FBQzs7Z0ZBakJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO1FDVDdCLHlCQUFvRDs7UUFBL0MsNENBQTBCOztrRERTbEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDBCQUEwQjthQUN4Qzs7a0JBRUUsS0FBSzttQkFBQyxNQUFNOztrQkFHWixLQUFLO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lclNpemVzRW51bSB9IGZyb20gJy4vZW51bS9zcGlubmVyLXNpemVzLmVudW0nO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vYmFzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7U3Bpbm5lclR5cGVzRW51bX0gZnJvbSBcIi4vZW51bS9zcGlubmVyLXR5cGVzLmVudW1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCdzaXplJylcbiAgc3Bpbm5lclNpemU6IHN0cmluZyA9IFNwaW5uZXJTaXplc0VudW0uTUVESVVNO1xuXG4gIEBJbnB1dCgndHlwZScpXG4gIHNwaW5uZXJUeXBlOiBzdHJpbmcgPSBTcGlubmVyVHlwZXNFbnVtLlNQSU47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ3NwaW5uZXInKTtcbiAgfVxuXG4gIGdldCBzcGlubmVyQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtc21hbGxgXTogdGhpcy5zcGlubmVyU2l6ZSA9PT0gU3Bpbm5lclNpemVzRW51bS5TTUFMTCxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLWdyb3dpbmctY2lyY2xlYF06IHRoaXMuc3Bpbm5lclR5cGUgPT09IFNwaW5uZXJUeXBlc0VudW0uR1JPV0lOR19DSVJDTEUsXG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInNwaW5uZXJDbGFzc2VzXCIgcm9sZT1cInN0YXR1c1wiPjwvZGl2PlxuIl19