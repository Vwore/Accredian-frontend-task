import logo from './logo.png'
function TopBar() {
    return ( 
        <div className='flex flex-row justify-between p-5 bg-neutral-50'>
            <div className='flex flex-row gap-4 items-center ml-12'>
                <img className="h-12" src={logo}></img>
                <button className='rounded-lg bg-blue-600 p-2 text-white cursor-pointer '>Courses</button>
            </div>
            <div className='flex flex-row gap-4 items-center mr-10'>
                <div className='cursor-pointer'>Refer & Earn</div>
                <div className='cursor-pointer'>Resources</div>
                <div className='cursor-pointer'>About Us</div>
                <button className='rounded-lg bg-blue-600 p-2 text-white'>Login</button>
                <button className='rounded-lg bg-blue-600 p-2 text-white'>Try for free</button>
            </div>
        </div>
    );
}

export default TopBar;