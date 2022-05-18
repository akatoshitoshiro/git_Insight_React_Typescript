import React from 'react';
import ReactDOM from 'react-dom/client';
import Notify from './Components/Layout/Components/Notify/Notify';
import SearchBar from './Components/Layout/Components/SearchBar/SearchBar';
import Nav from './Components/Nav/Nav';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav/>
    <SearchBar/>
    <Notify/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
