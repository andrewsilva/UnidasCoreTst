import { Component, Input } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../paragraph/paragraph.component";
import * as i3 from "../icons/arrow-up-icon.component";
const _c0 = ["*"];
export class ExpandableTopicComponent extends BaseComponent {
    constructor() {
        super('expandable-topic');
        this.isClosed = false;
    }
    ngOnInit() {
        if (!this.startOpen) {
            this.isClosed = true;
        }
    }
    get rootStyleClasses() {
        return {
            [`${this.cssPrefix}`]: true,
            [`${this.cssPrefix}--is-closed`]: this.isClosed,
        };
    }
    toggleOpenState(event) {
        event.preventDefault();
        this.isClosed = !this.isClosed;
    }
}
ExpandableTopicComponent.ɵfac = function ExpandableTopicComponent_Factory(t) { return new (t || ExpandableTopicComponent)(); };
ExpandableTopicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExpandableTopicComponent, selectors: [["und-expandable-topic"]], inputs: { title: "title", description: "description", startOpen: "startOpen" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 9, vars: 13, consts: [[3, "ngClass"], [3, "click"]], template: function ExpandableTopicComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function ExpandableTopicComponent_Template_div_click_1_listener($event) { return ctx.toggleOpenState($event); });
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "und-p");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "und-arrow-up-icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div");
        i0.ɵɵprojection(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.rootStyleClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__clickable-area");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__title");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__description");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.description);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__arrow-icon");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.cssPrefix + "__content");
    } }, directives: [i1.NgClass, i2.ParagraphComponent, i3.ArrowUpIconComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpandableTopicComponent, [{
        type: Component,
        args: [{
                selector: 'und-expandable-topic',
                templateUrl: './expandable-topic.component.html',
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], description: [{
            type: Input
        }], startOpen: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS10b3BpYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlLWFuZ3VsYXIvc3JjL2xpYi9leHBhbmRhYmxlLXRvcGljL2V4cGFuZGFibGUtdG9waWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvZXhwYW5kYWJsZS10b3BpYy9leHBhbmRhYmxlLXRvcGljLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBTWhELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxhQUFhO0lBWXpEO1FBQ0UsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFaNUIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWFqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBRWxCLE9BQU87WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDaEQsQ0FBQTtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsS0FBaUI7UUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7O2dHQWpDVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7UUNQckMsOEJBQ0U7UUFBQSw4QkFDRTtRQUQwQyx3R0FBUywyQkFBdUIsSUFBQztRQUMzRSwwQkFBa0M7UUFBQSxZQUFXO1FBQUEsaUJBQUs7UUFDbEQsNkJBQTJDO1FBQUEsWUFBaUI7UUFBQSxpQkFBUTtRQUNwRSxvQ0FBMEU7UUFDNUUsaUJBQU07UUFDTiwyQkFBcUM7UUFBQSxrQkFBWTtRQUFhLGlCQUFNO1FBQ3RFLGlCQUFNOztRQVBELDhDQUE0QjtRQUMxQixlQUFzQztRQUF0QyxpREFBc0M7UUFDckMsZUFBNkI7UUFBN0Isd0NBQTZCO1FBQUMsZUFBVztRQUFYLCtCQUFXO1FBQ3RDLGVBQW1DO1FBQW5DLDhDQUFtQztRQUFDLGVBQWlCO1FBQWpCLHFDQUFpQjtRQUN6QyxlQUFrQztRQUFsQyw2Q0FBa0M7UUFFbEQsZUFBK0I7UUFBL0IsMENBQStCOztrRERDekIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOztrQkFJRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50fSBmcm9tIFwiLi4vYmFzZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndW5kLWV4cGFuZGFibGUtdG9waWMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5kYWJsZS10b3BpYy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVUb3BpY0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0Nsb3NlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzdGFydE9wZW46IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ2V4cGFuZGFibGUtdG9waWMnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGFydE9wZW4pIHtcbiAgICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCByb290U3R5bGVDbGFzc2VzKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLmNzc1ByZWZpeH0tLWlzLWNsb3NlZGBdOiB0aGlzLmlzQ2xvc2VkLFxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU9wZW5TdGF0ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc0Nsb3NlZCA9ICF0aGlzLmlzQ2xvc2VkO1xuICB9XG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInJvb3RTdHlsZUNsYXNzZXNcIj5cbiAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2NsaWNrYWJsZS1hcmVhJ1wiIChjbGljayk9XCJ0b2dnbGVPcGVuU3RhdGUoJGV2ZW50KVwiPlxuICAgIDxoMyBbY2xhc3NdPVwiY3NzUHJlZml4KydfX3RpdGxlJ1wiPnt7IHRpdGxlIH19PC9oMz5cbiAgICA8dW5kLXAgW2NsYXNzXT1cImNzc1ByZWZpeCsnX19kZXNjcmlwdGlvbidcIj57eyBkZXNjcmlwdGlvbiB9fTwvdW5kLXA+XG4gICAgPHVuZC1hcnJvdy11cC1pY29uIFtjbGFzc109XCJjc3NQcmVmaXgrJ19fYXJyb3ctaWNvbidcIj48L3VuZC1hcnJvdy11cC1pY29uPlxuICA8L2Rpdj5cbiAgPGRpdiBbY2xhc3NdPVwiY3NzUHJlZml4KydfX2NvbnRlbnQnXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuPC9kaXY+XG4iXX0=