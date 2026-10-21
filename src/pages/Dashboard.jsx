
import { useEffect, useState } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import RecentEmployees from "../components/dashboard/RecentEmployees";
import employeeService from "../services/employeeService";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const response = await employeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error("Failed to load dashboard employees:", error);
        setError("Unable to load employee statistics.");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const totalEmployees = employees.length;

  const totalDepartments = new Set(
    employees
      .map((employee) => employee.department?.trim().toLowerCase())
      .filter(Boolean)
  ).size;

  return (
    <>
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your workforce.
        </p>
      </section>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          icon="👥"
          title="Total Employees"
          value={loading ? "..." : totalEmployees}
        />

        <DashboardCard
          icon="🏢"
          title="Departments"
          value={loading ? "..." : totalDepartments}
        />

        <DashboardCard
          icon="✅"
          title="Present Today"
          value={142}
        />

        <DashboardCard
          icon="🏖️"
          title="Pending Leaves"
          value={6}
        />
      </section>

      <section className="mt-6">
        <RecentEmployees />
      </section>
    </>
  );
};

export default Dashboard;
