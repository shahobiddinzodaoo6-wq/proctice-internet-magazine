import React from 'react'
import check from '../assets/checked.png'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'



const Payment = () => {
  return (
    <>
      <div className='flex justify-center mt-[80px]'>
        <div>
          <h1 className='text-[45px] text-[#203686]'>Оплата</h1>
          <div className='mt-[30px] w-[1200px] h-[70px] rounded-[15px] shadow-[0px_0px_10px_lightgrey] max-sm:hidden'>
            <div className='flex gap-[100px]'>
              <div className='w-[450px] h-[69px] rounded-[15px] border-[1px] border-solid border-[#203686] '>
                <p className='text-[#203686] mt-[20px] ml-[60px]'>Отсрочка платежа с первой поставки</p>
              </div>
              <p className='text-[grey] mt-[20px]'>Любая форма оплаты</p>
              <p className='text-[grey] mt-[20px]'>История платежей в личном кабинете</p>
            </div>

          </div>
          <div className='flex gap-[30px] mt-[50px]  max-sm:flex-col max-sm:items-center'>
            <div className='w-[800px] h-[580px] rounded-[20px] shadow-[0px_0px_10px_lightgrey] max-sm:h-[1000px]'>
              <div className='w-[450px] m-[40px] max-sm:w-[400px]'>
                <h1 className='text-[40px] text-[#203686] max-sm:text-center max-sm:text-[35px] max-sm:ml-[90px]'>Отправьте заявку на отсрочку платежа</h1>
              </div>
              <div className='flex justify-center mt-[20px]  max-sm:flex-col max-sm:items-center'>
                <div>
                  <input type="text" className='w-[700px] h-[60px] rounded-[10px] bg-[#F4F7FB]  border-[1px] border-solid border-[#DDE1E6] pl-[20px] max-sm:w-[340px]' placeholder='Название компании' />
                  <div className=' flex justify-center gap-[20px] mt-[20px]  max-sm:flex-col max-sm:items-center'>
                    <input type="text" className='w-[340px] h-[60px] rounded-[10px] bg-[#F4F7FB]  border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Ваше имя' />
                    <input type="text" className='w-[340px] h-[60px] rounded-[10px] bg-[#F4F7FB]  border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='ИНН' />

                  </div>
                  <div className=' flex justify-center gap-[20px] mt-[20px]  max-sm:flex-col max-sm:items-center'>
                    <input type="text" className='w-[340px] h-[60px] rounded-[10px] bg-[#F4F7FB]  border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Номер телефона' />
                    <input type="text" className='w-[340px] h-[60px] rounded-[10px] bg-[#F4F7FB]  border-[1px] border-solid border-[#DDE1E6] pl-[20px]' placeholder='Email' />

                  </div>
                  <div className='flex justify-center  gap-[20px] mt-[20px]'>
                    <img src={check} className='w-[16px] h-[16px]' alt="" />
                    <div className='w-[700px] max-sm:w-[320px]'>
                      <p className='text-[grey]'>Подтверждаю своё согласие на обработку и хранение моих персональных данных в соответствии с пользовательским соглашением</p>
                    </div>

                  </div>
                  <button className='w-[700px] h-[60px] rounded-[10px] bg-[#FFED32] text-[#203686] mt-[10px] max-sm:w-[340px]'>Отправить</button>
                </div>
              </div>
            </div>
            <div className='w-[400px]'>
              <h1 className='text-[25px] text-[#203686]'>Кому пригодится</h1>
              <p className='text-[grey] '>Предоставляем отсрочку платежа юридическим лицам и индивидуальным предпринимателям с первого заказа на сайте</p>
              <h1 className='text-[25px] text-[#203686] mt-[40px]'>Условия отсрочки</h1>
              <p className='text-[grey] '>Предоставляем отсрочку платежа юридическим лицам и индивидуальным предпринимателям с первого заказа на сайте</p>
              <h1 className='text-[25px] text-[#203686] mt-[40px]'>Условия отсрочки</h1>
              <p className='text-[grey] '>Предоставляем отсрочку платежа юридическим лицам и индивидуальным предпринимателям с первого заказа на сайте</p>
              <h1 className='text-[25px] text-[#203686] mt-[40px]'>Процесс заказа и подписания </h1>
              <p className='text-[grey] '>Предоставляем отсрочку платежа юридическим лицам и индивидуальным предпринимателям с первого заказа на сайте</p>

            </div>

          </div>
        </div>
      </div>
      <Card />
      <div className='flex justify-center gap-[300px] mt-[100px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
          <p className='text-[grey] mt-[20px]'>Реквизиты</p>
          <h1 className='text-[#203686] text-[40px]'>Наши реквизиты</h1>
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
      <Card2/>

    </>
  )
}

export default Payment