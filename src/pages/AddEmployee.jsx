
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddEmployee = () => {


//React Hook Form
const {
register,
handleSubmit,
formState:{errors},
reset,

}=useForm({
defaultValues:{
   code: "",
  name: "",
  department: "",
  designation: "",
  status: "Active",
}

})
// generic form handler
// const [employee, setEmployee] = useState({
//   code: "",
//   name: "",
//   department: "",
//   designation: "",
//   status: "Active",
// });

// const [errors, setErrors] = useState({
//   code: "",
//   name: "",
//   department: "",
//   designation: "",
// });
const navigate = useNavigate();

const handllebtncancel=()=>{
  navigate("/employees")
}

const onSubmit = (data) => {
  console.log(data);
  reset();
};
 
// const handleChange=(e)=>{
//   setEmployee({
//     ...employee,
//     [e.target.name]:e.target.value,
//   })

//   setErrors({
//     ...errors,
//    [e.target.name]:"" 
//  })
// }
 
// const validateForm = () => {
//   const newErrors = {};

//   if (!employee.code.trim()) {
//     newErrors.code = "Employee Code is required";
//   }

//   if (!employee.name.trim()) {
//     newErrors.name = "Employee Name is required";
//   }

//   if (!employee.department.trim()) {
//     newErrors.department = "Department is required";
//   }

//   if (!employee.designation.trim()) {
//     newErrors.designation = "Designation is required";
//   }

//   setErrors(newErrors);

//   return Object.keys(newErrors).length === 0;
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!validateForm()) {
//     return;
//   }

//   console.log(employee);
//    // Reset Form
//   setEmployee({
//     code: "",
//     name: "",
//     department: "",
//     designation: "",
//     status: "Active",
//   });

//   // Clear Errors
//   setErrors({
//     code: "",
//     name: "",
//     department: "",
//     designation: "",
//   });
// };

  return (

    
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">
        Add Employee
      </h1>

      <form 
      className="grid grid-cols-[180px_1fr] gap-4 items-center"
      onSubmit={handleSubmit(onSubmit)}
      >
        
        <label htmlFor="code" >Employee Code</label>
        <div>
          <input
          id="code"
          type="text"
          name="code"
          {...register("code",{required: "Employee Code is required",})}
          // value={employee.code}
          // onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          
        />
        {errors.code && (
          <p className="text-red-500 text-sm">
            {errors.code.message}
          </p>
        )}
          
        </div>
        
        

        <label htmlFor="name">Employee Name</label>
        <div>
            <input
          id="name"
          type="text"
          name="name"
          // value={employee.name}
          // onChange={handleChange}
           {...register("name",{required: "Employee name is required",})}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
          {errors.name && (
          <p className="text-red-500 text-sm">
            {errors.name.message}
          </p>
        )}
        </div>
      

        <label htmlFor="department">Department</label>
        <div>
          <input
          id="department"
          type="text"
          name="department"
          // value={employee.department}
          // onChange={handleChange}
          {...register("department",{required: "Employee department is required",})}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
          {errors.department && (
          <p className="text-red-500 text-sm">
            {errors.name.department}
          </p>
        )}
        </div>
        

        <label htmlFor="designation">Designation</label>
        <div>
          <input
          id="designation"
          type="text"
          name="designation"
          // value={employee.designation}
          // onChange={handleChange}
          {...register("designation",{required:"Designation is required"})}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />
        {errors.designation && (
          <p className="text-red-500 text-sm">
            {errors.name.designation}
          </p>
        )}
        </div>
        

        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          name="status"
          // value={employee.status}
          // onChange={handleChange}
          {...register("status")}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div></div>

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>

          <button
            type="button"
            className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300"
            onClick={handllebtncancel}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddEmployee;