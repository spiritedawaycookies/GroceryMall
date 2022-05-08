import React, { Component } from "react";
import UserService from "../../services/UserService";
import { BrowserRouter as Router, Route, Switch,NavLink } from 'react-router-dom';
import Login from '../main/Login'
import Index from '../main/Index'
import CategoryService from '../../services/CategoryService'
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem:null
        }
        this.handleCategories=this.handleCategories.bind(this);
    }
    handleCategories(){
        console.log(" ccc");
        CategoryService.getCategoryList().then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
        // this.setState({activeItem:name})
    }
    render() {
        return (

            <Router>
                <nav class="py-0 border-bottom bg-primary">
                    <div className="center">
                        <div class=" d-flex flex-wrap">
                            <ul class="nav me-auto">
                            <NavLink to='/' onClick={() => window.location.href="/"}>

                                <li class="nav-item"><a class="nav-link link-light px-2 active" aria-current="page">Home</a></li></NavLink>
                                <li class="nav-item dropdown">
                                    <a onClick={this.handleCategories} class="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                                    <div  class="dropdown-menu">
                                        <a class="dropdown-item">Action</a>
                                        <a class="dropdown-item" >Another action</a>
                                        <a class="dropdown-item">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" >Separated link</a>
                                    </div>
                                </li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">Best Sellers</a></li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">Deals</a></li>
                                <li class="nav-item"><a href="#" class="nav-link link-light px-2">About</a></li>
                            </ul>
                            <ul class="nav">
                                <NavLink to='/login' onClick={() => window.location.href="/login"}>
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
