import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loder from "../components/Loder";

export default function ProtectedRoute() {
  const { token, loading } = useContext(AuthContext);

  //  أثناء ما نتحقق من التوكن (خصوصًا بعد refresh)
  if (loading) {
    return <Loder />;
  }

  //  إذا ما في توكن → رجّع على تسجيل الدخول
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  //  إذا في توكن → اسمح بالوصول
  return <Outlet />;
}
