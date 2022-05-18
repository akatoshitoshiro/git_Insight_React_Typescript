
import { HomeIcon, InVoiceIcon, ListIcon, MonitorIcon, SettingIcon, TicketIcon } from '../../assets/images/icons/navBarIcon';
import './Nav.css'
const logo = require('../../assets/images/logo.png');

function Nav() {
    return (
      <div className="Nav">
        <div className='logo'>
        
        </div>
        <div className='Frame'>
          <ul id='nav'>
          <li className='tag'><HomeIcon/><a href=''>Trang chủ</a> </li>
          <li className='tag'><TicketIcon/><a href=''>Quản lý vé</a>  </li>
          <li className='tag'><InVoiceIcon/><a href=''>Đối soát vé</a></li>
          <li className='tag'><ListIcon/><a href=''>Danh sách sự kiện</a></li>
          <li className='tag'><MonitorIcon/><a href=''>Quản lý thiết bị</a></li>
          <li className='tag'><SettingIcon/><a href=''>Cài đặt</a></li>
          <li className='tag'><a href=''>Gói dịch vụ</a></li>
          </ul>
        </div>
      </div>
      
    );
  }
  
  export default Nav;
  