import React, { ReactNode } from "react";

interface BaseBoxProps {
  children: ReactNode;
}

export function BaseBox({ children }: BaseBoxProps) {
  return (
    <div className="border rounded-lg flex flex-col min-h-full w-[900px] m-auto mt-3">
      {children}
    </div>
  );
}
