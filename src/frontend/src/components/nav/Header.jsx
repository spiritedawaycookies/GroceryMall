import React from "react";
function Header() {
    return (

        <header className="py-5 bg-light">
            <div className=" ">
                <div className="d-flex flex-wrap center ">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}

                        <img style={{ width: "30%" }} src="http://localhost:8083/images/grocerymall.png" />

                    </a>

                    <div class="w-30 " >
                        <div style={{ width: "80%" }} className="input-group m-2 width85">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </span>

                            <input type="text" className="form-control " placeholder="Search..." aria-label="Input group example" aria-describedby="basic-addon1" />
                        </div>
                        <table class="input-group m-2 width85 ">
                        <ul id="horizontal-list" class="input-group container">
                            <li class="m-3">An item</li>
                            <li class="m-3">A second item</li>
                            <li class="m-3">A third item</li>
                            <li class="m-3">A third item</li>
                            <li class="m-3">More...</li>
                        </ul>
                        </table>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
