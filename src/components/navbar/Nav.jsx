import React from 'react'
import './nav.css';
const Nav = (props) => {
    const {setVisible,visible} = props;
  return (
    <>
        <div className="navbar">
            <button 
            onClick={
                ()=> {
                    setVisible(v=>!v);
                }
            }
            >{visible ? 'true': 'false'}</button>
        </div>
    </>
  )
}

export default Nav