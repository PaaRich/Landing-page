import { Link } from "react-router-dom";


const Card = ({ className, title, text,icon }: { className?: string; title: string; text: string, icon:React.ReactNode}) => {
  return (
      <div className={` relative w-1/4 h-full ${className}`}>
      <Link className="group hover:text-white text-[var(--primary-color)] p-4 h-full flex flex-col justify-center items-center text-center" to="#">
                <div>
                  {icon}
                </div>
              <h1 className="text-2xl font-light mt-2 tracking-wide">{ title}</h1>
              <p className=" my-5 font-light tracking-wide">{ text}</p>
                <p className="group-hover:underline">Read more</p>
            </Link>
      </div>
  )
}

export default Card