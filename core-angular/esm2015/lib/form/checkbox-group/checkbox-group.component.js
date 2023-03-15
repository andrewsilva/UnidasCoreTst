import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../core-angular.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../checkbox/checkbox.component";
function CheckboxGroupComponent_und_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "und-checkbox", 2);
    i0.ɵɵlistener("valueChangesGroup", function CheckboxGroupComponent_und_checkbox_1_Template_und_checkbox_valueChangesGroup_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onCheckboxValueChanges($event); });
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const checkboxItem_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", checkboxItem_r1.id)("checkboxValue", checkboxItem_r1.value)("checkboxName", ctx_r0.groupName)("isBlock", ctx_r0.layout === "card")("noBullet", ctx_r0.noBullet);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(checkboxItem_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", checkboxItem_r1.description, " ");
} }
export class CheckboxGroupComponent extends BaseComponent {
    constructor(caService, _renderer, _fb) {
        super('checkbox-group');
        this.caService = caService;
        this._renderer = _renderer;
        this._fb = _fb;
        this._value = [];
        this.layout = 'normal';
        this.noBullet = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.id = caService.generateUniqueId();
        this.groupName = `${this.id}-name`;
        // this.form = this._fb.group({
        //   checkboxGroup: [[]]
        // });
    }
    ngOnInit() {
        console.log('iniciou', this.checkboxItems);
        // this.form.get('checkboxGroup').valueChanges.subscribe(value => {
        //   this.onValueChange(value);
        // });
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
        // this.form.get('checkboxGroup').setValue(value);
    }
    onCheckboxValueChanges({ id, value, isChecked }) {
        const previousValues = this.value;
        if (isChecked) {
            this.value = [...previousValues, value];
        }
        else {
            this.value = previousValues.filter(oldValue => oldValue !== value);
        }
    }
    ngOnChanges(changes) {
        console.log('changes', changes);
        // this.checkboxItems = this.checkboxItems.map(item => {
        //   item.id = this.caService.generateUniqueId();
        //   return item;
        // });
    }
}
CheckboxGroupComponent.ɵfac = function CheckboxGroupComponent_Factory(t) { return new (t || CheckboxGroupComponent)(i0.ɵɵdirectiveInject(i1.CoreAngularService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
CheckboxGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxGroupComponent, selectors: [["und-checkbox-group"]], inputs: { layout: "layout", checkboxItems: ["items", "checkboxItems"], noBullet: "noBullet" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxGroupComponent),
                multi: true,
            }
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngClass"], [3, "id", "checkboxValue", "checkboxName", "isBlock", "noBullet", "valueChangesGroup", 4, "ngFor", "ngForOf"], [3, "id", "checkboxValue", "checkboxName", "isBlock", "noBullet", "valueChangesGroup"]], template: function CheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CheckboxGroupComponent_und_checkbox_1_Template, 5, 7, "und-checkbox", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.cssPrefix);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.checkboxItems);
    } }, directives: [i3.NgClass, i3.NgForOf, i4.CheckboxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'und-checkbox-group',
                templateUrl: './checkbox-group.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxGroupComponent),
                        multi: true,
                    }
                ]
            }]
    }], function () { return [{ type: i1.CoreAngularService }, { type: i0.Renderer2 }, { type: i2.FormBuilder }]; }, { layout: [{
            type: Input,
            args: ['layout']
        }], checkboxItems: [{
            type: Input,
            args: ['items']
        }], noBullet: [{
            type: Input,
            args: ['noBullet']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvZm9ybS9jaGVja2JveC1ncm91cC9jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsVUFBVSxFQUFFLEtBQUssRUFBeUQsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFvQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7SUNEakQsdUNBU0U7SUFQQSx5UEFBb0Q7SUFPcEQsOEJBQVE7SUFBQSxZQUFzQjtJQUFBLGlCQUFTO0lBQUMscUJBQ3hDO0lBQUEsWUFDRjtJQUFBLGlCQUFlOzs7O0lBUmIsdUNBQXNCLHdDQUFBLGtDQUFBLHFDQUFBLDZCQUFBO0lBTWQsZUFBc0I7SUFBdEIsMkNBQXNCO0lBQzlCLGVBQ0Y7SUFERSw0REFDRjs7QURLRixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQWV2RCxZQUNtQixTQUE2QixFQUM3QixTQUFvQixFQUNwQixHQUFnQjtRQUVqQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUpQLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQWpCM0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQU1wQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBTWxCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUF1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RUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O2tCQU9FLEtBQUs7bUJBQUMsUUFBUTs7a0JBR2QsS0FBSzttQkFBQyxPQUFPOztrQkFHYixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQnVpbGRlciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb3JlQW5ndWxhclNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUtYW5ndWxhci5zZXJ2aWNlJztcbmltcG9ydCB7Y2hlY2tib3hHcm91cEl0ZW1zVHlwZX0gZnJvbSAnLi90eXBlcy9jaGVja2JveC1ncm91cC1pdGVtcy50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLWNoZWNrYm94LWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveEdyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3ZhbHVlID0gW107XG4gIGlkOiBzdHJpbmc7XG4gIGdyb3VwTmFtZTogc3RyaW5nO1xuICBmb3JtOiBhbnk7XG5cbiAgQElucHV0KCdsYXlvdXQnKVxuICBsYXlvdXQgPSAnbm9ybWFsJztcblxuICBASW5wdXQoJ2l0ZW1zJylcbiAgY2hlY2tib3hJdGVtczogY2hlY2tib3hHcm91cEl0ZW1zVHlwZVtdO1xuXG4gIEBJbnB1dCgnbm9CdWxsZXQnKVxuICBub0J1bGxldCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FTZXJ2aWNlOiBDb3JlQW5ndWxhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mYjogRm9ybUJ1aWxkZXIsXG4gICkge1xuICAgIHN1cGVyKCdjaGVja2JveC1ncm91cCcpO1xuICAgIHRoaXMuaWQgPSBjYVNlcnZpY2UuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMuZ3JvdXBOYW1lID0gYCR7dGhpcy5pZH0tbmFtZWA7XG4gICAgLy8gdGhpcy5mb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgIC8vICAgY2hlY2tib3hHcm91cDogW1tdXVxuICAgIC8vIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2luaWNpb3UnLCB0aGlzLmNoZWNrYm94SXRlbXMpXG4gICAgLy8gdGhpcy5mb3JtLmdldCgnY2hlY2tib3hHcm91cCcpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgIC8vICAgdGhpcy5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgZ2V0IHZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodikge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZSk6IHZvaWQge1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0TmV3VmFsdWUodmFsdWUpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmZvcm0uZ2V0KCdjaGVja2JveEdyb3VwJykuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgb25DaGVja2JveFZhbHVlQ2hhbmdlcyh7aWQsIHZhbHVlLCBpc0NoZWNrZWR9KTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbLi4ucHJldmlvdXNWYWx1ZXMsIHZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcihvbGRWYWx1ZSA9PiBvbGRWYWx1ZSAhPT0gdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIC8vIHRoaXMuY2hlY2tib3hJdGVtcyA9IHRoaXMuY2hlY2tib3hJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgLy8gICBpdGVtLmlkID0gdGhpcy5jYVNlcnZpY2UuZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIC8vICAgcmV0dXJuIGl0ZW07XG4gICAgLy8gfSk7XG4gIH1cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiY3NzUHJlZml4XCI+XG4gIDx1bmQtY2hlY2tib3hcbiAgICAqbmdGb3I9XCJsZXQgY2hlY2tib3hJdGVtIG9mIGNoZWNrYm94SXRlbXNcIlxuICAgICh2YWx1ZUNoYW5nZXNHcm91cCk9XCJvbkNoZWNrYm94VmFsdWVDaGFuZ2VzKCRldmVudClcIlxuICAgIFtpZF09XCJjaGVja2JveEl0ZW0uaWRcIlxuICAgIFtjaGVja2JveFZhbHVlXT1cImNoZWNrYm94SXRlbS52YWx1ZVwiXG4gICAgW2NoZWNrYm94TmFtZV09XCJncm91cE5hbWVcIlxuICAgIFtpc0Jsb2NrXT1cImxheW91dCA9PT0gJ2NhcmQnXCJcbiAgICBbbm9CdWxsZXRdPVwibm9CdWxsZXRcIlxuICA+XG4gICAgPHN0cm9uZz57e2NoZWNrYm94SXRlbS5sYWJlbH19PC9zdHJvbmc+IDxici8+XG4gICAge3tjaGVja2JveEl0ZW0uZGVzY3JpcHRpb259fVxuICA8L3VuZC1jaGVja2JveD5cbjwvZGl2PlxuIl19