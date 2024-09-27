import { Routes, Route } from "react-router-dom";
import Simplebutton from "./Simplebutton";
import Tick from "./Tick";

function Karmapro() {
  return (
    <div className="Smain">
        <div className="Smid">
      
        <Routes>
          <Route path="/*" element={<Simplebutton />} />
          <Route path="/tick" element={<Tick />} />
        </Routes>
      
    </div>
    </div>
  );
}

export default Karmapro;
