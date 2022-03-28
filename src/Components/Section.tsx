import React from 'react'

interface Props {
  children: any;
  className?: string
}
const Section: React.FC<Props> = ({children, className, ...props}) => {
  return (
    <div className={`${className} py-20 px-[5%] md:px-[10%] md:flex flex-row-reverse`} {...props}>
      {children}
    </div>
  )
}

export default Section