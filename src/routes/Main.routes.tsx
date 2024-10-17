import { Route, Routes } from "react-router-dom";
import { Step1 } from "../pages";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/step1" element={<Step1 />} />
    </Routes>
  );
}
