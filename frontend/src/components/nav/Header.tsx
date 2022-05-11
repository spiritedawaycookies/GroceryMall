import React, { useState, useEffect } from "react";
import logo from "../../assets/images/applogo.png"
import { IndexCut } from './Nav'
const Header: React.FC = () => {
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
            let words:Array<string>= data.data.list.map(ele=>ele.name);
            setHotwords(words);
            console.log("words",words);
            
            console.log("hotWords", hotWords);

        });

    }, []);

    const renderHotwords = () => {
      
            //http://localhost:8083/product/detail?id=1
            return hotWords.map(i => { return <a href="#" className="text-muted"><li className="m-3 ">{IndexCut(i, ' ', 3)}...</li> </a> }
            )
       

    }

    return (

        <header className="py-5 bg-light">
            <div className=" ">
                <div className="d-flex flex-wrap center ">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}

                        <img style={{ width: "35%" }} src={logo} />

                    </a>

                    <div className="w-30 " >
                        <div style={{ width: "80%" }} className="input-group m-2 width85">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </span>

                            <input type="text" className="form-control " placeholder="Search..." aria-label="Input group example" aria-describedby="basic-addon1" />
                        </div>
                        <table className="input-group m-2 width85 ">
                            <ul id="horizontal-list" className="input-group container">
                                <div id="renderList">
                                    {renderHotwords()}
                                    <a href="#">   <li className="m-3">More...</li> </a>
                                </div>
                            </ul>
                        </table>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
