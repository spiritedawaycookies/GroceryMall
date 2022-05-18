import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Divider, Spin } from 'antd'
import IndexItems from "./IndexItems";
import { withTranslation, WithTranslation } from "react-i18next";
import { PropsWithChildren } from 'react';
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store'
import { fetchProductStartActionCreator, fetchProductSuccessActionCreator, fetchProductFailActionCreator } from '../../../redux/products/ProductAction'
interface CardProps {
    id: number, name: string, image: string, price: number, sales: number, isSale: boolean, quantity: number
}
interface Props {
    itemsPage: number,
}
// interface State {
//     currentItems: Array<CardProps>,
//     loading: boolean,
//     pageCount: number,
//     curPage: number,
//     itemsPerPage: number,
//     err: null | string
// }
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
const mapStateToProps = (state: RootState) => {
    return {
        loading: state.products.loading,
        error: state.products.error,
        productList: state.products.productList,
        curPage:state.products.curPage,
        pageCount:state.products.pageCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStart: () => {
            dispatch(fetchProductStartActionCreator());
        },
        fetchSuccess: (data) => {
            dispatch(fetchProductSuccessActionCreator(data));
        },
        fetchFail: (error) => {
            dispatch(fetchProductFailActionCreator(error));
        },
    };
};

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class IndexPaginationComponent extends React.Component<PropsType> {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         currentItems: [],
    //         loading: false,
    //         pageCount: 0,
    //         curPage: 1,
    //         itemsPerPage: props.itemsPage,
    //         err: null
    //     }
    //     this.renderProduct = this.renderProduct.bind(this)
    // }
    async componentDidMount() {
        // Fetch items from another resources.
        this.props.fetchStart()

        try {
            axios.get('/product/list?pageNum=' + 1 + '&pageSize=' + 8 + "&orderBy=sales desc").then(({ data }) => {
                console.log("fetched", data.data.list);
                //action的payload送给reducer 处理
                this.props.fetchSuccess( data.data.list)
                console.log("currentItems", this.props.productList);
                console.log("pageCounr",this.props.pageCount);
                
                // this.setState({ pageCount: Math.ceil(data.data.total / 8) });


                console.log("loading",this.props.loading);
            })


        } catch (e: any) {
            this.props.fetchFail(e.message)
        }

    }


    renderProduct() {
        const { t,productList,loading,error } = this.props;
        return (
            <div>
                <Divider orientation="center" style={{ textAlign: 'center', justifyContent: "center" }} ><h2 style={{ textAlign: 'center' }} className='text-muted center'>{t('main.hot_products')}</h2></Divider>
                < IndexItems currentItems={this.props.productList} />
                <div >
                    {!this.props.error || this.props.error !== "" && <div>Error:{this.props.error}</div>}
                    <div className='container mb-2'>  <ReactPaginateFixed
                        nextLabel="next >"
                        onPageChange={(event) => {
                            //reactpagination是从0开始所以要+1
                            const newPage = event.selected + 1;
                            // console.log(newPage);
                            axios.get('/product/list?pageNum=' + newPage + '&pageSize=' + 8 + "&orderBy=sales desc").then(res => {
                                //     this.setState({ curPage: newPage, currentItems: res.data.data.list });
                                this.setState({ curPage: newPage });
                                this.setState({ currentItems: res.data.data.list });
                                console.log("currentItems:" + this.props.productList);
                            });

                        }}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={this.props.pageCount}
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
        return (this.props.loading || this.props.pageCount == 0 ? <div><Spin /></div> : <div>{this.renderProduct()}</div>)
    }


}

//用法： <PaginatedItems itemsPerPage={4} />



export const IndexPagination = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(IndexPaginationComponent));