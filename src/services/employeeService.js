import axiosClient from "./axiosClient";

const employeeService ={
    getEmployees:()=>{
        return axiosClient.get("/employees");
    },

    createEmployee: (data) => {
    return axiosClient.post("/employees", data);
  },
    getEmployee:(id)=>{
        return axiosClient.get(`/employees/${id}`)
    },
    updateEmployee: (id, data) => {
    return axiosClient.put(`/employees/${id}`, data);
  },
  deleteEmployee: (id) => {
  return axiosClient.delete(`/employees/${id}`);
},
};

export default employeeService;