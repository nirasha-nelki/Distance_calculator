import { MapProps } from "../../types/LocationProps";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import { DEFAULT_CENTER } from "../../constants/constant";

const Map: React.FC<MapProps> = ({ origin = DEFAULT_CENTER, destination = DEFAULT_CENTER }) => {
  const mapCenter = origin || DEFAULT_CENTER;

  const mapKey = useMemo(
    () =>
      `${origin?.latitude ?? DEFAULT_CENTER.latitude}-${origin?.longitude ?? DEFAULT_CENTER.longitude}-${destination?.latitude ?? DEFAULT_CENTER.latitude}-${destination?.longitude ?? DEFAULT_CENTER.longitude}`,
    [origin, destination]
  );

  if (!origin && !destination) {
    return (
      <div className="w-full h-full bg-gray-300 rounded-lg m-2">
        <MapContainer
          center={[mapCenter.latitude, mapCenter.longitude]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-300 rounded-lg">
      <MapContainer
        key={mapKey}
        center={[mapCenter.latitude, mapCenter.longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {origin && <Marker position={[origin.latitude, origin.longitude]} />}
        {destination && (
          <Marker position={[destination.latitude, destination.longitude]} />
        )}
        {/* {origin && destination && <Polyline
          positions={origin && destination ? [[origin.latitude, origin.longitude], [destination.latitude, destination.longitude]] : []}
          color="blue"
        />} */}
      </MapContainer>
    </div>
  );
};

export default Map;
