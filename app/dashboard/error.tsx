'use client';

import ErrorText from '@/components/ErrorText';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-20 h-auto font-semibold">
        <ErrorText />
      </div>
      <h1 className="text-2xl mt-2 font-bold">{error.message}</h1>
      <button
        className="bg-transparent text-white hover:bg-white hover:text-black rounded-full px-6 py-1 mt-6  transition-colors duration-300 border border-white text-sm"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </main>
  );
}
