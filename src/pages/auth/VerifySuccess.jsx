import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loder from "../../components/Loder";

export default function VerifySuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Email verified successfully");
    const t = setTimeout(() => navigate("/signin"), 1500);
    return () => clearTimeout(t);
  }, [navigate]);

  return <Loder />;
}
