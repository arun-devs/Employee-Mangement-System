const RecentEmployees=()=>{

    return (
                <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-5">
                     Last 5 joined employees
                    </h2>

                    <div className="bg-white rounded-lg shadow-sm p-6 w-full">
                        <table className="w-full" >
                                <thead >
                                    <tr className="border-b border-gray-200">
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Department</th>
                                        <th className="p-3 text-left">Designation</th>
                                        <th className="p-3 text-left">Status</th>
                                        
                                    </tr>
                                    
                                </thead>
                                <tbody>

                                    <tr className="hover:bg-amber-200">
                                        <td className="p-3">Arun</td>
                                        <td className="p-3" >IT</td>
                                        <td className="p-3">Developer</td>
                                        <td className="p-3">Active</td>
                                    </tr>

                                    <tr className="hover:bg-amber-200">
                                        <td className="p-3">Rahul</td>
                                        <td className="p-3">HR</td>
                                        <td className="p-3">Recruiter</td>
                                        <td className="p-3">Active</td>
                                    </tr>

                                </tbody>

                         </table>
                    </div>
                  
                </section>
                
            
            
    )
}
export default RecentEmployees;