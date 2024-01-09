import { useContext } from 'react'
// import Mypic from '../../../assets/imgs/Group 48102127.svg'
// import Header from '../../../SharedModule/Component/Header/Header'
// import { Oval } from 'react-loader-spinner'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

// import avatar from '../../../assets/imgs/Avatar_icon_green.svg.jpg'
// import NoData from '../../../SharedModule/Component/NoData/NoData'
// import { Modal } from 'react-bootstrap'
// import NoDataImg from '../../../assets/imgs/freepik--Character--inject-70.png'
import { toast } from 'react-toastify'
// import ReactPaginate from 'react-paginate'
import { AuthContext } from '../Context/AuthContext'



export default function UsersList() {

    const [loading, setLoading] = useState(false)  //loader

    const [userId, setUserId] = useState(null)

    const [usersList, setUsersList] = useState(null)

    const [pagesArray, setPagesArray] = useState([])

    const [searchString, setSearchString] = useState('')


    const [totalNumOfPages, setTotalNumOfPages] = useState(0)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (id: any) => {
        setUserId(id)
        setShow(true)
    }

    const { baseUrl, requestHeaders }: any = useContext(AuthContext)



    const getAllUsers = () => {
        axios.get(`${baseUrl}/admin/users`, {
            headers: requestHeaders,
            params: {
                page: 1,
                size: 10

            }
        }).then((response) => {
            console.log(response)

        }).catch((error) => {
            console.log(error)
        })
    }

    const deleteUser = () => {
        setLoading(true)
        axios.delete(`https://upskilling-egypt.com:443/api/v1/Users/${userId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
        }).then((response) => {
            console.log(response)
            setLoading(false)
            handleClose()
            getAllUsers()
            toast.success(response.data.message, {
                autoClose: 2000
            })
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            toast.error(error.response.data.message, {
                autoClose: 2000
            })
        })
    }

    // const searchByName = (e:any) => {
    //     console.log(e.target.value)
    //     getAllUsers(1, e.target.value)
    //     setSearchString(e.target.value)
    // }

    // const searchByMail = (e:any) => {
    //     getAllUsers(1, '', e.target.value)
    // }

    const handlPageChange = (data: any) => {
        // let currentPage = data.selected + 1
        // getAllUsers(currentPage)
        console.log(data.selected + 1);

    }


    useEffect(() => {
        getAllUsers()
    }, [])

    // getAllUsers(1)


    return (
        <div>
            helllo
        </div>
    )
    // <div>

    //     <Modal show={show} onHide={handleClose}>
    //         <Modal.Header closeButton>
    //             <Modal.Title>Delete User</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //             <div className='text-center'>
    //                 <img src={NoDataImg} alt="no-data" />
    //                 <h4>Delete this user?</h4>
    //                 <p className='text-muted'>are you sure you want to delete this user ? if you are sure just click on delete it</p>
    //                 <button onClick={deleteUser}
    //                     className='btn btn-outline-danger px-4 ms-auto d-block '>
    //                     {loading ? <i className="fa-solid fa-spin fa-spinner px-3"></i> : 'Delete'}
    //                 </button>
    //             </div>
    //         </Modal.Body>
    //     </Modal>

    //     <Header>
    //         <div className='header-container rounded-4 text-white' style={{ marginTop: '70px' }}>
    //             <div className="row align-items-center">
    //                 <div className="col-sm-10">
    //                     <div className='p-3'>
    //                         <h1>Users List</h1>
    //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus. Lorem ipsum <br /> dolor sit amet consectetur adipisicing elit. Rem, officia! </p>
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-2">
    //                     <div>
    //                         <img src={Mypic} className='w-100' alt="header-pic" />
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //         <h4 className='mt-3'>Users Table Details</h4>
    //         <div>You can check all details</div>
    //     </Header>


    //     <div className="row my-3">
    //         <div className="col-sm-6">
    //             <input  type="text" className='name-search-recipe form-control' placeholder='search by name' />
    //         </div>
    //         <div className="col-sm-6">
    //             <input type="email" className='form-control' onChange={searchByMail} placeholder='search by email' />
    //         </div>
    //     </div>





    //     {usersList?.length == 0 ? <NoData /> : <> <div className='table-responsive'> <table class="table align-middle text-center table-striped">
    //         <thead>
    //             <tr className=''>
    //                 <th className='t-h py-3 rounded-start-4 ' scope="col">#</th>
    //                 <th className='t-h py-3' scope="col">Name</th>
    //                 <th className='t-h py-3' scope="col">Image</th>

    //                 <th className='t-h py-3' scope="col">Role</th>
    //                 <th className='t-h py-3' scope="col">Email</th>
    //                 <th className='t-h py-3 rounded-end-4' scope="col">Actions</th>

    //             </tr>
    //         </thead>
    //         <tbody >
    //             {usersList ? <>  {usersList?.map((user, idx) => {
    //                 return <tr key={idx} >
    //                     <th scope="row"> {user.id} </th>
    //                     <td> {user.userName} </td>
    //                     {user.imagePath ? <td>
    //                         {<img src={`https://upskilling-egypt.com:443/` + user.imagePath} className='recipe-img' alt="" />}
    //                     </td> : <td> <img src={avatar} className='noUser-img' alt="" /> </td>}

    //                     <td> {user.group.name} </td>
    //                     <td> {user.email} </td>
    //                     <td>
    //                         <i title='delete'
    //                             className='fa fa-trash text-danger'
    //                             style={{ cursor: 'pointer' }}
    //                             onClick={() => { handleShow(user.id) }}>
    //                         </i>
    //                     </td>
    //                 </tr>

    //             })} </> : <span
    //                 className='d-flex justify-content-center align-items-center'>
    //                 <Oval
    //                     height={60}
    //                     width={60}
    //                     color="#fff"
    //                     wrapperStyle={{}}
    //                     wrapperClass=""
    //                     visible={true}
    //                     ariaLabel='oval-loading'
    //                     secondaryColor="#4fa94d"
    //                     strokeWidth={5}
    //                     strokeWidthSecondary={5}

    //                 /></span>}
    //         </tbody>
    //     </table>
    //         <ReactPaginate
    //             breakLabel={'...'}
    //             pageCount={totalNumOfPages}
    //             marginPagesDisplayed={2}
    //             pageRangeDisplayed={2}
    //             onPageChange={handlPageChange}
    //             containerClassName='pagination justify-content-end'
    //             pageClassName='page-item'
    //             pageLinkClassName='page-link'
    //             previousClassName='page-item'
    //             previousLinkClassName='page-link'
    //             nextClassName='page-item'
    //             nextLinkClassName='page-link'
    //             breakClassName='page-item'
    //             breakLinkClassName='page-link'
    //             activeClassName='active'
    //         />
    //     </div></>}




    // </div>





}
