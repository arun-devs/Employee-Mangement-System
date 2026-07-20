import { NavLink } from "react-router-dom";
const Sidebar=()=>{
    return(
        <div className="flex justify-items-end">
        <div>
         <NavLink to="dashboard" className={({isActive})=>{return isActive? "text-blue-500 font-bold":"block" }}>Dashboard</NavLink>   
        <NavLink to="employees" className={({isActive})=>{return isActive? "text-blue-500 font-bold":"block"}}>Employees</NavLink>   
        <h2>Departments</h2>
        <h2>Reports</h2>
        <h2>Settings</h2>
         <h2>Logout</h2>
        </div>
         </div>
    )
}
export default Sidebar;