import { Component, Input } from '@angular/core';
import { HeroImageBackdropTypesEnum } from './enum/hero-image-backdrop-types.enum';
import { HeroImageAnimationTypesEnum } from "./enum/hero-image-animation-types.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function HeroImageComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 1);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.fadeoutClassNames);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r0.fadeinClassNames);
} }
function HeroImageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementContainerEnd();
} }
const _c0 = [[["", "fadeout", ""]], [["", "fadein", ""]], "*"];
const _c1 = function (a0) { return { "background-image": a0 }; };
const _c2 = function (a1) { return { "und-hero-image__backdrop": true, "und-hero-image__backdrop--is-blue": a1 }; };
const _c3 = ["[fadeout]", "[fadein]", "*"];
export class HeroImageComponent {
    constructor() {
        this.animationDelay = 3000;
        this.bgImage = '';
        this.version = '';
    }
    get backdropTypes() {
        return HeroImageBackdropTypesEnum;
    }
    get animationTypes() {
        return HeroImageAnimationTypesEnum;
    }
    ngOnInit() {
        if (this.animationType === HeroImageAnimationTypesEnum.FADEIN) {
            this.startAnimation();
        }
    }
    ngOnChanges(changes) {
        if (!changes.bgImage.currentValue) {
            this.bgImageToStyle = '';
            return;
        }
        if (changes.bgImage.firstChange) {
            this.bgImageToStyle = `url(${changes.bgImage.currentValue})`;
        }
    }
    startAnimation() {
        window.setTimeout(() => {
            this.isFadeinAnimating = true;
            this.isFadeoutAnimating = true;
        }, this.animationDelay);
    }
    get fadeinClassNames() {
        return {
            ['und-hero-image__fadein']: true,
            ['--animating']: this.isFadeinAnimating,
        };
    }
    get fadeoutClassNames() {
        return {
            ['und-hero-image__fadeout']: true,
            ['--animating']: this.isFadeoutAnimating,
        };
    }
}
HeroImageComponent.ɵfac = function HeroImageComponent_Factory(t) { return new (t || HeroImageComponent)(); };
HeroImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeroImageComponent, selectors: [["und-hero-image"]], inputs: { animationType: ["animation", "animationType"], animationDelay: "animationDelay", backdropType: "backdropType", bgImage: ["backgroundImage", "bgImage"], version: ["versionApp", "version"] }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 7, vars: 9, consts: [[1, "und-hero-image", 3, "ngStyle"], [3, "ngClass"], [1, "und-hero-image__content"], [4, "ngIf"], [1, "und-text-version"]], template: function HeroImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, HeroImageComponent_ng_container_3_Template, 5, 2, "ng-container", 3);
        i0.ɵɵtemplate(4, HeroImageComponent_ng_container_4_Template, 2, 0, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx.bgImageToStyle));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c2, ctx.backdropType == ctx.backdropTypes.BLUE));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.animationType === ctx.animationTypes.FADEIN);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.animationType);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.version);
    } }, directives: [i1.NgStyle, i1.NgClass, i1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeroImageComponent, [{
        type: Component,
        args: [{
                selector: 'und-hero-image',
                templateUrl: './hero-image.component.html',
            }]
    }], function () { return []; }, { animationType: [{
            type: Input,
            args: ['animation']
        }], animationDelay: [{
            type: Input,
            args: ['animationDelay']
        }], backdropType: [{
            type: Input,
            args: ['backdropType']
        }], bgImage: [{
            type: Input,
            args: ['backgroundImage']
        }], version: [{
            type: Input,
            args: ['versionApp']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9oZXJvLWltYWdlL2hlcm8taW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvaGVyby1pbWFnZS9oZXJvLWltYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7OztJQ0kvRSw2QkFDRTtJQUFBLDhCQUNFO0lBQUEsa0JBQStCO0lBQ2pDLGlCQUFNO0lBQ04sOEJBQ0U7SUFBQSxxQkFBOEI7SUFDaEMsaUJBQU07SUFDUiwwQkFBZTs7O0lBTlIsZUFBNkI7SUFBN0Isa0RBQTZCO0lBRzdCLGVBQTRCO0lBQTVCLGlEQUE0Qjs7O0lBSW5DLDZCQUNFO0lBQUEscUJBQVk7SUFDZCwwQkFBZTs7Ozs7O0FEUm5CLE1BQU0sT0FBTyxrQkFBa0I7SUFvQjdCO1FBWkEsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFNdEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVBLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFJMUIsQ0FBQztJQUVqQixJQUFJLGFBQWE7UUFDZixPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSywyQkFBMkIsQ0FBQyxNQUFNLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQVE7WUFDTixDQUFDLHdCQUF3QixDQUFDLEVBQUUsSUFBSTtZQUNoQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDeEMsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFRO1lBQ04sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLElBQUk7WUFDakMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1NBQ3pDLENBQUE7SUFDSCxDQUFDOztvRkFsRVUsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FDUi9CLGtDQUNFO1FBQUEseUJBR1M7UUFDVCw4QkFDRTtRQUFBLHFGQUNFO1FBT0YscUZBQ0U7UUFFSixpQkFBTTtRQUVOLDRCQUE0QjtRQUFBLFlBQWE7UUFBQSxpQkFBSTtRQUMvQyxpQkFBVTs7UUFwQnNCLHdFQUFnRDtRQUN6RSxlQUdIO1FBSEcsZ0dBR0g7UUFFYyxlQUErQztRQUEvQyxzRUFBK0M7UUFRL0MsZUFBc0I7UUFBdEIseUNBQXNCO1FBS1YsZUFBYTtRQUFiLGlDQUFhOztrRERYOUIsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOztrQkFLRSxLQUFLO21CQUFDLFdBQVc7O2tCQUdqQixLQUFLO21CQUFDLGdCQUFnQjs7a0JBR3RCLEtBQUs7bUJBQUMsY0FBYzs7a0JBR3BCLEtBQUs7bUJBQUMsaUJBQWlCOztrQkFHdkIsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hlcm9JbWFnZUJhY2tkcm9wVHlwZXNFbnVtfSBmcm9tICcuL2VudW0vaGVyby1pbWFnZS1iYWNrZHJvcC10eXBlcy5lbnVtJztcbmltcG9ydCB7SGVyb0ltYWdlQW5pbWF0aW9uVHlwZXNFbnVtfSBmcm9tIFwiLi9lbnVtL2hlcm8taW1hZ2UtYW5pbWF0aW9uLXR5cGVzLmVudW1cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLWhlcm8taW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9JbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpc0ZhZGVpbkFuaW1hdGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0ZhZGVvdXRBbmltYXRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KCdhbmltYXRpb24nKVxuICBhbmltYXRpb25UeXBlOiBIZXJvSW1hZ2VBbmltYXRpb25UeXBlc0VudW07XG5cbiAgQElucHV0KCdhbmltYXRpb25EZWxheScpXG4gIGFuaW1hdGlvbkRlbGF5ID0gMzAwMDtcblxuICBASW5wdXQoJ2JhY2tkcm9wVHlwZScpXG4gIGJhY2tkcm9wVHlwZTogSGVyb0ltYWdlQmFja2Ryb3BUeXBlc0VudW1cblxuICBASW5wdXQoJ2JhY2tncm91bmRJbWFnZScpXG4gIGJnSW1hZ2U6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgndmVyc2lvbkFwcCcpIHZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gIGJnSW1hZ2VUb1N0eWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXQgYmFja2Ryb3BUeXBlcygpIHtcbiAgICByZXR1cm4gSGVyb0ltYWdlQmFja2Ryb3BUeXBlc0VudW07XG4gIH1cblxuICBnZXQgYW5pbWF0aW9uVHlwZXMoKSB7XG4gICAgcmV0dXJuIEhlcm9JbWFnZUFuaW1hdGlvblR5cGVzRW51bTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvblR5cGUgPT09IEhlcm9JbWFnZUFuaW1hdGlvblR5cGVzRW51bS5GQURFSU4pIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzLmJnSW1hZ2UuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmJnSW1hZ2VUb1N0eWxlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYmdJbWFnZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5iZ0ltYWdlVG9TdHlsZSA9IGB1cmwoJHtjaGFuZ2VzLmJnSW1hZ2UuY3VycmVudFZhbHVlfSlgO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNGYWRlaW5BbmltYXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pc0ZhZGVvdXRBbmltYXRpbmcgPSB0cnVlO1xuICAgIH0sIHRoaXMuYW5pbWF0aW9uRGVsYXkpO1xuICB9XG5cbiAgZ2V0IGZhZGVpbkNsYXNzTmFtZXMoKSB7XG4gICAgcmV0dXJuICB7XG4gICAgICBbJ3VuZC1oZXJvLWltYWdlX19mYWRlaW4nXTogdHJ1ZSxcbiAgICAgIFsnLS1hbmltYXRpbmcnXTogdGhpcy5pc0ZhZGVpbkFuaW1hdGluZyxcbiAgICB9XG4gIH1cblxuICBnZXQgZmFkZW91dENsYXNzTmFtZXMoKSB7XG4gICAgcmV0dXJuICB7XG4gICAgICBbJ3VuZC1oZXJvLWltYWdlX19mYWRlb3V0J106IHRydWUsXG4gICAgICBbJy0tYW5pbWF0aW5nJ106IHRoaXMuaXNGYWRlb3V0QW5pbWF0aW5nLFxuICAgIH1cbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJ1bmQtaGVyby1pbWFnZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6IGJnSW1hZ2VUb1N0eWxlfVwiPlxuICA8ZGl2IFtuZ0NsYXNzXT1cIntcbiAgICAndW5kLWhlcm8taW1hZ2VfX2JhY2tkcm9wJzogdHJ1ZSxcbiAgICAndW5kLWhlcm8taW1hZ2VfX2JhY2tkcm9wLS1pcy1ibHVlJzogYmFja2Ryb3BUeXBlID09IGJhY2tkcm9wVHlwZXMuQkxVRVxuICB9XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ1bmQtaGVyby1pbWFnZV9fY29udGVudFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhbmltYXRpb25UeXBlID09PSBhbmltYXRpb25UeXBlcy5GQURFSU5cIj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwiZmFkZW91dENsYXNzTmFtZXNcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZhZGVvdXRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImZhZGVpbkNsYXNzTmFtZXNcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZhZGVpbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFuaW1hdGlvblR5cGVcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPHAgY2xhc3M9XCJ1bmQtdGV4dC12ZXJzaW9uXCI+e3sgdmVyc2lvbiB9fTwvcD5cbjwvc2VjdGlvbj5cbiJdfQ==