import { FC } from "react";
import { Grid, Typography, Box } from "@mui/material";
import EstateTitle from "./EstateTitle";
import EstateDetails from "./EstateDetails";
import EstateDescription from "./EstateDescription";
import Property from "../../model/web/Property";

type Props = {
  property: Property;
};

const Estate: FC<Props> = ({ property }) => {
  return (
    <Box component="main" sx={{ mx: "10%", mb: "10%" }}>
      <Grid container direction="column" spacing={10}>
        <EstateTitle title={property.title} address={property.address} price={property.price} />
        <EstateDetails property={property} />
        <EstateDescription description={property.description}/>
      </Grid>
    </Box>
  );
};

export default Estate;
