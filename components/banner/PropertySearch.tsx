import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  MenuItem,
  Collapse,
  Button,
  InputAdornment,
} from "@mui/material";
import { ExpandLess, ExpandMore, Search } from "@material-ui/icons";
import { FC, useContext, useState } from "react";
import EstateContext from "../../store/estate-context";

const PropertySearch: FC = () => {
  const ctx = useContext(EstateContext);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [areaExpanded, setAreaExpanded] = useState(false);

  const handlePriceExpandClick = () => {
    setPriceExpanded(!priceExpanded);
  };
  const handleAreaExpandClick = () => {
    setAreaExpanded(!areaExpanded);
  };

  return (
    <Card>
      <CardHeader
        title="Szukaj nieruchomości"
        titleTypographyProps={{ variant: "h5" }}
        avatar={<Search fontSize="large" />}
      />
      <CardContent>
        <Grid container columnSpacing={3} rowSpacing={1} sx={{ maxWidth: "200%" }}>
          <Grid item xs={6}>
            <TextField
              id="property-type"
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              select
              fullWidth
              value={ctx.estateType}
              onChange={ctx.setEstateType}
            >
              {ctx.searchTypesOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField id="city" inputProps={{ MenuProps: { disableScrollLock: true } }} fullWidth select value={ctx.city} onChange={ctx.setCity}>
              {ctx.citiesOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="small"
              color="secondary"
              endIcon={priceExpanded ? <ExpandLess /> : <ExpandMore />}
              onClick={handlePriceExpandClick}
            >
              Cena
            </Button>
            <Collapse in={priceExpanded} timeout="auto" unmountOnExit>
              <Grid container columnSpacing={3}>
                <Grid item xs>
                  <TextField
                    id="prince-from"
                    helperText="Cena od"
                    value={ctx.priceFrom}
                    onChange={ctx.setPriceFrom}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="prince-to"
                    helperText="Cena do"
                    value={ctx.priceTo}
                    onChange={ctx.setPriceTo}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="small"
              color="secondary"
              endIcon={areaExpanded ? <ExpandLess /> : <ExpandMore />}
              onClick={handleAreaExpandClick}
            >
              Powierzchnia
            </Button>
            <Collapse in={areaExpanded} timeout="auto" unmountOnExit>
              <Grid container columnSpacing={3}>
                <Grid item xs>
                  <TextField
                    id="area-from"
                    helperText="Powierzchnia od"
                    value={ctx.areaFrom}
                    onChange={ctx.setAreaFrom}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">m2</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="area-to"
                    helperText="Powierzchnia do"
                    value={ctx.areaTo}
                    onChange={ctx.setAreaTo}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">m2</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="primary" onClick={ctx.search}>
              Szukaj
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertySearch;
