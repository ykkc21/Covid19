import { useEffect, useState } from "react";
function Vaccination() {
  const { kakao } = window;
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    KakaoMap.init();
    navigator.geolocation.watchPosition((pos) => {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      KakaoMap.drawMap(latitude, longitude);
      SetLoading(false);
    });
  }, []);

  const KakaoMap = {
    init() {},
    drawMap(latitude, longitude) {
      const container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);
    },
  };

  return <>{loading ? <h1>...loading</h1> : <h1>Hi</h1>}</>;
}
export default Vaccination;
