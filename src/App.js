import "./App.css"
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
import WorkersInfo from "./Pages/WorkersInfo";
import Workerside from "./workerside/Workerside";

function App() {
  return (
    <div className="App">
        <Navbar />
    <div className="" style={{overflowX:"hidden"}}>
       <WorkersInfo />
        </div>
      </div>)
}

export default App;
