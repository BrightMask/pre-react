import React, { Component } from 'react'

class StationContainer extends Component {
    render () {
        return (
            <div>站点容器</div>
        )
    }

}

const mapStateToProps = state => {

    return {
        station:state.station
    }
}

export default connect(mapStateToProps)(StationContainer)
