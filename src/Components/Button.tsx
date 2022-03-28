import React from 'react'

interface Props {
  children: any;
  className?: string; 
  href?: string; 
}
const Button : React.FC<Props> = ({children, className, ...props}: Props) => {  return (
    <div className={` ${className} bg-orange-600 hover:bg-orange-500 active:bg-orange-400 transition-colors py-3 px-8 rounded w-max mx-auto m-2 text-gray-100 cursor-pointer`}>
      {children}
    </div>
  )
}

export default Button