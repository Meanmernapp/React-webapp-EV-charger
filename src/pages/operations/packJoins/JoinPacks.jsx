import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import dobuleArrow from "../../../assets/Icons/doubleArrow.svg";
import emptyBattery from "../../../assets/Icons/emptyBattery.svg";
import fillBattery from "../../../assets/Icons/fillBattery.svg";
import "./JoinPacks.scss";

export const EpackList = ({ data }) => {
  if (!data) {
    return null;
  }
  let keys = Object?.keys(data);
  return (
    <>
      {keys?.map((key) => (
        <Box
          key={key}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            textAlign: "left",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            width={"50%"}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <Typography variant="body1" color="#aaa" textAlign="left">
              {key}
            </Typography>
          </Box>
          <Box
            width={"50%"}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <Typography variant="body1" color="#000" textAlign="left">
              {data[key]}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
const PackTopHeader = ({ title, img }) => {
  return (
    <Box
      height={"50px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#e7e7e7",
        borderRadius: "20px",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      }}
      width={"100%"}
    >
      <Box sx={{ width: "30%", position: "relative", paddingLeft: "5px" }}>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#fff",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              top: "25%",
              left: "25%",
            }}
          >
            <img src={img} alt="emptyBattery" />
          </Box>
        </Box>
      </Box>

      <Typography variant="h3" width={"70%"} textAlign={"left"}>
        {title}
      </Typography>
    </Box>
  );
};
export const JoinPacks = ({ data }) => {
  const isSmallerScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Stack direction={"column"} width={"100%"}>
      <Grid
        container
        sx={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          border: "1px solid #ddd",
          borderTopLeftRadius: isSmallerScreen ? "20px" : "0",
        }}
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{}}>
          {isSmallerScreen && (
            <PackTopHeader title={"E-Pack Edison"} img={emptyBattery} />
          )}
          <Stack
            width={"100%"}
            flexDirection={"row"}
            height={"220px"}
            className="svg-box-stack"
          >
            {!isSmallerScreen && (
              <Box width={"10%"} className="svg-box">
                <img src={emptyBattery} alt="emptyBattery" />
              </Box>
            )}
            <Stack
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              width={!isSmallerScreen ? "95%" : "100%"}
              padding={"1rem"}
            >
              {!isSmallerScreen && (
                <Typography variant="h3" mb={2}>
                  E-Pack Edison
                </Typography>
              )}

              <EpackList data={data[0]} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {isSmallerScreen && (
            <PackTopHeader title={"E-Pack Albert"} img={fillBattery} />
          )}
          <Stack
            width={"100%"}
            flexDirection={"row"}
            height={"220px"}
            className="svg-box-stack"
          >
            {!isSmallerScreen && (
              <Box width={"10%"} className="svg-box">
                <img src={fillBattery} alt="emptyBattery" />
              </Box>
            )}
            <Stack
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              width={"95%"}
              padding={"1rem"}
            >
              {!isSmallerScreen && (
                <Typography variant="h3" mb={2}>
                  E-Pack Albert
                </Typography>
              )}
              <EpackList data={data[1]} />
            </Stack>
          </Stack>
        </Grid>
        <Box className="arrow-box-outer ">
          <Box className="arrow-box">
            <img src={dobuleArrow} alt="arrow" />
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
};
