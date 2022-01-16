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
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <div className="Main_box">
          <ul>
            <Slider {...settings}>
              <li className="Slider-items">1</li>
              <li className="Slider-items">2</li>
              <li className="Slider-items">3</li>
              <li className="Slider-items">4</li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Main;
