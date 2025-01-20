import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [trackEmployee, setTrackEmployee] = useState(false);

  const handleViewClick = () => {
    alert('Viewing Employees');
  };

  const handleAddClick = () => {
    alert('Adding a New Employee');
  };

  const handleRemoveClick = () => {
    alert('Removing an Employee');
  };

  const handleTrackClick = () => {
    setTrackEmployee(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Attendance Tracker</h1>
      </header>
      <main>
        <section className="features">
          <div className="manage-employees">
            <h2>Manage Employees</h2>

            {/* Individual Buttons */}
            <button onClick={handleViewClick} className="option-button">
              View Employees
            </button>
            <button onClick={handleAddClick} className="option-button">
              Add Employee
            </button>
            <button onClick={handleRemoveClick} className="option-button">
              Remove Employee
            </button>
            <button onClick={handleTrackClick} className="option-button track-button">
              Track Employee
            </button>
          </div>

          {/* Track Employee Section */}
          {trackEmployee && (
            <div className="track-employee">
              <h3>Track Employee Attendance</h3>
              <p>Here you can see detailed attendance logs and trends.</p>
              {/* Add more tracking details or components here */}
            </div>
          )}
        </section>
      </main>
      <footer className="app-footer">
        <p>© 2025 Employee Attendance Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
