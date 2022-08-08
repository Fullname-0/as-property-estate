import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./EstateDetails.module.css";

type Props = {
  description: string;
}
const EstateDescription: FC<Props> = ({ description }) => {
  
  return (
    <Grid
      container
      item
      direction="column"
      rowSpacing={3}
      sx={{ marginTop: 0 }}
    >
      <h4 className={styles.h4custom}>Opis</h4>
      <Grid item>
        <Typography
          variant="h5"
          component="p"
          textAlign="justify"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></Typography>
      </Grid>
    </Grid>
  );
};

export default EstateDescription;
