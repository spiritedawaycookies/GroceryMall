import React, { useState, useEffect } from "react";
import logo from "../../assets/images/applogo.png"
import { IndexCut } from './Nav'
import { Layout, Typography, Input } from 'antd';
const Header2: React.FC = () => {
    // const renderHotwords=()=>{
    //     return(

    //     )
    // }
    const [hotWords, setHotwords] = useState<Array<string>>([])
    const [loading, setloading] = useState<boolean>(false);
    const [err, setErr] = useState<string>();

    useEffect(() => {
        // Fetch items from another resources.
        // console.log(newPage);
        fetch('http://localhost:8083/product/list?pageNum=1&pageSize=2&orderBy=sales desc').then(res => res.json()).then(data => {
            console.log("fetched", data.data.list);
            let words: Array<string> = data.data.list.map(ele => ele.name);
            setHotwords(words);
            console.log("words", words);

            console.log("hotWords", hotWords);

        });

    }, []);

    const renderHotwords = () => {

        //http://localhost:8083/product/detail?id=1
        return hotWords.map(i => { return <a href="#" className="text-muted"><li className="m-3 ">{IndexCut(i, ' ', 3)}...</li> </a> }
        )


    }

    return (
        <>
            <div>
                <Layout.Header>
                    <img width="50px" src={logo}></img>
                    Aaaaaa
                    <Typography.Title level={3}>Grocery</Typography.Title>
                    <Input.Search placeholder="Enter keyword"></Input.Search>
                </Layout.Header>
            </div>
        </>
    );
}

export default Header2;
