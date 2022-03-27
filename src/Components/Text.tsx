import React from 'react'

interface Props {
  children: any,
  className?: string
  // ...props?: any,
}
const Text: React.FC<Props> = ({children, className, ...props}) => {
  return (
    <div className={`${className} m-5 font-hind`} {...props}>
      {children}
    </div>
  )
}

export default Text