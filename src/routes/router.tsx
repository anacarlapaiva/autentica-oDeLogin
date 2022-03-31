import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateLogin from "../components/CreateLogin";
import Login from "../components/Login";
import ProtectedLayout from "../components/ProtectedLayout";
import { AuthProvider } from "../context/AuthProvider";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <Profile />
              </ProtectedLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateLogin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
