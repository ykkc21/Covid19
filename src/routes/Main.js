import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";
function Main() {
  const Menu_Slide = (e) => {
    const items = document.getElementsByClassName("list_item");

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const item_num = $(items[i]).attr("dat_num");
      const target_num = $(e.target).attr("dat_num");
      const Position = $(items[i]).position().top;

      if (item_num == target_num) {
        $(items[i]).animate({
          top: "50%",
          left: "0%",
          transform: `translate(0%, -50%)`,
        });
      } else {
        $(item).animate({
          top: Position + Position * 0.5,
          left: "0%",
          transform: `translate(0%, -${Position + Position * 0.5}px)`,
        });
      }
    }
  };

  return (
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <div className="Menu_Box col-lg-11">
          <div className="Change_Menu">
            <ul>
              <li onClick={Menu_Slide} dat_num="1" className="list_item">
                Test1
              </li>
              <li onClick={Menu_Slide} dat_num="2" className="list_item">
                Test2
              </li>
              <li onClick={Menu_Slide} dat_num="3" className="list_item">
                Test3
              </li>
              <li onClick={Menu_Slide} dat_num="4" className="list_item">
                Test4
              </li>
            </ul>
          </div>
          <div className="Change_Item"></div>
        </div>
      </div>
    </div>
  );
}
export default Main;
