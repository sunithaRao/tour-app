import TOUR_DATA from "./tourInfo.json";

const useTourInfo = (tourId) => {
  let tour_total_data = TOUR_DATA;
  const place_data = tour_total_data.filter(
    (place) => place.id === Number(tourId)
  );
  console.log("place_data::end::", place_data);
  return place_data;
};

export default useTourInfo;
