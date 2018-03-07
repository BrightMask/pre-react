import React, { Component } from 'react'
import { Button,Row,Col } from 'antd'


class IncrementItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state
    }

    render () {
        let { state, actions } = this.props

        let mockState = {
            id:1,
            name:'充值管理',
            price:8000,
            isChoosen:false
        }

        let mockActions = {
            chooseIncerment:id => consloe.log('chooseIncerment',id)
        }

        state = mockState;
        actions =mockActions

        if(state.isChoosen) return null

        return (
        <Col span={6}>
                <div  className="increment-item">
                    <div className="increment-name">
                        {state.name}
                    </div>
                    <div className="increment-btn"></div>
                    <div className="increment-price">
                        {state.price}
                    </div>
                </div>
            </Col>
        )
    }
}

export default IncrementItem
