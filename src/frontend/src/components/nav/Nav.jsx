import React, { Component } from "react";
import UserService from "../../services/UserService";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Login from '../main/Login'
import CategoryService from '../../services/CategoryService'
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: ["Loading"],
            getCategoriesSuccess: 0,
            activeItem: null
        }
        // this.handleCategories=this.handleCategories.bind(this);
    }
    async componentDidMount() {
        const res = await CategoryService.getCategoryList().then(res => {
            this.setState({ categories: res.data.data, getCategoriesSuccess: 1 });
            console.log(this.state.categories);
        }).catch(err => console.log(err));
    }
    add() {

    }
    //  handleCategories(){
    //     console.log("categories");
    //    CategoryService.getCategoryList().then(res=>{

    //             this.setState({categories:res.data.data});
    //             console.log(this.state.categories);
    //         }

    //     ).catch(err=>console.log(err));

    // }
    render() {
        let listCategories;
        if (this.state.getCategoriesSuccess == 1) {
            listCategories = this.state.categories.map(item => {
                return (<a class="dropdown-item">{item.name.substring(0, 1).toUpperCase() + item.name.substring(1)}</a>)
            })
        } else {
            listCategories = this.state.categories.map(item => {
                return (<a class="dropdown-item">{item.substring(0, 1).toUpperCase() + item.substring(1)}</a>)
            })
        }
        // let listCategories = [];
        // if (this.state.getCategoriesSuccess == 1) {
        //     this.state.categories.forEach(item => {
        //         var newName =item.name.substring(0,1).toUpperCase()+ item.name.substring(1);
        //         console.log(newName);
        //         listCategories.push(newName);
        //     })
        // }
        // this.state.categories.forEach(item=>{
        //     var oldName=item;
        //     console.log(typeof oldName);
        //     // var B=oldName.substring(1);
        //     // var newName=oldName+B;


        //     // return (<a class="dropdown-item">{item.name}</a>)
        // })
        return (

            <Router>
                <nav class="py-0 border-bottom bg-primary">
                    <div className="center">
                        <div class=" d-flex flex-wrap">
                            <ul class="nav me-auto">
                                <NavLink to='/' onClick={() => window.location.href = "/"}>

                                    <li class="nav-item"><a class="nav-link link-light px-2 active" aria-current="page">Home</a></li></NavLink>
                                <li class="nav-item dropdown">
                                    <a class="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                                    <div class="dropdown-menu">
                                        {listCategories}

                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" >Separated link</a>
                                    </div>
                                </li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">Best Sellers</a></li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">Deals</a></li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">About</a></li>
                            </ul>
                            <ul class="nav">
                                <NavLink to='/login' onClick={() => window.location.href = "/login"}>
                                    <li class="nav-item"><a class="nav-link link-dark px-2">Login</a></li>
                                    {/* 购物车 */}</NavLink>
                                <div class="nav-item">
                                    <form class="d-flex ">

                                        <button class="btn btn-sm btn-light m-1" type="submit">
                                            Cart
                                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                        </button>

                                    </form>
                                </div>


                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    {/* <Route exact path='/' component={Index}/> */}
                    <Route path='/login' component={Login}></Route>

                </Switch>
            </Router>

        );
    }
}

export default Nav;
