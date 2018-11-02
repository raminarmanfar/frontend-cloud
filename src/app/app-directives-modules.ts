import { NgModule } from '@angular/core';

import { PasswordValidatorDirective } from './utils/PasswordValidator.directive';
import { UniqueValidatorDirective } from './utils/UniqueValidator.directive';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
    declarations: [
        UniqueValidatorDirective,
        PasswordValidatorDirective,
        FileSelectDirective,
    ],
    exports: [
        UniqueValidatorDirective,
        PasswordValidatorDirective,
        FileSelectDirective,
    ]
})

export class AppDirectivesModule { }
