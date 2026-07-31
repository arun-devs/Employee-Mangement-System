
import { useState } from "react";

const AddEmployee = () => {
// generic form handler
const [employee, setEmployee] = useState({
  code: "",
  name: "",
  department: "",
  designation: "",
  status: "Active",
});
 
const handleChange=(e)=>{
  setEmployee({
    ...employee,
    [e.target.name]:e.target.value,
  })
}

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(employee);
};

  return (

    
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">
        Add Employee
      </h1>

      <form 
      className="grid grid-cols-[180px_1fr] gap-4 items-center"
      onSubmit={handleSubmit}
      >

        <label htmlFor="code" >Employee Code</label>
        <input
          id="code"
          type="text"
          name="code"
          value={employee.code}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        <label htmlFor="name">Employee Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        <label htmlFor="designation">Designation</label>
        <input
          id="designation"
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          name="status"
          value={employee.status}
          onChange={handleChange}
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
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddEmployee;