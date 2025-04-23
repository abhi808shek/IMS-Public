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

export default function MainIndustries() {
  const [tab, setTab] = useState("Managing");

  return (
    <>
      <div className="main_industry_hero">
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-6 p-0 m-0 d-flex align-items-center justify-content-center">
            <div className="main_industry_hero_content">
              <h1 className={`${roboto.className} industry_header`}>
                Inventory Software for your industry.
              </h1>
              <p className={`${roboto.className} industry_text mb-4`}>
                You and your construction crew should be working-not searching
                for supplies or hurting down missing materials. With Sortly’s
                construction inventory software.
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
          <div className="col-md-12 col-lg-6 ps-lg-0 main_indutry_right_panal_wrapper">
            <div className="main_industry_right_panel"></div>
          </div>
        </div>
      </div>

     
        <div className="row align-items-center justify-content-center antique_inventory_cards_wrapper">
          <div className="col-md-10 col-lg-9">
            <div className="antique_inventory_cards pb-0">
              <div className="container antique_inventory_cards_heading">
                <h3 className={`${roboto.className} fw-bold w-sm-100 w-md-75 mb-0`}>
                  Stay on top of your business’svaluable assets.
                  <br />
                  Browse Sortly’s asset tracking solutions
                </h3>
              </div>

              <div className="container">
                <div className="row">
                  {Array(15)
                    .keys()
                    .map((_) => (
                      <Link href="/each-industry"  className="col-md-6 col-lg-6 col-xl-4 pe-4" style={{ textDecoration: "none" }}>
                        <div class="antique_inventory_card card">
                          <div class="card-body p-0">
                              <div className="mb-2">
                                <Image src="/images/pages/main-industry/industry.svg" alt="upload" height="20" width="20"/>
                              </div>
                              <h5 className={ roboto.className + " mb-2 fw-bold card-title"}>Antiques</h5>
                              <Link className="d-flex align-items-center justify-content-between link_btn py-0" style={{ textDecoration: "none" }}href="#">
                                <span className={`${roboto.className}`}> Antiques Inventory Management</span>
                                <span className="ms-3">
                                  <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24}/>
                                </span>
                              </Link>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>



      <div className="main_Solution_bg6">
        <div className="main_solution_content mt-0 pb-0">
          <div className="container mb-5">
            <h1 className={`${roboto.className} text-center mb-0 mb-0`}>
              Read more about working in Sortly
            </h1>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6 col-lg-4 px-3">
                <div class="card p-3 mb-3 mb-lg-0">
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
              <div className="col-md-6 col-lg-4 px-3">
                <div class="card p-3 mb-3 mb-lg-0">
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
              <div className="col-md-6 col-lg-4 px-3">
                <div class="card p-3 mb-3 mb-lg-0">
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
