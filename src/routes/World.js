import $ from 'jquery';
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


    return <h1>세계 코로나 현황</h1>
}

export default World;