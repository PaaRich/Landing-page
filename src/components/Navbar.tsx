import Logo from '../assets/dummy-logo-5b.png';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  return (
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className='flex items-center justify-between max-w-[90%] mx-auto'>
                 {/* logo  */}
                    <div>
                        <NavLink className="block" to={"/"}><img className='w-[150px]' src={Logo} alt="logo" /></NavLink>
                    </div>

                    {/* links */}
                    <div>
                        <ul className='flex items-center justify-between space-x-10'>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/about-us"}>About us</NavLink></li>
                            <li><NavLink to={"/services"}>Services</NavLink></li>
                            <li><NavLink to={"/contact"}>Contact</NavLink></li>
                        </ul>
                    </div>

              {/* button */}
              <Button className='hover:opacity-80 text-white' width='medium' color='--primary-color' text='Get in touch'/>
          </div>  
    </nav>
  )
}

export default Navbar