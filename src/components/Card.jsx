import React from 'react'
import pnohe from '../assets/phonee.png'
import watsap from '../assets/WhatsApp.png'
import teleg from '../assets/Icon (11).png'
import vk from '../assets/Icon (12).png'

const Card = () => {
    return (
        <>
            <div className='flex justify-center mt-[100px]'>
                <div className='w-[80%] h-[600px] bg-[#70798E]  rounded-[20px] max-sm:h-[1120px] max-sm:w-[100%]'>
                    <div className='flex justify-center gap-[100px] pt-[50px] ВКонтакте max-sm:flex-col max-sm:items-center'>
                        <div className='w-[490px] text-[white]'>
                            <h1 className='text-[55px]'>Подписывайтесь на чат-бот оптовых цен</h1>
                            <div className='w-[300px]'>
                                <p >Узнайте наши цены за пару секунд через наш чат-бот без писем и звонков менеджеру</p>
                            </div>
                            <div className='flex gap-[10px] mt-[50px]'>

                                <div className='w-[250px] h-[50px] flex justify-center gap-[10px] rounded-[10px] bg-[#4ADD47]'>
                                    <img src={watsap} className='w-[24px] h-[24px] mt-[10px]' alt="" />
                                    <h1 className='text-[white] pt-[10px]'>+7 ( _ _ _ ) _ _ _ – _ _ – _ _</h1>
                                </div>
                                <div className='w-[150px] h-[50px] rounded-[10px] bg-[#2AABEE] text-[white] flex justify-center gap-[10px] '>
                                    <img className='w-[24px] h-[24px] mt-[13px]' src={teleg} alt="" />
                                    <h1 className='text-[white] mt-[13px]'>Telegram</h1>
                                </div>
                                <div className='w-[150px] h-[50px] rounded-[10px] bg-[#1877F2] text-[white] flex justify-center gap-[10px] '>
                                    <img className='w-[24px] h-[24px] mt-[13px]' src={vk} alt="" />
                                    <h1 className='text-[white] mt-[13px]'>ВКонтакте</h1>
                                </div>
                            </div>
                        </div>
                        <img src={pnohe} className='mt-[12px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card