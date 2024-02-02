import React, { useState } from 'react'
import exclusive_logo from '../assets/image/png/exclusive_logo.png'
import Hamburger from 'hamburger-react'
import btn_line from '../assets/image/png/btn_line.png'
import whiteline from '../assets/image/png/whiteline.png'

const Hero_section = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false)
    if (show === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }

    return (
        <div className='bg_img bg-no-repeat bg_color bg-cover lg:pb-40 pb-9 overflow-hidden'>
            <nav className='bg_bular py-6'>
                <div className=' container px-4 mx-auto'>
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center gap-24 '>
                            <img className=' z-30 relative cursor-pointer max-w-[170px] sm:max-w-[210px]  w-full' src={exclusive_logo} alt="" />
                            <ul className={` bg-black lg:bg-transparent lg:gap-5 gap-8 flex lg:flex  justify-center  items-center flex-col lg:flex-row top-0 w-full h-full z-20 ${show ? 'left-0' : 'left-[-100%]'}  text-center w-full duration-500 fixed lg:static`}>
                                <li><a href="" className=' ff_inter font-semibold text-base after:right-0 navline text-white after:w-0 after:h-[3px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out'>Hogar</a></li>
                                <li><a href="" className=' ff_inter font-semibold text-base text-white  after:right-0 navline after:w-0 after:h-[3px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out'>Misión</a></li>
                                <li><a href="" className=' ff_inter font-semibold text-base text-white  after:right-0 navline after:w-0 after:h-[3px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out'>Tragamonedas</a></li>
                                <li><a href="" className=' ff_inter font-semibold text-base text-white  after:right-0 navline after:w-0 after:h-[3px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out'>Por qué elegirnos</a></li>
                                <li><a href="" className=' ff_inter font-semibold text-base text-white  after:right-0 navline after:w-0 after:h-[3px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out'>Ofertas</a></li>
                            </ul>
                        </div>

                        <div className=' relative z-[2]'>
                            <button className='ff_inter hidden duration-150 ease-in-out lg:block font-bold text-base border-[white] text-white hover:text-black hover:bg-white border-[1px] px-[46px] py-3 rounded-[41px]'>Acceso</button>
                            <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                                <img src={whiteline} className=' ' alt="" />
                            </div>
                        </div>

                        <div className='z-30 lg:hidden' onClick={() => setShow(!show)}>
                            <button className='{show ?}  text-lg text-white'> <Hamburger toggled={isOpen} toggle={setOpen} /></button>

                        </div>
                    </div>
                </div>
            </nav>

            <div className=' container px-4 mx-auto lg:pt-32 pt-9'>
                <div className=' flex justify-center'>
                    <h1 className=' ff_anton font-normal lg:text-[72px] text-[40px] sm:text-[55px] text-center text-white lg:leading-[86px] sm:leading-[75px] leading-[60px] uppercase max-w-[505px]'>Exclusive Games. Pasión por ganar</h1>
                </div>
                <div className='flex justify-center lg:pt-4 pt-0 '>
                    <p className=' ff_inter font-medium text-base text-[#CCCFD1] max-w-[727px] opacity-[0.8] text-center '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>

                </div>
                <div className=' flex justify-center'>
                    <div className=' lg:mt-10 mt-4 relative z-[2]'>
                        <button className=' ff_inter font-bold ease-in-out duration-500  text-base btn_color  px-[46px] py-3 rounded-[41px]'>Empezar</button>
                        <div className='absolute z-[-1] left-[-5px]  bottom-[-10%]'>
                            <img src={btn_line} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero_section