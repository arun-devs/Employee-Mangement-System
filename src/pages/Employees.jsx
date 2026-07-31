import EmployeeTable from "../components/employees/EmployeeTable";
import { Link } from "react-router-dom";
const Employees=()=>{

        return(
           <section >

           
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Employees
                </h1>
                <Link to="/employees/add"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-block">
                    + Add Employee
                </Link>
               
            </div>
            <div >
                    <input className="border border-gray-300 max-w-md px-4 py-2 rounded-lg " type="text" placeholder="Search Employees"/>
            </div>
            <div>
                <EmployeeTable/>
            </div>

        </section>
        )
}
export default Employees;