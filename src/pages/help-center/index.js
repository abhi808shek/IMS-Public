import React from 'react'
import { Roboto } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-inter',
})

const HelpCenter = () => {
  return (
    <>
    <div className='help_center_hero'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-5'>
                <h1 className={`${roboto.className} fw-bold text-center`}>How Can we <br/><span>Help.</span></h1>

                <div className='row justify-content-center align-items-center mb-4'>
                    <div className='col-4'>
                        <div class="help_card card py-4 px-2">
                            <div className='row justify-content-center mx-0 mb-1'>
                                <div className='icon position-relative'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="help_card card py-4 px-2">
                            <div className='row justify-content-center mx-0 mb-1'>
                                <div className='icon position-relative'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center mb-4'>
                    <div className='col-4'>
                        <div class="help_card card py-4 px-2">
                            <div className='row justify-content-center mx-0 mb-1'>
                                <div className='icon position-relative'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="help_card card py-4 px-2">
                            <div className='row justify-content-center mx-0 mb-1'>
                                <div className='icon position-relative'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      
            <div className='col-6'>
                <div class="container help_form my-5">
                    <div class="form-wrapper p-5 shadow bg-white rounded">
                        <h3  class={` ${roboto.className} fw-medium mb-4`}>Submit a request</h3>
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Your email address <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" required/>
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="subject" placeholder="Enter subject" required/>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description <span class="text-danger">*</span></label>
                                <textarea class="form-control mb-1" id="description" rows="4" placeholder="" required></textarea>
                                <p className='note'>Please enter the details of your request. A member of our support staff will respond as soon as possible</p>
                            </div>
                            <div class="mb-3">
                                <label for="customerType" class="form-label">Customer Type</label>
                                <select class="form-select" id="customerType">
                                <option selected disabled>-- Please select --</option>
                                <option value="business">Business</option>
                                <option value="individual">Individual</option>
                                </select>
                                <small class=" note">Please enter your Sortly Plan type</small>
                            </div>
                            <div class="mb-4">
                                <label for="fileUpload" class="form-label">Attachments</label>
                                <div class="file-upload-box border border-secondary rounded p-3 text-muted text-center" id="fileUpload">
                                <span class="text-danger fw-bold">Add file</span> or drop files here
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className='bg_accordian position-relative'>
        <div className='bg_img'>
        </div>

        <div class="container help-section position-relative">
            <div class="row">
                <div class="col-md-5">
                    <div class={` ${roboto.className} section-title text-center`}>Getting Started</div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-md-6 mt-5 mt-md-0 ps-5">
                    
                    <div class={` ${roboto.className} section-title text-center`}>Training Resources</div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion" id="accordionGetting">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGet1">
                            Introduction to Sortly
                        </button>
                        </h2>
                        <div id="collapseGet1" class="accordion-collapse collapse" data-bs-parent="#accordionGetting">
                        <div class="accordion-body">
                            <ul className='mb-0'>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Getting Started: A Quick Start Guide 
                                        <span className="ms-4">
                                            <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>

    </div> */}


<div class="help-section training position-relative">
                <div class="row">
                    <div class="col-md-5 d-flex justify-content-end pe-5">
                        <div className="training-column w-80">
                            <div class={` ${roboto.className} section-title text-center`}>Getting Started</div>
                            {
                                [1, 2, 3, 4, 5].map(i => (
                                    <div class="accordion" id={`accordionGetting` + i}>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                                    Introduction to Sortly
                                                </button>
                                            </h2>
                                            <div id={`collapseGet` + i} class="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                                <div class="accordion-body">
                                                    <ul className='mb-0'>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div class="col-md-7 training_resources_bg bg3 mt-5 mt-md-0 ps-5">
                        <div className="training-column">
                            <div class={` ${roboto.className} section-title text-center`}>Training Resources</div>
                            {
                                [1, 2, 3].map(i => (
                                    <div class="accordion" id={`acordianTrain` + i}>
                                       <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                                    Introduction to Sortly
                                                </button>
                                            </h2>
                                            <div id={`collapseGet` + i} class="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                                <div class="accordion-body">
                                                    <ul className='mb-0'>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
</div>

            <div class="help-section training position-relative">
                <div class="row">
                    <div class="col-md-5 training_resources_bg bg4 d-flex justify-content-end pe-5">
                        <div className="training-column w-80">
                            <div class={` ${roboto.className} section-title text-center`}>Getting Started</div>
                            {
                                [1, 2, 3, 4].map(i => (
                                    <div class="accordion" id={`accordionGetting` + i}>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                                    Introduction to Sortly
                                                </button>
                                            </h2>
                                            <div id={`collapseGet` + i} class="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                                <div class="accordion-body">
                                                    <ul className='mb-0'>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div class="col-md-7 mt-5 mt-md-0 ps-5">
                        <div className="training-column">
                            <div class={` ${roboto.className} section-title text-center`}>Training Resources</div>
                            {
                                [1, 2, 3].map(i => (
                                    <div class="accordion" id={`acordianTrain` + i}>
                                         <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                                    Introduction to Sortly
                                                </button>
                                            </h2>
                                            <div id={`collapseGet` + i} class="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                                <div class="accordion-body">
                                                    <ul className='mb-0'>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Getting Started: A Quick Start Guide
                                                                <span className="ms-4">
                                                                    <Image src="/images/pages/help-center/arrow_right.svg" alt="upload" width={24} height={24} />
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    



                    




                    

                        



      
    </>
  )
}

export default HelpCenter
