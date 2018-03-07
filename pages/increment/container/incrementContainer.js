import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import IncrementItem from '../components/incrementItem'
import '../css/style.css'

class IncrementContainer extends Component {
    render () {
        let { state } = this.props
        let mockState = {
            isChoosen:false,
            newIcrementId:3,
            increments:[
                {
                    id:1,
                    name:'财务报表',
                    price:18000,
                    isChoosen:true,
                },{
                    id:2,
                    name:'场站监控',
                    price:10000,
                    isChoosen:false
                }
            ]
        }

        state  = mockState

        let stats = {
            incrementChoosen:{
                number:0,
                total:0
            },
            incrementUnChoosen:{
                number:0,
                total:0
            }
        }

        state.increments.map(increment => {
            let selector = increment.isChoosen? 'incrementChoosen':'incrementUnChoosen';
            stats[selector].number ++ ;
            stats[selector].total += increment.price;
        })

        return (
            <div className="page-container increment-container">
                <div className="choosen-increment-box">
                    <h2>已购买增值服务</h2>
                    <div>
                        <span>数量：{stats.incrementChoosen.number}</span>
                        <span>总额：{stats.incrementChoosen.total}</span>
                    </div>
                    <div className="choosen-increment-list cdot-row-box">
                        <Row gutter={8}>
                            {state.increments.map((incerment,index) => <IncrementItem key={index} state={incerment} />)}
                        </Row>
                    </div>
                </div>
                <div className="unchoose-increment-box">
                    <h2>未购买增值服务</h2>
                    <div>
                        <span>数量：{stats.incrementUnChoosen.number}</span>
                        <span>总额：{stats.incrementUnChoosen.total}</span>
                    </div>
                    <div className="unchoosen-increment-list"></div>
                </div>
            </div>
        )
    }
}
function select(state) {
    return {
        state:state.incrementContainer
    }
}

export default connect()(IncrementContainer)
