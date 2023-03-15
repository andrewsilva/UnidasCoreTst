import { Component, Input } from '@angular/core';
import { SpacerSidesEnum } from './enum/spacer-sides.enum';
import { SpacerSizesEnum } from './enum/spacer-sizes.enum';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
export class SpacerComponent extends BaseComponent {
    constructor() {
        super('spacer');
        this.side = SpacerSidesEnum.BOTTOM;
        this.size = SpacerSizesEnum.MEDIUM;
    }
    get availableSizes() {
        return SpacerSizesEnum;
    }
    get availableSides() {
        return SpacerSidesEnum;
    }
    get spacerClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.appPrefix}-margin-top-xl`]: this.side == SpacerSidesEnum.TOP
                && this.size == SpacerSizesEnum.EXTRA_LARGE,
            [`${this.appPrefix}-margin-top-lg`]: this.side == SpacerSidesEnum.TOP
                && this.size == SpacerSizesEnum.LARGE,
            [`${this.appPrefix}-margin-top-md`]: this.side == SpacerSidesEnum.TOP
                && this.size == SpacerSizesEnum.MEDIUM,
            [`${this.appPrefix}-margin-top-sm`]: this.side == SpacerSidesEnum.TOP
                && this.size == SpacerSizesEnum.SMALL,
            [`${this.appPrefix}-margin-right-xl`]: this.side == SpacerSidesEnum.RIGHT
                && this.size == SpacerSizesEnum.EXTRA_LARGE,
            [`${this.appPrefix}-margin-right-lg`]: this.side == SpacerSidesEnum.RIGHT
                && this.size == SpacerSizesEnum.LARGE,
            [`${this.appPrefix}-margin-right-md`]: this.side == SpacerSidesEnum.RIGHT
                && this.size == SpacerSizesEnum.MEDIUM,
            [`${this.appPrefix}-margin-right-sm`]: this.side == SpacerSidesEnum.RIGHT
                && this.size == SpacerSizesEnum.SMALL,
            [`${this.appPrefix}-margin-bottom-xl`]: this.side == SpacerSidesEnum.BOTTOM
                && this.size == SpacerSizesEnum.EXTRA_LARGE,
            [`${this.appPrefix}-margin-bottom-lg`]: this.side == SpacerSidesEnum.BOTTOM
                && this.size == SpacerSizesEnum.LARGE,
            [`${this.appPrefix}-margin-bottom-md`]: this.side == SpacerSidesEnum.BOTTOM
                && this.size == SpacerSizesEnum.MEDIUM,
            [`${this.appPrefix}-margin-bottom-sm`]: this.side == SpacerSidesEnum.BOTTOM
                && this.size == SpacerSizesEnum.SMALL,
            [`${this.appPrefix}-margin-left-xl`]: this.side == SpacerSidesEnum.LEFT
                && this.size == SpacerSizesEnum.EXTRA_LARGE,
            [`${this.appPrefix}-margin-left-lg`]: this.side == SpacerSidesEnum.LEFT
                && this.size == SpacerSizesEnum.LARGE,
            [`${this.appPrefix}-margin-left-md`]: this.side == SpacerSidesEnum.LEFT
                && this.size == SpacerSizesEnum.MEDIUM,
            [`${this.appPrefix}-margin-left-sm`]: this.side == SpacerSidesEnum.LEFT
                && this.size == SpacerSizesEnum.SMALL,
        };
    }
}
SpacerComponent.ɵfac = function SpacerComponent_Factory(t) { return new (t || SpacerComponent)(); };
SpacerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpacerComponent, selectors: [["und-spacer"]], inputs: { side: "side", size: "size" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "ngClass"]], template: function SpacerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.spacerClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SpacerComponent, [{
        type: Component,
        args: [{
                selector: 'und-spacer',
                templateUrl: './spacer.component.html',
            }]
    }], function () { return []; }, { side: [{
            type: Input,
            args: ['side']
        }], size: [{
            type: Input,
            args: ['size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL3NwYWNlci9zcGFjZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvc3BhY2VyL3NwYWNlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1oRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBT2hEO1FBQ0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTmxCLFNBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBRzlCLFNBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBSTlCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLEdBQUc7bUJBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLFdBQVc7WUFDbkYsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFT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QUk7bUJBQzFCLElBQUksQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLEtBQUs7U0FDaEYsQ0FBQTtJQUNILENBQUM7OzhFQXZEVSxlQUFlO29EQUFmLGVBQWU7O1FDVDVCLDhCQUdFO1FBQUEsa0JBQVk7UUFDZCxpQkFBTTs7UUFISiwyQ0FBeUI7O2tERFFkLGVBQWU7Y0FKM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDOztrQkFFRSxLQUFLO21CQUFDLE1BQU07O2tCQUdaLEtBQUs7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3BhY2VyU2lkZXNFbnVtIH0gZnJvbSAnLi9lbnVtL3NwYWNlci1zaWRlcy5lbnVtJztcbmltcG9ydCB7IFNwYWNlclNpemVzRW51bSB9IGZyb20gJy4vZW51bS9zcGFjZXItc2l6ZXMuZW51bSc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi9iYXNlLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtc3BhY2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwYWNlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNwYWNlckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBASW5wdXQoJ3NpZGUnKVxuICBzaWRlID0gU3BhY2VyU2lkZXNFbnVtLkJPVFRPTTtcblxuICBASW5wdXQoJ3NpemUnKVxuICBzaXplID0gU3BhY2VyU2l6ZXNFbnVtLk1FRElVTTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignc3BhY2VyJyk7XG4gIH1cblxuICBnZXQgYXZhaWxhYmxlU2l6ZXMoKSB7XG4gICAgcmV0dXJuIFNwYWNlclNpemVzRW51bTtcbiAgfVxuXG4gIGdldCBhdmFpbGFibGVTaWRlcygpIHtcbiAgICByZXR1cm4gU3BhY2VyU2lkZXNFbnVtO1xuICB9XG5cbiAgZ2V0IHNwYWNlckNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH0tbWFyZ2luLXRvcC14bGBdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLlRPUFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PSBTcGFjZXJTaXplc0VudW0uRVhUUkFfTEFSR0UsXG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9LW1hcmdpbi10b3AtbGdgXTogdGhpcy5zaWRlID09IFNwYWNlclNpZGVzRW51bS5UT1BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLkxBUkdFLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tdG9wLW1kYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uVE9QXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLk1FRElVTSxcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH0tbWFyZ2luLXRvcC1zbWBdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLlRPUFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaXplID09IFNwYWNlclNpemVzRW51bS5TTUFMTCxcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH0tbWFyZ2luLXJpZ2h0LXhsYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uUklHSFRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PSBTcGFjZXJTaXplc0VudW0uRVhUUkFfTEFSR0UsXG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9LW1hcmdpbi1yaWdodC1sZ2BdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLlJJR0hUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLkxBUkdFLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tcmlnaHQtbWRgXTogdGhpcy5zaWRlID09IFNwYWNlclNpZGVzRW51bS5SSUdIVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaXplID09IFNwYWNlclNpemVzRW51bS5NRURJVU0sXG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9LW1hcmdpbi1yaWdodC1zbWBdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLlJJR0hUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLlNNQUxMLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tYm90dG9tLXhsYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uQk9UVE9NXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLkVYVFJBX0xBUkdFLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tYm90dG9tLWxnYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uQk9UVE9NXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLkxBUkdFLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tYm90dG9tLW1kYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uQk9UVE9NXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLk1FRElVTSxcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH0tbWFyZ2luLWJvdHRvbS1zbWBdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLkJPVFRPTVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaXplID09IFNwYWNlclNpemVzRW51bS5TTUFMTCxcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH0tbWFyZ2luLWxlZnQteGxgXTogdGhpcy5zaWRlID09IFNwYWNlclNpZGVzRW51bS5MRUZUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNpemUgPT0gU3BhY2VyU2l6ZXNFbnVtLkVYVFJBX0xBUkdFLFxuICAgICAgW2Ake3RoaXMuYXBwUHJlZml4fS1tYXJnaW4tbGVmdC1sZ2BdOiB0aGlzLnNpZGUgPT0gU3BhY2VyU2lkZXNFbnVtLkxFRlRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PSBTcGFjZXJTaXplc0VudW0uTEFSR0UsXG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9LW1hcmdpbi1sZWZ0LW1kYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uTEVGVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaXplID09IFNwYWNlclNpemVzRW51bS5NRURJVU0sXG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9LW1hcmdpbi1sZWZ0LXNtYF06IHRoaXMuc2lkZSA9PSBTcGFjZXJTaWRlc0VudW0uTEVGVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaXplID09IFNwYWNlclNpemVzRW51bS5TTUFMTCxcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdlxuICBbbmdDbGFzc109XCJzcGFjZXJDbGFzc2VzXCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=