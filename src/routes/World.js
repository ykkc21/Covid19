import $ from 'jquery';
import "../css/World.css";
function World() {

    const world_code = ['RU','CN','US',"IN","DE","FR","JP","GB","IL"];
    function WorldDate() {
        $.ajax({
            type : "GET",
            url:"https://api.covid19api.com/summary",
            dataType: 'json',
            error: function (err) { 
                console.error(err);
            },
            success:function (res) {
                console.log(res);
            },
        })

    }

    WorldDate();


    return <div className="World_wrap">
        <input type="radio" className="input" name="rotate" id="btn1" />
        <input type="radio" className="input" name="rotate" id="btn2" />
        <label for="btn1">오른쪽</label>
        <label for="btn2">왼쪽</label>
        <div className="earth_img_box"></div>
    </div>
}

export default World;