import { Typography, Grid } from "@mui/material";
import { FC } from "react";
import Address from '../../model/web/Address';

type Props = {
  title: string;
  address: Address;
  price: number;
};

const EstateTitle: FC<Props> = ({ title, address, price }) => {
  return (
    <Grid container item alignItems="center">
      <Grid container item direction="column" xs>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h5" component="h2" color="secondary">
          {address.city.name + (address.district ? `, ${address.district}` : "")}
        </Typography>
      </Grid>
      <Typography variant="h3">{price.toLocaleString()} zł</Typography>
    </Grid>
  );
};

export default EstateTitle;
