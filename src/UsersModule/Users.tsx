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
import NoDataImg from '../assets/imgs/freepik--Character--inject-70.png'
import { toast } from 'react-toastify'
// import ReactPaginate from 'react-paginate'
import { AuthContext } from '../Context/AuthContext'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { ThreeDots } from 'react-loader-spinner'
import { Box } from '@mui/system'
import './UsersModule.css'



export default function UsersList() {

    const [isLoading, setisLoading] = useState(false)  //loader

    const [userId, setUserId] = useState(null)

    const [usersList, setUsersList]: any = useState(null)

    const { baseUrl, requestHeaders }: any = useContext(AuthContext)



    const getAllUsers = () => {
        setisLoading(true)
        axios.get(`${baseUrl}/admin/users`, {
            headers: requestHeaders,
            params: {
                page: 1,
                size: 100

            }
        }).then((response) => {
            console.log(response.data.data.users)
            setUsersList(response.data.data.users)
            setisLoading(false)

        }).catch((error) => {
            console.log(error)
            setisLoading(false)
        })
    }


    const handlechangepage = (event: any, newpage: any) => {
        console.log(newpage);

        pagechange(newpage)
    }
    const handleRowsPerPage = (event: any) => {
        rowperpagechange(+event.target.value)
        pagechange(0);
    }

    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);


    useEffect(() => {
        getAllUsers()
    }, [])



    return (
        <div style={{ textAlign: 'left' }}>
            <h2 className='my-3'>Users list</h2>

            {isLoading ? <Box component="span" sx={{ display: 'flex', justifyContent: 'center' }}>
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="blue"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> </Box> : <>
                {usersList?.length <= 0 ? <div className='text-center pt-4'>
                    <img src={NoDataImg} alt="" />
                    <h3>No Data found</h3> </div> : <>    <TableContainer component={Paper} >
                        <Table aria-label='simple-table' >
                            <TableHead sx={{ backgroundColor: '#E2E5EB' }}>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersList?.slice(page * rowperpage, page * rowperpage + rowperpage).map((row: any, idx: any) => {
                                    return <TableRow key={idx}>
                                        <TableCell>{idx + 1}</TableCell>
                                        <TableCell>{row.userName}</TableCell>
                                        <TableCell>{row.phoneNumber}</TableCell>
                                        <TableCell>{row.role}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        rowsPerPage={rowperpage}
                        page={page}
                        count={usersList?.length}
                        component="div"
                        onPageChange={handlechangepage}
                        onRowsPerPageChange={handleRowsPerPage}
                    >
                    </TablePagination> </>}
            </>}
        </div >
    )

}