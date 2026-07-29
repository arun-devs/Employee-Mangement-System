const employees = [
  {
    id: 1,
    name: "Arun",
    department: "IT",
    designation: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Anjana",
    department: "HR",
    designation: "Recruiter",
    status: "Active",
  },
];


const RecentEmployees=()=>{

    return (
                <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-5">
                     Last 5 joined employees
                    </h2>

                    <div className="bg-white rounded-lg shadow-sm p-6 w-full">
                        <table className="w-full" >
                                <thead >
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Department</th>
                                        <th className="p-3 text-left">Designation</th>
                                        <th className="p-3 text-left">Status</th>
                                        
                                    </tr> 
                                    
                                </thead>
                               
                                <tbody>
                                     {employees.map((itm)=>(
                                     <tr className="hover:bg-gray-50" key={itm.id}>
                                        <td className="p-3">{itm.name}</td>
                                        <td className="p-3" >{itm.department}</td>
                                        <td className="p-3">{itm.designation}</td>
                                        <td className="p-3">
                                             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                {itm.status}
                                            </span>
                                        </td>
                                    </tr>
                                    
                                    
                                   ) )}
                                   

                                    

                                </tbody>

                         </table>
                    </div>
                  
                </section>
                
            
            
    )
}
export default RecentEmployees;