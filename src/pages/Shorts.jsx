import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ytContext } from "../contextAPI";
import Layout from "../layouts/Layout";

const Shorts = () => {
  return (
    <Layout className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Short Video App</h1>

      <div className="max-w-md sm:p-4 animate-pulse">
        <div className="relative bg-gray-200 h-48 sm:rounded-xl"></div>

        <div className="flex gap-3 mt-3 max-sm:px-4">
          <div className="h-9 w-10 bg-gray-200 rounded-full"></div>
          <div className="w-full space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shorts;
