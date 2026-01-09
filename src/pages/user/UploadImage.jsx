import styles from "../../csss/pagesCss/user/UploadImage.module.css";
import alertIcon from "../../assets/iacons/alert.svg";
import uploadIcon from "../../assets/iacons/upload.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../api/axios.js";
import { toast } from "react-toastify";

export default function UploadImage() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  //  إضافة loading لتحسين UX أثناء التحليل
  const [loading, setLoading] = useState(false);

  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  // فتح الكاميرا
  const handleOpenCamera = () => {
    cameraInputRef.current.click();
  };

  // فتح المعرض
  const handleOpenGallery = () => {
    galleryInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    //  تأكد إنو المستخدم اختار ملف
    if (!file) return;

    //  السماح فقط بالصور
    if (!file.type.startsWith("image/")) {
      toast.warning("Please select a valid image file");
      return;
    }

    setImage(file);
  };

  const handleAnalyze = async () => {
    // حماية: لا تسمح بالتحليل بدون صورة
    if (!image) {
      toast.warning("Please select an image first");
      return;
    }

    try {
      setLoading(true); // بدء التحليل

      const formData = new FormData();
      formData.append("image", image);

      //Axios يضبط Content-Type تلقائيًا مع FormData
      const { data } = await api.post(
        "/api/analysis/analyze",
        formData
      );

      // الانتقال لصفحة النتائج مع تمرير البيانات
      navigate("/result", {
        state: {
          result: data,
          image: URL.createObjectURL(image),
        },
      });

    } catch (error) {
      console.error(error);

      let message = "Analysis failed. Please try again.";

      // قراءة رسالة الخطأ من الباك إذا وُجدت
      if (error?.response?.data?.message) {
        message = error.response.data.message;
      }

      toast.error(message);
    } finally {
      setLoading(false); // إيقاف التحميل بأي حالة
    }
  };

  return (
    <div className={styles.page}>
      
      <div className={styles.modal}>
        {/* ===== Header ===== */}
        <div className={styles.header}>
          <img src={uploadIcon} alt="upload" width="50" />
          <h2>Upload Skin Lesion Image</h2>
        </div>

        {/* ===== Tips ===== */}
        <div className={styles.tips}>
          <img src={alertIcon} width="50" alt="tips" />
          <div>
            <h4>Tips for Best Results:</h4>
            <ul>
              <li>Use clear, well-lit photos</li>
              <li>Ensure the lesion is in focus</li>
              <li>Avoid blurry or low-quality images</li>
              <li>Remove any jewelry or obstructions</li>
            </ul>
          </div>
        </div>

        {/* ===== Upload Box ===== */}
        <div className={styles.uploadBox}>
          {!image ? (
            <>
              <img
                src={uploadIcon}
                alt="upload"
                width="50"
                className={styles.uploadIcon}
              />
              <h3>Drag your image here</h3>
              <p>or click to browse</p>
            </>
          ) : (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className={styles.previewImage}
            />
          )}

          {/* اختيار / تغيير الصورة */}
          <button
            className={styles.chooseBtn}
            onClick={handleOpenGallery}
          >
            {image ? "Change Image" : "Choose File"}
          </button>

          <span>Supported: JPG, PNG (Max 10MB)</span>

          {/* زر التحليل */}
          {image && (
            <button
              className={styles.chooseBtn}
              onClick={handleAnalyze}
              disabled={loading} // تعطيل أثناء التحليل
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
          )}
        </div>

        {/* ===== Bottom Buttons ===== */}
        <div className={styles.bottomBtns}>
          <button onClick={handleOpenCamera}>Take Photo</button>
          <button onClick={handleOpenGallery}>From Gallery</button>
        </div>

        {/* ===== Hidden Inputs ===== */}
        {/* كاميرا */}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          hidden
          onChange={handleFileChange}
        />

        {/* معرض */}
        <input
          type="file"
          accept="image/*"
          ref={galleryInputRef}
          hidden
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
