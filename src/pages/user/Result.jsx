import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../csss/pagesCss/user/Result.module.css";

import correct from "../../assets/results/correct.svg";
import load from "../../assets/results/load.svg";
import locationMap from "../../assets/results/locationMap.svg";
import view from "../../assets/results/view.svg";
import ddangers from "../../assets/results/ddangers.svg";

import GradCam from "../../components/userModal/GradCam";
import FindClinics from "../../components/userModal/FindClinics";
import axios from "../../api/axios.js"
export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showClinics, setShowClinics] = useState(false);
 

  useEffect(() => {
    if (!state?.result) {
      navigate("/upload-image");
    }
  }, [state, navigate]);

  if (!state?.result) return null;

  const { result, image } = state;
  const { label, confidence, heatmapImage } = result.report;
   const analysisId = result.analysisId;

  const isBenign = label?.toLowerCase() === "benign";
 
  const handleDownload = async () => {
  try {
    const response = await axios.get(
      `/api/reports/${analysisId}/pdf`,
      {
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `DermAI_Report_${analysisId}.pdf`
    );

    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error(err);
    alert("Failed to download report");
  }
};


  

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Analysis Result</h2>
        <p className={styles.subtitle}>
          AI-Powered Skin Lesion Classification
        </p>

        {/* Uploaded Image */}
        <div className={styles.imageWrapper}>
          <img src={image} alt="Skin cancer image" />
        </div>
        <span className={styles.imageLabel}>Skin Lesion Image</span>

        {/* Label */}
        <div
          className={`${styles.labelBar} ${
            isBenign ? styles.benign : styles.malignant
          }`}
        >
          <img src={isBenign ? correct : ddangers} width="20px" />
          {label}
        </div>

        {/* Confidence */}
        <div className={styles.confidence}>
          {confidence.toFixed(1)}%
        </div>

        {/* Result Description */}
        <div
          className={`${styles.resultBox} ${
            isBenign ? styles.greenBox : styles.redBox
          }`}
        >
          {isBenign
            ? "Result: High Confidence Benign. Continued self-monitoring is recommended."
            : "Result: Potentially Malignant. Please consult a dermatologist."}
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            className={styles.purple}
            onClick={() => setShowHeatmap(true)}
          >
            <img src={view} width="20px" />
            View Heatmap
          </button>

          <button className={styles.orange} onClick={handleDownload}>
            <img src={load} width="20px" />
            Download Report
          </button>

          <button
            className={styles.blue}
            onClick={() => setShowClinics(true)}
          >
            <img src={locationMap} width="20px" />
            Find Clinics
          </button>
        </div>

        {/* Heatmap Modal */}
        {showHeatmap && (
          <GradCam
            heatmapUrl={heatmapImage}
            onClose={() => setShowHeatmap(false)}
          />
        )}

        {/* Clinics Modal */}
        {showClinics && (
          <FindClinics
            onClose={() => setShowClinics(false)}
          />
        )}

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          This AI analysis is for screening purposes only and does not replace
          professional medical diagnosis.
        </p>
      </div>
    </div>
  );
}
