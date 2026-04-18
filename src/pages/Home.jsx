import React from 'react'
import watsap from '../assets/WhatsApp.png'
import tell from '../assets/Frame 6880.svg'
import mohi from '../assets/100029691856b0 1.svg'
import car from '../assets/car@2x 2.svg'
import product from '../assets/Rectangle 65.png'
import product2 from '../assets/Rectangle 65.svg'
import product3 from '../assets/Rectangle 65 (1).svg'
import product4 from '../assets/Rectangle 65 (2).svg'
import product5 from '../assets/Rectangle 65 (3).svg'
import product6 from '../assets/Rectangle 65 (4).svg'
import product7 from '../assets/Rectangle 65 (5).svg'
import product8 from '../assets/Rectangle 65 (6).svg'
import product9 from '../assets/Rectangle 65 (7).svg'
import product10 from '../assets/Rectangle 65 (8).svg'
import product11 from '../assets/Rectangle 65 (9).svg'
import product12 from '../assets/Rectangle 65 (10).svg'
import seafood from '../assets/product.svg'
import seafood2 from '../assets/product2.svg'
import seafood3 from '../assets/product3 (1).svg'
import seafood4 from '../assets/product3 (2).svg'
import car2 from '../assets/Rectangle 34624467.svg'
import users from '../assets/Ellipse 200.png'
import users2 from '../assets/Ellipse 200 (1).png'
import users3 from '../assets/Ellipse 200 (2).png'
import users4 from '../assets/Ellipse 200 (3).png'
import users5 from '../assets/Ellipse 200 (4).png'
import users6 from '../assets/Ellipse 200.svg'
import users7 from '../assets/Ellipse 200 (1).svg'
import Card from '../components/Card'
import strelka from '../assets/Frame 1321317041.png'
import men from '../assets/Специальные предложение для новых клиентов.png'
import Videos from '../components/Videos'
import content from '../assets/Content.svg'
import imagee from '../assets/Image.svg'
import imggg from '../assets/Content (1).svg'
import Card2 from '../components/Card2'
import Map from '../components/Map'
import Swiperr from '../components/Swiper'















