import React, { Component } from 'react';
function Banner(props) {

   
        return (
            <div className="carousel-item">
            <div>

                    <img src={props.image} className="img d-block w-100" alt='...'/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fresh Strawberries!</h5>
                        <p>Yummy! Low price alert!</p>
                    </div>
              
            </div>
            </div>
        );
    }


export default Banner;