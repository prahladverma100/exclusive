import React from 'react'
import giros from '../assets/image/png/giros.png'
import game_city from '../assets/image/png/game_city.png'
import whiteline from '../assets/image/png/whiteline.png'
import european_roulette from '../assets/image/png/european_roulette.png'
const Ellos = () => {
    return (
        <div className='bg-[#00141B]'>
            <div className=' container mx-auto px-4'>
                <h3 className=' text-center ff_anton lg:text-[48px] sm:text-[41px] text-[33px] font-normal text-white pb-2 lg:pt-20 pt-11' data-aos="zoom-out-down">Ellos eligieron apostar con nosotros</h3>
                <div className=' flex-wrap flex lg:flex-row lg:pt-14 pt-0'>
                    <div className='w-full md:w-1/2 px-3 lg:w-4/12 flex pt-4  justify-center' data-aos="flip-left">
                        <div className=' relative'>
                            <img className='w-full ' src={giros} alt="" />
                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] px-[46px] duration-500 ease-in-out hover:bg-white hover:text-black py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Rcasinovip</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 px-3 lg:w-4/12 flex pt-4 justify-center' data-aos="flip-left">
                        <div className=' relative'>
                            <img className='w-full' src={european_roulette} alt="" />
                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] duration-500 ease-in-out hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Rcasinovip</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  px-3 lg:w-4/12 flex pt-4 justify-center' data-aos="flip-left">
                        <div className=' relative'>

                            <img className='w-full' src={game_city} alt="" />

                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] duration-500 ease-in-out hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Rcasinovip</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <p className=' max-w-[705px] text-center ff_inter font-semibold text-base text-white lg:pt-9 pt-3 lg:pb-20 pb-5'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.  Ahora, la próxima apuesta está en tus manos. Elige ganar. Elige exclusive game.</p>
                </div>
            </div>
        </div>
    )
}

export default Ellos