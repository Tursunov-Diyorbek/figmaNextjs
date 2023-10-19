import {
  Box,
  Container,
  Typography,
  Grid,
  MenuItem,
  MenuList,
} from "@mui/material";
import styles from "./index.module.sass";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        <Typography className={styles.footerText} sx={{ marginTop: 10 }}>
          Drile
        </Typography>
        <Grid container sx={{ margin: "50px 0" }}>
          <Grid xs={12} md={6} lg={3}>
            <Typography className={styles.footer__menuText}>
              ABOUT US
            </Typography>
            <MenuList>
              <MenuItem className={styles.footer__menu}>About Us</MenuItem>
              <MenuItem className={styles.footer__menu}>Contact Us</MenuItem>
              <MenuItem className={styles.footer__menu}>
                Privacy Policy
              </MenuItem>
              <MenuItem className={styles.footer__menu}>
                Terms of Service
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography className={styles.footer__menuText}>COMPANY</Typography>
            <MenuList>
              <MenuItem className={styles.footer__menu}>Explore World</MenuItem>
              <MenuItem className={styles.footer__menu}>
                Trending Video
              </MenuItem>
              <MenuItem className={styles.footer__menu}>Book a Trip</MenuItem>
              <MenuItem className={styles.footer__menu}>Visit Gallery</MenuItem>
            </MenuList>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography className={styles.footer__menuText}>
              USEFUL LINKS
            </Typography>
            <MenuList>
              <MenuItem className={styles.footer__menu}>
                Buy this theme
              </MenuItem>
              <MenuItem className={styles.footer__menu}>Drile Landing</MenuItem>
              <MenuItem className={styles.footer__menu}>Documentation</MenuItem>
              <MenuItem className={styles.footer__menu}>
                Video tutoriol
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Typography className={styles.footer__menuText}>
              FOLLOW US
            </Typography>
            <MenuList>
              <MenuItem className={styles.footer__menu}>
                <BiLogoFacebookCircle style={{ color: "#C1DBF0" }} /> Faceebook
              </MenuItem>
              <MenuItem className={styles.footer__menu}>
                <BiLogoTwitter style={{ color: "#C1DBF0" }} /> Twitter
              </MenuItem>
              <MenuItem className={styles.footer__menu}>
                <BiLogoInstagramAlt style={{ color: "#C1DBF0" }} /> Instagram
              </MenuItem>
            </MenuList>
          </Grid>
        </Grid>
      </Container>
      <Typography sx={{ textAlign: "center" }}>
        © Copyright 2022 | drile | All right reserved.
      </Typography>
    </Box>
  );
};
