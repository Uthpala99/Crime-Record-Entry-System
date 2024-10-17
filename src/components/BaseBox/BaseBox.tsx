import React, { ReactNode } from "react";

interface BaseBoxProps {
  children: ReactNode;
}

export function BaseBox({ children }: BaseBoxProps) {
  return (
    <div className="shadow shadow-md rounded-lg flex flex-col min-h-full">
      {children}
    </div>
  );
}
