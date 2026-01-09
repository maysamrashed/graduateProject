import { useNavigate } from "react-router-dom";
import styles from "../../csss/pagesCss/public/NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.code}>404</div>

        <h1 className={styles.title}>Page Not Found</h1>

        <p className={styles.text}>
          Oops! The page you're looking for seems to have wandered off.
          Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        {/* Popular Pages */}
        <div className={styles.popular}>
          <h3>Popular Pages</h3>

          <div className={styles.grid}>
            <button onClick={() => navigate("/upload-image")}>
              Upload Image
            </button>

            <button onClick={() => navigate("/signin")}>
              Sign In
            </button>

            <button onClick={() => navigate("/signup")}>
              Sign Up
            </button>

            <button onClick={() => navigate("/privacy")}>
              Privacy Policy
            </button>
          </div>
        </div>

        <p className={styles.support}>
          Still need help? <span>Contact our support team</span>
        </p>

        <span className={styles.brand}>DermAI</span>

      </div>
    </div>
  );
}
