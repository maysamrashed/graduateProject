import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/iacons/close.svg";
import styles from "../../csss/auth/Auth.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loder from "../../components/Loder";
export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginUser,
  });

  async function LoginUser() {
  setLoading(true); 

  try {
    const { data } = await axios.post(
      "https://dermai-backend-1yeb.onrender.com/api/auth/login",
      formik.values
    );

    // تسجيل الدخول
    login(data.token);
    navigate("/upload-image");

  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Invalid email or password";

    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
    });
  } finally {
    setLoading(false); // بدون fainaly بضل شغال ما بوقف/ يوقف اللودر بكل الحالات
  }
}

if (loading) return <Loder />;

  return (
    <>
      <div className={styles.authPage}>
        <div className={styles.overlay} onClick={() => navigate("/")}></div>

        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className={styles.authCard}>

            {/* زر الإغلاق */}
            <button
              className={styles.closeBtn}
              onClick={() => navigate("/")}
            >
              <img src={close} width="30px" alt="close" />
            </button>

            {/* ===== Right Side (Form) ===== */}
            <div className={styles.authRight}>
              <h1>Sign In</h1>

              <form className="mt-4" onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    name="email"
                    value={formik.values.email}
                    id="email"
                  />
                  <label htmlFor="email">User Email</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    name="password"
                    value={formik.values.password}
                    id="password"
                  />
                  <label htmlFor="password">User Password</label>
                </div>

                <Link to="/forget-password" className={styles.link}>
                  Forgot Your Password?
                </Link>

                <button
                  type="submit"
                  className={`d-flex justify-content-flex-end align-items-center ${styles.btnRight}`}
                >
                  SIGN IN
                </button>
              </form>
            </div>

            {/* ===== Left Side ===== */}
            <div className={styles.authLeft}>
              <h1>Welcome To DermAI!</h1>
              <p>
                Access your dashboard, view your reports,<br />
                and continue your DermAI journey.
              </p>

              <Link to="/signup" className={styles.btnLeft}>
                SIGN UP
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
