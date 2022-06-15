import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import * as TodoControl from"../../db/repositories/Todo-Control"
import"../ComponentsStyle/style.css"
import"./style/TicketForControl.css"
function TicketForControl() {
  const [todos, setTodos] = useState<Array<TodoControl.TodoControl>>([]);
  useEffect(() => {
    fetchTodos();
}, []);
const checkStatusHandle =()=>{
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
}
const chooseOption = async (param: {
  type: string
}) => {

  switch(param.type) {

      case 'all':
          const data =  await TodoControl.all();
          setTodos(data);
          break;
      
      case 'controled':
          const data1 =   (await TodoControl.all()).filter((item: any) => item.controlStatus === "Đã đối soát");
          setTodos(data1);
          checkStatusHandle();
          break;

      case 'notcontrol':
          const data2 =    (await TodoControl.all()).filter((item: any) => item.controlStatus === "Chưa đối soát");
          setTodos(data2);
          checkStatusHandle();
          break;
          
  }
  
}
const fetchTodos = async () => {
  setTodos([]);
  const _todos = await TodoControl.all();
  setTodos(_todos);
  checkStatusHandle();
}


    return (
      <div className="content-wrapper">
      <div className="center-content">
        <div className="list-container">
          <div className="list-content">
        <h1>Đối soát vé</h1>
        </div>
        <div className="List-find-container">
        <div className='List-SearchBar'>
        <input className='List-SearchInput' placeholder='Tìm bằng số vé'/><a href="/"><SearchOutlined className="search-icon"/></a>
        </div>
        <div className="List-button-container">
        <button className="List-button-control">Chốt đối soát</button>
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
      <div className="filter-control-wrapper">
        <div className="filter-control-container">
            <div className="filter-content">
              <h2>Lọc vé</h2>
            </div>
            <div className="filter-check-status">
            <h3>Tình trạng đối soát</h3>
            <div className="filter-check-radio-container">
            <div className="filter-check-radio"><input type="radio" value={'Tất cả'} onChange={()=> chooseOption({type: 'all'})}/> Tất cả</div>
            <div className="filter-check-radio"> <input type="radio" value={'Đã đối soát'} onChange={()=> chooseOption({type: 'controled'})}/> Đã đối soát</div>
            <div className="filter-check-radio"><input type="radio" value={'Chưa đối soát'} onChange={()=> chooseOption({type: 'notcontrol'})}/> Chưa đối soát</div>
            </div>
            </div>
            <div className="filter-type">
              <h3>Loại vé</h3>
              <span> Vé cổng </span>
            </div>
            <div className="filter-date-container">
              <div className="filter-date">
              <div className="filter-date-content" ><h3>Từ ngày</h3></div>
              <input type="date" />
              </div>
              <div className="filter-date">
              <div className="filter-date-content" ><h3>Đến ngày</h3></div>
              <input type="date" />
            </div>
            </div>
            
            <div className="filter-button">
              <button className="filter-button-btn">Lọc</button>
            </div>
            </div>
            </div>
            

      </div>
    );
  }
  
  export default TicketForControl;
  
