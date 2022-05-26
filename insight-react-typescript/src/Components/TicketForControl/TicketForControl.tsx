import { SearchOutlined } from "@ant-design/icons";
import"../ComponentsStyle/style.css"
function TicketForControl() {
    return (
      <div className="Wrapper">
        <div className="list-container">
          <div className="list-content">
        <h1>Đối soát vé</h1>
        </div>
        <div className="List-find-container">
        <div className='List-SearchBar'>
        <input className='List-SearchInput' placeholder='Tìm bằng số vé'/><a href="/"><SearchOutlined className="search-icon"/></a>
        </div>
        <div className="List-button-container">
        <button className="List-button">Xuất file(.csv)</button>
        </div>
        </div>
        <div className="table-container">
        <table className="list-ticket">
          <thead>
        <tr>
          <th>STT</th>
          <th className="left-align">Số vé</th>
          <th className="left-align">Ngày sử dụng</th>
          <th className="left-align">Tên loại vé</th>
          <th className="left-align">Cổng check - in</th>
          <th> </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>205314876321</td>
          <td>14/04/2021</td>
          <td>Vé cổng</td>
          <td>Cổng 1</td>
          <td className="forcontrol">Chưa đối soát</td>
        </tr>
        <tr>
          <td>1</td>
          <td>205314876321</td>
          <td>14/04/2021</td>
          <td>Vé cổng</td>
          <td>Cổng 1</td>
          <td className="forcontrol">Chưa đối soát</td>
        </tr>
        <tr>
          <td>1</td>
          <td>205314876321</td>
          <td>14/04/2021</td>
          <td>Vé cổng</td>
          <td>Cổng 1</td>
          <td className="forcontrol">Chưa đối soát</td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>
      </div>
    );
  }
  
  export default TicketForControl;
  
