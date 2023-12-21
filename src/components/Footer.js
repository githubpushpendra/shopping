import React from 'react'
import './styles/Footer.css'
import LFooter from './LFooter'
import UFooter from './UFooter'


export default function Footer() {
  return (
    <div className='footer'>

      <UFooter />
      <LFooter />

      <div
      style={{
        textAlign:"center",
        verticalAlign:"bottom",
        height:"17px",
        bottom:"25px",
        fonFamily: 'Simplon Norm',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "17px",
        color: "white",

      }}
      >Copyright © 2023 mettamuse. All rights reserved.</div>
      
    </div>
  )
}

