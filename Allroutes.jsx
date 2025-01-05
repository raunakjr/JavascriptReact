import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<Header />} />
      </Routes>
    </div>
  );
}
