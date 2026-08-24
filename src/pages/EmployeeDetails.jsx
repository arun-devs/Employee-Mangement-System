import { useParams } from "react-router-dom";

const EmployeeDetails=()=>{
     const { id } = useParams();
     console.log(id);
    return (
        <>Employee details</>
    )
}
export default EmployeeDetails