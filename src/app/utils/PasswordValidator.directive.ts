import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive, Input } from "@angular/core";
import { Subscription } from "rxjs";

@Directive({
    selector: '[compare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidatorDirective,
        multi: true
    }]
})
export class PasswordValidatorDirective implements Validator {
    @Input('compare') controlNameToCompare: string;
    constructor() {}

    validate (c: AbstractControl): ValidationErrors | null {
        const controlToCompare = c.parent.get(this.controlNameToCompare);
        if (controlToCompare) {
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'notEqual': true } : null;
    }
}

/*
@Directive({
    selector: '[passCompare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidatorDirective,
        multi: true
    }]
})
export class PasswordValidatorDirective implements Validator {
    @Input('passValidate') passValidate: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.passValidate);
        if (controlToCompare) {
            if (controlToCompare.value !== control.value) {
                return { 'notEqual': true };
            }
        } else {
            return { 'notEqual': true };
        }

        delete control.errors.notEqual;
        delete controlToCompare.errors.notEqual;
        return null;
    }
}
*/