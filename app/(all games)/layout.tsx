"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-3xl pb-5">MRT Abbreviation Game!</div>
      <div className="pb-5">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </div>
  );
}
