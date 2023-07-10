import React from 'react';
import './menu.css'

export default function Hamburger({bar,Setbar}) {
  return (
    <div  className={bar? 'menu' : 'active' }>
        <ul id='ham-ul'>
            <li>
                <a href='#intro'>Home</a>
            </li>
            <li>
                <a href='#portfolio'>Projects</a>
            </li>
            <li>
                <a href='#works'>Skills</a>
            </li>
            <li>
                <a href='#Contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
