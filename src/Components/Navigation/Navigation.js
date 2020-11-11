import React from 'react'


const Navigation=({onRouteChange,issigned})=>{
        if(issigned){
            return(
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick={()=>onRouteChange('signout')}className='f3 link grow blank  underline pa3 pointer ba ;'>Sign Out</p>
                </nav>
            )  
        }else { return (
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signin')}className='f3 link grow blank  underline pa3 pointer ba ;'>Sign In</p>
            <p onClick={()=>onRouteChange('register')}className='f3 link grow blank  underline pa3 pointer ba ;'>Register</p>
            </nav>
           
        );
        }
       
}


export default Navigation;