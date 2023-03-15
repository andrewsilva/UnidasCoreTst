import { Component } from '@angular/core';
import { BaseIconComponent } from "./base-icon.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CloseIconComponent extends BaseIconComponent {
    constructor() {
        super('close-icon');
    }
    get componentCssClasses() {
        return {
            [`${this.appPrefix}`]: true,
            [`${this.cssPrefix}`]: true,
        };
    }
}
CloseIconComponent.ɵfac = function CloseIconComponent_Factory(t) { return new (t || CloseIconComponent)(); };
CloseIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CloseIconComponent, selectors: [["und-close-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7.70711 4.89289C7.31658 5.28342 6.68342 5.28342 6.29289 4.89289L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L4.89289 6.29289C5.28342 6.68342 5.28342 7.31658 4.89289 7.70711L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L6.29289 9.10711C6.68342 8.71658 7.31658 8.71658 7.70711 9.10711L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L9.10711 7.70711C8.71658 7.31658 8.71658 6.68342 9.10711 6.29289L13.3 2.1Z", "fill", "currentColor"]], template: function CloseIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelement(1, "path", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CloseIconComponent, [{
        type: Component,
        args: [{
                selector: 'und-close-icon',
                template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7.70711 4.89289C7.31658 5.28342 6.68342 5.28342 6.29289 4.89289L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L4.89289 6.29289C5.28342 6.68342 5.28342 7.31658 4.89289 7.70711L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L6.29289 9.10711C6.68342 8.71658 7.31658 8.71658 7.70711 9.10711L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L9.10711 7.70711C8.71658 7.31658 8.71658 6.68342 9.10711 6.29289L13.3 2.1Z" fill="currentColor"/>
    </svg>
  `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9pY29ucy9jbG9zZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBVXhELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7SUFDdkQ7UUFDRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUM1QixDQUFBO0lBQ0gsQ0FBQzs7b0ZBVlUsa0JBQWtCO3VEQUFsQixrQkFBa0I7UUFMM0IsbUJBQ0U7UUFERiw4QkFDRTtRQUFBLDBCQUNGO1FBQUEsaUJBQU07O1FBRkQsaURBQStCOztrREFLM0Isa0JBQWtCO2NBUjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlLWljb24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1jbG9zZS1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFtuZ0NsYXNzXT1cImNvbXBvbmVudENzc0NsYXNzZXNcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy4zIDIuMUMxMy42ODY2IDEuNzEzNCAxMy42ODY2IDEuMDg2NiAxMy4zIDAuN0MxMi45MTM0IDAuMzEzNDAxIDEyLjI4NjYgMC4zMTM0MDEgMTEuOSAwLjdMNy43MDcxMSA0Ljg5Mjg5QzcuMzE2NTggNS4yODM0MiA2LjY4MzQyIDUuMjgzNDIgNi4yOTI4OSA0Ljg5Mjg5TDIuMSAwLjdDMS43MTM0IDAuMzEzNCAxLjA4NjYgMC4zMTM0MDEgMC43IDAuN0MwLjMxMzQwMSAxLjA4NjYgMC4zMTM0MDEgMS43MTM0IDAuNyAyLjFMNC44OTI4OSA2LjI5Mjg5QzUuMjgzNDIgNi42ODM0MiA1LjI4MzQyIDcuMzE2NTggNC44OTI4OSA3LjcwNzExTDAuNyAxMS45QzAuMzEzNCAxMi4yODY2IDAuMzEzNDAxIDEyLjkxMzQgMC43IDEzLjNDMS4wODY2IDEzLjY4NjYgMS43MTM0IDEzLjY4NjYgMi4xIDEzLjNMNi4yOTI4OSA5LjEwNzExQzYuNjgzNDIgOC43MTY1OCA3LjMxNjU4IDguNzE2NTggNy43MDcxMSA5LjEwNzExTDExLjkgMTMuM0MxMi4yODY2IDEzLjY4NjYgMTIuOTEzNCAxMy42ODY2IDEzLjMgMTMuM0MxMy42ODY2IDEyLjkxMzQgMTMuNjg2NiAxMi4yODY2IDEzLjMgMTEuOUw5LjEwNzExIDcuNzA3MTFDOC43MTY1OCA3LjMxNjU4IDguNzE2NTggNi42ODM0MiA5LjEwNzExIDYuMjkyODlMMTMuMyAyLjFaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VJY29uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUljb25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignY2xvc2UtaWNvbicpO1xuICB9XG5cbiAgZ2V0IGNvbXBvbmVudENzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmFwcFByZWZpeH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH1gXTogdHJ1ZSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==