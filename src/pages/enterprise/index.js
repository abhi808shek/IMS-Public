import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})


const Enterprise = () => {
    const [tab, setTab] = useState("Managing");
  return (
    <>
    <div className='enterprise_hero'>
        <div className='row justify-content-lg-center justify-content-xl-between aign-items-start px-4 px-md-5 position-relative'>
            <div className='enterprise_bg_img position-absolute'>
                <Image src="/images/pages/enterprise/bg1.svg" alt="upload" width={879} height={481}  />
            </div>

            <div className='col-12 col-lg-5'>
                <h1 className={`${roboto.className}`}>Inventory management software that’s perfect for large teams.</h1>
                <p>Sortly enables teams of 12 or more people to track inventory in real time from multiple locations.</p>
            </div>

            <div className='col-12 col-lg-7 col-xl-6 d-flex d-lg-block align-items-center justify-content-center'>
                <form class="custom-form">
                    <div className='form_inputs_fields'>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                <input type="text" class="form-control" id="firstName" placeholder="First name" required/>
                                <label for="firstName">First name*</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                <input type="text" class="form-control" id="lastName" placeholder="Last name" required/>
                                <label for="lastName">Last name*</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-floating mt-3">
                            <input type="email" class="form-control" id="email" placeholder="Work email" required/>
                            <label for="email">Work email*</label>
                        </div>

                        <div class="form-floating mt-3">
                            <input type="tel" class="form-control" id="phone" placeholder="Phone number" required/>
                            <label for="phone">Phone Number*</label>
                        </div>
                    </div>


                    <div className={`${roboto.className} form-label-section`}>How Many Users Will You Need? *</div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="users" id="user1" required/>
                    <label className={`${roboto.className} form-check-label`} for="user1">12–15</label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="users" id="user2"/>
                    <label className={`${roboto.className} form-check-label`} for="user2">16–20</label>
                    </div>
                    <div class="form-check mb-2 mb-md-5">
                    <input class="form-check-input" type="radio" name="users" id="user3"/>
                    <label className={`${roboto.className} form-check-label`} for="user3">21+</label>
                    </div>
                    <div class="form-check mb-5 d-flex align-items-center">
                    <input class="form-check-input checkbox" type="checkbox" id="terms" required/>
                    <label className={`${roboto.className} form-check-label terms-text ms-2`} for="terms">
                        I agree to the <span>Terms of Service</span> and <span>Privacy Policy *</span>
                    </label>
                    </div>
                    <button type="submit" class="btn primary_btn w-100 py-2">Submit</button>
                </form>
            </div>
        </div>
    </div>

    <div className='entrprise_large_business'>
        <div className='custom_container container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-10 col-lg-12 each_feature_heading'>
                    <h2 className={`${roboto.className} text-center`}>Why use Sortly for your large<br/> business?</h2>
                    <p className={`${roboto.className} text-center mb-0`}>
                        Sortly helps businesses of all sizes track the inventory and assets that make
                        their company run- saving them time, money, ans stress.
                    </p>
                </div>
            </div>
        </div>

        <div className='inventory_checklist inventory_checklist_bg_right'>
            <div className='custom_container container '>
                <div className='row justify-content-between inventory_checklist_content align-items-center'>
                    <div className='col-12 col-lg-5 col-xl-4 px-4 pe-lg-5 mb-5 mb-lg-0 d-flex align-items-center'>
                        <div className='check_list'>
                            <p className={`${roboto.className} fw-bold heading_tag`}>Key <span>Features</span></p>
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
                            <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p>
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

export default Enterprise
