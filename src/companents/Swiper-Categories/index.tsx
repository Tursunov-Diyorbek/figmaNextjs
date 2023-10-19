import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.sass";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { useQuery } from "react-query";
import axios from "axios";
import { width } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import { Fade } from "react-awesome-reveal";
import { PiCircleNotchThin, PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

export const SwiperCategories = () => {
  const { isLoading, error, data } = useQuery("product", () =>
    axios.get("https://fakestoreapi.com/products"),
  );
  return (
    <Box>
      <Typography className={styles.SwiperCategory_Text}>
        TRENDING CATEGORIES
      </Typography>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{ height: 200 }}
      >
        {data?.data.map((item: any[], index: number) => (
          <SwiperSlide
            key={index}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <img src={item.image} alt="photo" style={{ height: 60 }} />
            <Typography className={styles.SwiperCategory_Title}>
              {item.title}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid container sx={{ display: "flex", gap: 3, marginTop: 10 }}>
        {data?.data.slice(0, 4).map((item: any[], index: number) => (
          <Grid xs={12} md={5.8} lg={2.8} className={styles.card} key={index}>
            <Fade delay={100}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={item.image}
                  alt="photo"
                  style={{
                    width: 200,
                    height: 250,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                    }}
                  >
                    <PiCircleNotchThin />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                    }}
                  >
                    <CiHeart />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                    }}
                  >
                    <PiShoppingCartThin />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography className={styles.card__title}>
                  {item.title}
                </Typography>
                <Typography className={styles.card__price}>
                  ${item.price}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
