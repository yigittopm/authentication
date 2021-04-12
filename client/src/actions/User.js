import { USERNAME, EMAIL, PASSWORD, GET_USER} from "./types";

export const username = () => {
    return {
        type: USERNAME,
        payload : ""
    }
}

export const email = () => {
    return {
        type: EMAIL,
        payload: ""
    }
}

export const password = () => {
    return {
        type: PASSWORD,
        payload: ""
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: ""
    }
}