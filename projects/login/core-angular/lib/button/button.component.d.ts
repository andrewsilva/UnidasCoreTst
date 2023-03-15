import { EventEmitter } from '@angular/core';
import { BaseComponent } from "../base.component";
import * as i0 from "@angular/core";
export declare class ButtonComponent extends BaseComponent {
    onClick: EventEmitter<any>;
    isSpinning: boolean;
    htmlType: string;
    buttonSize: string;
    buttonType: string;
    buttonIsOutline: boolean;
    buttonIsBlock: boolean;
    buttonIsDisabled: boolean;
    constructor();
    get buttonClasses(): {
        [x: string]: boolean;
    };
    onClickHandler(): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ButtonComponent, "und-button", never, { "isSpinning": "spinning"; "htmlType": "htmlType"; "buttonSize": "size"; "buttonType": "type"; "buttonIsOutline": "outline"; "buttonIsBlock": "block"; "buttonIsDisabled": "disabled"; }, { "onClick": "onClick"; }, never, ["*"]>;
}
