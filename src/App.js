import "./App.css";
import { useState, useEffect } from "react";
import Leftside from "./components/Leftside/Leftside";
import Rightside from "./components/Rightside/Rightside";

function App() {
  const [data, setData] = useState([]);

  const handleClick = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:flex bg-slate-200">
      <Leftside handleClick={handleClick} data={data}></Leftside>
      <Rightside></Rightside>
    </div>
  );
}

export default App;
