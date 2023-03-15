import { NgModule } from '@angular/core';
import { BoxedContentModule } from './boxed-content/boxed-content.module';
import { ButtonModule } from "./button/button.module";
import { IconsModule } from "./icons/icons.module";
import { SpacerModule } from "./spacer/spacer.module";
import { ParagraphModule } from "./paragraph/paragraph.module";
import * as i0 from "@angular/core";
export class SharedModule {
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            BoxedContentModule,
            ButtonModule,
            IconsModule,
            SpacerModule,
            ParagraphModule
        ], BoxedContentModule,
        ButtonModule,
        IconsModule,
        SpacerModule,
        ParagraphModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [BoxedContentModule,
        ButtonModule,
        IconsModule,
        SpacerModule,
        ParagraphModule], exports: [BoxedContentModule,
        ButtonModule,
        IconsModule,
        SpacerModule,
        ParagraphModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    BoxedContentModule,
                    ButtonModule,
                    IconsModule,
                    SpacerModule,
                    ParagraphModule
                ],
                exports: [
                    BoxedContentModule,
                    ButtonModule,
                    IconsModule,
                    SpacerModule,
                    ParagraphModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBbUIvRCxNQUFNLE9BQU8sWUFBWTs7Z0RBQVosWUFBWTt1R0FBWixZQUFZLGtCQWZkO1lBQ1Asa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7U0FDaEIsRUFFQyxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTt3RkFHTixZQUFZLGNBZHJCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlLGFBR2Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7a0RBR04sWUFBWTtjQWpCeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJveGVkQ29udGVudE1vZHVsZSB9IGZyb20gJy4vYm94ZWQtY29udGVudC9ib3hlZC1jb250ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tIFwiLi9pY29ucy9pY29ucy5tb2R1bGVcIjtcbmltcG9ydCB7IFNwYWNlck1vZHVsZSB9IGZyb20gXCIuL3NwYWNlci9zcGFjZXIubW9kdWxlXCI7XG5pbXBvcnQgeyBQYXJhZ3JhcGhNb2R1bGUgfSBmcm9tIFwiLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQm94ZWRDb250ZW50TW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBJY29uc01vZHVsZSxcbiAgICBTcGFjZXJNb2R1bGUsXG4gICAgUGFyYWdyYXBoTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCb3hlZENvbnRlbnRNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEljb25zTW9kdWxlLFxuICAgIFNwYWNlck1vZHVsZSxcbiAgICBQYXJhZ3JhcGhNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=