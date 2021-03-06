import { useEffect, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Korea.css";
import Chart from "../components/Chart/Chart";

function Korea() {
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    DataSetting();
  }, []);

  function DataSetting() {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const EndDay = year + month + day;

    let TotalDate = [];
    $.ajax({
      type: "GET",
      url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=3&startCreateDt=20191230&endCreateDt=${EndDay}`,
      dataType: "xml",
      error: function (err) {
        console.error(err);
      },
      success: function (xml) {
        $(xml)
          .find("item")
          .each((idx, item) => {
            const deathCnt = $(item).find("deathCnt").text(); // 사망자 수
            const decideCnt = $(item).find("decideCnt").text(); // 확진자 수
            const stateDt = $(item).find("stateDt").text();
            const createDt = $(item).find("createDt").text();

            if (stateDt == EndDay) {
              // 오늘 데이터 저장
              const obj = {
                deathCnt,
                decideCnt,
                createDt,
              };
              TotalDate.push(obj);
            } else if (stateDt == EndDay * 1 - 1) {
              // 어제 데이터 저장
              const obj = {
                deathCnt,
                decideCnt,
                createDt,
              };
              TotalDate.push(obj);
            } else if (stateDt == EndDay * 1 - 2) {
              // 어제 데이터 저장
              const obj = {
                deathCnt,
                decideCnt,
                createDt,
              };
              TotalDate.push(obj);
            }
          });
        window.localStorage.setItem("total", JSON.stringify(TotalDate)); // 4일치 데이터
        SetLoading(false);
      },
    });
  }

  return (
    <div className="Korea_wrap">
      {loading ? <h1>loading...</h1> : <Chart />}
    </div>
  );
}

export default Korea;
