import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import ImageCollage from "./ImageCollage";
import CustomizedAccordions from "../Accordian";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import BasicModal from "../components/Modal";
import { useParams } from "react-router-dom";
import getTourInfo from "../utils/useTourInfo";

export const Tour = () => {
  const [value, setValue] = React.useState(0);
  const { tourId } = useParams();
  const tourInfo = getTourInfo(tourId);
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Kailasagiri in Visakhapatnam
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/40/56/f1/caption.jpg?w=300&h=300&s=1"
          height={325}
          alt=""
        />
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          One place in Visakhapatnam which is as famous as the sprawling beaches
          here is the Kailasagiri Park situated on a hilltop. Kailasagiri is one
          of the prime attractions and a popular picnic spot for all the
          tourists visiting the beautiful city of Vizag. Spread over 100 acres
          on a hilltop, Kailasagiri offers a panoramic view of the surroundings
          that every nature lover craves for. A well-maintained park,
          Kailasagiri is always bustling with people enjoying the tranquil
          atmosphere and scenic beauty around.
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
