import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`container ${isOn ? "light-on" : "light-off"}`}>
      <div className="bulb">
        💡
      </div>

      <h1>{isOn ? "Light ON" : "Light OFF"}</h1>

      <button onClick={toggleLight}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default App;