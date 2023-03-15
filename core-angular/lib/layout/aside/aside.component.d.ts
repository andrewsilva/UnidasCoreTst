import { OnInit } from '@angular/core';
import { BaseComponent } from "../../base.component";
import * as i0 from "@angular/core";
export declare class AsideComponent extends BaseComponent implements OnInit {
    width: number;
    isOpen: boolean;
    constructor();
    ngOnInit(): void;
    toggleVisibility(event: MouseEvent): void;
    get rootClassNames(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<AsideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AsideComponent, "und-aside", never, { "width": "width"; }, {}, never, ["*"]>;
}
