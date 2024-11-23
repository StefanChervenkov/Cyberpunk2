import page from "../../lib/page.js";
import { logout } from "../api/usersApi.js";
import { clearUserData } from "../utils/userUtils.js";




export default async function logoutView(ctx) {
    //TODO: Check if the user is logged in
    try {
        await logout();
        clearUserData();
        page.redirect('/');

    } catch (error) {
        console.log(error.message);
        
    }


}