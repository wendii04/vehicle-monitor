function Header({
  totalVehicles,
  onlineVehicles,
  offlineVehicles,
  darkMode,
  setDarkMode,
}) {
  return (
    <header
      className={`shadow-sm border-b px-6 py-4 flex justify-between items-center ${
        darkMode
          ? "bg-slate-800 border-slate-700 text-white"
          : "bg-white"
      }`}
    >
      <div>
        <h1
          className={`text-2xl font-bold ${
            darkMode
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          Fleet Control Center
        </h1>

        <p
          className={`text-sm ${
            darkMode
              ? "text-slate-300"
              : "text-slate-500"
          }`}
        >
          Real-time vehicle monitoring
        </p>

        <div className="flex gap-4 mt-2 text-sm">
          <span>🚗 {totalVehicles} Vehicles</span>

          <span className="text-green-500 font-medium">
            🟢 {onlineVehicles} Online
          </span>

          <span className="text-red-500 font-medium">
            🔴 {offlineVehicles} Offline
          </span>
        </div>
      </div>

     <button
  onClick={() => setDarkMode(!darkMode)}
  className={`px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    darkMode
      ? "bg-yellow-500 hover:bg-yellow-400 text-black"
      : "bg-slate-800 hover:bg-slate-700 text-white"
  }`}
  aria-label="Toggle dark mode"
>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;