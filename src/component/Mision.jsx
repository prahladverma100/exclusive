import React from 'react'
import poker from '../assets/image/png/poker.png'
import aviator from '../assets/image/png/aviator.png'
import { Arrow } from './Icon'

const Mision = () => {
    return (
        <div className=' bg-[#00141B] lg:pt-[74px] mt-[-3px] pt-9 lg:pb-24 pb-9  relative z-[2]'>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] z-[-1] bg_color1 absolute top-[12%] left-[-25%] opacity-[0.5]'> </div>
            <div className='h-[484px] w-[484px]  rounded-[484px] blur-[179px] z-[-2] bg_color1 absolute lg:bottom-[-20%] bottom-[0%] right-[-25%] opacity-[0.5]'> </div>
            <div className=' container px-4 mx-auto'>
                <div className='flex lg:flex flex-col lg:flex-row lg:gap-16 gap-5' data-aos="fade-right">
                    <div className='w-full lg:w-1/2 flex flex-col-reverse lg:flex-col'>
                        <div className=' flex justify-center'>
                            <img className='w-full max-w-[538px] cursor-pointer' src={poker} alt="" />
                        </div>
                        <div>
                            <h2 className=' ff_anton font-normal text-white lg:text-[48px] sm:text-[41px] text-[33px] lg:pt-[60px] pt-0 lg:pb-3 pb-0 text-center lg:text-start'>Nuestra Visión</h2>
                            <div className=' flex justify-center lg:justify-start'>
                                <p className=' text-[#CCD0D2] ff_inter font-medium text-base max-w-[444px] text-center lg:text-start'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            </div>
                            <div className=' flex items-center justify-center lg:justify-start lg:pt-6 lg:pb-6 pt-3 pb-3'>
                                <p className='text-[#7AF57A] font-bold ff-inter text-base'>Aprende más</p>
                                <span className='ps-3'>  <Arrow /></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2' data-aos="fade-left">
                        <div className=' lg:pb-14 pb-3'>
                            <h2 className=' ff_anton text-center lg:text-start font-normal text-white lg:text-[48px] sm:text-[41px] text-[33px] pb-0 lg:pb-3'>Nuestra Misión</h2>
                            <div className='flex justify-center lg:justify-start '>
                                <p className=' text-center lg:text-start text-[#CCD0D1] ff_inter font-medium text-base max-w-[444px] opacity-[0.8]'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            </div>
                            <div className=' flex items-center justify-center lg:justify-start lg:pt-6 pt-3'>
                                <p className='text-[#7AF57A] font-bold ff-inter text-base '>Aprende más</p>
                                <span className='ps-3'>  <Arrow /></span>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <img className='w-full max-w-[538px] cursor-pointer' src={aviator} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mision