import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "react-query";
import axios from "axios";
import { useMemo, useState } from "react";
import styles from "./index.module.sass";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Bounce } from "react-awesome-reveal";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Shopping = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, error, data } = useQuery("productId", () =>
    axios.get("https://fakestoreapi.com/products"),
  );

  const ProductId = Math.floor(Math.random() * data?.data.length) + 1;

  const Product = useMemo(
    () => data?.data[ProductId] || [],
    [data?.data[ProductId]],
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
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        margin: "40px 0",
      }}
    >
      <Grid xs={12} md={5}>
        <Box>
          <Bounce delay={100}>
            <img src={Product.image} alt="photo" style={{ width: 200 }} />
          </Bounce>
        </Box>
      </Grid>
      <Grid xs={12} md={5}>
        <Box>
          <Typography className={styles.shopImg}>DEAL OF THE WEEK</Typography>
          <Typography className={styles.shopPrise}>
            <span>from</span> ${Product.price}
          </Typography>
          <Typography className={styles.shopDesc}>
            {Product.description}
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#434343", margin: "20px 0" }}
            onClick={handleClick}
          >
            SHOP NOW
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {data?.data.slice(-4).map((item: string, index: number) => (
              <Box
                sx={{
                  width: 70,
                  boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.10)",
                  padding: 1,
                }}
                key={index}
              >
                <img src={item.image} alt="photo" style={{ width: "100%" }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Grid>
  );
};
