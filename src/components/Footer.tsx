// import logo from '../assets/dummy-logo-5b.png';
import { FaXTwitter, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center bg-[whitesmoke] py-20 pb-10">
        <div className="my-5">
          <h1 className="font-bold text-3xl">FarmGhana</h1>
        </div>
        <div>
          <button
            data-aos="fade-up"
            data-aos-duration="1100"
            className="rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-3 px-8 hover:text-white hover:border-[var(--primary-color)]  duration-200 hover:bg-[var(--primary-color)] cursor-pointer"
          >
            <a href="tel">Contact us</a>
          </button>
        </div>

        <div className="opacity-50 text-center my-10 tracking-wide">
          <p>
            Call Us:{" "}
            <a className="hover:underline hover:text-[var(--primary-color)]" href="tel">
              +233 54 66 84004
            </a>
          </p>
          <p>Ghana, Brong Region, Sunyani Area 3</p>
        </div>

        {/* icons */}
        <div className="flex space-x-4 mb-10">
          <Link to={"https://twitter.com/farmghana"}>
            <FaXTwitter className="hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200" />
          </Link>
          <Link to={"https://www.linkedin.com/company/farmghana/"}>
            <FaLinkedin className="hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200" />
          </Link>
          <Link to={"https://www.facebook.com/farmghana"}>
            <FaFacebookF className="hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200 " />
          </Link>
          <Link to={"https://www.instagram.com/farmghana/"}>
            <FaInstagram className="hover:scale-125 text-[var(--primary-color)] text-2xl cursor-pointer hover:text-[var(--primary-color)] duration-200" />
          </Link>
        </div>
        <div className="text-center  opacity-60 tracking-wide">
          <p>&copy; 2025 FarmGhana. All rights reserved.</p>
          <p>Proudly developed by CtrlTech</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
