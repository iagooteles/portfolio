"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      toastOptions={{
        success: {
          style: {
            background: "#8118b5",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#8118b5",
          },
        },
        error: {
          style: {
            background: "#f21d1d",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#f21d1d",
          },
        },
      }}
    />
  );
};
