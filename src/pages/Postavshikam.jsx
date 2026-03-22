import Card2 from '@/components/Card2'
import React from 'react'

const Postavshikam = () => {
  return (
    <>
      <div className='flex justify-center mt-[100px] text-[#203686]'>
        <div>
          <h1 className='text-[50px] text-[#203686] max-sm:text-[30px]'>Поставщикам товаров и услуг</h1>
          <div className='flex gap-[200px] mt-[40px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
            <p>Приглашаем <br /> к сотрудничеству</p>
            <div className='w-[700px] max-sm:w-[450px]'>
              <h1 className='text-[grey] text-[25px]'>Наша компания закупает весь ассортимент продукции представленной на сайте в объемах от 500 кг до 25 т каждой позиции. Также мы постоянно стремимся расширить ассортимент и готовы пробовать новое.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-[300px] mt-[100px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
        <p className='text-[grey] mt-[20px]'>Реквизиты</p>
        <h1 className='text-[#203686] text-[40px]'>Ваши шаги для совместного </h1>
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
          <p>06</p>
          <div className='w-[450px]'>
            <h1 className=' text-[25px] text-[#203686]'>Тестовая поставка со 100% возвратом</h1>
          </div>
          <div className='w-[450px]'>
            <p>Попробуйте нашу продукцию без риска. В случае неудовлетворенности, мы вернем 100% стоимости тестовой поставки.</p>
          </div>
        </div>
        <hr className='border-[1px] border-solid border-[#20368633]' />

      </div>
      <Card2 />
    </>
  )
}

export default Postavshikam