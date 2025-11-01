import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layouts/layout';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard/dashboard';
import EmployeesList from './pages/employees/employeeslist';
import EmployeeForm from './pages/employees/employeeform';
import AircraftList from './pages/aircraft/aircraftlist';
import AircraftDetails from './pages/aircraft/aircraftdetails';
import AircraftForm from './pages/aircraft/aircraftform';
import PartsList from './pages/parts/partslist';
import PartDetails from './pages/parts/partdetails';
import PartForm from './pages/parts/partform';
import TestsList from './pages/tests/testslist';
import TestForm from './pages/tests/testform';
import StepsList from './pages/production/stepslist';
import StepForm from './pages/production/stepform';
import ReportsList from './pages/reports/reportslist';
import './styles/app.css';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Layout><Dashboard /></Layout>} />
              <Route path="/employees" element={<Layout><EmployeesList /></Layout>} />
              <Route path="/employees/new" element={<Layout><EmployeeForm /></Layout>} />
              <Route path="/aircraft" element={<Layout><AircraftList /></Layout>} />
              <Route path="/aircraft/:id" element={<Layout><AircraftDetails /></Layout>} />
              <Route path="/aircraft/new" element={<Layout><AircraftForm /></Layout>} />
              <Route path="/parts" element={<Layout><PartsList /></Layout>} />
              <Route path="/parts/:id" element={<Layout><PartDetails /></Layout>} />
              <Route path="/parts/new" element={<Layout><PartForm /></Layout>} />
              <Route path="/tests" element={<Layout><TestsList /></Layout>} />
              <Route path="/tests/new" element={<Layout><TestForm /></Layout>} />
              <Route path="/production" element={<Layout><StepsList /></Layout>} />
              <Route path="/production/new" element={<Layout><StepForm /></Layout>} />
              <Route path="/reports" element={<Layout><ReportsList /></Layout>} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;