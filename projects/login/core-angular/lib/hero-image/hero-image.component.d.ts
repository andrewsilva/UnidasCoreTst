import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeroImageBackdropTypesEnum } from './enum/hero-image-backdrop-types.enum';
import { HeroImageAnimationTypesEnum } from "./enum/hero-image-animation-types.enum";
import * as i0 from "@angular/core";
export declare class HeroImageComponent implements OnInit, OnChanges {
    private isFadeinAnimating;
    private isFadeoutAnimating;
    animationType: HeroImageAnimationTypesEnum;
    animationDelay: number;
    backdropType: HeroImageBackdropTypesEnum;
    bgImage: string;
    version: string;
    bgImageToStyle: string;
    constructor();
    get backdropTypes(): typeof HeroImageBackdropTypesEnum;
    get animationTypes(): typeof HeroImageAnimationTypesEnum;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    startAnimation(): void;
    get fadeinClassNames(): {
        "und-hero-image__fadein": boolean;
        "--animating": boolean;
    };
    get fadeoutClassNames(): {
        "und-hero-image__fadeout": boolean;
        "--animating": boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<HeroImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeroImageComponent, "und-hero-image", never, { "animationType": "animation"; "animationDelay": "animationDelay"; "backdropType": "backdropType"; "bgImage": "backgroundImage"; "version": "versionApp"; }, {}, never, ["[fadeout]", "[fadein]", "*"]>;
}
