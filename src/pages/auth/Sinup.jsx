import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/iacons/close.svg";
import styles from "../../csss/auth/Auth.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";

// Loder component
import Loder from "../../components/Loder";

export default function Register() {
  const navigate = useNavigate();

  //  Local loading
  const [loading, setLoading] = useState(false);

  // ===== Validation Schema =====
  const schema = Yup.object({
    name: Yup.string(),

  email: Yup.string()
    .email("Invalid email")
    .min(5, "Email too short")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[a-z]/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /[A-Z]/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /\d/,
      "Password must contain at least one number"
    )
    .matches(
      /[@#&*]/,
      "Password must contain at least one symbol (@ # & *)"
    ),
  });

  // ===== Formik =====
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: RegisterUser,
  });

  // ===== Register Function =====
  async function RegisterUser() {
    setLoading(true); //  start loading
    try {
      await axios.post(
        "https://dermai-backend-1yeb.onrender.com/api/auth/register",
        formik.values
      );

      toast.success(
        "Account created successfully. Please check your email to verify your account.",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        }
      );

      setTimeout(() => {
        navigate("/signin");
      }, 2000);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed",
        {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        }
      );
    } finally {
      setLoading(false); // stop loading
    }
  }

  // أثناء التسجيل
  if (loading) return <Loder />;

  return (
    <div className={styles.authPage}>

      {/* Overlay */}
      <div
        className={styles.overlay}
        onClick={() => navigate("/")}
      ></div>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className={styles.authCard}>

          {/* Close Button */}
          <button
            className={styles.closeBtn}
            onClick={() => navigate("/")}
            disabled={loading}
          >
            <img src={close} width="30" alt="close" />
          </button>

          {/* ===== Left Side ===== */}
          <div className={styles.authLeft}>
            <h1>Welcome To DermAI!</h1>
            <p>
              Precision. Intelligence. Early Detection.
              <br />
              A smarter path to skin health begins here.
            </p>

            <Link to="/signin" className={styles.btnLeft}>
              SIGN IN
            </Link>
          </div>

          {/* ===== Right Side ===== */}
          <div className={styles.authRight}>
            <h1>Create Account</h1>

            <form className="mt-4" onSubmit={formik.handleSubmit}>

              {/* Name */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  disabled={loading}
                />
                <label>User Name</label>
              </div>

              {/* Email */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  disabled={loading}
                />
                <label>User Email</label>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger small">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  disabled={loading}
                />
                <label>User Password</label>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger small">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`d-flex justify-content-flex-end align-items-center ${styles.btnRight}`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "SIGN UP"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
