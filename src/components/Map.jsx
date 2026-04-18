import React from 'react'
import map from '../assets/Rectangle 34624502.svg'
import map2 from '../assets/Rectangle 34624502 (1).svg'
import map3 from '../assets/Rectangle 34624502 (2).svg'


const Map = () => {
    return (
        <>
            <div className='w-[80%] m-auto'>
                <div className='flex gap-[200px] mt-[100px] mb-[50px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                    <p className='text-[grey] mt-[20px] ml-[150px] max-sm:ml-[10px]'>Контакты</p>
                    <h1 className='text-[40px] text-[#203686]'>Контакты</h1>
                </div>
                <hr className='border-[1px] border-solid border-[#20368633] ' />
                <div className='flex justify-center gap-[150px] mt-[20px]   max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                    <h1 className='text-[20px] text-[#203686]'>Склад отгрузки </h1>
                    <div className='w-[350px]'>
                        <p className='text-[grey]'>г. Москва, Открытое шоссе, 13, стр. 1
                            8 (800) 505-01-82, +7 (495) 637-82-28
                            Пн-Пт: 9.00-17.00 • Сб-Вс: выходной </p>
                    </div>
                    <img src={map} alt="" />
                </div>
                <hr className='border-[1px] border-solid border-[#20368633] mt-[20px] ' />
                <div className='flex justify-center gap-[150px] mt-[20px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
                    <h1 className='text-[20px] text-[#203686]'>Склад отгрузки </h1>
                    <div className='w-[350px]'>
                        <p className='text-[grey]'>г. Москва, Открытое шоссе, 13, стр. 1
                            8 (800) 505-01-82, +7 (495) 637-82-28
                            Пн-Пт: 9.00-17.00 • Сб-Вс: выходной </p>
                    </div>
                    <img src={map2} alt="" />
                </div>
                <hr className='border-[1px] border-solid border-[#20368633] mt-[20px]' />
                <div className='flex justify-center gap-[150px] mt-[20px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                    <h1 className='text-[20px] text-[#203686]'>Склад отгрузки </h1>
                    <div className='w-[350px]'>
                        <p className='text-[grey]'>Ленинградская область, Ломоносовский район, Виллозское городское поселение, Южная часть производственной зоны Горелово, 1-й квартал, 1

                            8 (800) 505-01-82
                            Пн-Пт: 9.00-17.00 • Сб-Вс: выходной  </p>
                    </div>
                    <img src={map3} alt="" />
                </div>
            </div>
        </>
    )
}




export default Map


