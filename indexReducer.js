import { combineReducers } from 'redux'

import publicReducer from './pages/public/reducers/pubilcReducer'
import incrementContainerReducer from './pages/increment/reducers/incrementReducer'
import pageFilterReducer from './common/reducers/page-filter-reducer'
import CompanyListReducer from './pages/companys/reudcers/componyListReducers'
import StationReducer from './pages/station/reducers/stationReducer'

const rootReducer = combineReducers({
    public:publicReducer,
    incrementContainer:incrementContainerReducer,//增值服务
    filter:pageFilterReducer,//筛选项
    companylist:CompanyListReducer,//公司模块
    station:StationReducer//站点模块
})

export default rootReducer
