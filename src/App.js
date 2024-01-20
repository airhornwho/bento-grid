import "./App.css";
import { useState } from 'react';
import { useTransition, animated } from "react-spring";

import {Home, Nav} from './components';

function App() {
  const [visible, setVisible] = useState(true);
  const transition = useTransition(visible, {
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0},

  });
  return (
    <>
      <div className="bg"></div>
      <Nav setVisible={setVisible} visible ={visible}/>
        <>
          {/* {visible ? <Home/>:''} */}
          {transition((style,item) => {
            return item ? <animated.div style={style}><Home/></animated.div> : ''
          })}
        </>
      
    </>
  );
}

export default App;
