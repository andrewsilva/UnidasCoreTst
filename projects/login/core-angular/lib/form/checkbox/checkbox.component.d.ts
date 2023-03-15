import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import { CoreAngularService } from '../../core-angular.service';
import * as i0 from "@angular/core";
export declare class CheckboxComponent extends BaseComponent implements OnInit, ControlValueAccessor {
    private readonly caService;
    private readonly _renderer;
    private _value;
    id: string;
    inputElement: ElementRef;
    checkboxValue: any;
    checkboxName: string;
    isChecked: boolean;
    disabled: boolean;
    isBlock: boolean;
    noBullet: boolean;
    valueChangesGroup: EventEmitter<any>;
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
    onChangeByGroup(id: any, value: any, isChecked: boolean): void;
    onValueChange(isChecked: any, value: any, id: any): any;
    setChecked(value: any): any;
    get cssClassNames(): {
        [x: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxComponent, "und-checkbox", never, { "id": "id"; "checkboxValue": "checkboxValue"; "checkboxName": "checkboxName"; "isChecked": "isChecked"; "disabled": "disabled"; "isBlock": "isBlock"; "noBullet": "noBullet"; }, { "valueChangesGroup": "valueChangesGroup"; }, never, ["*"]>;
}
