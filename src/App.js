import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:flex  ">
      <div className="bg-orange-400 lg:w-9/12 ">
        <h1>Left Side</h1>
      </div>
      <div className="bg-purple-400 grow order-first lg:order-last">
        <h1>right side</h1>
      </div>
    </div>
  );
}

export default App;
