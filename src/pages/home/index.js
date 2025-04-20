import React from 'react'
import Image from "next/image";
import { Roboto } from 'next/font/google'
import PlayCircle from "@/assets/icon/play-circle-line.svg"
import Rocket from "@/assets/icon/rocket-line.svg"
// import CurvyFigure from "@/assets/icon/curvy-figure.svg"

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
                    <h1 class="gradient-text"> 
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
                        <button type="button" class="btn primary_btn_lg me-4">
                            <span className='me-2'><Rocket className="icon"/></span>
                            Start Free Trial
                        </button>
                        <button type="button" class="btn white_outline_btn_lg">
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
                        <button type="button" class="btn secondary_fill_btn me-2">See All Features</button>
                        <button type="button" class="btn primary_btn">Try Sortly Free</button>

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
                        <button type="button" class="btn primary_btn btn_md">Submit</button>

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
                        <button type="button" class="btn primary_btn btn_md">Submit</button>

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
                        <button type="button" class="btn primary_btn btn_md">Submit</button>

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
        <div className='possibilities_wrapper'>
            <div className='row justify-content-center'>
                <div className='col-8 text-center'>
                    <h3  className={`${roboto.className} title fw-bod text-center mb-4`}>One Platform, Endless Possibilities</h3>
                    <p className={`${roboto.className} sub_title fw-bod text-center`}>
                        Experience the future of inventory management with our AI-powered system. Transform <br/>your operations with 
                        cutting-edge features designed for the modern enterprise.
                    </p>
                </div>
            </div>
            <div className='row mx-0'>
                <div className='col-6'>

                </div>
                <div className='col-5 inventory_control_wrapper'>
                    <h4 className={`${roboto.className} title fw-bod text-center mb-4`}>Complete Inventory Control</h4>
                    <p className={`${roboto.className} sub_title fw-bod mb-4`}>
                        Experience next-level inventory management with our AI-powered solution that 
                        learns and adapts to your unique business requirements in real-time.
                    </p>
                    <div className='d-flex'>
                    <div class="card inevtory_card">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-auto'>
                                    <div className='img_wrapper'>
                                        <div className='img'>
                                            <Image src="/Icons/store.svg" alt="upload" fill style={{ objectFit: 'conatin' }}  />
                                        </div>
                                    </div>

                                </div>


                                <div className='col-10'>
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

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
