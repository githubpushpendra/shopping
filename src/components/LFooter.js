import React from 'react'
import './styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApplePay, faCcAmex, faGooglePay, faInstagram, faLinkedin, faPaypal } from '@fortawesome/free-brands-svg-icons'


export default function LFooter() {
  return (
    <div className='lfooter'>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>mettā muse</h3>
              <div className='text'>About Us</div>
              <div className='text'>Stories</div>
              <div className='text'>Artisans</div>
              <div className='text'>Boutiques</div>
              <div className='text'>Contact Us</div>
              <div className='text'>EU Compliances Docs</div>
            </td>
            <td>
              <h3>Quick Links</h3>
              <div className='text'>Orders & Shipping</div>
              <div className='text'>Join/Login as a Seller</div>
              <div className='text'>Payment & Pricing</div>
              <div className='text'>Return & Refunds</div>
              <div className='text'>FAQs</div>
              <div className='text'>Privacy Policy</div>
              <div className='text'>Terms & Conditions</div>
            </td>
            <td>
            <h3>Follow Us</h3>
            <div className='lf-icons'>
            <li><FontAwesomeIcon icon={faInstagram} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faLinkedin} className='hm-icon' /></li>
            </div>
            <h4>mettā muse Accepts</h4>
            <div className='lf-icons'>
            <li><FontAwesomeIcon icon={faGooglePay} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faPaypal} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faApplePay} className='hm-icon' /></li>
            <li><FontAwesomeIcon icon={faCcAmex} className='hm-icon' /></li>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


