import { Route, Routes } from "react-router-dom";
import CarsPage from "../pages/home/CarsPage";
import CarDetailPage from "../pages/home/CarDetailPage";
import DashboardPage from "../pages/admin/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CarsPage />} />
    <Route path="/car" element={<CarDetailPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="/auth/register" element={<RegisterPage />} />
  </Routes>
);

export default AppRoutes;
