import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../modal/modal.component";
import * as i3 from "../spacer/spacer.component";
import * as i4 from "../icons/done-icon.component";
import * as i5 from "../button/button.component";
function AlertComponent_div_0_h2_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.cssPrefix + "__title");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function AlertComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r2.cssPrefix + "__message");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.message);
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "und-modal", 2);
    i0.ɵɵelementStart(2, "und-spacer");
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtemplate(4, AlertComponent_div_0_h2_4_Template, 2, 3, "h2", 3);
    i0.ɵɵtemplate(5, AlertComponent_div_0_p_5_Template, 2, 3, "p", 3);
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵelement(7, "und-done-icon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "und-button", 4);
    i0.ɵɵlistener("click", function AlertComponent_div_0_Template_und_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onOkClick(); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.rootClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("isVisible", ctx_r0.isVisible)("noHeader", true);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.cssPrefix + "__body");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.message);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r0.cssPrefix + "__icon");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("block", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.okText);
} }
export class AlertComponent extends BaseComponent {
    constructor() {
        super('alert');
        this.okText = 'Continuar';
        this.ok = new EventEmitter();
    }
    get rootClasses() {
        return {
            [`${this.cssPrefix}`]: true,
        };
    }
    onOkClick() {
        this.ok.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["und-alert"]], inputs: { title: "title", okText: "okText", message: "message", isVisible: "isVisible" }, outputs: { ok: "ok" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "isVisible", "noHeader"], [3, "class", 4, "ngIf"], ["type", "primary", 3, "block", "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 10, 11, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isVisible);
    } }, directives: [i1.NgIf, i1.NgClass, i2.ModalComponent, i3.SpacerComponent, i4.DoneIconComponent, i5.ButtonComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'und-alert',
                templateUrl: './alert.component.html',
            }]
    }], function () { return []; }, { title: [{
            type: Input,
            args: ['title']
        }], okText: [{
            type: Input,
            args: ['okText']
        }], message: [{
            type: Input,
            args: ['message']
        }], isVisible: [{
            type: Input,
            args: ['isVisible']
        }], ok: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvYWxlcnQvYWxlcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0lDU3hDLDBCQUFnRDtJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQTlDLDJDQUE2QjtJQUFDLGVBQVc7SUFBWCxrQ0FBVzs7O0lBQzNELHlCQUFtRDtJQUFBLFlBQWE7SUFBQSxpQkFBSTs7O0lBQWpELDZDQUErQjtJQUFDLGVBQWE7SUFBYixvQ0FBYTs7OztJQVh4RSw4QkFJRTtJQUFBLG9DQUlFO0lBQUEsa0NBQ0U7SUFBQSwyQkFDRTtJQUFBLG1FQUFnRDtJQUNoRCxpRUFBbUQ7SUFDbkQsMkJBQ0U7SUFBQSxnQ0FBK0I7SUFDakMsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFhO0lBRWIscUNBQWdFO0lBQXRCLHFMQUFxQjtJQUFDLFlBQVk7SUFBQSxpQkFBYTtJQUMzRixpQkFBWTtJQUNkLGlCQUFNOzs7SUFuQkosNENBQXVCO0lBSXJCLGVBQXVCO0lBQXZCLDRDQUF1QixrQkFBQTtJQUloQixlQUE0QjtJQUE1QiwwQ0FBNEI7SUFDM0IsZUFBYTtJQUFiLG1DQUFhO0lBQ2QsZUFBZTtJQUFmLHFDQUFlO0lBQ2IsZUFBNEI7SUFBNUIsMENBQTRCO0lBTVYsZUFBYztJQUFkLDRCQUFjO0lBQXVCLGVBQVk7SUFBWixtQ0FBWTs7QURYaEYsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBZS9DO1FBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBWGpCLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFRWCxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlsQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQzVCLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7NEVBM0JVLGNBQWM7bURBQWQsY0FBYztRQ1AzQixpRUFJRTs7UUFGQSxvQ0FBaUI7O2tEREtOLGNBQWM7Y0FKMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDOztrQkFFRSxLQUFLO21CQUFDLE9BQU87O2tCQUdiLEtBQUs7bUJBQUMsUUFBUTs7a0JBR2QsS0FBSzttQkFBQyxTQUFTOztrQkFHZixLQUFLO21CQUFDLFdBQVc7O2tCQUdqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUNvbXBvbmVudH0gZnJvbSBcIi4uL2Jhc2UuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgndGl0bGUnKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnb2tUZXh0JylcbiAgb2tUZXh0ID0gJ0NvbnRpbnVhcic7XG5cbiAgQElucHV0KCdtZXNzYWdlJylcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnaXNWaXNpYmxlJylcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBvayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignYWxlcnQnKTtcbiAgfVxuXG4gIGdldCByb290Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMuY3NzUHJlZml4fWBdOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIG9uT2tDbGljaygpIHtcbiAgICB0aGlzLm9rLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBbbmdDbGFzc109XCJyb290Q2xhc3Nlc1wiXG4gICpuZ0lmPVwiaXNWaXNpYmxlXCJcbj5cbiAgPHVuZC1tb2RhbFxuICAgIFtpc1Zpc2libGVdPVwiaXNWaXNpYmxlXCJcbiAgICBbbm9IZWFkZXJdPVwidHJ1ZVwiXG4gID5cbiAgICA8dW5kLXNwYWNlcj5cbiAgICAgIDxkaXYgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19ib2R5J1wiPlxuICAgICAgICA8aDIgKm5nSWY9XCJ0aXRsZVwiIFtjbGFzc109XCJjc3NQcmVmaXgrJ19fdGl0bGUnXCI+e3sgdGl0bGUgfX08L2gyPlxuICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2VcIiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX21lc3NhZ2UnXCI+e3sgbWVzc2FnZSB9fTwvcD5cbiAgICAgICAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2ljb24nXCI+XG4gICAgICAgICAgPHVuZC1kb25lLWljb24+PC91bmQtZG9uZS1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdW5kLXNwYWNlcj5cblxuICAgIDx1bmQtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgW2Jsb2NrXT1cInRydWVcIiAoY2xpY2spPVwib25Pa0NsaWNrKClcIj57eyBva1RleHQgfX08L3VuZC1idXR0b24+XG4gIDwvdW5kLW1vZGFsPlxuPC9kaXY+XG4iXX0=