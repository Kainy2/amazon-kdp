import React from 'react'

interface Props {
  children: any;
}
const Text = ({children}: Props) => {
  return (
    <div className='m-5 font-hind '>
      {children}
    </div>
  )
}

export default Text