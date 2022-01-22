import { Link } from "react-router-dom";
function Card({ title }) {
  let state = {
    moveX: 0,
    moveY: 0,
  };

  return (
    <div id="card" className="card">
      <Link to={title}></Link>
    </div>
  );
}
export default Card;
