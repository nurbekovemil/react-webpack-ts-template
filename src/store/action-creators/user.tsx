import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/userTypes"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'User loading error!'
            })
        }
    }
}