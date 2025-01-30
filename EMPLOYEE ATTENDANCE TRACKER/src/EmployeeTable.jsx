import React from "react";

const EmployeeTable = ({ employees, removeEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.status}</td>
              <td>
                <button onClick={() => removeEmployee(employee.id)}>Remove</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No employees found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
