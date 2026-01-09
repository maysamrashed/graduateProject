import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loder from "../../components/Loder";

export default function VerifyEmail() {
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.get(
          `https://dermai-backend-1yeb.onrender.com/api/auth/verify/${token}`
        );

        navigate("/signin", { state: { verified: true } });
      } catch (err) {
        navigate("/signin", { state: { verified: false } });
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [userId, token, navigate]);

  if (loading) return <Loder />;

  return null;
}
