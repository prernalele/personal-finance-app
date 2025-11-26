import { Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";
import Budgets from "./components/Budgets";
import Pots from "./components/Pots";
import RecurringBills from "./components/RecurringBills";
import NotFound from "./components/NotFound";

function AppRoutes() {
  const baseURL = "/personal-finance-app";
  return (
    <Routes>
      <Route path={`${baseURL}/overview`} element={<Overview />} />
      <Route path={`${baseURL}/transactions`} element={<Transactions />} />
      <Route path={`${baseURL}/budgets`} element={<Budgets />} />
      <Route path={`${baseURL}/pots`} element={<Pots />} />
      <Route path={`${baseURL}/recurringBills`} element={<RecurringBills />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
