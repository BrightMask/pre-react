import MapLayout from '../pages/map/map-layout'
import LayoutPage from '../pages/layout/layout-index'
import Login from '../pages/login/login-index'
import CompanyList from '../pages/companys/components/list'
import SetTheme from '../pages/theme/settheme'
import HomePage from '../pages/homepage/index'
import IncrementContainer from '../pages/increment/container/incrementContainer'
const routeMap = [
    {
        path:'/map',
        exact:true,
        main:MapLayout
    },
    {
        path:'/company',
        main:CompanyList
    },
    {
        path:'/settheme',
        main:SetTheme
    },
    {
        path:'/increment',
        main:IncrementContainer
    }
]

export default routeMap
