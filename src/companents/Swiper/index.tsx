import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SwiperHeader = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, error, data } = useQuery("data", () =>
    axios.get("https://fakestoreapi.com/products"),
  );

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{ height: 500, textAlign: "center", marginTop: 50 }}
      >
        {data?.data.map((item: any[], index: number) => (
          <SwiperSlide key={index}>
            <Fade delay={100}>
              <Box>
                <img
                  src={item.image}
                  alt="photo"
                  style={{ maxWidth: 400, height: 400 }}
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#434343" }}
                    onClick={handleClick}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </Box>
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};
