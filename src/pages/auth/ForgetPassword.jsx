import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "../../csss/auth/auth.module.css";
import { useNavigate } from "react-router-dom";
import close from "../../assets/iacons/close.svg";
import Loder from "../../components/Loder";

export default function ForgetPassword() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleForgetPassword,
  });

  async function handleForgetPassword(values, { setSubmitting }) {
    try {
      await axios.post(
        "https://dermai-backend-1yeb.onrender.com/api/auth/forgot-password",
        values
      );

      toast.success(
        "If this email exists, you will receive further instructions via email.",
        { autoClose: 3000 }
      );

      formik.resetForm();
    } catch (error) {
      toast.error(
        "Something went wrong. Please try again later.",
        { autoClose: 3000 }
      );
    } finally {
      setSubmitting(false);
    }
  }

 
  if (formik.isSubmitting) return <Loder />;

  return (
    <div className={styles.authPage}>
      <div className={styles.overlay} onClick={() => navigate("/")}></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className={styles.authCardforgetPassword}>
          
          <button
            className={styles.closeBtn}
            onClick={() => navigate("/")}
          >
            <img src={close} width="30px" alt="close" />
          </button>

          <div className={styles.authRight}>
            <h1>Forgot Password?</h1>

            <p className="text-center">
              No worries! Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className={`form-floating mb-4 ${styles.color}`}>
                <input
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  id="email"
                  required
                />
                <label htmlFor="email" className={styles.color}>
                  Enter your email
                </label>
              </div>

              <button
                type="submit"
                className={styles.btnLeft}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
