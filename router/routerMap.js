import MapLayout from '../pages/map/map-layout'
import LayoutPage from '../pages/layout/layout-index'
import Login from '../pages/login/login-index'
import CompanyList from '../pages/companys/components/companyList'
import SetTheme from '../pages/theme/settheme'
import HomePage from '../pages/homepage/index'
import IncrementContainer from '../pages/increment/container/incrementContainer'
import CompanyContainer from '../pages/companys/containers/companyContainer'
import AddCompany from '../pages/companys/components/addcompany'
import SystemUserContainer from '../pages/systemUser/containers/systemUserContainer'


const routeMap = [
    {
        path:'/map',
        exact:true,
        main:MapLayout
    },
    {
        path:'/company',
        main:CompanyContainer
    },
    {
        path:'/company/list',
        main:CompanyList
    },
    {
        path:'/company/add',
        main:AddCompany
    },
    {
        path:'/settheme',
        main:SetTheme
    },
    {
        path:'/increment',
        main:IncrementContainer
    },
    {
        path:'/system',
        main:SystemUserContainer
    }

]

export default routeMap
