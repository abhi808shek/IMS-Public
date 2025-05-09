import React from "react";
import { Roboto } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CheckLine from "@/assets/icon/check-line.svg";
import RocketLineIcon from "@/assets/icon/rocket-line.svg";
import ShiledCheckLineIcon from "@/assets/icon/shield-check-line.svg";
import HoursLineIcon from "@/assets/icon/24-hours-line.svg";
import ArrowRightLineIcon from "@/assets/icon/arrow-right-line.svg";
import ArrowRightIcon from "@/assets/icon/arrow-right.svg";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-inter",
});
const MainFeature = () => {
  const [tab, setTab] = useState("Managing");
  return (
    <>
      <div className="main_feature_hero">
        <div className="row justify-content-center main_heading">
          <div className="col-12 col-md-7">
            <h1 className={`${roboto.className} text-center`}>
              The Best Construction Inventory Software
            </h1>
            <p className={`${roboto.className} text-center`}>
              You and your construction crew should be working-not searching
              for.
            </p>
            <div className="d-flex justify-content-center align-itens-center">
              <button type="button" className="btn primary_btn me-3">
                See All Features
              </button>
              <button type="button" className="btn secondary_fill_btn">
                Try Sortly Free
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="main_feature_hero_img ratio ratio-4x3 position-relative">
              <Image
                src="/images/pages/main-feature/bg1.svg"
                alt="background"
                fill
                className="bg_image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="img_business_inevntory_toolkit_cards">
        <div className="custom_container container ">
          <div className="row ">
            <div className="container col-8 col-md-6 py-3 inventory_import_tabs">
              <div className="d-flex justify-content-between">
                <span
                  onClick={() => setTab("Organizing")}
                  className={`${roboto.className} ${
                    tab === "Organizing" ? "active " : ""
                  } inventory_import_tab`}
                >
                  Organizing{" "}
                </span>
                <span
                  onClick={() => setTab("Managing")}
                  className={`${roboto.className} ${
                    tab === "Managing" ? "active " : ""
                  } inventory_import_tab`}
                >
                  Managing
                </span>
                <span
                  onClick={() => setTab("Reporting")}
                  className={`${roboto.className} ${
                    tab === "Reporting" ? "active " : ""
                  } inventory_import_tab`}
                >
                  Reporting
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="toolkit_cards_container">
          <div className="position-absolute toolkit_bg">
            <div className="img_box">
              <Image
                src="/images/pages/main-feature/bg3.svg"
                alt="background"
                fill
                className="bg_image"
                style={{ objectFit: "conatin" }}
              />
            </div>
          </div>
          <div className="custom_container container ">
            <div className="row mb-1 mx-0">
              <div className="col-6">
                <p className={`${roboto.className} title_tag fw-bold mb-2 mb-md-3`}>
                  Manage
                </p>
                <p className={`${roboto.className} fw-bold title md-2 mb-md-3`}>
                  A business toolkit.
                </p>
                <p className={`${roboto.className} sub_title fw-bold mb-2 mb-md-3`}>
                  You and your construction crew should be working-not searching
                  for.
                </p>
              </div>
            </div>

            <div className="row tab_content mx-0">
              {[1, 2, 3, 5, 6, 7, 8, 8]?.map((_, index) => (
                <Link href="/each-feature"className="col-12 col-md-4"style={{ textDecoration: "none" }}key={index} >
                  <div className="card p-4">
                    <div className="card_img mb-4 ratio ratio-4x3 position-relative">
                      <Image src="/images/pages/main-feature/bg2.svg"alt="background"fill className="card_image"style={{ objectFit: "cover" }}/>
                    </div>
                    <div className="card-body p-0">
                      <h5
                        className={`${roboto.className} card-title fw-medium`}
                      >
                        Card title
                      </h5>
                      <p className={`${roboto.className} card-text`}>
                        well add content here. we’ll it short and simple. And
                        smile :){" "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="toolkit_cards_container">
          <div className="position-absolute toolkit_bg toolkit_bg_right">
            <div className="img_box">
              <Image
                src="/images/pages/main-feature/bg4.svg"
                alt="background"
                fill
                className="bg_image"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="custom_container container ">
            <div className="row mb-1 mx-0">
              <div className="col-6">
                <p className={`${roboto.className} title_tag fw-bold mb-3`}>
                  Manage
                </p>
                <p className={`${roboto.className} fw-bold title mb-3`}>
                  A business toolkit.
                </p>
                <p className={`${roboto.className} sub_title fw-bold mb-3`}>
                  You and your construction crew should be working-not searching
                  for.
                </p>
              </div>
            </div>

            <div className="row tab_content mx-0">
              {[1, 2, 3, 5, 6, 7, 8, 8]?.map((_, index) => (
                <Link href="/each-feature" className="col-12 col-md-4" style={{ textDecoration: "none" }} ey={index}>
                  <div className="card p-4">
                    <div className="card_img mb-4 ratio ratio-4x3 position-relative">
                      <Image src="/images/pages/main-feature/bg5.svg" alt="background" fill className="card_image" style={{ objectFit: "cover" }}/>
                    </div>
                    <div className="card-body p-0">
                      <h5
                        className={`${roboto.className} card-title fw-medium`}
                      >
                        Card title
                      </h5>
                     <p className={`${roboto.className} card-text`}>
                        well add content here. we’ll it short and simple. And
                        smile :){" "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="toolkit_cards_container mb-0">
          <div className="position-absolute toolkit_bg toolkit_bg_left">
            <div className="img_box">
              <Image
                src="/images/pages/main-feature/bg6.svg"
                alt="background"
                fill
                className="bg_image"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="custom_container container ">
            <div className="row mb-1 mx-0">
              <div className="col-6">
                <p className={`${roboto.className} title_tag fw-bold mb-3`}>
                  Manage
                </p>
                <p className={`${roboto.className} fw-bold title mb-3`}>
                  A business toolkit.
                </p>
                <p className={`${roboto.className} sub_title fw-bold mb-3`}>
                  You and your construction crew should be working-not searching
                  for.
                </p>
              </div>
            </div>

            <div className="row tab_content mx-0">
              {[1, 2, 3, 5, 6, 7, 8, 8]?.map((_, index) => (
                <Link href="/each-feature" className="col-12 col-md-4" style={{ textDecoration: "none" }} key={index}>
                  <div className="card p-4">
                    <div className="card_img mb-4 ratio ratio-4x3 position-relative">
                      <Image src="/images/pages/main-feature/bg7.svg" alt="background" fill className="card_image" style={{ objectFit: "cover" }}/>
                    </div>
                    <div className="card-body p-0">
                      <h5 className={`${roboto.className} card-title fw-medium`}>
                        Card title
                      </h5>
                     <p className={`${roboto.className} card-text`}>
                        well add content here. we’ll it short and simple. And
                        smile :){" "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer_top_bg">
        <div className="footer_top_bg2">
          <div className="footer_top">
            <div className="row justify-content-md-around justify-content-xl-center footer_top_content_wrapper">
              <div className="col-12 col-lg-5 col-xl-5 mb-5 mb-lg-0">
              <h2 className="text_one">
                  Transform Your <br/>
                  <span className="position-relative me-3">Business 
                    <span className="bottom_boder position-absolute"></span>
                  </span> 
                    with Smart<br/> Inventory Control
                </h2>
              <h2 className="text_two">
                  Transform Your <br/>
                  <span className="position-relative me-3">Business 
                    <span className="bottom_boder position-absolute"></span>
                  </span> 
                    with Smart Inventory Control
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

              <div className="col-12 col-lg-5 col-xl-5 col-xxl-4">
                <div className="card">
                  <div className="card_body d-flex flex-column justify-content-center align-items-center">
                    <div className="icon_box d-flex justify-content-center align-items-center mb-3">
                      <RocketLineIcon className="icon"/>
                    </div>
                    <h3 className="mb-2">Join 12M+ Users</h3>
                    <p className="mb-0 text-center">Start your journey to better inventory management</p>
                  </div>
                  <button type="button" className="btn primary_btn w-100 px-4 py-3">Join Now <span><ArrowRightLineIcon className="arrow_right_icon"/></span></button>
                  <div className="card_bottom d-flex justify-content-center align-items-center mt-4">
                    <div className="d-flex justify-content-center align-items-center me-5">
                      <ShiledCheckLineIcon className="shield_icon me-1"/>
                      <span className={`${roboto.className}`}>Secure</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <HoursLineIcon className="shield_icon me-1"/>
                      <span className={`${roboto.className}`}>24/7 Support</span>
                    </div>

                  </div>
                  



                </div>

              </div>

            </div>

          </div>

        </div>
      </div>


      <div className="img_business_inevntory_toolkit_cards">
        <div className="toolkit_cards_container">
          <div className="position-absolute toolkit_bg toolkit_bg_right">
            <div className="img_box">
              <Image src="/images/pages/main-feature/bg8.svg"alt="background"fill className="bg_image"style={{ objectFit: "contain" }}/>
            </div>
          </div>
          <div className="custom_container container ">
            <div className="row mb-1 mx-0">
              <div className="col-6">
                <p className={`${roboto.className} title_tag fw-bold mb-3`}>
                  Manage
                </p>
                <p className={`${roboto.className} fw-bold title mb-3`}>
                  A business toolkit.
                </p>
                <p className={`${roboto.className} sub_title fw-bold mb-3`}>
                  You and your construction crew should be working-not searching
                  for.
                </p>
              </div>
            </div>

            <div className="row tab_content mx-0">
            {[1, 2, 3, 5, 6, 7, 8, 8]?.map((_, index) => (
                <Link href="/each-feature" className="col-12 col-md-4" style={{ textDecoration: "none" }} key={index}>
                <div className="card p-4">
                  <div className="card_img mb-4 ratio ratio-4x3 position-relative">
                    <Image src="/images/pages/main-feature/bg5.svg" alt="background" fill className="card_image" style={{ objectFit: "cover" }}/>
                  </div>
                  <div className="card-body p-0">
                    <h5 className={`${roboto.className} card-title fw-medium`}>
                      Card title
                    </h5>
                    <p className="card-text mb-0">
                      well add content here. we’ll it short and simple. And
                      smile :){" "}
                    </p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="main_Solution_bg6">
				<div className="main_solution_content mt-0 pb-0">
          <div className="container mb-4 mb-sm-3 md-md-5">
            <h1 className={`${roboto.className} text-center mb-0 mb-0`}>
            Read more about working in Sortly
            </h1>
          </div>
				</div>

				<div className="row align-items-center justify-content-center">
          <div className="col-md-11 col-lg-9">
            <div className="row">
              <div className="col-md-6 col-lg-4 card_wrapper px-sm-4 px-md-3">
                <div className="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div className="card-body p-0">
                  <h5 className={`${roboto.className} card-title pt-3 mb-3`}>
                  Blog Post
                  </h5>
                  <p className={`${roboto.className} card-text mb-3`}>
                  "This product exceeded my expectations! The quality is
                  superb, and the customer service was outstanding. I highly
                  recommend it to anyone looking for reliability and style."
                  </p>
                  <Link href="#" className="link_btn w-100 d-flex justify-content-between align-items-center py-0">
                  <span className={`${roboto.className}`}>Antiques Inventory Management{" "}</span> 
                  <span className="">
                    <ArrowRightIcon />
                  </span>
                  </Link>
                </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 card_wrapper px-sm-4 px-md-3">
                <div className="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div  className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div className="card-body p-0">
                  <h5 className={`${roboto.className} card-title pt-3 mb-3`}>
                  Blog Post
                  </h5>
                  <p className={`${roboto.className} card-text mb-3`}>
                  "This product exceeded my expectations! The quality is
                  superb, and the customer service was outstanding. I highly
                  recommend it to anyone looking for reliability and style."
                  </p>
                  <Link href="#" className="link_btn w-100 d-flex justify-content-between align-items-center py-0">
                  <span className={`${roboto.className}`}>Antiques Inventory Management{" "}</span> 
                  <span className="">
                    <ArrowRightIcon />
                  </span>
                  </Link>
                </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 card_wrapper px-sm-4 px-md-3">
                <div className="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div  className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div className="card-body p-0">
                  <h5 className={`${roboto.className} card-title pt-3 mb-3`}>
                  Blog Post
                  </h5>
                  <p className={`${roboto.className} card-text mb-3`}>
                  "This product exceeded my expectations! The quality is
                  superb, and the customer service was outstanding. I highly
                  recommend it to anyone looking for reliability and style."
                  </p>
                  <Link href="#" className="link_btn w-100 d-flex justify-content-between align-items-center py-0">
                  <span className={`${roboto.className}`}>Antiques Inventory Management{" "}</span> 
                  <span className="">
                    <ArrowRightIcon />
                  </span>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
					
    </>
  );
};

export default MainFeature;
