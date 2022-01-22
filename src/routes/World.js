import $ from "jquery";
import "../css/World.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Country from "../components/country/Country";
import { useEffect, useState } from "react";
function World() {
  const worldCode = [
    "RU",
    "CN",
    "US",
    "DE",
    "FR",
    "JP",
    "GB",
    "IL",
    "IN",
    "ES",
    "AR",
    "PH",
    "CA",
    "SE",
    "AU",
    "BR",
    "HK",
  ];
  const [data, SetData] = useState([]);
  const [gonfalon, SetGonfalon] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    world.init();
  }, []);

  const world = {
    init() {
      this.WorldDate();
      this.GonfalonDate();
    },
    WorldDate() {
      $.ajax({
        type: "GET",
        url: "https://api.covid19api.com/summary",
        dataType: "json",
        error: function (err) {
          console.error(err);
        },
        success: function (res) {
          const list = res.Countries;
          for (let i = 0; i < list.length; i++) {
            const { CountryCode } = list[i];
            worldCode.forEach((code) => {
              if (code == CountryCode) {
                SetData((data) => [...data, list[i]]);
                Setloading(false);
              }
            });
          }
        },
      });
    },
    GonfalonDate() {
      worldCode.forEach((code) => {
        const data = fetch(
          `http://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=200&cond[country_iso_alp2::EQ]=${code}`
        )
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            SetGonfalon((data) => [...data, json.data]);
          });
      });
    },
  };

  console.log(data);

  return (
    <div className="World_wrap">
      {loading ? (
        <h1 style={{ color: "#fff" }}>loading...</h1>
      ) : (
        <>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <div className="Last_Box main">
            <div className="container">
              <ul>
                {/* {data.map((item, idx) => {
                  return (
                    <Country
                      key={idx}
                      ID={item.ID}
                      Country={item.Country}
                      TotalConfirmed={item.TotalConfirmed}
                      TotalDeaths={item.TotalDeaths}
                    />
                  );
                })} */}

                {gonfalon.map((item, idx) => {
                  data.map((country) => {
                    console.log(item[0]);
                    // console.log(country.CountryCode, item[0].country_iso_alp2);
                  });
                })}
              </ul>
            </div>
          </div>
          <div className="earth_img_box"></div>
        </>
      )}
    </div>
  );
}

export default World;
