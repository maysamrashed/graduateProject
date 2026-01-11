import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifySuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const status = params.get("status");

    if (status === "success") {
      toast.success(" Your account has been verified successfully");
    } else {
      toast.error("Verification link is invalid or expired");
    }

    setTimeout(() => {
      navigate("/signin");
    }, 3000);
  }, [params, navigate]);

  return null;
}
