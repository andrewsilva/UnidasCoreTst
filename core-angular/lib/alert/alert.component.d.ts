import { EventEmitter } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class AlertComponent extends BaseComponent {
    title: string;
    okText: string;
    message: string;
    isVisible: boolean;
    ok: EventEmitter<any>;
    constructor();
    get rootClasses(): {
        [x: string]: boolean;
    };
    onOkClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertComponent, "und-alert", never, { "title": "title"; "okText": "okText"; "message": "message"; "isVisible": "isVisible"; }, { "ok": "ok"; }, never, never>;
}
