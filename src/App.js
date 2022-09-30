import "./App.css";
import { useState, useEffect } from "react";
import Leftside from "./components/Leftside/Leftside";
import Rightside from "./components/Rightside/Rightside";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = (data) => {
    setCount(count + data.time);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="lg:flex bg-slate-200">
      <Leftside handleClick={handleClick} data={data}></Leftside>
      <Rightside count={count}></Rightside>
    </div>
  );
}

export default App;
