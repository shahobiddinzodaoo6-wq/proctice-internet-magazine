import React from 'react'
import image from '../assets/Frame 1618868410.png'
import karzin from '../assets/Long Button Desktop.png'




const Box = () => {
    return (
        <>
            <div>
                <img src={image} alt="" />
                <h1 className='text-[20px]'>Барабулька н/р 12шт х 0,6кг 1/12 <br /> Араката</h1>
                <div className='flex gap-[40px] '>

                    <h1>Дата выработки: <br />
                        15.11.2023 г.
                    </h1>

                    <h1>Срок годности:  <br />
                        02.03.2024 г.
                    </h1>
                </div>
                <div className='w-[280px] h-[90px] rounded-[10px] shadow-[0px_0px_10px_lightgrey]'>
                    <p className='m-[20px]'>Оптом (от 500 кг)</p>
                </div>
                <div className=' flex gap-[100px] mt-[20px]'>
                    <h1 className='text-[25px]'>1130.30 ₽ </h1>
                    <img src={karzin} alt="" />
                </div>
            </div>
        </>
    )
}


export default Box