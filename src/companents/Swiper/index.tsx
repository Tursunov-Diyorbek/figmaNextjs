import {Box, Button, Typography} from "@mui/material"
import axios from "axios"
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export const SwiperHeader = () => {

    const { isLoading, error, data } = useQuery("data", () =>
    axios.get("https://fakestoreapi.com/products"),
  );
  
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} style={{height: 500, textAlign: 'center', marginTop: 50}}>
        {data?.data.map((item) => <SwiperSlide>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src={item.image} alt="photo" style={{width: 500, height: 500}}/>
        <Box>
        <Typography>{item.title}</Typography>
        <Button variant="contained">SHOP NOW</Button>
        </Box>
        </Box>
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}