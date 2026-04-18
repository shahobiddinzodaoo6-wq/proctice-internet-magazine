import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Map from '@/components/Map'
import Videos from '@/components/Videos'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Map />
      <div className='flex justify-center gap-[400px] mt-[100px]   max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
        <p>Преимущества</p>
        <div className='w-[650px] max-sm:w-[400px]'>
          <h1 className='text-[50px] text-[#203686] max-sm:text-[25px] max-sm:ml-[20px] '>Специальные предложения для новых клиентов</h1>
        </div>
      </div>
      <div className='w-[80%] m-auto mt-[50px] '>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[200px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
          <p>01</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Отсрочка платежа с первой поставки</h1>
          </div>
          <div className='w-[450px]'>
            <p>Начните сотрудничество с уверенностью, получив возможность отложенного платежа</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[200px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
          <p>02</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Бесплатные образцы на проработку для общепита</h1>
          </div>
          <div className='w-[450px]'>
            <p>Оцените качество наших продуктов, получив бесплатные образцы для тщательной проверки</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[325px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
          <p>03</p>
          <div>
            <h1 className=' text-[25px] text-[#203686]'>Доставка от 50 кг</h1>
          </div>
          <div className='w-[450px]'>
            <p>Экономьте на доставке, начиная с минимальных объемов заказ</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[200px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
          <p>04</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Фиксация цен для участников тендеров</h1>
          </div>
          <div className='w-[450px]'>
            <p>Гарантированные стабильные цены для участников тендеров</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[200px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
          <p>05</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Отдадим дешевле, если найдете цены ниже</h1>
          </div>
          <div className='w-[450px]'>
            <p>Мы уверены в наших конкурентоспособных ценах. В случае нахождения более низких цен, предоставим еще более выгодное предложение.</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />
        <div className='flex justify-center gap-[200px] mt-[30px] mb-[30px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px] '>
          <p>01</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Тестовая поставка со 100% возвратом</h1>
          </div>
          <div className='w-[450px]'>
            <p>Попробуйте нашу продукцию без риска. В случае неудовлетворенности, мы вернем 100% стоимости тестовой поставки.</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />

      </div>
      <Card/>
      <Videos/>
      <Card2/>
    </>
  )
}

export default Contact


