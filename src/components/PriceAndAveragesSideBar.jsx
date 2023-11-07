import { Divider, Grid, Stack } from "@mui/material";
import { PricesAndAverages } from "../pages/actualStatus/actualStatusEpack/components/PricesAndAverages";

const PricesAndAveragesData = [
  {
    topHeading: "Capacity Atm",
    mainHeading: "300kWh",
  },
  {
    topHeading: "Purchase Price",
    mainHeading: "0,12e/kWh",
  },
  {
    topHeading: "Selling Price",
    mainHeading: "0,50e/kWh",
  },
  {
    topHeading: "Average Recharging Time",
    mainHeading: "120min.",
  },
  {
    topHeading: "Average Discharging Time",
    mainHeading: "360min.",
  },
  {
    topHeading: "Average Discharged Per Day",
    mainHeading: "600kWh",
  },
];

export const PriceAndAveragesSideBar = () => {
  return (
    <Grid
      item
      md={4}
      width={"100%"}
      sx={{
        padding: "1rem",
        backgroundColor: "#e6e6e6",
      }}
    >
      <Stack direction="column" alignItems="center" mb={1}>
        {PricesAndAveragesData.map((item, index) => (
          <>
            <PricesAndAverages
              key={index}
              topHeading={item.topHeading}
              mainHeading={item.mainHeading}
            />
            {index === 0 && (
              <Divider
                sx={{ width: "80%", border: "4px solid green", mb: 3 }}
              ></Divider>
            )}
          </>
        ))}
      </Stack>
    </Grid>
  );
};
