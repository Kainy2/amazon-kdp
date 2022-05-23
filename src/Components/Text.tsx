import React from 'react'

interface Props {
  children: any;
  className?: string
}
const Text: React.FC<Props> = ({children, className, ...props}) => {
  return (
    <div className={`${className} m-5 font-hind`} {...props}>
      {children}
    </div>
  )
}

export default Text