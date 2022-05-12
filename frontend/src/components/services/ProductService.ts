import axios from 'axios';
import urls from '../../constant.json'
const PRODUCT_API_BASE_URL = urls[0].backendUrl+"/product/list";
class ProductService {
    getProductsDefault() {
        return axios.get(PRODUCT_API_BASE_URL+'?pageNum=1&pageSize=1000');
    }
    getProductsAtPage(pageNum:number,pageSize:number) {
        return axios.get(PRODUCT_API_BASE_URL+'?pageNum='+pageNum+'&pageSize='+pageSize);
    }
}

export default new ProductService();