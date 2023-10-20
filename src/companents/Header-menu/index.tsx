import { Box, MenuList, Typography, MenuItem, Button } from "@mui/material";
import styles from "./index.module.sass";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const HeaderMenu = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <Typography className={styles.headerMenu}>Drile</Typography>
          <MenuList sx={{ display: "flex" }}>
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
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography className={styles.headerMenu}>Drile</Typography>
          {isActive === true ? (
            <Button
              variant="outlined"
              sx={{ display: { sx: "flex", md: "none" } }}
              onClick={() => setisActive(false)}
            >
              <AiOutlineClose />
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ display: { sx: "flex", md: "none" } }}
              onClick={() => setisActive(true)}
            >
              <AiOutlineMenu />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            height: isActive === true ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <MenuList>
            <MenuItem className={styles.navs}>Shop</MenuItem>
            <MenuItem className={styles.navs}>Home</MenuItem>
            <MenuItem className={styles.navs}>Product</MenuItem>
            <MenuItem className={styles.navs}>Blog</MenuItem>
            <MenuItem className={styles.navs}>Page</MenuItem>
            <MenuItem className={styles.navs}>Contact</MenuItem>
          </MenuList>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginTop: 2,
            }}
          >
            <AiOutlineSearch className={styles.icon} />
            <GiShoppingCart className={styles.icon} />
            <AiOutlineUser className={styles.icon} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
