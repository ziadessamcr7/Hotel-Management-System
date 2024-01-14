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
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";



export default function UsersList() {

    const [loading, setLoading] = useState(false)  //loader

    const [userId, setUserId] = useState(null)

    const [usersList, setUsersList] = useState(null)

    const [pagesArray, setPagesArray] = useState([])

    const [searchString, setSearchString] = useState('')

    const [totalNumOfPages, setTotalNumOfPages] = useState(0)



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


    const handlechangepage = (event: any, newpage: any) => {
        console.log(newpage);

        pagechange(newpage)
    }
    const handleRowsPerPage = (event: any) => {
        rowperpagechange(+event.target.value)
        pagechange(0);
    }

    const [rows, rowchange] = useState([]);
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);


    useEffect(() => {
        getAllUsers()
    }, [])



    return (
        <div style={{ textAlign: 'left' }}>
            <h2 className='my-3'>Users list</h2>

            <TableContainer component={Paper} >
                <Table aria-label='simple-table' >
                    <TableHead sx={{ backgroundColor: '#E2E5EB' }}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name </TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.slice(page * rowperpage, page * rowperpage + rowperpage).map((row, idx) => {
                            return <TableRow key={idx}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
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
                count={tableData.length}
                component="div"
                onPageChange={handlechangepage}
                onRowsPerPageChange={handleRowsPerPage}

            >

            </TablePagination>


        </div >
    )

}



const tableData = [{
    "id": 1,
    "first_name": "Neale",
    "last_name": "Hardisty",
    "email": "nhardisty0@tiny.cc",
    "gender": "Male",
    "ip_address": "141.125.162.125"
}, {
    "id": 2,
    "first_name": "Simonette",
    "last_name": "Blaxeland",
    "email": "sblaxeland1@addtoany.com",
    "gender": "Polygender",
    "ip_address": "24.130.210.177"
}, {
    "id": 3,
    "first_name": "Jeniffer",
    "last_name": "Grindlay",
    "email": "jgrindlay2@tripod.com",
    "gender": "Female",
    "ip_address": "227.128.212.91"
}, {
    "id": 4,
    "first_name": "Klarika",
    "last_name": "Fairham",
    "email": "kfairham3@auda.org.au",
    "gender": "Genderfluid",
    "ip_address": "186.216.34.231"
}, {
    "id": 5,
    "first_name": "Hall",
    "last_name": "Swalwel",
    "email": "hswalwel4@goodreads.com",
    "gender": "Male",
    "ip_address": "51.189.40.188"
}, {
    "id": 6,
    "first_name": "Kevan",
    "last_name": "Pariss",
    "email": "kpariss5@livejournal.com",
    "gender": "Male",
    "ip_address": "173.223.68.103"
}, {
    "id": 7,
    "first_name": "Kitty",
    "last_name": "Plomer",
    "email": "kplomer6@github.io",
    "gender": "Female",
    "ip_address": "246.3.31.198"
}, {
    "id": 8,
    "first_name": "Matty",
    "last_name": "MacKinnon",
    "email": "mmackinnon7@tmall.com",
    "gender": "Agender",
    "ip_address": "152.112.28.96"
}, {
    "id": 9,
    "first_name": "Lind",
    "last_name": "Eddies",
    "email": "leddies8@issuu.com",
    "gender": "Male",
    "ip_address": "134.52.229.71"
}, {
    "id": 10,
    "first_name": "Rafaela",
    "last_name": "Hardacre",
    "email": "rhardacre9@ebay.co.uk",
    "gender": "Genderfluid",
    "ip_address": "169.234.104.188"
}, {
    "id": 11,
    "first_name": "Hurley",
    "last_name": "Loughman",
    "email": "hloughmana@timesonline.co.uk",
    "gender": "Male",
    "ip_address": "150.125.40.189"
}, {
    "id": 12,
    "first_name": "Brewer",
    "last_name": "Bowcher",
    "email": "bbowcherb@nba.com",
    "gender": "Genderqueer",
    "ip_address": "250.56.99.196"
}, {
    "id": 13,
    "first_name": "Michal",
    "last_name": "White",
    "email": "mwhitec@cpanel.net",
    "gender": "Male",
    "ip_address": "125.40.224.24"
}, {
    "id": 14,
    "first_name": "Babita",
    "last_name": "Peartree",
    "email": "bpeartreed@sakura.ne.jp",
    "gender": "Non-binary",
    "ip_address": "33.40.82.193"
}, {
    "id": 15,
    "first_name": "June",
    "last_name": "Prebble",
    "email": "jprebblee@livejournal.com",
    "gender": "Female",
    "ip_address": "191.147.234.141"
}, {
    "id": 16,
    "first_name": "Raul",
    "last_name": "Gwalter",
    "email": "rgwalterf@netvibes.com",
    "gender": "Male",
    "ip_address": "92.213.210.32"
}, {
    "id": 17,
    "first_name": "Carmina",
    "last_name": "Montfort",
    "email": "cmontfortg@google.es",
    "gender": "Female",
    "ip_address": "146.134.16.137"
}, {
    "id": 18,
    "first_name": "Jonah",
    "last_name": "Wase",
    "email": "jwaseh@wikimedia.org",
    "gender": "Male",
    "ip_address": "71.1.66.144"
}, {
    "id": 19,
    "first_name": "Jorry",
    "last_name": "Clapson",
    "email": "jclapsoni@homestead.com",
    "gender": "Female",
    "ip_address": "182.190.84.71"
}, {
    "id": 20,
    "first_name": "Stormy",
    "last_name": "Ricca",
    "email": "sriccaj@cyberchimps.com",
    "gender": "Female",
    "ip_address": "187.100.21.249"
}]