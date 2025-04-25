import React from 'react';
import Bg_Term from "../../assets/bg_home.PNG";
import "../css/Term_Service.css"
const Term_Services = () => {
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
                <iframe src="Grav.id - Terms of Use (Official).html"></iframe>

                </div>
        
        </div>
    );
};

export default Term_Services;