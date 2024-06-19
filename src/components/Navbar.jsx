import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from "../utils/constants"
import Searchbar from './Searchbar'

const Navbar = () => (
  <Stack direction="row"
  alignItems="center"
  p={2}
   sx={{position:'sticky', 
   background:'#000', top:0, 
   justifyContent:'space-between'}}>
    <Link to="/" style={{display:'flex', alignItems:'center'}}>
      < img src={logo} height={45} alt="logo"/>
    </Link>
    <Searchbar/>
  </Stack>
)

export default Navbar;