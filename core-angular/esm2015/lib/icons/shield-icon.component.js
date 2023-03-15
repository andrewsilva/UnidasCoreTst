import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ShieldIconComponent extends BaseIconComponent {
    constructor() {
        super('shield-icon');
    }
    get componentCssClasses() {
        return {
            [`${this.appPrefix}`]: true,
            [`${this.cssPrefix}`]: true,
        };
    }
}
ShieldIconComponent.ɵfac = function ShieldIconComponent_Factory(t) { return new (t || ShieldIconComponent)(); };
ShieldIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShieldIconComponent, selectors: [["und-shield-icon"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["width", "1em", "height", "1em", "viewBox", "0 0 511.5 511.5", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "m431.67 117.274c-34.158-11.538-61.493-38.644-73.121-72.509-1.604-4.67-5.98-7.808-10.89-7.808h-183.817c-4.909 0-9.285 3.138-10.89 7.809-11.628 33.864-38.963 60.97-73.12 72.507-4.704 1.588-7.864 5.972-7.864 10.908v87.138c0 59.381 18.837 115.86 54.475 163.331 31.479 41.932 75.979 75.078 125.303 93.332 2.582.955 5.426.955 8.007 0 42.682-15.796 81.242-42.224 111.511-76.426 2.745-3.102 2.456-7.842-.646-10.587-3.103-2.746-7.843-2.456-10.587.646-28.352 32.036-64.388 56.86-104.282 71.851-46.175-17.357-87.798-48.507-117.311-87.821-33.673-44.854-51.471-98.219-51.471-154.326v-84.649c36.665-13.169 66.067-42.336 79.349-78.714h178.866c13.282 36.378 42.684 65.545 79.349 78.714v84.649c0 51.166-14.981 100.562-43.323 142.848-2.306 3.441-1.387 8.1 2.054 10.406 3.441 2.307 8.1 1.387 10.406-2.054 30.004-44.765 45.863-97.049 45.863-151.199v-87.138c.001-4.936-3.159-9.32-7.861-10.908zm-198.42 185.134c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-19.663c2.948-4.43 4.5-9.563 4.5-14.924 0-7.397-3.085-14.553-8.464-19.633-5.456-5.152-12.599-7.749-20.112-7.322-13.277.76-24.162 11.315-25.319 24.551-.537 6.139 1.02 12.243 4.395 17.327zm10.549-35.685c.512-5.866 5.342-10.543 11.233-10.881.24-.014.479-.021.717-.021 3.085 0 5.988 1.147 8.238 3.273 2.427 2.292 3.763 5.391 3.763 8.727 0 2.573-.803 5.024-2.321 7.091-1.425 1.939-2.179 4.267-2.179 6.73v20.765c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-20.766c0-2.461-.754-4.79-2.181-6.732-1.217-1.657-2.6-4.423-2.27-8.186zm217.253-180.669c-37.301-3.795-67.167-33.379-71.014-70.346-.933-8.955-8.412-15.708-17.4-15.708h-233.776c-8.987 0-16.467 6.753-17.398 15.708-3.848 36.966-33.714 66.551-71.015 70.346-8.974.913-15.742 8.394-15.742 17.402v111.864c0 66.815 21.055 130.481 60.889 184.115 19.165 25.805 42.129 48.449 68.254 67.302 26.448 19.087 55.556 33.863 86.516 43.917 3.472 1.128 7.297 1.128 10.769 0 30.959-10.055 60.067-24.831 86.515-43.917 26.125-18.854 49.089-41.497 68.254-67.302 39.834-53.634 60.889-117.3 60.889-184.115v-111.864c0-9.008-6.767-16.49-15.741-17.402zm.741 129.266c0 63.57-20.032 124.143-57.931 175.172-37.163 50.038-88.12 86.656-147.361 105.896-.484.157-1.018.157-1.502 0-59.242-19.24-110.199-55.858-147.361-105.896-37.898-51.029-57.931-111.602-57.931-175.172v-111.864c0-1.283.971-2.349 2.26-2.479 44.334-4.51 79.836-39.718 84.416-83.716.134-1.289 1.2-2.261 2.479-2.261h233.776c1.279 0 2.345.972 2.479 2.261 4.58 43.998 40.082 79.206 84.417 83.716 1.288.131 2.259 1.197 2.259 2.479zm-266.857-88.502c2.206-3.506 1.152-8.136-2.354-10.342-3.506-2.207-8.137-1.151-10.342 2.354-8.688 13.809-13.28 29.75-13.28 46.1v41.715c-11.451 6.426-19.21 18.681-19.21 32.72v87c0 20.678 16.822 37.5 37.5 37.5h137c20.678 0 37.5-16.822 37.5-37.5v-87c0-14.039-7.759-26.293-19.21-32.72v-41.715c0-47.856-38.934-86.79-86.79-86.79-16.528 0-32.616 4.685-46.525 13.549-3.493 2.226-4.52 6.862-2.294 10.355 2.227 3.493 6.862 4.521 10.355 2.294 11.496-7.326 24.796-11.198 38.463-11.198 39.585 0 71.79 32.205 71.79 71.79v37.088c-1.085-.095-2.181-.153-3.29-.153h-11.71v-36.935c0-15.171-5.908-29.435-16.64-40.167-10.732-10.72-24.991-16.624-40.15-16.624-31.314 0-56.79 25.476-56.79 56.79v36.935h-11.71c-1.109 0-2.205.058-3.29.153v-37.087c.001-13.52 3.797-26.699 10.977-38.112zm19.024 38.112c0-23.043 18.747-41.79 41.79-41.79 11.156 0 21.65 4.346 29.547 12.233 7.895 7.896 12.243 18.393 12.243 29.557v36.935h-83.58zm-26.71 51.935h137c12.407 0 22.5 10.093 22.5 22.5v87c0 12.407-10.093 22.5-22.5 22.5h-137c-12.407 0-22.5-10.093-22.5-22.5v-87c0-12.407 10.094-22.5 22.5-22.5z", "fill", "currentColor"]], template: function ShieldIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelementStart(1, "g");
        i0.ɵɵelement(2, "path", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.componentCssClasses);
    } }, directives: [i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShieldIconComponent, [{
        type: Component,
        args: [{
                selector: 'und-shield-icon',
                template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 511.5 511.5"  xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m431.67 117.274c-34.158-11.538-61.493-38.644-73.121-72.509-1.604-4.67-5.98-7.808-10.89-7.808h-183.817c-4.909 0-9.285 3.138-10.89 7.809-11.628 33.864-38.963 60.97-73.12 72.507-4.704 1.588-7.864 5.972-7.864 10.908v87.138c0 59.381 18.837 115.86 54.475 163.331 31.479 41.932 75.979 75.078 125.303 93.332 2.582.955 5.426.955 8.007 0 42.682-15.796 81.242-42.224 111.511-76.426 2.745-3.102 2.456-7.842-.646-10.587-3.103-2.746-7.843-2.456-10.587.646-28.352 32.036-64.388 56.86-104.282 71.851-46.175-17.357-87.798-48.507-117.311-87.821-33.673-44.854-51.471-98.219-51.471-154.326v-84.649c36.665-13.169 66.067-42.336 79.349-78.714h178.866c13.282 36.378 42.684 65.545 79.349 78.714v84.649c0 51.166-14.981 100.562-43.323 142.848-2.306 3.441-1.387 8.1 2.054 10.406 3.441 2.307 8.1 1.387 10.406-2.054 30.004-44.765 45.863-97.049 45.863-151.199v-87.138c.001-4.936-3.159-9.32-7.861-10.908zm-198.42 185.134c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-19.663c2.948-4.43 4.5-9.563 4.5-14.924 0-7.397-3.085-14.553-8.464-19.633-5.456-5.152-12.599-7.749-20.112-7.322-13.277.76-24.162 11.315-25.319 24.551-.537 6.139 1.02 12.243 4.395 17.327zm10.549-35.685c.512-5.866 5.342-10.543 11.233-10.881.24-.014.479-.021.717-.021 3.085 0 5.988 1.147 8.238 3.273 2.427 2.292 3.763 5.391 3.763 8.727 0 2.573-.803 5.024-2.321 7.091-1.425 1.939-2.179 4.267-2.179 6.73v20.765c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5v-20.766c0-2.461-.754-4.79-2.181-6.732-1.217-1.657-2.6-4.423-2.27-8.186zm217.253-180.669c-37.301-3.795-67.167-33.379-71.014-70.346-.933-8.955-8.412-15.708-17.4-15.708h-233.776c-8.987 0-16.467 6.753-17.398 15.708-3.848 36.966-33.714 66.551-71.015 70.346-8.974.913-15.742 8.394-15.742 17.402v111.864c0 66.815 21.055 130.481 60.889 184.115 19.165 25.805 42.129 48.449 68.254 67.302 26.448 19.087 55.556 33.863 86.516 43.917 3.472 1.128 7.297 1.128 10.769 0 30.959-10.055 60.067-24.831 86.515-43.917 26.125-18.854 49.089-41.497 68.254-67.302 39.834-53.634 60.889-117.3 60.889-184.115v-111.864c0-9.008-6.767-16.49-15.741-17.402zm.741 129.266c0 63.57-20.032 124.143-57.931 175.172-37.163 50.038-88.12 86.656-147.361 105.896-.484.157-1.018.157-1.502 0-59.242-19.24-110.199-55.858-147.361-105.896-37.898-51.029-57.931-111.602-57.931-175.172v-111.864c0-1.283.971-2.349 2.26-2.479 44.334-4.51 79.836-39.718 84.416-83.716.134-1.289 1.2-2.261 2.479-2.261h233.776c1.279 0 2.345.972 2.479 2.261 4.58 43.998 40.082 79.206 84.417 83.716 1.288.131 2.259 1.197 2.259 2.479zm-266.857-88.502c2.206-3.506 1.152-8.136-2.354-10.342-3.506-2.207-8.137-1.151-10.342 2.354-8.688 13.809-13.28 29.75-13.28 46.1v41.715c-11.451 6.426-19.21 18.681-19.21 32.72v87c0 20.678 16.822 37.5 37.5 37.5h137c20.678 0 37.5-16.822 37.5-37.5v-87c0-14.039-7.759-26.293-19.21-32.72v-41.715c0-47.856-38.934-86.79-86.79-86.79-16.528 0-32.616 4.685-46.525 13.549-3.493 2.226-4.52 6.862-2.294 10.355 2.227 3.493 6.862 4.521 10.355 2.294 11.496-7.326 24.796-11.198 38.463-11.198 39.585 0 71.79 32.205 71.79 71.79v37.088c-1.085-.095-2.181-.153-3.29-.153h-11.71v-36.935c0-15.171-5.908-29.435-16.64-40.167-10.732-10.72-24.991-16.624-40.15-16.624-31.314 0-56.79 25.476-56.79 56.79v36.935h-11.71c-1.109 0-2.205.058-3.29.153v-37.087c.001-13.52 3.797-26.699 10.977-38.112zm19.024 38.112c0-23.043 18.747-41.79 41.79-41.79 11.156 0 21.65 4.346 29.547 12.233 7.895 7.896 12.243 18.393 12.243 29.557v36.935h-83.58zm-26.71 51.935h137c12.407 0 22.5 10.093 22.5 22.5v87c0 12.407-10.093 22.5-22.5 22.5h-137c-12.407 0-22.5-10.093-22.5-22.5v-87c0-12.407 10.094-22.5 22.5-22.5z" fill='currentColor'/>
      </g>
    </svg>
  `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZWxkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvaWNvbnMvc2hpZWxkLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7QUFZeEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGlCQUFpQjtJQUN4RDtRQUNFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTztZQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQzVCLENBQUE7SUFDSCxDQUFDOztzRkFWVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQVA1QixtQkFDRTtRQURGLDhCQUNFO1FBQUEseUJBQ0U7UUFBQSwwQkFDRjtRQUFBLGlCQUFJO1FBQ04saUJBQU07O1FBSkQsaURBQStCOztrREFPM0IsbUJBQW1CO2NBVi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7OztHQU1UO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUljb25Db21wb25lbnR9IGZyb20gJy4vYmFzZS1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VuZC1zaGllbGQtaWNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbbmdDbGFzc109XCJjb21wb25lbnRDc3NDbGFzc2VzXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDUxMS41IDUxMS41XCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwibTQzMS42NyAxMTcuMjc0Yy0zNC4xNTgtMTEuNTM4LTYxLjQ5My0zOC42NDQtNzMuMTIxLTcyLjUwOS0xLjYwNC00LjY3LTUuOTgtNy44MDgtMTAuODktNy44MDhoLTE4My44MTdjLTQuOTA5IDAtOS4yODUgMy4xMzgtMTAuODkgNy44MDktMTEuNjI4IDMzLjg2NC0zOC45NjMgNjAuOTctNzMuMTIgNzIuNTA3LTQuNzA0IDEuNTg4LTcuODY0IDUuOTcyLTcuODY0IDEwLjkwOHY4Ny4xMzhjMCA1OS4zODEgMTguODM3IDExNS44NiA1NC40NzUgMTYzLjMzMSAzMS40NzkgNDEuOTMyIDc1Ljk3OSA3NS4wNzggMTI1LjMwMyA5My4zMzIgMi41ODIuOTU1IDUuNDI2Ljk1NSA4LjAwNyAwIDQyLjY4Mi0xNS43OTYgODEuMjQyLTQyLjIyNCAxMTEuNTExLTc2LjQyNiAyLjc0NS0zLjEwMiAyLjQ1Ni03Ljg0Mi0uNjQ2LTEwLjU4Ny0zLjEwMy0yLjc0Ni03Ljg0My0yLjQ1Ni0xMC41ODcuNjQ2LTI4LjM1MiAzMi4wMzYtNjQuMzg4IDU2Ljg2LTEwNC4yODIgNzEuODUxLTQ2LjE3NS0xNy4zNTctODcuNzk4LTQ4LjUwNy0xMTcuMzExLTg3LjgyMS0zMy42NzMtNDQuODU0LTUxLjQ3MS05OC4yMTktNTEuNDcxLTE1NC4zMjZ2LTg0LjY0OWMzNi42NjUtMTMuMTY5IDY2LjA2Ny00Mi4zMzYgNzkuMzQ5LTc4LjcxNGgxNzguODY2YzEzLjI4MiAzNi4zNzggNDIuNjg0IDY1LjU0NSA3OS4zNDkgNzguNzE0djg0LjY0OWMwIDUxLjE2Ni0xNC45ODEgMTAwLjU2Mi00My4zMjMgMTQyLjg0OC0yLjMwNiAzLjQ0MS0xLjM4NyA4LjEgMi4wNTQgMTAuNDA2IDMuNDQxIDIuMzA3IDguMSAxLjM4NyAxMC40MDYtMi4wNTQgMzAuMDA0LTQ0Ljc2NSA0NS44NjMtOTcuMDQ5IDQ1Ljg2My0xNTEuMTk5di04Ny4xMzhjLjAwMS00LjkzNi0zLjE1OS05LjMyLTcuODYxLTEwLjkwOHptLTE5OC40MiAxODUuMTM0YzAgMTIuNDA3IDEwLjA5MyAyMi41IDIyLjUgMjIuNXMyMi41LTEwLjA5MyAyMi41LTIyLjV2LTE5LjY2M2MyLjk0OC00LjQzIDQuNS05LjU2MyA0LjUtMTQuOTI0IDAtNy4zOTctMy4wODUtMTQuNTUzLTguNDY0LTE5LjYzMy01LjQ1Ni01LjE1Mi0xMi41OTktNy43NDktMjAuMTEyLTcuMzIyLTEzLjI3Ny43Ni0yNC4xNjIgMTEuMzE1LTI1LjMxOSAyNC41NTEtLjUzNyA2LjEzOSAxLjAyIDEyLjI0MyA0LjM5NSAxNy4zMjd6bTEwLjU0OS0zNS42ODVjLjUxMi01Ljg2NiA1LjM0Mi0xMC41NDMgMTEuMjMzLTEwLjg4MS4yNC0uMDE0LjQ3OS0uMDIxLjcxNy0uMDIxIDMuMDg1IDAgNS45ODggMS4xNDcgOC4yMzggMy4yNzMgMi40MjcgMi4yOTIgMy43NjMgNS4zOTEgMy43NjMgOC43MjcgMCAyLjU3My0uODAzIDUuMDI0LTIuMzIxIDcuMDkxLTEuNDI1IDEuOTM5LTIuMTc5IDQuMjY3LTIuMTc5IDYuNzN2MjAuNzY1YzAgNC4xMzYtMy4zNjQgNy41LTcuNSA3LjVzLTcuNS0zLjM2NC03LjUtNy41di0yMC43NjZjMC0yLjQ2MS0uNzU0LTQuNzktMi4xODEtNi43MzItMS4yMTctMS42NTctMi42LTQuNDIzLTIuMjctOC4xODZ6bTIxNy4yNTMtMTgwLjY2OWMtMzcuMzAxLTMuNzk1LTY3LjE2Ny0zMy4zNzktNzEuMDE0LTcwLjM0Ni0uOTMzLTguOTU1LTguNDEyLTE1LjcwOC0xNy40LTE1LjcwOGgtMjMzLjc3NmMtOC45ODcgMC0xNi40NjcgNi43NTMtMTcuMzk4IDE1LjcwOC0zLjg0OCAzNi45NjYtMzMuNzE0IDY2LjU1MS03MS4wMTUgNzAuMzQ2LTguOTc0LjkxMy0xNS43NDIgOC4zOTQtMTUuNzQyIDE3LjQwMnYxMTEuODY0YzAgNjYuODE1IDIxLjA1NSAxMzAuNDgxIDYwLjg4OSAxODQuMTE1IDE5LjE2NSAyNS44MDUgNDIuMTI5IDQ4LjQ0OSA2OC4yNTQgNjcuMzAyIDI2LjQ0OCAxOS4wODcgNTUuNTU2IDMzLjg2MyA4Ni41MTYgNDMuOTE3IDMuNDcyIDEuMTI4IDcuMjk3IDEuMTI4IDEwLjc2OSAwIDMwLjk1OS0xMC4wNTUgNjAuMDY3LTI0LjgzMSA4Ni41MTUtNDMuOTE3IDI2LjEyNS0xOC44NTQgNDkuMDg5LTQxLjQ5NyA2OC4yNTQtNjcuMzAyIDM5LjgzNC01My42MzQgNjAuODg5LTExNy4zIDYwLjg4OS0xODQuMTE1di0xMTEuODY0YzAtOS4wMDgtNi43NjctMTYuNDktMTUuNzQxLTE3LjQwMnptLjc0MSAxMjkuMjY2YzAgNjMuNTctMjAuMDMyIDEyNC4xNDMtNTcuOTMxIDE3NS4xNzItMzcuMTYzIDUwLjAzOC04OC4xMiA4Ni42NTYtMTQ3LjM2MSAxMDUuODk2LS40ODQuMTU3LTEuMDE4LjE1Ny0xLjUwMiAwLTU5LjI0Mi0xOS4yNC0xMTAuMTk5LTU1Ljg1OC0xNDcuMzYxLTEwNS44OTYtMzcuODk4LTUxLjAyOS01Ny45MzEtMTExLjYwMi01Ny45MzEtMTc1LjE3MnYtMTExLjg2NGMwLTEuMjgzLjk3MS0yLjM0OSAyLjI2LTIuNDc5IDQ0LjMzNC00LjUxIDc5LjgzNi0zOS43MTggODQuNDE2LTgzLjcxNi4xMzQtMS4yODkgMS4yLTIuMjYxIDIuNDc5LTIuMjYxaDIzMy43NzZjMS4yNzkgMCAyLjM0NS45NzIgMi40NzkgMi4yNjEgNC41OCA0My45OTggNDAuMDgyIDc5LjIwNiA4NC40MTcgODMuNzE2IDEuMjg4LjEzMSAyLjI1OSAxLjE5NyAyLjI1OSAyLjQ3OXptLTI2Ni44NTctODguNTAyYzIuMjA2LTMuNTA2IDEuMTUyLTguMTM2LTIuMzU0LTEwLjM0Mi0zLjUwNi0yLjIwNy04LjEzNy0xLjE1MS0xMC4zNDIgMi4zNTQtOC42ODggMTMuODA5LTEzLjI4IDI5Ljc1LTEzLjI4IDQ2LjF2NDEuNzE1Yy0xMS40NTEgNi40MjYtMTkuMjEgMTguNjgxLTE5LjIxIDMyLjcydjg3YzAgMjAuNjc4IDE2LjgyMiAzNy41IDM3LjUgMzcuNWgxMzdjMjAuNjc4IDAgMzcuNS0xNi44MjIgMzcuNS0zNy41di04N2MwLTE0LjAzOS03Ljc1OS0yNi4yOTMtMTkuMjEtMzIuNzJ2LTQxLjcxNWMwLTQ3Ljg1Ni0zOC45MzQtODYuNzktODYuNzktODYuNzktMTYuNTI4IDAtMzIuNjE2IDQuNjg1LTQ2LjUyNSAxMy41NDktMy40OTMgMi4yMjYtNC41MiA2Ljg2Mi0yLjI5NCAxMC4zNTUgMi4yMjcgMy40OTMgNi44NjIgNC41MjEgMTAuMzU1IDIuMjk0IDExLjQ5Ni03LjMyNiAyNC43OTYtMTEuMTk4IDM4LjQ2My0xMS4xOTggMzkuNTg1IDAgNzEuNzkgMzIuMjA1IDcxLjc5IDcxLjc5djM3LjA4OGMtMS4wODUtLjA5NS0yLjE4MS0uMTUzLTMuMjktLjE1M2gtMTEuNzF2LTM2LjkzNWMwLTE1LjE3MS01LjkwOC0yOS40MzUtMTYuNjQtNDAuMTY3LTEwLjczMi0xMC43Mi0yNC45OTEtMTYuNjI0LTQwLjE1LTE2LjYyNC0zMS4zMTQgMC01Ni43OSAyNS40NzYtNTYuNzkgNTYuNzl2MzYuOTM1aC0xMS43MWMtMS4xMDkgMC0yLjIwNS4wNTgtMy4yOS4xNTN2LTM3LjA4N2MuMDAxLTEzLjUyIDMuNzk3LTI2LjY5OSAxMC45NzctMzguMTEyem0xOS4wMjQgMzguMTEyYzAtMjMuMDQzIDE4Ljc0Ny00MS43OSA0MS43OS00MS43OSAxMS4xNTYgMCAyMS42NSA0LjM0NiAyOS41NDcgMTIuMjMzIDcuODk1IDcuODk2IDEyLjI0MyAxOC4zOTMgMTIuMjQzIDI5LjU1N3YzNi45MzVoLTgzLjU4em0tMjYuNzEgNTEuOTM1aDEzN2MxMi40MDcgMCAyMi41IDEwLjA5MyAyMi41IDIyLjV2ODdjMCAxMi40MDctMTAuMDkzIDIyLjUtMjIuNSAyMi41aC0xMzdjLTEyLjQwNyAwLTIyLjUtMTAuMDkzLTIyLjUtMjIuNXYtODdjMC0xMi40MDcgMTAuMDk0LTIyLjUgMjIuNS0yMi41elwiIGZpbGw9J2N1cnJlbnRDb2xvcicvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTaGllbGRJY29uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUljb25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcignc2hpZWxkLWljb24nKTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRDc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5hcHBQcmVmaXh9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5jc3NQcmVmaXh9YF06IHRydWUsXG4gICAgfVxuICB9XG59XG4iXX0=