import { EventEmitter } from '@angular/core';
import { BaseComponent } from '../base.component';
import * as i0 from "@angular/core";
export declare class ModalComponent extends BaseComponent {
    onClose: EventEmitter<any>;
    noTitle: boolean;
    noCloseButton: boolean;
    noHeader: boolean;
    title: string;
    isVisible: boolean;
    constructor();
    onCloseHandler(): void;
    get rootClasses(): object;
    static ɵfac: i0.ɵɵFactoryDef<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModalComponent, "und-modal", never, { "noTitle": "noTitle"; "noCloseButton": "noCloseButton"; "noHeader": "noHeader"; "title": "title"; "isVisible": "isVisible"; }, { "onClose": "onClose"; }, never, ["*"]>;
}
