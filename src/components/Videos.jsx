import React from 'react'
import videos from '../assets/Frame 1321317016.png'
import videos2 from '../assets/Frame 1321317017.png'
import videos3 from '../assets/Frame 1321317018.jpg'


const Videos = () => {
    return (
        <>
            <div className='mt-[100px] flex justify-center gap-[200px]  max-sm:flex-col max-sm:items-center max-sm:gap-[20px]'>
                <p>Онлайн-камеры</p>
                <div className='text-[#203686] mr-[200px] max-sm:mr-[0px]'>
                    <h1 className='text-[40px]'>Наши онлайн-камеры</h1>
                    <div className='flex gap-[40px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
                        <div className='w-[300px]'>
                            <p>Погрузитесь в мир нашего производства и складских операций через наши онлайн-камеры. </p>
                        </div>
                        <div className='w-[300px]'>
                            <p>Погрузитесь в мир нашего производства и складских операций через наши онлайн-камеры. </p>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='flex justify-center gap-[30px] mt-[80px] ml-[350px] max-sm:ml-[0px] max-sm:flex-col max-sm:items-center'>
                <div className='max-sm:hidden'>
                    <img src={videos} alt="" />
                    <h1 className='text-[#203686] mt-[5px]'>Офис</h1>
                </div>
                <div>
                    <img src={videos2} alt="" />
                    <h1 className='text-[#203686] mt-[5px]'>Производство</h1>
                </div>
                <div className='max-sm:hidden'>
                    <img src={videos3} alt="" />
                    <h1 className='text-[#203686] mt-[5px]'>Склады</h1>
                </div>
            </div>
        </>
    )
}

export default Videos