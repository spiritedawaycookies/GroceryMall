interface ProductsState{
    productList:any[],
    loading:boolean,
    error:string|null,
}

const defaultState:ProductsState={
    loading:true,
    error:null,
    productList:[]
}

export default (state=defaultState,action)=>{
    return state;
}