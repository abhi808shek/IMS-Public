import Link from 'next/link';
import {React, useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import style from "@/styles/Home.module.css";
import DashboardIcon from "@/assets/icon/dashboard.svg"
import StackIcon from "@/assets/icon/stack-line.svg"
import BarChartIcon from "@/assets/icon/bar-chart-box-line.svg"
import ArrowDownIcon from "@/assets/icon/arrow-down-s-line.svg"
import StoreIcon from "@/assets/icon/store-2-line.svg"
import TruckIcon from "@/assets/icon/truck-line.svg"
import CircleIcon from "@/assets/icon/circle-line.svg"
import ArrowRightIcon from "@/assets/icon/arrow-right-line.svg"
import UserIcon from "@/assets/icon/user-line.svg"
import CustomerIcon from "@/assets/icon/customer-service-2-line.svg"
import PhoneIcon from "@/assets/icon/phone-line.svg"
import MailIcon from "@/assets/icon/mail-line.svg"
import TwitterIcon from "@/assets/icon/twitter-x-line.svg"
import FacebookIcon from "@/assets/icon/facebook-line.svg"
import LinkedinIcon from "@/assets/icon/linkedin-line.svg"
import GlobalIcon from "@/assets/icon/global-line.svg"
import Select from 'react-select';

const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
    const [show, setShow] = useState(false);
    const [solutionShow, setsolutionShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
      <>
      <div className="top_navbar d-flex justify-content-between align-items-center py-2 px-4">
        <div className="d-flex align-items-center">
          <div className="contact me-3">
            <p className="mb-0 text-white"><span><PhoneIcon className="phone_icon icon_s14 me-2"/></span>+1 (888) 123-4567</p>
          </div>
          <div className="email">
            <p className="mb-0 text-white"><span><MailIcon className="mail_icon icon_s14 me-2"/></span>support@inventorypro.com</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="icons pe-4">
            <Link href="#" ><TwitterIcon className='social_icon icon_s15 ms-3'/></Link>
            <Link href="#" ><LinkedinIcon className='social_icon icon_s15 ms-3'/></Link>
            <Link href="#" ><FacebookIcon className='social_icon icon_s15 ms-3'/></Link>
          </div>
          <div className="select_language ps-4">
              <div className={`dropdown position-relative ${showDropdown ? "show" : ""}`} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <Link href="#" className="nav-link dropdown-toggle" role="button" aria-expanded={showDropdown}>
                <span><GlobalIcon className="icon_s15 me-2"/></span>
                English
                <span className="ms-2"><ArrowDownIcon className="icon_s16"/></span>
              </Link>
              <div className={`dropdown-menu menu_language ${showDropdown ? "show" : ""}`}>
                <Link className="dropdown-item" href="#">English</Link>
                <Link className="dropdown-item" href="#">France</Link>
                <Link className="dropdown-item" href="#">Hindi</Link>
              </div>
            </div>
          </div>
        </div>



      </div>
      <nav class="navbar main_header navbar-expand-lg bg-body-tertiary px-4 py-3">
        {/* <div class="container"> */}
          <Link class="navbar-brand fs-5" href="#">Logo</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li  className={`nav-item dropdown ${show ? 'show' : ''}`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <Link className="nav-link dropdown-toggle px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded={show}>
                  Features<span className="ps-1"><ArrowDownIcon className={`arrow_down_icon ${show ? 'rotate' : ''}`}/></span>
                </Link>
                <ul className={`dropdown-menu ${show ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <DashboardIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Dashboard</p>
                          <p class="dropedown_navitem mb-0">Real-time analytics</p>
                        </div>
                      </div>
                      </Link >
                      <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <StackIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Inventory</p>
                          <p class="dropedown_navitem mb-0">Stock management</p>
                        </div>
                      </div>
                      </Link>
                      <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <BarChartIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Reports</p>
                          <p class="dropedown_navitem mb-0">Advanced analytics</p>
                        </div>
                      </div>
                    </Link>
                  </li>

                </ul>
              </li>

              <li  className={`nav-item dropdown ${solutionShow ? 'solutionShow' : ''}`} onMouseEnter={() => setsolutionShow(true)} onMouseLeave={() => setsolutionShow(false)}>
                <Link className="nav-link dropdown-toggle px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded={solutionShow}>
                  Solutions
                  <span className="ps-1"><ArrowDownIcon className={`arrow_down_icon ${solutionShow ? 'rotate' : ''}`}/></span>
                </Link>
                <ul className={`dropdown-menu ${solutionShow ? 'solutionShow' : ''}`}>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <StoreIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Retail</p>
                          <p class="dropedown_navitem mb-0">Store management</p>
                        </div>
                      </div>
                      </Link>
                      <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <TruckIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Logistics</p>
                          <p class="dropedown_navitem mb-0">Supply chain</p>
                        </div>
                      </div>
                      </Link>
                      <Link className="dropdown-item" href="#">
                      <div className="d-flex justify-content-center align-items-center p-2 mx-0">
                        <div className="col-auto pe-3">
                            <div className="round_circle">
                              <CircleIcon className="icon" />
                            </div>
                        </div>
                        <div className="col-10">
                          <p className="text_black fw-medium mb-0 dropedown_navlink">Manufacturing</p>
                          <p class="dropedown_navitem mb-0">Production control</p>
                        </div>
                      </div>
                    </Link>
                  </li>

                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link  px-0" href="#">Pricing</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link px-0" href="#" >Customers</Link>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center">
            <div><p className="mb-0"><span><CustomerIcon className="customer_icon me-2"/></span>Need Help?</p></div>
            <div className="nav_btn d-flex justify-content-center align-items-center ms-4 ps-4">
              <button type="button" className="btn signIn_btn d-flex align-items-center justify-content-center"> <span><UserIcon className="user_icon text_primary me-2"/></span><p className="mb-0">Sign In</p></button>
              <button type="button" className="btn primary_btn d-flex align-items-center justify-content-center ms-3"><p className="mb-0">Start Free Trial</p> <span><ArrowRightIcon className="arrow_right_icon"/></span></button>
            </div>
            </div>
          </div>
        {/* </div> */}
      </nav>
      </>
    );
};

export default Header;