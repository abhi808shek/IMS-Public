import Link from "next/link";
import { React, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Pacifico } from 'next/font/google'
import style from "@/styles/Home.module.css";
import DashboardIcon from "@/assets/icon/dashboard.svg";
import StackIcon from "@/assets/icon/stack-line.svg";
import BarChartIcon from "@/assets/icon/bar-chart-box-line.svg";
import ArrowDownIcon from "@/assets/icon/arrow-down-s-line.svg";
import StoreIcon from "@/assets/icon/store-2-line.svg";
import TruckIcon from "@/assets/icon/truck-line.svg";
import CircleIcon from "@/assets/icon/circle-line.svg";
import ArrowRightIcon from "@/assets/icon/arrow-right-line.svg";
import UserIcon from "@/assets/icon/user-line.svg";
import CustomerIcon from "@/assets/icon/customer-service-2-line.svg";
import PhoneIcon from "@/assets/icon/phone-line.svg";
import MailIcon from "@/assets/icon/mail-line.svg";
import TwitterIcon from "@/assets/icon/twitter-x-line.svg";
import FacebookIcon from "@/assets/icon/facebook-line.svg";
import LinkedinIcon from "@/assets/icon/linkedin-line.svg";
import GlobalIcon from "@/assets/icon/global-line.svg";
import Select from "react-select";


