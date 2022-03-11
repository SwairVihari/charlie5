import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Spanish from "./components/Spanish";

function App() {
  return (
    <BrowserRouter>

      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/spanish" element={<Spanish/>}/>
               
             
      </Routes>

    </BrowserRouter>
  );
}

export default App;
