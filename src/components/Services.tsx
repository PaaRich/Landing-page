import Card from "./Card"
import { BsCart4 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { GiGiftOfKnowledge } from "react-icons/gi";
const Services = () => {
  return (
      <section id="services" className="lg:hidden">
          <h1 className="header text-center font-semibold my-10 text-3xl md:text-5xl tracking-wide">Services</h1>
          <div>
            <Card icon={<BsCart4 size={50}/>} className="card" title="E-commerce" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
            <Card icon={<IoSchoolOutline size={50}/>} className="card" title="Training" text="Our goal is to empower you with the tools and skills needed for success in the digital world."/>
            <Card icon={<MdLiveTv size={50}/>} className="card" title="Media" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
            <Card icon={<GiGiftOfKnowledge size={50}/> } className="card" title="Idea Bank" text="We provide top-notch e-commerce solutions, expert training, and media services to help businesses and individuals grow."/>
          </div>
    </section>
  )
}

export default Services