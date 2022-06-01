import {useEffect,useState} from "react"
import { SearchOutlined,FilterOutlined } from "@ant-design/icons";
import * as todo from"../../db/repositories/todo"
import"../ComponentsStyle/style.css"
import"./style/TicketManage.css"


function Manage() {
  const [todos, setTodos] = useState<Array<todo.Todo>>([]);
  useEffect(() => {
    fetchTodos();
}, []);
  const filterWindow = () =>{
  const element: HTMLElement = document.getElementById('background-black') as HTMLElement
  element.style.display = 'block'
}
  const filterData = () =>{
  const element: HTMLElement = document.getElementById('background-black') as HTMLElement
  element.style.display = 'none'

}
const fetchTodos = async () => {
  setTodos([]);
  const _todos = await todo.all();
  setTodos(_todos);
};

const checkStatus= document.getElementsByClassName('status-check');
for (let i=0; i < checkStatus.length; i++){
  if(checkStatus[i].innerHTML==='Chưa sử dụng')
  {
    checkStatus[i].classList.add('notUsed')
  }
  else if(checkStatus[i].innerHTML==='Đã sử dụng')
  {
    checkStatus[i].classList.add('used')
  }
  else if (checkStatus[i].innerHTML==='Hết hạn')
  {
    checkStatus[i].classList.add('expired')
  } 
}
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
        <button className="List-button" onClick={filterWindow}><FilterOutlined/> Lọc vé</button>
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
          <th className="left-align">Tình trạng sử dụng</th>
          <th className="right-align">Ngày sử dụng</th>
          <th className="right-align">Ngày xuất vé</th>
          <th className="right-align">Cổng check-in</th>
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
          <td className="center-align"key={index}>{index+1}</td>
          <td className="left-align">{todo.bookingCode}</td>
          <td className="left-align">{todo.ticketNumber}</td>
          <td className="left-align status-check">{todo.useStatus}</td>
          <td className="right-align">{todo.useDate}</td>
          <td className="right-align">{todo.outDate}</td>
          <td className="right-align">{todo.gateCheck}</td>
          </tr>
          ))}
          </tbody>
        </table>
        </div>
        <div  id="background-black">
                <form className="filter-container">
                    <h2>Lọc vé</h2>
                    <div className="filter-Date">
                        <div className="date1">
                            <h4>Từ ngày</h4>
                            <input type="date" />
                        </div>
                        <div className="date2">
                            <h4>Đến ngày</h4>
                            <input type="date" />
                        </div>
                    </div>
                    <h4 className="h4-status">Tình trạng sử dụng</h4>
                    <div className="filter-status">
                        <div className="item-input"><input type="radio" value={"Tất cả"}/>Tất cả</div>
                        <div className="item-input"><input type="radio" value={"Đã sử dụng"}/>Đã sử dụng</div>
                        <div className="item-input"><input type="radio" value={"Chưa sử dụng"}/>Chưa sử dụng</div>
                        <div className="item-input"><input type="radio" value={"Hết hạn"}/>Hết hạn</div>
                    </div>
                    <h4 className="h4-status">Cổng Check-in</h4>
                    <div className="filter-All">
                    <div className="filter-Gate">
                        <div className="item-checkbox"><input type="checkbox" value={"Tất cả"}/> Tất cả</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 3"}/> Cổng 3</div>             
                    </div>
                    <div className="filter-Gate1">
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 1"}/> Cổng 1</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 4"}/> Cổng 4</div>      
                    </div>
                    <div className="filter-Gate2">
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 2"}/> Cổng 2</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 5"}/> Cổng 5</div>
                    </div>
                    </div>
                    <button className="btn-filter1" onClick={filterData}>Lọc</button>
                </form>
                
            </div>
      </div>
      
      </div>
    );
  }
  
  export default Manage;
  
