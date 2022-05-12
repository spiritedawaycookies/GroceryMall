import React from 'react';
import DiscountPagination from './DiscountPagination';
import Header from '../../nav/Header'
const Discount:React.FC = () => {
    return (
        <>
        <Header/>
        <DiscountPagination itemsPage={8}/>
        </>
    );
};

export default Discount;