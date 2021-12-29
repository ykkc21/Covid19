import $ from 'jquery';
import "../css/World.css";
import Country from "../components/country/Country";
import { useState } from 'react';
function World() {

    const world_code = ['RU','CN','US',"DE","FR","JP","GB","IL"];
    let [first, SetFirst] = useState([]);
    let [last, SetLast] = useState([]);
    const Datalist = [];
    const world = {
        init() {
            this.WorldDate();
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
                                Datalist.push(list[i]);
                            }
                        });
                    }
                    for (let i = 0; i <= 3; i++) {
                        SetFirst(Datalist[i]);
                    }
                    for (let i = 4; i <= Datalist.length; i++) {
                        SetLast(Datalist[i]);
                    }
                },
            });
        },
        ClickArrow(e) {
            const element = $(e.target);
            const num = $(element).attr('dat_num');
            
            
            if(num == 1 ){
                $('.earth_img_box').css({ transform: "rotate(-45deg)" });
                $('.right').animate({ opacity: "0" });
                $('.left').animate({ opacity: "1" });
                setTimeout(() => {
                    this.ListDraw(num);
                },1500);
            }

            if(num == 2 ){
                $('.earth_img_box').css({ transform: "rotate(0deg)" });
                $('.right').animate({ opacity: "1" });
                $('.left').animate({ opacity: "0" });
                setTimeout(() => {
                    this.ListDraw(num);
                },1500);
            }
        },
        ListDraw(num) {
            if(num == 1) {
                
            }else if(num == 2) {
                
            }
        },  
    };
    window.onload = () => {
        world.init();
    }


    return <div className="World_wrap">
        <div className="right arrow" dat_num='1' onClick={(e) => world.ClickArrow(e)} ></div>
        <div className="left arrow"dat_num='2' onClick={(e) => world.ClickArrow(e)} ></div>
        <div className="Last_Box main">
            
        </div>
        <div className="earth_img_box"></div>
    </div>
}

export default World;