import Layout from "./components/layout/Layout"
import { Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"

function App() {
 
  return (
    <>
    <Routes>
      <Route  path="/login" element={<Login/>}/>

      <Route  path="/" element={<Layout/>}>
        <Route  path="dashboard" element={<Dashboard/>}/>
         <Route  path="employees" element={<Employees/>}/>
      </Route>
      
    </Routes>
    </>
  )
}

export default App
