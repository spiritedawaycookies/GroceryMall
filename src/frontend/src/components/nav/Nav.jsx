import React from "react";

function Nav() {
    return (


        <nav class="py-0 border-bottom bg-primary">
            <div className="center">
            <div class=" d-flex flex-wrap">
                <ul class="nav me-auto">
                    <li class="nav-item"><a href="#" class="nav-link link-light px-2 active" aria-current="page">Home</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link link-light px-2">Best Sellers</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-light px-2">Deals</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-light px-2">About</a></li>
                </ul>
                <ul class="nav">

                    <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Login</a></li>
                    {/* 购物车 */}
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

       
    );
}

export default Nav;
