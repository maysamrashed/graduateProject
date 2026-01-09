import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../csss/auth/Auth.module.css";
import reset from "../../csss/auth/Reset.module.css";
import close from "../../assets/iacons/close.svg";
import resetpassword from "../../assets/iacons/resetPassword.png";
import Loder from "../../components/Loder";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { userId, token } = useParams();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleReset,
  });

  async function handleReset(values, { setSubmitting }) {
    try {
    if (values.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      setSubmitting(false);
      return;
    }

    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match");
      setSubmitting(false);
      return;
    }

    await axios.post(
      `https://dermai-backend-1yeb.onrender.com/api/auth/reset-password/${token}`,
      { password: values.password }
    );

    toast.success("Password updated successfully. Please sign in.");
    navigate("/signin");

  } catch (error) {
    toast.error("Invalid or expired link");
  } finally {
    setSubmitting(false);
  }
  }


  if (formik.isSubmitting) return <Loder />;

  return (
    <div className={styles.authPage}>
      <div className={styles.overlay} onClick={() => navigate("/")}></div>

      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className={reset.resetCard}>

          <button className={styles.closeBtn} onClick={() => navigate("/")}>
            <img src={close} width="30" alt="close" />
          </button>

          <div className="text-center mb-3">
            <img src={resetpassword} alt="reset" className={reset.resetImage} />
          </div>

          <h1 className={reset.resetTitle}>Reset password</h1>
          <p className={reset.resetText}>Please kindly set your new password.</p>

          <form onSubmit={formik.handleSubmit} className="w-100">
            <div className="mb-3">
              <label className={reset.resetLabel}>New password</label>
              <input
                type="password"
                className={reset.resetInput}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className={reset.resetLabel}>Re-enter password</label>
              <input
                type="password"
                className={reset.resetInput}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={reset.resetBtn}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Saving..." : "Reset Password"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
