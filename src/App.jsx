import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Messages from "./components/messages/messages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="reviews" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
}
