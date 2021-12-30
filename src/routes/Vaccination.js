import { useEffect, useState } from "react";
import MapElement from "../components/Map/Map";
function Vaccination() {
  const { kakao } = window;
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
    SetLoading(false);
  }, []);
  return (
    <div className="Map_wrap" style={{ width: "100%", height: "100vh" }}></div>
  );
}
export default Vaccination;
