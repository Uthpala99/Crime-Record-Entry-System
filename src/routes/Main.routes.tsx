import { Route, Routes } from "react-router-dom";
import { Step1, Step2, Step3, Step4, Step5 } from "../pages";
import { Step6 } from "../pages/Step6";


export function MainRoutes() {
  return (
    <Routes>
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
      <Route path="/step5" element={<Step5 />} />
      <Route path="/step6" element={<Step6 />} />
    </Routes>
  );
}
