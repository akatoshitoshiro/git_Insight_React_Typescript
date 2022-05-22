import { SearchOutlined,FilterOutlined } from "@ant-design/icons";
import"../ComponentsStyle/style.css"
import"./style/TicketManage.css"
function Manage() {
    return (
      <div className="Wrapper">
        <div className="list-container">
          <div className="list-content">
        <h1>Danh sách vé</h1>
        </div>
        <div className='List-SearchBar'>
        <input className='List-SearchInput' placeholder='Search...'/><a href="/"><SearchOutlined/></a>
        </div>
        <div className="Filter-container">
        <button><FilterOutlined/> Lọc vé</button>
        <button>Xuất file(.csv)</button>
        </div>
        <div className="table-container">
        <table className="list-ticket">
        <tr>
          <th>STT</th>
          <th>Booking code</th>
          <th>Số vé</th>
          <th>Tên sự kiện</th>
          <th>Tình trạng sử dụng</th>
          <th>Ngày sử dụng</th>
          <th>Ngày xuất vé</th>
          <th>Cổng check - in</th>
        </tr>
        <tr>
          <td>1</td>
          <td>ALT20210501</td>
          <td>123456789034</td>
          <td>Hội chợ triển lãm tiêu dùng 2021</td>
          <td>Đã sử dụng</td>
          <td>14/04/2021</td>
          <td>14/04/2021</td>
          <td>Cổng 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ALT20210501</td>
          <td>123456789034</td>
          <td>Hội chợ triển lãm tiêu dùng 2021</td>
          <td>Đã sử dụng</td>
          <td>14/04/2021</td>
          <td>14/04/2021</td>
          <td>Cổng 1</td>
        </tr>
        </table>
        </div>
      </div>
      </div>
    );
  }
  
  export default Manage;
  
