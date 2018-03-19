import { combineReducers } from 'redux'
import incrementContainerReducer from './pages/increment/reducers/incrementReducer'
import pageFilterReducer from './common/reducers/page-filter-reducer'
import CompanyReducer from './pages/companys/reudcers/componyReducers'
const rootReducer = combineReducers({
    incrementContainer:incrementContainerReducer,
    filter:pageFilterReducer,
    company:CompanyReducer
})

export default rootReducer
