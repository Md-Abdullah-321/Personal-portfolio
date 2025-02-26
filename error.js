"use client";

import { useEffect } from "react";


export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold text-red-600">
        Something went wrong 😢
      </h1>
      <p className="text-gray-600">Please refresh the page or try again.</p>
      <button
        onClick={() => reset()} // This resets the error boundary
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
