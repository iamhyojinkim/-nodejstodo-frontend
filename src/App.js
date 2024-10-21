import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoLists from "./Components/TodoLists";
import LoginPage from "./Components/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <TodoLists />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
