import React, { Component } from "react";
import { FiShoppingCart } from 'react-icons/fi';
// import UserService from "../../services/UserService";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
// import Login from '../main/Login'
// import CategoryService from '../../services/CategoryService'
interface Props {

}
interface State {
    categories: Array<string>
    getCategoriesSuccess: boolean,
    activeItem: string,
    isOpen: boolean
}
class Nav extends Component<Props, State>  {
    constructor(props: Props) {
        super(props)
        this.state = {
            categories: ["Loading" ],
            getCategoriesSuccess: false,
            activeItem: "",
            isOpen: false
        }
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleCategories = this.handleCategories.bind(this);

    }
    handleCategoryClick = (e: any) => {
        //    console.log(e.target);//事件发生的元素
        //    console.log(e.currentTarget)//事件处理绑定的元素 大概就是最小的那个子元素吧
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        //初始化网络数据
        fetch("http://localhost:8083/category/list")
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data.data.map((d: any) => d.name), getCategoriesSuccess: true });
                if (this.state.getCategoriesSuccess)
                    console.log("state:" + this.state.categories);


            })
    }
    handleCategories() {
        if (this.state.getCategoriesSuccess) {
            
            return this.state.categories.map(d=>{return <a className="dropdown-item">{d}</a>});
        }
        else return <a className="dropdown-item">Loading</a>

    }
    
    render() {

        return (

            <>

                <nav className="py-0 border-bottom bg-primary">

                    <div className="center">
                        <div className=" d-flex flex-wrap">
                            <ul className="nav me-auto">


                                <li className="nav-item"><a className="nav-link link-light px-2 active" aria-current="page">Home</a></li>
                                <li className="nav-item dropdown">
                                    <a onClick={this.handleCategoryClick} className="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span> Categories</span>
                                    </a>
                                    <div className="dropdown-menu" style={{ display: this.state.isOpen ? "block" : "none" }}>
                                        {/* {listCategories} */}
                                        <div>
                                            {this.handleCategories()}
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

                                <li className="nav-item"><a className="nav-link link-dark px-2">Login</a></li>
                                {/* 购物车 */}
                                <div className="nav-item">
                                    <form className="d-flex ">

                                        <button className="btn btn-sm btn-light m-1 px-2" type="button">
                                            <span >
                                                <FiShoppingCart /></span>
                                            &nbsp;&nbsp;<span>Cart</span>
                                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                        </button>

                                    </form>
                                </div>


                            </ul>
                        </div>
                    </div>
                </nav>

            </>


        );
    }
}

export default Nav;
