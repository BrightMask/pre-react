import React from 'react'

class CompantItem extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state
    }

    render () {
        let { stata, actions } = this.props;

        let mockState = {
            id:1,
            name:'测试公司',
            type:'运营商'
        };
        let mockActions = {
            choosenCompany: id => console.log('choosenCompany',id)
        }

        state = mockState;
        actions = mockActions
    }
}
