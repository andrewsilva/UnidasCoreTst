import { SpacerSidesEnum } from './enum/spacer-sides.enum';
import { SpacerSizesEnum } from './enum/spacer-sizes.enum';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class SpacerComponent extends BaseComponent {
    side: SpacerSidesEnum;
    size: SpacerSizesEnum;
    constructor();
    get availableSizes(): typeof SpacerSizesEnum;
    get availableSides(): typeof SpacerSidesEnum;
    get spacerClasses(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<SpacerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SpacerComponent, "und-spacer", never, { "side": "side"; "size": "size"; }, {}, never, ["*"]>;
}
