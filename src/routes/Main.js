import Box from "../components/Menu/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Main.css";
import "../css/index.css";
function Main() {
  return (
    <div className="wrap">
      <div className="Menu_wrap col-lg-12">
        <div className="Menu_Box col-lg-10">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        {/* <div className="container">
          <div className="MenuBox">
            <h1>COVID-19</h1>
            <Box text="Korea" />
            <Box text="World" />
            <Box text="Vaccination" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Main;
