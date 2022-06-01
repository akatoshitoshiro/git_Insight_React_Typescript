import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import * as TodoControl from"../../db/repositories/Todo-Control"
import"../ComponentsStyle/style.css"
function Setting() {
//   const [todos, setTodos] = useState<Array<TodoControl.TodoControl>>([]);
//   useEffect(() => {
//     fetchTodos();
// }, []);
// const fetchTodos = async () => {
//   setTodos([]);
//   const _todos = await TodoControl.all();
//   setTodos(_todos);
// };

const checkStatus= document.getElementsByClassName('status-check');
for (let i=0; i < checkStatus.length; i++){
  if(checkStatus[i].innerHTML==='Chưa đối soát')
  {
    checkStatus[i].classList.add('notcontrol')
  }
  else if(checkStatus[i].innerHTML==='Đã đối soát')
  {
    checkStatus[i].classList.add('controled')
  }
}
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
          <th className="left-align">Mã gói</th>
          <th className="left-align">Tên gói vé</th>
          <th className="left-align">Ngày áp dụng</th>
          <th className="left-align">Ngày hết hạn</th>
          <th className="left-align">Giá vé ${"(VND/vé)"}</th>
          <th className="left-align">Giá Combo ${"(VND/Combo)"}</th>
          <th className="left-align">Tình trạng</th>
          <th> </th>
        </tr>
        </thead>
        <tbody>
        {/* {todos.length === 0 ? (
                    <div className="loading">
                        <span>Đang tải dữ liệu....</span>
                    </div>
                ) : null}
          {todos.map((todo, index)=>( */}
        <tr>
          <td>1</td>
          <td>ALT20210501</td>
          <td>Gói gia đình</td>
          <td>14/04/2021
            08:00:00</td>
          <td>14/04/2021 
            23:00:00</td>
            <td>90.000 VNĐ</td>
            <td>360.000 VNĐ/4 Vé</td>
            <td>Đang áp dụng</td>
            <td><button>Cập nhật</button></td>

          {/* <td className="forcontrol"><div className="status-check">{todo.controlStatus}</div></td> */}
        </tr>
        <tr>
          <td>2</td>
          <td>ALT20210501</td>
          <td>Gói sự kiện</td>
          <td>14/04/2021
08:00:00</td>
          <td>14/04/2021
23:00:00</td>
            <td>20.000 VNĐ</td>
            <td></td>
            <td>Tắt</td>
            <td><button>Cập nhật</button></td>

          {/* <td className="forcontrol"><div className="status-check">{todo.controlStatus}</div></td> */}
        </tr>
          {/* ))} */}
        </tbody>
        </table>
        </div>
      </div>
      </div>
    );
  }
  
  export default Setting;
  
