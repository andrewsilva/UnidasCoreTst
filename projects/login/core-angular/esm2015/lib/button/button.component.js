import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonSizesEnum } from './enum/button-sizes.enum';
import { BaseComponent } from "../base.component";
import { ButtonTypesEnum } from "./enum/button-types.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../spinner/spinner.component";
function ButtonComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵelement(1, "und-spinner", 3);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class ButtonComponent extends BaseComponent {
    constructor() {
        super('button');
        this.onClick = new EventEmitter();
        this.htmlType = 'button';
        this.buttonSize = ButtonSizesEnum.MEDIUM;
        this.buttonType = ButtonTypesEnum.SECONDARY;
    }
    get buttonClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-small`]: this.buttonSize === ButtonSizesEnum.SMALL,
            [`${this.cssPrefix}--is-medium`]: this.buttonSize === ButtonSizesEnum.MEDIUM,
            [`${this.cssPrefix}--is-large`]: this.buttonSize === ButtonSizesEnum.LARGE,
            [`${this.cssPrefix}--is-primary`]: this.buttonType === ButtonTypesEnum.PRIMARY,
            [`${this.cssPrefix}--is-secondary`]: this.buttonType === ButtonTypesEnum.SECONDARY,
            [`${this.cssPrefix}--is-text`]: this.buttonType === ButtonTypesEnum.TEXT,
            [`${this.cssPrefix}--is-outline`]: this.buttonIsOutline === true,
            [`${this.cssPrefix}--is-block`]: this.buttonIsBlock === true,
            [`${this.cssPrefix}--is-disabled`]: this.buttonIsDisabled === true,
            [`${this.cssPrefix}--is-spinning`]: this.isSpinning,
            [`${this.cssPrefix}--is-wrapper`]: this.buttonType === ButtonTypesEnum.NONE,
        };
    }
    onClickHandler() {
        this.onClick.emit();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["und-button"]], inputs: { isSpinning: ["spinning", "isSpinning"], htmlType: "htmlType", buttonSize: ["size", "buttonSize"], buttonType: ["type", "buttonType"], buttonIsOutline: ["outline", "buttonIsOutline"], buttonIsBlock: ["block", "buttonIsBlock"], buttonIsDisabled: ["disabled", "buttonIsDisabled"] }, outputs: { onClick: "onClick" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [[3, "type", "disabled", "ngClass", "click"], ["class", "und-button__spin", 4, "ngIf"], [1, "und-button__spin"], ["size", "small"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.onClickHandler(); });
        i0.ɵɵtemplate(1, ButtonComponent_span_1_Template, 2, 0, "span", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("type", ctx.htmlType)("disabled", ctx.buttonIsDisabled)("ngClass", ctx.buttonClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSpinning);
    } }, directives: [i1.NgClass, i1.NgIf, i2.SpinnerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'und-button',
                templateUrl: './button.component.html',
            }]
    }], function () { return []; }, { onClick: [{
            type: Output
        }], isSpinning: [{
            type: Input,
            args: ['spinning']
        }], htmlType: [{
            type: Input
        }], buttonSize: [{
            type: Input,
            args: ['size']
        }], buttonType: [{
            type: Input,
            args: ['type']
        }], buttonIsOutline: [{
            type: Input,
            args: ['outline']
        }], buttonIsBlock: [{
            type: Input,
            args: ['block']
        }], buttonIsDisabled: [{
            type: Input,
            args: ['disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBNEIsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7SUNHdkQsK0JBQ0U7SUFBQSxpQ0FBd0M7SUFDMUMsaUJBQU87OztBRENULE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUF3QmhEO1FBQ0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBeEJSLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXZDLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFHcEIsZUFBVSxHQUFXLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFHNUMsZUFBVSxHQUFXLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFhL0MsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxlQUFlLENBQUMsS0FBSztZQUMxRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxlQUFlLENBQUMsTUFBTTtZQUM1RSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxlQUFlLENBQUMsS0FBSztZQUMxRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxlQUFlLENBQUMsT0FBTztZQUM5RSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsQ0FBQyxTQUFTO1lBQ2xGLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsQ0FBQyxJQUFJO1lBQ3hFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUk7WUFDaEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSTtZQUM1RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUk7WUFDbEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ25ELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsQ0FBQyxJQUFJO1NBQzVFLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OEVBL0NVLGVBQWU7b0RBQWYsZUFBZTs7UUNUNUIsaUNBTUU7UUFGQSw0RkFBUyxvQkFBZ0IsSUFBQztRQUUxQixrRUFDRTtRQUVGLGtCQUFZO1FBQ2QsaUJBQVM7O1FBVFAsbUNBQWlCLGtDQUFBLDhCQUFBO1FBS2MsZUFBa0I7UUFBbEIscUNBQWtCOztrRERHdEMsZUFBZTtjQUozQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7YUFDdkM7O2tCQUVFLE1BQU07O2tCQUVOLEtBQUs7bUJBQUMsVUFBVTs7a0JBR2hCLEtBQUs7O2tCQUdMLEtBQUs7bUJBQUMsTUFBTTs7a0JBR1osS0FBSzttQkFBQyxNQUFNOztrQkFHWixLQUFLO21CQUFDLFNBQVM7O2tCQUdmLEtBQUs7bUJBQUMsT0FBTzs7a0JBR2IsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uU2l6ZXNFbnVtIH0gZnJvbSAnLi9lbnVtL2J1dHRvbi1zaXplcy5lbnVtJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge0J1dHRvblR5cGVzRW51bX0gZnJvbSBcIi4vZW51bS9idXR0b24tdHlwZXMuZW51bVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ3NwaW5uaW5nJylcbiAgaXNTcGlubmluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBodG1sVHlwZSA9ICdidXR0b24nO1xuXG4gIEBJbnB1dCgnc2l6ZScpXG4gIGJ1dHRvblNpemU6IHN0cmluZyA9IEJ1dHRvblNpemVzRW51bS5NRURJVU07XG5cbiAgQElucHV0KCd0eXBlJylcbiAgYnV0dG9uVHlwZTogc3RyaW5nID0gQnV0dG9uVHlwZXNFbnVtLlNFQ09OREFSWTtcblxuICBASW5wdXQoJ291dGxpbmUnKVxuICBidXR0b25Jc091dGxpbmU6IGJvb2xlYW47XG5cbiAgQElucHV0KCdibG9jaycpXG4gIGJ1dHRvbklzQmxvY2s6IGJvb2xlYW47XG5cbiAgQElucHV0KCdkaXNhYmxlZCcpXG4gIGJ1dHRvbklzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2J1dHRvbicpO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLXNtYWxsYF06IHRoaXMuYnV0dG9uU2l6ZSA9PT0gQnV0dG9uU2l6ZXNFbnVtLlNNQUxMLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtbWVkaXVtYF06IHRoaXMuYnV0dG9uU2l6ZSA9PT0gQnV0dG9uU2l6ZXNFbnVtLk1FRElVTSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLWxhcmdlYF06IHRoaXMuYnV0dG9uU2l6ZSA9PT0gQnV0dG9uU2l6ZXNFbnVtLkxBUkdFLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtcHJpbWFyeWBdOiB0aGlzLmJ1dHRvblR5cGUgPT09IEJ1dHRvblR5cGVzRW51bS5QUklNQVJZLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtc2Vjb25kYXJ5YF06IHRoaXMuYnV0dG9uVHlwZSA9PT0gQnV0dG9uVHlwZXNFbnVtLlNFQ09OREFSWSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLXRleHRgXTogdGhpcy5idXR0b25UeXBlID09PSBCdXR0b25UeXBlc0VudW0uVEVYVCxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLW91dGxpbmVgXTogdGhpcy5idXR0b25Jc091dGxpbmUgPT09IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1pcy1ibG9ja2BdOiB0aGlzLmJ1dHRvbklzQmxvY2sgPT09IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1pcy1kaXNhYmxlZGBdOiB0aGlzLmJ1dHRvbklzRGlzYWJsZWQgPT09IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1pcy1zcGlubmluZ2BdOiB0aGlzLmlzU3Bpbm5pbmcsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1pcy13cmFwcGVyYF06IHRoaXMuYnV0dG9uVHlwZSA9PT0gQnV0dG9uVHlwZXNFbnVtLk5PTkUsXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xpY2tIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgW3R5cGVdPVwiaHRtbFR5cGVcIlxuICBbZGlzYWJsZWRdPVwiYnV0dG9uSXNEaXNhYmxlZFwiXG4gIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzZXNcIlxuICAoY2xpY2spPVwib25DbGlja0hhbmRsZXIoKVwiXG4+XG4gIDxzcGFuIGNsYXNzPVwidW5kLWJ1dHRvbl9fc3BpblwiICpuZ0lmPVwiaXNTcGlubmluZ1wiPlxuICAgIDx1bmQtc3Bpbm5lciBzaXplPVwic21hbGxcIj48L3VuZC1zcGlubmVyPlxuICA8L3NwYW4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuXG4iXX0=