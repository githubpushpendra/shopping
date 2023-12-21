import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navebar() {
  return (
    <div className='navbar'>
      <ul className='nv-list'>
        <li className='nv-list-item'>SHOP</li>
        <li>SKILLS</li>
        <li className='nv-list-item hm-icon-sc'>STORIES</li>
        <li className='nv-list-item hm-icon-sc'>ABOUT</li>
        <li className='nv-list-item hm-icon-sc'>CONTACT US</li>
      </ul>
    </div>
  )
}
