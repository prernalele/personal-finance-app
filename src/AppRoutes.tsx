import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";
import Budgets from "./components/Budgets";
import Pots from "./components/Pots";
import RecurringBills from "./components/RecurringBills";
import NotFound from "./components/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/budgets" element={<Budgets />} />
      <Route path="/pots" element={<Pots />} />
      <Route path="/recurringbills" element={<RecurringBills />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
