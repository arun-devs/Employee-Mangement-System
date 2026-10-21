import { useEffect, useState } from "react";
import employeeService from "../../services/employeeService";

const RecentEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const response = await employeeService.getEmployees();
        setEmployees(response.data.slice(-5).reverse());
      } catch (error) {
        console.error("Failed to load recent employees:", error);
        setError("Unable to load recent employees.");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  return (
    <section>
      <h2 className="mb-4 mt-5 text-xl font-semibold text-gray-800">
        Last 5 joined employees
      </h2>

      <div className="w-full overflow-x-auto rounded-lg bg-white p-6 shadow-sm">
        {loading ? (
          <p className="py-4 text-gray-500">Loading employees...</p>
        ) : error ? (
          <p className="py-4 text-red-600">{error}</p>
        ) : employees.length === 0 ? (
          <p className="py-4 text-gray-500">No employees found.</p>
        ) : (
          <table className="w-full min-w-[550px] text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="p-3">Name</th>
                <th className="p-3">Department</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  className="border-b border-gray-50 transition hover:bg-gray-50"
                  key={employee.id}
                >
                  <td className="p-3 font-medium text-gray-800">
                    {employee.name}
                  </td>

                  <td className="p-3 text-gray-600">
                    {employee.department}
                  </td>

                  <td className="p-3 text-gray-600">
                    {employee.designation}
                  </td>

                  <td className="p-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        employee.status?.toLowerCase() === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default RecentEmployees;
