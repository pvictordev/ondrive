import CarsCard from "../components/CarsCard";
import CarsList from "../Data/CarsList";
import { Grid, Box } from "@chakra-ui/react";
// import { useMediaQuery} from '@chakra-ui/react'
import HomeRoute from "../components/HomeRoute";
import Banner from "../components/Banner";
import RentSteps from "../components/RentSteps";

const Cars = () => {
  const cars = CarsList.map((car) => {
    return <CarsCard key={car.id} {...car} />;
  });
  // const [isLargerThanMobile] = useMediaQuery('(min-width: 890px)')
  return (
    <Box className="Cars" pt={24}>
      <HomeRoute className="Cars__title" title={"Cars"} />

      <Grid
        className="Cars__grid"
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        templateRows={{
          base: "repeat(6, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        rowGap={10}
        columnGap={0}
      >
        {cars}
      </Grid>

      <Banner
        className="Cars_banner"
        title="Wide range of Vehicles !"
        textColor="Wider"
        description="than competitors, we have cars that they do not"
      />
      <RentSteps className="Cars__steps" />
    </Box>
  );
};

export default Cars;
