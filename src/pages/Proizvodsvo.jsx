import SwaggerTodo from '@/components/SwaggerTodo'
import React from 'react'
import image from '../assets/Frame 1618868410.png'
import karzin from '../assets/Long Button Desktop.png'
import Box from '@/components/Box'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'

const Proizvodsvo = () => {
  return (
    <div>
      <div className='w-[900px] max-sm:w-[450px]'>
        <h1 className='text-[50px] mt-[50px] ml-[150px] text-[#203686]  max-sm:texxt-[30px] max-sm:ml-[10px] '>Рыбоперерабатывающее предприятие ПТК Экор-Фиш</h1>
      </div>
      <SwaggerTodo />
      <div className='flex justify-center gap-[50px] mt-[100px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
        <div className='w-[350px]'>
          <div className='w-[300px] h-[70px] rounded-[20px] shadow-[0px_0px_10px_lightgrey]'>
            <h1 className='ml-[30px] pt-[5px] text-[18px]'>Филе рыбы, <br /> стейки, фарш</h1>


          </div>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Филе горбуши</p>
          <p className='m-[20px]'>Фасованная <br /> продукция «Экор» </p>
          <p className='m-[20px]'>Готовая продукция <br /> «Экор» </p>
          <h1 className='text-[20px] m-[20px]'>Фильтры</h1>
          <p className='m-[20px]'>Вид заморозки</p>
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
      <Card2/>
    </div>

  )
}

export default Proizvodsvo
