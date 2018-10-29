import { PasswordValidatorDirective } from './utils/PasswordValidator.directive';
import { UniqueValidatorDirective } from './utils/UniqueValidator.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        UniqueValidatorDirective,
        PasswordValidatorDirective,
    ],
    exports: [
        UniqueValidatorDirective,
        PasswordValidatorDirective,
    ]
})

export class AppDirectivesModule { }