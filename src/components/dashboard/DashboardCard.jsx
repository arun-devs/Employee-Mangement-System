const DashboardCard=({icon,title,value})=>{

return(

  
       
     <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-4xl">{icon}</div>
        <h3 className="mt-4 text-gray-600 text-sm font-medium">{title}</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
    </div>
   
)

}

export default DashboardCard