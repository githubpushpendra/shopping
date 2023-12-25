'use client'

import React, { useState } from 'react'
import './styles/headercss.css'
import Navebar from './Navebar'
import wlogo from '../../public/images/wheellogo.svg'
import Image from 'next/image'
import logo from '../../public/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHamburger, faHammer, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';



export default function Header() {

  const [lang, setLang] = useState("ENG")

  return (
    <div className="header">
      <div className='header-bar'>
      Limited time offer
      </div>
      <div className='header-main'> 
        <div className='wlogo'>
          <Image
            src={wlogo}
            alt='Logo'
            width={30}
            height={30}
            priority
          />
        </div>
        <div className='tlogo'>
          SHOPIE
          {/* <Image
            src={logo}
            alt='Logo'
            width={100}
            height={50}
            priority
          /> */}
        </div>
        <div className='list'>
          <ul className='list-list'>
            <li><FontAwesomeIcon icon={faSearch} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faHeart} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faBagShopping} className='hm-icon' /></li>
            <li className='hm-icon-sc'><FontAwesomeIcon icon={faUser} className='hm-icon' /></li>
            <li className='hm-icon-sc'>
              <div className="dropdown">
              <button className="dropbtn"> {lang} </button>
                <div className="dropdown-content">
                  <a href="#" onClick={()=>setLang("ENG")}>ENG</a>
                  <a href="#" onClick={()=>setLang("HINDI")}>HINDI</a>
                  <a href="#" onClick={()=>setLang("FRENCH")}>FRENCH</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>   
      <Navebar />   
    </div>
  )
}
