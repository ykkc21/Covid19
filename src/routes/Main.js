import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";
function Main() {
  $(window).bind("wheel", (e) => {
    console.log("마우스 휠: " + e);
  });

  return (
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <section id="View">
          <div className="Main_Text">
            <h1>Covid19 - NoticeBoard</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Main;
