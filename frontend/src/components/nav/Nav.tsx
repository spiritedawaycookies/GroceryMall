import React, { useState, useEffect, useContext } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io'
import { appContext, appSetStateContext } from "../../AppState";
import styles from './nav.module.css'
// import UserService from "../../services/UserService";
import { Link,Outlet,useNavigate,useLocation  } from 'react-router-dom';
// import Login from '../main/Login'
// import CategoryService from '../../services/CategoryService'

interface Props {
  
}

interface CartProp {
    productName: string,
    quantity: number,
    totalPrice: number
}
export const IndexCut = (str: string, substr: string, idx: number) => {
    let index = str.split(substr, idx).join(substr).length;
    return str.substring(0, index);
}
const Nav: React.FC<Props> = (props: Props) => {
    const [categories, setCategories] = useState<Array<string>>(["Loading"]);
    const [getCategoriesSuccess, setGetCategoriesSuccess] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const value = useContext(appContext)
    const setState = useContext(appSetStateContext);
    let navigate=useNavigate();
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
        console.log("cartopen", cartOpen);

    }

   const handleDealsClick=(e:any)=>{
       e.preventDefault();
       navigate('deals');
   }

    const renderCart = () => {


        // console.log("click cart");

        // console.log(value.cart);

        let mapToArray = Array.from(value.cart.values());

        return mapToArray.map(item => <tr className="form-group p-2">
            <td style={{ position: "absolute", left: 5, right: "auto", width: "auto" }}>   <input type="checkbox" className="custom-control-input" id="same-address" /></td>
            <td>  <label className="custom-control-label" style={{ width: "100%" }} htmlFor="same-address">
                <span> &nbsp;&nbsp;&nbsp;&nbsp;{IndexCut(item.productName, ' ', 4)}...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </label></td>
            <td className="d-flex" style={{ position: "absolute", right: -5, left: "auto", width: "auto" }}>  <span className="ml-5 container " >
                <button type="button" className="ml-5 btn btn-secondary btn-circle btn-sm">+</button>
                <span> &nbsp;&nbsp;{value.cart.get(item.pid)?.quantity} &nbsp;&nbsp;</span>
                <button type="button" className="btn btn-secondary btn-circle btn-sm">-</button>
            </span></td>
        </tr>);

        
    }


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

            <nav className="border-bottom bg-primary">

                <div className="center">
                    <div className=" d-flex flex-wrap">
                        <ul className="nav me-auto">

                        <Link to="/">
                            <li className="nav-item"><a className="nav-link link-light px-2 active" aria-current="page">Home</a></li></Link>
                            <li className="nav-item dropdown">
                                <a onClick={handleCategoryClick} className="nav-link link-dark dropdown-toggle fw-bold" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
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
                            <li className="nav-item"><a onClick={handleDealsClick} className="nav-link link-light px-2">Deals</a></li>
                            <li className="nav-item"><a  className="nav-link link-light px-2">About</a></li>
                        </ul>
                        <ul className="nav">

                            <li className="nav-item">
                                {value.username===undefined || value.username == "" ?
                              <Link to='/login'> <a className="nav-link link-dark px-2 fw-bold">&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;</a></Link> 
                              :
                                    <a  className="nav-link link-dark px-2">
                                        <span className="border border-primary">
                                            <img width="30px" className="img-thumbnail rounded-circle" src={value.profilePic} />
                                        </span>&nbsp;&nbsp;{value.nickname}&nbsp;&nbsp;</a> 
                                    }
                            </li>

                            {/* 购物车 */}
                            <div className="nav-item mr-5" style={{position:'relative',right:'10px'}} >

                                <li className="nav-item dropdown">
                                    <button type="button" onClick={handleCartClick} className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                            <span >
                                        <FiShoppingCart /></span>
                                        &nbsp;&nbsp;<span>Cart</span>
                                        <span className="badge bg-dark text-white ms-1 rounded-pill">{value.cart.size}</span>
                                    </button>
                                    <div className="dropdownWide " style={{ display: cartOpen ? "block" : "none", right: 0, left: "auto", width: "auto" }}>
                                        <div className="dropdown-menu-right   dropdown-item">
                                            <form className=" ">

                                                {value.cart.size == 0 ? <div style={{textAlign:"center"}}><IoIosHeartEmpty />&nbsp;&nbsp;Your cart is empty
                                                </div> : <table className="table"><tbody>{renderCart()}


                                                </tbody>

                                                </table>}
                                                <div >
                                                    {value.cart.size == 0 ? <div></div> : <div className="d-flex center width60">
                                                        <button type="submit" className="btn btn-primary pr-6 mr-6 mt-2 center" style={{ textAlign: "center" }}>Checkout</button>

                                                    </div>}

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
            <Outlet />
        </>

    );

}

export default Nav;
