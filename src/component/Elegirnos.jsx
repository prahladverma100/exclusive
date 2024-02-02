import React from 'react'
import casion_night from '../assets/image/png/casion_night.png'
import btn_line from '../assets/image/png/btn_line.png'

const Elegirnos = () => {
    return (
        <div className='lg:pt-80 pt-14 lg:pb-80 pb-10 bg_img2 lg:bg-[#00141b] bg-white z-[2] bg-no-repeat'>

            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row lg:gap-14 gap-6 items-center'>
                    <div className='w-full lg:w-1/2' data-aos="fade-down-right">
                        <h3 className=' ff_anton lg:text-[48px] sm:text-[41px] text-[33px] text-center lg:text-start font-normal'>Por qué elegirnos</h3>
                        <p className=' text-[#334349] font-normal ff_inter lg:text-base text-center opacity-[0.8] lg:text-start text-[12px] pt-4'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>

                        <div className='flex justify-center lg:justify-start'>
                            <div className=' mt-6 relative z-[2]'>
                                <button className=' ff_inter font-bold text-base btn_color duration-500 ease-in-out px-[46px] py-3 rounded-[41px]'>Aprende más</button>
                                <div className='absolute z-[-1] left-[-6px]  bottom-[-13%]'>
                                    <img src={btn_line} className=' ' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:w-1/2 flex justify-center' data-aos="fade-down-left">
                        <img className='lg:w-full w-[558px]' src={casion_night} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Elegirnos