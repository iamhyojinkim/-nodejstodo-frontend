import { useAuthContext } from "./Context/Context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const token = sessionStorage.getItem("token");
  if (!user && !token) {
    return <Navigate to="/" replace />;
  }
  return children;
}
