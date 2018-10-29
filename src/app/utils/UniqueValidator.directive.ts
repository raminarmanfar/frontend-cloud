import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import {
  Validator,
  AbstractControl,
  NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { Directive, forwardRef, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUniqueness]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueValidatorDirective),
      multi: true
    }
  ]
})
export class UniqueValidatorDirective implements Validator {
  @Input('appUniqueness') param: string;

  constructor(private userService: UserService, private el: ElementRef) { }

  validateUniquePromise(value: string) {
    return new Promise(resolve => {
      const filedName: string = this.el.nativeElement.name;
      this.userService.isAvailable(filedName, value).then((isAvailable: boolean) => {
        setTimeout(() => {
          if(this.param === 'notSelf' && value === this.getCurrentVal(filedName)) {
            resolve(null);
          } else if (!isAvailable) {
            resolve({ notUnique: true });
          } else {
            resolve(null);
          }
        }, 200);
      });
    });
  }

  getCurrentVal(fieldName: string) {
    switch (fieldName) {
      case 'username': return UserService.loggedUserInfo.username;
      case 'email': return UserService.loggedUserInfo.email;
      default: return undefined;
    }
  }

  validateUniqueObservable(value: string) {
    return new Observable(observer => {
      if (value === 'zirnakhan') {
        observer.next({ notUnique: true });
      } else {
        observer.next(null);
      }
    });
  }

  validate(control: AbstractControl) {
    return this.validateUniquePromise(control.value);
    // return this.validateUniqueUnameObservable(control.value).first();
  }
}