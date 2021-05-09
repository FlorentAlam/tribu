export const LOG_USER = '[Auth] Log user';
export const LOGOUT_USER = '[Auth] Logout user';

export class LogUser{
    readonly type: string = LOG_USER
}
export class LogoutUser{
    readonly type: string = LOGOUT_USER
}

export type UserActions = LogUser | LogoutUser;