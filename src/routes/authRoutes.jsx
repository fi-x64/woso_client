// import AdminPage from "../containers/Admin/AdminPage";
import ForgotPassword from "../containers/Auth/ForgotPassword";
import Login from "../containers/Auth/Login";
// import ResetPassword from "../containers/Auth/resetPassword";

const authRoutes = [
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
    layout: null,
  },
  // {
  //   path: "/",
  //   component: AdminPage,
  //   layout: null,
  // },
  // {
  //   path: "/:type",
  //   component: AdminPage,
  //   layout: null,
  // },
  // {
  //   path: "/register",
  //   component: Register,
  //   layout: null,
  // },
  // {
  //   path: "/resetPassword",
  //   component: ResetPassword,
  //   layout: null,
  // },
  // {
  //   path: "/forgotPassword",
  //   component: ForgotPassword,
  //   layout: null,
  // },
];

export default authRoutes;
