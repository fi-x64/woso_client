import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import routes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import React from "react";
import HomeHeader from "./containers/HomePage/HomeHeader";
import HomeFooter from "./containers/HomePage/HomeFooter";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import BackToTopButton from "./components/atom/BackToTopButton/BackToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "./actions/auth";
import AdminHeader from "./containers/Admin/AdminHeader";
import { getApp } from "./routes/helpers";
import "./App.scss";
// import AuthVerify from './utils/AuthVerify'

const queryClient = new QueryClient();

function App() {
  const { isAdmin, routes } = getApp();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routes.map((r, index) => {
              let Component = r.component;
              let Layout = DefaultLayout;
              if (r.layout) Layout = r.layout;
              if (r.layout === null) Layout = React.Fragment;
              let Content = (
                <Layout>
                  {r.permission || isAdmin ? (
                    <div>
                      <AdminHeader />
                      <div className="mx-auto">
                        <Component></Component>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <HomeHeader />
                        <div className="home-component">
                          <Component></Component>
                        </div>
                        <HomeFooter />
                      </div>
                    </>
                  )}
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  <ToastContainer />
                  <BackToTopButton />
                </Layout>
              );
              return <Route key={index} path={r.path} element={Content} />;
            })}
          </Routes>
          <ToastContainer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
