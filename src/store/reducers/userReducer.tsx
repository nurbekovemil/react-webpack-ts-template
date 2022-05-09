import { IUserState, UserAction, UserActionTypes } from "../../types/userTypes"

const initState: IUserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                users: [],
                isLoading: true,
                error: null
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                isLoading: false,
                error: null
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}