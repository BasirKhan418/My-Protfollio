import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={"max-w-4xl w-full mx-auto py-16 md:py-20 px-4 md:px-10 animate-page-enter"}
    >
      {children}
    </main>
  );
};
