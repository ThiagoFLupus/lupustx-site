import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppBase from "./appBase/AppBase";
import { setSizeWindow } from "../src/store/general/general.action";
import './App.css';

function App() {
  const sizeWindowDispatch= useDispatch();

  const onResizeWindow= ()=> {
    sizeWindowDispatch(setSizeWindow());
  };

  useEffect(()=> {
    window.addEventListener('resize', onResizeWindow)
    return _ => {
      window.removeEventListener('resize', onResizeWindow)
    }
  });

  return (
    <div className="App">
      <AppBase />
    </div>
  );
}

export default App;
