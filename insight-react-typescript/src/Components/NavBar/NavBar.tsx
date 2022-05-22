import { Routes,Route,NavLink,Link } from "react-router-dom";
import { HomeOutlined,BellOutlined,CreditCardOutlined,MailOutlined, ContainerOutlined,SettingOutlined,SearchOutlined } from '@ant-design/icons';
import HomePage from "../Home/Home";
import Manage from "../TicketManage/TicketManage";
import Setting from "../Setting/Setting";
import TicketForControl from "../TicketForControl/TicketForControl";
import ServicePackage from "../ServicePackage/ServicePackage";
import "./style/NavBar.css"
const profile= require('../../assets/images/profile.png')

function NavBar() {
    return (
      <div className="Nav">
        <div className="sidebar-container">
          <div className="sidebar-content">
        <Link to="/" className='sidebar-logo'></Link>
        <div className="sidebar-ul">
       <NavLink to="/"className="sidebar-li" ><a><HomeOutlined/> Trang chủ</a> </NavLink>
       <NavLink to="/ticketmanage"className="sidebar-li" ><CreditCardOutlined /> Quản lý vé</NavLink>
       <NavLink to="/ticketforcontrol"className="sidebar-li" ><ContainerOutlined/> Đối soát vé</NavLink>
       <NavLink to="/setting"className="sidebar-li" ><SettingOutlined/> Cài đặt</NavLink>
       <div className="package-li">
       <NavLink to="/servicepackage"className="sidebar-package-li" ><a> Gói dịch vụ </a></NavLink>
       </div>
        </div>
        </div>
        </div>
          <div className="top-nav">
        <div className='Nav-SearchBar'>
        <input className='Nav-SearchInput' placeholder='Search...'/><a href="/"><SearchOutlined/></a>
        </div>
        <div className='Nav-Notify'>
          <Link to="/mail"className="Notify-Item Notify-Mail"><MailOutlined/></Link>
          <Link to="/bell"className="Notify-Item Notify-Bell"><BellOutlined/></Link>
          <Link to="/profile"className="Notify-Item Notify-profile"><img src={profile} alt="" /></Link>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/setting" element={<Setting/>}></Route>
          <Route path="/ticketmanage" element={<Manage/>}></Route>
          <Route path="/ticketforcontrol" element={<TicketForControl/>}></Route>
          <Route path="/servicepackage" element={<ServicePackage/>}></Route>
          </Routes>
      </div>
      
    );
  }
  
  export default NavBar;
  
