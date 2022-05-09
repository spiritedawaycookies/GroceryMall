import axios from 'axios';
import urls from '../../constant.json'
const USER_API_LOGIN_URL = urls[0].backendUrl + "/login";
const USER_API_REGISTER_URL = urls[0].backendUrl + "/register";


class UserService {
    jumpToLogin(){
        return axios.get(USER_API_LOGIN_URL)
    }
    login(userName:string, password:string) {
        return axios.post(USER_API_LOGIN_URL+'?userName='+userName+'&password='+password
        );
    }
}


export default new UserService();