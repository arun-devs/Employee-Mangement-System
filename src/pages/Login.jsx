
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Demo login only — no credentials are verified yet.
//     login();
//     navigate("/dashboard");
//   };
const handleLogin = (e) => {
  e.preventDefault();

  login();
  navigate("/dashboard");
};

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-50">
      {/* Left branding section */}
      <div className="hidden md:flex flex-col justify-between bg-gray-900 p-12 text-white">
        <div className="text-2xl font-bold">
          🏢 EmployeeHub
        </div>

        <div className="max-w-md">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-3xl">
            👥
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Great teams start with great people.
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Manage employees, track your workforce, and
            keep your entire organization connected in one place.
          </p>

          <div className="mt-8 flex gap-3">
            <span className="h-1.5 w-12 rounded-full bg-emerald-400" />
            <span className="h-1.5 w-5 rounded-full bg-gray-600" />
            <span className="h-1.5 w-5 rounded-full bg-gray-600" />
          </div>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 EmployeeHub. All rights reserved.
        </p>
      </div>

      {/* Login form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 md:hidden text-xl font-bold text-gray-900">
            🏢 EmployeeHub
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>

            <p className="mt-3 text-gray-500">
              Enter your details to access your workspace.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="username"
                
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-20 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 text-sm font-medium text-gray-500 hover:text-emerald-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-emerald-600"
                />
                Remember me
              </label>

              <button
                type="button"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-[0.99]"
            >
              Sign in to EmployeeHub →
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Secure employee management for modern teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
