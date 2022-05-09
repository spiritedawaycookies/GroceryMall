import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import urls from '../../constant.json';

import IndexItems from "./IndexItems";

interface Props {
    itemsPage:number
}
interface State {
    currentItems: Array<{
        name: string,
        image: string,
        price: number,
        sales: number
    }>,
    loading: number,
    pageCount: number,
    curPage: number,
    itemsPerPage: number
}
const IndexPagination: React.FC<Props> = (props:Props) => {
    const [currentItems, setcurrentItems] = useState<Array<{
        id: number, name: string, image: string, price: number, sales: number
    }>>([]);//???
    const [loading, setloading] = useState<boolean>(false);
    const [pageCount, setpageCount] = useState<number>(0);
    const [curPage, setcurPage] = useState<number>(1);
    const [itemsPerPage, setitemsPerPage] = useState<number>(props.itemsPage);
    const [err,setErr]=useState<string>();




    // async componentDidMount() {
    //     const res = await ProductService.getProductsAtPage(this.state.curPage, this.state.itemsPerPage).then(res => {
    //         this.setState({ currentItems: res.data.data.list, loading: 1, pageCount: Math.ceil(res.data.data.total / this.state.itemsPerPage) });
    //         // console.log("aaaaaaa");
    //         // console.log("total:" + res.data.data.total);

    //     });

    // }

    useEffect(() => {
        // Fetch items from another resources.
        // console.log(newPage);
        const fetchData = async () => {
           try {const response = await fetch('http://localhost:8083/product/list?pageNum=' + curPage + '&pageSize=' + itemsPerPage);
            const data = await response.json();
           
            console.log("fetched");


            console.log(data.data.list);
            setloading(true);
            // if (loading) {
                setcurrentItems(data.data.list);
                console.log("currentItems");

                console.log(currentItems);
                setpageCount(Math.ceil(data.data.total / itemsPerPage));
                console.log(pageCount);
               
           
            console.log(loading);
        }catch(e:any){
            setErr(e.message);
        }
            
        }
        fetchData();
        setloading(false);
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:8083/product/list?pageNum=' + curPage + '&pageSize=' + itemsPerPage).then(response => response.json()).then(data => {
    //         //     this.setState({ curPage: newPage, currentItems: res.data.data.list });

    //         setloading(true);
    //         console.log("fetched");

    //         console.log(data.data.list);

    //         if (loading) {
    //             setcurrentItems(data.data.list);
    //             console.log("currentItems");

    //             console.log(currentItems);
    //             setpageCount(Math.ceil(data.data.total / itemsPerPage));
    //             console.log(pageCount);
    //         } else {
    //             //  setcurrentItems([{id:-1,name:"Loading",image:"http://localhost:8083/images/loading.jpg",price:0,sales:0}]);

    //         }
    //     })
    // }, []);

    // Invoke when user click to request another page.
    // handlePageClick() {
    //     return 
    // }
    const renderProduct = () => {
        return (
            <div>
                < IndexItems currentItems={currentItems} />
                <div >
                    {!err||err!==""&&<div>Error:{err}</div>}
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={(event) => {
                            //reactpagination是从0开始所以要+1
                            const newPage = event.selected + 1;
                            // console.log(newPage);
                            axios.get('http://localhost:8083/product/list?pageNum=' + newPage + '&pageSize=' + itemsPerPage).then(res => {
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

                    />
                </div>
            </div>
        );
    }


    return loading||pageCount==0 ? <div>{renderProduct()}</div> : <div><img src="http://localhost:8083/images/loading.jpg" alt="Loading..."/></div>;


}

//用法： <PaginatedItems itemsPerPage={4} />



export default IndexPagination;