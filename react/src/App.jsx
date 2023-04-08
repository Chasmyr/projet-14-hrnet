import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateEmployee from "./pages/createEmployee"
import EmployeeList from "./pages/employeeList"
import ErrorPage from "./pages/error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
