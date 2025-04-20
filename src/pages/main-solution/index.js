import Head from "next/head";
import Image from "next/image";
import { Roboto } from 'next/font/google'
import { useState } from "react";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icon/arrow-right.svg"

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function MainSolution() {

	const [tab, setTab] = useState("Managing");

	return (
		<>
			<div className="main_solution_hero">
				<div className="row main_solution_bg">
					<div className="col-12 col-md-6 m-0 d-flex align-items-center justify-content-center">
						<div className="main_solution_left_panel">
							<h1 className={`${roboto.className} main_solution_header mb-5`}>Inventory Software for your industry.</h1>
							<p className={`${roboto.className} main_solution_text mb-4`}> You and your construction crew should be working-not searching for supplies or hurting down missing materials. With Sortly’s construction inventory software.</p>
							<div>
								<button type="button" className="btn secondary_fill_btn me-3">See All Features</button>
								<button type="button" className="btn primary_fill_btn">Try Sortly Free</button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="main_solution_right_panel">
						</div>
					</div>
				</div>
			</div>

			<div className="main_Solution_bg6 mb-0">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-9">
						<div className="main_solution_content pb-0">
							<div className="container mb-5">
								<h3 className={`${roboto.className} fw-bold mb-5 w-75`}>A business toolkit for <br />every business</h3>
							</div>

							<div className="container mb-5">
								<div className="row">
									{
										Array(3).keys().map(_ => (
											<div className="col-md-6 col-lg-4 mb-5 pe-4 ">
												<div class="card py-4 px-2 main-solution-card bd-top-green">
													<div class="card-body">
														<div className='icon position-relative ms-2 mb-3 ratio ratio-1x1 img_wrapper'>
															<Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
														</div>
														<h5 className={roboto.className+" mb-2 fw-bold card-title"}>Antiques</h5>
														<p className={roboto.className + " mb-2"} style={{fontSize: "1rem", color: "#666666"}}>Track,organize and manage all your business’s inventory</p>
														<Link className="d-flex align-items-center jsutify-content-center" style={{textDecoration: "none"}} href="#">
															<span style={{color: "#E12B3E"}}>Antiques Inventory Management</span>
															<span className="ms-3">
																<Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
															</span>
														</Link>
													</div>
												</div>
											</div>
										))
									}
									{
										Array(3).keys().map(_ => (
											<div className="col-md-6 col-lg-4 mb-5 pe-4 ">
												<div class="card py-4 px-2 main-solution-card bd-top-blue">
													<div class="card-body">
													    <div className='icon position-relative ms-2 mb-3 ratio ratio-1x1 img_wrapper'>
															<Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
														</div>
														<h5 className={roboto.className+" mb-2 fw-bold card-title"}>Antiques</h5>
														<p className={roboto.className + " mb-2"} style={{fontSize: "1rem", color: "#666666"}}>Track,organize and manage all your business’s inventory</p>
														<Link className="d-flex align-items-center jsutify-content-center" style={{textDecoration: "none"}} href="#">
															<span style={{color: "#E12B3E"}}>Antiques Inventory Management</span>
															<span className="ms-3">
																<Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
															</span>
														</Link>
													</div>
												</div>
											</div>
										))
									}
									{
										Array(3).keys().map(_ => (
											<div className="col-md-6 col-lg-4 mb-5 pe-4 ">
												<div class="card py-4 px-2 main-solution-card bd-top-purple">
													<div class="card-body">
													    <div className='icon position-relative ms-2 mb-3 ratio ratio-1x1 img_wrapper'>
															<Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
														</div>
														<h5 className={roboto.className+" mb-2 fw-bold card-title"}>Antiques</h5>
														<p className={roboto.className + " mb-2"} style={{fontSize: "1rem", color: "#666666"}}>Track,organize and manage all your business’s inventory</p>
														<Link className="d-flex align-items-center jsutify-content-center" style={{textDecoration: "none"}} href="#">
															<span style={{color: "#E12B3E"}}>Antiques Inventory Management</span>
															<span className="ms-3">
																<Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
															</span>
														</Link>
													</div>
												</div>
											</div>
										))
									}
									{
										Array(3).keys().map(_ => (
											<div className="col-md-6 col-lg-4 mb-5 pe-4 ">
												<div class="card py-4 px-2 main-solution-card bd-top-green2">
													<div class="card-body">
													    <div className='icon position-relative ms-2 mb-3 ratio ratio-1x1 img_wrapper'>
															<Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
														</div>
														<h5 className={roboto.className+" mb-2 fw-bold card-title"}>Antiques</h5>
														<p className={roboto.className + " mb-2"} style={{fontSize: "1rem", color: "#666666"}}>Track,organize and manage all your business’s inventory</p>
														<Link className="d-flex align-items-center jsutify-content-center" style={{textDecoration: "none"}} href="#">
															<span style={{color: "#E12B3E"}}>Antiques Inventory Management</span>
															<span className="ms-3">
																<Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
															</span>
														</Link>
													</div>
												</div>
											</div>
										))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main_Solution_bg6">
				<div className="main_solution_content mt-0 pb-0">
					<div className="container mb-5">
						<h1 className={`${roboto.className} text-center mb-5`}>Read more about working in Sortly</h1>
					</div>
				</div>

				<div className="row align-items-center justify-content-center">
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div class="card p-3">
									<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
										<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }} />
									</div>

									<div class="card-body">
										<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
										<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
										<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon /></span></Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div class="card p-3">
									<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
										<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }} />
									</div>

									<div class="card-body">
										<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
										<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
										<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon /></span></Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div class="card p-3">
									<div style={{ position: "relative", width: "100%", height: "300px" }} className="img_conatiner">
										<Image src="/images/pages/each-solution/blog.svg" alt="blog" fill style={{ objectFit: "cover" }} />
									</div>

									<div class="card-body">
										<h5 className={`${roboto.className} card-title`}>Blog Post</h5>
										<p class="card-text">"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recommend it to anyone looking for reliability and style."</p>
										<Link href="#" className="link_btn">Antiques Inventory Management <span className="ms-4"><ArrowRightIcon /></span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
