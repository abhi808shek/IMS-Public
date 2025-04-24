import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icon/arrow-right.svg";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MainSolution() {
  const [tab, setTab] = useState("Managing");

  return (
    <>
    <div className="main_solution_hero_wrapper">
      <div className="row justify-content-between">
        <div className="col-md-12 col-lg-6 p-0 m-0 d-flex align-items-center justify-content-center">
          <div className="main_solution_hero_content">
            <h1 className={`${roboto.className} solution_header`}>
            Sortly Solutions.
            </h1>
            <p className={`${roboto.className} solution_text`}>
              No matter what you need to track, Sortky has you covered.
            </p>
            <div className="d-flex align-items-center">
              <button type="button" className="btn secondary_fill_btn me-3" >
                <span className={`${roboto.className}`}>See All Features</span>
              </button>
              <button type="button" className="btn primary_btn">
                <span className={`${roboto.className}`}>Try Sortly Free</span>  
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 ps-lg-0 solution_right_panal_wrapper">
          <div className="main_solution_image_panel"></div>
        </div>
      </div>
    </div>

    <div className="business_toolkit_wrapper">
       
          <div className="row align-items-center justify-content-center">
            <div className="col-md-11 col-lg-9">
              <h3 className={`${roboto.className} fw-bold business_toolkit_header`}>
                A business toolkit for <br />
                every business
              </h3>
            </div>
          </div>
        
        <div className="row align-items-center justify-content-center">
          <div className="col-md-11 col-lg-9">
              <div className="row">
                {Array(3)
                  .keys()
                  .map((_) => (
                    <div className="col-md-6 col-lg-4 business_toolkit_card_wrapper">
                      <Link href="/each-solution" style={{ textDecoration: "none" }} class="card business_toolkit_card  bd-top-green">
                        <div class="card-body p-0">
                          <div className="icon position-relative ratio ratio-1x1 img_wrapper">
                            <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: "contain" }}/>
                          </div>
                          <h5 className={roboto.className + " fw-bold card-title"}>
                            Antiques
                          </h5>
                          <p className={roboto.className + " card_text"}>
                            Track,organize and manage all your business’s
                            inventory
                          </p>
                          <Link className="d-flex align-items-center justify-content-between w-100 link_btn py-0" href="#">
                            <span style={{ color: "#E12B3E" }}>
                              Antiques Inventory Management
                            </span>
                            <span className="ms-3">
                              <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24}/>
                            </span>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  ))}
                {Array(3)
                  .keys()
                  .map((_) => (
                    <div className="col-md-6 col-lg-4 business_toolkit_card_wrapper">
                      <Link href="/each-solution" style={{ textDecoration: "none" }} class="card business_toolkit_card  bd-top-blue">
                        <div class="card-body p-0">
                          <div className="icon position-relative ratio ratio-1x1 img_wrapper">
                            <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: "contain" }}/>
                          </div>
                          <h5 className={roboto.className + " fw-bold card-title"}>
                            Antiques
                          </h5>
                          <p className={roboto.className + " card_text"}>
                            Track,organize and manage all your business’s
                            inventory
                          </p>
                          <Link className="d-flex align-items-center justify-content-between w-100 link_btn py-0" href="#">
                            <span style={{ color: "#E12B3E" }}>
                              Antiques Inventory Management
                            </span>
                            <span className="ms-3">
                              <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24}/>
                            </span>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  ))}
                {Array(3)
                  .keys()
                  .map((_) => (
                    <div className="col-md-6 col-lg-4 business_toolkit_card_wrapper">
                      <Link href="/each-solution" style={{ textDecoration: "none" }} class="card business_toolkit_card  bd-top-purple">
                        <div class="card-body p-0">
                          <div className="icon position-relative ratio ratio-1x1 img_wrapper">
                            <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: "contain" }}/>
                          </div>
                          <h5 className={roboto.className + " fw-bold card-title"}>
                            Antiques
                          </h5>
                          <p className={roboto.className + " card_text"}>
                            Track,organize and manage all your business’s
                            inventory
                          </p>
                          <Link className="d-flex align-items-center justify-content-between w-100 link_btn py-0" href="#">
                            <span style={{ color: "#E12B3E" }}>
                              Antiques Inventory Management
                            </span>
                            <span className="ms-3">
                              <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24}/>
                            </span>
                          </Link>
                        </div>
                      </Link>
                    </div>
                  ))}
                {Array(3)
                  .keys()
                  .map((_) => (
                    <div className="col-md-6 col-lg-4 business_toolkit_card_wrapper">
                      <Link href="/each-solution" style={{ textDecoration: "none" }} class="card business_toolkit_card  bd-top-blue">
                        <div class="card-body p-0">
                          <div className="icon position-relative ratio ratio-1x1 img_wrapper">
                            <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: "contain" }}/>
                          </div>
                          <h5 className={roboto.className + " fw-bold card-title"}>
                            Antiques
                          </h5>
                          <p className={roboto.className + " card_text"}>
                            Track,organize and manage all your business’s
                            inventory
                          </p>
                          <Link className="d-flex align-items-center justify-content-between w-100 link_btn py-0" href="#">
                            <span style={{ color: "#E12B3E" }}>
                              Antiques Inventory Management
                            </span>
                            <span className="ms-3">
                              <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24}/>
                            </span>
                          </Link>
                        </div>
                      </Link>
                    </div>
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
              <div class="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div class="card-body p-0">
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
              <div class="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div  className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div class="card-body p-0">
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
              <div class="card p-4 p-sm-3 p-xxl-4 mb-4 mb-lg-0">
                <div  className="img_conatiner">
                  <Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
                </div>

                <div class="card-body p-0">
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
}
