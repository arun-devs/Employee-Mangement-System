import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  const loadEmployee = async () => {
    const response = await employeeService.getEmployee(id);
    setEmployee(response.data);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  if (!employee) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">
        Loading employee details...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm max-w-3xl">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Employee Details
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View employee information
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            employee.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {employee.status}
        </span>
      </div>

      {/* Employee Details */}
      <div className="p-6">

        <div className="grid grid-cols-[180px_1fr] gap-x-6 gap-y-5">

          <label className="font-medium text-gray-700 self-center">
            Employee Code
          </label>

          <input
            type="text"
            value={employee.code}
            readOnly
            className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 w-full text-gray-700"
          />

          <label className="font-medium text-gray-700 self-center">
            Employee Name
          </label>

          <input
            type="text"
            value={employee.name}
            readOnly
            className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 w-full text-gray-700"
          />

          <label className="font-medium text-gray-700 self-center">
            Department
          </label>

          <input
            type="text"
            value={employee.department}
            readOnly
            className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 w-full text-gray-700"
          />

          <label className="font-medium text-gray-700 self-center">
            Designation
          </label>

          <input
            type="text"
            value={employee.designation}
            readOnly
            className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 w-full text-gray-700"
          />

          <label className="font-medium text-gray-700 self-center">
            Status
          </label>

          <input
            type="text"
            value={employee.status}
            readOnly
            className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 w-full text-gray-700"
          />

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-gray-200">

          <button
            type="button"
            onClick={() => navigate("/employees")}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300"
          >
            Back
          </button>

          <button
            type="button"
            onClick={() => navigate(`/employees/${id}/edit`)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Employee
          </button>

        </div>

      </div>
    </div>
  );
};

export default EmployeeDetails;