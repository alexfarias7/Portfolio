"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-right"
      toastOptions={{
        success: {
          style: {
            background: "#B2A0F7",
            color: "#F1ECFE",
          },
          iconTheme: {
            primary: "#F1ECFE",
            secondary: "#B2A0F7",
          },
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
};
