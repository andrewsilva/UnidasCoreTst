import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared.module";
import { ArticleComponent } from "./article/article.component";
import * as i0 from "@angular/core";
export class LayoutModule {
}
LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            ReactiveFormsModule,
            CommonModule,
            SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutComponent,
        AsideComponent,
        ArticleComponent], imports: [ReactiveFormsModule,
        CommonModule,
        SharedModule], exports: [LayoutComponent,
        AsideComponent,
        ArticleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LayoutComponent,
                    AsideComponent,
                    ArticleComponent,
                ],
                imports: [
                    ReactiveFormsModule,
                    CommonModule,
                    SharedModule,
                ],
                exports: [
                    LayoutComponent,
                    AsideComponent,
                    ArticleComponent,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQW1CN0QsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFYZDtZQUNQLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osWUFBWTtTQUNiO3dGQU9VLFlBQVksbUJBZnJCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCLGFBR2hCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osWUFBWSxhQUdaLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO2tEQUdQLFlBQVk7Y0FqQnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixjQUFjO29CQUNkLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNpZGVDb21wb25lbnQgfSBmcm9tICcuL2FzaWRlL2FzaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuLi9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge0FydGljbGVDb21wb25lbnR9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGF5b3V0Q29tcG9uZW50LFxuICAgIEFzaWRlQ29tcG9uZW50LFxuICAgIEFydGljbGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYXlvdXRDb21wb25lbnQsXG4gICAgQXNpZGVDb21wb25lbnQsXG4gICAgQXJ0aWNsZUNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=