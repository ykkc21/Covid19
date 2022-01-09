import { useEffect, useState } from "react";
import "../css/Vaccination.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
function Vaccination() {
  const { kakao } = window;
  const Key =
    "ni1KPPPSl7rn5wXOSl9YieknHyh6P%2Fk8wXj4aOPMa4BxknTBR71SKg8rboxd1MyzRoMU3uNHxaOCfev05Bcn5A%3D%3D";
  const [data, SetData] = useState([]);
  const [text, setText] = useState("");
  const [position, setPostion] = useState({});
  const onChange = (e) => setText(e.target.value);

  useEffect(() => {
    Maps.init();
    // navigator.geolocation.watchPosition((e) => {

    // });
  }, []);

  const Maps = {
    // item: [],
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
    },
    Draw(item) {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.57613074143258, 126.97696604175948), // 지도의 중심좌표
          level: 12, // 지도의 확대 레벨
        };
      var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      const markers = [];
      data.forEach((items) => {
        const {
          address, // 주소
          centerName, //접종센터 이름
          facilityName, // 시설명
          id, // 아이디
          lat, // 위도
          lng, // 경도
          phoneNumber, // 시설 전화번호
          sido, // 시도
          sigungu, // 시군구
        } = items;
        const area = `${sido[0]}${sido[1]}`;
        if (item === area) {
          console.log(items);
          markers.push(new kakao.maps.LatLng(items.lat, items.lng));
        }
      });

      var bounds = new kakao.maps.LatLngBounds();
      let i, marker;
      for (i = 0; i < markers.length; i++) {
        // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
        marker = new kakao.maps.Marker({ position: markers[i] });
        marker.setMap(map);

        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(markers[i]);
      }

      map.setBounds(bounds);

      if (markers.length === 0) {
        alert("알맞는 데이터가 없습니다.");
      } else {
      }
    },
    ClickDraw(text) {
      if (text == "") {
        alert("입력값이 없습니다.");
      } else {
        $(".Text_Input")
          .delay(30)
          .animate({ opacity: "0" }, "slow")
          .css({ "z-index": "-1" });
        $("#map").animate({ opacity: "1" }, "slow").css({ "z-index": "10" });
        this.Draw(text);
      }
    },
    SlideAnimtion() {
      const slide = document.getElementsByClassName("slide");
      [slide].forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          const element = item[i];
          $(element).animate({ left: "50%" }, "slow");
        }
      });
    },
  };

  return (
    <div className="Map_wrap" style={{ width: "100%", height: "100vh" }}>
      <div id="map"></div>
      <div className="Text_Input">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <h1 className="title slide">코로나 예방접종센터</h1>
        <div className="input_box slide">
          <input
            type="text"
            onChange={onChange}
            value={text}
            style={{ textAlign: "center" }}
            placeholder=" 원하는 지역을 검색하세요! (Ex:인천)"
          />
          <button
            onClick={(e) => Maps.ClickDraw(e.target.value)}
            value={text}
            className="search"
          >
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Vaccination;
