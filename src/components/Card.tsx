import { Link } from "react-router-dom";


const Card = ({ path, className, title, text, icon }: { path: string; className?: string; title: string; text: string, icon:React.ReactNode}) => {
  return (
      <div className={`max-lg:h-[300px]  relative duration-200 w-full md:w-[80%] md:mx-auto lg:w-1/4 h-full text-[var(--primary-color)] hover:text-white hover:bg-[var(--primary-color)] ${className}`}>
      <Link className="group p-4 h-full flex flex-col justify-center items-center text-center" to={path}>
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