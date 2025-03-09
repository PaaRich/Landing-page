import Logo from '../assets/dummy-logo-5b.png';
import Button from './Button';

const Navbar = () => {
  return (
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className='flex items-center justify-between max-w-[90%] mx-auto'>
                 {/* logo  */}
                    <div>
                        <a className="block" href={"/"}><img className='w-[150px]' src={Logo} alt="logo" /></a>
                    </div>

                    {/* links */}
                    <div>
                        <ul className='flex items-center justify-between space-x-10'>
                            <li><a href={"#hero"}>Home</a></li>
                            <li><a href={"#about"}>About us</a></li>
                            <li className=' services relative'>Services
                                <ul className='dropdown absolute top-full text-nowrap w-full px-4 bg-amber-300'>
                                    <li><a href="">E-commerce</a></li>
                                    <li><a href="">Training</a></li>
                                    <li><a href="">Media</a></li>
                                    <li><a href="">Idea Bank</a></li>
                                </ul>
                            </li>
                            <li><a href={"#contact"}>Contact</a></li>
                        </ul>
                    </div>

              {/* button */}
              <Button className='hover:opacity-80 text-white' width='medium' color='--primary-color' text='Get in touch'/>
          </div>  
    </nav>
  )
}

export default Navbar