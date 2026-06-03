function ErrorState({ onRetry }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">⚠️</div>

        <h2 className="text-2xl font-bold mb-2">
          Unable to load vehicle data
        </h2>

        <p className="text-slate-500 mb-6">
          The tracking service is temporarily unavailable.
          Please try again.
        </p>

        <button
          onClick={onRetry}
          className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default ErrorState;