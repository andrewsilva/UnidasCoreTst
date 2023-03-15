import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class SpinnerComponent extends BaseComponent {
    spinnerSize: string;
    spinnerType: string;
    constructor();
    get spinnerClasses(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SpinnerComponent, "und-spinner", never, { "spinnerSize": "size"; "spinnerType": "type"; }, {}, never, never>;
}
