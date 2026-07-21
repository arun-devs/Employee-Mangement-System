import { NavLink } from "react-router-dom";
const Sidebar=()=>{
    return(
        <div className="flex justify-items-end w-64 bg-gray-900 text-white min-h-screen p-5">
        <div>
         <NavLink to="dashboard" className={({isActive})=>{return isActive? "block px-3 py-2 rounded-md bg-blue-600 font-semibold":"block px-3 py-2 rounded-md hover:bg-gray-700" }}>Dashboard</NavLink>   
        <NavLink to="employees" className={({isActive})=>{return isActive? "block px-3 py-2 rounded-md bg-blue-600 font-semibold":"block px-3 py-2 rounded-md hover:bg-gray-700"}}>Employees</NavLink>   
        <h2>Departments</h2>
        <h2>Reports</h2>
        <h2>Settings</h2>
         <h2>Logout</h2>
        </div>
         </div>
    )
}
export default Sidebar;