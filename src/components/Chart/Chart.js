import ApexCharts from "apexcharts";

function Chart({ element }) {
    console.log(element);
    

  var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    
    var chart = new ApexCharts(element, options);
    
    chart.render();


    return <div className="chart"></div>
}
export default Chart;