import "./App.css";
import { useState, useEffect } from "react";
import Leftside from "./components/Leftside/Leftside";
import Rightside from "./components/Rightside/Rightside";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = (data) => {
    setCount(count + data.time);
  };
  console.log(count);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:flex bg-slate-200">
      <Leftside handleClick={handleClick} data={data}></Leftside>
      <Rightside count={count}></Rightside>
    </div>
  );
}

export default App;
