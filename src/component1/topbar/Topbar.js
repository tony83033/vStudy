import React from 'react';
import './topbar.css';

export default function Topbar(props) {
  return (
         <div className='right'>
        {/* <Menu click={handleClick}/> */}
        <div className='menu-icon'>
          <a onClick={()=>props.Setbar(!props.bar)}>
            {props.bar ? <i class="fa-solid fa-bars fa-2x" ></i> : <i class="fa-solid fa-xmark fa-2x"></i>}
          </a>
        </div>
        </div>
  )
}
