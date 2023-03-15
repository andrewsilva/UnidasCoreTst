import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header.component';
import { SharedModule } from '../shared.module';
import { ModalModule } from "../modal/modal.module";
import * as i0 from "@angular/core";
export class MainHeaderModule {
}
MainHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: MainHeaderModule });
MainHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MainHeaderModule_Factory(t) { return new (t || MainHeaderModule)(); }, imports: [[
            CommonModule,
            SharedModule,
            ModalModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MainHeaderModule, { declarations: [MainHeaderComponent], imports: [CommonModule,
        SharedModule,
        ModalModule,
        RouterModule], exports: [MainHeaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MainHeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [MainHeaderComponent],
                imports: [
                    CommonModule,
                    SharedModule,
                    ModalModule,
                    RouterModule
                ],
                exports: [
                    MainHeaderComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQWNsRCxNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBVmxCO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWTtTQUNiO3dGQUtVLGdCQUFnQixtQkFYWixtQkFBbUIsYUFFaEMsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWSxhQUdaLG1CQUFtQjtrREFHVixnQkFBZ0I7Y0FaNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYWluSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQge01vZGFsTW9kdWxlfSBmcm9tIFwiLi4vbW9kYWwvbW9kYWwubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01haW5IZWFkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBNb2RhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1haW5IZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluSGVhZGVyTW9kdWxlIHsgfVxuIl19