import "./App.css";
import { useState, useEffect } from "react";
import Leftside from "./components/Leftside/Leftside";
import Rightside from "./components/Rightside/Rightside";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:flex bg-slate-200">
      <Leftside data={data}></Leftside>
      <Rightside></Rightside>
    </div>
  );
}

export default App;
