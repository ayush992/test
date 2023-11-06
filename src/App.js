import "./App.css";
import Capitalize from "./components/Capitalize";
import Navbar from "./components/Navbar";
import Themebtn from "./components/Themebtn";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
              <Capitalize />
            </div>
            <Themebtn />
        </>
    );
}

export default App;
