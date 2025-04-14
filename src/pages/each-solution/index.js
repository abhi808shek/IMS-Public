import Head from "next/head";
// import SortlySolutions from "/images/pages/each-solution/sortly_solutions.png"
import Image from "next/image";
import { Roboto } from 'next/font/google'
import { useState } from "react";

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function Features() {

	const [tab, setTab] = useState("Managing");

	return (
		<>
			<div className="main_solution_hero">
				<div className="row main_solution_bg">
					<div className="col-12 col-md-6 m-0 d-flex align-items-center justify-content-center">
						<div className="main_solution_left_panel my-auto d-flex flex-column">
							<h1 className={`${roboto.className} main_solution_header mb-5`}>Inventory Software for your industry..</h1>
							<p className={`${roboto.className} main_solution_text mb-4`}> You and your construction crew should be working-not searching for supplies or hurting down missing materials. With Sortly’s construction inventory software.</p>
							<div>
								<button type="button" className="btn secondary_fill_btn me-3">See All Features</button>
								<button type="button" className="btn primary_fill_btn">Try Sortly Free</button>
							</div>
						</div>
					</div>
					<div className="col-md-6 py-5">
						<div className="main_solution_right_panel">
							{/* <Image src="/images/pages/each-solution/sortly_solutions.png" layout="fill" objectFit="cover" /> */}
						</div>
					</div>
				</div>
			</div>

			<div className="main_solution_content">
				<div className="container">
					<h1 className={`${roboto.className} text-center mb-4`}>Visualize all your construction supplies and equipment on your Sortly dashboard</h1>
					<p className={`${roboto.className} text-center`}>Sortly helps businesses of all sizes track the inventory and assets that make their company run- saving them time, money, ans stress.</p>
				</div>
			</div>

			<div className="main_solution_upload">
				<div className="row main_solution_bg2">
					<div className="col-md-5 m-0 d-flex align-items-center justify-content-center">
						<div className="main_solution_upload_left_panel my-auto d-flex flex-column">
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-7 py-5">
						<div className="main_solution_right_panel">
						</div>
					</div>
				</div>
			</div>

			<div className="main_solution_toolkit">
				<div className="row main_solution_bg3">
					<h1 className={`${roboto.className} mb-4`}>A business toolkit for<br />every business</h1>
					<div className="row">
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box green">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-green.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box blue">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-blue.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box blue">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-blue.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box green">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-green.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box green">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-green.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box blue">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-blue.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box blue">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-blue.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
						<div className="col-md-6 pe-lg-5 pb-4 pb-lg-5">
							<div className="d-flex flex-column main_solution_toolkit_box green">
								<h3 className={`${roboto.className} mb-1`}>Antiques</h3>
								<p className={`${roboto.className} mb-1`} >Track,organize and manage all your business’s inventory</p>
								<div className={`${roboto.className}`}>
									<span>Antiques Inventory Management</span>
									<Image className="ms-4" src="/images/pages/each-solution/left-green.svg" alt="left-green" width={9} height={16} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main_solution_content">
				<div className="container">
					<h1 className={`${roboto.className} text-center mb-4`}>Visualize all your construction supplies and equipment on your Sortly dashboard</h1>
					<p className={`${roboto.className} text-center`}>Sortly helps businesses of all sizes track the inventory and assets that make their company run- saving them time, money, ans stress.</p>
				</div>
			</div>

			<div className="main_solution_bg4_box">
				<div className="row">
					<div className="p-2 p-md-4 col-md-6 m-0 d-flex align-items-center justify-content-center">
						<div className="main_solution_bg4 mb-3">
							<Image className="position-relative w-100 h-100 m-3" src="/images/pages/each-solution/sortly_solutions.png" layout="fill" objectFit="cover" />
						</div>

					</div>
					<div className="col-md-6 m-0 d-flex align-items-center justify-content-center">
						<div className="main_solution_upload_left_panel my-auto d-flex flex-column">
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
							<div className="row mb-3">
								<div className="d-flex align-items-center justify-content-center">
									<Image className="me-3" src="/images/pages/each-solution/tick.svg" alt="upload" width={32} height={32} />
									<p className={`${roboto.className} mb-0`}>Upload high-resolution photos so you can visually track and verify inventory and monitor condition.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main_solution_content main_solution_bg5">
				<div className="container mb-5">
					<h1 className={`${roboto.className} text-center mb-4`}>Sortly construction inventory <br /> management software<br /> feature</h1>
				</div>
				<div className="container col-md-8 mb-5">
					<div className="d-flex justify-content-between">
						<span onClick={() => setTab("Organizing")} className={`${roboto.className} ${tab === "Organizing" ? "active " : ""} main_solution_bg5_tabs`}>Organizing </span>
						<span onClick={() => setTab("Managing")} className={`${roboto.className} ${tab === "Managing" ? "active " : ""} main_solution_bg5_tabs`}>Managing</span>
						<span onClick={() => setTab("Reporting")} className={`${roboto.className} ${tab === "Reporting" ? "active " : ""} main_solution_bg5_tabs`}>Reporting</span>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>

						<div className="col-md-4 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>

						<div className="col-md-4 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>
					</div>

					<div className="row">
						<div className="col-md-3 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>

						<div className="col-md-3 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>

						<div className="col-md-3 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>

						<div className="col-md-3 mb-5 work_order d-flex flex-column justify-content-between align-items-center">
							<Image src="/images/pages/each-solution/order.svg" alt="work_order" width={24} height={24} />
							<h5 className={`${roboto.className} text-center`}>Easy Inventory Import</h5>
							<p className={`${roboto.className} text-center`}>Easy inventory import transfers yor missing inventory into Sortly with the touch of buttion</p>
						</div>
					</div>

				</div>
			</div>
		</>
	);
}
