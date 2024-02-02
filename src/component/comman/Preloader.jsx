import React from 'react'
import exclusive_logo from '../../assets/image/png/exclusive_logo.png'

function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("overflow_hidden");
    }, 3000);

    return (
        <div>
            <div id="none" className="h-screen w-full bg-[#000] fixed top-0 start-0  z-40">
                <div className="flex justify-center items-center h-screen">
                    <div className=' animate-bounce relative'>
                        <img src={exclusive_logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader