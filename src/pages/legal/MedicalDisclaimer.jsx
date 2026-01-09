import danger from '../../assets/medical/danger.svg'
import dangerCircle from '../../assets/medical/dangerCircle.svg'
import danger1 from '../../assets/medical/danger1.svg'
import call from '../../assets/medical/call.svg'
import dangerRed from '../../assets/medical/dangerRed.svg'
import home from '../../assets/medical/home.svg'
import email from '../../assets/medical/email.svg'
import styles from "../../csss/pagesCss/public/Home.module.css";
export default function MedicalDisclaimer() {
  return (
    <section >


      <div className={`text-center  py-5 ${styles.back}`}>
        <img src={danger} width="50" className="mb-3" alt='Medical Disclaimer' />
        <h1 className="fw-bold">Medical Disclaimer</h1>
        <h6>Important Information About Using DermAI</h6>
        <p className="small mt-2">
          Please read carefully before using our service.
        </p>
      </div>

      <div className="container py-5">

        <div className={`p-4 rounded-4  mb-5 ${styles.back}`}>
          <div className="d-flex gap-3">
            <img src={dangerCircle} width="40" alt='CRITICAL' />
            <div>
              <h5 className="fw-bold">CRITICAL: Read Before Using DermAI</h5>
              <p className="mb-0 small">
                DermAI is NOT a medical device and does NOT diagnose or treat disease.
                Always consult a qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>


        <div className="row g-4 mb-5">

          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <img src={danger1} width="40" alt='Not a Medical Diagnosis' className="mb-3" />
              <h6>Not a Medical Diagnosis</h6>
              <p className="text-muted small">
                DermAI provides assisted insights only.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <img src={call} width="40" className="mb-3" alt='Consult Healthcare Professionals' />
              <h6>Consult Healthcare Professionals</h6>
              <p className="text-muted small">
                Always seek professional medical advice.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded-4 h-100">
              <img src={dangerRed} width="40" className="mb-3" alt='AI Limitations' />
              <h6>AI Limitations</h6>
              <p className="text-muted small">
                AI results may be inaccurate.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <img src={home} width="40" className="mb-3" alt='Not for Emergencies' />
              <h6>Not for Emergencies</h6>
              <p className="text-muted small">
                DermAI is not designed for emergency use.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <img src={email} width="40" className="mb-3" alt='No Doctor-Patient Relationship' />
              <h6>No Doctor-Patient Relationship</h6>
              <p className="text-muted small">
                No professional relationship is established.
              </p>
            </div>
          </div>

        </div>


        <div className="p-4 border rounded-4 mb-5">
          <h5>About AI Accuracy</h5>
          <ul className="text-muted small">
            <li>Image quality</li>
            <li>Lesion characteristics</li>
            <li>Skin tone variations</li>
            <li>Rare conditions</li>
          </ul>
        </div>


        <div className="mb-5">
          <h5>When to Seek Medical Attention</h5>
          <ul className="text-muted small">
            <li>Bleeding or non-healing lesions</li>
            <li>Rapid changes in size or color</li>
            <li>Persistent pain or itching</li>
          </ul>
        </div>


        <div className="p-4 border rounded-4 mb-5 d-flex flex-column ">
          <h5>Legal Statement</h5>
          <ul className="text-muted small">
            <li>Acceptance of terms</li>
            <li>Limitation of liability</li>
            <li>No warranties</li>
          </ul>
        </div>


        <div className={`p-4 rounded-4 text-white ${styles.back}`}>
          <h5>In Case of Emergency</h5>
          <ul className="small">
            <li>Palestine: <strong>101</strong></li>
            <li>International: <strong>112</strong></li>
            <li>USA: <strong>911</strong></li>
          </ul>
        </div>

      </div>
    </section>

  );
}
