// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import TodoApp from "./pages/TodoApp";
import DataFetchingApp from "./pages/DataFetchingApp";
import FormValidationApp from "./pages/FormValidation";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/todo-app">Todo App</Link>
            </li>
            <li>
              <Link to="/data-fetching">Data Fetching</Link>
            </li>
            <li>
              <Link to="/form-validation">Form Validation</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/toggle-button">Toggle Button</Link>
            </li>
            <li>
              <Link to="/modal-demo">Modal Demo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/data-fetching" element={<DataFetchingApp />} />
          <Route path="/form-validation" element={<FormValidationApp />} />
          {/* <Route path="/data-fetching" element={<DataFetchingComponent />} />
          <Route path="/form-validation" element={<FormWithValidation />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/toggle-button" element={<ToggleButton />} />
          <Route path="/modal-demo" element={<ModalDemo />} /> */}
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to the React Examples App</h1>
                <p>Select an example from the navigation menu.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
