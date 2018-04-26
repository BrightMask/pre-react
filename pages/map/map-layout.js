import React from 'react'
import { Row, Col, Layout } from 'antd';
import './css/map.css'
import PageFilterContainer from '../../common/containers/page-fliter-container'

const {Header, Sider, Content } = Layout;

class MapLayout extends React.Component {
    render () {
        return (
            <div className="cdot-map-container">
                <Row gutter={16} className="cdot-map-row">
                    <Col className="cdot-map-left" span={6}>
                        server
                    </Col>
                    <Col className="cdot-map-center" span={12}>
                        <div className="system-total-data-box">数据总览</div>
                        <div className="cdot-map-box"></div>
                    </Col>
                    <Col className="cdot-map-right" span={6}>
                        client
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MapLayout
