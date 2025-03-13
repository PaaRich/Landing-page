import Card from "./Card"
import { BsCart4 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { GiGiftOfKnowledge } from "react-icons/gi";
const Services = () => {
  return (
      <section id="services" className="lg:hidden">
          <h1 className="header text-center font-semibold my-10 text-3xl md:text-5xl tracking-wide">Services</h1>
          <div className="flex flex-col items-center justify-center gap-8">
        <Card path="https://farmghana-ecommerce.onrender.com/"
          icon={<BsCart4 size={50} />}
          className="card" title="E-commerce"
          text="We provide a seamless online shopping experience,affordable prices. Enjoy fast delivery, easy ordering, and excellent customer support. Shop with confidence today!" />
        <Card path="#" icon={<IoSchoolOutline size={50} />}
          className="card"
          title="Training"
          text="Gain hands-on skills with our expert-led vocational training programs. From technical trades to business skills, we equip you with practical knowledge for a successful career. " />
            <Card path="#" icon={<MdLiveTv size={50}/>} className="card" title="Media" text="We offer high-quality live streaming and broadcasting services for events, conferences, and special programs. Engage your viewers like never before!"/>
        <Card path="#" icon={<GiGiftOfKnowledge size={50} />} className="card" title="Idea Bank"
          text="Join our engaging podcast where ideas, insights, and experiences are shared. We discuss business, technology, personal growth, and more—bringing you fresh perspectives from experts and thought leaders. " />
          </div>
    </section>
  )
}

export default Services