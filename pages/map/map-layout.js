import React from 'react'
import { Row, Col, Layout } from 'antd';
import './css/map.css'
import PageFilterContainer from '../../common/containers/page-fliter-container'


import DashBoardLeftOne from './components/left-one/left-one'
const {Header, Sider, Content } = Layout;

class MapLayout extends React.Component {

    setPageView = () => {
    }

    render () {

        this.setPageView()

        return (
            <div className="cdot-map-container">
                <Row gutter={32} className="cdot-map-row">
                    <Col className="cdot-map-left" sx={0} sm={0} md={5} lg={6}>
                        <div className="left-chart-item">
                            <DashBoardLeftOne />
                        </div>
                        <div className="left-chart-item">
                            站点数量
                        </div>
                        <div className="left-chart-item">
                            注册用户
                        </div>
                    </Col>
                    <Col className="cdot-map-center" sx={24} sm={24} md={14} lg={12}>
                        <div className="system-total-data-box">数据</div>
                        <div className="cdot-map-box"></div>
                    </Col>
                    <Col className="cdot-map-right" sx={0} sm={0} md={5} lg={6}>
                        <div className="right-chart-item">订单变化</div>
                        <div className="right-chart-item">未定</div>
                        <div className="right-chart-item">未定</div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MapLayout
