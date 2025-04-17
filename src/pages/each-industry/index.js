import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
import ArrowRightIcon from "@/assets/icon/arrow-right.svg"

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
                    <h1 className={`${roboto.className} mb-5 text-center fw-bold`}>The Best Construction Inventory Software</h1>
                    <p className={`${roboto.className} mb-4 text-center fw-bold`}>
                        You and your construction crew should be working-not searching for supplies or hurting down missing 
                        materials. With Sortly’s construction inventory software.
                    </p>
                </div>
            </div>

            <div className='row  justify-content-center align-items-center video_frame'>
                <div className='col-8'>
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
                <div className='bg_img position-absolute'>
                    <Image className="me-4" src="/images/pages/each-industry/bg1.svg" alt="upload" fill style={{ objectFit: 'cover' }} />	
                </div>
                    

            </div>
        </div>

        <div className='each_industry_construstion_supply'>
            <div className='custom_container container '>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-8 each_feature_heading'>
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

            <div className='construction_supplies_checklist_bg position-relative'>  
                <div className='container '>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-auto'>
                            <div className='img_box'>
                            <Image className="me-4" src="/images/pages/each-industry/bg2.svg" alt="upload" fill style={{ objectFit: 'cover' }} />	

                            </div>

                        </div>
                        <div className='col-4 construction_supplies_checklist'>
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
                                <div className="col-md-7 ellipse_left_bg">
                                    <div className="mb-3 image_container">
                                        <Image className="me-4" src="/images/pages/each-solution/sortly_solutions.png" alt="upload" width={470} height={409} />	
                                    </div>
                                </div>
                                
                                <div className='col-4 ps-5'>
                                    <div className='check_list pt-4'>
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
                    <div className='row justify-content-between inventory_checklist_content'>
                        <div className='col-4 pe-5'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p>
                                <p>Organize and automate your inventory at the touch of a button. </p> */}
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
                        <div className='col-6 '>
                            <div className='check_list_bg ms-auto'>
                                <Image src="/images/pages/each-feature/bg3.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
                    
            <div className='inventory_checklist inventory_checklist_bg_left'>
                <div className='custom_container container '>
                    <div className='row justify-content-between inventory_checklist_content'>
                        <div className='col-6 '>
                            <div className='check_list_bg ms-auto'>
                                <Image src="/images/pages/each-feature/bg3.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                            </div>
    
                        </div>
                        <div className='col-4 ps-5'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p>
                                <p>Organize and automate your inventory at the touch of a button. </p> */}
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
                    <div className='row justify-content-between inventory_checklist_content'>
                        <div className='col-4 pe-5'>
                            <div className='check_list'>
                                {/* <p className={`${roboto.className} fw-bold  mb-1 heading_tag`}>Key <span>Features</span></p> */}
                                <p>Organize and automate your inventory at the touch of a button. </p>
                                <div className='list'>
                                    <div className='d-flex justify-content-end align-items-center mb-3'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Easily upload your existing inventory list into Sortly. </p>
                                    </div>
                                    <div className='d-flex justify-content-end align-items-center mb-3'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Organize inventory folders by location, type, and more. </p>
                                    </div>
                                    <div className='d-flex justify-content-end align-items-center mb-3'>
                                        <Image src="/images/pages/each-feature/check.svg" alt="upload"  width={32} height={32} />
                                        <p className={`${roboto.className} ms-4`}>Add critical item details with custom fields. </p>
                                    </div>
                                    <div className='d-flex'>
                                        <button type="button" class="btn secondary_fill_btn me-2">See All Features</button>
                                        <button type="button" class="btn primary_btn">Try Sortly Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 '>
                            <div className='check_list_bg ms-auto'>
                                <Image src="/images/pages/each-feature/bg3.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='each_industry_invetory'>
            <div className="main_solution_content main_solution_bg5">
                <div className='custom_container container '>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-7 each_feature_heading'>
                            <h2 className={`${roboto.className} mb-4 text-center`}>
                            Sortly construction inventory<br/> management software <br/>feature
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='custom_container container'>
                    <div className='row '>
                        <div className="container col-md-6 inventory_import_tabs">
                            <div className="d-flex justify-content-between">
                                <span onClick={() => setTab("Organizing")} className={`${roboto.className} ${tab === "Organizing" ? "active " : ""} inventory_import_tab`}>Organizing </span>
                                <span onClick={() => setTab("Managing")} className={`${roboto.className} ${tab === "Managing" ? "active " : ""} inventory_import_tab`}>Managing</span>
                                <span onClick={() => setTab("Reporting")} className={`${roboto.className} ${tab === "Reporting" ? "active " : ""} inventory_import_tab`}>Reporting</span>
                            </div>
                        </div>
                    </div>
                    <div className="tabs_content">
                        <div className="container cards">
                            <div className="row justify-content-center">
                                <div className="col-md-3 px-4 mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>

                                <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>

                                <div className="col-md-3  px-4  mb-5  mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>
                            </div>
                        </div>
                        <div className="container cards">
                            <div className="row justify-content-center align-iems-center">
                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px -4 mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>
                            </div>

                        </div>
                        <div className="container cards">
                            <div className="row justify-content-center">
                                <div className="col-md-3 px-4 mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>

                                <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>

                                <div className="col-md-3  px-4  mb-5  mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                    <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                    <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                    <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                </div>
                            </div>
                        </div>
                        <div className="container cards">
                            <div className="row justify-content-center align-iems-center">
                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px-4  mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>

                                    <div className="col-md-3 px-4 mb-5 mb-lg-0 work_order d-flex flex-column justify-content-between align-items-center">
                                        <Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
                                        <h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
                                        <p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_Solution_bg6">
				<div className="main_solution_content pb-0">
					<div className="container mb-5">
						<h1 className={`${roboto.className} text-center mb-5`}>Read more about working in Sortlye</h1>
					</div>
				</div>

				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-3">
							<div class="card p-3">
								<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
									<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
								</div>

								<div class="card-body">
									<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
									<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
									<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon/></span></Link>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div class="card p-3">
								<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
									<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
								</div>

								<div class="card-body">
									<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
									<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
									<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon/></span></Link>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div class="card p-3">
								<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
									<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }}/>
								</div>

								<div class="card-body">
									<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
									<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
									<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon/></span></Link>
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
