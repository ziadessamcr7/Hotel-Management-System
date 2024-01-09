import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import myImg from '../../assets/imgs/Ellipse 234.jpg'
import { Button } from '@mui/material';

export default function Navbar() {



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'white' }}  >
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="default"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit" className='pe-3'>
                        <img src={myImg} alt="" />
                        <span className='text-dark ms-1'>name </span>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>


    )
}
