import React from "react";
import { Routes, Route } from "react-router-dom";

const Characters = React.lazy(() => import("../../pages/characters"));
const Dashboard = React.lazy(() => import("../../pages/dashboard"));

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/episodes" element={<Characters />} />
      <Route path="/planets" element={<Characters />} />
    </Routes>
  );
};

export default Content;
