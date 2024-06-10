import { Outlet } from "react-router-dom"
import SideNav from "../components/navigations/sideNav/SideNav"
import TopNav from "../components/navigations/topNav/TopNav"
// import './MainLayout.css'
import Manage from "../pages/manage/Manage"



const UserLayout = () => {

    return (

        <>

                <div id="display">
                    <div id="outlet">

                    <Outlet />
                    
                    </div>
                    
                </div>
        </>
    )
}
export default UserLayout