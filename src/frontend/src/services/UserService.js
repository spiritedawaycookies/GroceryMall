import axios from 'axios';
import urls from '../constant.js'
const USER_API_LOGIN_URL = urls[0].backendUrl + "/login";
const USER_API_REGISTER_URL = urls[0].backendUrl + "/register";


class UserService {
    jumpToLogin(){
        return axios.get(USER_API_LOGIN_URL).then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    login(userName, password) {
        return axios.post(USER_API_LOGIN_URL, {
            "userName": userName,
            "password": password
        }).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }
}


export default new UserService();