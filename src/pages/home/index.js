import React from 'react'
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

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-inter',
})

const Home = () => {
  return (
    <>
        <div className='home_hero'>
            <div className='row home_hero_content'>
                <div className='col-5 text_left'>
                    <h1 className="gradient-text"> 
                        Redefining <br/>
                        <span className='mb-0'> 
                            <Image src="/images/pages/home-page/curvy-figure.svg" alt="upload" width={300} height={20} />
                        </span>
                        Management 
                    </h1>
                    <p>
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
            <div className='possibilities_wrapper_container row mx-0'>
                <div className='row justify-content-center'>
                    <div className='col-8 text-center'>
                        <h3  className={`${roboto.className} top_heading fw-bod text-center mb-4`}>One Platform, Endless Possibilities</h3>
                        <p className={`${roboto.className} sub_heading fw-bod text-center`}>
                            Experience the future of inventory management with our AI-powered system. Transform <br/>your operations with 
                            cutting-edge features designed for the modern enterprise.
                        </p>
                    </div>
                </div>
                <div className='row mx-0'>
                    <div className='col-6 left_panal position-relative'>
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
                        <div className='floating_cards total_items_card p-4 position-absolute'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='card_icon d-flex justify-content-center align-items-center position-relative me-2'>
                                    <div className='icon_bg gradient-pulse-bg  position-absolute'></div>
                                    <Stack className="icon"/>
                                </div>


                                <div className='card_text'>
                                    <p className='title mb-0'>Total Items</p>
                                    <p className='sub_title mb-0'>25,430</p>

                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='col-5 inventory_control_wrapper'>
                        <h4 className={`${roboto.className} title fw-bod text-center mb-4`}>Complete Inventory Control</h4>
                        <p className={`${roboto.className} sub_title  mb-4`}>
                            Experience next-level inventory management with our AI-powered solution that 
                            learns and adapts to your unique business requirements in real-time.
                        </p>
                        <div className='row '>
                            <div className='col-6 '>
                            <div className="inevtory_card card p-3">
                                <div className="card-body p-0">
                                    <div className='row justify-content-start mx-0'>
                                        <div className='col-2 pe-0'>
                                        <div className='img_bg position-relative me-2'>
                                        <div className="gradient-pulse-bg position-absolute"> </div>
                                            <Store className="icon"/>

                                        </div>
                                        </div>
                                        <div className='col-10 ps-0'>
                                        <div className='card_text'>
                                            <h5 className="card-title">Smart Stock Management</h5>
                                            <p className={`${roboto.className} card-text mb-0`}>
                                                AI-powered tracking across multiple locations with 
                                                predictive analytics
                                            </p>

                                        </div>

                                        </div>

                                    
                                    
                                    </div>
                                
                                </div>
                            </div>

                            </div>
                            <div className='col-6 '>
                            <div className="inevtory_card card p-3">
                                <div className="card-body p-0">
                                    <div className='row justify-content-start mx-0'>
                                        <div className='col-2 pe-0'>
                                        <div className='img_bg position-relative me-2'>
                                        <div className="gradient-pulse-bg position-absolute"> </div>
                                            <Store className="icon"/>

                                        </div>
                                        </div>
                                        <div className='col-10 ps-0'>
                                        <div className='card_text'>
                                            <h5 className="card-title">Smart Stock Management</h5>
                                            <p className={`${roboto.className} card-text mb-0`}>
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

                    </div>

                </div>

                <div className='row'>
                    <div className='col-6 workflow_wrapper'>
                        <div className='row mx-0 align-items-center'>
                            <div className='col-6'>
                                <div className='workflow_list'>
                                    <h3 className={`${roboto.className} fw-bold`}>Streamlined Workflows</h3>
                                    <p className='text_small'>
                                        Automate your business processes with integrated workflows 
                                        for orders, invoicing, and delivery management.
                                    </p>
                                    <div className='workflow_list_wrapper'>
                                        <div className='list_card d-flex align-items-center justify-content-between p-4 '>
                                            <div className='d-flex'>
                                                <div className='file_icon d-flex align-items-center justify-content-center me-3'>
                                                    <FileList className="icon"/>
                                                </div>
                                                <div>
                                                <p className='card_text mb-0 fw-semibold'>Purchase Orders</p>
                                                <p className='card_sub_text mb-0'>Create and track orders</p>

                                                </div>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight/>
                                            </div>
                                        </div>
                                        <div className='list_card d-flex align-items-center justify-content-between p-4 mt-3'>
                                            <div className='d-flex'>
                                                <div className='file_icon d-flex align-items-center justify-content-center me-3'>
                                                    <FileList className="icon"/>
                                                </div>
                                                <div>
                                                <p className='card_text mb-0 fw-semibold'>Delivery Challans</p>
                                                <p className='card_sub_text mb-0'>Streamlined shipping process</p>

                                                </div>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight/>
                                            </div>
                                        </div>
                                        <div className='list_card d-flex align-items-center justify-content-between p-4 mt-3'>
                                            <div className='d-flex'>
                                                <div className='file_icon d-flex align-items-center justify-content-center me-3'>
                                                    <FileList className="icon"/>
                                                </div>
                                                <div>
                                                <p className='card_text mb-0 fw-semibold'>Invoicing</p>
                                                <p className='card_sub_text mb-0'>Automated billing system</p>

                                                </div>
                                            </div>
                                            <div className='arrow_icon'>
                                                <ArrowRight/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 px-5'>
                                <div className='worflow_img_wrapper position-relative'>
                                    <div className='worflow_img position-relative ratio ratio-4x3'>
                                        <Image src="/images/pages/home-page/bg9.jpg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                                    </div> 
                                        

                                    <div className='card floating_cards worflow_card position-absolute'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='icon_outer d-flex justify-content-center align-items-center'>
                                                    <FlowChart className="icon"/>
                                                </div>
                                                <div>
                                                    <p className='fw-semibold card_title mb-0'>Active Workflows</p>
                                                    <p className='fw-bold card_text mb-0'>1,240</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                            



                    <div className='col-6 advance_management_wrapper'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='advance_management_img_wrapper position-relative'>
                                    <div className='advance_management_img posotion-relative ratio ratio-4x3'>
                                        <Image src="/images/pages/home-page/bg10.jpg" alt="upload" fill style={{ objectFit: 'cover' }}  />
                                    </div>

                                    <div className='card floating_cards advance_management_card position-absolute'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='icon_outer d-flex justify-content-center align-items-center'>
                                                    <ShieldUSer className="icon"/>
                                                </div>
                                                <div>
                                                    <p className='fw-semibold card_title mb-0'>Active Users</p>
                                                    <p className='fw-bold card_text mb-0'>342</p>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='advance_management_list'>
                                    <h3 className={`${roboto.className} fw-bold`}>Streamlined Workflows</h3>
                                    <p className='text_small'>
                                        Automate your business processes with integrated workflows 
                                        for orders, invoicing, and delivery management.
                                    </p>
                                </div>
                                <div className='advance_management_list_wrapper'>
                                    <div className='list_card d-flex align-items-center justify-content-between p-4 '>
                                        <div className='d-flex'>
                                            <div className='file_icon d-flex align-items-center justify-content-center me-3'>
                                                <FileList className="icon"/>
                                            </div>
                                            <div>
                                            <p className='card_text mb-0 fw-semibold'>Purchase Orders</p>
                                            <p className='card_sub_text mb-0'>Create and track orders</p>

                                            </div>
                                        </div>
                                        <div className='arrow_icon'>
                                            <ArrowRight/>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>

                    </div>



                                
                                



                    


                      
                       


                </div>
            </div>

           

                    
               


        </div>






               










                   



      
    </>
  )
}

export default Home
