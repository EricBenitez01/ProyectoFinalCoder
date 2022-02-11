import './App.css';
import ItemDetail from "./component/itemDetail/ItemDetail";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ItemList from "./component/itemList/ItemList";



function App() {
  return (
    <Router>
    <div className="App">
      <p className='header'>Peliculas Ghibli</p>
    </div>
    <Routes>
      <Route  path="/" element={<ItemList/>}  />
      <Route  path="/category/:id" element={<ItemList/>}  />
      <Route  path="/detail/:id" element={<ItemDetail/>}  />
    </Routes>
    </Router>
  );
};

export default App;
