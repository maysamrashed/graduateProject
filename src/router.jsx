import { createBrowserRouter } from "react-router-dom";

// Layout
import Root from "./components/Root";
import ProtectedRoute from "./components/ProtectedRoute";

// Public
import Home from "./pages/public/Home";
import NotFound from "./pages/public/NotFound";

// Auth
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Sinup";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyCode from "./pages/auth/VerifyCode.jsx";


// Legal
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import MedicalDisclaimer from "./pages/legal/MedicalDisclaimer";

// User
import UploadImage from "./pages/user/UploadImage";
import Result from "./pages/user/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [

      /* Home */
      { index: true, element: <Home /> },

      /* Auth */
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/reset-password/:token", element: <ResetPassword /> },
      {
        path: "/verify",
        element: <VerifyCode />,
      },
    
      /* Legal */
      { path: "/medical-disclaimer", element: <MedicalDisclaimer /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },

      /* Protected User Routes */
      {
        element: <ProtectedRoute />,
        children: [
          /*ليش بدون / عشان هي outlet لو حطيت / الروتر بعتبرها روت مستقلو ما بمر على اللروتيكتيد روت  */
          { path: "upload-image", element: <UploadImage /> },
          { path: "result", element: <Result /> },
        ],
      },

      /* 404 */
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
