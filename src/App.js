import "./App.css"
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
import { Routes, Route } from 'react-router-dom'
import Workerside from "./workerside/Workerside";

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
      </Routes>
    </div>
  );
      
}

export default App;
