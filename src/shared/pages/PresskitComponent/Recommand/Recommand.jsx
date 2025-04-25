import React from 'react';
import Google_logo from '../../../../assets/Google_for_Startups-white.png'
import Jfflab from '../../../../assets/JFFLABSwhite.png'
import seedstars from '../../../../assets/seedstars-white.png'
import hyperledger from '../../../../assets/Hyperledger_Logo_NoTagFinal.png'
import'../../../css/Recomand.css'

const Recommand = () => {
    return (
        <div className='rec_Container'>
            <div className='Recomand_text'>
                <h2>Recommended By</h2>
                <p>
                Our Partners trust our software and the mission to build a more secure, private, and decentralized ecosystem, empowering individuals, businesses, and educational institutions worldwide through transformational blockchain technology
                </p>
            </div>
            <div className='List_logos'>

            <div className='Company_logos'  ><img src={require("../../../../assets/Google_for_Startups-white.png")} alt="alt text"  className="logos_footer"/></div>
                <div className='Company_logos' >

                <img src={require("../../../../assets/JFFLABSwhite.png")} alt="alt text"  className="logos_footer"/>
               
                </div>
                <div className='Company_logos'>
               
                <img src={require("../../../../assets/seedstars-white.png")} alt="alt text"  className="logos_footer"/>
                
                </div>
                <div className='Company_logos'  ><img src={require("../../../../assets/Hyperledger_Logo_NoTagFinal.png")} alt="alt text"  className="logos_footer"/></div>
                
            </div>
        
        </div>
    );
};

export default Recommand;