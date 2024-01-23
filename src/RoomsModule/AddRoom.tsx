import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useContext, useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';


//Select option for facilites
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function AddRoom() {

    const {
        register,
        handleSubmit,
        formState: { errors }

    }: any = useForm()

    const { baseUrl, requestHeaders }: any = useContext(AuthContext)

    const [facilities, setAllFacilities] = useState([])

    const getAllFacilities = () => {
        axios.get(`${baseUrl}/admin/room-facilities`, {
            headers: requestHeaders,
            params: {
                page: 1,
                size: 100
            }
        }).then((response) => {
            console.log(response.data.data.facilities)
            setAllFacilities(response.data.data.facilities)

        }).catch((error) => {
            console.log(error)
        })
    }

    const addNewRoom = (data: any) => {
        console.log(data);

        // axios.post(`${baseUrl}/admin/room`, {
        //     headers: requestHeaders,
        //     params: {
        //         page: 1,
        //         size: 100
        //     }
        // }).then((response) => {
        //     console.log(response)


        // }).catch((error) => {
        //     console.log(error)
        // })
    }

    useEffect(() => {
        getAllFacilities()
    }, [])

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    return (
        <section style={{ paddingTop: '70px', width: '75%', margin: 'auto' }}>
            <h3>Add New Room</h3>
            <form onSubmit={handleSubmit(addNewRoom)}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField sx={{ width: '100%' }}
                                id="filled-basic"
                                label="Room Number"
                                variant="filled"
                                {...register('roomNumber', {
                                    required: true
                                })} />
                            {errors.roomNumber && errors.roomNumber.type === 'required' &&
                                (<span className='text-danger'>room number is required</span>)}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                id="filled-basic"
                                label="Price"
                                variant="filled"
                                {...register('price', {
                                    required: true
                                })} />
                            {errors.price && errors.price.type === 'required' &&
                                (<span className='text-danger'>price is required</span>)}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                id="filled-basic"
                                label="Capicty"
                                variant="filled"
                                {...register('capacity', {
                                    required: true
                                })} />
                            {errors.capacity && errors.capacity.type === 'required' &&
                                (<span className='text-danger'>capacity is required</span>)}
                        </Grid>
                        <Grid item xs={6} >
                            <TextField sx={{ width: '100%' }}
                                id="filled-basic"
                                label="Discount"
                                variant="filled"
                                {...register('discount', {
                                    required: true
                                })} />
                            {errors.discount && errors.discount.type === 'required' &&
                                (<span className='text-danger'>discount is required</span>)}
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <FormControl sx={{ m: 0, width: '100%' }}  >
                                    <InputLabel id="demo-multiple-checkbox-label">Facilities</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Facilities" />}
                                        renderValue={(selected: any) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        {...register('facilities', {
                                            required: true
                                        })}

                                    >
                                        {facilities?.map((name: any, idx) => (
                                            <MenuItem key={idx} value={name.name}  >
                                                <Checkbox checked={personName.indexOf(name.name) > -1} />
                                                <ListItemText primary={name.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>

                                </FormControl>

                            </div>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField sx={{ width: '100%' }}
                                id="filled-basic"
                                type='file'
                                {...register('imgs', {
                                    required: true
                                })} />
                            {errors.imgs && errors.imgs.type === 'required' &&
                                (<span className='text-danger'>imgs is required</span>)}
                        </Grid>
                    </Grid>
                </Box>

                <Typography sx={{ display: 'flex', justifyContent: 'end', marginTop: '25px' }}>
                    <Button sx={{ marginRight: '15px' }} variant="outlined">
                        <Link style={{ textDecoration: 'none' }} to={'/home/rooms'}> Cancel </Link>
                    </Button>
                    <Button type='submit' variant="contained"> Save </Button>
                </Typography>


            </form>
        </section>
    )
}



