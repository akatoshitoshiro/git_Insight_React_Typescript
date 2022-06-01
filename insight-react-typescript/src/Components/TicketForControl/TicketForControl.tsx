import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import * as TodoControl from"../../db/repositories/Todo-Control"
import"../ComponentsStyle/style.css"
function TicketForControl() {
  const [todos, setTodos] = useState<Array<TodoControl.TodoControl>>([]);
  useEffect(() => {
    fetchTodos();
}, []);
const fetchTodos = async () => {
  setTodos([]);
  const _todos = await TodoControl.all();
  setTodos(_todos);
};

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
          <th className="left-align">Số vé</th>
          <th className="left-align">Ngày sử dụng</th>
          <th className="left-align">Tên loại vé</th>
          <th className="left-align">Cổng check - in</th>
          <th> </th>
        </tr>
        </thead>
        <tbody>
        {todos.length === 0 ? (
                    <div className="loading">
                        <span>Đang tải dữ liệu....</span>
                    </div>
                ) : null}
          {todos.map((todo, index)=>(
        <tr>
          <td key={index}>{index+1}</td>
          <td>{todo.ticketNumber}</td>
          <td>{todo.ticketNumber}</td>
          <td>{todo.ticketName}</td>
          <td>{todo.gateCheck}</td>
          <td className="forcontrol"><div className="status-check">{todo.controlStatus}</div></td>
        </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
      </div>
    );
  }
  
  export default TicketForControl;
  
