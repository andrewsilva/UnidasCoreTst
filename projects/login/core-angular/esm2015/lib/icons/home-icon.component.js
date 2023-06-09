import { Component } from '@angular/core';
import { BaseIconComponent } from "./base-icon.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HomeIconComponent extends BaseIconComponent {
    constructor() {
        super('home-icon');
    }
    get componentCssClasses() {
        return {
            [`${this.appPrefix}`]: true,
            [`${this.cssPrefix}`]: true,
        };
    }
}
HomeIconComponent.ɵfac = function HomeIconComponent_Factory(t) { return new (t || HomeIconComponent)(); };
HomeIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeIconComponent, selectors: [["und-home-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 27 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M20.6392 6.87907L26.7797 13.0458C27.0839 13.3537 27.0628 13.8668 26.7797 14.1505C26.6239 14.2773 26.4401 14.3498 26.2279 14.3498C25.9873 14.3498 25.8029 14.2773 25.6761 14.1505L13.5081 1.86843L1.31171 14.0358C1.00654 14.3407 0.51935 14.3618 0.23651 14.0358C-0.0888589 13.7551 -0.0686529 13.2661 0.23651 12.9612L12.9563 0.241501C13.1118 0.0875297 13.2959 0 13.5081 0C13.6919 0 13.8763 0.0845297 14.0315 0.241501L19.0968 5.33667V2.67438C19.0968 2.23673 19.4363 1.89865 19.8468 1.89865C20.2854 1.89865 20.6392 2.23668 20.6392 2.67438V6.87907Z", "fill", "currentColor"], ["d", "M21.7711 13.2179C21.7711 12.7772 22.1107 12.4391 22.5492 12.4391C22.9595 12.4391 23.299 12.7773 23.299 13.2179V24.6337C23.299 25.0442 22.9595 25.3852 22.5492 25.3852H15.5029C15.0643 25.3852 14.7248 25.0442 14.7248 24.6337V20.2901H12.2629V24.6337C12.2629 25.0442 11.9234 25.3852 11.5131 25.3852H4.43849C4.02829 25.3852 3.68871 25.0442 3.68871 24.6337V13.571C3.68871 13.1605 4.02829 12.8194 4.43849 12.8194C4.87738 12.8194 5.21664 13.1605 5.21664 13.571V23.8549H10.7208V19.5114C10.7208 19.1038 11.0743 18.7477 11.5131 18.7477H15.5029C15.9135 18.7477 16.253 19.1039 16.253 19.5114V23.8549H21.7711V13.2179Z", "fill", "currentColor"]], template: function HomeIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeIconComponent, [{
        type: Component,
        args: [{
                selector: 'und-home-icon',
                template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6392 6.87907L26.7797 13.0458C27.0839 13.3537 27.0628 13.8668 26.7797 14.1505C26.6239 14.2773 26.4401 14.3498 26.2279 14.3498C25.9873 14.3498 25.8029 14.2773 25.6761 14.1505L13.5081 1.86843L1.31171 14.0358C1.00654 14.3407 0.51935 14.3618 0.23651 14.0358C-0.0888589 13.7551 -0.0686529 13.2661 0.23651 12.9612L12.9563 0.241501C13.1118 0.0875297 13.2959 0 13.5081 0C13.6919 0 13.8763 0.0845297 14.0315 0.241501L19.0968 5.33667V2.67438C19.0968 2.23673 19.4363 1.89865 19.8468 1.89865C20.2854 1.89865 20.6392 2.23668 20.6392 2.67438V6.87907Z" fill="currentColor"/>
      <path d="M21.7711 13.2179C21.7711 12.7772 22.1107 12.4391 22.5492 12.4391C22.9595 12.4391 23.299 12.7773 23.299 13.2179V24.6337C23.299 25.0442 22.9595 25.3852 22.5492 25.3852H15.5029C15.0643 25.3852 14.7248 25.0442 14.7248 24.6337V20.2901H12.2629V24.6337C12.2629 25.0442 11.9234 25.3852 11.5131 25.3852H4.43849C4.02829 25.3852 3.68871 25.0442 3.68871 24.6337V13.571C3.68871 13.1605 4.02829 12.8194 4.43849 12.8194C4.87738 12.8194 5.21664 13.1605 5.21664 13.571V23.8549H10.7208V19.5114C10.7208 19.1038 11.0743 18.7477 11.5131 18.7477H15.5029C15.9135 18.7477 16.253 19.1039 16.253 19.5114V23.8549H21.7711V13.2179Z" fill="currentColor"/>
    </svg>

  `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUtYW5ndWxhci9zcmMvbGliL2ljb25zL2hvbWUtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7OztBQVl4RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsaUJBQWlCO0lBQ3REO1FBQ0UsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPO1lBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQTtJQUNILENBQUM7O2tGQVZVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FBUDFCLG1CQUNFO1FBREYsOEJBQ0U7UUFBQSwwQkFDQTtRQUFBLDBCQUNGO1FBQUEsaUJBQU07O1FBSEQsaURBQStCOztrREFPM0IsaUJBQWlCO2NBVjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlLWljb24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1ob21lLWljb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW25nQ2xhc3NdPVwiY29tcG9uZW50Q3NzQ2xhc3Nlc1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAyNyAyNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGggZD1cIk0yMC42MzkyIDYuODc5MDdMMjYuNzc5NyAxMy4wNDU4QzI3LjA4MzkgMTMuMzUzNyAyNy4wNjI4IDEzLjg2NjggMjYuNzc5NyAxNC4xNTA1QzI2LjYyMzkgMTQuMjc3MyAyNi40NDAxIDE0LjM0OTggMjYuMjI3OSAxNC4zNDk4QzI1Ljk4NzMgMTQuMzQ5OCAyNS44MDI5IDE0LjI3NzMgMjUuNjc2MSAxNC4xNTA1TDEzLjUwODEgMS44Njg0M0wxLjMxMTcxIDE0LjAzNThDMS4wMDY1NCAxNC4zNDA3IDAuNTE5MzUgMTQuMzYxOCAwLjIzNjUxIDE0LjAzNThDLTAuMDg4ODU4OSAxMy43NTUxIC0wLjA2ODY1MjkgMTMuMjY2MSAwLjIzNjUxIDEyLjk2MTJMMTIuOTU2MyAwLjI0MTUwMUMxMy4xMTE4IDAuMDg3NTI5NyAxMy4yOTU5IDAgMTMuNTA4MSAwQzEzLjY5MTkgMCAxMy44NzYzIDAuMDg0NTI5NyAxNC4wMzE1IDAuMjQxNTAxTDE5LjA5NjggNS4zMzY2N1YyLjY3NDM4QzE5LjA5NjggMi4yMzY3MyAxOS40MzYzIDEuODk4NjUgMTkuODQ2OCAxLjg5ODY1QzIwLjI4NTQgMS44OTg2NSAyMC42MzkyIDIuMjM2NjggMjAuNjM5MiAyLjY3NDM4VjYuODc5MDdaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjEuNzcxMSAxMy4yMTc5QzIxLjc3MTEgMTIuNzc3MiAyMi4xMTA3IDEyLjQzOTEgMjIuNTQ5MiAxMi40MzkxQzIyLjk1OTUgMTIuNDM5MSAyMy4yOTkgMTIuNzc3MyAyMy4yOTkgMTMuMjE3OVYyNC42MzM3QzIzLjI5OSAyNS4wNDQyIDIyLjk1OTUgMjUuMzg1MiAyMi41NDkyIDI1LjM4NTJIMTUuNTAyOUMxNS4wNjQzIDI1LjM4NTIgMTQuNzI0OCAyNS4wNDQyIDE0LjcyNDggMjQuNjMzN1YyMC4yOTAxSDEyLjI2MjlWMjQuNjMzN0MxMi4yNjI5IDI1LjA0NDIgMTEuOTIzNCAyNS4zODUyIDExLjUxMzEgMjUuMzg1Mkg0LjQzODQ5QzQuMDI4MjkgMjUuMzg1MiAzLjY4ODcxIDI1LjA0NDIgMy42ODg3MSAyNC42MzM3VjEzLjU3MUMzLjY4ODcxIDEzLjE2MDUgNC4wMjgyOSAxMi44MTk0IDQuNDM4NDkgMTIuODE5NEM0Ljg3NzM4IDEyLjgxOTQgNS4yMTY2NCAxMy4xNjA1IDUuMjE2NjQgMTMuNTcxVjIzLjg1NDlIMTAuNzIwOFYxOS41MTE0QzEwLjcyMDggMTkuMTAzOCAxMS4wNzQzIDE4Ljc0NzcgMTEuNTEzMSAxOC43NDc3SDE1LjUwMjlDMTUuOTEzNSAxOC43NDc3IDE2LjI1MyAxOS4xMDM5IDE2LjI1MyAxOS41MTE0VjIzLjg1NDlIMjEuNzcxMVYxMy4yMTc5WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgPC9zdmc+XG5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUljb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlSWNvbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdob21lLWljb24nKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRDc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9YF06IHRydWUsXG4gICAgfVxuICB9XG59XG4iXX0=