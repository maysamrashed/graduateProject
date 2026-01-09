import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/images/logo.svg";
import logoutt from "../assets/images/logoutt.svg";
import styles from "../csss/componentCss/Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();            // يمسح التوكن + المستخدم
    navigate("/signin"); // يرجّع على تسجيل الدخول
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">

        {/* ===== Logo ===== */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to={token ? "/upload-image" : "/"}
        >
          <img
            src={logo}
            alt="DermAI Logo"
            width="40"
            height="40"
            className="img-fluid"
          />
          <span className={`ms-2 ${styles.brandText}`}>DermAI</span>
        </Link>

        {/* ===== Toggle (Mobile) ===== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ===== Links ===== */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {!token ? (
            /* ---------- NOT LOGGED IN ---------- */
            <div className="ms-auto d-flex align-items-center gap-2">
              <Link
                to="/signin"
                className={`px-4 ${styles.btnLogin}`}
              >
                SIGN IN
              </Link>

              <Link
                to="/signup"
                className={`px-4 ${styles.btnSignup}`}
              >
                SIGN UP
              </Link>
            </div>
          ) : (
            /* ---------- LOGGED IN ---------- */
            <ul className="navbar-nav ms-auto align-items-center gap-3">

              <li className="nav-item">
                <NavLink
                  to="/upload-image"
                  className={styles.UploadImage}
                >
                  Upload Image
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn p-0 border-0 bg-transparent"
                  title="Logout"
                >
                  <img
                    src={logoutt}
                    alt="Logout"
                    width="30"
                    height="30"
                    className="img-fluid"
                  />
                </button>
              </li>

            </ul>
          )}

        </div>
      </div>
    </nav>
  );
}
