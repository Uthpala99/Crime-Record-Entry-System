import React from "react";
import "./App.css";
import { MainRoutes } from "./routes/Main.routes";
import { Header } from "./components";
import { Footer } from "./components/Footer";
import { VerticalStepper } from "./components/VerticalStepper";
import { useFormContext } from "./hooks/formHook";

function App() {
  const { formData } = useFormContext(); // Access current step
  const currentStep = formData.currentStep || 0;
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="flex grow">
        <div className="border-r-2  p-8 w-[300px]">
          <VerticalStepper currentStep={currentStep} />
        </div>
        <div className="p-4 grow">
          <div className="flex flex-col h-full gap-2">
            <span className="text-2xl font-bold">
              අපරාධයේ සවිස්තර තොරතුරු වාර්තා කිරීම
            </span>
            <div className="grow">
              <MainRoutes />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
