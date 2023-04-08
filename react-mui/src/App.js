import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import EmployeeList from "./pages/employeeList/EmployeeList";
import Error from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
