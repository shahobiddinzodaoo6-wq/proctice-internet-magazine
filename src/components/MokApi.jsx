import { Button, Modal } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


let api = "https://6941690a686bc3ca8166e0b0.mockapi.io/users"

const MokApi = () => {
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
            <div className='fles justify-center mt-[100px]'>
                <Button type="primary" className='ml-[50px]' onClick={showModal}>
                    Open Modal
                </Button>
                <div className='grid grid-cols-[330px_330px_330px_330px] grid-rows-[200px_200px] gap-[30px] ml-[50px] max-sm:grid-cols-[330px] mt-[30px] max-sm:grid-rows-[200px_200px_200px_200px_200px_200px_200px_200px] max-sm:ml-[100px] '>
                    {
                        users.map((user) => {
                            return <div className='shadow-[0px_0px_10px_lightgrey] rounded-[20px]'>
                                <div className='flex justify-around pt-[30px]'>
                                    <img src={user.avatar} className='w-[60px] h-[60px] rounded-[50%] ' alt="" srcset="" />
                                    <div>
                                        <h1 className='text-[20px] '>{user.name}</h1>
                                        {user.status && (
                                            <p className='text-[green] mt-[10px]'>Active</p>
                                        )
                                        }
                                        {!user.status && (
                                            <p className='text-[red] mt-[10px]'>Inactive</p>
                                        )
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-[30px]'>
                                    <p className='ml-[50px] mt-[30px]'>{user.age}</p>
                                    <div className='flex gap-[20px] mt-[30px]'>
                                        <button className='w-[80px] h-[30px] rounded-[10px] bg-[brown] text-[white] ' onClick={() => deletUser(user.id)}>delet</button>
                                        <button className='w-[80px] h-[30px] rounded-[10px] bg-blue-500 text-[white] ' onClick={() => {
                                            showModalEdit()
                                            setInpAgeEdit(user.age)
                                            setInpNameEdit(user.name)
                                            setInpAvatarEdit(user.avatar)
                                            setSelstatusEdit(user.status ? "Active" : 'Active')
                                            setIdx(user.id)
                                        }}>edit</button>
                                    </div>
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

export default MokApi