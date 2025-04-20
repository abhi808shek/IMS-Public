import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function BlogDetail() {
    return (
        <>
            <div className='row breadcrumb-wrapper px-5 mx-3 mb-4'>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li className={`${roboto.className} breadcrumb-item`}><Link href="/blogs" className='item_link'>Blog</Link></li>
                        <li className={`${roboto.className} breadcrumb-item active`} aria-current="page">Construction</li>
                        <li className={`${roboto.className} breadcrumb-item active`} aria-current="page">Download Shortly's 2025 state...</li>
                    </ol>
                </nav>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="fw-bold mb-3">Construction</div>
                        <h1 className={roboto.className + " fw-bold mb-3"} style={{fontSize: "64px"}}>
                            Download Shortly's 2025 <br />
                            state of construction<br />
                            report
                        </h1>
                        <div className={roboto.className + " mb-3"}>19 Apr 2025 • 2 min read </div>
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="ratio ratio-16x9">
                        <Image className="me-4" alt="upload" layout="fill" objectFit="cover" src="/images/pages/blogs-detail/blog-detail-banner.jpeg" />
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <p>The construction industry has faced a tumultuous few years, and 2025 is no exception. The lingering effects of the pandemic, coupled with new economic challenges, have made it more important than ever to stay informed and adapt. To keep construction professionals in the loop, our State of Construction Report dives deep into the current industry landscape, analyzing key trends and offering predictions for the coming year.</p>
                        <p>Sortly's <b>2025 State of Construction Report</b> takes an in-depth look at the major trends, challenges, and opportunities currently shaping the construction industry. Here's a glimpse of what you can expect to find inside:</p>
                        <ul>
                            <li className="mb-2"><b>A snapshot of the industry today:</b> Explore insights on the construction talent gap, job growth by state, and private construction spending.</li>
                            <li className="mb-2"><b>A look ahead to 2025:</b> Discover the anticipated growth and demand projections for commercial, residential, and industrial construction sectors.</li>
                            <li className="mb-2"><b>Addressing the labor shortage:</b> Uncover the labor outlook and potential solutions for bridging the talent gap.</li>
                            <li className="mb-2"><b>Understanding the impact of raw materials:</b> Learn about the raw materials outlook and its implications for the industry as a whole.</li>
                            <li className="mb-2"><b>Technology's transformative role:</b> Explore how smart inventory solutions are revolutionizing construction, empowering professionals to excel in a demanding market.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <h5 className="fw-bold mb-4" >About Shortly</h5>
                        <Image className="d-block mx-auto mb-4" width="550" height="490" alt="upload" src="/images/pages/blogs-detail/about-shortly.png" />
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <p>Sortly is an <span className="text-danger">inventory management solution</span> that helps you track, manage, and organize your inventory from any device, in any location. We're an easy-to-use inventory software that's perfect for construction businesses of all sizes. Sortly builds inventory tracking seamlessly into your workday so you can save time and money, satisfy your customers, and help your business succeed.</p>
                        <p>With Sortly, you can <span className="text-danger">track construction inventory</span> like supplies, parts, tools, equipment, and anything else that matters to your construction business. It comes equipped with smart features like <span className="text-danger">barcoding & QR coding, low stock alerts, customizable folders, data-rich reporting</span>, and much more Best of all, you can update inventory right from your smartphone, whether you're on the job, in the warehouse, or on the go.</p>
                        <p>Whether you're just getting started with inventory management or you're an expert looking for a more efficient solution, we can transform how your company manages inventory-so you can focus on building your business. That's why over 15,000 businesses globally trust us as their inventory management solution.</p>
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <p><b>Start your two-week <span className="text-danger">free trial of Sortly</span> today.</b></p>
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <div className="row">
                    {
                        Array(4).keys().map((e, i) => (
                            <Link href="/blogs/blog-detail" style={{textDecoration: "none"}} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div class="card">
                                    <div className="ratio ratio-16x9">
                                    <Image class="card-img-top" layout="fill" objectFit="cover" src="/images/pages/blogs-detail/blog-detail-banner.jpeg" alt="Card image cap" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold mb-2">6 Inventory management best practises in consstruction</h5>
                                        <div className="mb-2">
                                            <span class="badge badge-pill badge-light shadow-sm text-dark me-2">construction</span>
                                            <span class="badge badge-pill badge-light shadow-sm text-dark me-2">small business</span>
                                        </div>
                                        <div className="fw-bold" style={{fontSize: ".75rem"}}>March 21 2025 • 3 min read</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>


        </>
    )
}