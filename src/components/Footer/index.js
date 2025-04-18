// components/Footer.jsx
import Image from "next/image";
import { Roboto } from 'next/font/google'
import Link from "next/link";
import ArrowRightIcon from "@/assets/icon/arrow-right.svg"
import TwitterIcon from "@/assets/icon/twitter.svg"
import YoutubeIcon from "@/assets/icon/youtube.svg"
import LinkedinIcon from "@/assets/icon/linkedin-alt.svg"
import FacebookIcon from "@/assets/icon/facebook-fill.svg"
import CheckLine from "@/assets/icon/check-line.svg"
import ArrowRightLineIcon from "@/assets/icon/arrow-right-line.svg"
import RocketLineIcon from "@/assets/icon/rocket-line.svg"
import ShiledCheckLineIcon from "@/assets/icon/shield-check-line.svg"
import HoursLineIcon from "@/assets/icon/24-hours-line.svg"


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="footer_top_bg">
        <div className="footer_top_bg2">
          <div className="footer_top">
            <div className="row">
              <div className="col-6">
              <h2>
                  Transform Your <br/>
                  <span className="position-relative">Business 
                    <span className="bottom_boder position-absolute"></span>
                  </span> 
                  with Smart<br/> Inventory Control
                </h2>
                <div className="check_list">
                  <div className="d-flex align-items-start list_item">
                    <div className="icon -flex justify-content-center align-items-center me-3">
                      <CheckLine className="check_line"/>
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold">Real-time Analytics</p>
                      <p className="mb-0">Get instant insights into your inventory performance</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start list_item">
                    <div className="icon -flex justify-content-center align-items-center me-3">
                      <CheckLine className="check_line"/>
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold">Real-time Analytics</p>
                      <p className="mb-0">Get instant insights into your inventory performance</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start list_item">
                    <div className="icon -flex justify-content-center align-items-center me-3">
                      <CheckLine className="check_line"/>
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold">Real-time Analytics</p>
                      <p className="mb-0">Get instant insights into your inventory performance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card">
                  <div className="card_body d-flex flex-column justify-content-center align-items-center">
                    <div className="icon_box d-flex justify-content-center align-items-center mb-4">
                      <RocketLineIcon className="icon"/>
                    </div>
                    <h3 className="mb-2">Join 12M+ Users</h3>
                    <p>Start your journey to better inventory management</p>
                  </div>
                  <button type="button" class="btn primary_btn w-100 px-4 py-3">Join Now <span><ArrowRightLineIcon className="arrow_right_icon"/></span></button>
                  <div className="card_bottom d-flex justify-content-center align-items-center mt-4">
                    <div className="d-flex justify-content-center align-items-center me-5">
                      <ShiledCheckLineIcon className="shield_icon me-1"/>
                      <span>Secure</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <HoursLineIcon className="shield_icon me-1"/>
                      <span>Secure</span>
                    </div>

                  </div>
                  



                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="footer">
        <div className='container'>
          <div className='row'>
            <div className='col-3 pe-lg-4'>
              <div className="info">
                <div style={{ position: "relative", width: "89px", aspectRatio: "2/1" }} className="img_conatiner">
                    <Image src="/images/components/footer/cocacola-logo.svg" alt="blog" fill style={{ objectFit: "contain" }}/>
                  </div> 
                  <p className={`${roboto.className} mb-4`}><span className="fw-bold">Become an Inventory Insider:</span> All the inventory news & insights you need, delivered straight to inbox every week.</p>
                  <div className="d-flex justify-content-between align-items-start email ">
                    <p className="mb-0">Email address</p>
                    <div className="email_arrow d-flex justify-content-center align-items-center">
                      <ArrowRightIcon/>
                    </div>
                  </div>
              </div>

            </div>
            <div className="col-9 ps-lg-4">
              <div className="row">
                <div className="col-3 quick_links">
                  <p className={`${roboto.className} mb-3`}>Industries</p>
                  <ul className={`${roboto.className} list-unstyled`}>
                    <li className="mb-2"><Link href="#" className="link">Construction </Link></li>
                    <li className="mb-2"><Link href="#" className="link">Medical </Link></li>
                    <li className="mb-2"><Link href="#" className="link">Interior Designer & Satging</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Automotive </Link></li>
                    <li className="mb-2"><Link href="#" className="link">Dental</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Events</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Non-Profit</Link></li>
                    <li className="mb-2"><Link href="#" className="link">View All</Link></li>
                  </ul>

                </div>
                <div className="col-2 quick_links">
                  <p className={`${roboto.className} mb-3`}>Users</p>
                  <ul className={`${roboto.className} list-unstyled`}>
                    <li className="mb-2"><Link href="#" className="link">World Bank </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                  </ul>

                </div>
                <div className="col-2 quick_links">
                  <p className={`${roboto.className} mb-3`}>Users</p>
                  <ul className={`${roboto.className} list-unstyled`}>
                    <li className="mb-2"><Link href="#" className="link">World Bank </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                  </ul>

                </div>
                <div className="col-2 quick_links">
                  <p className={`${roboto.className} mb-3`}>Users</p>
                  <ul className={`${roboto.className} list-unstyled`}>
                    <li className="mb-2"><Link href="#" className="link">World Bank </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB </Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                    <li className="mb-2"><Link href="#" className="link">ADB</Link></li>
                  </ul>

                </div>
                <div className="col-3 quick_links">
                  <p className={`${roboto.className} mb-3`}>Information</p>
                  <ul className={`${roboto.className} list-unstyled`}>
                    <li className="mb-2"><Link href="#" className="link">Disclaimer</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Accessibility Statement</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Terms of use</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Site Map</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Site Map</Link></li>
                    <li className="mb-2"><Link href="#" className="link">Copyright Policy</Link></li>
                  </ul>

                </div>

              </div>

            </div>
          </div>
          <div className="copywrite row justify-content-between align-items-center">
            <div className="col-6">
              <p className="mb-0 pt-0">©2025 Sortly Inc. All rights reserved.</p>
            </div>
            <div className="col-auto">
              <div className="d-flex">
                <div className="icon_box d-flex align-items-center justify-content-center">
                  <FacebookIcon/>
                </div>
                <div className="icon_box d-flex align-items-center justify-content-center">
                  <TwitterIcon/>
                </div>
                <div className="icon_box d-flex align-items-center justify-content-center">
                  <YoutubeIcon/>
                </div>
                <div className="icon_box d-flex align-items-center justify-content-center">
                  <LinkedinIcon/>
                </div>
              </div>



            </div>

          </div>

        </div>
      </div>

    </footer>
         

  );
;}

export default Footer;
