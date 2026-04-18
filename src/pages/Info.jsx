import Card from '@/components/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import strelka from '../assets/Frame 1321317086.png'
import Box from '@/components/Box'
import chec from '../assets/chec.png'



let api = "http://37.27.29.18:8001/api/to-dos"
let apiImg = "http://37.27.29.18:8001/images"


const Info = () => {
  let { id } = useParams()
  let [infoUser, setInfoUser] = useState({})


  async function getInfo() {
    try {
      let { data } = await axios.get(`${api}/${id}`)
      setInfoUser(data.data)
    } catch (error) {
      console.error(error);

    }
  }



  useEffect(() => {
    getInfo()
  }, [])
  return (
    <>
      <div className='flex gap-[100px]  max-sm:flex-col max-sm:items-center'>
        <div className='m-[50px]'>
          {
            infoUser?.images?.map((img) => {
              return <div>
                <img className='w-[800px] h-[500px] m-[100px] max-sm:m-[10px]' src={`${apiImg}/${img.imageName}`} alt="" />
              </div>
            })
          }

          <h1 className='ml-[90px] text-[30px]'>{infoUser?.name}</h1>
          <h1 className='ml-[90px] text-[20px]'>{infoUser?.description}</h1>

        </div>
        <div className='w-[400px] h-[500px] rounded-[10px] shadow-[0px_0px_10px_lightgrey] m-[200px_100px] text-[#203686]'>
          <h1 className='text-[30px] m-[20px]'>138.18 ₽</h1>
          <div className='flex justify-center gap-[100px] mt-[30px]'>
            <p>Цена,  ₽ / кг </p>
            <h1>138.18</h1>
          </div>
          <button className='w-[200px] h-[50px] rounded-[10px] bg-[#FFED32] ml-[70px] mt-[20px] text-[#203686]' >В корзину</button>
          <h1 className='text-[20px] m-[20px]'>Доставка</h1>
          <div className='flex justify-center gap-[70px] mt-[30px]'>
            <p>Сегодня <br />
              15.00 – 23.00</p>
            <p>Сегодня <br />
              15.00 – 23.00</p>
          </div>
          <h1 className='text-[20px] m-[20px]'>Наличие</h1>
          <div className='mt-[10px] flex justify-center gap-[20px] mr-[70px]'>
            <img src={chec} className='w-[30px] h-[30px]' alt="" />
            <p>На складах в Москве <br />
              Много</p>
          </div>
          <div className='mt-[10px] flex justify-center gap-[20px]'>
            <img src={chec} className='w-[30px] h-[30px]' alt="" />
            <p>На складе в Санкт-Петербурге <br />
              Мало\</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[100px]'>
        <div>
          <div className='w-[900px] text-[#203686]'>
            <h1 className='text-[20px] m-[20pz]'>Описание</h1>
            <p>Каждый стейк представляет собой тщательно выбранную и обработанную хвостовую часть трески, замороженную с сохранением свежести и натурального вкуса.
              Произведенный с использованием передовых технологий и высоких стандартов качества, этот продукт гарантирует неповторимый опыт приготовления. Отличается высоким содержанием мяса и богатством природных вкусов, треска от Экор станет превосходным выбором для тех, кто ценит свежесть и качество морепродуктов.
              Удобная форма порционирования (1/8) обеспечивает гибкость в использовании, позволяя легко подготовить блюда различной сложности. Полезные питательные вещества и нежная текстура трески сделают ваш приём пищи неповторимым.</p>
          </div>
        </div>
      </div>
      <Card />
      <div className='flex justify-around mt-[100px]'>
        <h1 className='text-[35px] text-[#203686]'>Похожие товары</h1>
        <img src={strelka} className='w-[70px] h-[30px]' alt="" />
      </div>
      <div className='flex justify-center gap-[30px] mt-[50px]  max-sm:flex-col max-sm:items-center'>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>

  )
}

export default Info
