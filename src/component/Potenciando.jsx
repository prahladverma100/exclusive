import React from 'react'
import jackport from '../assets/image/png/jackport.png'
import { Check } from './Icon'
import img2 from '../assets/image/png/img2.png'
import img1 from '../assets/image/png/img1.png'
import ezugi from '../assets/image/png/ezugi.png'
import live_beatting from '../assets/image/png/live_beatting.png'
import whiteline from '../assets/image/png/whiteline.png'
import roulette from '../assets/image/png/roulette.png'
const Potenciando = () => {
    return (
        <div className='bg_img1 bg-[#00141b] lg:pb-24 pb-9 mt-[-2px] relative z-[2]'>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] z-[-1] bg_color1 absolute lg:top-[-15%] top-0 left-[-25%] opacity-[0.5]'> </div>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] z-[-1] bg_color1 absolute bottom-[-1%] right-[-20%] opacity-[0.5]'> </div>
            <div className='container px-4 mx-auto'>
                <div className=' flex lg:flex-row lg:gap-10 gap-6 flex-col  xl:pt-24 pt-11 items-center pb-8 lg:pb-20'>
                    <div className='w-full lg:w-1/2 flex justify-center' data-aos="fade-right">
                        <img className='lg:w-full w-[558px]' src={jackport} alt="" />
                    </div>
                    <div className=' w-full lg:w-1/2 flex justify-center' data-aos="fade-left">
                        <div className='flex justify-center flex-col'>
                            <h3 className='xl:text-[48px] sm:text-[41px] text-[33px] font-normal text-white ff_anton lg:whitespace-nowrap whitespace-normal text-center lg:text-start'>Potenciando sus elecciones</h3>
                            <p className=' text-[#CDD0D2] font-medium text-base ff_inter pt-4 lg:text-start text-center opacity-[0.8]'>Con Exclusive Game lo mejor está de tu lado.</p>

                            <div className=' flex gap-2 pt-6 '>
                                <span>  <Check />
                                </span>
                                <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8]'>Tecnología HTML5</p>
                            </div>
                            <div className=' flex gap-2 pt-3'>
                                <span>  <Check />
                                </span>
                                <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8]'>Versión PC y móvil</p>
                            </div>
                            <div className=' flex gap-2 pt-3'>
                                <span>  <Check />
                                </span>
                                <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className=' flex gap-2 pt-3'>
                                <span>  <Check />
                                </span>
                                <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8] max-w-[380px]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                            </div>
                            <div className=' flex gap-2 pt-3'>
                                <span>  <Check />
                                </span>
                                <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8]'>Aplicación para android y windows de regalo.</p>
                            </div>

                            <p className=' text-[#CDD0D2] font-medium text-base ff_inter  opacity-[0.8] pt-6'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>

                        </div>
                    </div>
                </div>
                <div className='lg:mx-12 mx-0 relative overflow-hidden  border-[#FFFFFF] rounded-[16px] lg:mt-16 mt-3 z-[1] border-[1px]' data-aos="fade-right">
                    <div className=' absolute right-0 z-[-1] bottom-0'>
                        <img src={img2} alt="" />
                    </div>
                    <div className=' absolute left-0 z-[-1] top-0'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=' w-full '>
                        <div className='flex justify-center text-center'>
                            <h3 className=' ff_anton  lg:text-[48px] sm:text-[41px] text-[33px] font-normal text-white max-w-[520px] lg:py-24 py-8'>lanza tu propia plataforma en sólo 2 semanas</h3>
                        </div>
                    </div>
                </div>
                <div className='pt-12 lg:pt-36 lg:pb-16 pb-0'>
                    <h2 className='text-white ff_anton lg:text-[48px] sm:text-[41px] text-[33px] font-normal text-center' data-aos="fade-right" >Juegos en vivo</h2>
                </div>
                <div className='flex flex-wrap lg:flex-row justify-center'>
                    <div className='w-full lg:w-4/12 md:w-1/2 flex justify-center px-3 pt-4' data-aos="flip-right">
                        <div className=' relative'>
                            <img className=' w-full' src={ezugi} alt="" />
                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] duration-500 ease-in-out hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Reproducir ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 md:w-1/2 px-3 flex justify-center pt-4' data-aos="flip-right">
                        <div className=' relative'>
                            <img className=' w-full' src={roulette} alt="" />
                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] duration-500 ease-in-out hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Reproducir ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 md:w-1/2 px-3 flex justify-center pt-4' data-aos="flip-right">
                        <div className=' relative'>
                            <img className='w-full' src={live_beatting} alt="" />
                            <div className=' box_shadow absolute top-0 left-0 h-full w-full flex justify-center items-center hover:opacity-[1] opacity-0 duration-500'>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] border-[1px] duration-500 ease-in-out hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Reproducir ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Potenciando