import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
import $ from "jquery";
function Main() {

  $(document).on('click', '.item', (e) => {
    let num = $(e.target).attr('dat_num');
    const item = document.querySelectorAll('.item');
    Slide(num, item);
  })

  const Slide = (num, list) => {
    switch (num) {
      case "1":
          $(list[2]).delay(100).animate({ top: "-33.333%"}).delay(100).animate({ opacity:0, top : "99.999%" },0);
          // $(list[2]).delay(100).animate({ top: "99.999% " });
          $(list[3]).delay(100).animate({ top: "0%" }).css({opacity: 1});;
          $(list[1]).css({ opacity: 1 }).delay(100).animate({ top: "66.666%",  })
      break;
      case "2":
          $(list[3]).delay(100).animate({ top: "-33.333%"}).delay(100).animate({ opacity:0, top : "99.999%" },0);
          // $(list[3]).delay(100).animate({ top: "99.999% " });
          $(list[0]).delay(100).animate({ top: "0%" }).css({opacity: 1});;
          $(list[2]).css({ opacity: 1 }).delay(100).animate({ top: "66.666%",  })
      break;
      case "3":
          $(list[0]).delay(100).animate({ top: "-33.333%"}).delay(100).animate({ opacity:0, top : "99.999%" },0);
          // $(list[0]).delay(100).animate({ top: "99.999% " });
          $(list[1]).delay(100).animate({ top: "0%"}).css({opacity: 1});;
          $(list[3]).css({ opacity: 1 }).delay(100).animate({ top: "66.666%"});
      break;
      case "4":
          $(list[1]).delay(100).animate({ top: "-33.333%"}).delay(100).animate({ opacity:0, top : "99.999%" },0);
          // $(list[1]).delay(100).animate({ top: "99.999% " });
          $(list[2]).delay(100).animate({ top: "0%" }).css({opacity: 1});
          $(list[0]).css({ opacity: 1 }).delay(100).animate({ top: "66.666%",  })
      break;
  
      default:
          break;
  }
  }

  return (
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <div className="Menu_Box col-lg-11">
          <div className="Change_Menu">
            <ul>
              <li  dat_num="1" className="item">
                Test1
              </li>
              <li  dat_num="2" className="item">
                Test2
              </li>
              <li  dat_num="3" className="item">
                Test3
              </li>
              <li  dat_num="4" className="item">
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
