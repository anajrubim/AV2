import React, { useState } from 'react';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard/dashboard';
import EmployeeList from './pages/employees/employeeslist';
import EmployeeForm from './pages/employees/employeeform';
import AircraftList from './pages/aircraft/aircraftlist';
import AircraftDetail from './pages/aircraft/aircraftdetails';
import PartsList from './pages/parts/partslist';
import PartDetail from './pages/parts/partsdetails';
import PartForm from './pages/parts/partsform';
import TestsList from './pages/tests/testlist';
import TestForm from './pages/tests/testform';
import StepsList from './pages/production/stepslist';
import StepForm from './pages/production/stepsform';
import ReportsList from './pages/reports/reportslist';
import './styles/app.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1); // Começa na página de login

  const renderPage = () => {
    switch(currentPage) {
      case 1: return <Login onNavigate={setCurrentPage} />;
      case 2: return <Dashboard onNavigate={setCurrentPage} />;
      case 3: return <EmployeeList onNavigate={setCurrentPage} />;
      case 4: return <EmployeeList onNavigate={setCurrentPage} />; // Lista de funcionários
      case 5: return <EmployeeForm onNavigate={setCurrentPage} />;
      case 6: return <Dashboard onNavigate={setCurrentPage} />; // Volta pro dashboard
      case 7: return <AircraftList onNavigate={setCurrentPage} />;
      case 8: return <AircraftDetail onNavigate={setCurrentPage} />;
      case 9: return <PartsList onNavigate={setCurrentPage} />;
      case 10: return <PartDetail onNavigate={setCurrentPage} />;
      case 11: return <PartForm onNavigate={setCurrentPage} />;
      case 12: return <TestsList onNavigate={setCurrentPage} />;
      case 13: return <TestForm onNavigate={setCurrentPage} />;
      case 14: return <StepsList onNavigate={setCurrentPage} />;
      case 15: return <StepForm onNavigate={setCurrentPage} />;
      case 16: return <ReportsList onNavigate={setCurrentPage} />;
      default: return <Login onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;