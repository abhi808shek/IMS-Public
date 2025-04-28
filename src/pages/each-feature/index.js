import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";


const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})

const EachFeature = () => {
     const [tab, setTab] = useState("Managing");
  return (
    <>
    <div className='each_feature_hero'>
        <div className='row justify-content-center each_feature_hero_bg text-align-center position-relative '>
            <div className='col-8 col-md-7 each_feature_hero_container'>
                <div className='each_feature_content'>
                    <h1 className={`${roboto.className} text-center`}>The Best Construction Inventory Software</h1>
                    <p  className={`${roboto.className} text-center`}>
                        You and your construction crew should be working-not searching for supplies 
                        or hurting down missing materials. With Sortly’s construction inventory software.
                    </p>
                </div>
                <div className='each_feature_bg ratio ratio-4x3 position-relative'>
                    <Image src="/images/pages/each-feature/bg1.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    </div>

    <div className='each_feature_inventory'>
        <div className='custom_container container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 each_feature_heading'>
                    <h2 className={`${roboto.className} mb-4 text-center`}>About Sortly’s inventory photo<br/> capabilities.</h2>
                    <p className={`${roboto.className} text-center mb-0`}>
                        Sortly helps businesses of all sizes track the inventory and assets that 
                        make their company run- saving them time, money, ans stress.
                    </p>
                </div>
            </div>
        </div>

        
        <div className='inventory_checklist inventory_checklist_bg_right'>
            <div className='custom_container container '>
                <div className='row justify-content-between inventory_checklist_content align-items-center'>
                    <div className='col-12 col-lg-5 col-xl-4 px-4 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center'>
                        <div className='check_list'>
                            {/* <p className={`${roboto.className} fw-bold heading_tag`}>Key <span>Features</span></p> */}
                            <p className='mb-4'>Organize and automate your inventory at the touch of a button. </p>
                            <div className='list'>
                                <div className='d-flex justify-content-end align-items-center mb-3'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-center mb-3'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-center mb-0'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 px-4 px-lg-0'>
                        <div className='check_list_bg ms-auto ratio ratio-4x3'>
                            <Image src="/images/pages/each-feature/bg3.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className='inventory_checklist inventory_checklist_bg_left'>
            <div className='custom_container container '>
                <div className='row justify-content-between inventory_checklist_content  align-items-center'>
                    <div className='col-6 col-12 col-lg-6 px-4 px-lg-0 order-2 order-lg-1'>
                        <div className='check_list_bg ms-auto ratio ratio-4x3'>
                            <Image src="/images/pages/each-feature/bg3.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                        </div>

                    </div>
                    <div className='col-12 col-lg-5 col-xl-4 px-4 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center order-1 order-lg-2'>
                        <div className='check_list'>
                            {/* <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p> */}
                            <p>Organize and automate your inventory at the touch of a button. </p>
                            <div className='list'>
                                <div className='d-flex justify-content-end align-items-center mb-3'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-center mb-3'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-center mb-3'>
                                    <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                    <p className={`${roboto.className} ms-4`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

    <div className='construction_supplies'>
        <div className='custom_container container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-10 col-xl-12 each_feature_heading'>
                    <h2 className={`${roboto.className} text-center`}>
                        Visualize all your construction supplies and equipment on your Sortly dashboard
                    </h2>
                    <p className={`${roboto.className} text-center mb-0`}>
                        Sortly helps businesses of all sizes track the inventory and assets 
                        that make their company run- saving them time, money, ans stress.
                    </p>

                </div>
            </div>
        </div>

        
        <div className='custom_container container ellipse_container_left'>
            <div className='row justify-content-between align-items-center'>
                <div className="col-12 col-lg-7 ellipse_left_bg px-4">
                    <div className="mb-3 image_container ratio ratio-4x3 position-relative">
                        <Image className="me-0 img_elips" src="/images/pages/each-solution/sortly_solutions.png" alt="upload" width={470} height={409} />	
                    </div>
                </div>
                
                <div className='col-12 col-lg-5 px-4'>
                    <div className='check_list pt-5 pt-lg-4'>
                        <p>Organize and automate your inventory at the touch of a button. </p>
                        <div className='list'>
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-center mb-0'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='custom_container container ellipse_container_right'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-12 col-lg-5 px-4 order-2 order-lg-1'>
                    <div className='check_list pt-5 pt-lg-4'>
                        <p>Organize and automate your inventory at the touch of a button. </p>
                        <div className='list'>
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-center mb-3'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-center mb-0'>
                                <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                <p className={`${roboto.className} ms-4 mb-0`}><span className='fw-bold'>Upload high-resolution</span>photos so you can visually track and verify inventory and monitor condition.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 ellipse_right_bg text-end px-4 order-1 order-lg-2">
                    <div className="mb-3 image_container ratio ratio-4x3 position-relative">
                        <Image className="me-0 img_elips" src="/images/pages/each-solution/sortly_solutions.png" alt="upload" width={470} height={409} />	
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className='inventory_import'>
        <div className='custom_container container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-10 col-xl-12 each_feature_heading'>
                    <h2 className={`${roboto.className} text-center`}>
                        Visualize all your construction supplies and equipment on your Sortly dashboard
                    </h2>
                    <p className={`${roboto.className} text-center mb-0`}>
                        Sortly helps businesses of all sizes track the inventory and assets 
                        that make their company run- saving them time, money, ans stress.
                    </p>

                </div>
            </div>
        </div>

        <div className='custom_container container'>
            <div className='row '>
                <div className="container col-8 col-md-6 inventory_import_tabs">
                    <div className="d-flex justify-content-between">
                        <span onClick={() => setTab("Organizing")} className={`${roboto.className} ${tab === "Organizing" ? "active " : ""} inventory_import_tab`}>Organizing </span>
                        <span onClick={() => setTab("Managing")} className={`${roboto.className} ${tab === "Managing" ? "active " : ""} inventory_import_tab`}>Managing</span>
                        <span onClick={() => setTab("Reporting")} className={`${roboto.className} ${tab === "Reporting" ? "active " : ""} inventory_import_tab`}>Reporting</span>
                    </div>
                </div>
            </div>
            <div className='inventory_import_tab_content'>
                <div className='row justify-content-center align-items-center inventory_container'>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center align-items-center inventory_container'>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center inventory_container'>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center inventory_container'>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                        <div className='inventory_card card text-center'>
                            <div className='image_box d-flex justify-content-center align-items-center mx-auto'>
                                <Image  src="/images/pages/each-feature/user.svg" alt="upload" width={106} height={106} />
                            </div>
                            <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                            <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row bottom_text justify-content-center '>
            <div className='col-7 text-center '>
                <p className={`${roboto.className}`}>The availability of features varies by plan , Visit our <span><Link href="#" className='redirect_link'>pricing page</Link></span> for details.</p>
            </div>

        </div>
    </div>

    <div className='inventory_management'>
        <div className='custom_container container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-10 col-md-12 each_feature_heading'>
                    <h2 className={`${roboto.className} mb-4 text-center`}>
                    Browse Sortly’s inventory management solutions
                    </h2>
                    <p className={`${roboto.className} text-center mb-0`}>
                    No matter what you need to track, Sortky has you covered.
                    </p>

                </div>

            </div>
        </div>
        <div className='inventory_cards'>
            <div className='custom_container container '>
                <div className='row'>
                    <div className='col-12 col-md-6 mb-3 mb-md-4'>
                        <div className='inventory_management_card card'>
                            <div class="card-body p-4">
                                <div className='card_img mb-3 mb-md-4'>
                                    <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                                </div>

                                <h5 className={`${roboto.className} card-title fw-bold mb-3 mb-md-4`}>A business toolkit.</h5>
                                <p className={`${roboto.className} card-text fw-bold mb-3 mb-md-4 mb-3 mb-md-4`}>
                                    You and your construction crew should be working-not searching forYou 
                                    and your construction crew should be working-not searching for.
                                </p>
                                <button type="button" class="btn secondary_fill_btn">See Solutions</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mb-3 mb-md-4'>
                        <div className='inventory_management_card card'>
                            <div class="card-body p-4">
                                <div className='card_img mb-3 mb-md-4'>
                                    <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                                </div>

                                <h5 className={`${roboto.className} card-title mb-3 mb-md-4`}>A business toolkit.</h5>
                                <p className={`${roboto.className} card-text fw-bold mb-3 mb-md-4 mb-3 mb-md-4`}>
                                    You and your construction crew should be working-not searching forYou 
                                    and your construction crew should be working-not searching for.
                                </p>
                                <button type="button" class="btn secondary_fill_btn">See Solutions</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mb-3 mb-md-4'>
                        <div className='inventory_management_card card'>
                            <div class="card-body p-4">
                                <div className='card_img mb-3 mb-md-4'>
                                    <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                                </div>

                                <h5 className={`${roboto.className} card-title mb-3 mb-md-4`}>A business toolkit.</h5>
                                <p className={`${roboto.className} card-text fw-bold mb-3 mb-md-4 mb-3 mb-md-4`}>
                                    You and your construction crew should be working-not searching forYou 
                                    and your construction crew should be working-not searching for.
                                </p>
                                <button type="button" class="btn secondary_fill_btn">See Solutions</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mb-3 mb-md-4'>
                        <div className='inventory_management_card card'>
                            <div class="card-body p-4">
                                <div className='card_img mb-3 mb-md-4'>
                                    <Image className="card_logo" src="/images/pages/each-feature/mail_icon.svg" alt="upload" width={63} height={63} />	
                                </div>

                                <h5 className={`${roboto.className} card-title mb-3 mb-md-4`}>A business toolkit.</h5>
                                <p className={`${roboto.className} card-text fw-bold mb-3 mb-md-4`}>
                                    You and your construction crew should be working-not searching forYou 
                                    and your construction crew should be working-not searching for.
                                </p>
                                <button type="button" class="btn secondary_fill_btn">See Solutions</button>
                                
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

export default EachFeature


