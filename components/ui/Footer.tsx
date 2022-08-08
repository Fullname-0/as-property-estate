import { FC } from "react";
import { Grid, Divider, Box, IconButton, Link } from "@mui/material";
import NextLink from "next/link";
import { Facebook, Mail } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ mx: 5, mb: 5 }}>
      <Grid container direction="column" spacing={1}>
        <Divider flexItem={true} />
        <Grid container item justifyContent="space-between" alignItems="center" xs>
          <NextLink href="/polityka-prywatnosci">
            <Link href="#" underline="none" sx={{ color: "black" }}>
              Polityka prywatności
            </Link>
          </NextLink>
          <Grid item>
            <IconButton
              sx={{ color: "black" }}
              href="https://www.facebook.com/AS-Property-108832574587453/"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            {/* <IconButton sx={{ color: "black" }}>
              <Mail />
            </IconButton> */}
          </Grid>
        </Grid>
        <Grid container item direction="column" alignItems="center">
          <Typography color="secondary">&copy; Agnieszka Siekanko Rzeczoznawca Majątkowy</Typography>
          <Typography color="secondary">ul. Brzozowa 3</Typography>
          <Typography color="secondary">61-429 Poznań</Typography>
          <Typography color="secondary">tel: +48 502 653 803</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
