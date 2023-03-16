import "./App.css"
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
function App() {
  return (
    <div className="App">
        <Navbar />
    <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
        <Categories />
        </div>
    </div>
  );
}

export default App;
