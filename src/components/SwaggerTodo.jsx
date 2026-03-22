import { Button, Modal } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import delet from '../assets/delete.svg'
import edit from '../assets/edit.svg'
import info from '../assets/info.svg'
import { Link } from 'react-router';


let api = "http://37.27.29.18:8001/api/to-dos"
let apiImg = "http://37.27.29.18:8001/images"
let checkUrl = "http://37.27.29.18:8001/completed"


const SwaggerTodo = () => {
    let [users, setUsers] = useState([])

    let [addModal, setAddModal] = useState(false)
    let [editModal, setEditModal] = useState(false)


    let [inpName, setInpName] = useState("")
    let [inpDes, setInpDes] = useState("")
    let [idx, setIdx] = useState(null)



    let [imageModal, setImageModal] = useState(false)
    let [idxImg, setIdxImg] = useState(null)

 




    const showModalImg = () => {
        setImageModal(true);
    };

    const handleCancelImg = () => {
        setImageModal(false);
    };





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



    async function checkStatus(checkId) {
        try {
            await axios.put(`${checkUrl}?id=${checkId}`)
            get()
        } catch (error) {
            console.error(error);

        }
    }



    async function get() {
        try {
            let { data } = await axios.get(api)
            setUsers(data.data)
        } catch (error) {
            console.error(console.error()
            );

        }
    }


  


    async function deletImage(idImage) {
        try {
            await axios.delete(`${api}/images/${idImage}`)
            get()
        } catch (error) {
            console.error(error);
        }
    }


    async function addImage(e) {
        e.preventDefault()
        let Form = new FormData()
        let files = e.target["fileImg"].files
        for (let i = 0; i < files.length; i++) {
            Form.append("Images", files[i])
        }

        try {
            await axios.post(`${api}/${idxImg}/images`, Form)
            get()
            handleCancelImg()
        } catch (error) {
            console.error(error);

        }
    }

    function open(id) {
        showModalImg()
        setIdxImg(id)
    }


    async function addUser(e) {
        e.preventDefault()
        let addForm = new FormData()
        addForm.append("Name", e.target["name"].value)
        addForm.append("Description", e.target["des"].value)

        let file = e.target['file'].files

        for (let i = 0; i < file.length; i++) {
            addForm.append("Images", file[i])
        }
        try {
            await axios.post(api, addForm)
            get()
            handleCancel()
        } catch (error) {
            console.error(error);
        }
    }


    async function editUser() {
        try {
            await axios.put(api, { id: idx, name: inpName, description: inpDes })
            get()
            handleCancelEdit()
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

    useEffect(() => {
        get()
    }, [])
    return (
        <>
            <Button type="primary" className='m-[70px]' onClick={showModal}>
                ADD USER +
            </Button>
            <div className='flex justify-center mt-[60px]'>
                <div className='grid grid-cols-[330px_330px_330px_330px] grid-rows-[290px_290px] gap-[30px] max-sm:grid-cols-[330px] max-sm:grid-rows-[290px_290px_290px_290px_290px_290px]'>
                    {
                        users.map((user) => {
                            return <div className='shadow-[0px_0px_10px_lightgrey] rounded-[20px] text-center'>
                                {
                                    user.images.map((img) => {
                                        return <div>
                                            <img src={`${apiImg}/${img.imageName}`} className='w-[330px] h-[150px] ' alt="" />
                                            <div className='flex justify-center mt-[5px] gap-[20px]'>
                                                <Button color="danger" variant="outlined" onClick={() => deletImage(img.id)}>
                                                    deiImg
                                                </Button>
                                                <Button color="primary" variant="solid" onClick={() => open(user.id)}>
                                                    Addimg
                                                </Button>
                                            </div>
                                        </div>
                                    })
                                }
                                <h1 className={`${user.isCompleted ? "text-[green] text-[18px] mt-[10px]" : "text-[red] text-[18px] mt-[10px]"} `}>{user.name}</h1>
                                <p>{user.description}</p>
                                <div className='flex justify-center gap-[15px] mt-[10px]'>
                                    <img src={edit} onClick={() => {
                                        showModalEdit()
                                        setInpDes(user.description)
                                        setInpName(user.name)
                                        setIdx(user.id)
                                    }} alt="" />
                                    <img src={delet} onClick={() => deletUser(user.id)} alt="" />
                                    <Link to={`/info/${user.id}`}>
                                        <img src={info} alt="" />
                                    </Link>
                                    <input checked={user.isCompleted} onChange={() => checkStatus(user.id)} type="checkbox" className='w-[23px] h-[23px]' />
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
                <form onSubmit={(e) => addUser(e)}>
                    <input type="text" className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='name' placeholder='Name...' />
                    <input type="text" className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='des' placeholder='Description...' />
                    <input type="file" multiple className=' m-[10px] ' name='file' /><br />
                    <button type='submit' className='w-[100px] h-[40px] rounded-[10px] bg-blue-500 text-[white] m-[10px]'>Save</button>
                </form>

            </Modal>




            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={editModal}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <input type="text" value={inpName} onChange={(e) => setInpName(e.target.value)} className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='name' placeholder='Name...' />
                <input type="text" value={inpDes} onChange={(e) => setInpDes(e.target.value)} className='w-[300px] h-[43px] rounded-2xl border m-[10px] pl-[20px]' name='des' placeholder='Description...' />
                <button type='submit' className='w-[100px] h-[40px] rounded-[10px] bg-blue-500 text-[white] m-[10px]' onClick={editUser}>Save</button>
            </Modal>








            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={imageModal}
                onCancel={handleCancelImg}
                footer={null}
            >
                <form onSubmit={(e) => addImage(e)}>
                    <input type="file" multiple className=' m-[10px] ' name='fileImg' /><br />
                    <button type='submit' className='w-[100px] h-[40px] rounded-[10px] bg-blue-500 text-[white] m-[10px]' >Save</button>
                </form>
            </Modal>

        </>
    )
}

export default SwaggerTodo