import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Quang Nguyen",
  email: "quangnd.nta@gmail.com",
  emailRef: "mailto:quangnd.nta@gmail.com",
};

const HeaderHorizontal = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`horizontal-menu ${navbar ? "fixed-header" : ""}`}>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "edina_tm_sidebar  menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link href="/">
              <Image
                width={200}
                height={30}
                className="logo_light"
                src={logo}
                alt="brand"
              />
              <Image
                width={200}
                height={30}
                className="logo_dark"
                src={logo2}
                alt="brand"
              />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "portfolio",
                // "testimonial",
                // "blog",
                "contact",
              ]}
              activeNavClass="active"
              offset={-80}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <Image
                          width={18}
                          height={18}
                          className="svg custom"
                          src={`/img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/hero/1.jpg)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </div>
  );
};

export default HeaderHorizontal;
