import React from 'react'

interface Props {
  children: any;
  className?: string;

}
export const Heading: React.FC<Props> = ({ children, className, ...props }) => {
  return(
    <h1 className='font-barlow text-4xl font-bold'>
      {children}
    </h1>
  )
}
export const H3: React.FC<Props> = ({ children, className, ...props }) => {
  return(
    <h3 className={` ${className} ${ !className?.includes('text-zinc-50') && 'text-orange-800' } font-barlow text-3xl mx-5 mb-14 capitalize  font-bold`}>
      {children}
    </h3>
  )
}

// export default Heading