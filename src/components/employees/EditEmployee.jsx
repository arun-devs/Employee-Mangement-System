import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../../services/employeeService";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      code: "",
      name: "",
      department: "",
      designation: "",
      status: "Active",
    },
  });

  // Load existing employee
  useEffect(() => {
    const loadEmployee = async () => {
      const response = await employeeService.getEmployee(id);

      console.log(response.data);

      // Put API data into the form
      reset(response.data);
    };

    loadEmployee();
  }, [id, reset]);

  const onSubmit = async (data) => {
    console.log("Updated data:", data);

    await employeeService.updateEmployee(id, data);

    navigate("/employees");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">

      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Edit Employee
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-[180px_1fr] gap-4 items-center"
      >

        {/* Employee Code */}
        <label className="font-medium text-gray-700">
          Employee Code
        </label>

        <input
          {...register("code")}
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        {/* Employee Name */}
        <label className="font-medium text-gray-700">
          Employee Name
        </label>

        <input
          {...register("name")}
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        {/* Department */}
        <label className="font-medium text-gray-700">
          Department
        </label>

        <input
          {...register("department")}
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        {/* Designation */}
        <label className="font-medium text-gray-700">
          Designation
        </label>

        <input
          {...register("designation")}
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        />

        {/* Status */}
        <label className="font-medium text-gray-700">
          Status
        </label>

        <select
          {...register("status")}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Buttons */}
        <div className="col-span-2 flex justify-end gap-3 mt-6 pt-5 border-t border-gray-200">

          <button
            type="button"
            onClick={() => navigate("/employees")}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Update Employee
          </button>

        </div>

      </form>
    </div>
  );
};

export default EditEmployee;