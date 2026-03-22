import { Button, Modal } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import info from '../assets/info.svg'


let api = "http://37.27.29.18:8001/api/categories"

const SawaggerCategories = () => {

    let [users, setUsers] = useState([])


    let [addModal, setAddModal] = useState(false)
    let [editModal, setEditModal] = useState(false)


    let [infoModal, setInfoModal] = useState(false)
    let [infoUser, setInfoUser] = useState("")

    let [inpName, setInpName] = useState("")

    let [inpNameEdit, setInpNameEdit] = useState("")

    let [idx, setIdx] = useState(null)



    const showModal = () => {
        setAddModal(true);
    };

    const handleCancel = () => {
        setAddModal(false);
    };


    const showModalEdit = () => {
        setEditModal(true);
    };

    const handleCancelEdit = () => {
        setEditModal(false);
    };

    const showModalInfo = () => {
        setInfoModal(true);
    };

    const handleCancelInfo = () => {
        setInfoModal(false);
    };



    async function addUser() {
        try {
            await axios.post(api, { name: inpName })
            get()
            handleCancel()
        } catch (error) {
            console.error(error);

        }
    }


    async function editUser() {
        try {
            await axios.put(api, { id: idx, name: inpNameEdit, })
            get()
            handleCancelEdit()
        } catch (error) {
            console.error(error);
        }
    }


    async function get() {
        try {
            let { data } = await axios.get(api)
            setUsers(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    async function deletUser(id) {
        try {
            await axios.delete(`${api}?id=${id}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }

    async function getInfo(id) {
        try {
            let { data } = await axios.get(`${api}/${id}`)
            setInfoUser(data.data)
             showModalInfo()
        } catch (error) {
            console.error(error);

        }
    }



    useEffect(() => {
        get()
    }, [])


    return (
        <>
            <Button type="primary" className='m-[70px]' onClick={showModal}>
                ADD USER +
            </Button>
            <div>
                {
                    users.map((user) => {
                        return <div className='w-[300px] h-[80px] text-center'>
                            <h1 className='text-[18px] mt-[30px]'>{user.name}</h1>
                            <div className='flex justify-center gap-[50px] mt-[10px]'>
                                <Button color="danger" variant="outlined" onClick={() => deletUser(user.id)}>
                                    delete
                                </Button>
                                <img src={info}  onClick={() => getInfo(user.id)} alt="" />
                                <Button color="primary" onClick={() => {
                                    showModalEdit()
                                    setInpNameEdit(user.name)
                                    setIdx(user.id)
                                }} variant="solid">
                                    Edit
                                </Button>
                            </div>
                        </div>
                    })
                }
            </div>




            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={addModal}
                onCancel={handleCancel}
                footer={null}
            >
                <input type="text" value={inpName} onChange={(e) => setInpName(e.target.value)} className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='name' placeholder='Name...' />
                <button type='submit' className='w-[100px] h-[40px] rounded-[10px] bg-blue-500 text-[white] m-[10px]' onClick={addUser}>Save</button>

            </Modal>

            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={editModal}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <input type="text" value={inpNameEdit} onChange={(e) => setInpNameEdit(e.target.value)} className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='name' placeholder='Name...' />
                <button type='submit' className='w-[100px] h-[40px] rounded-[10px] bg-blue-500 text-[white] m-[10px]' onClick={editUser}>Save</button>

            </Modal>


            <Modal className='text-center'
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={infoModal}
                onCancel={handleCancelInfo}
                footer={null}
            >
                <h1 className='text-[20px]'>{infoUser?.name}</h1>



            </Modal>

        </>
    )
}

export default SawaggerCategories