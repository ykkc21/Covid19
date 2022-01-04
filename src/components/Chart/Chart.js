import ApexCharts from "react-apexcharts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
function Chart() {
  const data = JSON.parse(window.localStorage.getItem("total"));
  const deathCntData = [];
  const decideCntData = [];
  const createDtData = [];

  data.forEach((element) => {
    deathCntData.push(element.deathCnt * 1);
    decideCntData.push(element.decideCnt * 1);
    createDtData.push(element.createDt);
  });

  let AddDeathCnt = deathCntData[0] - deathCntData[1],
    AddDecideCnt = decideCntData[0] - decideCntData[1];
  let num1 = 0,
    num2 = AddDecideCnt - 200;

  function animation() {
    const element = document.getElementsByClassName("Chart_Box");
    const show_data = document.getElementsByClassName("show_data");
    for (let i = 0; i < element.length; i++) {
      const elements = element[i];
      $(elements)
        .delay(i * 300)
        .animate({ opacity: 1, top: "0%", boxShadow: " 0 0 10px #000" });
    }
    $(show_data).animate({ opacity: 1, top: "20%", right: "5%" }, 1200);
    setTimeout(() => {
      const first = setInterval(() => {
        num1++;
        $(".firstcount").text(`up ${num1}`);
        if (num1 == AddDeathCnt) {
          clearInterval(first);
        }
      }, 30);
      const last = setInterval(() => {
        num2++;
        $(".lastcount").text(`up ${num2}`);
        if (num2 == AddDecideCnt) {
          clearInterval(last);
        }
      });
    }, 2000);
  }

  $(document).ready(() => {
    animation();
  });

  const day = createDtData.map((e) => {
    const month = e.split("-")[1];
    const day = e.split("-")[2].split(" ")[0];
    return `${month}월 ${day}일`;
  });

  const opstions1 = {
    title: {
      text: "사망자 현황판",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444",
        fontSize: "20px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "사망자",
        data: deathCntData.sort(),
      },
    ],
    xaxis: {
      categories: day.sort(),
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val.toLocaleString()}명`;
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
  };

  const opstions2 = {
    title: {
      text: "확진자 현황판",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444",
        fontSize: "20px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "확진자",
        data: decideCntData.sort(),
      },
    ],
    xaxis: {
      categories: day.sort(),
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val.toLocaleString()}명`;
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    grid: {
      margin: "0 auto",
    },
  };

  return (
    <>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <h1 className="title">매일 데이터 갱신 오전 10시</h1>
      <div className="Chart_box_wrap">
        <ApexCharts
          className="Chart_Box"
          options={opstions1}
          series={opstions1.series}
          type="bar"
          width="700px"
          height="300px"
        />
      </div>
      <div className="Chart_box_wrap">
        <ApexCharts
          className="Chart_Box"
          options={opstions2}
          series={opstions2.series}
          type="bar"
          width="700px"
          height="300px"
        />
      </div>
      <div className="show_data">
        <div className="decideCntBox s_box">
          <p>사망자</p>
          <h4 className="FirstCount">
            {deathCntData[3] != null
              ? deathCntData[3].toLocaleString()
              : deathCntData[2].toLocaleString()}
            명<span className="firstcount"></span>
          </h4>
        </div>
        <div className="deathCntBox s_box">
          <p>확진자</p>
          <h4>
            {decideCntData[3] != null
              ? decideCntData[3].toLocaleString()
              : decideCntData[2].toLocaleString()}
            명<span className="lastcount"></span>
          </h4>
        </div>
      </div>
    </>
  );
}
export default Chart;
