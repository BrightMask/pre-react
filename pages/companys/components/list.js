import React,{ Component } from 'react'
import { Table } from 'antd'

const columns = [
    {
        title:'公司名称',
        dataIndex:'name',
        key:'name'
    },{
        title:'类型',
        dataIndex:'type',
        key:'type'
    }
]
class CompanyList extends Component {
    state = {
        loading:true,
        data:[]
    }

    componentDidMount() {
        this.Search((res)=>{
            console.log(res)
            this.setState({
                loading:false,
                data:res.data.list
            })
        })
    }

    // 查询公司列表
    Search = (cb) => {
        let formData = new FormData()
        formData.append('nologin',999)
        fetch('http://dev.chargedot.com:18973/api/v1/station/enterprise/search',
            {
                method:'POST',
                body:formData
            }
        ).then(
            function (res) {
                res.json().then(function(data){
                    cb(data)
                })
            }
        )
    }

    render () {
        const { loading, data } = this.state
        return (
            <div className="cdot-list-content">
                <Table  dataSource={data} bordered columns={columns}/>
                {/* <List
                    loading={loading}
                    dataSource ={data}
                    size='small'
                    bordered
                    itemLayout="horizontal"
                    renderItem={item => (
                        <List.Item>
                            {item.name}
                        </List.Item>
                    )}
                /> */}
            </div>
        )
    }
}

export default CompanyList
