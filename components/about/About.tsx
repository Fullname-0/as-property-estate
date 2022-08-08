import React, { FC } from "react";
import { Box, Card, Grid,Divider, Typography, Paper, Link } from "@mui/material";
import Image from "next/image";

const About: FC = () => {
  return (
    <Box component="section" mx={"10%"}>
      <Divider />
        <Grid container direction="row" py={"5%"}>
          <Grid container item direction="column" sx={{ width: "60%" }}>
            <Grid item pt={5}>
              <Typography variant="h1">O nas</Typography>
              <Typography pt={3} align="justify">
                Oferujemy naszym klientom pośrednictwo w&nbsp:sprzedaży i&nbsp;przy zakupie nieruchomości, pośrednictwo
                w&nbsp;wynajmie oraz home staging. W&nbsp;ramach usługi pośrednictwa zapewniamy naszym klientom
                określenie wartości rynkowej oferowanej do sprzedaży nieruchomości wraz z dokładną analizą cen
                transakcyjnych kształtujących się&nbsp;na lokalnym rynku nieruchomości.
              </Typography>
            </Grid>
            <Grid item pt={3}>
              <Typography variant="h6">Zakres naszych usług obejmuje:</Typography>
              <ol>
                <Typography component="li">
                  Doradztwo w zakresie podniesienia atrakcyjności przedmiotu sprzedaży
                </Typography>
                <Typography component="li">Ustalenie strategii sprzedaży</Typography>
                <Typography component="li">Wsparcie w zakresie uregulowania stanu prawnego nieruchomości</Typography>
                <Typography component="li">Prowadzenie negocjacji</Typography>
                <Typography component="li">
                  Wsparcie w procesie pozyskiwania decyzji administracyjnych potrzebnych do przeprowadzenia transakcji
                </Typography>
                <Typography component="li">Koordynacja nad przeprowadzeniem transakcji sprzedaży</Typography>
              </ol>
            </Grid>
            <Grid container item pb={3}>
              <Typography pb={3} variant="h6">
                Chcesz dowiedzieć się więcej?&nbsp;
              </Typography>
              <Link
                href="https://as-property.com.pl"
                target="_blank"
                rel="noopener"
                underline="hover"
                color="primary"
                variant="h6"
              >
                Odwiedź naszą stronę.
              </Link>
            </Grid>
          </Grid>
          <Grid item container p={5} sx={{ width: "40%" }}>
            <Paper square sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src="/about.jpg" alt="About" layout="fill" objectFit="cover" />
            </Paper>
          </Grid>
        </Grid>
    </Box>
  );
};

export default About;
