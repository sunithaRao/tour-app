import React from "react";
import { Container, Grid2, Typography } from "@mui/material";

import cities from "../data.json";
import TourCard from "../components/TourCard";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="App">
        <Container sx={{ marginY: 5 }}>
          {cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>
              <Grid2 container spacing={5}>
                {city.tours.map((tour, index) => (
                  <Link key={tour.id} to={"/" + tour.id}>
                    <TourCard tour={tour} key={index} />
                  </Link>
                ))}
              </Grid2>
            </>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Home;
