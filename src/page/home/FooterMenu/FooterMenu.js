import logo from './WhiteLogo.png'
function FooterMenu() {
    return ( 
        <div className="flex bg-gray-800 min-h-16 items-center justify-evenly">
            <img src={logo} className="max-h-14 m-6"></img>
            <div className='text-white'>
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </div>
     );
}

export default FooterMenu;