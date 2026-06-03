function StatusCard({ vehicle, darkMode }) {
  if (!vehicle) return null;

  return (
    <section
      aria-live="polite"
      className={`rounded-xl shadow p-6 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-6">
        Vehicle Status
      </h2>

      <dl className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div
          className={`rounded-lg p-4 ${
            darkMode
              ? "bg-slate-700"
              : "bg-slate-50"
          }`}
        >
          <dt className="text-sm text-gray-500 mb-1">
            Vehicle
          </dt>

          <dd className="font-semibold text-lg">
            {vehicle.name}
          </dd>
        </div>

        <div
          className={`rounded-lg p-4 ${
            darkMode
              ? "bg-slate-700"
              : "bg-slate-50"
          }`}
        >
          <dt className="text-sm text-gray-500 mb-1">
            Status
          </dt>

          <dd
            className={`font-semibold text-lg ${
              vehicle.status === "Online"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {vehicle.status === "Online"
              ? "🟢 Online"
              : "🔴 Offline"}
          </dd>
        </div>

        <div
          className={`rounded-lg p-4 ${
            darkMode
              ? "bg-slate-700"
              : "bg-slate-50"
          }`}
        >
          <dt className="text-sm text-gray-500 mb-1">
            Speed
          </dt>

          <dd className="font-semibold text-lg">
            {vehicle.speed} km/h
          </dd>
        </div>

        <div
          className={`rounded-lg p-4 ${
            darkMode
              ? "bg-slate-700"
              : "bg-slate-50"
          }`}
        >
          <dt className="text-sm text-gray-500 mb-1">
            Last Update
          </dt>

          <dd className="font-semibold text-lg">
            {vehicle.lastUpdate}
          </dd>
        </div>

      </dl>
    </section>
  );
}

export default StatusCard;