import React from 'react'
import image from '../assets/Frame 1321317016.svg'



const Card2 = () => {
    return (
        <>
            <div className='flex justify-center mt-[100px]'>
                <div className='w-[1050px] h-[520px] rounded-[20px] shadow-[0px_0px_10px_lightgrey] max-sm:h-[1100px] '>
                    <div className='flex max-sm:flex-col max-sm:items-center'>
                        <img src={image} alt="" />
                        <div className='w-[550px] ml-[30px] mt-[30px] max-sm:ml-[120px]'>
                            <h1 className='text-[40px] text-[#203686]'>Оставьте заявку на сотрудничество</h1>
                            <input className='w-[430px] h-[50px] mt-[20px] rounded-[10px] bg-[#F4F7FB] border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Имя ' type="text" />
                            <input className='w-[430px] h-[50px] mt-[20px] rounded-[10px] bg-[#F4F7FB] border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Номер телефона ' type="text" />
                            <input className='w-[430px] h-[50px] mt-[20px] rounded-[10px] bg-[#F4F7FB] border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Email ' type="text" />


                            <div className='w-[530px] mt-[10px]'>
                                <p className='text-[grey]'>Подтверждаю своё согласие на обработку и хранение моих персональных данных в соответствии с пользовательским соглашением</p>
                            </div>
                            <button className='w-[430px] h-[43px] rounded-[10px] bg-[#FFED32] text-[#203686] mt-[10px]'>Отправить</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2