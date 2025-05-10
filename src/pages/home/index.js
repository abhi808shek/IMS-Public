import {React, useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Roboto } from 'next/font/google'
import PlayCircle from "@/assets/icon/play-circle-line.svg"
import Rocket from "@/assets/icon/rocket-line.svg"
import Store from "@/assets/icon/store.svg"
import Stack from "@/assets/icon/stack-line.svg"
import RadarLine from "@/assets/icon/radar-line.svg"
import FileList from "@/assets/icon/file-list.svg"
import ArrowRight from "@/assets/icon/arrow-right-line.svg"
import FlowChart from "@/assets/icon/flow-chart.svg"
import ShieldUSer from "@/assets/icon/shield-user-line.svg"
import Book from "@/assets/icon/book-2-line.svg"
import Team from "@/assets/icon/team-line.svg"
import Database from "@/assets/icon/database-2-line.svg"
import Cloud from "@/assets/icon/cloud-line.svg"
import FlashLight from "@/assets/icon/flashlight-line.svg"
import CheckLine from "@/assets/icon/check-line.svg"
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-inter',
})

 // Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 5 },
  },
};


const testimonials = [
  { name: 'Ann', title: 'Co-Founder', image: '/img1.jpg', message: 'Lorem ipsum...' },
  { name: 'John', title: 'CEO', image: '/img2.jpg', message: 'Lorem ipsum...' },
  { name: 'Jane', title: 'CTO', image: '/img3.jpg', message: 'Lorem ipsum...' },
];

