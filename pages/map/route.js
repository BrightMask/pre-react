module.exports = {
    path: 'map',
    getComponent(nextState, cb){
        require.ensure([],(require) => {
            cb(null,require('./map-layout'))
        },'MapLayout')
    }
}
