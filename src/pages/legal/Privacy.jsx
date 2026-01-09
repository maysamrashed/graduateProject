import { useState } from "react";
import styles from "../../csss/pagesCss/public/Home.module.css";

function PrivacyItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-4 p-4 mb-3 bg-white">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <h6 className="mb-0 fw-semibold">{title}</h6>
        <span className="fs-5">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="mt-3 text-muted lh-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Privacy() {
  return (
    <>
     
      <section className={`py-5 text-white ${styles.back}`}>
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Your Privacy Is Our Priority</h1>
          <p className="mb-0">
            Learn how we collect, protect, and respect your personal and medical data.
          </p>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h6 className="fw-semibold mb-3">Contents</h6>
                <ul className="list-unstyled text-muted lh-lg">
                  <li>Information We Collect</li>
                  <li>How We Use Your Information</li>
                  <li>Data Protection & Security</li>
                  <li>Data Sharing & Disclosure</li>
                  <li>Your Rights & Choices</li>
                  <li>Data Retention</li>
                </ul>
              </div>
            </div>

           
            <div className="col-md-8">

              <PrivacyItem title="Information We Collect">
                <ul>
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Medical images uploaded for analysis</li>
                  <li>Diagnostic results and AI-generated reports</li>
                  <li>Device information and browser data</li>
                  <li>Usage data and interaction patterns</li>
                </ul>
              </PrivacyItem>

              <PrivacyItem title="How We Use Your Information">
                <ul>
                  <li>Provide AI-powered skin lesion analysis</li>
                  <li>Improve diagnostic accuracy</li>
                  <li>Generate medical reports</li>
                  <li>Respond to support requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </PrivacyItem>

              <PrivacyItem title="Data Protection & Security">
                <ul>
                  <li>All data is encrypted using SSL/TLS</li>
                  <li>Medical data stored in secure databases</li>
                  <li>Restricted access to authorized personnel</li>
                  <li>Compliance with GDPR & HIPAA</li>
                </ul>
              </PrivacyItem>

              <PrivacyItem title="Data Sharing & Disclosure">
                <ul>
                  <li>We do NOT sell your data</li>
                  <li>Shared only with explicit user consent</li>
                  <li>May be disclosed if legally required</li>
                </ul>
              </PrivacyItem>

              <PrivacyItem title="Your Rights & Choices">
                <ul>
                  <li>Access your personal data</li>
                  <li>Update or correct information</li>
                  <li>Delete your account</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </PrivacyItem>

              <PrivacyItem title="Data Retention">
                <ul>
                  <li>Medical data retained for 12 months</li>
                  <li>Account data retained until deletion request</li>
                  <li>Backup copies deleted within 90 days</li>
                </ul>
              </PrivacyItem>

            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h6 className="fw-semibold mb-3">Questions About Privacy?</h6>
          <p className="text-muted mb-1">📧 privacy@dermai.com</p>
          <p className="text-muted mb-1">📞 +970-XXX-XXXX</p>
          <p className="text-muted">📍 Palestine Technical University, Tulkarm</p>
        </div>
      </section>
    </>
  );
}
