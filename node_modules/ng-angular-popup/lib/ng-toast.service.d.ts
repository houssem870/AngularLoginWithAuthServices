import { IToast } from './toast.model';
import * as i0 from "@angular/core";
export declare class NgToastService {
    private toastDetails$;
    constructor();
    getToastDetails(): import("rxjs").Observable<IToast>;
    success(message: IToast): void;
    error(message: IToast): void;
    info(message: IToast): void;
    warning(message: IToast): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgToastService>;
}
