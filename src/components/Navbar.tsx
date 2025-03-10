import { useState } from 'react';
import Logo from '../assets/dummy-logo-5b.png';
import Button from './Button';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen,setIsOpen]=useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className='flex max-sm:flex-col items-center justify-between max-w-[90%] mx-auto'>
            <div className='flex items-center justify-between max-sm:w-full z-50'>
                        {/* logo  */}
                <div>
                    <a className="block" href={"/"}><img className='w-[150px]' src={Logo} alt="logo" /></a>
                </div>

                  {/* menu */}
          <div onClick={() => setIsOpen(!isOpen)} className='md:hidden cursor-pointer'>
            {isOpen ?<IoMdClose size={50}/>  :<HiMenuAlt3 size={50} />}
                     
                  </div>
            </div>
        

        {/* links */}
        <div className={`${isOpen?" isOpen":" isClose "} bg-white  duration-200 `}>
          <ul className='flex max-lg:flex-col items-center justify-between lg:space-x-10'>
            <li><a href={"#hero"}>Home</a></li>
            <li><a href={"#about"}>About us</a></li>
            <li className='services relative' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <p className='cursor-pointer'>Services</p>
              {isDropdownOpen && (
                <ul className='dropdown max-md:relative absolute top-[110%] shadow bg-[whitesmoke] p-4 rounded-b-2xl text-nowrap'>
                  <li><a href="">E-commerce</a></li>
                  <li><a href="">Training</a></li>
                  <li><a href="">Media</a></li>
                  <li><a href="">Idea Bank</a></li>
                </ul>
              )}
            </li>
            <li><a href={"#contact"}>Contact</a></li>
          </ul>
        </div>

        {/* button */}
        <Button className='hover:opacity-80 text-white max-md:hidden' width='medium' color='--primary-color' text='Get in touch' />
      </div>
    </nav>
  );
}

export default Navbar;