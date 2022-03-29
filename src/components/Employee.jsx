import React from "react";
import EmployeeInput from "./EmployeeInput";
import EmployeeList from "./EmployeeList";

const Employee = () => {
  const [data, setData] = React.useState([]);
  const handlesubmit = ({ formData, setFormData }) => {
    // e.preventDefault();

    setData([...data, formData]);
  };
  return (
    <div>
      <EmployeeInput handlesubmit={handlesubmit} />
      {data.map((emp, id) => (
        <EmployeeList {...emp} id={id} />
      ))}
    </div>
  );
};

export default Employee;
