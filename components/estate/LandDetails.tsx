import { FC } from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { AttachMoney, ZoomOutMap, DomainOutlined } from "@material-ui/icons";
import styles from "./EstateDetails.module.css";
import Land from "../../model/web/Land";
import { TerrainOutlined } from "@mui/icons-material";

type Props = {
  land: Land;
};

const LandDetails: FC<Props> = ({ land }) => {
  return (
    <Grid container item direction="column" rowSpacing={3} sx={{ marginTop: 0 }}>
      <h4 id="estate-details-header" className={styles.h4custom}>
        Szczegóły
      </h4>

      <Grid container item direction="row" alignItems="center">
        <Grid container item xs alignItems="center">
          <ZoomOutMap color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Powierzchnia
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="p">
            {land.area.toLocaleString()} m2
          </Typography>
        </Grid>

        <Grid container item xs alignItems="center">
          <AttachMoney color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Cena za m2
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5" component="p">
            {land.pricePerMeter.toLocaleString()} zł/m2
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>

      <Grid container item direction="row" alignItems="center">
        <Grid container item xs alignItems="center">
          <TerrainOutlined color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Typ działki
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="p">
            {land.landType}
          </Typography>
        </Grid>

        <Grid container item xs alignItems="center">
          <DomainOutlined color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Przeznaczenie
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5" component="p">
            {land.purpose}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default LandDetails;
