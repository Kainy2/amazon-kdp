import React from 'react'
import Button from './Button'
import {Heading} from './Heading'
import Text from './Text'
import undrawServices from '../Assets/undraw_services.svg'


const Hero = () => {
  return (
    <>

       <section id='hero' className='flex h-[70vh] items-center my-auto text-gray-200 bg-zinc-800'>
        <div className='h-1/2 w-full items-center flex md:justify-between space-y-20  border border-white  overflow-hidden md:border-none'>
          <div id='flex-section' className='md:w-1/2'>
            <div id='items' className='w-10/12 mx-auto text-center'>
              <Heading> ROADMAP TO MAKING $500 - $3K MONTHLY INCOME PLAN </Heading>
            </div>
              <Button>Get Started</Button> 
          </div>
          <div className='items-center hidden md:block flex-1'>
            <img className='h-[50vh]' src={undrawServices} alt="services" />
          </div>
        </div>
              {/* <Text>In A Situation Where Naira Keeps Dropping and Our Daily Cost of Living Keeps Increasing…

                Here is How Informed Nigerians Are Legally Making as much as $3k a month using this simple money-making Technique called...
                <br />
                <br />
               About “Amazon Kindle Direct Publishing”

              </Text> */}
      </section>
    </>
  )
}

export default Hero