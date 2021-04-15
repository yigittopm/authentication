import {combineReducers } from "redux";

import LoginReducer from "./reducers/loginReducer";
import RegisterReducer from "./reducers/registerReducer";
import UserReducer from "./reducers/userReducers";

const rootReducers = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    user : UserReducer
});

export default rootReducers;