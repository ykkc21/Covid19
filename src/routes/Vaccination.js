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
    navigator.geolocation.watchPosition((e) => {
      let obj = {
        latitude: e.coords.latitude,
        longitude: e.coords.longitude,
      };
      setPostion(obj);
    });
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
          const container = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(
              position["latitude"],
              position["longitude"]
            ),
            level: 10,
          };
          var map = new kakao.maps.Map(container, options);
          var markerPosition = new kakao.maps.LatLng(lat, lng);
          var marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map); // 마커 지도위에 그리기
        }
      });
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
