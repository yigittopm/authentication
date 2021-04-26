import { USERNAME, EMAIL, PASSWORD} from "../actions/types";

const userReducers = (state={username:"MERT"}, action) => {
    switch(action.type){
        case USERNAME:
            return state;
        case EMAIL:
            return action.payload;
        case PASSWORD:
            return action.payload;
        default:
            return state;
    }
}

export default userReducers;