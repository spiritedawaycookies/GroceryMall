import React from 'react';
import Nav from '../../nav/Nav'
import Header from '../../nav/Header';
import { Row, Col, Typography } from "antd";
import SideMenu from '../../sideMenu/SideMenu';
import Carousel from '../../carousel/Carousel';
import IndexPagination from '../../pagemodel/index/IndexPagination';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8083';
interface Props {

}
const Index: React.FC<Props> = (props: Props) => {
    return (
        <>
        <Header />
        <div className="page-content mb-4">
            <Row style={{ marginTop: 20 }}>
              <Col span={6} >
                <SideMenu />
              </Col>
              <Col span={18}>
                <Carousel />
              </Col>
            </Row>
          </div>
          <IndexPagination itemsPage={8} />
          <div className='mb-5'>&nbsp;</div>
        </>
    );

}
export default Index;