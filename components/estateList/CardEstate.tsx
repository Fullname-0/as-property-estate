import { Card, CardContent, CardActions, CardMedia, Button, Typography, Grid, Box } from "@mui/material";
import { FC, useContext } from "react";
import Property from "../../model/web/Property";
import NextLink from "next/link";
import ContactContext from "../../store/contact-context";

type Props = {
  estate: Property;
  small?: boolean;
};

const CardEstate: FC<Props> = ({ estate, small = false }) => {
  const { onOpenCloseModal } = useContext(ContactContext);

  const handleOpenCloseModal = () => {
    onOpenCloseModal(estate);
  };

  return (
    <Grid item xs={12} sx={{ my: 3 }}>
      <Card sx={{ width: "100%", display: "flex" }}>
        <NextLink href={`/${estate.slug}`} passHref>
          <Box component="a" sx={{ width: "80%" }}>
            <CardMedia
              component="img"
              height={small ? "100%" : "350px"}
              image={small ? estate.coverImage.thumbnail : estate.coverImage.small}
              alt="oferta sprzedaży nieruchomości"
              sx={{
                mb: -1,
              }}
            />
          </Box>
        </NextLink>
        <CardContent
          component="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: ".4fr .6fr 1fr 1fr",
            width: "100%",
            ml: 1,
          }}
        >
          <Typography variant="h5" sx={{ gridRow: small ? "1" : "1/2" }}>
            {estate.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ gridRow: small ? "2" : "2/3" }}>
            {estate.address.city.name + (estate.address.district ? `, ${estate.address.district}` : "")}
          </Typography>
          <Typography
            paragraph
            variant={small ? "h6" : "h5"}
            color="text.secondary"
            sx={{ fontSize: 16, gridRow: small ? "3" : "3/4" }}
          >
            {estate.area} m<sup>2</sup>
          </Typography>
          <Typography
            paragraph
            variant={small ? "h6" : "h3"}
            color="text.primary"
            sx={{
              gridRow: small ? "4" : "3/4",
              pr: 2,
            }}
          >
            {estate.price.toLocaleString()} zł
          </Typography>
          {!small && (
            <CardActions
              sx={{
                gridRow: "4/5",
                gridColumn: "1/3",
                justifySelf: "end",
                alignSelf: "end",
              }}
            >
              <NextLink href={`/${estate.slug}`} passHref>
                <Button size="large" color="secondary">
                  Więcej
                </Button>
              </NextLink>
              <Button size="large" onClick={handleOpenCloseModal}>
                Kontakt
              </Button>
            </CardActions>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardEstate;
