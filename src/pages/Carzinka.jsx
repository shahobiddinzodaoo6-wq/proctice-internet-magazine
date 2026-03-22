import React from 'react'
import karzin from '../assets/Group 1321316967.png'
import { useReducer } from "react"



function reducer(state, action) {
    if (action.type == "increment") {
        return { count: state.count + 1 }
    }

    if (action.type == "decrement") {
        return { count: state.count - 1 }
    }

    return state
}

const Carzinka = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })



    return (
        <div>



            <div>
                <h1 className='ml-[80px] text-[40px] m-[10px]'>{state.count}</h1>

                <button className='w-[90px] h-[30px] bg-blue-600 text-[white] rounded-[7px] ' onClick={() => dispatch({ type: "increment" })}>
                    +
                </button>

                <button className='w-[90px] h-[30px] bg-blue-600 text-[white] rounded-[7px] ' onClick={() => dispatch({ type: "decrement" })}>
                    -
                </button>
            </div>
            {/* <div className='flex justify-center mt-[200px] mb-[300px] text-center'>
                <div>
                    <img src={karzin} className='ml-[110px]' alt="" />
                    <h1 className='text-[40px]'>Пустая корзина</h1>
                    <p>Пустая корзина <br />
                        В вашей корзине пока нет товаров <br />
                        Легко добавляйте в корзину понравившиеся <br /> товары, кликнув по кнопке «В корзину»</p>
                    <button className='w-[250px] h-[50px] rounded-[10px] bg-[#FFED32] text-[#203686] mt-[30px] '>Перейти к покупкам</button>
                </div>
            </div> */}


        </div>
    )
}

export default Carzinka