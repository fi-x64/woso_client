import HomePage from "../containers/HomePage/HomePage";
import authRoutes from "./authRoutes";
import batchRoutes from "./batchRoutes";
// import AdminPage from "../containers/Admin/AdminPage";
import PageNotFound from "../containers/PageNotFound";

export const appRoutes = [
  ...batchRoutes,
  { path: "/", component: HomePage, layout: null },
  { path: "*", component: PageNotFound, layout: null },
];

export const adminRoutes = [
  ...authRoutes,
  // { path: "/", component: AdminPage, layout: null },
  { path: "*", component: PageNotFound, layout: null },
];
