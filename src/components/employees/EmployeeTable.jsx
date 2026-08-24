import { Link } from "react-router-dom";

const EmployeeTable=({employees})=>{


    return(
        <>
            <table className="w-full bg-white rounded-lg shadow-sm">
                <thead >
                        <tr  className="border-b border-gray-200">
                            <th className="p-2 text-left">Code</th>
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Department</th>
                            <th className="p-2 text-left">Designation</th>
                            <th className="p-2 text-left">Status</th>
                            <th className="p-2 text-left">Actions </th>
                        </tr>
                </thead>
                <tbody className="p-2"> 
                    {employees.map((employee)=>(

                    <tr key={employee.id} className="border-b border-gray-100">
                        <td className="p-2">{employee.code}</td>
                        <td className="p-2">{employee.name}</td>
                        <td className="p-2">{employee.department}</td>
                        <td className="p-2">{employee.designation}</td>
                        <td className="p-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                       {employee.status}
                            </span>
                    </td>
                        
                        <td className="p-2">
                            <Link
                            to={`/employees/${employee.id}`}
                            className="text-blue-600 hover:underline"
                            >
                            View
                            </Link>

                            <Link
                            to={`/employees/${employee.id}`}
                            className="text-blue-600 hover:underline"
                            >
                            Edit
                            </Link>

                            <Link
                            to={`/employees/${employee.id}`}
                            className="text-blue-600 hover:underline"
                            >
                            Delete
                            </Link>


                        </td>
                             
                    </tr>


                    )
                    
                    
                    
                    
                    )}
                    
                    

                </tbody>
            </table>
        </>
    )
}
export default EmployeeTable