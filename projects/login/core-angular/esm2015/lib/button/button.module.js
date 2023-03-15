import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { SpinnerModule } from "../spinner/spinner.module";
import * as i0 from "@angular/core";
export class ButtonModule {
}
ButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            CommonModule,
            SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [CommonModule,
        SpinnerModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [
                    CommonModule,
                    SpinnerModule
                ],
                exports: [ButtonComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBVXhELE1BQU0sT0FBTyxZQUFZOztnREFBWixZQUFZO3VHQUFaLFlBQVksa0JBTlo7WUFDTCxZQUFZO1lBQ1osYUFBYTtTQUNoQjt3RkFHUSxZQUFZLG1CQVBSLGVBQWUsYUFFeEIsWUFBWTtRQUNaLGFBQWEsYUFFVCxlQUFlO2tEQUVkLFlBQVk7Y0FSeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osYUFBYTtpQkFDaEI7Z0JBQ0gsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTcGlubmVyTW9kdWxlfSBmcm9tIFwiLi4vc3Bpbm5lci9zcGlubmVyLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTcGlubmVyTW9kdWxlXG4gICAgXSxcbiAgZXhwb3J0czogW0J1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHsgfVxuIl19