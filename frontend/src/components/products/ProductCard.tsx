import React, { useContext, useState } from 'react';
import { appContext, appSetStateContext } from "../../AppState";
import { Link } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn2';
import{useTranslation} from 'react-i18next'
interface CardProps {
    id: number, name: string, image: string, price: number, sales: number, isSale: boolean, quantity: number
}
const ProductCard: React.FC<CardProps> = (props: CardProps) => {
    let originprice = Math.floor(props.price * 1.1) / 100;
    //    console.log(props.isSale);
     const {t}=useTranslation();
    return (
        <div className="col my-3 mx-2 px-1">

            <div style={{ width: "400px" }} className="center card ">

                {props.isSale && <div className="badge bg-primary text-white position-absolute" style={{ top: "1rem", right: "1rem" }}>Sale</div>
                }
                {/* <!-- Product image--> */}
                <Link to={'/product/detail/' + props.id}>
                    <a>
                        <img style={{ height: "300px", width: "auto", maxWidth: "100%", maxHeight: "100%" }} className="img" src={props.image} alt="..." />
                    </a></Link>
                {/* <!-- Product details--> */}
                <div style={{ height: "120px" }} className="card-body bg-light p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}<Link to={'/product/detail/' + props.id}>
                            <a>
                                <h5 style={{ fontSize: "100%" }} className="fw-bolder text-dark card-title">{props.name}</h5>
                                {/* <!-- Product price--> */}</a></Link>
                        <span style={{ fontSize: "100%" }} className="text-muted text-decoration-line-through card-subtitle mb-2"> {originprice}</span>  <span style={{ fontSize: "180%" }} className='text-primary card-subtitle mb-2'>${props.price / 100}</span>
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer bg-light  p-4 pt-0 border-top-0">
                    <AddToCartBtn
                        pid={props.id}
                        productName={props.name}
                        price={props.price}
                    />
                    <div style={{ bottom: "1rem", right: "1rem" }} className=' position-absolute'> <small className=" text-muted">
                        {t('main.sales')}: {props.sales}
                    </small>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ProductCard;