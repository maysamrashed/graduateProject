import styles from "../../csss/pagesCss/public/Home.module.css";
import dermai from "../../assets/images/dermai.png";
import uploadLogo from "../../assets/iacons/uploadLogo.svg";
import robot from "../../assets/iacons/robot.svg";
import result from "../../assets/iacons/result.svg";
import heart from "../../assets/iacons/heart.svg";
import files from "../../assets/iacons/files.svg";
import lockPerson from "../../assets/iacons/lockPerson.svg";
import care from "../../assets/iacons/care.svg";

export default function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section>
        <div className={`d-flex justify-content-between align-items-center gap-2 ${styles.back}`}>
          <div className="container d-flex flex-column justify-content-between align-items-center gap-1">
            <h3 className="fs-1">Welcome to DermAI</h3>
            <p className="fs-5">Intelligent Skin Cancer Detection Using AI</p>
            <p className="text-white fw-normal fs-6 lh-lg custom-text">
              Advanced deep learning technology for early skin cancer detection.
              <span className="d-block text-center">
                Upload your skin image and get instant AI-powered analysis.
              </span>
            </p>
          </div>
          <div className="container d-flex justify-content-between align-items-center">
            <img src={dermai} alt="DermAI" />
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-semibold mb-5">
            How DermAI Works
          </h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="text-center p-4 border rounded-4 h-100 d-flex flex-column align-items-center gap-2">
                <img src={uploadLogo} alt="Upload Image" width="50" />
                <h5 className="fw-semibold">Upload Image</h5>
                <p className="text-muted mb-0">
                  Take or upload a clear photo of the
                  <br />
                  skin lesion using your device
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 border rounded-4 h-100 d-flex flex-column align-items-center gap-2">
                <img src={robot} alt="AI Analysis" width="50" />
                <h5 className="fw-semibold">AI Analysis</h5>
                <p className="text-muted mb-0">
                  Our CNN model analyzes the image and
                  <br />
                  provides classification
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 border rounded-4 h-100 d-flex flex-column align-items-center gap-2">
                <img src={result} alt="Get Results" width="50" />
                <h5 className="fw-semibold">Get Results</h5>
                <p className="text-muted mb-0">
                  Receive detailed report with
                  <br />
                  clinic recommendations if needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about-us" className="py-5 bg-white">
        <div className="container">
          <div className="p-md-5">
            <h3 className="fw-semibold mb-4">About DermAI</h3>

            <p className="text-muted lh-lg mb-3">
              Skin cancer is one of the most common cancers worldwide, and early
              detection plays a critical role in saving lives. DermAI was created
              to make skin health assessments more accessible, reliable, and transparent.
            </p>

            <p className="text-muted lh-lg mb-3">
              DermAI uses advanced deep learning models trained on thousands of validated
              dermoscopic images to provide AI-based skin lesion analysis. Instead of
              giving you just a result, we also show you how the model interprets your
              image through Grad-CAM heatmaps.
            </p>

            <p className="text-muted lh-lg mb-0 fst-italic">
              DermAI is designed to assist, not replace, dermatologists.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center g-4">
            <div className={`col-md-4 ${styles.aiTesting}`}>
              <span className="d-block fw-bold fs-2">94%+</span>
              <span className="fw-semibold">Model Accuracy</span>
            </div>

            <div className={`col-md-4 ${styles.aiTesting}`}>
              <span className="d-block fw-bold fs-2">32K+</span>
              <span className="fw-semibold">Training Images</span>
            </div>

            <div className={`col-md-4 ${styles.aiTesting}`}>
              <span className="d-block fw-bold fs-2">&lt;5s</span>
              <span className="fw-semibold">Analysis Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-semibold mb-5">
            Key Benefits of DermAI
          </h3>

          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div className="h-100 text-center p-4 border rounded-4">
                <img src={heart} alt="Early Detection" width="50" className="mb-3" />
                <h5 className="fw-semibold mb-2">Early Detection</h5>
                <p className="text-muted mb-0">
                  Our advanced AI can identify potential issues earlier.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="h-100 text-center p-4 border rounded-4">
                <img src={files} alt="User-Friendly Interface" width="50" className="mb-3" />
                <h5 className="fw-semibold mb-2">User-Friendly Interface</h5>
                <p className="text-muted mb-0">
                  Simple and intuitive design for everyone.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="h-100 text-center p-4 border rounded-4">
                <img src={lockPerson} alt="Secure Data Handling" width="50" className="mb-3" />
                <h5 className="fw-semibold mb-2">Secure Data Handling</h5>
                <p className="text-muted mb-0">
                  Your data is encrypted and handled securely.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="h-100 text-center p-4 border rounded-4">
                <img src={care} alt="Expert-Backed Insights" width="50" className="mb-3" />
                <h5 className="fw-semibold mb-2">Expert-Backed Insights</h5>
                <p className="text-muted mb-0">
                  Developed with dermatology expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
