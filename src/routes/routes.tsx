import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CarsPage from "../pages/home/CarsPage";
import DashboardPage from "../pages/admin/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cars" element={<CarsPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="/auth/register" element={<RegisterPage />} />
  </Routes>
);

export default AppRoutes;
