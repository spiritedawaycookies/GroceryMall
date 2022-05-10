import React, { useState, useEffect, useContext } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io'
import { appContext, appSetStateContext } from "../../AppState";
// import UserService from "../../services/UserService";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
// import Login from '../main/Login'
// import CategoryService from '../../services/CategoryService'

interface Props {
    username: string
}
// interface State {
//     categories: Array<string>
//     getCategoriesSuccess: boolean,
//     activeItem: string,
//     isOpen: boolean
// }

const Nav: React.FC<Props> = (props: Props) => {
    const [categories, setCategories] = useState<Array<string>>(["Loading"]);
    const [getCategoriesSuccess, setGetCategoriesSuccess] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [emptyCart, setEmptyCart] = useState<boolean>(true);
    const value = useContext(appContext)
    const setState = useContext(appSetStateContext);
    useEffect(() => {
        //每次ui渲染或者状态改变useEffect都会执行（默认），第二个参数是调用时机是一个状态列表（比如state）,如果状态列表变化就会执行
        //如果是一个[]就是类似componentDidMount在挂载组件时调用一次 此时调用api可以
        //不可以不传第二个，因为会无限调用
        fetch("http://localhost:8083/category/list")
            .then(response => response.json())
            .then(data => {
                setCategories(data.data.map((d: any) => d.name));
                setGetCategoriesSuccess(true);
                if (getCategoriesSuccess)
                    console.log("state:" + categories);


            })
    }, [])
    const handleCategoryClick = (e: any) => {
        //    console.log(e.target);//事件发生的元素
        //    console.log(e.currentTarget)//事件处理绑定的元素 大概就是最小的那个子元素吧
        // if ((e.target as HTMLElement).nodeName === "SPAN") {
        //     setIsOpen(!isOpen);
        // }
        setIsOpen(!isOpen);

    }
    const handleCartClick = (e: any) => {
        //    console.log(e.target);//事件发生的元素
        //    console.log(e.currentTarget)//事件处理绑定的元素 大概就是最小的那个子元素吧
        // if ((e.target as HTMLElement).nodeName === "SPAN") {
        //     setIsOpen(!isOpen);
        // }
        setCartOpen(!cartOpen);
    }
    useEffect(()=>{
        if(value.cart.length==0){
            setEmptyCart(true);
        }
    },
    []

    )
    const renderCart = () => {
        let rendered:any = (<div>
            <IoIosHeartEmpty />&nbsp;&nbsp;
            Your cart is empty
        </div>);
        if (!emptyCart) {

            console.log(value.cart);

            console.log(typeof value.cart);
            rendered=value.cart.map
            (item => <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="same-address" />
                    <label className="custom-control-label" htmlFor="same-address">&nbsp;&nbsp;{item.productName} </label>
                </div>
            </div>)
            setEmptyCart(false);
            
        }
        return rendered;
    }

    // const renderEmpty=()=>{
    //     if(emptyCart)
    // }


    // componentDidMount() {
    //     //初始化网络数据 原生js网络请求函数
    //     fetch("http://localhost:8083/category/list")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ categories: data.data.map((d: any) => d.name), getCategoriesSuccess: true });
    //             if (this.state.getCategoriesSuccess)
    //                 console.log("state:" + this.state.categories);


    //         })
    // }
    const handleCategories = () => {
        if (getCategoriesSuccess) {

            return categories.map(d => { return <a className="dropdown-item">{d}</a> });
        }
        else return <a className="dropdown-item">Loading</a>

    }


    return (
        <>

            <nav className="py-0 border-bottom bg-primary">

                <div className="center">
                    <div className=" d-flex flex-wrap">
                        <ul className="nav me-auto">


                            <li className="nav-item"><a className="nav-link link-light px-2 active" aria-current="page">Home</a></li>
                            <li className="nav-item dropdown">
                                <a onClick={handleCategoryClick} className="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span> Categories</span>
                                </a>
                                <div id="dropdown-menu" className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                    <div>
                                        {handleCategories()}
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" >Separated link</a>
                                </div>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-2">Best Sellers</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-2">Deals</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-light px-2">About</a></li>
                        </ul>
                        <ul className="nav">

                            {/* <li className="nav-item">{props.username || props.username !== "" ? <a href="#" className="nav-link link-dark px-2"> <span><RiUserSmileFill /></span> {props.username}</a> : <a className="nav-link link-dark px-2">Login</a>}</li> */}
                            <li className="nav-item">
                                {value.nickname || value.nickname !== "" ?
                                    <a href="#" className="nav-link link-dark px-2">
                                        <span className="border border-primary">
                                            <img width="30px" className="img-thumbnail rounded-circle" src={value.profilePic} />
                                        </span>&nbsp;&nbsp;{value.nickname}&nbsp;&nbsp;</a> :
                                    <a className="nav-link link-dark px-2">&nbsp;&nbsp;Login&nbsp;&nbsp;</a>}
                            </li>

                            {/* 购物车 */}
                            <div className="nav-item">

                                <li className="nav-item dropdown">
                                    <button type="button" onClick={handleCartClick} className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                            <span >
                                        <FiShoppingCart /></span>
                                        &nbsp;&nbsp;<span>Cart</span>
                                        <span className="badge bg-dark text-white ms-1 rounded-pill">{value.cart.length}</span>
                                    </button>
                                    <div className="dropdown-menu " style={{ display: cartOpen ? "block" : "none", right: 0, left: "auto", width: "auto" }}>
                                        <div className="dropdown-menu-right ">
                                            <form className=" dropdown-item px-4 py-3">
                                                {renderCart()}

                                                <div className="containter">
                                                    <button type="submit" className="btn btn-primary mt-2 center">Checkout</button>
                                                </div>
                                            </form>


                                        </div>

                                    </div>
                                </li>
                            </div>


                        </ul>
                    </div>
                </div>
            </nav>

        </>

    );

}

export default Nav;
