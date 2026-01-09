import shieldCheck from "../assets/images/shieldCheck.svg"; 
import styles from "../csss/componentCss/Loder.module.css";

export default function Loder() {
  return (
    <div className={styles.dermaiLoader}>
      <div className={styles.loaderContent}>

        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>
            <img
              src={shieldCheck}
              alt="DermAI Loader"
              className={styles.loaderIcon}
            />
          </div>
        </div>

        <h2>Loading DermAI</h2>
        <p>Please wait while we prepare your experience...</p>

        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  );
}

