import delivery from '../assets/delivery.jpg';
import training from '../assets/training.webp';
import news from "../assets/news.webp";
import meeting from "../assets/Meeting-Spaces-Hero.jpg";
import AboutCard from './AboutCard';

const About = () => {
    return (
        <section id="about">
            <div className="flex justify-between text-black relative">
          <div className="sticky top-0 left-0 h-dvh w-[40%] px-3 bg-[whitesmoke]">
              <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="font-semibold text-5xl text-[var(--primary-color)]">About us</h1>
                  <p className="text-[20px] opacity-70 font-light">FarmGhana offers a Standard Services</p>
              </div>
          </div>
           
          <div className="h-full w-[60%]">
              {/* e-commerce */}
              <div className="flex items-center justify-between w-full h-[350px] mb-5">
                  <img data-aos="fade-left"  className="w-[50%] h-full object-fill" src={delivery} alt="delivery" />
                        <AboutCard
                            number='1'
                            title='ToBi'
                            description='"Discover unbeatable deals and convenience with our online store! Shop from the comfort of your home and get fast, reliable delivery straight to your doorstep. Quality products, great prices—just a click away!"' />
              </div>

              {/* training */}
              <div className="flex items-center justify-between w-full h-[350px] mb-5">
                        <AboutCard
                            number='2'
                            title='Lets train you'
                            description='"Discover unbeatable deals and convenience with our online store! Shop from the comfort of your home and get fast, reliable delivery straight to your doorstep. Quality products, great prices—just a click away!"'/>
                        
                  <img data-aos="fade-right" className="w-[50%] h-full object-cover" src={training} alt="training" />
              </div>


              {/* media */}
              <div className="flex items-center justify-between w-full h-[350px] mb-5">
                  <img data-aos="fade-left" className="w-[50%] h-full object-cover" src={news} alt="news" />
                        <AboutCard
                            number='3'
                            title='Watch me'
                            description='"Discover unbeatable deals and convenience with our online store! Shop from the comfort of your home and get fast, reliable delivery straight to your doorstep. Quality products, great prices—just a click away!"'
                        />
              </div>


              {/* idea bank */}
              <div className="flex items-center justify-between w-full h-[350px]">
                        <AboutCard
                            number='4'
                            title='IdeaBank'
                            description='"Discover unbeatable deals and convenience with our online store! Shop from the comfort of your home and get fast, reliable delivery straight to your doorstep. Quality products, great prices—just a click away!"'
                        />
                   <img data-aos="fade-right" className="w-[50%] h-full object-cover" src={meeting} alt="meeting" />
              </div>

          </div>
            </div>
            
            {/* sponsors */}
            <div className='flex items-center justify-around w-full h-[200px] bg-gray-100'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
      </section>
      
  )
}

export default About