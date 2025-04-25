import React from 'react';
import Bg_Term from "../../assets/bg_home.PNG";
import "../css/Term_Service.css"
const Privacy_term = () => {
    return (
        <div  className='ifram_wrapper' style={{  
            backgroundImage:`url(${Bg_Term})`,
            backgroundPosition: 'full',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            flexWrap:'wrap',
            margin:'center',
            with:'100%',
            height:'544px'}}>
                <div className='text_container'>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vRAfB6tWSDtSMVHOpWV0wVdij9Q97cGEB1UixoifL8PKn81Jm6p5XE74Ws-3RWZx_ZLMzWa7mOwiuuD/pub?embedded=true"></iframe>
                </div>
        
        </div>
    );
};

export default Privacy_term;