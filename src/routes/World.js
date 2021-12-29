import $ from "jquery";
import "../css/World.css";
import Country from "../components/country/Country";
import { useState } from "react";
function World() {
  const world_code = ["RU", "CN", "US", "DE", "FR", "JP", "GB", "IL"];
  const [data, SetData] = useState([]);
  const [loading, Setloading] = useState(true);
  const items = document.getElementsByClassName("global_Date");
  const box = document.getElementsByClassName("earth_img_box");

  const world = {
    init() {
      this.WorldDate();
      this.a();
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
            world_code.forEach((code) => {
              if (code == CountryCode) {
                SetData((data) => [list[i], ...data]);
                Setloading(false);
              }
            });
          }
        },
      });
    },
    a() {
      const as = [items].map((item) => {
        return item + "Asd";
      });
      console.log(as);
    },
  };
  window.onload = () => {
    world.init();
  };

  return (
    <div className="World_wrap">
      {loading ? (
        <h1 style={{ color: "#fff" }}>loading...</h1>
      ) : (
        <>
          {" "}
          <div className="right arrow" dat_num="1"></div>
          <div className="left arrow" dat_num="2"></div>
          <div className="Last_Box main">
            <div className="container">
              <ul>
                {data.map((item, idx) => {
                  return (
                    <Country
                      key={idx}
                      ID={item.ID}
                      Country={item.Country}
                      TotalConfirmed={item.TotalConfirmed}
                      TotalDeaths={item.TotalDeaths}
                    />
                  );
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
