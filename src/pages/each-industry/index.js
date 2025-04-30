import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import ArrowRightIcon from "@/assets/icon/arrow-right.svg"
import CheckBoxIcon from "@/assets/icon/check-box.svg"

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})


const EachIndustry = () => {
   const [tab, setTab] = useState("Managing");    
  return (
    <>
        <div className='each_industry_hero position-relative'>
            <div className='row justify-content-center heading'>
                <div className='col-7'>
                    <h1 className={`${roboto.className} text-center fw-bold`}>The Best Construction Inventory Software</h1>
                    <p className={`${roboto.className} text-center fw-bold`}>
                        You and your construction crew should be working-not searching for supplies or hurting down missing 
                        materials. With Sortly’s construction inventory software.
                    </p>
                </div>
            </div>

            <div className='row  justify-content-center align-items-center video_frame'>
                <div className='col-10 col-lg-9 col-xl-8'>
                    <div class="video-frame-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/k3Vfj-e1Ma4" 
                            title="YouTube video"
                            frameborder="0"
                            allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                        </iframe>
                    </div>
                </div>
                <div className='each_industry_bg_img position-absolute'>
                    <Image className="me-4" src="/images/pages/each-industry/bg1.svg" alt="upload" fill style={{ objectFit: 'contain' }} />	
                </div>
            </div>
        </div>
                    


        <div className='each_industry_construstion_supply'>
            <div className='custom_container container '>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-8 each_feature_heading'>
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

            <div className='construction_supplies_checklist_bg construction_supplies position-relative'>  
                <div className='container '>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-lg-7 col-xl-8 mb-4 mb-md-5 mb-lg-0'>
                            <div className='img_box ratio ratio-4x3 position-relative'>
                            <Image className="me-4" src="/images/pages/each-industry/bg2.svg" alt="upload" fill style={{ objectFit: 'contain' }} />	
                            </div>
                        </div>
                        <div className='col-lg-5 col-xl-4 pe-lg-5 pe-xl-4'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p> */}
                                {/* <p>Organize and automate your inventory at the touch of a button. </p> */}
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
                                    <div className='d-flex justify-content-end align-items-center mb-0'>
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



        <div className='each_industry_construstion_supply_checklists'>
            <div className='custom_container container '>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-10 each_feature_heading'>
                        <h2 className={`${roboto.className} mb-4 text-center`}>
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

           <div className='inventory_checklist inventory_checklist_bg_right'>
                <div className='custom_container container '>
                    <div className='row justify-content-between inventory_checklist_content align-items-center'>
                        <div className='col-12 col-lg-5 col-xl-4 px-4 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold heading_tag`}>Key <span>Features</span></p> */}
                                {/* <p className='mb-4'>Organize and automate your inventory at the touch of a button. </p> */}
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

            <div className='inventory_checklist inventory_checklist_bg_right'>
                <div className='custom_container container '>
                    <div className='row justify-content-between inventory_checklist_content align-items-center'>
                        <div className='col-12 col-lg-5 col-xl-4 px-4 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold heading_tag`}>Key <span>Features</span></p> */}
                                <p className='check'><span className='me-3'><CheckBoxIcon/></span>Organizing</p>
                                <p className='mb-4'>Organize and automate your inventory at the touch of a button. </p>
                                <div className='list'>
                                    <div className='d-flex justify-content-lg-end align-items-center mb-1'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Easily upload your existing inventory list into Sortly. </p>
                                    </div>
                                    <div className='d-flex justify-content-lg-end align-items-center mb-1'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Organize inventory folders by location, type, and more. </p>
                                    </div>
                                    <div className='d-flex justify-content-lg-end align-items-center mb-0'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Add critical item details with custom fields. </p>
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <button type="button" class="btn secondary_fill_btn me-2">See All Features</button>
                                        <button type="button" class="btn primary_btn">Try Sortly Free</button>
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
        </div>
   
        <div className='each_industry_invetory inventory_import'>
            <div className='custom_container container '>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-10 col-lg-9 col-xl-12 each_feature_heading'>
                        <h2 className={`${roboto.className} text-center`}>
                            Sortly construction inventory management software feature
                        </h2>
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
                <div className="inventory_import_tab_content">
                    <div className="row justify-content-center align-items-center inventory_container">
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center inventory_container">
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center inventory_container">
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center inventory_container">
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 px-5 px-md-2 px-lg-4 px-xl-5 mb-4 mb-md-0 '>
                            <div className='inventory_card card text-center'>
                                <Image src="/images/pages/each-solution/order.svg" className='mx-auto card_img' alt="work_order" width={24} height={24} />
                                <p className={`${roboto.className} fw-bold card_heading`}>Easy Inventory Import</p>
                                <p className={`${roboto.className} card_sub_heaidng text-center`}>
                                    Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion
                                </p>
                            </div>
                        </div>
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
  )
}

export default EachIndustry
