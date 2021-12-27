import $ from 'jquery';
function World() {

    function WorldDate() {
        $.ajax({
            type : "GET",
            url:"https://api.covid19api.com/summary",
            dataType: 'json',
            error: function (err) { 
                console.error(err);
            },
            success:function (xml) {
                console.log(xml);
            },
        })

    }

    WorldDate();


    return <h1>세계 코로나 현황</h1>
}

export default World;