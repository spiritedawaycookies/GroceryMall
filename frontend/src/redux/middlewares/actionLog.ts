import { Middleware } from 'redux'
export const actionLog: Middleware = (store) => (next) => (action) => {
    console.log("当前state", store.getState());
    console.log("fire action", action);
    //打印经过reducer分发后的改变状态

    next(action)
    console.log("state 更新",store.getState());



}