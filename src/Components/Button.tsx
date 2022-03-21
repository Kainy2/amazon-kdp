import React from 'react'

interface Props {
  children: any;
}
const Button = ({children}: Props) => {  return (
    <button className='bg-orange-600 py-3 px-8 rounded w-max m-2 text-gray-100'>
      {children}
    </button>
  )
}

export default Button