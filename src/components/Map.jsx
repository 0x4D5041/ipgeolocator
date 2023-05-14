import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Icon = new L.icon({
  iconUrl: "../../assets/icon.png",
  iconSize: [80, 80],
});

const Map = ({ position, ip }) => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "100%" }}
      zoomControl={false}
      className="absolute z-0 min-h-screen"
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/marpeand/cle1e8e11004j01qo52t4ugp4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFycGVhbmQiLCJhIjoiY2xlMGozZnc2MWJoZzNxbWpha3FtNDJ0dCJ9.3bZRYLhJEQET0GHIJ6uErA"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={Icon}>
        <Popup>
          { ip }
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
