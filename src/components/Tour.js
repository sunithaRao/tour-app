import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import ImageCollage from "./ImageCollage";
import CustomizedAccordions from "../Accordian";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import BasicModal from "../components/Modal";
import { useParams } from "react-router-dom";
import useTourInfo from "../utils/useTourInfo";

export const Tour = () => {
  const [value, setValue] = React.useState(0);
  const { tourId } = useParams();
  const tourInfo = useTourInfo(tourId);
  console.log("tourInfo", tourInfo[0].name);
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        {tourInfo[0].name} in{" "}
        {tourId.toString().startsWith("1") ? "Visakhapatnam" : "Bangalore"}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={tourInfo[0].image} height={325} alt="" />
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          {tourInfo[0].aboutDescription}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
};
