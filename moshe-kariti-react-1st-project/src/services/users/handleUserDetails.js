import {getUserDetailsByToken} from "../axios/axios";

export async function handleUserDetails() {
    let user;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        user = await getUserDetailsByToken(accessToken)
    }
    return user;
}