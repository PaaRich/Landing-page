import delivery from '../assets/delivery.jpg';
import training from '../assets/training.webp';
import news from "../assets/news.webp";
import meeting from "../assets/Meeting-Spaces-Hero.jpg";
import AboutCard from './AboutCard';

const About = () => {
  return (
    <>
      <section id="about">
            <div className="flex justify-between text-black relative max-lg:hidden">
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
                            description='Shop quality agricultural and household products with ease on FarmGhana! We connect buyers and sellers, offering fresh produce, groceries, and essential goods at competitive prices. Shop smart, shop FarmGhana! ' />
              </div>

              {/* training */}
              <div className="flex items-center justify-between w-full h-[350px] mb-5">
                        <AboutCard
                            number='2'
                            title='Lets train you'
                            description='Empower yourself with practical skills through FarmGhana’s vocational training programs! We offer hands-on training in agriculture, business, and technical trades to help individuals build successful careers! '/>
                        
                  <img data-aos="fade-right" className="w-[50%] h-full object-cover" src={training} alt="training" />
              </div>


              {/* media */}
              <div className="flex items-center justify-between w-full h-[350px] mb-5">
                  <img data-aos="fade-left" className="w-[50%] h-full object-cover" src={news} alt="news" />
                        <AboutCard
                            number='3'
                            title='Watch me'
                            description='Take your events and content to the next level with FarmGhana’s professional media services! We offer high-quality live streaming, event coverage, and broadcasting solutions to connect you with a wider audience. Elevate your media presence with FarmGhana'
                        />
              </div>


              {/* idea bank */}
              <div className="flex items-center justify-between w-full h-[350px]">
                        <AboutCard
                            number='4'
                            title='IdeaBank'
                            description='A platform where ideas spark innovation! The IdeaBank Podcast by FarmGhana brings together experts, entrepreneurs, and thought leaders to share insights on business, agriculture, technology, and personal growth. Let’s grow together!'
                        />
                   <img data-aos="fade-right" className="w-[50%] h-full object-cover" src={meeting} alt="meeting" />
              </div>

          </div>
        </div>
        
        {/* phone version */}
        <div className='max-w-[90%] mx-auto py-8 lg:hidden'>
          <div className='text-center'>
            <h1 className='header mb-5 text-3xl font-bold text-[var(--primary-color)]'>About us</h1>
          </div>

          <div>
                       <AboutCard
                            number='1'
                            title='ToBi'
                            description='Shop quality agricultural and household products with ease on FarmGhana! We connect buyers and sellers, offering fresh produce, groceries, and essential goods at competitive prices. Shop smart, shop FarmGhana! ' />
           <AboutCard
                            number='2'
                            title='Lets train you'
                            description='Empower yourself with practical skills through FarmGhana’s vocational training programs! We offer hands-on training in agriculture, business, and technical trades to help individuals build successful careers! '/>
             <AboutCard
                            number='3'
                            title='Watch me'
                            description='Take your events and content to the next level with FarmGhana’s professional media services! We offer high-quality live streaming, event coverage, and broadcasting solutions to connect you with a wider audience. Elevate your media presence with FarmGhana'
                        />
            <AboutCard
                            number='4'
                            title='IdeaBank'
                            description='A platform where ideas spark innovation! The IdeaBank Podcast by FarmGhana brings together experts, entrepreneurs, and thought leaders to share insights on business, agriculture, technology, and personal growth. Let’s grow together!'
                        />
          </div>
        </div>
      </section>
      
    </>
        
      
  )
}

export default About