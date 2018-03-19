import React, { Component } from 'react'
import { Button,Row,Col } from 'antd'


class IncrementItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state
    }

    render () {
        let { state, actions } = this.props
        console.log(state)
        return (
            <div  className="increment-item">
                <div className="increment-header">

                    <div className="increment-name">
                        {state.name}
                    </div>
                    <div className="increment-btn-group">
                        {
                            state.isChoosen?
                            <Button
                                disabled
                                size="small"
                            >
                                已购买
                            </Button>:
                            <Button
                                type="primary"
                                size="small"
                                className=""
                                onClick={()=>dispatch(actions.buyIncrement)}
                            >
                                购买
                            </Button>

                        }
                        </div>
                </div>
                <div className="increment-price">
                    ￥{state.price}
                </div>
            </div>
        )
    }
}

export default IncrementItem
