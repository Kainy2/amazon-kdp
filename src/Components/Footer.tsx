import Button from "./Button";


interface Props {
    children?: any;
    className?: string
}
const Footer: React.FC<Props> = ( { children, className, ...props } ) => (
    <div className="flex flex-col w-full  mt-32  items-center justify-evenly font-header bg-zinc-700 text-orange-100 py-10 bg-priBg">
        <div className=" flex w-full items-center justify-evenly mb-10">
            <div className="text-xl font-semibold ">
                Book a call with us now
            </div>
            <div id='contact-us' className=''>
                <Button className=" text-zinc-100" href="tel:+2348148090531"> Call Now </Button>
            </div>
        </div>
        <div className='text-xs px-3 sm:w-[50%] '>
            Copyright 2022 - All rights reserved
            <br />
            <br />
            This site is not part of Amazon website or network sites such as Google or any of it's subsidiary companies. Additionally, this website is not endorsed by Amazon, Google or Meta in any way. Amazon is a trademark for it's respective companies, and so is Google and Meta.

            <div className="underline text-sm text-red-500 mt-10">Terms and Disclaimer || Privacy Policy</div>
        </div>
    </div>
)

export default Footer