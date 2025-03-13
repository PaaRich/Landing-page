
const Card = ({
  path,
  className,
  title,
  text,
  icon,
}: {
  path: string;
  className?: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={` max-lg:h-fit  relative duration-200 w-full md:w-[80%] md:mx-auto lg:w-1/4 lg:h-full text-[var(--primary-color)] hover:text-white hover:bg-[var(--primary-color)] ${className}`}
    >
      <div className="group p-4 flex flex-col justify-center items-center text-center py-10">
        <div>{icon}</div>
        <h1 className="text-2xl font-light mt-2 tracking-wide">{title}</h1>
        <p className=" my-5 font-light tracking-wide">{text}</p>
        <a className="cursor-pointer border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-3 px-8 group-hover:text-white group-hover:border-white duration-200 group-hover:bg-[var(--primary-color)]" href={path} target="_blank">
          View Service
        </a>
      </div>
    </div>
  );
};

export default Card;
