import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
         <main>
           <Outlet/>
         </main>  
        </div>
              
        </>
    )
}
export default Layout