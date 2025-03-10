

const AboutCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
      <div className="lg:w-[50%] h-full p-4">
          <div className="flex items-center justify-center w-full h-full">
              <div>
                   <div className='flex items-center w-full'>
                <div className='circle relative w-[25px] h-[25px] text-[var(--primary-color)] rounded-full border-2 border-[var(--primary-color)]'>
                    <p className='w-full h-full flex items-center justify-center text-xs p-2'>{ number}</p>
                </div>
                <h1 className='font-semibold text-xl text-[var(--primary-color)] ml-10 tracking-wider'>{ title}</h1>
            </div>
              <p className='ml-16 font-light tracking-wider mt-5'>{description}</p> 
              </div>
           
        </div>  
    </div>
  )
}

export default AboutCard