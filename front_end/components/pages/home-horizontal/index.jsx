import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const EdinaHorizontal = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
    document.querySelector("body").classList.add("theme-dark");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${isDark ? "active" : ""
          }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              I build cross-platform mobile apps using Flutter.
            </p>
            <p>
              From UI to backend, I deliver smooth, scalable digital products.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              Each project below reflects my hands-on experience in mobile app development using Flutter and other modern technologies. From UI to deployment, I aim to build products that are both useful and beautifully crafted.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      {
        //   <div className="edina_tm_testimonials" id="testimonial">
        //   <div className="container">
        //     <div className="edina_tm_title">
        //       <h3>Testimonials</h3>
        //       <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //         ipsum sit nibh amet egestas tellus.
        //       </p>
        //     </div>
        //     {/* End edian_tm_title */}
        //     <div className="list ">
        //       <ul>
        //         <Testimonial />
        //       </ul>
        //     </div>
        //   </div>
        // </div>
      }
      {/* End Testimonial */}

      {
        //   <div className="edina_tm_news" id="blog">
        //   <div className="container">
        //     <div className="edina_tm_title">
        //       <h3>Blog</h3>
        //       <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        //         ipsum sit nibh amet egestas tellus.
        //       </p>
        //     </div>
        //     {/* End edian_tm_title */}
        //     <Blog />
        //   </div>
        // </div>
      }
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          {
            //   <div className="mainpart">
            //   <div
            //     className="left"
            //     data-aos="fade-right"
            //     data-aos-duration="1200"
            //     data-aos-delay="300"
            //   >
            //     <div className="title">
            //       <p>
            //         I am always open to discussing product
            //         <br />
            //         <span> design work or partnerships.</span>
            //       </p>
            //     </div>
            //     {/* End title */}
            //     <div className="fields">
            //       <Contact />
            //     </div>
            //     {/* End Contact Form */}
            //   </div>
            //   <div
            //     className="right"
            //     data-aos="fade-right"
            //     data-aos-duration="1200"
            //     data-aos-delay="400"
            //   >
            //     <Map />
            //   </div>
            //   {/* End Map */}
            // </div>
          }
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default EdinaHorizontal;
