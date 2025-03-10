// import Button from "./Button";
import Card from "./Card";
import { BsCart4 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { GiGiftOfKnowledge } from "react-icons/gi";
import Typed from "typed.js";
import { useEffect,useRef } from "react";

const LandingPage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Empowering you with All in One...','Empowering you with <p>E-commerce Solutions</p>','Empowering you with <p>Expert Training</p>','Empowering you with <p>Media Services</p>','Empowering you with All in One...'],
      typeSpeed: 30,
      smartBackspace: true,
      // backSpeed: 50,
      loop: false
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    }
  }, [])

  return (
      <section id="hero" className="hero_header text-white relative w-full h-dvh lg:h-[130vh] lg:mb-60">
          <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p ref={typedRef} className="font-bold max-lg:text-2xl lg:text-4xl lg:text-nowrap"/>
            <p className="tracking-wider opacity-80 mb-5 max-lg:text-lg">"We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow. Our goal is to empower you with the tools and skills needed for success in the digital world." </p>
            <div className="flex justify-center space-x-5">
                <button className='tracking-wide text-lg rounded-full  border-2 border-white text-white p-3 hover:text-white hover:border-[var(--primary-color)] w-[150px] duration-200 hover:bg-[var(--primary-color)] cursor-pointer'>
                  About us
                </button>
                <button className='rounded-full border-2 text-lg hover:border-white tracking-wide p-3 text-white border-[var(--primary-color)] w-[150px] duration-200 bg-[var(--primary-color)] cursor-pointer'>
                  Get in touch
                </button>
            </div>
      </div>

      {/* cards */}
      <div data-aos="fade-up" className="hidden lg:block text-black absolute top-[85%] left-1/2 -translate-x-1/2 w-[90%]  h-[300px] bg-white shadow-xl">
        <div className="flex items-center justify-between h-full w-full">
          <Card icon={<BsCart4 size={50}/>} className="card" title="E-commerce" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
          <Card icon={<IoSchoolOutline size={50}/>} className="card" title="Training" text="Our goal is to empower you with the tools and skills needed for success in the digital world."/>
          <Card icon={<MdLiveTv size={50}/>} className="card" title="Media" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
          <Card icon={<GiGiftOfKnowledge size={50}/> } className="card" title="Idea Bank" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
        </div>
      </div>
    </section>
  )
}

export default LandingPage