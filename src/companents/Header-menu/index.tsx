import { Box, MenuList, Typography, MenuItem, Button } from "@mui/material";
import styles from "./index.module.sass";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

export const HeaderMenu = () => {
  return (
    <Box
      sx={{
        display: { sx: "none", md: "flex" },
        justifyContent: { sx: "none", md: "space-between" },
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <Box
        sx={{
          display: { sx: "flex", md: "block" },
          justifyContent: { sx: "space-between", md: "none" },
        }}
      >
        <Typography className={styles.headerMenu}>Drile</Typography>
        <Button variant="outlined" sx={{ display: { sx: "flex", md: "none" } }}>
          <AiOutlineMenu />
        </Button>
      </Box>
      <MenuList sx={{ display: { sx: "none", md: "flex" } }}>
        <MenuItem className={styles.navs}>Shop</MenuItem>
        <MenuItem className={styles.navs}>Home</MenuItem>
        <MenuItem className={styles.navs}>Product</MenuItem>
        <MenuItem className={styles.navs}>Blog</MenuItem>
        <MenuItem className={styles.navs}>Page</MenuItem>
        <MenuItem className={styles.navs}>Contact</MenuItem>
      </MenuList>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AiOutlineSearch className={styles.icon} />
        <GiShoppingCart className={styles.icon} />
        <AiOutlineUser className={styles.icon} />
      </Box>
    </Box>
  );
};
