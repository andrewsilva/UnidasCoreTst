import { Component } from '@angular/core';
import { BaseIconComponent } from "./base-icon.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ArrowUpIconComponent extends BaseIconComponent {
    constructor() {
        super('arrow-up-icon');
    }
    get componentCssClasses() {
        return {
            [`${this.appPrefix}`]: true,
            [`${this.cssPrefix}`]: true,
        };
    }
}
ArrowUpIconComponent.ɵfac = function ArrowUpIconComponent_Factory(t) { return new (t || ArrowUpIconComponent)(); };
ArrowUpIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ArrowUpIconComponent, selectors: [["und-arrow-up-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 15 9", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8.21621 0.457102C7.8237 0.0543175 7.17635 0.0543186 6.78384 0.457104L1.06902 6.32155C0.690598 6.70988 0.6906 7.32905 1.06902 7.71738L1.33199 7.98723C1.7245 8.39002 2.37185 8.39002 2.76436 7.98723L6.78384 3.86251C7.17635 3.45972 7.8237 3.45972 8.21621 3.86251L12.2357 7.98723C12.6282 8.39002 13.2756 8.39002 13.6681 7.98723L13.931 7.71738C14.3095 7.32905 14.3095 6.70988 13.931 6.32155L8.21621 0.457102Z", "fill", "currentColor"]], template: function ArrowUpIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ArrowUpIconComponent, [{
        type: Component,
        args: [{
                selector: 'und-arrow-up-icon',
                template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21621 0.457102C7.8237 0.0543175 7.17635 0.0543186 6.78384 0.457104L1.06902 6.32155C0.690598 6.70988 0.6906 7.32905 1.06902 7.71738L1.33199 7.98723C1.7245 8.39002 2.37185 8.39002 2.76436 7.98723L6.78384 3.86251C7.17635 3.45972 7.8237 3.45972 8.21621 3.86251L12.2357 7.98723C12.6282 8.39002 13.2756 8.39002 13.6681 7.98723L13.931 7.71738C14.3095 7.32905 14.3095 6.70988 13.931 6.32155L8.21621 0.457102Z" fill="currentColor"/>
    </svg>
  `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3ctdXAtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9hcnJvdy11cC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBVXhELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFDekQ7UUFDRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUM1QixDQUFBO0lBQ0gsQ0FBQzs7d0ZBVlUsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUFMN0IsbUJBQ0U7UUFERiw4QkFDRTtRQUFBLDBCQUNGO1FBQUEsaUJBQU07O1FBRkQsaURBQStCOztrREFLM0Isb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlLWljb24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1hcnJvdy11cC1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFtuZ0NsYXNzXT1cImNvbXBvbmVudENzc0NsYXNzZXNcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTUgOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMjE2MjEgMC40NTcxMDJDNy44MjM3IDAuMDU0MzE3NSA3LjE3NjM1IDAuMDU0MzE4NiA2Ljc4Mzg0IDAuNDU3MTA0TDEuMDY5MDIgNi4zMjE1NUMwLjY5MDU5OCA2LjcwOTg4IDAuNjkwNiA3LjMyOTA1IDEuMDY5MDIgNy43MTczOEwxLjMzMTk5IDcuOTg3MjNDMS43MjQ1IDguMzkwMDIgMi4zNzE4NSA4LjM5MDAyIDIuNzY0MzYgNy45ODcyM0w2Ljc4Mzg0IDMuODYyNTFDNy4xNzYzNSAzLjQ1OTcyIDcuODIzNyAzLjQ1OTcyIDguMjE2MjEgMy44NjI1MUwxMi4yMzU3IDcuOTg3MjNDMTIuNjI4MiA4LjM5MDAyIDEzLjI3NTYgOC4zOTAwMiAxMy42NjgxIDcuOTg3MjNMMTMuOTMxIDcuNzE3MzhDMTQuMzA5NSA3LjMyOTA1IDE0LjMwOTUgNi43MDk4OCAxMy45MzEgNi4zMjE1NUw4LjIxNjIxIDAuNDU3MTAyWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgPC9zdmc+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFycm93VXBJY29uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUljb25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignYXJyb3ctdXAtaWNvbicpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudENzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH1gXTogdHJ1ZSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==