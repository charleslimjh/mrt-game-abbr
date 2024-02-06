"use client";

import Quiz from "@/components/quiz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <div className="text-3xl pb-5">MRT Abbreviation Game!</div>
      <div className="pb-5">
        <Quiz></Quiz>
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
