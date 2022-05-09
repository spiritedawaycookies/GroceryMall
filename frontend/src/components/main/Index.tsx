import React, { Component } from 'react';
import IndexPagination from '../pagemodel/IndexPagination';
import Carousel from '../carousel/Carousel';
import Header from '../nav/Header';
class Index extends Component {
    render() {
        return (
            <>
            <Header />
            <Carousel/>
            <IndexPagination/>
            </>
        );
    }
}

export default Index;