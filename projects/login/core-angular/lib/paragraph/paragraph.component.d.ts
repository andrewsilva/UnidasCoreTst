import { BaseComponent } from "../base.component";
import { ParagraphSizesEnum } from "./enum/paragraph-sizes.enum";
import * as i0 from "@angular/core";
export declare class ParagraphComponent extends BaseComponent {
    size: ParagraphSizesEnum;
    hasNoMargin: boolean;
    constructor();
    get rootStyleClasses(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<ParagraphComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ParagraphComponent, "und-p", never, { "size": "size"; "hasNoMargin": "hasNoMargin"; }, {}, never, ["*"]>;
}
