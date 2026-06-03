import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function VehicleMap({ vehicle, darkMode }) {
  return (
    <div
      className={`h-[500px] rounded-xl overflow-hidden shadow ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <MapContainer
        center={[vehicle.lat, vehicle.lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[vehicle.lat, vehicle.lng]}>
          <Popup>
            <div>
              <strong>{vehicle.name}</strong>
              <br />
              Status: {vehicle.status}
              <br />
              Speed: {vehicle.speed} km/h
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default VehicleMap;