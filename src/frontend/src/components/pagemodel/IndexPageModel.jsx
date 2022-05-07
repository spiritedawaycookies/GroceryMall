import React, { Component } from 'react';
import PaginatedItems from './PaginatedItems';
import ProductService from '../../services/ProductService';
import products from '../products.js';
import axios from 'axios';
class IndexPageModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            init: 0
        }
    }


    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8083/product/list').then(res => {
            this.setState({ products: res.data, init: 1 });
            console.log(this.state.products);
        });


    }


    renderProduct() {
        return (
            <div>
                <PaginatedItems itemsPerPage={4}
                    //  test={3}
                    productData={this.state.products.data}
                />
            </div>
        );
    }

    render(){
        return this.state.init ? <div>{this.renderProduct()}</div> : <div>loading...</div>;
    }
}


export default IndexPageModel;