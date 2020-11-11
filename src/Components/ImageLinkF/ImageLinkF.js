import React from 'react'
import './ImageLinkF.css'

const ImageLinkF=({onInputChange , onButtonsubmit})=>{
    return(
     <div>
         <p className='f3 avenir'>
             {'This butterfly will assist you to detect your image'}
              </p>
              <div className='center'>
                  <div className=' form center pa4 br3 shadow-5'>
                  <input className='f4 pa2 w-70 center ba'type = 'tex' onChange={onInputChange}/>
             <button className='w-30 grow f4 link ph3 dib ba bg-light-yellow'
             onClick={onButtonsubmit}>Detect</button> 
             </div>
              </div>
     </div>

    )
}

export default ImageLinkF;

/* API KEY - CLARIFYAI 0ff12b9efaf44817aa8d850536b0d7fd */