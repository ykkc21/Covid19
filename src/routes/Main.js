import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";

function Main() {
  return (
    <div className="wrap">
      <div className="Main_wrap col-lg-12">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Content</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section id="View">
          <h1 className="Main_Title">Covid-19 ProgressBoard</h1>
        </section>
        <section id="About">
          <div className="text_box"></div>
        </section>
        <section id="Content"></section>
        <footer></footer>
      </div>
    </div>
  );
}
export default Main;
