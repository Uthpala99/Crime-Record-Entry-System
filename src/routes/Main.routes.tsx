import { Route, Routes } from "react-router-dom";
import { Step1, Step10, Step11, Step12, Step2, Step3, Step4, Step5, Step7, Step8, Step9 } from "../pages";
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
      <Route path="/step7" element={<Step7 />} />
      <Route path="/step8" element={<Step8 />} />
      <Route path="/step9" element={<Step9 />} />
      <Route path="/step10" element={<Step10 />} />
      <Route path="/step11" element={<Step11 />} />
      <Route path="/step12" element={<Step12 />} />
    </Routes>
  );
}
