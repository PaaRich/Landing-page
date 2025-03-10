// import logo from '../assets/dummy-logo-5b.png';
import { FaXTwitter, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="contact">
      <div className='flex flex-col items-center justify-center pb-4 bg-[whitesmoke]'>
        <div className="my-5">
          <h1 className='font-bold text-3xl'>FarmGhana</h1>
        </div>
        <div>
          <button data-aos="fade-up" data-aos-duration="1100" className='rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] p-3 hover:text-white hover:border-[var(--primary-color)] w-[150px] duration-200 hover:bg-[var(--primary-color)] cursor-pointer'>
            <a href="tel">Contact us</a>
          </button>
        </div>

        <div className='opacity-50 text-center my-10 tracking-wide'>
          <p>Call Us: <a className='hover:underline hover:text-[var(--primary-color)]' href="tel">+233 54 66 84004</a></p>
          <p>Ghana, Brong Region, Sunyani Area 3</p>
        </div>

        {/* icons */}
        <div className='flex space-x-4 mb-10'>
          <FaXTwitter className='hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200' />
          <FaLinkedin className='hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200' />
          <FaFacebookF className='hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200 ' />
          <FaInstagram className='hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200' />
        </div>
        <div className='text-center  opacity-60 tracking-wide'>
          <p>&copy; 2025 FarmGhana. All rights reserved.</p>
          <p>Proudly developed by CtrlTech</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;