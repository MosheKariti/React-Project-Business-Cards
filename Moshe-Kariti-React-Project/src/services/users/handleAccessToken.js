import {getUserDetailsByToken} from "../axios/axios";

export async function handleAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        try {
            let user = getUserDetailsByToken(accessToken)
            return user;
        } catch (error) {
            console.log(error);
        }
    } else {
        return undefined;
    }
}