import { combineReducers } from 'redux'
import incrementContainerReducer from './pages/increment/reducers/incrementReducer'
import pageFilterReducer from './common/reducers/page-filter-reducer'
import CompanyReducer from './pages/companys/reudcers/componyReducers'
import StationReducer from './pages/station/reducers/stationReducer'
const rootReducer = combineReducers({
    incrementContainer:incrementContainerReducer,//增值服务
    filter:pageFilterReducer,//筛选项
    company:CompanyReducer,//公司模块
    station:StationReducer//站点模块
})

export default rootReducer
