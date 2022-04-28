import React from 'react'

interface Props {
  children: any;
  className?: string;
  href?: string;
}
const Button: React.FC<Props> = ( { children, href, className, ...props }: Props ) => {
  return (
    <a href={ href } className={ ` ${ className } block bg-orange-600 hover:bg-orange-500 active:bg-orange-400 transition-colors py-3 px-8 rounded w-max mx-auto my-5 text-gray-100 cursor-pointer` }>
      { children }
    </a>
  )
}

export default Button