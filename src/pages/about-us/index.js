import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})


const AboutUs = () => {
  return (
    <>
      
   
    <div className='row breadcrumb-wrapper px-5 mx-3 '>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className={`${roboto.className}  breadcrumb-item`}><Link href="#" className='item_link'>Home</Link></li>
                <li className={`${roboto.className} breadcrumb-item active`} aria-current="page">About us</li>
            </ol>
        </nav>
    </div>
    
    <div className='aboutus_hero'>
        <div className='row justify-content-between align-items-center hero_container'>
            <div className='col-md-12 col-lg-5 leftpanal mb-5 mb-lg-0'>
                <h1  className={`${roboto.className} fw-bold`}>About<span>Us</span>.</h1>
                <p  className={`${roboto.className} fw-bold mb-4`}>
                    Sortly is a software solution designed for businesses to 
                    streamline and modernize every aspect of managing inventory.
                </p>
                <div className='d-flex justify-content-start align-ites-center'>
                    <button type="button" className="btn secondary_fill_btn me-2">See All Features</button>
                    <button type="button" className="btn primary_btn">Try Sortly Free</button>
                </div>
            </div>

            <div className='col-12 col-lg-7 position-relative'>
                <div className='about_hero_img position-relative'>
                    <Image className="me-4" src="/images/pages/about-us/bg1.svg" alt="upload" fill style={{ objectFit: 'contain' }} />	
                    <Image className="me-4 hero_img_bg" src="/images/pages/about-us/bg2.svg" alt="upload"  fill style={{ objectFit: 'contain' }} />	
                </div>
            </div>
        </div>
    </div>



    <div className='business_potential'>
        <div className='custom_container container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-12 text-center content'>
                    <h2 className={`${roboto.className} fw-bold`}>We help businesses unlock their<br/> potential.</h2>
                    <p className={`${roboto.className} mb-0`}>
                        Sortly helps businesses of all sizes track the inventory and assets 
                        that make their company run- saving them time, money, ans stress.
                    </p>
                </div>
                <div className='col-6'>
                    <div className='position-relative ratio ratio-16x9'>
                        <Image className='img_potential' src="/images/pages/about-us/bg3.svg" alt="upload" fill style={{ objectFit: 'contain' }} />	
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='sortly_counter_cards position-relative'>
        <div className='container '>
            <div className='row position-absolute title'>
                <div className='col-6 col-md-3'>
                    <p className={`${roboto.className} fw-bold`}>Sortly by<br/> <span>the numbers.</span></p>
                </div>
            </div>

            <div className='row gx-5 pb-0 pb-md-5 mx-0'>
                <div className='col-12 col-md-4 mb-4'>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='row position-relative mb-md-0 mb-lg-3 mb-xl-4 mx-0 ratio ratio-1x1 image_wrapper'>
                                    <Image className="mx-auto" src="/Icons/qr_code.svg" alt5="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <p className={`${roboto.className} card-title fw-bold mb-2`}><span className='me-2'>11.5</span>million</p>
                            <p className={`${roboto.className} card-text fw-bold`}>Items stored</p>
                        </div>
                    </div>
                </div>

                        
                <div className='col-12 col-md-4 mb-4'>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='row position-relative mb-md-0 mb-lg-3 mb-xl-4  mx-0 ratio ratio-1x1 image_wrapper'>
                                    <Image className="mx-auto" src="/Icons/qr_code.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <p className={`${roboto.className} card-title fw-bold mb-1`}><span className='me-2'>11.5</span>million</p>
                            <p className={`${roboto.className} card-text fw-bold`}>Items stored</p>
                        </div>
                    </div>
                </div>

                        
                <div className='col-12 col-md-4 mb-4 '>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='row position-relative mb-md-0 mb-lg-3 mb-xl-4  mx-0 ratio ratio-1x1 image_wrapper'>
                                    <Image className="mx-auto" src="/Icons/qr_code.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <p className={`${roboto.className} card-title fw-bold mb-1`}><span className='me-2'>11.5</span>million</p>
                            <p className={`${roboto.className} card-text fw-bold`}>Items stored</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                        



    <div className='talant_locate_cards'>
        <div className='world_bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='row justify-content-start align-items-center'>
                    <div className='col-5'>
                        <div className="card">
                            <div className="card-body px-0 py-0">
                                <div>
                                    <h5 className={`${roboto.className} card-title`}>3</h5>
                                    <h6 className={`${roboto.className} card-subtitle mb-2 text-body-secondary`}>Countries</h6> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="card">
                            <div className="card-body px-0 py-0">
                                <div>
                                    <h5 className={`${roboto.className} card-title`}>45</h5>
                                    <h6 className={`${roboto.className} card-subtitle mb-2 text-body-secondary`}>Eployees</h6> 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='row justify-content-start align-items-center'>
                        <div className='col-5'>
                            <div className="card">
                                <div className="card-body px-0 py-0">
                                    <div>
                                        <h5 className={`${roboto.className} card-title`}>17</h5>
                                        <h6 className={`${roboto.className} card-subtitle mb-2 text-body-secondary`}>States</h6> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='col-12 col-md-6 talant_locate_img d-flex justify-content-center align-items-center'>
                    
                    <p className={`${roboto.className} fw-bold`}>
                        Sortly is a fully distributed company with talent located <span>around the globe.</span>
                    </p>

                </div>

            </div>
            
        </div>

        </div>
        
    </div>
    <div className='inventory_cards'>
        <div className='custom_container container '>
            <div className='row'>
                <div className='col-12 col-md-6 mb-4 mb-lg-4'>
                    <div className='inventory_management_card card'>
                        <div className="card-body p-3 p-lg-4">
                            <div className='card_img mb-4'>
                                <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	

                            </div>
                            <h5 className={`${roboto.className} card-title  mb-2 mb-md-2 mb-lg-3 mb-xl-4`}>A business toolkit.</h5>
                            <p className="card-text mb-4">
                                You and your construction crew should be working-not searching forYou 
                                and your construction crew should be working-not searching for.
                            </p>
                            <button type="button" className="btn secondary_fill_btn">See Solutions</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-4 mb-lg-4'>
                    <div className='inventory_management_card card'>
                        <div className="card-body p-3 p-lg-4">
                            <div className='card_img mb-4'>
                                <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                            </div>

                            <h5 className={`${roboto.className} card-title  mb-2 mb-md-2 mb-lg-3 mb-xl-4`}>A business toolkit.</h5>
                            <p className="card-text mb-4">
                                You and your construction crew should be working-not searching forYou 
                                and your construction crew should be working-not searching for.
                            </p>
                            <button type="button" className="btn secondary_fill_btn">See Solutions</button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-4 mb-lg-4'>
                    <div className='inventory_management_card card'>
                        <div className="card-body p-3 p-lg-4">
                            <div className='card_img mb-4'>
                                <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                            </div>

                            <h5 className={`${roboto.className} card-title  mb-2 mb-md-2 mb-lg-3 mb-xl-4`}>A business toolkit.</h5>
                            <p className="card-text mb-4">
                                You and your construction crew should be working-not searching forYou 
                                and your construction crew should be working-not searching for.
                            </p>
                            <button type="button" className="btn secondary_fill_btn">See Solutions</button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 mb-4 mb-lg-4'>
                    <div className='inventory_management_card card'>
                        <div className="card-body p-3 p-lg-4">
                            <div className='card_img mb-4'>
                                <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                            </div>

                            <h5 className={`${roboto.className} card-title  mb-2 mb-md-2 mb-lg-3 mb-xl-4`}>A business toolkit.</h5>
                            <p className="card-text mb-4">
                                You and your construction crew should be working-not searching forYou 
                                and your construction crew should be working-not searching for.
                            </p>
                            <button type="button" className="btn secondary_fill_btn">See Solutions</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>















      
    </>
  )
}

export default AboutUs
