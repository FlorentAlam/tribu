import { UserActions } from "../actions/user.actions";

export interface UserState{
    isLogged: boolean
}

const initialState: UserState = {
    isLogged: false
}

export const userReducer = (state = initialState, action: UserActions) => {
    switch(action.type){
        default:
            return state;
    }
}