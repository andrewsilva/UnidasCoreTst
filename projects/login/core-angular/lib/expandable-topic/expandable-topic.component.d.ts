import { OnInit } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class ExpandableTopicComponent extends BaseComponent implements OnInit {
    isClosed: boolean;
    title: string;
    description: string;
    startOpen: boolean;
    constructor();
    ngOnInit(): void;
    get rootStyleClasses(): {
        [x: string]: boolean;
    };
    toggleOpenState(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<ExpandableTopicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExpandableTopicComponent, "und-expandable-topic", never, { "title": "title"; "description": "description"; "startOpen": "startOpen"; }, {}, never, ["*"]>;
}
