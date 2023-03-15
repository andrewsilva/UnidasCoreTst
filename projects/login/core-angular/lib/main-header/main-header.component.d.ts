import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class MainHeaderComponent extends BaseComponent {
    title: string;
    isOpen: boolean;
    constructor();
    get rootClasses(): {
        [x: string]: boolean;
    };
    toogleMenuVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDef<MainHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MainHeaderComponent, "und-main-header", never, { "title": "title"; }, {}, never, ["[navbar]", "[extraInformation]", "[navbar]"]>;
}
