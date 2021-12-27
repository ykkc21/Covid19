import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/index.css";
import Main from "./routes/Main";
import Korea from "./routes/Korea";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Korea" element={<Korea />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
