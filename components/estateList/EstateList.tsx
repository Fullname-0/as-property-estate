import { FC } from "react";
import { useContext } from "react";
import { Grid, Box } from "@mui/material";
import CardEstate from "./CardEstate";
import EstateContext from "../../store/estate-context";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const EstateList: FC = () => {
  const { displayedEstates, page, setPage, totalPages } = useContext(EstateContext);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box component="section" sx={{ my: "5%", mx: "10%" }}>
      <Grid container justifyContent="center">
        {displayedEstates.map((estate, i) => (
          <CardEstate estate={estate} key={i} />
        ))}
        <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Stack>
      </Grid>
    </Box>
  );
};

export default EstateList;
