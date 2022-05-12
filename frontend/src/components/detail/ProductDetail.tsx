import React from 'react';
import {  useParams, Link } from 'react-router-dom'

const ProductDetail: React.FC = (props) => {
    const { id } = useParams()
    return (
        <>
            <div className="content">
                <div className="product">
                    <div className="image">
                        <img src="https://via.placeholder.com/520x460" alt="" />
                    </div>
                    <div className="details">
                        <h2>Product - {id}</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provident optio harum modi inventore esse nostrum exercitationem magnam tempore odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate neque harum. Quam facere accusamus exercitationem in quidem mollitia eligendi porro eos voluptates iure incidunt, laudantium sed harum omnis quasi?</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductDetail;