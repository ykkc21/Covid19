import { Link } from "react-router-dom";
function Card({ title }) {
  let state = {
    moveX: 0,
    moveY: 0,
  };

  const mousemove = (e) => {
    const card = e.target;
    state.moveX = (300 / 2 - e.nativeEvent.offsetX) / 30;
    state.moveY = (400 / 2 - e.nativeEvent.offsetY) / 10;
    console.log(e);
    e.target.style.transform = `rotateY(${state.moveX}deg) rotateX(${state.moveY}deg) `;
  };

  const mouseout = (e) => {
    console.log(e.target);
    e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <div
      onMouseMove={(e) => mousemove(e)}
      onMouseOut={(e) => mouseout(e)}
      id="card"
      className="card"
    >
      <Link to={title}></Link>
    </div>
  );
}
export default Card;
