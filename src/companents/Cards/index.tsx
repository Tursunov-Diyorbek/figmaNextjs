import { Box, Typography } from "@mui/material";
import styles from "./index.module.sass";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "react-query";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin, PiCircleNotchThin } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

export const Cards = () => {
  const { isLoading, error, data } = useQuery("data", () =>
    axios.get("https://fakestoreapi.com/products"),
  );

  return (
    <Box>
      <Typography className={styles.cards__text}>Best Seller Items</Typography>
      <Grid container sx={{ display: "flex", gap: 3 }}>
        {data?.data.slice(0, 4).map((item: any[], index: number) => (
          <Grid xs={12} md={5.8} lg={2.8} className={styles.card} key={index}>
            <Fade delay={100}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                  }}
                >
                  <img
                    src={item.image}
                    alt="photo"
                    style={{
                      width: 200,
                      height: 250,
                    }}
                  />
                </Box>
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
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
                    }}
                  >
                    <PiCircleNotchThin />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
                    }}
                  >
                    <CiHeart />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
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
      <Grid container sx={{ display: "flex", gap: 3, marginTop: 3 }}>
        {data?.data.slice(-3).map((item: any[], index: number) => (
          <Grid xs={12} md={5.8} lg={3.8} className={styles.card} key={index}>
            <Fade delay={100}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                  }}
                >
                  <img
                    src={item.image}
                    alt="photo"
                    style={{
                      width: 200,
                      height: 250,
                    }}
                  />
                </Box>
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
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
                    }}
                  >
                    <PiCircleNotchThin />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
                    }}
                  >
                    <CiHeart />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                      padding: 1,
                      cursor: "pointer",
                      borderRadius: "5px",
                      "&:hover": {
                        background: "#9DDBAD",
                        color: "#fff",
                      },
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
