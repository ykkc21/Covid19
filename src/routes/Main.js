import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";
function Main() {
  return (
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <section id="View">
          <div className="background_img"></div>
          <div className="first"></div>
        </section>
        <section id="Korea">
          <div className="container"></div>
        </section>
      </div>
    </div>
  );
}
export default Main;
