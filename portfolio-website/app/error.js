"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="error-container">
      <h2 className="error-title">Something went wrong!</h2>
      <p className="error-description">
        We apologize for the inconvenience. Please try again.
      </p>
      <button onClick={() => reset()} className="button error-button">
        Try again
      </button>
    </div>
  );
}
