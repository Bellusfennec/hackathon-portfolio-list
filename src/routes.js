import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import FavoritesPage from "./pages/favoritesPage.jsx";
import Error404Page from "./pages/error404Page.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<ProfilePage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default AppRoutes;
