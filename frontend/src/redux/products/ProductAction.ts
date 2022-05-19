import {ThunkAction} from 'redux-thunk'
import {RootState} from '../store'
import axios from 'axios' 

export const FETCH_PRODUCTS_START =
    "FETCH_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_PRODUCTS_SUCCESS =
    "FETCH_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_PRODUCTS_FAIL =
    "FETCH_PRODUCTS_FAIL"; // 推荐信息api调用失败

interface FetchProductStartAction {
    type: typeof FETCH_PRODUCTS_START
}

interface FetchProductSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS,
    payload: any,
}

interface FetchProductFailAction {
    type: typeof FETCH_PRODUCTS_FAIL,
    payload: any
}

export type ProductAction =
    | FetchProductStartAction
    | FetchProductSuccessAction
    | FetchProductFailAction;

export const fetchProductStartActionCreator = (): FetchProductStartAction => {
    return {
        type: FETCH_PRODUCTS_START,
    };
};

export const fetchProductSuccessActionCreator = (data): FetchProductSuccessAction => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchProductFailActionCreator = (error): FetchProductFailAction => {
    return {
        type: FETCH_PRODUCTS_FAIL,
        payload: error
    }
}

export const giveMeDataActionCreator=():ThunkAction<void,RootState,undefined,ProductAction>=>
async (dispatch,getState)=>{
    dispatch(fetchProductStartActionCreator())

    try {
     const{data}= await axios.get('/product/list?pageNum=' + 1 + '&pageSize=' + 8 + "&orderBy=sales desc");
        console.log("fetched", data.data.list);
        //action的参数是payload,送给reducer 处理
        dispatch(fetchProductSuccessActionCreator(data.data.list))

        console.log("middleware dispatched", data.data.list);
        
        // this.setState({ pageCount: Math.ceil(data.data.total / 8) });



    } catch (e:any) {
        dispatch(fetchProductFailActionCreator(e.message))

    }

}