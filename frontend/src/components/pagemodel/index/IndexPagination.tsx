import React, { ReactNode, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import urls from '../../../constant.json';
import { Divider, Spin } from 'antd'
import IndexItems from "./IndexItems";
import { useTranslation } from "react-i18next"
import { PropsWithChildren } from 'react';
interface CardProps {
    id: number, name: string, image: string, price: number, sales: number, isSale: boolean, quantity: number
}
interface Props {
    itemsPage: number,
}
interface State {
    currentItems: Array<CardProps>,
    loading: number,
    pageCount: number,
    curPage: number,
    itemsPerPage: number
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
const IndexPagination: React.FC<Props> = (props: Props) => {
    const [currentItems, setcurrentItems] = useState<Array<CardProps>>([]);//???
    const [loading, setloading] = useState<boolean>(false);
    const [pageCount, setpageCount] = useState<number>(0);
    const [curPage, setcurPage] = useState<number>(1);
    const [itemsPerPage, setitemsPerPage] = useState<number>(props.itemsPage);
    const [err, setErr] = useState<string>();
    const { t } = useTranslation();

    useEffect(() => {
        // Fetch items from another resources.
        // console.log(newPage);
        const fetchData = async () => {
            try {
                axios.get('/product/list?pageNum=' + curPage + '&pageSize=' + itemsPerPage + "&orderBy=sales desc").then(({ data }) => {
                    console.log("fetched");


                    // console.log(data.data.list);
                    setloading(true);
                    // if (loading) {
                    setcurrentItems(data.data.list);
                    console.log("currentItems");

                    //  console.log(currentItems);
                    setpageCount(Math.ceil(data.data.total / itemsPerPage));
                    console.log(pageCount);


                    console.log(loading);
                })


            } catch (e: any) {
                setErr(e.message);
            }

        }
        fetchData();
        setloading(false);
    }, []);

    const renderProduct = () => {
        return (
            <div>
                <Divider orientation="center" style={{ textAlign: 'center', justifyContent: "center" }} ><h2 style={{ textAlign: 'center' }} className='text-muted center'>{t('main.hot_products')}</h2></Divider>
                < IndexItems currentItems={currentItems} />
                <div >
                    {!err || err !== "" && <div>Error:{err}</div>}
                    <div className='container mb-2'>  <ReactPaginateFixed
                        nextLabel="next >"
                        onPageChange={(event) => {
                            //reactpagination是从0开始所以要+1
                            const newPage = event.selected + 1;
                            // console.log(newPage);
                            axios.get('/product/list?pageNum=' + newPage + '&pageSize=' + itemsPerPage + "&orderBy=sales desc").then(res => {
                                //     this.setState({ curPage: newPage, currentItems: res.data.data.list });
                                setcurPage(newPage);
                                setcurrentItems(res.data.data.list);
                                console.log("currentItems:" + currentItems);
                            });

                        }}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
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


    return loading || pageCount == 0 ? <div>{renderProduct()}</div> : <div><Spin /></div>;


}

//用法： <PaginatedItems itemsPerPage={4} />



export default IndexPagination;