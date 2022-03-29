import React from "react";

const EmployeeList = ({
  name,
  address,
  age,
  isMarried,
  department,
  salary,
  id,
}) => {
  console.log(id);
  return (
    <div key={id}>
      <h4>{name}</h4>
      <h4>{address}</h4>
      <h4>{age}</h4>
      <h4>{isMarried}</h4>
      <h4>{department}</h4>
      <h4>{salary}</h4>
    </div>
  );
};

export default EmployeeList;
