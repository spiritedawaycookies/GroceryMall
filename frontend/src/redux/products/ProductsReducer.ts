import {ProductAction} from './ProductAction'
interface ProductsState{
    productList:any[],
    curPage:number,
    pageCount:number,
    loading:boolean,
    error:string|null,
}

const defaultState:ProductsState={
    loading:true,
    curPage:1,
    pageCount:0,
    error:null,
    productList:[]
}

export default (state=defaultState,action:ProductAction)=>{
    switch(action.type){
        case "FETCH_PRODUCTS_START":
            return {...state,loading:true}
        case "FETCH_PRODUCTS_SUCCESS":

            return{...state,loading:false,productList:action.payload,curPage:1,pageCount:Math.ceil(action.payload.length/8)}
        case "FETCH_PRODUCTS_FAIL":
            return {...state,loading:false,error:action.payload}
        default:return state;
    }
   
}