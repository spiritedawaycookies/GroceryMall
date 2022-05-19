import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa'
import { Dropdown, Menu } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import store from '../../redux/store'
import { withTranslation, WithTranslation } from 'react-i18next'
import { LanguageState } from '../../redux/language/languageReducer'
import {
    addLanguageActionCreator,
    changeLanguageActionCreator,
} from "../../redux/language/languageActions"
interface State extends LanguageState { }

class FooterComponent extends React.Component<WithTranslation, State> {
    constructor(props) {
        super(props);
        const storeState = store.getState();
        this.state = {
            language: storeState.language.language,
            languageList: storeState.language.languageList,
        };
        store.subscribe(() => {
            const storeState = store.getState();
            this.setState({
                language: storeState.language.language,
                languageList: storeState.language.languageList,
            });
            console.log('changed,subscribe', this.state.language);

        });
    }

    // const storeState = store.getState();
    // const [language, setLang] = useState(storeState.language);
    // const [this.state.languageList, setLangList] = useState(storeState.languageList);

    // useEffect(()=>{
    //     store.subscribe(()=>{
    //       const storeState=store.getState(); 
    //       setLang(storeState.language);
    //       console.log(language);

    //       setLangList(storeState.languageList);  

    //     }


    //     )
    // },[])
    handleStoreChange = () => {
        const storeState = store.getState();
        this.setState({
            language: storeState.language.language,
            languageList: storeState.language.languageList,
        });
        console.log('changed', this.state.language);

    };
    menuClickHandler = (e) => {
        console.log(e);
        if (e.key === "new") {
            // 处理新语言添加action
            const action = addLanguageActionCreator("新语言", "new_lang")
            store.dispatch(action);
        } else {
            const action = changeLanguageActionCreator(e.key)
            store.dispatch(action);
        }
    }

    render() {
        const { t } = this.props;
        console.log("render", t);

        return (
            <footer className="bg-primary  text-lg-start"

            >
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white"> {t('header.slogan')} </h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <Dropdown.Button
                                style={{ marginLeft: 0 }}
                                overlay={
                                    <Menu onClick={this.menuClickHandler}>
                                        {this.state.languageList.map(l => {
                                            return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                                        })}

                                    </Menu>
                                }
                                icon={<GlobalOutlined />}
                            >
                                {this.state.language === 'zh' ? '中文' : 'English'}
                            </Dropdown.Button>
                        </div>
                        <div className="col-lg-2 col-md-6" style={{ position: 'relative', top: '10px' }}>
                            <h5 className="text-white mb-3">{t("footer.quick_links")}</h5>
                            <ul className="list-unstyled text-muted">
                                <Link to={'/'}> <li><a href="#">{t('header.home_page')}</a></li></Link>
                                <Link to={'/register'}><li><a href="#">{t('header.register')}</a></li></Link>
                                <Link to={'/deals'}>   <li><a href="#">{t('header.deals')}</a></li></Link>
                                <Link to={'/about'}> <li><a href="#">{t('header.about')}</a></li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6" style={{ position: 'relative', right: '15px', top: '10px' }}>
                            <div className="text-center text-dark  align-items-center">
                                <h5 className="text-white mb-3">{t('footer.social_media')}</h5>
                                {/* <a href="https://www.youtube.com" className="btn btn-light m-1" role="button"
                    rel="nofollow" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                </a> */}
                                <a href="https://github.com/spiritedawaycookies" className="btn btn-light m-1" role="button" rel="nofollow"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/" className="btn btn-light m-1" role="button" rel="nofollow"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/" className="btn btn-light m-1" role="button" rel="nofollow"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ position: 'relative', right: '-40px', top: '10px' }}>
                            <h5 className="text-white mb-3">{t('footer.news_letter')}</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-light" id="button-addon2" type="button"><FaPaperPlane /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




                {/* <!-- Copyright --> */}
                <div className="text-center text-light mt-3 p-3" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
                    {t('footer.copyright')}&nbsp;
                    <a className="text-dark" href="https://mdbootstrap.com/">xxx.com</a>
                </div>

            </footer>

        );
    }

}

export const Footer = withTranslation()(FooterComponent);