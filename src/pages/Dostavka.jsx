import React from 'react'
import icon from '../assets/Frame 53024.svg'
import Card from '@/components/Card'
import cars from '../assets/Frame 1321317016.jpg'
import Card2 from '@/components/Card2'
import DbjsonLogiks from '@/components/dbjsonLogiks'


const Dostavka = () => {
  return (
    <>
      <div className='flex justify-center gap-[30px] mt-[80px]  max-sm:flex-col max-sm:items-center'>
        <h1 className='text-[40px] text-[#203686]'>Доставка</h1>
        <div className='flex gap-[30px]  max-sm:flex-col max-sm:items-center'>
          <div>
            <p className='w-[400px] text-[#203686]  '>Наша компания имеет собственную современную службу доставки, имеющую более 40 автомобилей оснащённых холодильными установками и GPS-трекерами. Комплектность заказов при погрузке и разгрузке контролируется с помощью считывателей штрих — кодов, </p>
          </div>
          <div>
            <p className='w-[400px] text-[#203686]  '>Наша компания имеет собственную современную службу доставки, имеющую более 40 автомобилей оснащённых холодильными установками и GPS-трекерами. Комплектность заказов при погрузке и разгрузке контролируется с помощью считывателей штрих — кодов, </p>
          </div>
        </div>
      </div>
      <DbjsonLogiks/>

      <div className='flex justify-center gap-[400px] mt-[100px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
        <p>Доставка</p>
        <div>
          <h1 className='text-[40px] text-[#203686]'>Условия доставки, стоимости и возврата товара</h1>
          <div className='w-[1000px] h-[200px] mt-[100px]  shadow-[0px_0px_10px_lightgrey] rounded-[10px] max-sm:w-[500px] '>
            <div className='flex gap-[25px] p-[30px]'>
              <img src={icon} alt="" />
              <div className='w-[450px] mt-[20px] max-sm:w-[400px]'>
                <h1 className='text-[24px] text-[#203686]'>Минимальная сумма заказа</h1>
                <p className='text-[grey] mt-[10px]'>Минимальная сумма заказа для юридических лиц и индивидуальных предпринимателей: 12 000 ₽
                  Не работаем с физическими лицами.</p>
              </div>
            </div>
          </div>

          <div className='w-[1000px] h-[400px] mt-[30px]  shadow-[0px_0px_10px_lightgrey] rounded-[10px] max-sm:w-[500px] max-sm:h-[700px]'>
            <div className='flex gap-[25px] p-[30px] '>
              <img src={icon} alt="" />
              <div className=' '>
                <h1 className='text-[24px] text-[#203686]'>Срок доставки</h1>
                <div className='flex gap-[30px] mt-[20px]  max-sm:flex-col max-sm:items-center'>
                  <div className='w-[400px] text-[grey]'>
                    <p className=''>Доставка осуществляется ежедневно кроме выходных дней. В периоды длительных праздников, доставка осуществляется по заранее согласованному графику.
                      Для Москвы и Московской области, если заказ сделан и подтверждён до 16–30 текущего дня, то доставка будет осуществлена на следующий рабочий день. Возможна доставка в день заказа по согласованию с менеджером.
                      Для отдельных городов Московской области и других областей сроки доставки согласовываются с менеджером.</p>
                  </div>
                  <div className='w-[400px] text-[grey]'>
                    <p className=''>Доставка осуществляется ежедневно кроме выходных дней. В периоды длительных праздников, доставка осуществляется по заранее согласованному графику.
                      Для Москвы и Московской области, если заказ сделан и подтверждён до 16–30 текущего дня, то доставка будет осуществлена на следующий рабочий день. Возможна доставка в день заказа по согласованию с менеджером.
                      Для отдельных городов Московской области и других областей сроки доставки согласовываются с менеджером.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[1000px] h-[200px] mt-[30px]  shadow-[0px_0px_10px_lightgrey] rounded-[10px] max-sm:w-[500px]'>
            <div className='flex gap-[25px] p-[30px]'>
              <img src={icon} alt="" />
              <div className='w-[450px] mt-[20px] max-sm:w-[400px]'>
                <h1 className='text-[24px] text-[#203686]'>Минимальная сумма заказа</h1>
                <p className='text-[grey] mt-[10px]'>Минимальная сумма заказа для юридических лиц и индивидуальных предпринимателей: 12 000 ₽
                  Не работаем с физическими лицами.</p>
              </div>
            </div>
          </div>
          <div className='w-[1000px] h-[200px] mt-[30px]  shadow-[0px_0px_10px_lightgrey] rounded-[10px] max-sm:w-[500px]'>
            <div className='flex gap-[25px] p-[30px]'>
              <img src={icon} alt="" />
              <div className='w-[450px] mt-[20px]  max-sm:w-[400px]'>
                <h1 className='text-[24px] text-[#203686]'>Минимальная сумма заказа</h1>
                <p className='text-[grey] mt-[10px]'>Минимальная сумма заказа для юридических лиц и индивидуальных предпринимателей: 12 000 ₽
                  Не работаем с физическими лицами.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <div className='flex justify-center gap-[400px]  mt-[100px]  max-sm:gap-[30px]   max-sm:flex-col max-sm:items-center'>
          <p className='text-[grey]'>Онлайн-камера </p>
          <div className='' >
            <h1 className='text-[40px] text-[#203686] max-sm:text-[30px]' >Онлайн-камера с эстакады <br /> погрузки автомобилей</h1>
            <div className='flex gap-[20px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
                 <img src={cars} alt="" />
                 <div className='w-[300px]'>
                     <p className='text-[#203686] '>Следите за процессом погрузки через нашу онлайн-камеру с эстакады погрузки автомобилей</p>
                 </div>
            </div>
          </div>
      </div>
      <Card2/>
    </>
  )
}

export default Dostavka



