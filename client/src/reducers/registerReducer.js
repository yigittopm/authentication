import { REGISTER } from "../actions/types";

const registerReducer = (state={message:"register"}, action) => {
    switch(action.type){
        case REGISTER:
            return state;
        default:
            return state;
    }
}

export default registerReducer;