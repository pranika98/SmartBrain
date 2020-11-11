import React from 'react'
import './Facer.css'

const Facer=({imageUrl,box})=>{
    return(
        <div className='center ma'>
        <div className='absolute mt2'>
        <img id='input_image' alt='' src={imageUrl} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
 </div>

    );
}

export default Facer;