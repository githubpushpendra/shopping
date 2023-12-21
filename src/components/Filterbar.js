"use client"

import React, { useState } from 'react'

import './styles/headercss.css'
import './styles/filterbar.css'

export default function Filterbar() {
  const [filter, setFilter] = useState()
  return (
    <div className='filterbar'>
      <div className='fb-detail'>
        <h4 id='f-head'>3425 ITEMS</h4>
        <div id='f-button'>HIDE FILTER</div>
      </div>
      <div className='fb-button'>
          <div className='fb-dropdown'>
            <div className="dropdown">
            <button className="dropbtn"> {filter} </button>
            <div className="dropdown-content">
              <a href="#" onClick={()=>setFilter("RECOMMENDED")}>RECOMMENDED</a>
              <a href="#" onClick={()=>setFilter("NEWEST FIRST")}>NEWEST FIRST</a>
              <a href="#" onClick={()=>setFilter("POPULAR")}>POPULAR</a>
              <a href="#" onClick={()=>setFilter("PRICE: HIGH TO LOW")}>PRICE: HIGH TO LOW</a>
              <a href="#" onClick={()=>setFilter("PRICE: LOW TO HIGH")}>PRICE: LOW TO HIGH</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
