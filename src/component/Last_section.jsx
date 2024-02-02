import React from 'react'
import exclusive_logo from '../assets/image/png/exclusive_logo.png'
import { Message, Phone } from './Icon'
import insta_icon from '../assets/image/png/insta_icon.png'
import Facebook from '../assets/image/png/facebook.png'
import In from '../assets/image/png/in.png'

const Last_section = () => {
    return (
        <div className='bg-[#000000] lg:pt-16 pt-2 relative z-[2]'>
            <div className='bg_color1 h-[180px] w-[180px] blur-[75px] absolute bottom-0 z-[-1] opacity-[0.5] left-[-4%]'> </div>
            <div className='bg_color1 h-[180px] w-[180px] blur-[75px] absolute top-[12%] z-[-1] opacity-[0.5] right-[-4%]'>   </div>
            <div className='container px-4 mx-auto '>
                <div className='flex flex-wrap lg:flex-row  pt-2'>
                    <div className='w-full  px-3 pt-7 lg:w-5/12'>
                        <img className=' cursor-pointer max-w-[170px] sm:max-w-[210px]  w-full' src={exclusive_logo} alt="" />

                        <p className=' ff_inter  font-medium text-base pt-4 text-[#CCCCCC] opacity-[0.8] me-0'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className=' flex gap-3  pt-6'>
                            <a href=""> <img className='  hover:translate-y-[-4px] duration-300 ease-in-out cursor-pointer' src={insta_icon} alt="" /></a>
                            <a href=""><img className=' hover:translate-y-[-4px] duration-300 ease-i' src={Facebook} alt="" /></a>
                            <a href=""><img className=' hover:translate-y-[-4px] duration-300 ease-in-out cursor-pointer' src={In} alt="" /></a>

                        </div>
                    </div>
                    <div className=' px-3 pt-7 lg:w-2/12'>

                        <p className=' ff_inter font-bold text-base text-white'>Menú principal</p>
                        <ul>
                            <li className=' pt-4'><a className='ff_inter font-medium text-base ms-0 text-[#CCCCCC] opacity-[0.8] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Hogar</a></li>
                            <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Misión</a></li>
                            <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Tragamonedas</a></li>
                            <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Por qué elegirnos</a></li>
                            <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Ofertas</a></li>
                        </ul>


                    </div>
                    <div className=' px-2 pt-7 lg:w-2/12'>
                        <div className=''>
                            <p className=' ff_inter font-bold text-base text-white'>Atención al cliente</p>
                            <ul>
                                <li className=' pt-4'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">¿Necesitas ayuda?</a></li>
                                <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out ' href="">política de privacidad</a></li>
                                <li className='pt-3'><a className='ff_inter font-medium text-base opacity-[0.8] text-[#CCCCCC] navline after:w-0 after:h-[3px] after:bg-[#CCCCCC] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out' href="">Términos de servicios</a></li>
                            </ul>

                        </div>

                    </div>
                    <div className=' px-3 pt-7 lg:w-3/12'>
                        <div className=''>
                            <p className=' ff_inter font-bold text-base text-white'>Atención al cliente</p>
                            <ul>
                                <li className='flex gap-2 pt-4'>
                                    <Message />
                                    <a className='ff_inter font-medium text-base text-[#CCCCCC] opacity-[0.8]' href="">juegosexclusivos@gmail.com</a></li>
                                <li className='flex gap-2 pt-3'>
                                    <Phone />
                                    <a className='ff_inter font-medium text-base text-[#CCCCCC] opacity-[0.8]' href="">(101)342-7873</a></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
            <div className=' h-[1px] lg:mt-16 mt-5 bg-[#191919] '></div>
            <p className=' ff_inter font-medium text-base text-[#808080] opacity-[0.5] pt-5 pb-5 text-center'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </div>
    )
}

export default Last_section