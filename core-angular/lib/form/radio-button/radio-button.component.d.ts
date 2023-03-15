import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from "../../base.component";
import { CoreAngularService } from "../../core-angular.service";
import * as i0 from "@angular/core";
export declare class RadioButtonComponent extends BaseComponent implements OnInit, ControlValueAccessor {
    private readonly caService;
    private readonly _renderer;
    private _value;
    id: string;
    inputElement: ElementRef;
    radioValue: any;
    radioName: string;
    isBlock: boolean;
    noBullet: boolean;
    constructor(caService: CoreAngularService, _renderer: Renderer2);
    ngOnInit(): void;
    writeValue(newValue: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onChange: any;
    onTouched: any;
    get value(): any;
    set value(v: any);
    onValueChange(isChecked: any, value: any): void;
    setChecked(value: any): void;
    get cssClassNames(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<RadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RadioButtonComponent, "und-radio-button", never, { "radioValue": "radioValue"; "radioName": "radioName"; "isBlock": "isBlock"; "noBullet": "noBullet"; }, {}, never, ["*"]>;
}
