import axios from 'axios';
import urls from '../constant.js'
const CATEGORY_API_URL = urls[0].backendUrl + "/category";
class CategoryService{
    getCategoryList(){
        return axios.get(CATEGORY_API_URL+'/list').then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

}
export default new CategoryService();