import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import styles from "../../csss/auth/Auth.module.css";
import reset from "../../csss/auth/Reset.module.css";
import close from "../../assets/iacons/close.svg";
import resetpassword from "../../assets/iacons/resetpassword.png";
import Loder from "../../components/Loder";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();

  const schema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[@#&*]/, "Must contain at least one symbol (@ # & *)"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

 
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: handleReset,
  });

 
  async function handleReset(values, { setSubmitting }) {
    try {
      await axios.post(
        `https://dermai-backend-1yeb.onrender.com/api/auth/reset-password/${token}`,
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
        }
      );

      toast.success("Password updated successfully. Please sign in.");
      navigate("/signin");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid or expired link"
      );
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
          <p className={reset.resetText}>
            Please kindly set your new password.
          </p>

          <form onSubmit={formik.handleSubmit} className="w-100">

            {/* Password */}
            <div className="mb-3">
              <label className={reset.resetLabel}>New password</label>
              <input
                type="password"
                className={reset.resetInput}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger small">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className={reset.resetLabel}>Re-enter password</label>
              <input
                type="password"
                className={reset.resetInput}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-danger small">
                    {formik.errors.confirmPassword}
                  </div>
                )}
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
