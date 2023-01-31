import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgToastService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXRvYXN0L3NyYy9saWIvbmctdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTS9CLE1BQU0sT0FBTyxjQUFjO0lBSXpCO1FBRlEsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0lBRTlCLENBQUM7SUFFaEIsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQVMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxPQUFPLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUM1SyxDQUFDO0lBQ0QsS0FBSyxDQUFDLE9BQWM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQVMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUN6SyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQWM7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQVMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUN4SyxDQUFDO0lBQ0QsT0FBTyxDQUFDLE9BQWM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQVMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUMzSyxDQUFDOzsyR0FyQlUsY0FBYzsrR0FBZCxjQUFjLGNBRmIsTUFBTTsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElUb2FzdCB9IGZyb20gJy4vdG9hc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ1RvYXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSB0b2FzdERldGFpbHMkID0gbmV3IFN1YmplY3Q8SVRvYXN0PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgIGdldFRvYXN0RGV0YWlscygpe1xuICAgIHJldHVybiB0aGlzLnRvYXN0RGV0YWlscyQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2U6SVRvYXN0KXtcbiAgICB0aGlzLnRvYXN0RGV0YWlscyQubmV4dCg8SVRvYXN0Pnt0eXBlOidzdWNjZXNzJyxkZXRhaWw6bWVzc2FnZS5kZXRhaWwscG9zaXRpb246bWVzc2FnZS5wb3NpdGlvbiwgc3VtbWFyeTptZXNzYWdlLnN1bW1hcnksZHVyYXRpb246bWVzc2FnZS5kdXJhdGlvbixzdGlja3k6bWVzc2FnZS5zdGlja3l9KVxuICB9XG4gIGVycm9yKG1lc3NhZ2U6SVRvYXN0KXtcbiAgICB0aGlzLnRvYXN0RGV0YWlscyQubmV4dCg8SVRvYXN0Pnt0eXBlOidlcnJvcicsZGV0YWlsOm1lc3NhZ2UuZGV0YWlsLHBvc2l0aW9uOm1lc3NhZ2UucG9zaXRpb24sc3VtbWFyeTptZXNzYWdlLnN1bW1hcnksZHVyYXRpb246bWVzc2FnZS5kdXJhdGlvbixzdGlja3k6bWVzc2FnZS5zdGlja3l9KVxuICB9XG4gIGluZm8obWVzc2FnZTpJVG9hc3Qpe1xuICAgIHRoaXMudG9hc3REZXRhaWxzJC5uZXh0KDxJVG9hc3Q+e3R5cGU6J2luZm8nLGRldGFpbDptZXNzYWdlLmRldGFpbCxwb3NpdGlvbjptZXNzYWdlLnBvc2l0aW9uLHN1bW1hcnk6bWVzc2FnZS5zdW1tYXJ5LGR1cmF0aW9uOm1lc3NhZ2UuZHVyYXRpb24sc3RpY2t5Om1lc3NhZ2Uuc3RpY2t5fSlcbiAgfVxuICB3YXJuaW5nKG1lc3NhZ2U6SVRvYXN0KXtcbiAgICB0aGlzLnRvYXN0RGV0YWlscyQubmV4dCg8SVRvYXN0Pnt0eXBlOid3YXJuaW5nJyxkZXRhaWw6bWVzc2FnZS5kZXRhaWwsc3VtbWFyeTptZXNzYWdlLnN1bW1hcnkscG9zaXRpb246bWVzc2FnZS5wb3NpdGlvbixkdXJhdGlvbjptZXNzYWdlLmR1cmF0aW9uLHN0aWNreTptZXNzYWdlLnN0aWNreX0pXG4gIH1cbn1cbiJdfQ==