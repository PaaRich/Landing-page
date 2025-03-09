import Button from "./Button";
import Card from "./Card";
import { BsCart4 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Heroheader = () => {
  return (
      <div className="hero_header text-white relative w-full h-[130vh]">
          <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-bold text-5xl text-nowrap">Empowering you with All in One...</h1>
            <p className="tracking-wider opacity-80 my-5">"We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow. Our goal is to empower you with the tools and skills needed for success in the digital world." </p>
            <div className="flex justify-center space-x-5">
              <Button text="About Us"  className="border-2 border-white"/>
              <Button text="Get in Touch" color="white" className="text-[var(--primary-color)] hover:opacity-80"/>
            </div>
      </div>

      {/* cards */}
      <div className="text-black absolute top-[85%] left-1/2 -translate-x-1/2 w-[90%]  h-[300px] bg-white shadow-xl">
        <div className="flex items-center justify-between h-full w-full">
          <Card icon={<BsCart4 size={50}/>} className="card" title="E-commerce" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
          <Card icon={<IoSchoolOutline size={50}/>} className="card" title="Training" text="Our goal is to empower you with the tools and skills needed for success in the digital world."/>
          <Card icon={<MdLiveTv size={50}/>} className="card" title="Media" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
          <Card icon={<GiGiftOfKnowledge size={50}/> } className="card" title="Idea Bank" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
        </div>
      </div>
    </div>
  )
}

export default Heroheader