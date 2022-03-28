import Button from "./Button";


interface Props {
  children?: any;
  className?: string
}
const Footer: React.FC<Props> = ({children, className, ...props}) => (
    <div className="flex w-full  mt-32 justify-evenly items-center font-header bg-zinc-700 text-orange-100 py-10 bg-priBg">
        <div className="text-xl">
            Book a call with us now
        </div>
        <div id='contact-us' className=''>
            <Button className=" text-zinc-100" href="tel:+2348148090531"> Call Now </Button>
        </div>
    </div>
)

export default Footer