import { useEffect, useState } from "react";
// import MapElement from "../components/Map/Map";
function Vaccination() {
  const { kakao } = window;
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      Maps.Draw(latitude, longitude);
    });
  }, []);

  const Maps = {
    init() {
      this.Draw();
    },
    Draw(lat, long) {
      const container = document.getElementById("map");

      const options = {
        center: new kakao.maps.LatLng(lat, long),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      var markerPosition = new kakao.maps.LatLng(lat, long);

      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    },
  };

  return (
    <div className="Map_wrap" style={{ width: "100%", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
export default Vaccination;
