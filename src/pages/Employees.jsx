import EmployeeTable from "../components/employees/EmployeeTable";
import { Link } from "react-router-dom";
import employeeService from "../services/employeeService";
import { useEffect, useState } from "react";

const Employees=()=>{
const [employees, setEmployees] = useState([]);
const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
const [searchTerm, setSearchTerm] = useState("");
const [department, setDepartment] = useState("All");
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
//  const loadEmployees = async () => {
// const response = await employeeService.getEmployees();
// setEmployees(response.data);
//   console.log(response.data);
// };
const loadEmployees = async () => {
  try {
    const response = await employeeService.getEmployees();
    setEmployees(response.data);
  } catch (error) {
    setError("Failed to load employees");
    console.log(error);
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
    loadEmployees();
    }, []);

  const handleDelete = (id) => {
    setSelectedEmployeeId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    await employeeService.deleteEmployee(selectedEmployeeId);

    setEmployees((prevEmployees) =>
      prevEmployees.filter(
        (employee) => employee.id !== selectedEmployeeId
      )
    );

    setShowDeleteConfirm(false);
    setSelectedEmployeeId(null);
  };

  // 🟢 NEW — CANCEL DELETE
  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setSelectedEmployeeId(null);
  };

 const filteredEmployees = employees.filter(
  employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (department === "All" || employee.department === department)
);



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
               
            </div><select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="border border-gray-300 px-4 py-2 rounded-lg"
                    >
                      <option value="All">All Departments</option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                    </select>
            <div >
                    <input className="border border-gray-300 max-w-md px-4 py-2 rounded-lg " type="text" placeholder="Search Employees" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </div>
            
            <div>
                {error && (
                  <p className="text-red-600 mb-4">
                    {error}
                  </p>
                )}

            
                {/* <EmployeeTable employees={filteredEmployees}  onDelete={handleDelete}/> */}
                {loading ? (
                      <p>Loading employees...</p>
                    ) : filteredEmployees.length === 0 ? (
                      <p className="text-gray-500">No employees found.</p>
                    ) : (
                      <EmployeeTable
                        employees={filteredEmployees}
                        onDelete={handleDelete}
                      />
                    )}
                
            </div>
        {/* DELETE CONFIRMATION UI */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-lg shadow-xl p-6 w-96">

            <h2 className="text-lg font-semibold text-gray-800">
              Delete Employee
            </h2>

            <p className="text-gray-600 mt-2">
              Are you sure you want to delete this employee?
            </p>

            <div className="flex justify-end gap-3 mt-6">

              {/* 🟢 NEW — CANCEL BUTTON */}
              <button
                type="button"
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              {/* 🟢 NEW — CONFIRM BUTTON */}
              <button
                type="button"
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Confirm Delete
              </button>

            </div>
          </div>
        </div>
      )}

        </section>
        )
}
export default Employees;