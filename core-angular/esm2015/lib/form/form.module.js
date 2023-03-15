import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { RadioButtonGroupComponent } from "./radio-button-group/radio-button-group.component";
import { CheckboxGroupComponent } from './checkbox-group';
import * as i0 from "@angular/core";
export class FormModule {
}
FormModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormModule });
FormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            ReactiveFormsModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormModule, { declarations: [FormComponent,
        CheckboxComponent,
        RadioButtonComponent,
        RadioButtonGroupComponent,
        CheckboxGroupComponent], imports: [ReactiveFormsModule,
        CommonModule], exports: [FormComponent,
        CheckboxComponent,
        RadioButtonComponent,
        RadioButtonGroupComponent,
        CheckboxGroupComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormComponent,
                    CheckboxComponent,
                    RadioButtonComponent,
                    RadioButtonGroupComponent,
                    CheckboxGroupComponent,
                ],
                imports: [
                    ReactiveFormsModule,
                    CommonModule,
                ],
                exports: [
                    FormComponent,
                    CheckboxComponent,
                    RadioButtonComponent,
                    RadioButtonGroupComponent,
                    CheckboxGroupComponent,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7QUF3QnhELE1BQU0sT0FBTyxVQUFVOzs4Q0FBVixVQUFVO21HQUFWLFVBQVUsa0JBWlo7WUFDUCxtQkFBbUI7WUFDbkIsWUFBWTtTQUNiO3dGQVNVLFVBQVUsbUJBbEJuQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsc0JBQXNCLGFBR3RCLG1CQUFtQjtRQUNuQixZQUFZLGFBR1osYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHNCQUFzQjtrREFHYixVQUFVO2NBcEJ0QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSYWRpb0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmFkaW9CdXR0b25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vcmFkaW8tYnV0dG9uLWdyb3VwL3JhZGlvLWJ1dHRvbi1ncm91cC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hlY2tib3hHcm91cENvbXBvbmVudH0gZnJvbSAnLi9jaGVja2JveC1ncm91cCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIFJhZGlvQnV0dG9uQ29tcG9uZW50LFxuICAgIFJhZGlvQnV0dG9uR3JvdXBDb21wb25lbnQsXG4gICAgQ2hlY2tib3hHcm91cENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgICBSYWRpb0J1dHRvbkNvbXBvbmVudCxcbiAgICBSYWRpb0J1dHRvbkdyb3VwQ29tcG9uZW50LFxuICAgIENoZWNrYm94R3JvdXBDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1vZHVsZSB7IH1cbiJdfQ==