import { OnInit } from '@angular/core';
import { BoxedContentSizesEnum } from './enum/boxed-content-sizes.enum';
import { BoxedContentShadowSizesEnum } from "./enum/boxed-content-shadow-sizes.enum";
import * as i0 from "@angular/core";
export declare class BoxedContentComponent implements OnInit {
    isShaded: boolean;
    maxWidth: number;
    size: BoxedContentSizesEnum;
    shadowSize: BoxedContentShadowSizesEnum;
    noPadding: boolean;
    constructor();
    ngOnInit(): void;
    get boxAvailableSizes(): typeof BoxedContentSizesEnum;
    get boxAvailableShadowSizes(): typeof BoxedContentShadowSizesEnum;
    static ɵfac: i0.ɵɵFactoryDef<BoxedContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BoxedContentComponent, "und-boxed-content", never, { "isShaded": "shaded"; "maxWidth": "maxWidth"; "size": "size"; "shadowSize": "shadowSize"; "noPadding": "noPadding"; }, {}, never, ["*"]>;
}
