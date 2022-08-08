import { FC } from "react";
import { Typography, Grid, Divider } from "@mui/material";
import {
  AccountBalance,
  AttachMoney,
  ZoomOutMap,
  CalendarTodayOutlined,
  ViewQuiltOutlined,
  DomainOutlined,
} from "@material-ui/icons";
import styles from "./EstateDetails.module.css";
import Local from "../../model/web/Local";

type Props = {
    local: Local;
}

const LocalDetails: FC<Props> = ({ local }) => {
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
            {local.area.toLocaleString()} m2
          </Typography>
        </Grid>

        <Grid container item xs alignItems="center">
          <AccountBalance color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Rynek
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5" component="p">
            {local.market}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>

      <Grid container item direction="row" alignItems="center">
        <Grid container item xs alignItems="center">
          <ViewQuiltOutlined color="secondary" />
          <Typography variant="h5" component="p" color="secondary" pl={3}>
            Liczba pokoi
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="p">
            {local.roomsNumber}
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
            {local.pricePerMeter.toLocaleString()} zł/m2
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
            {local.buildYear}
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
            {local.buildingType}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default LocalDetails;
