import { Link } from "react-router-dom";
import "../Menu/Menu.css";
function Menu({ text }) {
  return (
    <div className="Menu_box">
      <div className="slide_box">
        <h1>{text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ab
          fuga cupiditate.
        </p>
        <Link to={`/${text}`}>이동하기</Link>
      </div>
    </div>
  );
}

export default Menu;
