import React from 'react'

interface Props {
  children: any;
}
const Heading = ({children}: Props) => {  return (
    <div className='font-barlow text-5xl font-bold'>
      {children}
    </div>
  )
}

export default Heading