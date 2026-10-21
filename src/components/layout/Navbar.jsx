
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex h-16 w-full items-center justify-between bg-gray-900 px-6 text-white shadow-md">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-xl">
          🏢
        </span>

        <span className="text-xl font-bold tracking-tight">
          EmployeeHub
        </span>
      </div>

      {/* User actions */}
      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-gray-300 sm:block">
            Welcome back, Arun
          </span>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium transition hover:border-red-400 hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
