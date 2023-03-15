import { OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import { CoreAngularService } from '../../core-angular.service';
import { checkboxGroupItemsType } from './types/checkbox-group-items.type';
import * as i0 from "@angular/core";
export declare class CheckboxGroupComponent extends BaseComponent implements OnInit, OnChanges, ControlValueAccessor {
    private readonly caService;
    private readonly _renderer;
    private readonly _fb;
    private _value;
    id: string;
    groupName: string;
    form: any;
    layout: string;
    checkboxItems: checkboxGroupItemsType[];
    noBullet: boolean;
    constructor(caService: CoreAngularService, _renderer: Renderer2, _fb: FormBuilder);
    ngOnInit(): void;
    writeValue(newValue: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onChange: any;
    onTouched: any;
    get value(): any[];
    set value(v: any[]);
    onValueChange(value: any): void;
    setNewValue(value: any): void;
    onCheckboxValueChanges({ id, value, isChecked }: {
        id: any;
        value: any;
        isChecked: any;
    }): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxGroupComponent, "und-checkbox-group", never, { "layout": "layout"; "checkboxItems": "items"; "noBullet": "noBullet"; }, {}, never, never>;
}
