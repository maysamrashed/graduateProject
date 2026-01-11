import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loder from "../../components/Loder";

export default function VerifyFailed() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Verification link is invalid or expired ❌");
    const timer = setTimeout(() => {
      navigate("/signin");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <Loder />;
}
