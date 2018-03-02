import MapLayout from '../pages/map/map-layout'
import LayoutPage from '../pages/layout/layout-index'
import Login from '../pages/login/login-index'
import CompanyList from '../pages/companys/components/list'
import SetTheme from '../pages/theme/settheme'
import HomePage from '../pages/homepage/index'
const routeMap = [
    {
        path:'/',
        main:LayoutPage
    },
    {
        path:'/map',
        main:MapLayout
    },
    {
        path:'/company',
        main:CompanyList
    },
    {
        path:'/settheme',
        main:SetTheme
    }
]

export default routeMap