const Home = () => {
    
  return (
    <>
        <div className='home_hero'>
            <div className='row home_hero_content'>
                <div className='col-5 text_left'>
                    <div class="header_tag_pill display-flex align-items-center py-2 px-3">
                        <FlashLight className="icon me-1 animate_plus"/>
                        <span>Revolutionary AI Technology</span>
                    </div>
                    <h1 className="gradient-text"> 
                        Redefining <br/>
                        <span className='mb-0'> 
                            <Image src="/images/pages/home-page/curvy-figure.svg" alt="upload" width={300} height={20} />
                        </span>
                        Management 
                    </h1>
                    <p className="mb-0">
                        Experience the next generation of AI-powered inventory control that 
                        learns, adapts, and evolves with your business in real-time.
                    </p>
                    <div className='d-flex home_btn'>
                        <button type="button" className="btn primary_btn_lg me-4">
                            <span className='me-2'><Rocket className="icon"/></span>
                            Start Free Trial
                        </button>
                        <button type="button" className="btn white_outline_btn_lg">
                            <span className='me-2'>
                                <PlayCircle className="icon"/>
                            </span>
                            Watch Demo
                        </button>
                    </div>
                    <div className="d-flex align-items-center ">
                        <div className='d-flex users_wrapper'>
                            <div className='rounded-circle position-relative users'>
                                <Image src="/images/pages/home-page/bg1.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className='rounded-circle position-relative users'>
                                <Image src="/images/pages/home-page/bg2.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className='rounded-circle position-relative users'>
                                <Image src="/images/pages/home-page/bg2.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className='rounded-circle position-relative users_count d-flex justify-content-center align-items-center'>
                                <span>+5K</span>
                            </div>
                        </div>

                        <div className='text-right'>
                            <p className='title mb-0 fw-semibold'>Trusted by 5,000+ companies</p>
                            <p className='sub_title mb-0 mt-0'>across 150+ countries</p>
                        </div>
                    </div>
                    
                </div>
                <div className='col-6'>
                    <div className='hero_img_wrapper'>
                        <div className='hero_img position-relative ratio ratio-4x3'>
                            <Image src="/images/pages/home-page/bg3.png" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container simple_inventory'>
            <div className='row justify-content-center align-items-center simple_inventory_heading'>
                <div className='col-10 text-center'>
                    <h2  className={`${roboto.className} fw-bold`}>One platform <span>SIMPLE</span> inventory management and accounts software</h2>
                </div>
                <div className='col-8 text-center sub_title'>
                    <p className={`${roboto.className} fw-bold`}>“So simple, it just works.” <br/>You read it right, <span>SIMPLE</span>.</p>
                </div>
                <div className='col-10'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button" className="btn secondary_fill_btn me-2">See All Features</button>
                        <button type="button" className="btn primary_btn">Try Sortly Free</button>

                    </div>
                </div>
            </div>

            <div className='row simple_inventory_card_wrapper align-items-center'>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-order.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Purchase Order</p>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-invoicing.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Invoicing</p>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-challan.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Challan</p>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-report.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Reports</p>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-items.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Items</p>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex'>
                    <div className='card'>
                        <div className='card_img ratio ratio-1x1'>
                            <Image src="/images/pages/home-page/icon-ledger.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                        <div className='card_text text-center'>
                            <p className={`${roboto.className} mb-0`}>Ledger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='conatiner water_mark_wrapper'>
            <div className='row'>
                <div className='col-12 text-center water_mark'>
                    <p>INNOVATE • OPTIMIZE • GROW</p>

                </div>

            </div>

        </div>
        <div className='software_product'>
            <div className='software_product_wrapper right py-5 px-5'>
                <div className='row justify-content-around align-items-center p-5'>
                    <div className='col-5 d-flex justify-content-end'>
                        <div className='ratio ratio-4x3 position-relative img_wrapper'>
                            <Image src="/images/pages/home-page/bg7.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                    </div>
                    <div className='col-5'>
                        <p className={`${roboto.className} title`}>Software product companies</p>
                        <p className={`${roboto.className} description`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                        </p>
                        <button type="button" className="btn primary_btn btn_md">Submit</button>

                    </div>
                    
                </div>
            </div>
            <div className='software_product_wrapper left py-5 px-5'>
                <div className='row justify-content-around align-items-center p-5'>
                    <div className='col-5'>
                        <p className={`${roboto.className} title`}>Software product companies</p>
                        <p className={`${roboto.className} description`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                        </p>
                        <button type="button" className="btn primary_btn btn_md">Submit</button>

                    </div>
                    <div className='col-5 '>
                        <div className='ratio ratio-4x3 position-relative img_wrapper'>
                            <Image src="/images/pages/home-page/bg4.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                    </div>
                </div>
            </div>
            <div className='software_product_wrapper right py-5 px-5'>
                <div className='row justify-content-around align-items-center p-5'>
                    <div className='col-5 d-flex justify-content-end'>
                        <div className='ratio ratio-4x3 position-relative img_wrapper'>
                            <Image src="/images/pages/home-page/bg7.svg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                        </div>
                    </div>
                    <div className='col-5'>
                        <p className={`${roboto.className} title`}>Software product companies</p>
                        <p className={`${roboto.className} description`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                        </p>
                        <button type="button" className="btn primary_btn btn_md">Submit</button>

                    </div>
                    
                </div>
            </div>
        </div>
        <div className='conatiner water_mark_wrapper'>
            <div className='row'>
                <div className='col-12 text-center water_mark'>
                    <p>INNOVATE • OPTIMIZE • GROW</p>
                </div>
            </div>
        </div>
        <div className='possibilities_wrapper position-relative'>
            <div className='bg1 position-absolute'></div>
            <div className='bg2 position-absolute'></div>
            <div className='possibilities_wrapper_container row'>
                <div className='row justify-content-center top_heading_wrapper z-1'>
                    <div className='col-8 text-center scale-hover'>
                        <div className='pill_tag d-flex align-items-center column_gap_1 mb-4 m-auto'>
                            <FlashLight className="icon text_red fw-semibold"/>
                            <span className='text_red fw_semibold'>NEXT-GEN FEATURES</span>

                        </div>
                        <h3  className={`${roboto.className} top_heading fw-bod text-center mb-4`}>One Platform, Endless Possibilities</h3>
                        <p className={`${roboto.className} sub_heading fw-bod text-center`}>
                            Experience the future of inventory management with our AI-powered system. Transform <br/>your operations with 
                            cutting-edge features designed for the modern enterprise.
                        </p>
                    </div>
                </div>
                <div className='row column_gap_4 justify-content-center mx-0 feature_1'>
                    <div className='col-lg left_panal position-relative px-0'>
                        <div className='img_wrapper_outer position-relative'>
                            <div className='image_wrapper ratio ratio-4x3 position-relative'>
                                <Image src="/images/pages/home-page/bg8.jpg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                            </div>
                            <div className='img_gradiant position-absolute'>
                            </div>
                        </div>

                        <div className='floating_cards live_tracking p-4 position-absolute'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='card_icon d-flex justify-content-center align-items-center position-relative me-2'>
                                <RadarLine className="icon"/>
                                </div>
                                    
                                <div className='card_text'>
                                    <p className='title mb-0'>Live Tracking</p>
                                </div>
                            </div>
                        </div>
                        <div className='white_card items_card position-absolute scale-and-move'>
                            <div className='d-flex justify-content-center align-items-center gap_5'>
                                <div className='icon_bg position-relative'>
                                    <div className='icon_bg_gradiant gradient-pulse-bg  position-absolute'></div>
                                    <Stack className="icon"/>
                                </div>
                                <div>
                                    <p className='title_gradiant mb-0'>Total Items</p>
                                    <p className='text_lg text_red mb-0'>25,430</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg inventory_control_wrapper transform px-0 position-relative'>
                            <div className='position-absolute inventory_control-content'></div>
                            <h4 className={`${roboto.className} title fw-bod text-center mb-4`}>Complete Inventory Control</h4>
                            <p className={`${roboto.className} sub_title  mb-4`}>
                                Experience next-level inventory management with our AI-powered solution that 
                                learns and adapts to your unique business requirements in real-time.
                            </p>
                        <div className='row '>
                            <div className='col-6 '>
                                <div className="white_card inevtory_card p-3">
                                    <div className='row justify-content-start mx-0 column_gap_1'>
                                        <div className='col-auto px-0'>
                                            <div className='img_bg position-relative'>
                                                <div className="gradient-pulse-bg position-absolute"> </div>
                                                <Store className="icon"/>
                                            </div>
                                        </div>

                                        <div className='col-lg px-0'>
                                            <h5 className="text_lg">Smart Stock Management</h5>
                                            <p className={`${roboto.className} text_gray mb-0`}>
                                                AI-powered tracking across multiple locations with 
                                                predictive analytics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className="white_card inevtory_card p-3">
                                    <div className='row justify-content-start mx-0 column_gap_1'>
                                        <div className='col-auto px-0'>
                                            <div className='img_bg position-relative'>
                                                <div className="gradient-pulse-bg position-absolute"> </div>
                                                <Store className="icon"/>
                                            </div>
                                        </div>

                                        <div className='col-lg px-0'>
                                            <h5 className="text_lg">Smart Stock Management</h5>
                                            <p className={`${roboto.className} text_gray mb-0`}>
                                                AI-powered tracking across multiple locations with 
                                                predictive analytics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row column_gap_4 justify-content-center mx-0 feature_2'>
                    
                    <div className='col-lg workflow_wrapper px-0'>
                        <div className='row mx-0 align-items-center column_gap_4 justify-content-center'>
                            <div className='col-lg-5 px-0'>
                                <div className='workflow_list'>
                                    <h3 className={`${roboto.className} fw-bold mb-3`}>Streamlined <br/> Workflows</h3>
                                    <p className='text_gray mb-4'>
                                        Automate your business processes with integrated workflows 
                                        for orders, invoicing, and delivery management.
                                    </p>
                                    <div className='workflow_list_wrapper'>
                                        <div className='list_card d-flex align-items-center justify-content-between p-3 gap_5 '>
                                                <div className='file_icon d-flex align-items-center justify-content-center'>
                                                    <FileList className="icon"/>
                                                </div>
                                            <div className='flex-grow-1'>
                                                <p className='card_text mb-0 fw-semibold'>Purchase Orders</p>
                                                <p className='text_sm text_gray mb-0'>Create and track orders</p>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight className="icon"/>
                                            </div>
                                        </div>
                                        <div className='list_card d-flex align-items-center justify-content-between p-3 mt-3 gap_5 '>
                                                <div className='file_icon d-flex align-items-center justify-content-center'>
                                                    <FileList className="icon"/>
                                                </div>
                                            <div className='flex-grow-1'>
                                                <p className='card_text mb-0 fw-semibold'>Delivery Challans</p>
                                                <p className='text_sm text_gray mb-0'>Streamlined shipping process</p>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight className="icon"/>
                                            </div>
                                        </div>
                                        <div className='list_card d-flex align-items-center justify-content-between p-3 mt-3 gap_5 '>
                                                <div className='file_icon d-flex align-items-center justify-content-center'>
                                                    <FileList className="icon"/>
                                                </div>
                                            <div className='flex-grow-1'>
                                                <p className='card_text mb-0 fw-semibold'>Invoicing</p>
                                                <p className='text_sm text_gray mb-0'>Automated billing system</p>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight className="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg px-0'>
                                <div className='worflow_img_wrapper position-relative'>
                                    <div className='worflow_img position-relative ratio ratio-4x3'>
                                        <Image src="/images/pages/home-page/bg9.jpg" alt="upload" fill style={{ objectFit: 'contain' }}  />
                                    </div> 
                                        

                                    <div className='white_card worflow_card position-absolute'>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className='icon_bg me-3'>
                                                <FlowChart className="icon"/>
                                            </div>
                                            <div>
                                                <p className='fw-semibold title mb-0'>Active Workflows</p>
                                                <p className='fw-bold text_m text_red mb-0'>1,240</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className='col-lg advance_management_wrapper px-0 display-flex align-items-center'>
                        <div className='row column_gap_4 justify-content-center align-items-center mx-0 position-relative'>
                            <div className='position-absolute bg'>

                            </div>
                            <div className='position-absolute bg_icon_wrapper inset_0'>
                                <Database className="database_icon icon position-absolute"/>
                                <Cloud className="cloud_icon icon position-absolute"/>
                            </div>
                            <div className='col-lg px-0'>
                                <div className='advance_management_img_wrapper position-relative'>
                                    <div className='advance_management_img posotion-relative ratio ratio-4x3'>
                                        <Image src="/images/pages/home-page/bg10.jpg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                                    </div>

                                    <div className='white_card advance_management_card position-absolute'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='icon_bg me-3'>
                                                    <ShieldUSer className="icon"/>
                                                </div>
                                                <div>
                                                    <p className='fw-semibold title mb-0'>Active Users</p>
                                                    <p className='fw-bold text_m text_red mb-0'>342</p>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg px-0'>
                                <div className='advance_management_list'>
                                    <h3 className={`${roboto.className} fw-bold mb-3`}>Advanced Management Tools</h3>
                                    <p className='text_gray mb-4'>
                                        Take control of your business with comprehensive ledger management and role-based access control.
                                    </p>
                                </div>
                                <div className='advance_management_list_wrapper'>
                                    <div className="white_card">
                                        <div className='d-flex align-items-center mb-3'>
                                            <div className='icon_bg me-3'>
                                                <Book className="icon"/>
                                            </div>
                                            <p className='title fw-semibold'>Financial Ledger</p>
                                        </div>
                                            
                                        <div className='d-flex align-items-center justify-content-between text_sm'>
                                            <span className='text_gray'>Today's Entries</span>
                                            <span className='fw-semibold'>127</span>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between text_sm mt-2'>
                                            <span className='text_gray'>Monthly Balance</span>
                                            <span className='text_green '>+$45,230</span>
                                        </div>
                                    </div>
                                    <div className="white_card mt-4">
                                        <div className='d-flex align-items-center mb-3'>
                                            <div className='icon_bg me-3'>
                                                <Team className="icon"/>
                                            </div>
                                            <p className='title fw-semibold'>User Management</p>
                                            
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between text_sm'>
                                            <span className='text_gray'>Total Roles</span>
                                            <span className='fw-semibold'>8</span>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between text_sm mt-2'>
                                            <span className='text_gray'>Permission Sets</span>
                                            <span className='fw_semibold'>15</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='conatiner water_mark_wrapper'>
            <div className='row'>
                <div className='col-12 text-center water_mark'>
                    <p>INNOVATE • OPTIMIZE • GROW</p>
                </div>
            </div>
        </div>


        <div className='pricing_card_wrapper pricing-bg-gradient-to-br position-relative'>
            <div className='position-absolute inset_0'>
                <div className='pricing-bg-radial-gradient_one position-absolute inset_0'></div>
                <div className='pricing-bg-radial-gradient_second  position-absolute inset_0'></div>

            </div>
            <div className='price_container'>
                <div className='row'>
                    <div className='col-12 heading text-center'>
                        <h2 className='fw-bold mb-3'>Transparent Pricing for Every Business</h2>
                        <p>Choose the plan that best fits your business needs. No hidden fees.</p>

                    </div>

                </div>
                <div className='row justify-content-center gap_2 position-relative'>
                    <div className='position-absolute inset_0 price-card-bg-custom'>

                    </div>
                    <div className='col-3 px-0'>
                        <div className='pricing_card'>
                            <h3 className='fw-semibol mb-2'>Starter</h3>
                            <p className='fw-bold card_sub_heading mb-3'>$49<span className='text_mute'>/month</span></p>
                            <ul className='check_list list-unstyled'>
                                <li><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                            </ul>
                            <button type="button" class="btn white_outline_btn_md w-100">Get Started</button>
                        </div>
                    </div>
                    <div className='col-3 px-0'>
                        <div className='pricing_card most_popular position-relative'>
                            <div className='pill_tag px-3 py-1 text-center position-absolute'>
                                <span className='text_sm'>Most Popular</span>

                            </div>
                            <h3 className='fw-semibol mb-2'>Starter</h3>
                            <p className='fw-bold card_sub_heading mb-3'>$49<span className='text_mute'>/month</span></p>
                            <ul className='check_list list-unstyled'>
                                <li><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                            </ul>
                            <button type="button" class="btn primary_btn w-100">Get Started</button>
                        </div>
                    </div>
                    <div className='col-3 px-0'>
                        <div className='pricing_card'>
                            <h3 className='fw-semibol mb-2'>Starter</h3>
                            <p className='fw-bold card_sub_heading mb-3'>$49<span className='text_mute'>/month</span></p>
                            <ul className='check_list list-unstyled'>
                                <li><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                                <li className='mt-2'><CheckLine className="icon me-2"/><span>Up to 1,000 items</span></li>
                            </ul>
                            <button type="button" class="btn white_outline_btn_md w-100">Get Started</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>


  
        <div className="container mx-auto py-10">
           <OwlCarousel className="owl-theme" {...options}>
                <div className="item"><h4>1</h4></div>
                <div className="item"><h4>2</h4></div>
                <div className="item"><h4>3</h4></div>
                <div className="item"><h4>4</h4></div>
                </OwlCarousel>
         </div>


      
    </>
  )
}

export default Home
