import React from "react";

import { DashboardContextProvider } from "../../components/context/Dashboard";

import DashboardView from "./view";

const Dashboard: React.FC = () => (
  <DashboardContextProvider>
    <DashboardView />
  </DashboardContextProvider>
);

export default Dashboard;
