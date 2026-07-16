import { Link } from "react-router-dom";
const Sidebar=()=>{
    return(
        <div className="flex justify-items-end">
        <div>
         <Link to="dashboard" className="block">Dashboard</Link>   
        <Link to="employees" className="block">Employees</Link>   
        <h2>Departments</h2>
        <h2>Reports</h2>
        <h2>Settings</h2>
         <h2>Logout</h2>
        </div>
         </div>
    )
}
export default Sidebar;