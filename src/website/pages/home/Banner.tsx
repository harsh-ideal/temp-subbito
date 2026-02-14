import React from 'react'
import banner from "../../../assets/img/banr.png" 

const Banner:React.FC = () => {
  return (
    <div>
        <img src={banner} className='w-full h-full'/>
    </div>
  )
}

export default Banner