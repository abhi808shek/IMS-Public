import React, { useState } from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})


const Blogs = () => {

    const [filter, setFilter] = useState("All")
    const filterData = [
        "All",
        "Asset Management",
        "Barcode & QR Codes",
        "Construction",
        "Customer Success Stories",
        "Education",
        "Employee Spotlight",
        "HVAC & Plumbing",
        "Interior Design",
        "Inventory Accounting",
        "Inventory Control",
        "Inventory Management"
    ]

    return (
        <>
            <div className='aboutus_hero'>
                <div className='row justify-content-between align-items-center hero_container'>
                    <div className='col-5 leftpanal'>
                        <h1 className={`${roboto.className} fw-bold mb-5`}>Only <span>Inventory </span>Management Resource Center..</h1>
                        <p className={`${roboto.className} fw-bold mb-5`}>
                            All the inventory news & insights <br />
                            you need, delivered staight to your inbox every week.
                        </p>
                        <div className='d-flex justify-content-start align-ites-center position-relative'>
                            <div class="form-floating w-100">
                                <input type="text" class="form-control" id="firstName" placeholder="First name" required />
                                <label for="firstName">Work email*</label>
                            </div>
                            <button type="button" class="btn primary_btn position-absolute" style={{ right: '-100px', bottom: 0, height: '110%' }}>Try Sortly Free</button>
                        </div>
                    </div>

                    <div className='col-7 position-relative'>
                        <div className='about_hero_img position-relative'>
                            <Image className="me-4" src="/images/pages/blogs/bg1.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                            <Image className="me-4 hero_img_bg" src="/images/pages/about-us/bg2.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className={roboto.className + " col-3 blogs-filter"}>
                        <div>
                            <div class="d-flex align-items-center mb-4">
                                <span class="me-2 fw-bold title">Topics</span>
                                <div class="flex-grow-1">
                                    <hr class="m-0" style={{ height: "2px", backgroundColor: "#000", opacity: 1 }} />
                                </div>
                            </div>
                        </div>

                        {
                            filterData.map(filterItem => (
                                <div class={`filter-item d-flex justify-content-between ${filterItem===filter ? "active" : ""}`} onClick={() => setFilter(filterItem)}>
                                    <span className="d-flex align-items-center">
                                        <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor"><path d="M7.30759 8.64641L0.80281 2.14163L1.5707 1.37373L9.19693 8.99996L1.5707 16.6262L0.80281 15.8583L7.30759 9.35351L7.66114 8.99996L7.30759 8.64641Z" stroke="#0D0D0D" /></svg>
                                        <span class="me-2 fw-bold filter-text">{filterItem}</span>
                                    </span>
                                    <span class="filter-count">(10)</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="col-9">
                        <div className="row">
                            {
                                Array(15).keys().map((e, i) => (
                                    <div className="col-md-6 col-lg-4">
                                        <div key={`blogsCard` + i} class={`card rounded blogs-card mb-4 position-relative ${i % 2 === 0 ? "card1" : "card2"}`}>
                                            <div className="blog-card-overlay rounded position-absolute w-100 h-100" />
                                            <div class="card-body d-flex flex-column justify-content-end">
                                                <span class="badge rounded-pill bg-light text-dark position-absolute" style={{ top: "1rem" }}>Grow</span>
                                                <h5 class={roboto.className + ` card-title`}>Gardening Tips: From Seedlings to Blossoms</h5>
                                                <span className="d-flex align-items-center">
                                                    <Image className="me-2 rounded-circle" src="/images/pages/blogs/card-profile.png" alt="profile" width={24} height={24} />
                                                    <span className={roboto.className + ` text-white profile-title me-3`}>By Jason Carter</span>
                                                    <Image className="me-1" src="/images/pages/blogs/calendar.svg" alt="calendar" width={16} height={16} />
                                                    <span className={roboto.className + ` text-white profile-title`}>18 Apr, 2025</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="blogs-pages d-flex align-items-center justify-content-center my-5">
                            <Image className="arrow mx-2" src="/images/pages/blogs/left.svg" alt="left-arrow" width={32} height={32} />
                            <span className="page-number">01</span>
                            <span className="page-number">...</span>
                            <span className="page-number">03</span>
                            <span className="page-number active">04</span>
                            <span className="page-number">...</span>
                            <span className="page-number">10</span>
                            <Image className="arrow mx-2" src="/images/pages/blogs/right.svg" alt="left-arrow" width={32} height={32} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Blogs
