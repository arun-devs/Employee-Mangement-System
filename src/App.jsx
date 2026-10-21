import Layout from "./components/layout/Layout"
import { Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import AddEmployee from "./pages/AddEmployee"
import EmployeeDetails from "./pages/EmployeeDetails"
import EditEmployee from "./components/employees/EditEmployee"
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
 
  return (
    <>
    <Routes>
      <Route  path="/login" element={<Login/>}/>

      <Route element={<ProtectedRoute />}>
            <Route  path="/" element={<Layout/>}>
              <Route  path="dashboard" element={<Dashboard/>}/>
              <Route  path="employees" element={<Employees/>}/>
              <Route  path="employees/add" element={<AddEmployee/>}/>
              <Route path="employees/:id" element={<EmployeeDetails />} />
              <Route path="employees/:id/edit" element={<EditEmployee />} />

            </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
