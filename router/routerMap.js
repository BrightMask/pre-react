import MapLayout from '../pages/map/map-layout'
import LayoutPage from '../pages/layout/layout-index'
import Login from '../pages/login/login-index'
import CompanyList from '../pages/companys/components/list'

import SetTheme from '../pages/theme/settheme'
const routeMap = [
    {
        path:'/',
        exact:true,

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
        path:'/login',
        main:Login
    },

]

export default routeMap
