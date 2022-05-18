import React, { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import urls from '../../../constant.json';
import { Divider, Spin } from 'antd'
import IndexItems from "./IndexItems";
import { withTranslation, WithTranslation } from "react-i18next";
import { PropsWithChildren } from 'react';
interface CardProps {
    id: number, name: string, image: string, price: number, sales: number, isSale: boolean, quantity: number
}
interface Props {
    itemsPage: number,
}
interface State {
    currentItems: Array<CardProps>,
    loading: boolean,
    pageCount: number,
    curPage: number,
    itemsPerPage: number,
    err: null | string
}
const ReactPaginateFixed = ReactPaginate as unknown as React.FC<PropsWithChildren<{
    onPageChange: any,
    nextLabel: any,
    pageRangeDisplayed: any,
    marginPagesDisplayed: any,
    pageCount: any,
    previousLabel: any,
    pageClassName: any,
    pageLinkClassName: any,
    previousClassName: any,
    previousLinkClassName: any,
    nextClassName: any,
    nextLinkClassName: any,
    breakLabel: any,
    breakClassName: any,
    breakLinkClassName: any,
    containerClassName: any,
    activeClassName: any,

}>>
class IndexPaginationComponent extends React.Component< WithTranslation,State> {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            loading: false,
            pageCount: 0,
            curPage: 1,
            itemsPerPage: props.itemsPage,
            err: null
        }
        this.renderProduct = this.renderProduct.bind(this)
    }
    componentDidMount() {
        // Fetch items from another resources.
        // console.log(newPage);
        const fetchData = async () => {
            try {
                axios.get('/product/list?pageNum=' + this.state.curPage + '&pageSize=' + this.state.itemsPerPage + "&orderBy=sales desc").then(({ data }) => {
                    console.log("fetched",data.data.list);

                    this.setState({loading:false});
                    // if (loading) {
                    this.setState({currentItems: data.data.list});
                    console.log("currentItems",this.state.currentItems);

                    this.setState({pageCount: Math.ceil(data.data.total / this.state.itemsPerPage)});
                    console.log(this.state.pageCount);


                    console.log(this.state.loading);
                })


            } catch (e: any) {
                this.setState({err:e.message});
            }

        }
        fetchData();
    }


    renderProduct() {
        const {t}=this.props;
        return (
            <div>
                <Divider orientation="center" style={{ textAlign: 'center', justifyContent: "center" }} ><h2 style={{ textAlign: 'center' }} className='text-muted center'>{t('main.hot_products')}</h2></Divider>
                < IndexItems currentItems={this.state.currentItems} />
                <div >
                    {!this.state.err || this.state.err !== "" && <div>Error:{this.state.err}</div>}
                    <div className='container mb-2'>  <ReactPaginateFixed
                        nextLabel="next >"
                        onPageChange={(event) => {
                            //reactpagination是从0开始所以要+1
                            const newPage = event.selected + 1;
                            // console.log(newPage);
                            axios.get('/product/list?pageNum=' + newPage + '&pageSize=' + this.state.itemsPerPage + "&orderBy=sales desc").then(res => {
                                //     this.setState({ curPage: newPage, currentItems: res.data.data.list });
                                this.setState({ curPage: newPage });
                                this.setState({ currentItems: res.data.data.list });
                                console.log("currentItems:" + this.state.currentItems);
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

                    /></div>
                </div>
            </div>
        );
    }


    render() {
        return (this.state.loading || this.state.pageCount == 0 ? <div><Spin /></div>:<div>{this.renderProduct()}</div> )
    }


}

//用法： <PaginatedItems itemsPerPage={4} />



export const IndexPagination=withTranslation()(IndexPaginationComponent);