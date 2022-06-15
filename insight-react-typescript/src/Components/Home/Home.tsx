import React, { useEffect } from "react";
import {HomeChart} from "./HomeChart";
import HomeChart2 from"./Homechart2";
import HomeChart3 from "./HomeChart3";
import "../ComponentsStyle/style.css"
import "./style/Home.css";


function TrangChu (){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

      }, []);
     
   return(
        <div className="Home-Wrapper">
            <div className="Home-statistical">
                <h2>Thống Kê</h2>
                <div className="Home-statistical1">
                <h3>Doanh thu</h3>
                <div style={{borderRadius: '5px'}}>    
                <div className="date">
                <input type='date'/>
                </div>
                </div>
                </div>
                <div className="Home-statistical-2">
                    <div style={{width:1540, height:100}}><HomeChart /></div><br />
                    
                </div>
                <div style={{width:'400px' ,height:'30px',paddingTop:'300px' ,position:"absolute"}}>Tổng doanh thu theo tuần</div>
                <div style={{paddingTop:'320px' ,position:"absolute"}}><b style={{fontSize:'35px'}}>525.145.000 </b> đồng </div>
                <div className="Home-statistical-3">
                    
                    <div style={{display:'flex'}}>
                        <div style={{marginLeft:310, marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói gia đình</b></h3>
                        </div>
                        <div style={{marginLeft:720,  marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói sự kiện</b></h3>
                        </div>
                    </div>
                    <div id='HomeChart'>
                        <div id='HomeChart1' style={{}}> 
                        <HomeChart2 />
                        </div>
                        <div id='HomeChart2' > 
                        <HomeChart3 />
                        </div>
                    </div>
                    <div className="ChartType">
                        <div className="type-wrapper"><div className="type-color" style={{backgroundColor: "#4F75FF"}}></div> <span> Vé đã sử dụng </span></div>
                        <div className="type-wrapper"><div className="type-color" style={{backgroundColor: "#FF8A48"}}></div>  <span> Vé chưa sử dụng </span></div>
                    </div>
                    
                    <div id='boder2'> 13568</div>
                    <div id='boder1'> 56024</div>
                    <div id='boder3'> 30256</div>
                    <div id='boder4'> 28302</div>
                </div> 
            </div> 
        </div>
   )
}

export default TrangChu