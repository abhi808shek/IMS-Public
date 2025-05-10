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
            <div className='col-12 col-lg-5'>
                <h1 className={`${roboto.className} fw-bold text-center`}>How Can we <br/><span>Help.</span></h1>
           
                <div className='row justify-content-center align-items-center mb-4'>
                    <div className='col-5'>
                        <div className="help_card card">
                            <div className='row justify-content-center mx-0 mb-0'>
                                <div className='icon position-relative ratio ratio-4x3'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="help_card card">
                            <div className='row justify-content-center mx-0 mb-0'>
                                <div className='icon position-relative ratio ratio-4x3'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                </div>
             
                

                <div className='row justify-content-center align-items-center mb-4'>
                    <div className='col-5'>
                        <div className="help_card card">
                            <div className='row justify-content-center mx-0 mb-0'>
                                <div className='icon position-relative ratio ratio-4x3'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="help_card card">
                            <div className='row justify-content-center mx-0 mb-0'>
                                <div className='icon position-relative ratio ratio-4x3'>
                                    <Image src="/images/pages/help-center/icon.svg" alt="upload" fill style={{ objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <h5 className={`${roboto.className} fw-bold card-title text-center`}>Getting Started</h5>
                                <p className={`${roboto.className} card-text text-center`}>Track,organize and manage all your business’s inventory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      
            <div className='col-12 col-lg-6'>
                <div className="container help_form my-5">
                    <div className="form-wrapper p-5 p-lg-4 p-xl-5 shadow bg-white rounded">
                        <h3  className={` ${roboto.className} fw-medium mb-4`}>Submit a request</h3>
                        <form>
                            <div className="mb-3">
                                <label for="email" className="form-label">Your email address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
                            </div>
                            <div className="mb-3">
                                <label for="subject" className="form-label">Subject <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="subject" placeholder="Enter subject" required/>
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description <span className="text-danger">*</span></label>
                                <textarea className="form-control mb-1" id="description" rows="4" placeholder="" required></textarea>
                                <p className='note'>Please enter the details of your request. A member of our support staff will respond as soon as possible</p>
                            </div>
                            <div className="mb-3">
                                <label for="customerType" className="form-label">Customer Type</label>
                                <select className="form-select" id="customerType">
                                <option selected disabled>-- Please select --</option>
                                <option value="business">Business</option>
                                <option value="individual">Individual</option>
                                </select>
                                <small className=" note">Please enter your Sortly Plan type</small>
                            </div>
                            <div className="mb-4">
                                <label for="fileUpload" className="form-label">Attachments</label>
                                <div className="file-upload-box border border-secondary rounded p-2 text-muted text-center position-relative" id="fileUpload">
                                {/* <span className="text-danger fw-bold">Add file</span> or drop files here */}
                                <p className='mb-0 position-absolute input_lable'><span className="text-danger fw-bold">
                                    Add file</span> or drop files here</p>
                                
                                 <input type="file" id="file-input" className='file_input'></input>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div className="help-section training position-relative">
        <div className="row">
            <div className="col-12 col-lg-5 d-flex justify-content-end px-5 pe-lg-5">
                <div className="training-column w-80">
                    <div className={` ${roboto.className} section-title text-center`}>Getting Started</div>
                    {
                        [1, 2, 3, 4, 5].map(i => (
                            <div className="accordion" id={`accordionGetting` + i}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                            Introduction to Sortly
                                        </button>
                                    </h2>
                                    <div id={`collapseGet` + i} className="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                        <div className="accordion-body">
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
            <div className="col-12 col-lg-7 training_resources_bg bg3 mt-5 mt-md-0 px-5 ps-lg-5">
                <div className="training-column">
                    <div className={` ${roboto.className} section-title text-center`}>Training Resources</div>
                    {
                        [1, 2, 3].map(i => (
                            <div className="accordion" id={`acordianTrain` + i}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                            Introduction to Sortly
                                        </button>
                                    </h2>
                                    <div id={`collapseGet` + i} className="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                        <div className="accordion-body">
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

    <div className="help-section training position-relative">
        <div className="row">
            <div className="col-12 col-lg-5 training_resources_bg bg4 d-flex justify-content-end px-5 pe-lg-5">
                <div className="training-column w-80">
                    <div className={` ${roboto.className} section-title text-center`}>Getting Started</div>
                    {
                        [1, 2, 3, 4].map(i => (
                            <div className="accordion" id={`accordionGetting` + i}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                            Introduction to Sortly
                                        </button>
                                    </h2>
                                    <div id={`collapseGet` + i} className="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                        <div className="accordion-body">
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
            <div className="col-12 col-lg-7 mt-5 mt-md-0 px-5 ps-lg-5">
                <div className="training-column">
                    <div className={` ${roboto.className} section-title text-center`}>Training Resources</div>
                    {
                        [1, 2, 3].map(i => (
                            <div className="accordion" id={`acordianTrain` + i}>
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseGet` + i}>
                                            Introduction to Sortly
                                        </button>
                                    </h2>
                                    <div id={`collapseGet` + i} className="accordion-collapse collapse" data-bs-parent={`accordionGetting` + i}>
                                        <div className="accordion-body">
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
