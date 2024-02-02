import React from 'react'
import traced2 from '../assets/image/png/traced2.png'
import traced1 from '../assets/image/png/traced1.png'
import traced from '../assets/image/png/traced.png'
import arrow from '../assets/image/png/arrow.png'
import arrow1 from '../assets/image/png/arrow1.png'
import joker from '../assets/image/png/joker.png'
import jetx from '../assets/image/png/jetx.png'
import game from '../assets/image/png/game.png'
import lucky_fortune from '../assets/image/png/lucky_fortune.png'
import hello_summer from '../assets/image/png/hello_summer.png'
import casino_rpg from '../assets/image/png/casino_rpg.png'
import whiteline from '../assets/image/png/whiteline.png'
import btn_line from '../assets/image/png/btn_line.png'

const Slots = () => {
    return (
        <div className=' section3_img lg:bg-[#00141b] mt-[-3px] bg-white bg-no-repeat bg-cover pb-9 lg:pb-44'>
            <div className='container mx-auto px-4 '>
                <h2 className=' ff_anton font-normal lg:pt-60 pt-9 sm:pt-9 lg:text-[48px] sm:text-[41px] text-[33px] text-center lg:pb-16 pb-0' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Nuestros Atributos de Marca</h2>
                <div className='flex lg:flex flex-wrap lg:flex-row z-[2] relative'>
                    <div className='hidden lg:block  absolute left-[22%]'>
                        <img className='w-full max-w-[230px]' src={arrow} alt="" />
                    </div>
                    <div className=' hidden lg:block absolute right-[21%] top-[33%]'>
                        <img className='w-full max-w-[230px]' src={arrow1} alt="" />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-4/12 px-3 pt-5 lg:pt-0 flex lg:justify-start justify-center' data-aos="zoom-in-up">
                        <div className=' bg-transparent'>
                            <div className=' flex justify-center'>
                                <div className='circle  h-[100px] w-[100px] rounded-[73px] flex justify-center items-center'>
                                    <img src={traced2} alt="" />
                                </div>
                            </div>
                            <h4 className=' text-[20px] font-normal  ff_anton text-center '>Inteligencia</h4>
                            <div className=' flex justify-center'>
                                <p className=' ff_inter text-base font-medium text-[#334349] opacity-[0.8] text-center justify-center max-w-[263px] pt-2'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-4/12 px-3 pt-5 lg:pt-0 flex justify-center' data-aos="zoom-in-up">

                        <div className=' bg-transparent '>
                            <div className=' flex justify-center'>
                                <div className='circle  h-[100px] w-[100px] rounded-[73px] flex justify-center items-center'>
                                    <img src={traced1} alt="" />
                                </div>
                            </div>

                            <h4 className=' text-[20px] font-normal  ff_anton text-center pt-1'>Proactividad</h4>
                            <div className=' flex justify-center '>
                                <p className=' ff_inter text-base font-medium text-[#334349] text-center justify-center max-w-[263px] opacity-[0.8] pt-2'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-full  lg:w-4/12 px-3 pt-5 lg:pt-0 flex lg:justify-end justify-center' data-aos="zoom-in-up">

                        <div className=' bg-transparent'>
                            <div className=' flex justify-center'>
                                <div className='circle  h-[100px] w-[100px] rounded-[73px] flex justify-center items-center'>
                                    <img src={traced} alt="" />
                                </div>
                            </div>

                            <h4 className=' text-[20px] font-normal  ff_anton text-center '>Inteligencia</h4>
                            <div className=' flex justify-center'>
                                <p className=' ff_inter text-base font-medium text-[#334349] text-center justify-center max-w-[263px] opacity-[0.8] pt-2'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <h3 className=' ff_anton lg:pt-[150px] pt-10 font-normal text-center lg:text-[48px] sm:text-[41px] text-[33px] pb-4' data-aos="zoom-out-down">Slots </h3>
                <div className=' flex justify-center'>
                    <p className=' text-[#334349] opacity-[0.8] font-medium ff_inter lg:text-base text-sm max-w-[904px] lg:pb-16 pb-6 text-center' data-aos="fade-right">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                </div>
                <div className='flex lg:flex flex-col lg:flex-row gap-6'>
                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">
                        <div className=' relative  '>
                            <div className=' flex justify-center'>
                                <img src={jetx} className='w-full' alt="" />
                            </div>
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] duration-500 ease-in-out border-[1px] px-[46px] py-[13px] hover:bg-white ff_inter font-bold text-base text-white hover:text-black  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">
                        <div className=' relative '>
                            <img src={joker} className=' w-full' alt="" />
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] duration-500 ease-in-out border-[1px]  hover:bg-white hover:text-black px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">
                        <div className=' relative '>
                            <img src={game} className=' w-full' alt="" />
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] duration-500 ease-in-out hover:bg-white hover:text-black border-[1px] px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex lg:flex flex-col lg:flex-row gap-6 pt-6'>

                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">

                        <div className=' relative'>
                            <img src={lucky_fortune} className=' w-full' alt="" />
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] duration-500 ease-in-out  hover:bg-white hover:text-black border-[1px] px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">
                        <div className=' relative'>
                            <img src={hello_summer} className=' w-full' alt="" />
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white] duration-500 ease-in-out hover:bg-white hover:text-black border-[1px] px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full lg:w-4/12 flex justify-center' data-aos="flip-left">
                        <div className=' relative '>
                            <img src={casino_rpg} className=' w-full' alt="" />
                            <div className='btn btn_hov opacity-0 rounded-[12px] hover:opacity-[1] flex justify-center items-center left-0  duration-500  top-[0] absolute h-full w-full '>
                                <div className=' relative z-[2]'>
                                    <button className=' border-[white]  hover:bg-white hover:text-black duration-500 ease-in-out border-[1px] px-[46px] py-[13px] ff_inter font-bold text-base text-white  rounded-[41px]'>Jugar</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className=' flex justify-center  xl:pb-28 pb-0' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className=' lg:mt-10 mt-7 relative z-[2]'>
                        <button className=' btn_color font-bold ff_inter duration-150 ease-in-out text-base px-[46px] py-[13px] rounded-[41px] '>Mostrar más</button>
                        <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                            <img src={btn_line} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slots