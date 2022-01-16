import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Main() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    // <div className="wrap">
    //   <div className="Menu_wrap col-lg-12">
    //     <Slider settings={settings}>
    //       <div>
    //         <h1>1</h1>
    //       </div>
    //       <div>
    //         <h1>2</h1>
    //       </div>
    //       <div>
    //         <h1>3</h1>
    //       </div>
    //     </Slider>
    //     {/* <div className="Main_box">
    //       <button arrow_num="1" className="btn right">
    //         오른쪽
    //       </button>
    //       <button arrow_num="-1" className="btn left">
    //         왼쪽
    //       </button>
    //       <ul>
    //         <li></li>
    //         <li></li>
    //         <li></li>
    //         <li></li>
    //       </ul>
    //     </div> */}
    //   </div>
    // </div>
  );
}
export default Main;
