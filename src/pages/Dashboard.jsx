import DashboardCard from "../components/dashboard/DashboardCard"
const Dashboard=()=>{
    return(
        <>
        <section>
            <h1>dashboard</h1>
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
            Recent Employees Section
        </section>
        <section>
            Chart Section
        </section>
        </>
    )
}
export default Dashboard