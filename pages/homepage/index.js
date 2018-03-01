import React, { Component } from 'react';

class HomePage extends Component {
    render () {
        return (
            <div>
                <h3>主页</h3>
            </div>
        )
    }

    componentDidMount() {
        console.log('主页渲染完毕！')
    }
}
export default HomePage
