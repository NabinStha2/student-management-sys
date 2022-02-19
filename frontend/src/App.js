import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddStudentScreen from "./Screens/AddStudentScreen";
import Dashboard from "./Screens/Dashboard";
import StudentsRecordScreen from "./Screens/StudentsRecord";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const faculties = [
  { value: "BCT", name: "BCT" },
  { value: "BEI", name: "BEI" },
  { value: "BCE", name: "BCE" },
  { value: "BAME", name: "BAME" },
  { value: "BME", name: "BME" },
  { value: "BEL", name: "BEL" },
];
export const semesters = [
  { value: "1 sem", name: "1 sem" },
  { value: "2 sem", name: "2 sem" },
  { value: "3 sem", name: "3 sem" },
  { value: "4 sem", name: "4 sem" },
  { value: "5 sem", name: "5 sem" },
  { value: "6 sem", name: "6 sem" },
  { value: "7 sem", name: "7 sem" },
  { value: "8 sem", name: "8 sem" },
];
export const colleges = [
  { value: "PAS", name: "PAS" },
  { value: "PUL", name: "PUL" },
  { value: "ERC", name: "ERC" },
  { value: "THP", name: "THP" },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manageStudents" element={<StudentsRecordScreen />} />
            <Route path="/addStudent" element={<AddStudentScreen />} />
            <Route path="/addStudent/edit" element={<AddStudentScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
