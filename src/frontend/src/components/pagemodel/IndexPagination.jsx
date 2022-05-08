import React, { useEffect, useState, Component } from 'react';
import ReactPaginate from 'react-paginate';
import ProductService from '../../services/ProductService';
import IndexItems from "./IndexItems";

class IndexPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItems: [],
            init: 0,
            pageCount: 0,
            curPage: 1,
            itemsPerPage: 8

        }
    }
    async componentDidMount() {
        const res = await ProductService.getProductsAtPage(this.state.curPage, this.state.itemsPerPage).then(res => {
            this.setState({ currentItems: res.data.data.list, init: 1, pageCount:  Math.ceil(res.data.data.total / this.state.itemsPerPage) });
            // console.log("aaaaaaa");
           // console.log("total:" + res.data.data.total);
            
        });

    }

    // useEffect(() => {
    //     // Fetch items from another resources.
    //     const endOffset = itemOffset + itemsPerPage;
    //     // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     setCurrentItems(items.slice(itemOffset, endOffset));
    //     setPageCount(productData.total);
    // }, [curPage, itemsPerPage]);

    // Invoke when user click to request another page.
    // handlePageClick() {
    //     return 
    // }
    renderProduct() {
        return (
            <div>
                < IndexItems currentItems={this.state.currentItems} />
                <div >
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={(event) => {
                            //reactpagination是从0开始所以要+1
                            const newPage = event.selected + 1;
                            // console.log(newPage);
                            ProductService.getProductsAtPage(newPage, this.state.itemsPerPage).then(res => {
                                this.setState({ curPage: newPage, currentItems: res.data.data.list });
                               // console.log("currentItems:" + this.state.currentItems.length);
                                // console.log(this.state.products);
                            });

                        }}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={this.state.pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        );
    }

    render() {
        return this.state.init ? <div>{this.renderProduct()}</div> : <div>loading...</div>;
    }

}

//用法： <PaginatedItems itemsPerPage={4} />



export default IndexPagination;