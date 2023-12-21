import React from 'react'
import './styles/Footer.css'

export default function UFooter() {
  return (
    <div className='ufooter'>
      <table>
        <tbody>
          <tr>
    
            <td>
              <h3>BE THE FIRST TO KNOW</h3>
              <div className='text'>Sign up for updates from mettā muse.</div>
              <input></input>
              <button type="sub-button" value={"Enter your email..."} >
                SUBSCRIBE
              </button>
            </td>

            <td>
              <h3>CONTACT US</h3>
              <div className='text'>+44 221 133 5360</div>
              <div className='text'>customercare@mettamuse.com</div>
              <h3>CURRENCY</h3>
              <div>

                <h3>USD</h3>
              </div>
              <div className='uf-desc'>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}