const Home = () => {
    return (
        <>
           <Swiperr/>
            <div className='mt-[50px] flex justify-center gap-[20px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
                <div className='w-[400px] h-[254px]  rounded-[25px] shadow-[0px_0px_10px_lightgrey]'>
                    <h1 className='w-[360px] pt-[20px] ml-[20px] text-[30px]'>Чат-бот цен на все наши продукты питания</h1>
                    <div className='flex justify-center gap-[40px] mt-[5px]'>

                        <div className='w-[210px]'>
                            <h1 className='text-[15px]'>Узнайте наши цены за пару секунд без писем и звонков менеджеру</h1>
                            <div className='w-[140px] h-[38px] rounded-[15px] bg-[#4ADD47]'>
                                <div className='flex justify-center gap-[10px] mt-[10px]'>
                                    <img src={watsap} className='w-[24px] h-[24px] mt-[5px]' alt="" />
                                    <h1 className='text-[20px] text-[white]'>WhatsApp</h1>
                                </div>
                            </div>
                        </div>

                        <img src={tell} alt="" />
                    </div>

                </div>
                <div className='w-[400px] h-[254px]  rounded-[25px] shadow-[0px_0px_10px_lightgrey]'>
                    <h1 className='w-[360px] pt-[20px] ml-[20px] text-[30px]'>Лосось охлажденный</h1>
                    <div className='flex justify-center gap-[20px] mt-[5px]'>

                        <div className='w-[160px]'>
                            <h1 className='text-[15px]'>Акционная цена</h1>
                            <h1 className='text-[20px]'> 1700 ₽ / кг</h1>
                            <div className='w-[140px] h-[28px] rounded-[15px] bg-[#FFED32] mt-[70px]'>
                                <div className='flex justify-center gap-[10px] mt-[10px]'>

                                    <h1>до 31.12.2023 г.</h1>
                                </div>
                            </div>
                        </div>

                        <img src={mohi} alt="" />
                    </div>
                </div>
                <div className='w-[400px] h-[254px]  rounded-[25px] shadow-[0px_0px_10px_lightgrey]'>
                    <h1 className='w-[360px] pt-[20px] ml-[20px] text-[30px]'>Доставка в день заказа</h1>
                    <h1 className='text-[15px] ml-[20px]'>Закажите до 11.00</h1>
                    <img src={car} className='ml-[50px] mt-[20px]' alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-[100px] gap-[400px] max-sm:gap-[30px]  max-sm:flex-col max-sm:items-center'>
                <p className='text-[grey]'>Наш ассортимент</p>
                <div className='w-[700px] max-sm:hidden'>
                    <h1 className='text-[40px] text-[#203686]'>Компания предлагает более 500 наименований рыбной продукции и разнообразных товаров питания</h1>
                </div>
                <div className='hidden max-sm:block max-sm:w-[350px]'>
                    <h1 className='text-[#203686] text-[30px]'>Полный ассортимент продуктов для общепита</h1>
                </div>
            </div>
            <div className='flex justify-center gap-[20px] mt-[60px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
                <div>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Свежемороженая рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Собственного производства и со всего мира</p>
                    </div>

                </div>
                <div className='max-sm:hidden'>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product2} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Охлажденная рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Со всего мира</p>
                    </div>

                </div>
                <div className='max-sm:hidden'>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product3} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Замороженное мясо, птица</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Со всего мира</p>
                    </div>

                </div>
                <div className='max-sm:hidden'>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product4} alt="" />
                    <div className='w-[250px] mt-[5px]'>
                        <h1 className='text-[22px] mt-[5px]'>Готовая продукция «Экор»</h1>
                        <p>Собственного производства </p>
                    </div>

                </div>
            </div>
            <div className='mt-[80px] flex justify-center gap-[30px] text-[#203686] max-sm:hidden'>
                <div>
                    <img src={product5} alt="" />
                    <h1 className='text-[20px] mt-[10px]'>Креветки и морепродукты</h1>
                    <p className='mt-[5px]'>Со всего мира</p>
                </div>
                <div>
                    <img src={product6} alt="" />
                    <h1 className='text-[20px] mt-[10px]'>Рыбное филе</h1>
                    <p className='mt-[5px]'>Собственного производства и со всего мира</p>
                </div>
            </div>
            <div className='mt-[80px] flex justify-center gap-[30px] text-[#203686] max-sm:hidden'>
                <div>
                    <img src={product7} alt="" />
                    <h1 className='text-[20px] mt-[10px]'>Фасованная рыба</h1>
                    <p className='mt-[5px]'>Собственного производства</p>
                </div>
                <div>
                    <img src={product8} alt="" />
                    <h1 className='text-[20px] mt-[10px]'>Замороженные овощи и фрукты</h1>
                    <p className='mt-[5px]'>Со всего мира</p>
                </div>
            </div>
            <div className='flex justify-center gap-[20px] mt-[80px] max-sm:hidden'>
                <div>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product9} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Свежемороженая рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Собственного производства и со всего мира</p>
                    </div>

                </div>
                <div>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product10} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Свежемороженая рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Собственного производства и со всего мира</p>
                    </div>

                </div>
                <div>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product11} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Свежемороженая рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Собственного производства и со всего мира</p>
                    </div>

                </div>
                <div>
                    <img className='shadow-[0px_0px_10px_lightgrey] rounded-[10px]' src={product12} alt="" />
                    <h1 className='text-[22px] mt-[5px]'>Свежемороженая рыба</h1>
                    <div className='w-[250px] mt-[5px]'>
                        <p>Собственного производства и со всего мира</p>
                    </div>

                </div>
            </div>
            <div className='w-[100%] mt-[100px] h-[1000px] bg-[url(./assets/mohiho.svg)] bg-no-repeat bg-cover bg-center max-sm:h-[1500px]'>
                <div className='flex justify-center pt-[100px] text-center '>
                    <div className='w-[80%]'>
                        <h1 className='text-[white] text-[50px] max-sm:text-[30px] '>Получите индивидуальное коммерческое предложение для вашего бизнеса</h1>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <div className='w-[80%] h-[550px]  rounded-[20px] bg-[#F4F7FB] mt-[50px]  max-sm:h-[1000px] max-sm:w-[100%]'>
                        <div className='flex justify-center gap-[40px] pt-[100px]  max-sm:flex-col max-sm:items-center '>
                            <div className='ml-[100px] max-sm:ml-[0px]'>
                                <div className='flex gap-[20px]'>
                                    <button className='w-[50px] h-[50px] rounded-[50%] border-[1px] border-solid border-[#DDE1E6]  hover:bg-[#203686] hover:text-[#F4F7FB]'>1</button>
                                    <select className='w-[450px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] mt-[10px]' >
                                        <option value="Оптовик">Оптовик</option>
                                    </select>
                                </div>
                                <div className='flex gap-[20px] mt-[40px]'>
                                    <button className='w-[50px] h-[50px] rounded-[50%] border-[1px] border-solid border-[#DDE1E6]  hover:bg-[#203686] hover:text-[#F4F7FB]'>2</button>
                                    <select className='w-[450px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] mt-[10px]' >
                                        <option value="Оптовик">Доставка по МСК или МО</option>
                                    </select>
                                </div>
                                <div className='flex gap-[20px] mt-[40px]'>
                                    <button className='w-[50px] h-[50px] rounded-[50%] border-[1px] border-solid border-[#DDE1E6]  hover:bg-[#203686] hover:text-[#F4F7FB]'>3</button>
                                    <select className='w-[450px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] mt-[10px]' >
                                        <option value="Оптовик">от 10 000 ₽ до 25 000 ₽ </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[25px] text-[#203686]'>Контактные данные</h1>
                                <input type="text" className='w-[470px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] pl-[20px] mt-[15px]' placeholder='Имя и Фамилия' />
                                <input type="text" className='w-[470px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] pl-[20px] mt-[15px]' placeholder='Email' />
                                <input type="text" className='w-[470px] h-[60px] rounded-[10px] bg-[white] border-[1px] border-solid border-[#DDE1E6] outline-none text-[#70798E] pl-[20px] mt-[15px]' placeholder='Номер телефона' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
            <div className='flex justify-center gap-[400px] mt-[130px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                <p className='text-[grey]'>Доставка</p>
                <div className=''>
                    <h1 className='text-[40px] text-[#203686] max-sm:ml-[30px]'>Эффективная доставка</h1>
                    <div className='flex gap-[30px] mt-[30px]  max-sm:flex-col max-sm:items-center' >
                        <div className='w-[400px]'>
                            <p className='text-[#203686]'>Наша служба доставки предлагает гибкие условия. Мы гарантируем быструю доставку в Москве и области на следующий день после оформления заказа. </p>
                        </div>
                        <div className='w-[400px] '>
                            <p className='text-[#203686]'>Технология GPS обеспечивает точный мониторинг вашего заказа, позволяя вам всегда быть в курсе его местоположения на карте.</p>

                        </div>
                    </div>
                    <div className='flex gap-[100px] mt-[50px]  max-sm:flex-col max-sm:items-center max-sm:gap-[20px]'>
                        <div className='w-[200px] text-[#203686]'>
                            <h1 className='text-[22px]'>Доставка от 50 кг по Мосвке и области</h1>
                        </div>
                        <div className='w-[200px] text-[#203686]'>
                            <h1 className='text-[22px]'>Доставляем на следующий день после заказа</h1>
                        </div>
                        <div className='w-[200px] text-[#203686]'>
                            <h1 className='text-[22px]'>GPS мониторинг ваших заказов</h1>
                        </div>
                    </div>
                    <img src={car2} className='mt-[100px]' alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[80%] h-[550px] mt-[100px] rounded-[20px] shadow-[0px_0px_10px_lightgrey]  text-[#203686] max-sm:h-[650px] max-sm:w-[100%]'>
                    <div className='flex justify-center gap-[30px] pt-[40px]  max-sm:flex-col max-sm:items-center'>
                        <div className='w-[480px]'>
                            <h1 className='text-[43px]'>Выберите себе менеджера</h1>
                            <p className='mt-[10px]'>В нашем отделе продаж трудится более 20 высококвалифицированных сотрудников! Найдите своего персонального менеджера, который поможет вам сделать правильный выбор.</p>
                            <button className='w-[220px] h-[45px] rounded-[10px] bg-[#FFED32] mt-[150px] max-sm:mt-[30px] max-sm:hidden'>Заказать звонок</button>
                        </div>
                        <div>
                            <div className='flex gap-[30px]  max-sm:flex-col max-sm:items-center'>
                                <div className='max-sm:hidden'>
                                    <div className='w-[128px] h-[128px] rounded-[50%] border-[3px] border-solid border-[#FFED32] ' >
                                    </div>
                                    <h1 className='mt-[20px] text-[20px] text-center'>Инна</h1>
                                </div>
                                <div>
                                    <img src={users} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Елена</h1>
                                </div>
                                <div className='max-sm:hidden'>
                                    <img src={users2} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Ирина</h1>
                                </div>
                                <div className='max-sm:hidden'>
                                    <img src={users3} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Александр</h1>
                                </div>
                                <button className='hidden max-sm:block  max-sm:w-[220px]  max-sm:h-[45px]  max-sm:rounded-[10px] max-sm:bg-[#FFED32]   max-sm:mt-[30px]'>Заказать звонок</button>

                            </div>
                            <div className='flex gap-[30px] mt-[60px] max-sm:hidden'>
                                <div>
                                    <img src={users4} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Валерий</h1>
                                </div>
                                <div>
                                    <img src={users5} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Александр</h1>
                                </div>
                                <div>
                                    <img src={users6} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Ольга</h1>
                                </div>
                                <div>
                                    <img src={users7} alt="" />
                                    <h1 className='mt-[20px] text-[20px] text-center'>Мария</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-[400px] mt-[100px]   max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                <p>Преимущества</p>
                <div className='w-[650px] max-sm:w-[400px]'>
                    <h1 className='text-[50px] text-[#203686] max-sm:text-[25px] max-sm:ml-[20px] '>Специальные предложения для новых клиентов</h1>
                </div>
            </div>
            <div className='w-[80%] m-auto mt-[50px]  border-0.5 border-solid border-[grey] '>
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

            <div className='flex justify-center gap-[600px] mt-[200px]  max-sm:flex-col max-sm:items-center  max-sm:gap-[30px]'>
                <p>Самое главное</p>
                <div className='w-[650px] max-sm:w-[400px]'>
                    <h1 className='text-[50px] text-[#203686]   max-sm:text-[30px]'>Наш опыт и репутация — это самое главное</h1>
                </div>
            </div>

            <div className='flex justify-center gap-[30px] mt-[50px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
                <div className='w-[660px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[470px]'>
                    <p className='text-[grey] m-[20px]'>01</p>
                    <div className='w-[300px] ml-[20px]'>
                        <h1 className='text-[25px] '>Личный кабинет для заказов</h1>
                    </div>
                    <div className='w-[400px] m-[60px_20px]'>
                        <p>Удобный личный кабинет для управления и размещения ваших заказов</p>
                    </div>
                </div>
                <div className='flex gap-[30px]  '>
                    <div className='w-[315px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[220px]'>
                        <p className='text-[grey] m-[20px]'>02</p>
                        <h1 className='text-[25px] text-[#203686] ml-[20px]'> 2000 м2 </h1>
                        <p className='mt-[130px] ml-[20px]'>Морозильных складов</p>
                    </div>
                    <div className='w-[315px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[220px]'>
                        <p className='text-[grey] m-[20px]'>03</p>
                        <h1 className='text-[25px] text-[#203686] ml-[20px]'>25 лет работы</h1>
                        <p className='mt-[130px] ml-[20px]'>Производство с 1998 г.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-[30px] mt-[30px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
                <div className='w-[660px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[470px]'>
                    <p className='text-[grey] m-[20px]'>01</p>
                    <div className='w-[300px] ml-[20px]'>
                        <h1 className='text-[25px] '>Личный кабинет для заказов</h1>
                    </div>
                    <div className='w-[400px] m-[60px_20px]'>
                        <p>Удобный личный кабинет для управления и размещения ваших заказов</p>
                    </div>
                </div>
                <div className='w-[660px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[470px]'>
                    <p className='text-[grey] m-[20px]'>01</p>
                    <div className='w-[300px] ml-[20px]'>
                        <h1 className='text-[25px] '>Личный кабинет для заказов</h1>
                    </div>
                    <div className='w-[400px] m-[60px_20px]'>
                        <p>Удобный личный кабинет для управления и размещения ваших заказов</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center  gap-[30px] mt-[30px] text-[#203686]  max-sm:flex-col max-sm:items-center'>

                <div className='flex gap-[30px] '>
                    <div className='w-[315px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[220px]'>
                        <p className='text-[grey] m-[20px]'>02</p>
                        <h1 className='text-[25px] text-[#203686] ml-[20px]'> 2000 м2 </h1>
                        <p className='mt-[130px] ml-[20px]'>Морозильных складов</p>
                    </div>
                    <div className='w-[315px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px]  max-sm:w-[220px]'>
                        <p className='text-[grey] m-[20px]'>03</p>
                        <h1 className='text-[25px] text-[#203686] ml-[20px]'>25 лет работы</h1>
                        <p className='mt-[130px] ml-[20px]'>Производство с 1998 г.</p>
                    </div>
                </div>
                <div className='w-[660px] h-[300px] shadow-[0px_0px_10px_lightgrey] bg-[white] rounded-[20px] max-sm:w-[470px]'>
                    <p className='text-[grey] m-[20px]'>01</p>
                    <div className='w-[300px] ml-[20px]'>
                        <h1 className='text-[25px] '>Личный кабинет для заказов</h1>
                    </div>
                    <div className='w-[400px] m-[60px_20px]'>
                        <p>Удобный личный кабинет для управления и размещения ваших заказов</p>
                    </div>
                </div>

            </div>
            <Card />
            <div className='flex justify-center gap-[300px] mt-[100px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                <p className='text-[grey] '>О компании</p>
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
            <div className='flex justify-center gap-[30px] mt-[100px]  max-sm:flex-col max-sm:items-center text-[#203686]'>
                <div className='flex gap-[30px] max-sm:gap-[10px] '>
                    <div className='w-[350px] h-[200px] rounded-[15px] shadow-[0px_0px_10px_lightgrey] max-sm:w-[250px] max-sm:ml-[60px]'>
                        <h1 className='text-[50px] ml-[20px]'>25 лет</h1>
                        <p className='mt-[80px] ml-[20px] text-[grey]'>опыта работы</p>
                    </div>
                    <div className='w-[350px] h-[200px] rounded-[15px] shadow-[0px_0px_10px_lightgrey] max-sm:w-[250px] '>
                        <h1 className='text-[50px] ml-[20px]'> 40 </h1>
                        <p className='mt-[80px] ml-[20px] text-[grey]'>автомобилей для доставки</p>
                    </div>
                </div>
                <div className='flex gap-[30px]'>
                    <div className='w-[350px] h-[200px] rounded-[15px] shadow-[0px_0px_10px_lightgrey]  max-sm:w-[250px] max-sm:ml-[60px]'>
                        <h1 className='text-[50px] ml-[20px]'>100 лет</h1>
                        <p className='mt-[80px] ml-[20px] text-[grey]'>сотрудников</p>
                    </div>
                    <div className='w-[350px] h-[200px] rounded-[15px] shadow-[0px_0px_10px_lightgrey]   max-sm:w-[250px] '>
                        <h1 className='text-[50px] ml-[20px]'> 3000</h1>
                        <p className='mt-[80px] ml-[20px] text-[grey]'>постоянных клиентов</p>
                    </div>
                </div>
            </div>
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
            <div className='mt-[100px] flex justify-center gap-[200px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                <p>Отзывы</p>
                <div className='text-[#203686] mr-[200px] max-sm:mr-[0px]'>
                    <h1 className='text-[40px]'>Отзывы наших покупателей</h1>

                    <div className='w-[400px] mt-[20px]'>
                        <p>Прочитайте реальные отзывы прямо на сайте или оставьте его на Яндекс.Картах </p>
                    </div>

                </div>
            </div>
            <div className='flex justify-center mt-[50px]'>
                <div className='w-[900px] h-[350px] rounded-[20px] shadow-[0px_0px_10px_lightgrey] ml-[440px] max-sm:ml-[0px] max-sm:h-[650px]'>
                    <div className='flex justify-center gap-[50px] mt-[30px] text-[#203686]  max-sm:flex-col max-sm:items-center'>
                        <div >
                            <h1 className='text-[30px]'>Экор</h1>
                            <div className='flex gap-[20px]'>
                                <h1 className='text-[60px]'>4,7</h1>
                                <div className='mt-[30px]'>
                                    <img src={content} alt="" />
                                    <p>77 отзывов / 169 оценок</p>
                                </div>
                            </div>
                            <button className='w-[250px] h-[45px] rounded-[10px] bg-[#FFED32] text-[Оставить отзыв]'>Оставить отзыв</button>
                        </div>
                        <div>
                            <p className='text-[grey] text-[20px]'>Яндекс.Карты</p>
                            <div className='flex gap-[10px]'>
                                <img src={imagee} alt="" />
                                <div>
                                    <h1 className='text-[20px]'>Artem Chugarov</h1>
                                    <p className='text-[grey] mt-[5px]'>17 июля</p>
                                </div>
                            </div>
                            <img src={imggg} className='mt-[20px]' alt="" />
                            <div className='w-[480px]'>
                                <p className='text-[18px]'>Продукция, поставляемая компанией ЭКОР, всегда соответствует высоким стандартам качества. Свежесть, вкус и безопасность — основные критерии при выборе продуктов для нашего меню, и компания ЭКОР полностью соответствует этим требованиям…</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card2 />
            <Map />
        </>
    )
}



export default Home







