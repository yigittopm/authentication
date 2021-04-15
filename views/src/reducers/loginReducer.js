import { LOGIN, LOGOUT} from "../actions/types";

const loginReducer = (state={message:"login"}, action) => {
    switch(action.type){
        case LOGIN:
            return state;
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default loginReducer;
