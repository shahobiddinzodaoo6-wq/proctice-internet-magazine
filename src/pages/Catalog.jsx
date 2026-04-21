import React from 'react'
import image from '../assets/Frame 1618868410.png'
import karzin from '../assets/Long Button Desktop.png'
import Box from '@/components/Box'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import SawaggerCategories from '@/components/SawaggerCategories'



const Catalog = () => {
  return (
    <>
      <div className='flex justify-center gap-[50px] mt-[100px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
        <div className='w-[350px]'>
          <div className='w-[300px] h-[70px] rounded-[20px] shadow-[0px_0px_10px_lightgrey]'>
            <h1 className='ml-[30px] pt-[5px] text-[18px]'>Филе рыбы, <br /> стейки, фарш</h1>

          </div>
           <SawaggerCategories/>
          <div className='flex gap-[10px]'>
            <input type="checkbox" className='w-[20px] h-[20px] mt-[5px]' />
            <p>Быстрая заморозка</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="checkbox" className='w-[20px] h-[20px] mt-[5px]' />
            <p>Медленная заморозка</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="checkbox" className='w-[20px] h-[20px] mt-[5px]' />
            <p>Бомбинированная заморозка</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="checkbox" className='w-[20px] h-[20px] mt-[5px]' />
            <p>Заморозка в ледяную глазурь</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="checkbox" className='w-[20px] h-[20px] mt-[5px]' />
            <p>Заморозка в ледяную глазурь</p>
          </div>

          <p className='m-[20px]'>Температура хранения, 0С</p>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="radio" className='w-[20px] h-[20px] mt-[5px]' />
            <p>–18 и ниже</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="radio" className='w-[20px] h-[20px] mt-[5px]' />
            <p>–от –10 до –12</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="radio" className='w-[20px] h-[20px] mt-[5px]' />
            <p>–18 и ниже</p>
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <input type="radio" className='w-[20px] h-[20px] mt-[5px]' />
            <p>–от –10 до –12</p>
          </div>
          <p className='m-[20px]'>Температура хранения</p>
          <p className='m-[20px]'>% остатка срока годности для серии, которой больше на остатках </p>
          <div className='flex gap-[20px]'>
            <p>Сбросить</p>
            <button className='w-[140px] h-[43px] rounded-[10px] bg-[#FFED32]'>Применить</button>
          </div>
        </div>
        <div>
          <h1 className='text-[40px] '>Филе рыбы, стейки, фарш</h1>
          <div className='w-[800px] max-sm:w-[450px]'>
            <p>На сайте компании Экор можно купить свежемороженую рыбу оптом, морепродукты, рыбное филе от производителя. Осуществляем доставку в рестораны, магазины, оптовикам, в HoReCa по Москве и области на следующий день после заказа от 10 000 ₽. Все товары в каталоге есть в наличии, цены и фото реальные. Также в нашем ассортименте — замороженное мясо, овощи, ягоды, бакалея, масла, крупы, молочная продукция, консервация.</p>
          </div>
          <div className='flex justify-center gap-[30px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
            <Box />
            <Box />
            <Box />
          </div>
          <div className='flex justify-center gap-[30px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
            <Box />
            <Box />
            <Box />
          </div>
          <div className='flex justify-center gap-[30px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
            <Box />
            <Box />
            <Box />
          </div>
          <div className='flex justify-center gap-[30px] mt-[30px]  max-sm:flex-col max-sm:items-center'>
            <Box />
            <Box />
            <Box />
          </div>

        </div>
      </div>
      <Card />
      <Card2 />
    </>
  )
}

export default Catalog




