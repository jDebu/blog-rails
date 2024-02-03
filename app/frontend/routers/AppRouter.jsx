import React from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Header } from "../components/ui/Header"
import { PublicRoute } from "./PublicRoute";
import "../assets/stylesheets/application.scss"
import HomeRoutes from "./HomeRouters"
import Profile from "../assets/images/profile.svg"
import Location from "../assets/icons/location.svg"
import Github from "../assets/icons/github.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import { Avatar } from "@mui/material"
import { Container } from "../components/Container"
import { LoginPage } from '../pages/admin/LoginPage'
import { useAuth } from "../auth/Auth";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoutes } from "./AdminRoutes";

const AppRouterInternal = () => {
  const location = useLocation()
  const isAdminRoute = /^\/admin(?:\/|$)/.test(location.pathname);
  const { admin } = useAuth() || {}

  return (
    <div>
      <Header />
      <div className="block">
        <div className="flex justify-evenly">
          <main className="mt-4 flex-auto">
            <Container className="px-5 md:px-20 flex items-center">
              <div className="profile-header py-3">
                <h1 className="font-black">José Delgado</h1>
              </div>
            </Container>
            <Routes>
              <Route
                path="/admin"
                element={
                  <PublicRoute isAuthenticated={admin.logged} redirect="/admin/home">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/admin/*"
                element={
                  <PrivateRoute isAuthenticated={admin?.logged} redirect="/admin">
                    <AdminRoutes />
                  </PrivateRoute>
                }
              />
              <Route
                path="/*"
                element={
                  <PublicRoute redirect={"/"}>
                    <HomeRoutes />
                  </PublicRoute>
                }
              />
            </Routes>
          </main>
          {!isAdminRoute && (<aside className="mt-4 ml-2">
            <div>
              <div className="profile m-auto">
                <Avatar
                  alt="José Delgado"
                  src={Profile}
                  sx={{ width: 128, height: 128 }}
                />
              </div>
              <div className="resume mt-4">
                <h1 className="font-black">José Delgado</h1>
                <p>Software Developer</p>
                <div className="location flex mt-8">
                  {" "}
                  <span>
                    <img className="w-4 h-4" src={Location} />
                  </span>
                  Lima, Perú
                </div>
                <div className="social flex">
                  <a href="https://github.com/jDebu" target="_blank">
                    <img src={Github} className="w-4 h-4 mt-2 mr-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/josedelgadobustamante/"
                    target="_blank"
                  >
                    <img src={Linkedin} className="w-4 h-4 mt-2" />
                  </a>
                </div>
              </div>
            </div>
          </aside>)}
        </div>
      </div>
    </div>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRouterInternal />
    </BrowserRouter>
  );
};
