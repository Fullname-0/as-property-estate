import { Box, Grid } from "@mui/material";
import { FC } from "react";
import ImageGallery from "react-image-gallery";
import Image from "../../model/web/Image";
import Logo from "../ui/Logo";

type Props = {
  gallery: Image[];
};

const Gallery: FC<Props> = ({ gallery }) => {
  const images = gallery.map((element) => {
    return {
      original: element.large,
      thumbnail: element.thumbnail,
    };
  });

  return (
    <Box sx={{ height: "95vh" }} component="header">
      <Box
        sx={{
          position: "absolute",
          height: "80vh",
          width: "100%",
        }}
      >
        <ImageGallery autoPlay={true} showBullets={true} items={images} />
      </Box>
      <Grid container sx={{ padding: 5, width: "100%" }}>
        <Grid item xs={3}>
          <Logo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallery;
