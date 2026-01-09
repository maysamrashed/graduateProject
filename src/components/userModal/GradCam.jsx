import close from "../../assets/iacons/close.svg";
import viewGrad from "../../assets/results/viewGrad.svg"
import styles from "../../csss/componentCss/GradCam.module.css";

export default function GradCam({ heatmapUrl, onClose }) {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={onClose}>
          <img src={close} width="30px" alt="close" />
        </button>
        <div className={styles.modalTitle}>
          <img src={viewGrad} width="30px" alt="view-Grad-Cam" />
          <h2 className={styles.modalTitle}>Grad-CAM</h2>
        </div>
        <div className={styles.gradCam}>


          <div className={styles.infoBox}>
            <h4>Understanding Grad-CAM Heatmap</h4>
            <p>
              The Gradient-weighted Class Activation Mapping (Grad-CAM) highlights the regions in your image
            </p>
            <p>
              that influenced our AI's decision. Warmer colors (red, orange) indicate areas the model focused on
            </p>
            <p>
              most, while cooler colors (blue, green) show less significant regions. 
            </p>
          </div>

          <img
            src={heatmapUrl}
            alt="Grad-CAM Heatmap"
            className={styles.gradcamImage}
          />

          
        </div>
        <p className={styles.legend}>
            Red zones = High attention areas | Blue zones = Low attention areas
          </p>
        <div className={styles.disclaimer}>
          This AI analysis is for screening purposes only and does not replace
          professional medical diagnosis.
        </div>


      </div>
    </div>
  );

}
