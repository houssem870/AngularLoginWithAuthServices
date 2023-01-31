import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgToastService {
    constructor() {
        this.toastDetails$ = new Subject();
    }
    getToastDetails() {
        return this.toastDetails$.asObservable();
    }
    success(message) {
        this.toastDetails$.next({ type: 'success', detail: message.detail, position: message.position, summary: message.summary, duration: message.duration, sticky: message.sticky });
    }
    error(message) {
        this.toastDetails$.next({ type: 'error', detail: message.detail, position: message.position, summary: message.summary, duration: message.duration, sticky: message.sticky });
    }
    info(message) {
        this.toastDetails$.next({ type: 'info', detail: message.detail, position: message.position, summary: message.summary, duration: message.duration, sticky: message.sticky });
    }
    warning(message) {
        this.toastDetails$.next({ type: 'warning', detail: message.detail, summary: message.summary, position: message.position, duration: message.duration, sticky: message.sticky });
    }
}
NgToastService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgToastService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.show = false;
    }
    ngOnInit() {
        this.toastService.getToastDetails().subscribe((val) => {
            this.show = true;
            clearTimeout(this.timeoutRef);
            this.toastDetails = val;
            if (this.toastDetails.duration) {
                this.timeoutRef = setTimeout(() => {
                    this.show = false;
                }, this.toastDetails.duration);
            }
            if (this.toastDetails.sticky) { // for sticky
                clearTimeout(this.timeoutRef);
                this.show = true;
            }
            if (!this.toastDetails.duration && !this.toastDetails.sticky) { //no duration and sticky is true
                this.timeoutRef = setTimeout(() => {
                    this.show = false;
                }, 5000);
            }
        });
    }
    closeToast() {
        clearTimeout(this.timeoutRef);
        this.show = false;
    }
    loadPosition() {
        var _a, _b;
        let postionClass = "";
        if (((_a = this.toastDetails) === null || _a === void 0 ? void 0 : _a.position) !== undefined) {
            switch (this.toastDetails.position) {
                case "tr":
                    postionClass = 'toast-right-top';
                    break;
                case "tl":
                    postionClass = 'toast-left-top';
                    break;
                case "br":
                    postionClass = 'toast-right-bottom';
                    break;
                case "bl":
                    postionClass = 'toast-left-bottom';
                    break;
                default: postionClass = "toast-right-top";
            }
        }
        else {
            postionClass = "toast-right-top";
        }
        if (((_b = this.toastDetails) === null || _b === void 0 ? void 0 : _b.type) !== undefined) {
            switch (this.toastDetails.type) {
                case "success":
                    postionClass = postionClass + " success";
                    break;
                case "error":
                    postionClass = postionClass + " error";
                    break;
                case "info":
                    postionClass = postionClass + " info";
                    break;
                case "warning":
                    postionClass = postionClass + " warning";
                    break;
                default: postionClass = "toast-right-top";
            }
        }
        return postionClass;
    }
}
NgToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastComponent, deps: [{ token: NgToastService }], target: i0.ɵɵFactoryTarget.Component });
NgToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.1", type: NgToastComponent, selector: "lib-ng-toast", ngImport: i0, template: "<div [ngClass]=\"loadPosition()\" [class.active]=\"show\">\r\n    <div class=\"container-1\">\r\n        <i class=\"fa\" [ngClass]=\"{\r\n      'fa-times-circle': toastDetails?.type === 'error',\r\n      'fa-check-circle': toastDetails?.type === 'success',\r\n      'fa-exclamation-circle': toastDetails?.type === 'warning',\r\n      'fa-info-circle': toastDetails?.type === 'info'\r\n    }\"></i>\r\n    </div>\r\n    <div class=\"container-2\">\r\n        <p>{{ toastDetails?.detail }}</p>\r\n        <p>{{ toastDetails?.summary }}</p>\r\n    </div>\r\n    <button *ngIf=\"show\" id=\"close\" (click)=\"closeToast()\">&times;</button>\r\n</div>", styles: ["*{padding:0;margin:0;box-sizing:border-box;border:none}.show-toast{margin:10px;background-color:#101020;color:#fff;padding:20px;border-radius:5px;cursor:pointer}.toast-right-top{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;right:1%;top:5%;transform:translate(400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-right-top.active{transform:translate(0)}.toast-right-top.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-right-top.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-right-top.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-right-top.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-right-bottom{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;right:1%;bottom:5%;transform:translate(400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-right-bottom.active{transform:translate(0)}.toast-right-bottom.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-right-bottom.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-right-bottom.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-right-bottom.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-left-top{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;left:1%;top:5%;transform:translate(-400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-left-top.active{transform:translate(0)}.toast-left-top.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-left-top.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-left-top.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-left-top.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-left-bottom{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;left:1%;bottom:5%;transform:translate(-400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-left-bottom.active{transform:translate(0)}.toast-left-bottom.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-left-bottom.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-left-bottom.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-left-bottom.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.container-1 i{font-size:40px}.fa-times-circle{color:#ff355b}.fa-check-circle{color:#47d764}.fa-exclamation-circle{color:#ffc021}.fa-info-circle{color:#2f86eb}.container-2 p:first-child{color:#101020;font-weight:600;font-size:16px;font-family:roboto,sans-serif}.container-2 p:last-child{font-size:14px;color:#656565;font-weight:400;font-family:roboto,sans-serif}#close{align-self:flex-start;background-color:transparent;font-size:25px;line-height:0;color:#656565;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ng-toast', template: "<div [ngClass]=\"loadPosition()\" [class.active]=\"show\">\r\n    <div class=\"container-1\">\r\n        <i class=\"fa\" [ngClass]=\"{\r\n      'fa-times-circle': toastDetails?.type === 'error',\r\n      'fa-check-circle': toastDetails?.type === 'success',\r\n      'fa-exclamation-circle': toastDetails?.type === 'warning',\r\n      'fa-info-circle': toastDetails?.type === 'info'\r\n    }\"></i>\r\n    </div>\r\n    <div class=\"container-2\">\r\n        <p>{{ toastDetails?.detail }}</p>\r\n        <p>{{ toastDetails?.summary }}</p>\r\n    </div>\r\n    <button *ngIf=\"show\" id=\"close\" (click)=\"closeToast()\">&times;</button>\r\n</div>", styles: ["*{padding:0;margin:0;box-sizing:border-box;border:none}.show-toast{margin:10px;background-color:#101020;color:#fff;padding:20px;border-radius:5px;cursor:pointer}.toast-right-top{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;right:1%;top:5%;transform:translate(400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-right-top.active{transform:translate(0)}.toast-right-top.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-right-top.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-right-top.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-right-top.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-right-bottom{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;right:1%;bottom:5%;transform:translate(400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-right-bottom.active{transform:translate(0)}.toast-right-bottom.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-right-bottom.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-right-bottom.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-right-bottom.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-left-top{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;left:1%;top:5%;transform:translate(-400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-left-top.active{transform:translate(0)}.toast-left-top.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-left-top.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-left-top.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-left-top.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.toast-left-bottom{width:380px;height:80px;padding:20px;box-shadow:0 10px 20px #4b32320d;border-radius:7px;position:fixed;left:1%;bottom:5%;transform:translate(-400px);display:grid;grid-template-columns:1.2fr 6fr .5fr;transition:.5s;z-index:9999}.toast-left-bottom.active{transform:translate(0)}.toast-left-bottom.error{border-left:8px solid #ff355b;background-color:#ffe7e6}.toast-left-bottom.warning{border-left:8px solid #ffc021;background-color:#fff2e2}.toast-left-bottom.success{border-left:8px solid #47d764;background-color:#e4f8f0}.toast-left-bottom.info{border-left:8px solid #2f86eb;background-color:#e9e9ff}.container-1 i{font-size:40px}.fa-times-circle{color:#ff355b}.fa-check-circle{color:#47d764}.fa-exclamation-circle{color:#ffc021}.fa-info-circle{color:#2f86eb}.container-2 p:first-child{color:#101020;font-weight:600;font-size:16px;font-family:roboto,sans-serif}.container-2 p:last-child{font-size:14px;color:#656565;font-weight:400;font-family:roboto,sans-serif}#close{align-self:flex-start;background-color:transparent;font-size:25px;line-height:0;color:#656565;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: NgToastService }]; } });

class NgToastModule {
}
NgToastModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgToastModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.1", ngImport: i0, type: NgToastModule, declarations: [NgToastComponent], imports: [CommonModule], exports: [NgToastComponent] });
NgToastModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: NgToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgToastComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        NgToastComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-toast
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgToastComponent, NgToastModule, NgToastService };
//# sourceMappingURL=ng-angular-popup.mjs.map
