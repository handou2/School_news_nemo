import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignIn, SandBox } from "../pages";
export const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/"
          element={
            localStorage.getItem("token") ? (
              <SandBox />
            ) : (
              <Navigate replace to="/signIn" />
            )
          }
        />
        <Route path="*" element={<div>none</div>} />
      </Routes>
    </BrowserRouter>
  );
};
