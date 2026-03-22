import React from 'react'
import { Link, Outlet } from 'react-router'
import logo from '../assets/logo.png'
import sotset from '../assets/Frame 1321317047.png'
import tochka from '../assets/menu-dots.png'
import search from '../assets/Icon.png'
import izb from '../assets/Frame 1618868303.png'
import karzina from '../assets/Frame 1618868304.png'
import logo2 from '../assets/logo (8).png'
import sotset2 from '../assets/sotset.png'
import user from '../assets/user.png'
import like from '../assets/like.png'
import korzin from '../assets/korzina.png'
import menu from '../assets/Burger.png'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { ModeToggle } from '@/components/ui/mode-toggle'
// import { ModeToggle } from '@/components/ui/mode-toggle'







const Layout = () => {
    let { t, i18n } = useTranslation()

    function changeLange(lang) {
        i18n.changeLanguage(lang)
    }
    return (
        <div>
            <header>
                <div className='flex justify-center gap-[90px] mt-[30px] max-sm:gap-[80px]'>
                    <div className='flex gap-[0px]'>
                        <Link to={"/"}>
                            <div className='flex gap-[20px]'>
                                <img className='w-[110px] h-[28px] mt-[10px]' src={logo} alt="" />
                                <div className='w-[200px]'>
                                    <h1 className='text-[grey] max-sm:hidden'>{t("headers.ПоставщикпродуктовдляHoReCa")}</h1>
                                </div>
                            </div>
                        </Link>
                        <div className='hidden max-sm:block max-sm:flex max-sm:gap-[15px] '>
                            <img src={user} className='w-[30px] h-[30px]' alt="" />
                            <img src={like} className='w-[30px] h-[30px]' alt="" />
                            <img src={korzin} className='w-[30px] h-[30px]' alt="" />
                            <img src={menu} className='w-[30px] h-[30px]' alt="" />

                        </div>
                        <div className='flex  gap-[20px] mt-[10px] text-[#203686] max-sm:hidden'>

                            <Link to={"/Dostavka"}>
                                <h1>{t("headers.Доставка")}</h1>
                            </Link>
                            <Link to={"/Postavshikam"}>
                                <h1>{t("headers.Поставщикам")}</h1>
                            </Link>
                            <Link to={"/Proizvodsvo"}>
                                <h1>{t("headers.Производство")}</h1>
                            </Link>
                            <Link to={"/Payment"}>
                                <h1>{t("headers.Оплата")}</h1>
                            </Link>
                            <Link to={"/Contact"}>
                                <h1>{t("headers.Контакты")}</h1>
                            </Link>
                            <Link to={"/AboutCompony"}>
                                <h1>{t("headers.Окомпании")} </h1>
                            </Link>
                        </div>

                    </div>
                    <div className='flex gap-[20px] max-sm:hidden'>
                        <img className='w-[60px] h-[26px] mt-[15px]' src={sotset} alt="" />
                        <div>
                            <h1 className='text-[20px] text-[#203686]'>8 (495) 637-82-28</h1>
                            <div className='flex gap-[20px]'>
                                <p className='mt-[5px] text-[grey] '>{t("headers.Заказатьзвонок")}</p>
                                <div className='flex gap-[20px]'>
                                    <Button onClick={() => changeLange("tj")} type="primary" shape="circle">
                                        tj
                                    </Button>
                                    <Button onClick={() => changeLange("en")} type="primary" shape="circle">
                                        en
                                    </Button>
                                    <Button onClick={() => changeLange("ru")} type="primary" shape="circle">
                                        ru
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[90px] bg-[#203686] mt-[30px] max-sm:hidden'>
                    <div className='flex justify-center gap-[150px] pt-[25px]'>
                        <div className='flex gap-[40px]'>
                            <Link to={"/Catalog"}>
                                <div className='flex gap-[10px] mt-[5px]'>
                                    <img src={tochka} className='w-[28px] h-[28px]' alt="" />
                                    <h1 className='text-[white]'>{t("headers.Каталогтоваров")}</h1>
                                </div>
                            </Link>
                            <div className='w-[360px] h-[43px] rounded-[10px] bg-[white] flex gap-[20px] pl-[20px]'>
                                <img src={search} className='w-[20px] h-[20px] mt-[10px]  ' alt="" />
                                <input type="text" className='outline-none' placeholder='Search...' />
                            </div>
                        </div>
                        <div className='flex gap-[50px] mt-[5px]'>
                            <div className='flex gap-[5px] '>
                                <img src={izb} className='w-[24px] h-[24px] ' alt="" />
                                <h1 className='text-[white]'>{t("headers.Избранное")}</h1>
                            </div>
                            <Link to={"/Carzinka"}>
                                <div className='flex gap-[5px] '>
                                    <img src={karzina} className='w-[24px] h-[24px] ' alt="" />
                                    <h1 className='text-[white]'>10 000,00 ₽</h1>
                                </div>
                            </Link>
                        </div>
                        <div className='flex gap-[10px]'>
                            <h1 className='text-[white] mt-[5px]'>{t("headers.Вход")}</h1>
                            <ModeToggle />
                        </div>

                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='w-[100%] h-[600px] mt-[100px] bg-[#203686] text-[white] max-sm:h-[1500px]'>
                <div className='pt-[100px] flex justify-center gap-[100px] max-sm:flex-col max-sm:items-center'>
                    <div>
                        <div className='flex gap-[20px]'>
                            <img className='w-[130px] h-[34px] mt-[5px]' src={logo2} alt="" />
                            <div className='w-[330px]   max-sm:w-[230px]'>
                                <p className='text-[white]'>{t("headers.Поставкипродуктовпитанияоптомдляресторанов,маркетов,оптовиков")} </p>
                            </div>
                        </div>
                        <p className='mt-[35px]'>{t("headers.Адрес_Значение")}</p>
                        <p className='mt-[30px]'>E-mail: info@ekorfish.ru</p>
                        <h1 className='text-[30px] mt-[30px]'>+7 (495) 637-82-28</h1>
                        <img className='w-[60px] h-[26px] mt-[35px]' src={sotset2} alt="" />
                    </div>

                    <div className='flex gap-[80px]'>
                        <div className='flex gap-[80px]  max-sm:flex-col max-sm:items-center max-sm:gap-[30px]'>
                            <div>
                                <p className='text-[#e1ecfb]'>{t("headers.Покупателям")}</p>
                                <p className='mt-[25px]'>{t("headers.Поставщикам")}</p>
                                <p className='mt-[15px] '>{t("headers.Доставка")}</p>
                                <p className='mt-[15px]'>{t("headers.Чат-бот")}</p>
                                <p className='mt-[15px]'>{t("headers.Производство")}</p>
                                <p className='mt-[15px]'>{t("headers.Контакты")}</p>
                            </div>
                            <div>
                                <p className='text-[#e3edfb]'>{t("headers.Каталог")}</p>
                                <div className='w-[150px] mt-[25px]'>
                                    <p>{t("headers.Свежемороженаярыба")}</p>
                                </div>
                                <div className='w-[150px] mt-[15px]'>
                                    <p>{t("headers.Филерыбы,стейки,фарш")}</p>
                                </div>
                                <p className='mt-[15px]'>{t("headers.Морепродукты")}</p>
                                <p className='mt-[15px]'>{t("headers.ФасованнаярыбаЭкор")}</p>
                                <p className='mt-[15px]'>{t("headers.Полуфабрикаты")}</p>
                            </div>
                        </div>
                        <div>
                            <p className='mt-[50px]'>{t("headers.ГотоваяпродукцияЭкор")}</p>
                            <p className='mt-[25px]'>{t("headers.Мясо,птица")}</p>
                            <div className='w-[150px] mt-[15px]'>
                                <p>{t("headers.Замороженныепродукты")}</p>
                            </div>
                            <p className='mt-[15px]'>{t("headers.Консервы")}</p>
                            <p className='mt-[15px]'>{t("headers.Консервы")}</p>
                            <p className='mt-[15px]'>{t("headers.Картасайта")}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout