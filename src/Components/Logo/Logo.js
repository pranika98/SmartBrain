import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logopk from './buff2.png'

const Logo = () => {
return (
<div className='br100'>
<Tilt className="Tilt br-100 shadow-2" options={{ max : 68 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner pa3"> <img style={{paddingTop :'5px'}}alt={Logo} src={logopk} /></div>
</Tilt>
</div>
)
}


export default Logo;



 
