import { useEffect, useState } from "react";
import "../css/Vaccination.css";
function Vaccination() {
  const { kakao } = window;
  const Key =
    "ni1KPPPSl7rn5wXOSl9YieknHyh6P%2Fk8wXj4aOPMa4BxknTBR71SKg8rboxd1MyzRoMU3uNHxaOCfev05Bcn5A%3D%3D";
  const [data, SetData] = useState([]);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;

      // Maps.Draw(latitude, longitude);
    });
    // Maps.init();
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
    Draw(lat, long) {
      const container = document.getElementById("map");

      const options = {
        center: new kakao.maps.LatLng(lat, long),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      this.item.forEach((item) => {
        const { address, centerName, facilityName, lat, lng, sido, sigungu } =
          item;
        var markerPosition = new kakao.maps.LatLng(lat, lng);

        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map); // 마커 지도위에 그리기

        //// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
        var iwContent = `<div style="padding:5px;">${facilityName}</div>`;

        //인포 생성
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
        });
      });
    },
    zoomIn() {},
    zoomOut() {},
  };

  return (
    <div className="Map_wrap" style={{ width: "100%", height: "100vh" }}>
      {/* <div id="map" style={{ width: "100%", height: "100vh" }}></div> */}
      <div className="Text_Input">
        <h1 className="title">코로나 예방접종센터</h1>
        <h1 style={{ color: "#fff" }}>{text}</h1>
        <div className="input_box">
          <input
            type="text"
            onChange={onChange}
            value={text}
            placeholder=" 원하는 지역을 검색하세요! (Ex:인천)"
          />
          <button className="search">검색하기</button>
        </div>
      </div>
    </div>
  );
}
export default Vaccination;