const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400', // ✅ Only available weight
  variable: '--font-inter',
})
const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const [show, setShow] = useState(false);
  const [solutionShow, setsolutionShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>

      <div className="top_navbar py-2 px-2 px-md-4">
        <div className=" d-block d-md-flex justify-content-between align-items-center top_navbar_container">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
            <div className="contact">
              <p className="mb-0 text-white">
                <span>
                  <PhoneIcon className="phone_icon icon_s14 me-2" />
                </span>
                +1 (888) 123-4567
              </p>
            </div>
            <div className="email">
              <p className="mb-0 text-white">
                <span>
                  <MailIcon className="mail_icon icon_s14 me-2" />
                </span>
                support@inventorypro.com
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="icons pe-4">
              <Link href="#">
                <TwitterIcon className="social_icon icon_s15 ms-3" />
              </Link>
              <Link href="#">
                <LinkedinIcon className="social_icon icon_s15 ms-3" />
              </Link>
              <Link href="#">
                <FacebookIcon className="social_icon icon_s15 ms-3" />
              </Link>
            </div>
            <div className="select_language ps-4">
              <div
                className={`dropdown position-relative ${
                  showDropdown ? "show" : ""
                }`}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  aria-expanded={showDropdown}
                >
                  <span>
                    <GlobalIcon className="icon_s15 me-2" />
                  </span>
                  English
                  <span className="ms-2">
                    <ArrowDownIcon className="icon_s16" />
                  </span>
                </Link>
                <div
                  className={`dropdown-menu menu_language ${
                    showDropdown ? "show" : ""
                  }`}
                >
                  <Link className="dropdown-item active p-0" href="#">
                    English
                  </Link>
                  <Link className="dropdown-item p-0 mt-0" href="#">
                    France
                  </Link>
                  <Link className="dropdown-item p-0 mt-0" href="#">
                    Hindi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav_container px-2 px-sm-4 py-3"> 
      <nav className="navbar  main_header  bg-body-tertiary py-0">
        <Link className={`navbar-brand me-0`} href="/">
          <p className={`${pacifico.className} mb-0`}>logo</p>
        </Link>
          
        <div className="d-flex align-items-center">
          <div className="nav_contact_mb me-2 me-sm-4">
            <div className="nav_btn d-flex justify-content-center align-items-center">
              <button type="button" className="btn signIn_btn d-flex align-items-center justify-content-center">
                {" "}
                <span>
                  <UserIcon className="user_icon text_primary  me-2" />
                </span>
                <p className="mb-0">Sign In</p>
              </button>
              <button type="button" className="btn primary_btn d-flex align-items-center justify-content-center se-1 ms-sm-3">
                <p className="mb-0">Start Free Trial</p>{" "}
                <span>
                  <ArrowRightIcon className="arrow_right_icon" />
                </span>
              </button>
            </div>
          </div>
          <button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
          </button>
        </div>
       
        <div className={`collapse navbar-collapse custom-collapse ${navOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2 px-md-0">
            <li className={`nav-item dropdown ${show ? "show" : ""}`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
              <Link className="nav-link dropdown-toggle px-0" href="/feature" role="button" data-bs-toggle="dropdown" aria-expanded={show} >
                Features
                <span className="ps-1"> <ArrowDownIcon className={`arrow_down_icon ${show ? "rotate" : ""}`}/> </span>
              </Link>
              <ul className={`dropdown-menu ${show ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" href="/feature">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto dropdown_item_icon">
                        <div className="round_circle">
                          <DashboardIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          Feature
                        </p>
                        <p className="dropedown_navitem mb-0">
                          Real-time analytics
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" href="/industry">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto  dropdown_item_icon">
                        <div className="round_circle">
                          <StackIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          Industry
                        </p>
                        <p className="dropedown_navitem mb-0">Stock management</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" href="/blogs">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto  dropdown_item_icon">
                        <div className="round_circle">
                          <BarChartIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          Blogs
                        </p>
                        <p className="dropedown_navitem mb-0">Advanced analytics</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${ solutionShow ? "show" : "" }`} 
            onMouseEnter={() => setsolutionShow(true)} onMouseLeave={() => setsolutionShow(false)}>
              <Link className="nav-link dropdown-toggle px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded={solutionShow}>
                Solutions
                <span className="ps-1">
                  <ArrowDownIcon
                    className={`arrow_down_icon ${
                      solutionShow ? "rotate" : ""
                    }`}
                  />
                </span>
              </Link>
              <ul className={`dropdown-menu ${ solutionShow ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" href="/solution">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto dropdown_item_icon">
                        <div className="round_circle">
                          <StoreIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          Solutions
                        </p>
                        <p className="dropedown_navitem mb-0">Store management</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" href="/about-us">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto  dropdown_item_icon">
                        <div className="round_circle">
                          <TruckIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          About Us
                        </p>
                        <p className="dropedown_navitem mb-0">Supply chain</p>
                      </div>
                    </div>
                  </Link>
                  <Link className="dropdown-item" href="/enterprise">
                    <div className="dropdown-item_wrapper mx-0">
                      <div className="col-auto  dropdown_item_icon">
                        <div className="round_circle">
                          <CircleIcon className="icon" />
                        </div>
                      </div>
                      <div className="col-10">
                        <p className="text_black fw-medium mb-0 dropedown_navlink">
                          Enterprises
                        </p>
                        <p className="dropedown_navitem mb-0">Production control</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link  px-0" href="#">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-0" href="#">
                Customers
              </Link>
            </li>
          </ul>

          <div className="nav_contact_lg">
            <div>
              <Link href="/help-center" className="mb-0 need_help_btn">
                <span>
                  <CustomerIcon className="customer_icon me-2" />
                </span>
                Need Help?
              </Link>
            </div>
            <div className="seprater"> </div>
            <div className="nav_btn d-flex justify-content-center align-items-center">
              <button type="button" className="btn signIn_btn d-flex align-items-center justify-content-center">
                {" "}
                <span>
                  <UserIcon className="user_icon text_primary me-2" />
                </span>
                <p className="mb-0">Sign In</p>
              </button>
              <button type="button" className="btn primary_btn d-flex align-items-center justify-content-center ms-3">
                <p className="mb-0">Start Free Trial</p>{" "}
                <span>
                  <ArrowRightIcon className="arrow_right_icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      
      </nav>
      </div>
   
    </>
  );
};

export default Header;
