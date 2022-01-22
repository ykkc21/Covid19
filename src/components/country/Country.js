import $ from "jquery";
import { useEffect } from "react";
function Country({ ID, Country, TotalConfirmed, TotalDeaths, Image }) {
  const items = document.getElementsByClassName("global_Date");
  const onClick = (e) => {
    console.log(e.target);
  };
  useEffect(() => {
    dom.init();
  }, []);

  const dom = {
    init() {
      this.ItemAnimation();
    },
    ItemAnimation() {
      [items].forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          const element = items[i];
          $(element)
            .delay(i * 100)
            .animate({ opacity: "1" });
        }
      });
    },
  };

  return (
    <li
      id="itmes"
      onClick={(e) => onClick(e)}
      country={Country}
      confirmed={TotalConfirmed}
      deaths={TotalDeaths}
      className="global_Date"
    >
      {Country}
    </li>
  );
}

export default Country;
