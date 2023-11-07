import { Box, Grid, Typography } from "@mui/material";
import { EPacks } from "../../../components/EPacks";
import "./EpackBox.scss";
const Item = ({ data, index }) => (
  <Grid
    item
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
    xl={4}
    lg={4}
    md={4}
    sm={6}
    xs={12}
    mb={3}
  >
    <EPacks data={data} index={index} />
  </Grid>
);

export const EpackBox = ({ dataList }) => {
  return (
    <Grid spacing={3} container className="container-epack-grid">
      {dataList?.map((data, index) => (
        <Item key={index} data={data} index={index + 1} />
      ))}
    </Grid>
  );
};
