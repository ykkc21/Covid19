import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/index.css";
import Main from "./routes/Main";
import Korea from "./routes/Korea";
import World from "./routes/World";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Korea" element={<Korea />} />;
        <Route exact path="/World" element={<World />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
