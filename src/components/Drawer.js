'use client'

import React, { useState, useRef, useEffect } from 'react';
import './styles/dropdownButton.css';

const DropdownButton = () => {


  return (
    <div className='drawer'>
      <div className='drawer-button'>
      {/* <label> */}
          <div className='customise'> IDEAL FOR </div>
          <i className="arrow down"></i>
          <div className='arrow-ele'></div>
        {/* </label> */}
      </div>
        

    </div>
  )

}

export default DropdownButton;
