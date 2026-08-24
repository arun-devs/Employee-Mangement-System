import EmployeeTable from "../components/employees/EmployeeTable";
import { Link } from "react-router-dom";
import employeeService from "../services/employeeService";
import { useEffect, useState } from "react";

const Employees=()=>{
const [employees, setEmployees] = useState([]);

 const loadEmployees = async () => {
const response = await employeeService.getEmployees();
setEmployees(response.data);
  console.log(response.data);
};

    useEffect(() => {
    loadEmployees();
    }, []);


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
                <EmployeeTable employees={employees}/>
            </div>

        </section>
        )
}
export default Employees;