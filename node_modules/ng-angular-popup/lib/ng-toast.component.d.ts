import { OnInit } from '@angular/core';
import { NgToastService } from './ng-toast.service';
import * as i0 from "@angular/core";
export declare class NgToastComponent implements OnInit {
    private toastService;
    show: boolean;
    toastDetails: any;
    timeoutRef: any;
    constructor(toastService: NgToastService);
    ngOnInit(): void;
    closeToast(): void;
    loadPosition(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgToastComponent, "lib-ng-toast", never, {}, {}, never, never, false>;
}
