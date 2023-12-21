import React from 'react'
import './styles/card.css'

export default function Card(props) {
  const img = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // const heading = "PPXOC Milkyway dress in pressed flowers"
  const heading = "PPXOC Milkyway dress in "
  return (
    <div className='card'>
      <div className='imgbox'>
        <img src={props.image} alt='Product Image' className='product-image'></img>
      </div>
      <div className='product-desc'>
        <div className='card-title'>
          <h3> {props.title} </h3>
        </div>
        <div className='text'> 
        <a className='link'>Sign in</a>&nbsp;or&nbsp;
        <a className='link'>Create</a> an account to see pricing </div>
      </div>
    </div>
  )
}
