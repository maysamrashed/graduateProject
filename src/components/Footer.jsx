import { Link } from 'react-router-dom'
import styles from "../csss/componentCss/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className= {styles.footerBack}>
        <div className=" d-flex justify-content-between text-center p-5 gap-5">
          <div className='d-flex flex-column gap-2 align-items-center' >
            <h2 className={styles.footerTitle}>DermAI</h2>
            <p className='text-white fw-normal fs-6 lh-lg custom-text' >
              Intelligent Skin Cancer Detection using AI.
              <br />Supporting early detection and improving<br />
              access to dermatological care.</p>
          </div>

          <div className='d-flex flex-column gap-2 align-items-center'>
            <h2 className={styles.footerTitle}>Quick Links</h2>
            <a href="/#about-us" className={styles.link}>About Us</a>
          </div>

          <div className='d-flex flex-column gap-2 align-items-center'>
            <h2 className={styles.footerTitle}>Legal</h2>
            <Link className={`ms-2 ${styles.link}`} to='/privacy'>Privacy Policy</Link>
            <Link className={`ms-2 ${styles.link}`} to="/terms">Terms of Service</Link>
            <Link className={`ms-2 ${styles.link}`} to="/medical-disclaimer">Medical Disclaimer</Link>
          </div>

          <div className='d-flex flex-column gap-2 align-items-center'>
            <h2 className={styles.footerTitle}>Contact</h2>
            <span>Palestine Technical University, Tulkarm</span>

            <span>info@dermai.com</span>

            <span>+970 123 456 789</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className='d-flex flex-column gap-1 align-items-center'>
          <p className='text-white fw-normal fs-6 lh-lg custom-text'>
            Medical Disclaimer: The information provided by 
            DermAI is for educational purposes only and not a 
            substitute for professional medical advice.
          </p>
          <span>© 2025 DermAI</span>
        </div>

      </div>
    </>
  )
}
