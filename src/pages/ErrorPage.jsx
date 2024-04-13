import React from "react";
import Layout from "../layouts/Layout";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center ms-auto h-[80vh] md:h-[90vh]">
      <img src="/error.svg" className="w-40 h-40" alt="" />

      <div className="text-center mb-3">
        <p className="text-xl mb-3 ">Connect to the Internet</p>
        <p className="text-xs">You&apos;re offline. Check your connection.</p>
      </div>

      <button
        className="text-blue-500 font-medium px-4 text-sm hover:bg-blue-500 hover:bg-opacity-30 py-1 rounded-full border border-gray-500 hover:border-none"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
