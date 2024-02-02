import React from 'react'
import btn_line from '../assets/image/png/btn_line.png'
import shadow_img from '../assets/image/png/shadow_img.png'
import shadow_img1 from '../assets/image/png/shadow_img1.png'


const Preguntas = () => {
    return (
        <div className='bg-[#00141B] lg:pt-20 pt-0 relative z-[2]'>
            <div className='h-[484px] w-[484px] rounded-[484px] blur-[179px]  z-[-1] bg_color1 absolute top-[-6%] left-[-25%] opacity-[0.5]'> </div>

            <div className='container  mx-auto px-4'>
                <h3 className='lg:text-[48px] sm:text-[41px] text-[33px] ff_anton font-normal text-white text-center  lg:pt-0 pt-5 lg:pb-16 pb-0'>Preguntas más frecuentes</h3>

                <div className='flex justify-center' data-aos="fade-right">
                    <div class="wrapper w-full lg:w-[970px]">
                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="1">
                                <input className='hidden' type="radio" id="1" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'>  ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base text-sm lg:pe-16 pe-0 pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>

                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="2">
                                <input className='hidden' type="radio" id="2" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'>  ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base opacity-[0.8] text-sm lg:pe-16 pe-0 pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>

                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="3">
                                <input className='hidden' type="radio" id="3" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'>  ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base text-sm lg:pe-16 pe-0 opacity-[0.8] pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>
                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="4">
                                <input className='hidden' type="radio" id="4" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'> ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base text-sm lg:pe-16 pe-0 opacity-[0.8] pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>
                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="5">
                                <input className='hidden' type="radio" id="5" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'>  ¿Qué métodos de pago aceptan?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base text-sm lg:pe-16 pe-0 opacity-[0.8] pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>
                        <div class="accordion lg:mt-8 mt-3 bg-[#00141B] border-[#80898D] rounded-[6px] py-4 px-5 border-[0.5px]">
                            <label class="accordion-title relative block" for="6">
                                <input className='hidden' type="radio" id="6" name="a" />
                                <h3 className=' text-white ff_anton font-normal text-[16px]  lg:text-[20px] lg:pe-16 pe-6'> ¿Puedo probar sus juegos antes de comprometerme?</h3>                        </label>
                            <div class="accordion-content hidden">
                                <p className='text-[#CCD0D1] ff_inter font-medium lg:text-base text-sm lg:pe-16 pe-0 opacity-[0.8] pt-2'>   En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar. </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className=' container px-4 mx-auto lg:pt-36 lg:pb-36 pt-12 pb-12'>

                <div className='border-[#828F91] border-[1px] lg:pt-24 pt-4 rounded-[16px] overflow-hidden z-[1] relative' data-aos="fade-left">
                    <div className=' absolute left-0 z-[-1]  top-0'>
                        <img src={shadow_img} alt="" />
                    </div>     <div className=' absolute z-[-1] right-0 top-0'>
                        <img src={shadow_img1} alt="" />
                    </div>
                    <h3 className=' ff_anton font-normal text-[32px] px-3 text-white text-center lg:pb-10 pb-4'>Lanza tu propia plataforma en sólo 2 semanas</h3>
                    <div className=' flex justify-center'>
                        <div className='lg:mb-24 mb-4 relative z-[2]'>
                            <button className=' ff_inter font-bold text-base btn_color ease-in-out duration-500  px-[46px] py-[13px] rounded-[41px]'>Leer más</button>
                            <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                <img src={btn_line} className=' ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Preguntas