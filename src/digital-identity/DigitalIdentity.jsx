import React from 'react'
import './DigitalIdentity.scss';
import { MdArrowBackIos } from "react-icons/md";

export default function DigitalIdentity() {
  return (
    <div className='common_container'>
        <div className='button_close_container'><MdArrowBackIos className='common_button_close'/></div>
        <h1 className='common_title'>
            Self-Sovereign Identity AKA <br/>Enhanced Digital Identity
        </h1>
        <h4 className="common_content">
        An SSI (Self-Sovereign Identity) wallet is a digital tool used to manage and control personal identity data in a decentralized manner, 
        empowering individuals to own and control their digital identities without reliance on central authorities. In other words, you own your 
        data and any access to it needs your permission. 
        </h4>

        <h1 className='common_subtitle mt'>Decentralization, Privacy, Selective Disclosure, and Consent</h1>
        <h4 className='common_content'>
        SSI wallets are part of a decentralized identity framework, often built on blockchain or distributed ledger technology (DLT). 
        This setup enhances privacy and security by reducing the risk of a single point of failure or data breaches in centralized databases.
        </h4>

        <h4 className='common_content'>
        Users can control which pieces of their identity information are shared with specific parties, granting or revoking access as needed. 
        This selective disclosure enables privacy by limiting the amount of personal information exposed to others.
        </h4>

        <h4 className='common_content'>
        Overall, an SSI wallet represents a shift toward user-centric identity management, promoting greater autonomy, privacy, and security 
        in digital interactions.
        </h4>

        {/* <button className='common_button'>Join us</button> */}
    </div>
  )
}
