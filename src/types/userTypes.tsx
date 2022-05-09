
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface IUserState {
    users: any[];
    isLoading: boolean;
    error: null | string;

}
interface IFetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface IFetchUserActionSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface IFetchUserActionError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = IFetchUserAction | IFetchUserActionSuccess | IFetchUserActionError
