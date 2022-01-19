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
          <div className="text_box">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              corporis exercitationem recusandae alias, quaerat laborum voluptas
              quisquam id sunt eveniet quos animi aliquid sint modi, cum esse
              temporibus quas harum.
            </p>
          </div>
        </section>
        <section id="Content">
          <h1>Content</h1>
          <div className="container">
            <div className="boxs">
              <div className="card">
                <div className="card_image"></div>
              </div>
              <div className="card">
                <div className="card_image"></div>
              </div>
              <div className="card"></div>
            </div>
          </div>
        </section>
        <footer></footer>
      </div>
    </div>
  );
}
export default Main;
