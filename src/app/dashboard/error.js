'use client'; // Error components must be Client Components

export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-red-500">Failed to load stats!</h2>
      <button 
        onClick={() => reset()} // This tries to re-render the page
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}