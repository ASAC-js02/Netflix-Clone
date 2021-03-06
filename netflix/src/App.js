
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FavMovie from "./components/FavList";


function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<FavMovie />} />
      </Routes>
    </>
  );
}

export default App;