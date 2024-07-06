import image from './image.png'
import ReferralModal from './Modal/Modal';
import { useState } from 'react';

function Refer() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(true);
    }

    return (
        <div className="bg-neutral-50"> 
            <div className="flex flex-row justify-center pb-3">
                <div className="flex flex-row rounded-full mt-5 bg-sky-100 gap-4 px-14 py-2 gap-8 ">
                    <div className="text-blue-500 cursor-pointer" >Refer</div>
                    <div className='cursor-pointer'>Benefits</div>
                    <div className='cursor-pointer'>FAQs</div>
                    <div  className='cursor-pointer'>Support</div>
                </div>
            </div>
            <div className="flex flex-row justify-center pb-8">
                <div className="flex flex-row items-center bg-white drop-shadow-xl rounded-md h-96 ">
                    <div className=' flex flex-col gap-6 m-6'>
                        <div className='text-5xl font-semibold'>
                            Lets Learn &<br /> Earn
                        </div>
                        <div className='text-2xl'>
                            Get a chance to win up to <br />Rs. 15,000
                        </div>
                        <button className='bg-blue-500 p-1 max-w-24 rounded-lg text-white' onClick={handleClick}>
                            Refer Now
                        </button>
                    </div>
                    <img src={image} alt="Refer" className='h-full'>
                    </img>
                </div>
            </div>
            <ReferralModal isOpen={isOpen} setIsOpen={setIsOpen}/>

        </div>
     );
}

export default Refer;