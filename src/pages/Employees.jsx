import EmployeeTable from "../components/employees/EmployeeTable";
const Employees=()=>{

        return(
           <section >

           
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Employees
                </h1>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    + Add Employee
                </button>
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