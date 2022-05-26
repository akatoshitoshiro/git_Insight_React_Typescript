import { SearchOutlined,FilterOutlined } from "@ant-design/icons";
import"../ComponentsStyle/style.css"
import"./style/TicketManage.css"
import {initializeApp} from 'firebase/app'
import { config } from "../../config/config";
function Manage() {
    return (
      <div className="Wrapper">
        <div className="list-container">
          <div className="list-content">
        <h1>Danh sách vé</h1>
        </div>
        <div className="List-find-container">
        <div className='List-SearchBar'>
        <input className='List-SearchInput' placeholder='Tìm bằng số vé'/><a href="/"><SearchOutlined className="search-icon"/></a>
        </div>
        <div className="List-button-container">
        <button className="List-button"><FilterOutlined/> Lọc vé</button>
        <button className="List-button">Xuất file(.csv)</button>
        </div>
        </div>
        <div className="table-container">
        <table className="list-ticket">
          <thead>
        <tr>
          <th>STT</th>
          <th className="left-align">Booking code</th>
          <th className="left-align">Số vé</th>
          <th className="left-align">Tên sự kiện</th>
          <th className="left-align">Tình trạng sử dụng</th>
          <th className="right-align">Ngày sử dụng</th>
          <th className="right-align">Ngày xuất vé</th>
          <th className="left-align">Cổng check - in</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>ALT20210501</td>
          <td>123456789034</td>
          <td>Hội chợ triển lãm tiêu dùng 2021</td>
          <td>Đã sử dụng</td>
          <td className="right-align">14/04/2021</td>
          <td className="right-align">14/04/2021</td>
          <td>Cổng 1</td>
        </tr>
        <tr>
        <td>1</td>
          <td>ALT20210501</td>
          <td>123456789034</td>
          <td>Hội chợ triển lãm tiêu dùng 2021</td>
          <td>Đã sử dụng</td>
          <td className="right-align">14/04/2021</td>
          <td className="right-align">14/04/2021</td>
          <td>Cổng 1</td>
        </tr>
        <tr>
        <td>2</td>
          <td>ALT20210501</td>
          <td>123456789034</td>
          <td>Hội chợ triển lãm tiêu dùng 2021</td>
          <td>Đã sử dụng</td>
          <td className="right-align">14/04/2021</td>
          <td className="right-align">14/04/2021</td>
          <td>Cổng 1</td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>
      </div>
    );
  }
  
  export default Manage;
  
