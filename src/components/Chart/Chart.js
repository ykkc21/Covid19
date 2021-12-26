import ApexCharts from "react-apexcharts";
import $ from 'jquery';
function Chart() {

    const data = JSON.parse(window.localStorage.getItem('total'));
    const deathCntData = [];
    const decideCntData = [];
    const createDtData = [];

    data.forEach(element => {
        deathCntData.push(element.deathCnt);
        decideCntData.push(element.decideCnt);
        createDtData.push(element.createDt);
    });

    const day = createDtData.map((e) => {
      const month = e.split("-")[1];
      const day = e.split('-')[2].split(" ")[0];
      return `${month}월 ${day}일`;
    });



    const opstions1 = {
      title: {
        text:"사망자 현황판",
        floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444"
          }
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        type: 'bar'
      },
      series: [{
        name: "사망자",
        data: deathCntData.sort()
      }
    ],
    xaxis: {
      categories: day.sort(),
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val.toLocaleString()}명`;
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    }

    const opstions2 = {
      title: {
        text:"확진자 현황판",
        floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444"
          }
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        type: 'bar'
      },
      series: [{
        name: "확진자",
        data: decideCntData.sort()
      }
    ],
    xaxis: {
      categories: day.sort(),
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val.toLocaleString()}명`;
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    grid: {
      margin: "0 auto"
    }
    }

    return <>
       <ApexCharts
       className="Chart_Box"
       options={opstions1}
       series={opstions1.series}
       type="bar"
       width="700px"
       height="300px"
     />
     <ApexCharts
     className="Chart_Box"
       options={opstions2}
       series={opstions2.series}
       type="bar"
       width="700px"
       height="300px"
     />
    </> 
}
export default Chart;