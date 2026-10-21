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
     setError(null);
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



       return (
  <section className="space-y-6">
    {/* Page header */}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Employees
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your workforce, employee details and records.
        </p>
      </div>

      <Link
        to="/employees/add"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        <span className="text-xl">+</span>
        Add Employee
      </Link>
    </div>

    {/* Search and filters */}
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
        <input
          type="text"
          placeholder="Search by employee name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>
    </div>

    {/* Employee list */}
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <h2 className="font-semibold text-gray-900">
          Employee Directory
        </h2>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {filteredEmployees.length} employees
        </span>
      </div>

      {error && (
        <p className="m-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {loading ? (
        <div className="p-10 text-center text-gray-500">
          Loading employees...
        </div>
      ) : filteredEmployees.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-lg font-semibold text-gray-700">
            No employees found
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Try changing your search or department filter.
          </p>
        </div>
      ) : (
        <EmployeeTable
          employees={filteredEmployees}
          onDelete={handleDelete}
        />
      )}
    </div>

    {/* Delete confirmation */}
    {showDeleteConfirm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl">
            🗑️
          </div>

          <h2 className="text-xl font-bold text-gray-900">
            Delete employee?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            This action will permanently remove this employee record.
            Are you sure you want to continue?
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={cancelDelete}
              className="rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={confirmDelete}
              className="rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white transition hover:bg-red-700"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    )}
  </section>
);
}
export default Employees;