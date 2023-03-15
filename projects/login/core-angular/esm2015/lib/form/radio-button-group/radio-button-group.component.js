import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from "../../base.component";
import * as i0 from "@angular/core";
import * as i1 from "../../core-angular.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../radio-button/radio-button.component";
function RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const extraInfo_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r6.cssPrefix + "__extra-info-item");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r6.appPrefix + "-text-color-primary ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(extraInfo_r7.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", extraInfo_r7.description, " ");
} }
function RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_p_1_Template, 4, 5, "p", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const radioItem_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r5.cssPrefix + "__extra-info");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", radioItem_r1.extraInfo);
} }
function RadioButtonGroupComponent_und_radio_button_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, RadioButtonGroupComponent_und_radio_button_1_div_1_div_2_Template, 2, 2, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const radioItem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", radioItem_r1.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", radioItem_r1.extraInfo.length);
} }
function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const radioItem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(radioItem_r1.label);
} }
function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const extraInfo_r13 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r11.cssPrefix + "__extra-info-item");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r11.appPrefix + "-text-color-primary ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(extraInfo_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", extraInfo_r13.description, " ");
} }
function RadioButtonGroupComponent_und_radio_button_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_h2_1_Template, 2, 1, "h2", 9);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_p_3_Template, 5, 5, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const radioItem_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", radioItem_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r4.cssPrefix + "__extra-info");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", radioItem_r1.extraInfo);
} }
function RadioButtonGroupComponent_und_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "und-radio-button", 2);
    i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵtemplate(2, RadioButtonGroupComponent_und_radio_button_1_ng_template_2_Template, 4, 3, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const radioItem_r1 = ctx.$implicit;
    const _r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("radioValue", radioItem_r1.value)("radioName", ctx_r0.groupName)("isBlock", ctx_r0.layout === "card")("noBullet", ctx_r0.noBullet);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layout !== "card")("ngIfElse", _r3);
} }
export class RadioButtonGroupComponent extends BaseComponent {
    constructor(caService, _renderer, _fb) {
        super('radio-button-group');
        this.caService = caService;
        this._renderer = _renderer;
        this._fb = _fb;
        this.layout = 'normal';
        this.noBullet = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.id = caService.generateUniqueId();
        this.groupName = `${this.id}-name`;
        this.form = this._fb.group({
            radiosGroup: [null]
        });
    }
    ngOnInit() {
        this.form.get('radiosGroup').valueChanges.subscribe(value => {
            this.onValueChange(value);
        });
    }
    writeValue(newValue) {
        this.value = newValue;
        this.setNewValue(newValue);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        // this._renderer.setProperty(this.inputElement.nativeElement, 'disabled',  isDisabled);
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
        this.onChange(this._value);
        this.onTouched();
    }
    onValueChange(value) {
        this.value = value;
    }
    setNewValue(value) {
        this.form.get('radiosGroup').setValue(value);
    }
}
RadioButtonGroupComponent.ɵfac = function RadioButtonGroupComponent_Factory(t) { return new (t || RadioButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
RadioButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioButtonGroupComponent, selectors: [["und-radio-button-group"]], inputs: { layout: "layout", radioItems: ["items", "radioItems"], noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioButtonGroupComponent),
                multi: true,
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "formGroup", "ngClass"], ["formControlName", "radiosGroup", 3, "radioValue", "radioName", "isBlock", "noBullet", 4, "ngFor", "ngForOf"], ["formControlName", "radiosGroup", 3, "radioValue", "radioName", "isBlock", "noBullet"], [4, "ngIf", "ngIfElse"], ["cardLayoutBlock", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "und-card"], [4, "ngIf"]], template: function RadioButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, RadioButtonGroupComponent_und_radio_button_1_Template, 4, 6, "und-radio-button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form)("ngClass", ctx.cssPrefix);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.radioItems);
    } }, directives: [i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NgClass, i3.NgForOf, i4.RadioButtonComponent, i2.NgControlStatus, i2.FormControlName, i3.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'und-radio-button-group',
                templateUrl: './radio-button-group.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioButtonGroupComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i1.CoreAngularService }, { type: i0.Renderer2 }, { type: i2.FormBuilder }]; }, { layout: [{
            type: Input,
            args: ['layout']
        }], radioItems: [{
            type: Input,
            args: ['items']
        }], noBullet: [{
            type: Input,
            args: ['noBullet']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2Zvcm0vcmFkaW8tYnV0dG9uLWdyb3VwL3JhZGlvLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL3JhZGlvLWJ1dHRvbi1ncm91cC9yYWRpby1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxVQUFVLEVBQUUsS0FBSyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQW9DLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDVTNDLDRCQUNFO0lBQUEsOEJBQW1EO0lBQUEsWUFBbUI7SUFBQSxpQkFBUztJQUMvRSxZQUNGO0lBQUEsaUJBQUk7Ozs7SUFIRCxnRUFBeUM7SUFDbEMsZUFBMEM7SUFBMUMsd0RBQTBDO0lBQUMsZUFBbUI7SUFBbkIsd0NBQW1CO0lBQ3RFLGVBQ0Y7SUFERSx5REFDRjs7O0lBSkYsOEJBQ0U7SUFBQSxxR0FDRTtJQUdKLGlCQUFNOzs7O0lBTGtDLDJEQUFvQztJQUM3QixlQUE2QztJQUE3QyxnREFBNkM7OztJQUg5RiwyQkFDRTtJQUFBLFlBQ0E7SUFBQSxtR0FDRTtJQUtKLGlCQUFNOzs7SUFQSixlQUNBO0lBREEsbURBQ0E7SUFBSyxlQUFrQztJQUFsQyxvREFBa0M7OztJQVNyQywwQkFBNEI7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsd0NBQW1COzs7SUFFN0MsNEJBQ0U7SUFBQSw4QkFBbUQ7SUFBQSxZQUFtQjtJ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eUJBQXlCLHFLQVJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3hELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQ2ZILDhCQUNFO1FBQUEsb0dBUUU7UUFxQkosaUJBQU07O1FBOUJELG9DQUFrQiwwQkFBQTtRQUVuQixlQUFvQztRQUFwQyx3Q0FBb0M7O2tERGUzQix5QkFBeUI7Y0FYckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOztrQkFPRSxLQUFLO21CQUFDLFFBQVE7O2tCQUdkLEtBQUs7bUJBQUMsT0FBTzs7a0JBR2IsS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1CdWlsZGVyLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vYmFzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29yZUFuZ3VsYXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vY29yZS1hbmd1bGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7cmFkaW9Hcm91cEl0ZW1zVHlwZX0gZnJvbSBcIi4vdHlwZXMvcmFkaW8tZ3JvdXAtaXRlbXMudHlwZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtcmFkaW8tYnV0dG9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9CdXR0b25Hcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Hcm91cENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWU7XG4gIGlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBmb3JtOiBhbnk7XG5cbiAgQElucHV0KCdsYXlvdXQnKVxuICBsYXlvdXQ6IHN0cmluZyA9ICdub3JtYWwnO1xuXG4gIEBJbnB1dCgnaXRlbXMnKVxuICByYWRpb0l0ZW1zOiByYWRpb0dyb3VwSXRlbXNUeXBlW107XG5cbiAgQElucHV0KCdub0J1bGxldCcpXG4gIG5vQnVsbGV0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYVNlcnZpY2U6IENvcmVBbmd1bGFyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZiOiBGb3JtQnVpbGRlcixcbiAgKSB7XG4gICAgc3VwZXIoJ3JhZGlvLWJ1dHRvbi1ncm91cCcpO1xuICAgIHRoaXMuaWQgPSBjYVNlcnZpY2UuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMuZ3JvdXBOYW1lID0gYCR7dGhpcy5pZH0tbmFtZWA7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgcmFkaW9zR3JvdXA6IFtudWxsXVxuICAgIH0pO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0uZ2V0KCdyYWRpb3NHcm91cCcpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgICB9KVxuICB9XG5cbiAgd3JpdGVWYWx1ZShuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHsgfTtcblxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHsgfTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHYpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXROZXdWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZm9ybS5nZXQoJ3JhZGlvc0dyb3VwJykuc2V0VmFsdWUodmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiIFtuZ0NsYXNzXT1cImNzc1ByZWZpeFwiPlxuICA8dW5kLXJhZGlvLWJ1dHRvblxuICAgICpuZ0Zvcj1cImxldCByYWRpb0l0ZW0gb2YgcmFkaW9JdGVtc1wiXG4gICAgZm9ybUNvbnRyb2xOYW1lPVwicmFkaW9zR3JvdXBcIlxuICAgIFtyYWRpb1ZhbHVlXT1cInJhZGlvSXRlbS52YWx1ZVwiXG4gICAgW3JhZGlvTmFtZV09XCJncm91cE5hbWVcIlxuICAgIFtpc0Jsb2NrXT1cImxheW91dCA9PT0gJ2NhcmQnXCJcbiAgICBbbm9CdWxsZXRdPVwibm9CdWxsZXRcIlxuICA+XG4gICAgPGRpdiAqbmdJZj1cImxheW91dCAhPT0gJ2NhcmQnOyBlbHNlIGNhcmRMYXlvdXRCbG9ja1wiPlxuICAgICAge3tyYWRpb0l0ZW0ubGFiZWx9fVxuICAgICAgPGRpdiAqbmdJZj1cInJhZGlvSXRlbS5leHRyYUluZm8ubGVuZ3RoXCIgW25nQ2xhc3NdPVwiY3NzUHJlZml4KydfX2V4dHJhLWluZm8nXCI+XG4gICAgICAgIDxwIFtuZ0NsYXNzXT1cImNzc1ByZWZpeCsnX19leHRyYS1pbmZvLWl0ZW0nXCIgKm5nRm9yPVwibGV0IGV4dHJhSW5mbyBvZiByYWRpb0l0ZW0uZXh0cmFJbmZvXCI+XG4gICAgICAgICAgPHN0cm9uZyBbY2xhc3NdPVwiYXBwUHJlZml4KyctdGV4dC1jb2xvci1wcmltYXJ5ICdcIj57e2V4dHJhSW5mby50aXRsZX19PC9zdHJvbmc+XG4gICAgICAgICAge3tleHRyYUluZm8uZGVzY3JpcHRpb259fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI2NhcmRMYXlvdXRCbG9jaz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1bmQtY2FyZFwiPlxuICAgICAgICA8aDIgKm5nSWY9XCJyYWRpb0l0ZW0ubGFiZWxcIj57e3JhZGlvSXRlbS5sYWJlbH19PC9oMj5cbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJjc3NQcmVmaXgrJ19fZXh0cmEtaW5mbydcIj5cbiAgICAgICAgICA8cCBbbmdDbGFzc109XCJjc3NQcmVmaXgrJ19fZXh0cmEtaW5mby1pdGVtJ1wiICpuZ0Zvcj1cImxldCBleHRyYUluZm8gb2YgcmFkaW9JdGVtLmV4dHJhSW5mb1wiPlxuICAgICAgICAgICAgPHN0cm9uZyBbY2xhc3NdPVwiYXBwUHJlZml4KyctdGV4dC1jb2xvci1wcmltYXJ5ICdcIj57e2V4dHJhSW5mby50aXRsZX19PC9zdHJvbmc+PGJyIC8+XG4gICAgICAgICAgICB7e2V4dHJhSW5mby5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvdW5kLXJhZGlvLWJ1dHRvbj5cbjwvZGl2PlxuIl19