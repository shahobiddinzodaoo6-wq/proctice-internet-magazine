import axios from 'axios'
import React, { useEffect, useState } from 'react'
import edit from '../assets/edit.svg'
import delet from '../assets/delete.svg'
import { Button, Modal } from 'antd'


let api = "http://localhost:3000/users"


const DbjsonLogiks = () => {
    let [users, setUsers] = useState([])



    let [addModal, setAddModal] = useState(false)
    let [inpName, setInpName] = useState("")
    let [inpAvatar, setInpAvatar] = useState("")
    let [inpAge, setInpAge] = useState("")
    let [selStatus, setSelstatus] = useState("Active")




    let [EditModal, setEditmodal] = useState(false)
    let [inpNameEdit, setInpNameEdit] = useState("")
    let [inpAvatarEdit, setInpAvatarEdit] = useState("")
    let [inpAgeEdit, setInpAgeEdit] = useState("")
    let [selStatusEdit, setSelstatusEdit] = useState("Active")
    let [idx, setIdx] = useState(null)




    

    const showModal = () => {
        setAddModal(true);
    };

    const handleCancel = () => {
        setAddModal(false);
    };


    const showModalEdit = () => {
        setEditmodal(true);
    };

    const handleCancelEdit = () => {
        setEditmodal(false);
    };




    async function addUser() {
        let newUser = {
            name: inpName,
            avatar: inpAvatar,
            age: inpAge,
            status: selStatus == "Active"
        }
        try {
            await axios.post(api, newUser)
            get()
            handleCancel()
            setInpName("")
            setInpAvatar("")
            setInpAge("")

        } catch (error) {
            console.error(error);

        }
    }




    async function editUser() {
        let editUser = {
            id: idx,
            name: inpNameEdit,
            age: inpAgeEdit,
            avatar: inpAvatarEdit,
            status: selStatusEdit == "Active"
        }
        try {
            await axios.put(`${api}/${idx}`, editUser)
            get()
            handleCancelEdit()
        } catch (error) {
            console.error(error);

        }
    }




    async function get() {
        try {
            let { data } = await axios.get(api)
            setUsers(data)
        } catch (error) {
            console.error(error);
        }
    }


    async function deletUser(id) {
        try {
            await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.error(error);

        }
    }


    useEffect(() => {
        get()
    }, [])
    return (
        <>
            <div className='flex justify-center mt-[60px]'>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <div className='grid grid-cols-[330px_330px_330px] h-[230px_230px] gap-[30px] max-sm:grid-cols-[330px] mt-[30px] max-sm:grid-rows-[230px_230px_230px_230px_230px_230px]'>
                    {
                        users.map((user) => {
                            return <div className=''>
                                <img src={user.avatar} className='w-[330px]' alt="" />
                                <h1>{user.name}</h1>
                                <div className='flex gap-[30px]'>
                                    {user.status && (
                                        <p className='text-[green]'>Avtive</p>
                                    )
                                    }
                                    {!user.status && (
                                        <p className='text-[red]'>Inavtive</p>
                                    )
                                    }
                                    <p className='text-[grey] '> {user.age}</p>
                                    <img src={edit} onClick={() => {
                                        showModalEdit()
                                        setInpAgeEdit(user.age)
                                        setInpNameEdit(user.name)
                                        setInpAvatarEdit(user.avatar)
                                        setSelstatusEdit(user.status ? "Active" : 'Active')
                                        setIdx(user.id)
                                    }} className='ml-[50px]' alt="" />
                                    <img src={delet} onClick={() => deletUser(user.id)} alt="" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>




            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={addModal}
                onCancel={handleCancel}
                footer={null}
            >
                <input type="text" value={inpName} onChange={(e) => setInpName(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Name...' />
                <input type="text" value={inpAvatar} onChange={(e) => setInpAvatar(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Avatar...' />
                <input type="text" value={inpAge} onChange={(e) => setInpAge(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Age...' />
                <select value={selStatus} onChange={(e) => setSelstatus(e.target.value)} className='m-[10px] outline-none' name="" id="">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select><br />
                <Button type="primary" onClick={addUser} className='mt-[20px]' >Save</Button>
            </Modal>






            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={EditModal}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <input type="text" value={inpNameEdit} onChange={(e) => setInpNameEdit(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Name...' />
                <input type="text" value={inpAvatarEdit} onChange={(e) => setInpAvatarEdit(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Avatar...' />
                <input type="text" value={inpAgeEdit} onChange={(e) => setInpAgeEdit(e.target.value)} className='w-[300px] h-[43px] border m-[10px] pl-[20px] rounded-2xl' placeholder='Age...' />
                <select value={selStatusEdit} onChange={(e) => setSelstatusEdit(e.target.value)} className='m-[10px] outline-none' name="" id="">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select><br />
                <Button type="primary" onClick={editUser} className='mt-[20px]' >Save</Button>
            </Modal>

        </>
    )
}

export default DbjsonLogiks