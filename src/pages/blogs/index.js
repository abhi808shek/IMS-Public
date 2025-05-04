import React, { useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MenuLineIcon from "@/assets/icon/menu-line.svg";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Blogs = () => {

  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("All");
  const filterData = [
    "All",
    "Asset Management",
    "Barcode & QR Codes",
    "Construction",
    "Customer Success Stories",
    "Education",
    "Employee Spotlight",
    "HVAC & Plumbing",
    "Interior Design",
    "Inventory Accounting",
    "Inventory Control",
    "Inventory Management",
  ];

  return (
    <>
      <div className="blog_hero">
        <div className="row justify-content-between align-items-center hero_container">
          <div className="col-12 col-lg-5 leftpanal mb-5 mb-lg-0">
            <h1 className={`${roboto.className} fw-bold`}>
              Only <span>Inventory </span>Management Resource Center.
            </h1>
            <p className={`${roboto.className} fw-bold`}>
              All the inventory news & insights <br />
              you need, delivered staight to your inbox every week.
            </p>
            <div className="d-flex justify-content-start align-items-center position-relative email_wrapper">
              <div className="form-floating w-100">
                <input type="text" className="form-control" id="firstName" placeholder="First name" required />
                <label for="firstName">Work email*</label>
              </div>
              <button type="button" className="btn primary_btn position-absolute email_btn">
                Try Sortly Free
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-7 position-relative">
            <div className="blog_hero_img position-relative">
              <Image className="me-0 me-lg-4" src="/images/pages/blogs/bg2.svg" alt="upload" fill style={{ objectFit: "contain" }} />
              <Image className="me-4 hero_img_bg" src="/images/pages/about-us/bg2.svg" alt="upload" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>

    
        <div className="row blog_wrapper position-relative">
          <div className={ `${roboto.className} col-8 col-md-4 col-lg-3 blogs-filter ${show ? 'visible' : 'hidden'}`}>
            <div>
              <div className="d-flex align-items-center mb-4 d-none d-md-block">
                <span className="me-2 fw-bold title">Topics</span>
                <div className="flex-grow-1">
                  <hr className="m-0 hr_stroke" />
                </div>
              </div>
            </div>

            {filterData.map((filterItem) => (
              <div className={`filter-item d-flex justify-content-between ${ filterItem === filter ? "active" : "" }`} onClick={() => setFilter(filterItem)} >
                <span className="d-flex align-items-center">
                  <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
                    <path d="M7.30759 8.64641L0.80281 2.14163L1.5707 1.37373L9.19693 8.99996L1.5707 16.6262L0.80281 15.8583L7.30759 9.35351L7.66114 8.99996L7.30759 8.64641Z"
                      stroke="#0D0D0D"/>
                  </svg>
                  <span className={roboto.className + `me-2  filter-text fw-medium`}>{filterItem}</span>
                </span>
                <span className="filter-count">(10)</span>
              </div>
            ))}
          </div>

          <div className="col-12 col-md-8 col-lg-9 ps-md-0">
            <div className="row d-md-none">
              <p className={roboto.className + `fw-medium mobile_title d-flex align-items-center`}>
                <span><MenuLineIcon className="hamburger" onClick={()=>setShow(!show)}/></span>
                Topics
              </p>
            </div>
            <div className="row">
              {Array(15)
                .keys()
                .map((e, i) => (
                  <Link href="/blog-details" style={{ textDecoration: "none" }} className="col-md-6 col-lg-4 px-3">
                    <div key={`blogsCard` + i} className={`card  blogs-card  position-relative ${ i % 2 === 0 ? "card1" : "card2"}`}>
                      <div className="blog-card-overlay rounded position-absolute w-100 h-100" />
                      <div className="card-body d-flex flex-column justify-content-end p-0 position-relative">
                        <span className={roboto.className + ` badge rounded-pill bg-light fw-medium  position-absolute top-0 start-0`}>
                          Grow
                        </span>
                        <h5 className={roboto.className + ` card-title fw-medium`}>
                          Gardening Tips: From Seedlings to Blossoms
                        </h5>
                        <span className="d-flex align-items-center">
                          <Image className="me-1 rounded-circle" src="/images/pages/blogs/card-profile.png" alt="profile" width={24} height={24} />
                          <span className={roboto.className + ` text-white profile-title me-3 fw-medium` }>
                            By Jason Carter
                          </span>
                          <Image className="me-1" src="/images/pages/blogs/calendar.svg" alt="calendar" width={10} height={10} />
                          <span className={ roboto.className + ` text-white profile-title fw-medium`}>
                            18 Apr, 2025
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="blogs-pages d-flex align-items-center justify-content-center my-5">
              <Image className="arrow mx-2" src="/images/pages/blogs/left.svg" alt="left-arrow" width={32} height={32} />
              <span className="page-number">01</span>
              <span className="page-number">...</span>
              <span className="page-number">03</span>
              <span className="page-number active">04</span>
              <span className="page-number">...</span>
              <span className="page-number">10</span>
              <Image className="arrow mx-2" src="/images/pages/blogs/right.svg" alt="left-arrow" width={32} height={32} />
            </div>
          </div>
        </div>
    </>
  );
};

export default Blogs;
