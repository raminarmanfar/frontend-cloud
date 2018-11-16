import { UserRoleEnum } from './enums/UserRoleEnum';

export class UserInfo {
    constructor (
        public _id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phone?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string,
        public role?: UserRoleEnum,
        public imageUrl?: string,
        public fullName?: string
    ) {}
}
