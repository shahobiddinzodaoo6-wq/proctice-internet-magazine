import React from 'react'
import men2 from '../assets/Frame 1321317016 (1).png'
import seafood from '../assets/product.svg'
import seafood2 from '../assets/product2.svg'
import seafood3 from '../assets/product3 (1).svg'
import seafood4 from '../assets/product3 (2).svg'
import Card2 from '@/components/Card2'
import Card from '@/components/Card'
import Videos from '@/components/Videos'
import strelka from '../assets/Frame 1321317041.png'
import men from '../assets/Специальные предложение для новых клиентов.png'
import MokApi from '@/components/MokApi'






const AboutCompony = () => {
  return (
    <>
      <div className='flex justify-center mt-[80px] '>
        <div>
          <h1 className='text-[40px] text-[#203686]'>О компании</h1>
          <img src={men2} className='mt-[50px]' alt="" />
        </div>
      </div>
      <div className='flex justify-center gap-[200px] mt-[100px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
        <p className='text-[grey] ml-[150px] max-sm:ml-[0px]'>О компании</p>
        <div className='text-[#203686]'>
          <div className='w-[1000px] max-sm:w-[450px]'>
            <h1 className='text-[50px] max-sm:text-[30px] '>Экор — крупная производственно-торговая компания, занимающаяся производством и реализацией рыбы и морепродуктов</h1>
          </div>
          <div className='flex gap-[40px] mt-[20px]  max-sm:flex-col max-sm:items-center'>
            <div className='w-[400px] '>
              <p>С 1998 года компания «Экор» предоставляет широкий ассортимент замороженной рыбы, готовых продуктов и других продуктов питания. Компания имеет в своём составе более 40 автомобилей рефрижераторов, которые позволяют быстро доставить охлаждённую и замороженную рыбу по Москве и МО. Общий оборот компаний составляет более 2,5 миллиардов руб в год. Численность сотрудников более 100 человек и более 3000 постоянных клиентов. </p>
            </div>
            <div className='w-[400px] '>
              <p>Компания «Экор» предлагает разнообразный выбор рыбы и морепродуктов оптом с доставкой при заказе от 15000 рублей. Она осуществляет прямые поставки из различных регионов и стран, предоставляет отсрочку платежа, а также обеспечивает конкурентоспособные цены и имеет открытую бухгалтерскую отчётность. Разработанный компанией чат-бот оптовых цен, даёт возможность оперативно запросить и сравнить цены.  </p>
            </div>
          </div>
        </div>
      </div>
      <MokApi/>
      <div className='flex justify-center mt-[100px] gap-[400px] max-sm:gap-[30px]  max-sm:flex-col max-sm:items-center '>
        <p className='text-[grey]'>Универсальные поставки</p>
        <div className='w-[600px]  max-sm:w-[350px]'>
          <h1 className='text-[40px] text-[#203686]'>Мы специализируемся на поставках для различных сфер бизнеса</h1>
        </div>

      </div>
      <div className='mt-[60px] flex justify-center '>
        <div className='w-[75%] h-[550px] rounded-[20px] shadow-[0px_0px_10px_lightgrey] bg-[white] max-sm:w-[100%] max-sm:h-[1100px]'>
          <div className='flex justify-center gap-[40px] pt-[40px]  max-sm:flex-col max-sm:items-center max-sm:gap-[20px]'>
            <div className='flex gap-[40px] max-sm:gap-[20px]'>
              <img src={seafood} alt="" />
              <div className='w-[260px] h-[220px] border-l-[1px] border-l-solid border-l-[#DDE1E6]  border-b-[1px] border-b-solid border-b-[#DDE1E6]  border-r-[1px] border-r-solid border-r-[#DDE1E6] '>
                <p className='text-[grey] text-[18px] ml-[20px]'>01</p>
                <h1 className='text-[20px] text-[#203686] mt-[120px] ml-[20px]'>Торговые сети и магазины «У дома»</h1>
              </div>
            </div>
            <div className='flex gap-[40px] max-sm:gap-[20px]'>
              <img src={seafood2} alt="" />
              <div className='w-[260px] h-[220px] border-l-[1px] border-l-solid border-l-[#DDE1E6]  border-b-[1px] border-b-solid border-b-[#DDE1E6]  '>
                <p className='text-[grey] text-[18px] ml-[20px]'>02</p>
                <h1 className='text-[20px] text-[#203686] mt-[120px] ml-[20px]'>Рестораны, кафе и столовые</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-[40px] pt-[40px]  max-sm:flex-col max-sm:items-center max-sm:gap-[20px]'>
            <div className='flex gap-[40px] max-sm:gap-[20px]'>
              <div className='w-[260px] h-[220px]  border-t-[1px] border-t-solid border-t-[#DDE1E6]  border-r-[1px] border-r-solid border-r-[#DDE1E6] '>
                <p className='text-[grey] text-[18px] ml-[20px]'>03</p>
                <h1 className='text-[20px] text-[#203686] mt-[120px] ml-[20px]'>Оптовикам и прозводителям</h1>
              </div>
              <img src={seafood3} alt="" />
            </div>
            <div className='flex gap-[40px] max-sm:gap-[20px]'>
              <div className='w-[260px] h-[220px] border-l-[1px] border-l-solid border-l-[#DDE1E6]  border-t-[1px] border-t-solid border-t-[#DDE1E6]    border-r-[1px] border-r-solid border-r-[#DDE1E6]'>
                <p className='text-[grey] text-[18px] ml-[20px]'>04</p>
                <h1 className='text-[20px] text-[#203686] mt-[120px] ml-[20px]'>HoReCa</h1>
              </div>
              <img src={seafood4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Card />
      <div className='flex justify-center gap-[300px] mt-[200px]  max-sm:flex-col max-sm:items-center max-sm:gap-[50px]'>
        <p className='text-[grey]'>Самое главное</p>
        <div className='w-[650px] max-sm:w-[400px]'>
          <h1 className='text-[40px] text-[#203686]  max-sm:text-[30px]'>Наше участие в программах «Естественный отбор» и «Кухня»</h1>
        </div>
        <img src={strelka} className='w-[66px] h-[28px]' alt="" />
      </div>
      <div className='flex justify-center mt-[70px]'>
        <div>
          <img src={men} className='max-sm:ml-[25px] max-sm:w-[500px] max-sm:ml-[60px]' alt="" />
          <h1 className='text-[20px] text-[#203686] mt-[20px] max-sm:ml-[40px]'>Наше участие в программе «Естественный отбор» на канале «ТВЦ»</h1>
        </div>

      </div>
      <Videos />
      <Card2 />
    </>
  )
}



export default AboutCompony





