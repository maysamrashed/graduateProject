
import heart from "../../assets/iacons/heart.svg";
import styles from "../../csss/pagesCss/public/Home.module.css";


export default function Terms() {
  return (
    <section >


      <div className={`text-center text-white py-5 ${styles.back}`}>
        <img src={heart} alt="Terms" width="50" className="mb-3" />
        <h1 className="fw-bold">Terms of Service</h1>
        <p className="mb-1">
          Please read these terms carefully before using DermAI
        </p>
        <small>Effective Date: November 24, 2025</small>
      </div>

      <div className="container py-5">


        <div className="bg-white border rounded-4 p-4 mb-5">
          <h5 className="fw-semibold mb-2">Agreement Overview</h5>
          <p className="text-muted mb-0">
            By accessing or using DermAI, you agree to be bound by these Terms of
            Service and our Privacy Policy. DermAI provides AI-powered skin
            analysis tools for informational purposes only and is not a
            substitute for professional medical advice.
          </p>
        </div>


        <div className="bg-white border rounded-4 p-4 mb-4">
          <h6 className="fw-semibold">1. Acceptance of Terms</h6>
          <p className="text-muted small mb-0">
            By creating an account or using DermAI services, you confirm that you
            have read and agreed to these terms. Users must be at least 18 years
            old or have parental consent.
          </p>
        </div>

        <div className="bg-white border rounded-4 p-4 mb-4">
          <h6 className="fw-semibold">2. User Responsibilities</h6>
          <p className="text-muted small mb-0">
            You agree to use DermAI responsibly and provide accurate information.
            Medical decisions should always involve a qualified professional.
          </p>
        </div>

        <div className="bg-white border rounded-4 p-4 mb-4">
          <h6 className="fw-semibold">3. Service Limitations</h6>
          <p className="text-muted small mb-0">
            DermAI results may be affected by image quality, skin tone, and rare
            conditions. Accuracy is not guaranteed.
          </p>
        </div>

        <div className="bg-white border rounded-4 p-4 mb-4">
          <h6 className="fw-semibold">4. Intellectual Property</h6>
          <p className="text-muted small mb-0">
            All content, models, and designs are the intellectual property of
            DermAI and may not be reused without permission.
          </p>
        </div>

        <div className="bg-white border rounded-4 p-4 mb-5">
          <h6 className="fw-semibold">5. Limitation of Liability</h6>
          <p className="text-muted small mb-0">
            DermAI is not liable for any damages resulting from reliance on the
            platform or its outputs.
          </p>
        </div>


        <div className="alert alert-danger rounded-4 mb-5">
          <h6 className="fw-semibold">Important Medical Disclaimer</h6>
          <p className="small mb-0">
            DermAI provides educational information only and is NOT intended to
            diagnose, treat, cure, or prevent any disease. Always consult a
            qualified healthcare professional.
          </p>
        </div>



      </div>
    </section>
  );
}
