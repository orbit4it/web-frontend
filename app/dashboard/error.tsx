'use client';
import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main
      className="w-full h-screen flex flex-col items-center justify-center bg-d-primary
    "
    >
      <h1 className="text-2xl font-semibold">Error</h1>
      <p className="text-sm font-medium">{error.message}</p>
      <button
        className="bg-darkBlue rounded-lg px-3 py-2 mt-3 text-white"
        onClick={reset}
      >
        Reload
      </button>
    </main>
  );
}
