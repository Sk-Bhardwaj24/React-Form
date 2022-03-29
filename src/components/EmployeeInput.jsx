import React from "react";

const EmployeeInput = ({ handlesubmit }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    isMarried: false,
  });
  const handlechange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const { name, age, address, department, salary, isMarried } = formData;
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        onChange={handlechange}
        value={name}
      />
      <br />
      <br />
      <input
        name="age"
        type="text"
        placeholder="Enter Age"
        onChange={handlechange}
        value={age}
      />
      <br />
      <br />
      <input
        name="address"
        type="text"
        placeholder="Enter Address"
        onChange={handlechange}
        value={address}
      />
      <br />
      <br />
      <label>
        Departement:
        <select onChange={handlechange} name="department" value={department}>
          <option>select Departement</option>
          <option value="IT">IT</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics">Electronics</option>
          <option value="Machenical">Machenical</option>
        </select>
      </label>
      <br />
      <br />
      <input
        name="salary"
        type="text"
        placeholder="Enter Salary"
        onChange={handlechange}
        value={salary}
      />
      <br />
      <br />
      <label>
        IsMarried:
        <input
          type="checkbox"
          name="isMarried"
          onChange={handlechange}
          value={isMarried}
        />
      </label>
      <br />
      <br />
      <button onClick={() => handlesubmit({ formData })}>ADD</button>
    </div>
  );
};

export default EmployeeInput;
