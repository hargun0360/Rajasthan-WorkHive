import "./App.css"
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
import { Routes, Route } from 'react-router-dom'
import Workerside from "./workerside/Workerside";
import Places from "./Pages/Places";
import Store_detail from "./Pages/Store_detail";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/" element={
          <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
          <Categories />
        </div>
        } />
        <Route exact path="/workerdash" element={
          <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
          <Workerside />
        </div>
        } />
        <Route exact path="/place" element={
          <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
          <Places />
        </div>
        } />
        <Route exact path="/detail" element={
          <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
          <Store_detail />
        </div>
        } />
      </Routes>
    </div>
  );
      
}

export default App;
