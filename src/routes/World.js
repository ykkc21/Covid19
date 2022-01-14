import $ from "jquery";
import "../css/World.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import Country from "../components/country/Country";
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
    "IT",
  ];
  const [data, SetData] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    world.init();
  }, []);

  const world = {
    init() {
      this.WorldDate();
      // this.a();
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
          const list = res.Countries; //
          for (let i = 0; i < list.length; i++) {
            const { CountryCode } = list[i];
            worldCode.forEach((code) => {
              if (code === CountryCode) {
                SetData((data) => [list[i], ...data]);
                Setloading(false);
              }
            });
          }
        },
      });
    },
  };

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
