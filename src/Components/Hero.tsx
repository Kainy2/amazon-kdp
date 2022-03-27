import React from 'react'
import Button from './Button'
import Heading from './Heading'
import Text from './Text'
import undrawServices from '../Assets/undraw_services.svg'


const Hero = () => {
  return (
    <div>
       <section id='hero' className='flex h-[70vh] items-center my-auto text-gray-200 bg-zinc-800'>
        <div className='h-1/2 w-full items-center flex md:justify-between space-y-20  border border-white md:border-none'>
          <div id='flex-section' className='md:w-1/2'>
            <div id='items' className='w-10/12 mx-auto text-center'>
              <Heading> Amazon KDP </Heading>
              <Text>What Do you want to know about the Amazon KDP.
                {/* What Do you want to think about the Amazon KDP. */}
              </Text>
              <Button>Get Started</Button>
            </div>
          </div>
          <div className='items-center hidden md:block flex-1'>
            <img className='h-[50vh]' src={undrawServices} alt="services" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero