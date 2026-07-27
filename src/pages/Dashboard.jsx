import DashboardCard from "../components/dashboard/DashboardCard"
import RecentEmployees from "../components/dashboard/RecentEmployees"
const Dashboard=()=>{
    return(
        <>
        <section className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </section>
         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           <DashboardCard
                icon="👥"
                title="Total Employees"
                value={156}
            />

            <DashboardCard
                icon="🏢"
                title="Departments"
                value={8}
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
        <section>
            <RecentEmployees/>
        </section>
        <section>
            Chart Section
        </section>
        </>
    )
}
export default Dashboard