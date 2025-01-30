      import React, { useState } from "react";
      import EmployeeTable from "../src/EmployeeTable";
      import AttendanceChart from "./AttendanceChart";
      import "./App.css";

      const App = () => {
        const [employees, setEmployees] = useState([
          { id: 1, name: "Alice", status: "Present", time: "09:00 AM" },
          { id: 2, name: "Bob", status: "Absent", time: "N/A" },
          { id: 3, name: "Charlie", status: "Present", time: "08:30 AM" },
          { id: 4, name: "David", status: "Late", time: "10:15 AM" },
          { id: 5, name: "Eve", status: "Absent", time: "N/A" },
        ]);

        const [newEmployee, setNewEmployee] = useState({
          id: "",
          name: "",
          status: "Present",
          time: "",
        });

        const [filter, setFilter] = useState("");

        const addEmployee = () => {
          if (newEmployee.id && newEmployee.name) {
            const currentTime = newEmployee.time || getCurrentTime();
            setEmployees((prev) => [
              ...prev,
              { ...newEmployee, time: currentTime },
            ]);
            setNewEmployee({ id: "", name: "", status: "Present", time: "" });
          }
        };

        const removeEmployee = (id) => {
          setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        };

        const handleStatusChange = (id, newStatus) => {
          setEmployees((prev) =>
            prev.map((emp) =>
              emp.id === id
                ? { ...emp, status: newStatus, time: newStatus !== "Absent" ? getCurrentTime() : emp.time }
                : emp
            )
          );
        };

        const getCurrentTime = () => {
          const date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          return `${hours}:${minutes} ${ampm}`;
        };

        const filteredEmployees = employees.filter(
          (emp) =>
            emp.name.toLowerCase().includes(filter.toLowerCase()) ||
            emp.status.toLowerCase().includes(filter.toLowerCase())
        );

        const renderEmployeeTable = (title, employeeList) => (
          <>
            <h3>{title}</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>
                      <select
                        value={emp.status}
                        onChange={(e) => handleStatusChange(emp.id, e.target.value)}
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                      </select>
                    </td>
                    <td>{emp.time}</td>
                    <td>
                      <button onClick={() => removeEmployee(emp.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );

        return (
          <div className="container">
            <h1>Employee Attendance Tracker</h1>

           
            <h2>Add New Employee</h2>
            <div className="add-employee-form">
              <div>
                <label htmlFor="id">Employee ID</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="ID"
                  value={newEmployee.id}
                  onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="name">Employee Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  value={newEmployee.status}
                  onChange={(e) => setNewEmployee({ ...newEmployee, status: e.target.value })}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                </select>
              </div>
              <div>
                <label htmlFor="time">Time (optional)</label>
                <input
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Time"
                  value={newEmployee.time}
                  onChange={(e) => setNewEmployee({ ...newEmployee, time: e.target.value })}
                />
              </div>
              
              <button onClick={addEmployee}>Add Employee</button>
            </div>

           
            <input
              type="text"
              placeholder="Search by name or status"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

           
            <div className="tables">
              {renderEmployeeTable("All Employees", filteredEmployees)}
              {renderEmployeeTable("Present Employees", employees.filter((emp) => emp.status === "Present"))}
              {renderEmployeeTable("Absent Employees", employees.filter((emp) => emp.status === "Absent"))}
              {renderEmployeeTable("Late Employees", employees.filter((emp) => emp.status === "Late"))}
            </div>

            
            <AttendanceChart employees={employees} />
          </div>
        );
      };

      export default App;
