import React from 'react';
import First_Grid from "../../../../assets/First_Grid.png";
import Second_Grid from "../../../../assets/Second_Grid.png";
import Third_Grid from "../../../../assets/Third_Grid.png";
import '../../../css/GridPressKit.css'
import'../../../css/Recommend.scss'

const Grid = () => {
    return (
        <div className='containers'>
            <div className='recommend_section'>
                <h2 className='rc_title'>Our Brand</h2>
                <p className='rc_subtitle'>
                Build a trusted community with the help of Grav.id which empowers individuals to build secure and trusted digital identities and foster meaningful connections within thriving online communities. 
                <br/>Our wallet offers the security of a self-custodial system, empowering users to store their data locally, manage membership, set up business accounts, provide enhanced services, and engage with meaningful communities
                -- all in one easy-to-use platform.
                </p>
            </div>
            
            <div className='group'>
                <div className='items'>
                    <div className='Grid_image' style={{  
                    backgroundImage:`url(${First_Grid})` ,
                    backgroundPosition: 'full',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    flexWrap:'wrap',
                    }}/>
                    <div className='Gridtext_description'>
                        <h3><b>Snag the Logo</b></h3>
                        <p>Download and use the Grav.id logos consistent with these guidelines.</p>
    
                    </div>
                </div>
    
                <div className='items'>
                    <div className='Grid_image' style={{  
                    backgroundImage:`url(${Second_Grid})` ,
                    backgroundPosition: 'full',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    flexWrap:'wrap',
                    }}/>
                    <div className='Gridtext_description'>
                        <h3><b>Imagine & Visualize</b></h3>
                        <p>Our style guide can help you understand how to use our assets appropriately.</p>
    
                    </div>
                </div>
    
                <div className='items'>
                    <div className='Grid_image' style={{  
                    backgroundImage:`url(${Third_Grid})` ,
                    backgroundPosition: 'full',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    flexWrap:'wrap',
                    }}/>
                    <div className='Gridtext_description'>
                        <h3><b>Absorb the Brochure</b></h3>
                        <p>Here are the solutions we came up for the challenges that businesses face.</p>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;
