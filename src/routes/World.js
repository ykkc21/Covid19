import $ from 'jquery';
import "../css/World.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons"
function World() {

    const world_code = ['RU','CN','US',"IN","DE","FR","JP","GB","IL"];
    const DataList = [];
    const world = {
        init() {
            this.WorldDate();
            this.ClickArrow.bind(this);
        },
        WorldDate() {
            $.ajax({
                type : "GET",
                url:"https://api.covid19api.com/summary",
                dataType: 'json',
                error: function (err) { 
                    console.error(err);
                },
                success:function (res) {
                    const list = res.Countries;//
                    for (let i = 0; i < list.length; i++) {
                        const { CountryCode } = list[i];
                        world_code.forEach(code => {
                            if(code == CountryCode) {
                                DataList.push(list[i]);
                            }
                        })
                    }
                },
            });

            // console.log(DataList);
        },
        ClickArrow(e) {
            const element = $(e.target);
            const num = $(element).attr('dat_num');
            
            
            if(num == 1 ){
                $('.earth_img_box').css({ transform: "rotate(-45deg)" });
                $('.right').animate({ opacity: "0" });
                $('.left').animate({ opacity: "1" });
                setTimeout(() => {
                    this.ListDraw();
                },1500)
            }

            if(num == 2 ){
                $('.earth_img_box').css({ transform: "rotate(0deg)" });
                $('.right').animate({ opacity: "1" });
                $('.left').animate({ opacity: "0" });
            }


        },
        ListDraw() {
            alert(123);
        },  
    };

    window.onload = () => {
        world.init();
    }

    return <div className="World_wrap">
        <div className="right arrow" dat_num='1' onClick={(e) => world.ClickArrow(e)} ></div>
        <div className="left arrow"dat_num='2' onClick={(e) => world.ClickArrow(e)} ></div>
        <div className="earth_img_box"></div>
    </div>
}

export default World;