// import Button from "./Button";


interface Props {
  children?: any;
  className?: string
}
const Footer: React.FC<Props> = ({children, className, ...props}) => {

    return (
        <div>
            <div className="flex w-full  mt-32 justify-evenly items-center font-header text-slate-200 py-10 bg-priBg">
                <div className="text-xl">
                    Book a call with us now
                </div>
                <div id='contact-us' className=''>
                    <div className='w-max bg-gray-300 px-2'>
                        {/* <Phone sx={{ color: 'black' }} />
                        <Button href="tel:+2348148090531"> Call Now </Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer