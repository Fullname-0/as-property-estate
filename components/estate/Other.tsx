import { FC } from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { AttachMoney, ZoomOutMap, CalendarTodayOutlined, DomainOutlined } from "@material-ui/icons";
import styles from "./EstateDetails.module.css";
import Other from "../../model/web/Other";

type Props = {
  other: Other;
};

const OtherDetails: FC<Props> = ({ other }) => {
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
            {other.area.toLocaleString()} m2
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
            {other.pricePerMeter.toLocaleString()} zł/m2
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>

      <Grid container item direction="row" alignItems="center">
        <Grid container item xs alignItems="center">
          <CalendarTodayOutlined color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Rok budowy
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="p">
            {other.buildYear}
          </Typography>
        </Grid>

        <Grid container item xs alignItems="center">
          <DomainOutlined color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Typ budynku
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5" component="p">
            {other.searchType}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default OtherDetails;
