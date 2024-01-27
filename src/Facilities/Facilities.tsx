import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { ThreeDots } from 'react-loader-spinner';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import NoDataImg from '../assets/imgs/freepik--Character--inject-70.png'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//Menu
const ITEM_HEIGHT = 48;

export default function Facilities() {

    const { baseUrl, requestHeaders }: any = useContext(AuthContext)
    const [isLoading, setisLoading]: any = useState(false)  //loader
    const [roomsList, setRoomsList]: any = useState(null)
    const [roomsDetails, setRoomDetails]: any = useState(null)

    const [roomId, setRoomId]: any = useState(null)



    //Pagination in table
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

    //modal styling 
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [ModalState, setModalState] = React.useState('close');
    const DeletModal = (id: any) => {
        alert(id)
        setModalState('modal-del')
    };
    const UpdateModal = (id: any) => {
        alert(id)
        setModalState('modal-update')
    };
    const AddNewFacilityModal = () => {
        setModalState('modal-add')
    };

    const handleCloseModal = () => setModalState('close');

    //3 dots dropDown
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };


    const getAllRooms = () => {
        setisLoading(true)
        axios.get(`${baseUrl}/admin/room-facilities`, {
            headers: requestHeaders,
            params: {
                page: 1,
                size: 100
            }
        }).then((response) => {
            console.log(response.data.data.facilities)
            setRoomsList(response.data.data.facilities)
            setisLoading(false)

        }).catch((error) => {
            console.log(error)
            setisLoading(false)
        })
    }



    useEffect(() => {
        getAllRooms()
    }, [])



    return (
        <section style={{ marginTop: '20px' }}>


            <Modal
                open={ModalState == 'modal-del'}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        change password
                    </Typography> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        modal delete
                    </Typography>
                </Box>
            </Modal>


            <Modal
                open={ModalState == 'modal-update'}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        change password
                    </Typography> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        modal update
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={ModalState == 'modal-add'}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add facility
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        <input type="text" placeholder='Name' />
                    </Typography>
                    <Button variant="contained" sx={{ mt: 6 }}>
                        Save
                    </Button>
                </Box>
            </Modal>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h3>Facilities table details</h3>
                    <span>You can check all details</span>
                </div>
                <div>
                    <Button variant="contained" onClick={AddNewFacilityModal}>
                        Add new facility
                    </Button>
                </div>
            </Box>

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
                {roomsList?.length <= 0 ? <div className='text-center pt-4'>
                    <img src={NoDataImg} alt="" />
                    <h3>No Data found</h3> </div> : <>    <TableContainer component={Paper} >
                        <Table aria-label='simple-table' >
                            <TableHead sx={{ backgroundColor: '#E2E5EB' }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Created By</TableCell>
                                    <TableCell> Created At </TableCell>
                                    <TableCell> </TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {roomsList?.slice(page * rowperpage, page * rowperpage + rowperpage).map((row: any, idx: any) => {
                                    return <TableRow key={idx}>
                                        <TableCell>{row?.name}</TableCell>
                                        <TableCell>{row?.createdBy?.userName}</TableCell>
                                        <TableCell>{row?.createdAt.split("T")[0]}</TableCell>
                                        <TableCell> </TableCell>
                                        <TableCell>
                                            <div>
                                                <IconButton
                                                    aria-label="more"
                                                    id="long-button"
                                                    aria-controls={open ? 'long-menu' : undefined}
                                                    aria-expanded={open ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    MenuListProps={{
                                                        'aria-labelledby': 'long-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleCloseMenu}
                                                    PaperProps={{
                                                        style: {
                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                            width: '7ch',
                                                        },
                                                    }}
                                                >

                                                    <MenuItem onClick={() => { handleCloseMenu(), DeletModal(row._id) }} >
                                                        <DeleteIcon />

                                                    </MenuItem>

                                                    <MenuItem onClick={() => { handleCloseMenu(), UpdateModal(row._id) }} >

                                                        <ModeIcon />
                                                    </MenuItem>

                                                </Menu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        rowsPerPage={rowperpage}
                        page={page}
                        count={roomsList?.length}
                        component="div"
                        onPageChange={handlechangepage}
                        onRowsPerPageChange={handleRowsPerPage}

                    >

                    </TablePagination> </>}
            </>}
        </section>
    )
}
