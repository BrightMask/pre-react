import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import IncrementItem from '../components/incrementItem'
import actions from '../actions/incrementAction'
import '../css/style.css'

class IncrementContainer extends Component {

    calculateStatus () {
        let status = {
            incrementChoosen:{
                number:0,
                total:0
            },
            incrementUnChoosen:{
                number:0,
                total:0
            }
        }
        this.props.incrementContainer.increments.map(increment => {
            let selector = increment.isChoosen? 'incrementChoosen':'incrementUnChoosen';
            status[selector].number ++ ;
            status[selector].total += increment.price;
        })
        return status
    }

    // 获取已选择的增值服务
    getChoosenItem (increments) {
        let data = [];
        increments.forEach(increment => {
            if(increment.isChoosen) {
                data.push(
                    <Col xs={8} sm={6} md={6} lg={4} xl={3} key={increment.id}>
                        <IncrementItem key={increment.id} state={increment} />
                    </Col>
                )
            }
        })
        return data
    }

    // 获取未选择的增值服务
    getUnChoosenItem (increments)  {
        let data = [];
        increments.forEach(increment => {
            if(!increment.isChoosen) {
                data.push(
                    <Col xs={8} sm={6} md={6} lg={4} xl={3} key={increment.id}>
                            <IncrementItem key={increment.id} state={increment} />
                    </Col>
                )
            }
        })
        return data
    }




    render () {
        console.log(this.props)
        let { incrementContainer } = this.props
        let { increments } = incrementContainer
        let status = this.calculateStatus
       //  let {
       //     incrementChoosen: {number:choosenQuantity,total:choosenPrice},
       //     incrementUnChoosen: {number:unchoosenQuantity,total:unchoosenPrice}
       // } = status

        return (
            <div className="page-container increment-container">
                <div className="choosen-increment-box">
                    <h2>
                        已购买增值服务
                        <div className="increment-general-info">
                            <span>数量：</span>
                            <span>总额：</span>
                        </div>
                    </h2>

                    <div className="choosen-increment-list cdot-row-box">
                        <Row gutter={16}>
                            {this.getChoosenItem(increments)}
                        </Row>
                    </div>
                </div>
                <div className="unchoose-increment-box">
                    <h2>未购买增值服务</h2>
                    <div>
                        <span>数量：</span>
                        <span>总额：</span>
                    </div>
                    <div className="unchoosen-increment-list">
                        <Row gutter={16}>
                            {this.getUnChoosenItem(increments)}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    incrementContainer:state.incrementContainer
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(IncrementContainer)
