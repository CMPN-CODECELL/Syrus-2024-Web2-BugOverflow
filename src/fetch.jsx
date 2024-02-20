// const placebytext = {
//   method: "GET",
//   url: "https://trueway-places.p.rapidapi.com/FindPlaceByText",
//   params: { text: val, language: "en" },
//   headers: {
//     "X-RapidAPI-Key": "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
//     "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
//   },
// };

// axios
//   .request(placebytext)
//   .then(function (response) {
//     console.log(response.data);

//     const latitude = response.data.results[0].location.lat;

//     const longitude = response.data.results[0].location.lng;

//     console.log(latitude, longitude);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export const searchbyLatLong = {
//   method: "GET",
//   url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
//   params: {
//     location: `${latitude},${longitude}`,

//     type: valtwo,
//     radius: radius,
//     language: "en",
//   },
//   headers: {
//     "X-RapidAPI-Key": "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
//     "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
//   },
// };
// axios
//   .request(searchbyLatLong)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
