import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import Logo from "../ui/Logo";
import PropertySearch from "./PropertySearch";

type Props = {
  title?: string;
};

const Banner: FC<Props> = ({ title }) => {
  const bannerHeight = title ? "50vh" : "80vh";

  return (
    <Box sx={{ height: bannerHeight }} component="header">
      <Box
        sx={{
          position: "absolute",
          height: bannerHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Image
          alt="Banner backround"
          src="/banner-bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="0% 30%"
          quality={100}
        />
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "#C4C4C4",
            opacity: "50%",
            zIndex: 2,
          }}
        />
      </Box>
      <Grid
        container
        direction={"column"}
        rowSpacing={5}
        sx={{ padding:5, width: "100%" , position: "relative"}}
      >
        <Grid container item xs={12}>
            <Grid item xs={3}>
              <Logo />
            </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={6}>
            {title ? (
              <Typography variant="h2" sx={{ color: "white" }} align="center">
                {title}
              </Typography>
            ) : (
              <PropertySearch />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
