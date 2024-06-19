import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard'
import Videos from "./Videos"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail1, setchannelDetail1] = useState(null)
  const [videos1, setvideos1] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setchannelDetail1(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data)=> setvideos1(data?.items))
  },[id])

  
  return (
    <Box minHeight="95vh">
      <Box>
        <div
        style={{background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',zIndex:10,height:'300px'}}
        />
        <ChannelCard channelDetail={channelDetail1}
        marginTop="-93px"/>
      </Box>
      <Box display="flex" p='2'sx={{ml:'100px'}}>
        <Box sx={{mr:{sm:'100px'},}}/>
        <Videos videos={videos1}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail