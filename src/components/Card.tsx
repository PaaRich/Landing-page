import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Card = ({ className, title, text }: { className?: string; title: string; text: string }) => {
  return (
      <div className={`relative w-1/4 h-full ${className}`}>
      <Link className="hover:text-white text-[var(--primary-color)] w-full mx-auto h-full flex flex-col justify-center items-center text-center" to="#">
                <div>
                  <BsCart4 size={50}/>
                </div>
              <h1 className="text-2xl font-light mt-2 tracking-wide">{ title}</h1>
              <p className=" my-5 font-light tracking-wide">{ text}</p>
                <p>Read more</p>
            </Link>
      </div>
  )
}

export default Card