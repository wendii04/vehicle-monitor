function VehicleList({
  vehicles,
  selectedVehicle,
  onSelectVehicle,
  darkMode,
}) {
  return (
    <div
      className={`rounded-xl shadow p-4 ${
        darkMode ? "bg-slate-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">
        Vehicles
      </h2>

      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <button
            key={vehicle.id}
            onClick={() => onSelectVehicle(vehicle)}
            aria-label={`Select ${vehicle.name}`}
            aria-pressed={selectedVehicle?.id === vehicle.id}
            className={`w-full text-left p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedVehicle?.id === vehicle.id
                ? "bg-blue-50 border-blue-500 text-slate-900"
                : darkMode
                ? "border-slate-700 hover:bg-slate-700"
                : "hover:bg-blue-50"
            }`}
          >
            <div className="font-medium">
              {vehicle.name}
            </div>

            <div className="text-sm">
              {vehicle.status === "Online" ? (
                <span className="text-green-500">
                  🟢 Online
                </span>
              ) : (
                <span className="text-red-500">
                  🔴 Offline
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;