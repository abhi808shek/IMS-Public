import React from 'react'
import Image from "next/image";
import PlayCircle from "@/assets/icon/play-circle-line.svg"
import Rocket from "@/assets/icon/rocket-line.svg"
// import CurvyFigure from "@/assets/icon/curvy-figure.svg"

const Home = () => {
  return (
    <>
      <div className='home_hero'>
            <div className='row home_hero_content'>
                <div className='col-5 text_left'>
                    <h1 class="gradient-text"> 
                        Redefining <br/>
                        <span className='mb-0'> 
                            <Image src="/images/pages/home-page/curvy-figure.svg" alt="upload" width={300} height={20} />
                        </span>
                        Management 
                    </h1>
                    <p>
                        Experience the next generation of AI-powered inventory control that 
                        learns, adapts, and evolves with your business in real-time.
                    </p>
                    <div className='d-flex home_btn'>
                        <button type="button" class="btn primary_btn_lg me-4">
                            <span className='me-2'><Rocket className="icon"/></span>
                            Start Free Trial
                        </button>
                        <button type="button" class="btn white_outline_btn_lg">
                            <span className='me-2'>
                                <PlayCircle className="icon"/>
                            </span>
                            Watch Demo
                        </button>
                    </div>

                    <div className='d-flex users_wrapper'>
                        <div className='rounded-circle position-relative users'>
                            <Image src="/images/pages/home-page/bg1.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='rounded-circle position-relative users'>
                            <Image src="/images/pages/home-page/bg2.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='rounded-circle position-relative users'>
                            <Image src="/images/pages/home-page/bg2.jpg" alt="upload"  fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='rounded-circle position-relative users_count d-flex justify-content-center align-items-center'>
                            <span>+5K</span>
                        </div>
                    </div>

                    <div className='text-right'>
                        <p className='title mb-0 fw-semibold'>Trusted by 5,000+ companies</p>
                        <p className='sub_title mb-0 mt-0'>across 150+ countries</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='hero_img_wrapper'>
                        <div className='hero_img position-relative ratio ratio-4x3'>
                            <Image src="/images/pages/home-page/bg3.png" alt="upload" fill style={{ objectFit: 'cover' }}  />

                        </div>
                    </div>

                </div>


                   


            </div>

      </div>
    </>
  )
}

export default Home
