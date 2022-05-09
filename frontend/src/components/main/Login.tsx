 import React, { useState } from 'react';
// import UserService from '../../services/UserService';

// // const handleSubmit = async (e) => {
// //     e.preventDefault();//prevent the default behavior of the form that reload the page
// //     console.log( this.state.userName, this.state.password);
// // }

// function Login() {


//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [valid, setValid] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const validLogin = () => {
//         if (valid == true) setValid(true);
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await UserService.login(userName, password).then(res => {
//                 console.log(res.data.data.username);
              

//                 setUserName('');
//                 setPassword('');
//             }).catch(err => console.log(err));

//         } catch (err) {
//             console.log(err.response?.msg);
//         }


//     }


//     return (
//         <div>
//             <div className="vh-100">
//                 <div className="container-fluid h-custom">
//                     <div className="row d-flex justify-content-center align-items-center h-100">
//                         <div className="col-md-9 col-lg-6 col-xl-5">
//                             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                                 className="img-fluid" alt="Sample image" />
//                         </div>
//                         <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                                     <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//                                     <button type="button" className="btn btn-primary btn-floating mx-1">
//                                         <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18" ><path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z" /></svg>                                          </button>

//                                     <button type="button" className="btn btn-primary btn-floating mx-1">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
//                                             <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
//                                         </svg>                                        </button>

//                                     <button type="button" className="btn btn-primary btn-floating mx-1">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
//                                             <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
//                                             <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
//                                         </svg>                                        </button>
//                                 </div>

//                                 <div className="divider d-flex align-items-center my-4">
//                                     <p className="text-center fw-bold mx-3 mb-0">Or</p>
//                                 </div>

//                                 {/* <!-- Email input --> */}
//                                 <div className="form-outline mb-4">
//                                     <input type="email" autoComplete="off" id="userName" className="form-control form-control-lg"
//                                         placeholder="Enter a valid email address"
//                                         onChange={e => setUserName(e.target.value)}
//                                         value={userName} required
//                                     />

//                                 </div>

//                                 {/* <!-- Password input --> */}
//                                 <div className="form-outline mb-3">
//                                     <input type="password" id="password" className="form-control form-control-lg"
//                                         placeholder="Enter password"
//                                         onChange={e => setPassword(e.target.value)}
//                                         value={password} required
//                                     />

//                                 </div>

//                                 <div className="d-flex justify-content-between align-items-center">
//                                     {/* <!-- Checkbox --> */}
//                                     <div className="form-check mb-0">
//                                         <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                                         <label className="form-check-label" for="form2Example3">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                     <a href="#!" className="text-body">Forgot password?</a>
//                                 </div>

//                                 <div className="text-center text-lg-start mt-4 pt-2">
//                                     <button type="submit" className="btn btn-primary btn-lg"
//                                         style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}

//                                     >

//                                         Login</button>
//                                     <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
//                                         {/* axios */}
//                                         <a href="#!"
//                                             className="link-secondary">Register</a></p>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );

// }

// export default Login;