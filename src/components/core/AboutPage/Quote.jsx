import React from 'react'
import HighlightText from '../HomePage/HighlightText'
// import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const Quote = () => {
  return (
    <div className='font-semibold text-4xl w-fit'>
      {/* <RiDoubleQuotesL /> */}
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <HighlightText text={"combines technology,"}/>
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <p  className='bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold'>
      {" "}
        unparalleled educational experience.
      </p>
      {/* <RiDoubleQuotesR /> */}
    </div>
  )
}

export default Quote
