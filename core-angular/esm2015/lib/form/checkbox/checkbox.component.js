import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../core-angular.service";
import * as i2 from "@angular/common";
const _c0 = ["inputElement"];
const _c1 = ["*"];
export class CheckboxComponent extends BaseComponent {
    constructor(caService, _renderer) {
        super('checkbox');
        this.caService = caService;
        this._renderer = _renderer;
        this.isBlock = false;
        this.noBullet = false;
        this.valueChangesGroup = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        if (!this.id) {
            this.id = this.caService.generateUniqueId();
        }
    }
    writeValue(newValue) {
        this.value = newValue;
        if (newValue === this.checkboxValue) {
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
    onChangeByGroup(id, value, isChecked) {
        this.valueChangesGroup.emit({ id, value, isChecked });
    }
    onValueChange(isChecked, value, id) {
        this.onChangeByGroup(id, value, isChecked);
        this.value = this.checkboxValue ? value : isChecked;
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
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(i1.CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["und-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { id: "id", checkboxValue: "checkboxValue", checkboxName: "checkboxName", isChecked: "isChecked", disabled: "disabled", isBlock: "isBlock", noBullet: "noBullet" }, outputs: { valueChangesGroup: "valueChangesGroup" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true,
            }
        ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 12, consts: [[3, "ngClass"], ["type", "checkbox", 3, "id", "name", "value", "checked", "disabled", "change"], ["inputElement", ""]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("change", function CheckboxComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(2); return ctx.onValueChange(_r0.checked, _r0.value, _r0.id); });
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
        i0.ɵɵproperty("id", ctx.id)("name", ctx.checkboxName)("value", ctx.checkboxValue)("checked", ctx.isChecked)("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(ctx.cssPrefix + "__marker");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__content");
    } }, directives: [i2.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'und-checkbox',
                templateUrl: './checkbox.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i1.CoreAngularService }, { type: i0.Renderer2 }]; }, { id: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], checkboxValue: [{
            type: Input,
            args: ['checkboxValue']
        }], checkboxName: [{
            type: Input,
            args: ['checkboxName']
        }], isChecked: [{
            type: Input,
            args: ['isChecked']
        }], disabled: [{
            type: Input,
            args: ['disabled']
        }], isBlock: [{
            type: Input,
            args: ['isBlock']
        }], noBullet: [{
            type: Input,
            args: ['noBullet']
        }], valueChangesGroup: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvZm9ybS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFjbkQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQWE7SUE4QmxELFlBQ21CLFNBQTZCLEVBQzdCLFNBQW9CO1FBRXJDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhELGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFUdkMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRVAsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXNDakQsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUxQixjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBakMzQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDN0M7SUFD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QixpQkFBaUI7Y0FYN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7a0JBSUUsS0FBSzs7a0JBSUwsU0FBUzttQkFBQyxjQUFjOztrQkFHeEIsS0FBSzttQkFBQyxlQUFlOztrQkFHckIsS0FBSzttQkFBQyxjQUFjOztrQkFHcEIsS0FBSzttQkFBQyxXQUFXOztrQkFHakIsS0FBSzttQkFBQyxVQUFVOztrQkFHaEIsS0FBSzttQkFBQyxTQUFTOztrQkFHZixLQUFLO21CQUFDLFVBQVU7O2tCQUdoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uLy4uL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7Q29yZUFuZ3VsYXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb3JlLWFuZ3VsYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZTtcblxuICBASW5wdXQoKVxuICBpZDogc3RyaW5nO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JylcbiAgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgnY2hlY2tib3hWYWx1ZScpXG4gIGNoZWNrYm94VmFsdWU6IGFueTtcblxuICBASW5wdXQoJ2NoZWNrYm94TmFtZScpXG4gIGNoZWNrYm94TmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnaXNDaGVja2VkJylcbiAgaXNDaGVja2VkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoJ2lzQmxvY2snKVxuICBpc0Jsb2NrID0gZmFsc2U7XG5cbiAgQElucHV0KCdub0J1bGxldCcpXG4gIG5vQnVsbGV0ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlc0dyb3VwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FTZXJ2aWNlOiBDb3JlQW5ndWxhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcignY2hlY2tib3gnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuY2FTZXJ2aWNlLmdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuY2hlY2tib3hWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRDaGVja2VkKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q2hlY2tlZChmYWxzZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xuXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBvbkNoYW5nZUJ5R3JvdXAoaWQsIHZhbHVlLCBpc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlc0dyb3VwLmVtaXQoe2lkLCB2YWx1ZSwgaXNDaGVja2VkfSk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGlzQ2hlY2tlZCwgdmFsdWUsIGlkKTogYW55IHtcbiAgICB0aGlzLm9uQ2hhbmdlQnlHcm91cChpZCwgdmFsdWUsIGlzQ2hlY2tlZCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tib3hWYWx1ZSA/IHZhbHVlIDogaXNDaGVja2VkO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNzc0NsYXNzTmFtZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmNzc1ByZWZpeF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1pcy1ibG9ja2BdOiB0aGlzLmlzQmxvY2ssXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9LS1oYXMtbm8tYnVsbGV0YF06IHRoaXMubm9CdWxsZXQsXG4gICAgfVxuICB9XG59XG4iLCI8bGFiZWwgW25nQ2xhc3NdPVwiY3NzQ2xhc3NOYW1lc1wiPlxuICA8aW5wdXRcbiAgICBbaWRdPVwiaWRcIlxuICAgICNpbnB1dEVsZW1lbnRcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIChjaGFuZ2UpPVwib25WYWx1ZUNoYW5nZShpbnB1dEVsZW1lbnQuY2hlY2tlZCwgaW5wdXRFbGVtZW50LnZhbHVlLCBpbnB1dEVsZW1lbnQuaWQpXCJcbiAgICBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2lucHV0J1wiXG4gICAgW25hbWVdPVwiY2hlY2tib3hOYW1lXCJcbiAgICBbdmFsdWVdPVwiY2hlY2tib3hWYWx1ZVwiXG4gICAgW2NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAvPlxuICA8c3BhbiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX21hcmtlcidcIj48L3NwYW4+XG4gIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19jb250ZW50J1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbjwvbGFiZWw+XG4iXX0=