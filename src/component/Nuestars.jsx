import React from 'react'
import game_img from '../assets/image/png/game_img.png'
import traced5 from '../assets/image/png/traced5.png'
import traced4 from '../assets/image/png/traced4.png'
import traced3 from '../assets/image/png/traced3.png'
import sipener from '../assets/image/png/sipener.png'
import { Check, } from './Icon'
import btn_line from '../assets/image/png/btn_line.png'
import sapin from '../assets/image/png/sapin.png'
import card_img from '../assets/image/png/card_img.png'
import card_img1 from '../assets/image/png/card_img1.png'
import dice from '../assets/image/png/dice.png'
import game_sapin from '../assets/image/png/game-sapin.png'
import whiteline from '../assets/image/png/whiteline.png'
import shadow from '../assets/image/png/shadow.webp'



const Nuestars = () => {
    return (
        <div className=' bg-[#00141B] relative mt-[-3px] pt-5 z-[2]'>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] hidden  lg::block z-[-1] bg_color1 absolute top-[-6%] left-[-25%] opacity-[0.5]'> </div>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] hidden  md:block z-[-1] bg_color1 absolute top-[13%] right-[-25%] opacity-[0.5]'> </div>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] z-[-1] bg_color1 absolute bottom-[12%] left-[-20%] opacity-[0.5]'> </div>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px] z-[-1] hidden lg:block bg_color1 absolute bottom-[-8%] right-[-25%] opacity-[0.5]'> </div>
            <div className='container px-4 mx-auto lg:pt-24 pt-7 lg:pb-24 pb-7'>
                <div className='flex flex-col lg:flex-row pb-4 lg:pb-24 lg:gap-11 gap-5'>
                    <div className='w-full lg:w-1/2 flex justify-center ' data-aos="fade-right">

                        <img className=' lg:w-full h-full w-[558px]' src={game_img} alt="" />

                    </div>
                    <div className='w-full lg:w-1/2' data-aos="fade-left">
                        <h3 className=' ff_anton font-normal xl:text-[48px] sm:text-[41px] text-[33px]  text-white xl:whitespace-nowrap whitespace-normal text-center lg:text-start'>Más razones para elegirnos</h3>

                        <div className='flex lg:pt-12 pt-5
                         justify-center lg:justify-start'>
                            <div className=' bg-[#051D20] border-[#3B845A] border-[1px] w-[374px] gap-9 px-12 py-6 rounded-[16px] flex'>
                                <div className='circle  h-[68px] w-[68px] rounded-[73px] px-[15px] py-[15px] flex justify-center items-center'>
                                    <img src={traced5} alt="" />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' ff_anton text-[32px] font-normal text-white'>200</p>
                                    <p className=' ff_inter lg:text-base sm:text-[14px] text-[12px]  font-medium text-white'>Páginas creadas</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex pt-6 justify-center lg:justify-start'>
                            <div className=' bg-[#051D20] border-[#3B845A] border-[1px] w-[374px] gap-9 px-12 py-6 rounded-[16px] flex'>
                                <div className='circle  h-[68px] w-[68px] rounded-[73px] px-[15px] py-[15px] flex justify-center items-center'>
                                    <img src={traced4} alt="" />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' ff_anton text-[32px] font-normal text-white'>98%</p>
                                    <p className=' ff_inter lg:text-base sm:text-[14px] text-[12px] font-medium text-white'>Clientes Satisfechas</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex pt-6 justify-center lg:justify-start'>
                            <div className=' bg-[#051D20] border-[#3B845A] border-[1px] w-[374px] gap-9 px-12 py-6 rounded-[16px] flex'>
                                <div className='circle  h-[68px] w-[68px] rounded-[73px] px-[15px] py-[15px] flex justify-center items-center'>
                                    <img src={traced3} alt="" />
                                </div>
                                <div className=' flex flex-col'>
                                    <p className=' ff_anton text-[32px] font-normal text-white'>200</p>
                                    <p className=' ff_inter lg:text-base sm:text-[14px] text-[12px] font-medium text-white'>Divisas Disponibles</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' container lg:mb-16 mb-7 mx-auto px-4  lg:pt-0'>
                <h2 className=' font-normal ff_anton lg:text-[48px] sm:text-[41px] text-[33px] text-center text-white'>Nuestras ofertas</h2>
                <p className=' ff_inter font-medium text-white lg:text-base text-[14px] text-center lg:pt-4 lg:pb-14 pb-3'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className='bg-[#062123] border-[#828F93] border-[1px] pb-8 lg:pt-14 pt-0 rounded-[16px] ps-4 lg:ps-12'>
                    <div className=' flex lg:flex-row flex-col gap-5'>
                        <div className='w-full lg:w-1/2' data-aos="fade-right">
                            <div className='flex justify-center'>
                                <img className=' w-full max-w-[650px] pt-5' src={sipener} alt="" />
                            </div>
                            <img src={shadow} alt="" />
                        </div>
                        <div className='w-full lg:w-1/2 lg:pe-12 pe-4' data-aos="fade-left">
                            <h3 className='lg:text-[32px] text-[25px] text-center lg:text-start  text-white ff_anton font-normal'>Silver</h3>
                            <p className=' lg:text-base text-[14px] ff_inter text-center lg:text-start font-medium text-[#CDD2D3] opacity-[0.8]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className=' font-normal ff_anton text-center lg:text-start lg:text-[48px] sm:text-[41px] text-[33px] text-white lg:pt-8 pt-4'>$5000</p>
                            <div className=' flex justify-center'>
                                <div className='flex justify-center flex-col'>
                                    <div className=' flex gap-2 lg:pt-4 pt-2'>
                                        <span> <Check /></span>
                                        <p className=' text-[#CDD2D3] opacity-[0.8] font-medium lg:text-base text-sm  ff_inter'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                    </div>
                                    <div className=' flex gap-2 lg:pt-6 pt-2'>
                                        <span> <Check /></span>
                                        <p className=' text-[#CDD2D3] opacity-[0.8]  font-medium lg:text-base text-sm ff_inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                                    </div>
                                    <div className=' flex gap-2 lg:pt-6 pt-2'>
                                        <span> <Check /></span>
                                        <p className=' text-[#CDD2D3] opacity-[0.8] font-medium lg:text-base text-sm ff_inter'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                    </div>
                                    <div className=' flex gap-2 lg:pt-6 pt-2'>
                                        <span> <Check /></span>
                                        <p className=' text-[#CDD2D3] opacity-[0.8] font-medium text-base ff_inter'>Aplicación para Android y Windows de regalo.</p>
                                    </div>
                                    <div className=' flex gap-2 lg:pt-6 pt-2'>
                                        <span>  <Check /></span>
                                        <p className=' text-[#CDD2D3] opacity-[0.8] font-medium lg:text-base text-sm ff_inter'>Tiempo de creación 2 a 3 semanas</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <div className=' lg:mt-10 mt-5 relative z-[2]'>
                                    <button className=' ff_inter font-bold border-[white]  duration-500 ease-in-out hover:bg-white hover:text-black  border-[1px] text-base text-[#ffff]  px-[46px] py-3 rounded-[41px]'>Comprar ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className=' container mx-auto mb-7 lg:mb-16 px-4'>
                <div className='bg-[rgb(6,33,35)] border-[#828F93] bg-img bg-no-repeat bg-cover border-[1px] pb-8 pt-5 lg:pt-14 rounded-[16px] ps-4 lg:ps-12 relative'>
                    <div className=' absolute lg:left-[19%] left-[4%] top-[20%]'>
                        <img className=' w-full max-w-[79px] sm:block hidden' src={sapin} alt="" />
                    </div>
                    <img className=' lg:bottom-[12%] bottom-0 absolute sm:block hidden lg:left-[14%] left-[2%] w-full lg:max-w-[176px] max-w-[120px]' src={card_img} alt="" />
                    <img className=' top-[20%] absolute lg:right-[8%] right-[1%] sm:block hidden w-full lg:max-w-[149px] max-w-[120px]' src={card_img1} alt="" />
                    <img className=' bottom-[14%] absolute right-[15%] w-full sm:block hidden max-w-[66px] ' src={dice} alt="" />
                    <h5 className=' text-white text-[32px] ff_anton text-center' data-aos="zoom-out">Luxury</h5>
                    <div className=' flex justify-center' data-aos="zoom-out">
                        <p className=' text-[#CDD1D3] max-w-[391px] text-center  lg:text-base text-sm font-medium ff_inter opacity-[0.8]'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                    </div>
                    <h5 className=' text-white ff_anton lg:text-[48px] sm:text-[41px] text-[33px]  font-normal text-center' data-aos="zoom-out">$9000</h5>
                    <div className=' flex justify-center' >
                        <div className=' flex justify-center flex-col' data-aos="zoom-out">
                            <div className='flex gap-3 pt-3'>
                                <span><Check /></span>
                                <p className='max-w-[387px] text-start sm:text-center text-[#CDD1D3] opacity-[0.8] lg:text-base text-sm font-medium ff_inter'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className='flex gap-3 pt-3'>
                                <span><Check /></span>
                                <p className='text-start sm:text-center text-[#CDD1D3] opacity-[0.8] lg:text-base text-sm font-medium ff_inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='flex gap-3 pt-3'>
                                <span><Check /></span>
                                <p className='max-w-[387px] text-start sm:text-center text-[#CDD1D3] opacity-[0.8] lg:text-base text-sm font-medium ff_inter'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className='flex gap-3 pt-3'>
                                <span><Check /></span>
                                <p className='max-w-[387px] text-start sm:text-center text-[#CDD1D3] opacity-[0.8] lg:text-base text-sm font-medium ff_inter'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className='flex gap-3 pt-3'>
                                <span><Check /></span>
                                <p className='max-w-[387px] text-start sm:text-center text-[#CDD1D3] opacity-[0.8] lg:text-base text-sm font-medium ff_inter'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div className=' flex justify-center'>
                                <div className=' lg:mt-10 mt-4 relative z-[2]'>
                                    <button className=' ff_inter font-bold text-base btn_color  px-[46px] py-3 rounded-[41px]'>Comprar ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={btn_line} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4'>
                <div className=' bg-[rgb(6,33,35)] border-[#828F93] lg:ps-12 ps-4 lg:pe-10 pe-4 border-[1px] rounded-[16px] '>
                    <div className='flex flex-col items-center lg:flex-row lg:gap-16 gap-5'>
                        <div className='w-full lg:w-5/12' data-aos="fade-right">
                            <h3 className='lg:text-[32px] text-[25px] text-white  duration-500 ease-in-out hover:bg-white hover:text-black  text-center lg:text-start ff_anton  font-normal pt-4'>Platinum</h3>
                            <p className='lg:text-base text-sm font-medium text-center lg:text-start ff_inter text-[#CED5D6]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>

                            <h3 className='text-white ff_anton lg:text-[48px] sm:text-[41px] text-[29px] text-center lg:text-start font-normal'>Consultar precio</h3>
                            <div className='flex justify-center lg:justify-start'>
                                <div className=' lg:mt-10 mt-5 relative z-[1]'>
                                    <button className=' ff_inter font-bold border-[white]  duration-500 ease-in-out hover:bg-white hover:text-black  border-[1px] lg:text-base text-sm text-[#ffff]  px-[46px] py-3 rounded-[41px]'>Comprar ahora</button>
                                    <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                        <img src={whiteline} className=' ' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-7/12' data-aos="fade-left">
                            <div className='lg:py-[78px] py-5 flex justify-center'>
                                <img className='w-full max-w-[602px]' src={game_sapin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nuestars