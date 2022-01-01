import { useEffect, useState } from "react";
// import MapElement from "../components/Map/Map";
function Vaccination() {
  const { kakao } = window;
  const Key =
    "ni1KPPPSl7rn5wXOSl9YieknHyh6P%2Fk8wXj4aOPMa4BxknTBR71SKg8rboxd1MyzRoMU3uNHxaOCfev05Bcn5A%3D%3D";
  const [data, SetData] = useState([]);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;

      let max_latitude = (latitude += 0.01 * 1);
      let min_latitude = (latitude -= 0.01 * 1);
      let max_longitude = (longitude += 0.015 * 1);
      let min_longitude = (longitude -= 0.015 * 1);
      Maps.Draw(
        latitude,
        longitude,
        max_latitude,
        min_latitude,
        max_longitude,
        min_longitude
      );
    });
    Maps.init();
  }, []);

  const Maps = {
    item: [],
    init() {
      this.getDate();
    },
    async getDate() {
      const data = await (
        await fetch(
          `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=400&returnType=json&serviceKey=${Key}`
        )
      ).json();
      SetData(data.data);
      this.item = data.data;
    },
    Draw(lat, long, Maxlat, Minlat, Maxlong, Minlong) {
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

      marker.setMap(map); // 마커 지도위에 그리기

      this.item.forEach((item) => {
        const lat = item.lat;
        const long = item.lng;

        if (long < Maxlong && long > Minlong) {
          console.log(Maxlong, long);
        }
        // console.log(long, "Min: " + Minlong, "MAX: " + Maxlong);
        // if ((long > Minlong) & (long < Maxlong)) {
        //   console.log(item);
        // }
      });
    },
  };

  return (
    <div className="Map_wrap" style={{ width: "100%", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
export default Vaccination;
