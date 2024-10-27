// FormContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface FormData {
  form1?: any;
  form2?: any;
  form3?: any;
  form4?: any;
  form5?: any;
  form6?: any;
  form7?: any;
  form8?: any;
  form9?: any;
  form10?: any;
  form11?: any;
  form12?: any;
  currentStep?: number;
}

interface FormContextProps {
  formData: FormData;
  updateFormData: (formKey: string, data: any) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (formKey: string, data: any, callback?: () => void) => {
    setFormData((prevData) => {
      const newData = { ...prevData, [formKey]: data };
      if (callback) callback();
      return newData;
    });
  };
  

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
