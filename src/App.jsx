import HeroSection from "./components/home/playVideo";
import Main from "./components/home/MostVisited";
import Navbar from "./components/home/Navbar";
import { Routes, Route } from "react-router-dom";
import YouPlan from "./components/planning/YouPlan";
import WePlan from "./components/planning/WePlan";
import SubscribeUs from "./components/home/SubscribeUs";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import Footer from "./components/home/Footer";
import News from "./components/home/News";
import About from "./components/home/About";
import Goa from "./components/travelInfo/fetchPlaceMain/Goa";
import Kerala from "./components/travelInfo/fetchPlaceMain/Kerala";
import NewYork from "./components/travelInfo/fetchPlaceMain/NewYork";
import Panchgani from "./components/travelInfo/fetchPlaceMain/Panchgani";
import Uttarakhand from "./components/travelInfo/fetchPlaceMain/Uttarakhand";
import Maldives from "./components/travelInfo/fetchPlaceMain/Maldives";
import RanthamboreNationalPark from "./components/travelInfo/fetchPlaceMain/RanthamboreNationalPark";
import Kalpa from "./components/travelInfo/fetchPlaceMain/Kalpa";
import Kanyakumari from "./components/travelInfo/fetchPlaceMain/Kanyakumari";
import Login from "./pages/login";
import Signup from "./pages/signup";
import HolyPlace from "./components/home/HolyPlace";
import CustomPlace from "./components/travelInfo/fetchPlaceMain/customPlace";
import GoaInfo from "./components/travelInfo/hotels/goa";
import MaldivesInfo from "./components/travelInfo/hotels/maldives";
import KeralaInfo from "./components/travelInfo/hotels/kerala";
import KalpaInfo from "./components/travelInfo/hotels/kalpa";
import UttarakhandInfo from "./components/travelInfo/hotels/uttarakhand";
import NewYorkInfo from "./components/travelInfo/hotels/newYork";
import PanchganiInfo from "./components/travelInfo/hotels/panchgani";
import RanthamboreInfo from "./components/travelInfo/hotels/ranthambore";
import KanyakumariInfo from "./components/travelInfo/hotels/kanyakumari";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#b09cf4",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto", //default
      "Helvetica Neue",
      "cursive",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Poppins",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Main />
              <HolyPlace />
              <SubscribeUs />
            </div>
          }
        ></Route>
        <>
          <Route path="/youplan" element={<YouPlan />}></Route>
          <Route path="/weplan" element={<WePlan />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/customplace" element={<CustomPlace />}></Route>
        </>

        <>
          <Route path="/tips/goa" element={<Goa />}></Route>
          <Route
            path="/tips/ranthambore"
            element={<RanthamboreNationalPark />}
          ></Route>
          <Route path="/tips/kalpa" element={<Kalpa />}></Route>
          <Route path="/tips/panchgani" element={<Panchgani />}></Route>
          <Route path="/tips/maldives" element={<Maldives />}></Route>
          <Route path="/tips/newyork" element={<NewYork />}></Route>
          <Route path="/tips/kanyakumari" element={<Kanyakumari />}></Route>
          <Route path="/tips/kerala" element={<Kerala />}></Route>
          <Route path="/tips/uttarakhand" element={<Uttarakhand />}></Route>
        </>
        <>
          <Route path="/tips/goa/hotels" element={<GoaInfo />}></Route>
          <Route
            path="/tips/maldives/hotels"
            element={<MaldivesInfo />}
          ></Route>
          <Route path="/tips/kerala/hotels" element={<KeralaInfo />}></Route>
          <Route
            path="/tips/panchgani/hotels"
            element={<PanchganiInfo />}
          ></Route>
          <Route
            path="/tips/uttarakhand/hotels"
            element={<UttarakhandInfo />}
          ></Route>
          <Route path="/tips/kalpa/hotels" element={<KalpaInfo />}></Route>
          <Route
            path="/tips/kanyakumari/hotels"
            element={<KanyakumariInfo />}
          ></Route>
          <Route path="/tips/newyork/hotels" element={<NewYorkInfo />}></Route>
          <Route
            path="/tips/ranthambore/hotels"
            element={<RanthamboreInfo />}
          ></Route>
        </>
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
