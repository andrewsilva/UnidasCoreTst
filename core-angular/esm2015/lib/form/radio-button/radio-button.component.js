import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from "../../base.component";
import * as i0 from "@angular/core";
import * as i1 from "../../core-angular.service";
import * as i2 from "@angular/common";
const _c0 = ["inputElement"];
const _c1 = ["*"];
export class RadioButtonComponent extends BaseComponent {
    constructor(caService, _renderer) {
        super('radio-button');
        this.caService = caService;
        this._renderer = _renderer;
        this.isBlock = false;
        this.noBullet = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.id = caService.generateUniqueId();
    }
    ngOnInit() {
    }
    writeValue(newValue) {
        this.value = newValue;
        if (newValue === this.radioValue) {
            this.setChecked(true);
            return;
        }
        this.setChecked(false);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this.inputElement.nativeElement, 'disabled', isDisabled);
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
        this.onChange(this._value);
        this.onTouched();
    }
    onValueChange(isChecked, value) {
        if (!isChecked) {
            return;
        }
        this.value = value;
    }
    setChecked(value) {
        if (!this.inputElement) {
            return;
        }
        this._renderer.setProperty(this.inputElement.nativeElement, 'checked', value);
    }
    get cssClassNames() {
        return {
            [this.cssPrefix]: true,
            [`${this.cssPrefix}--is-block`]: this.isBlock,
            [`${this.cssPrefix}--has-no-bullet`]: this.noBullet,
        };
    }
}
RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) { return new (t || RadioButtonComponent)(i0.ɵɵdirectiveInject(i1.CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
RadioButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioButtonComponent, selectors: [["und-radio-button"]], viewQuery: function RadioButtonComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { radioValue: "radioValue", radioName: "radioName", isBlock: "isBlock", noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioButtonComponent),
                multi: true,
            }
        ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 10, consts: [[3, "ngClass"], ["type", "radio", 3, "id", "name", "value", "change"], ["inputElement", ""]], template: function RadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("change", function RadioButtonComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(2); return ctx.onValueChange(_r0.checked, _r0.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span");
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.cssClassNames);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__input");
        i0.ɵɵproperty("id", ctx.id)("name", ctx.radioName)("value", ctx.radioValue);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(ctx.cssPrefix + "__marker");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__content");
    } }, directives: [i2.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioButtonComponent, [{
        type: Component,
        args: [{
                selector: 'und-radio-button',
                templateUrl: './radio-button.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioButtonComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i1.CoreAngularService }, { type: i0.Renderer2 }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], radioValue: [{
            type: Input,
            args: ['radioValue']
        }], radioName: [{
            type: Input,
            args: ['radioName']
        }], isBlock: [{
            type: Input,
            args: ['isBlock']
        }], noBullet: [{
            type: Input,
            args: ['noBullet']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2Zvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUtMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFjbkQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFvQnJELFlBQ21CLFNBQTZCLEVBQzdCLFNBQW9CO1FBRXJDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUhMLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQdkMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBb0NqQixhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUEvQnpCLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFdEIsSUFBSSxRQUFRLEtBQUssSUFB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QUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gXCIuLi8uLi9iYXNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3JlQW5ndWxhclNlcnZpY2V9IGZyb20gXCIuLi8uLi9jb3JlLWFuZ3VsYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bmQtcmFkaW8tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9CdXR0b25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZTtcbiAgaWQ6IHN0cmluZztcblxuICAvLyBAdHMtaWdub3JlXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpXG4gIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoJ3JhZGlvVmFsdWUnKVxuICByYWRpb1ZhbHVlOiBhbnk7XG5cbiAgQElucHV0KCdyYWRpb05hbWUnKVxuICByYWRpb05hbWU6IHN0cmluZztcblxuICBASW5wdXQoJ2lzQmxvY2snKVxuICBpc0Jsb2NrID0gZmFsc2U7XG5cbiAgQElucHV0KCdub0J1bGxldCcpXG4gIG5vQnVsbGV0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYVNlcnZpY2U6IENvcmVBbmd1bGFyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKCdyYWRpby1idXR0b24nKTtcbiAgICB0aGlzLmlkID0gY2FTZXJ2aWNlLmdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgd3JpdGVWYWx1ZShuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLnJhZGlvVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldENoZWNrZWQoZmFsc2UpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHsgfTtcblxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHsgfTtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHYpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UoaXNDaGVja2VkLCB2YWx1ZSkge1xuICAgIGlmICghaXNDaGVja2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBjc3NDbGFzc05hbWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5jc3NQcmVmaXhdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taXMtYmxvY2tgXTogdGhpcy5pc0Jsb2NrLFxuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fS0taGFzLW5vLWJ1bGxldGBdOiB0aGlzLm5vQnVsbGV0LFxuICAgIH1cbiAgfVxufVxuIiwiPGxhYmVsIFtuZ0NsYXNzXT1cImNzc0NsYXNzTmFtZXNcIj5cbiAgPGlucHV0XG4gICAgW2lkXT1cImlkXCJcbiAgICAjaW5wdXRFbGVtZW50XG4gICAgdHlwZT1cInJhZGlvXCJcbiAgICAoY2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoaW5wdXRFbGVtZW50LmNoZWNrZWQsIGlucHV0RWxlbWVudC52YWx1ZSlcIlxuICAgIFtjbGFzc109XCJjc3NQcmVmaXgrJ19faW5wdXQnXCJcbiAgICBbbmFtZV09XCJyYWRpb05hbWVcIlxuICAgIFt2YWx1ZV09XCJyYWRpb1ZhbHVlXCJcbiAgLz5cbiAgPHNwYW4gW2NsYXNzXT1cImNzc1ByZWZpeCsnX19tYXJrZXInXCI+PC9zcGFuPlxuICA8ZGl2IFtjbGFzc109XCJjc3NQcmVmaXgrJ19fY29udGVudCdcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG48L2xhYmVsPlxuIl19