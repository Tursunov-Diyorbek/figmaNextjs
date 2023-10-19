import { Box, MenuList, Typography, MenuItem } from "@mui/material";
import { useQuery } from "react-query";
import styles from "./index.module.sass";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";

const HeaderMenu = () => {
  const { isLoading, error, data } = useQuery("data", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography className={styles.headerMenu}>Drile</Typography>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Product</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Page</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuList>
      <Box>
        <AiOutlineSearch />
        <GiShoppingCart />
        <AiOutlineUser />
      </Box>
    </Box>
  );
};
export default HeaderMenu;
