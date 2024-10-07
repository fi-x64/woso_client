import React from "react";
import Banner from "./Section/Banner";
import BrandCharacteristics from "./Section/BrandCharacteristics";
import Services from "./Section/Services";
import Certs from "./Section/Certs";
import ContactUs from "./Section/ContactUs";
import Blogs from "./Section/Blogs";
import "./HomePage.scss";
import TrackingOrder from "./Section/TrackingOrder";
import Delivery from "./Section/Delivery";
import AboutUs from "./Section/AboutUs";

function HomePage() {
  return (
    <div>
      <Banner />
      <TrackingOrder />
      {/* <BrandCharacteristics /> */}
      <Services />
      <Delivery />
      <AboutUs />
      {/* <Certs /> */}
      {/* <ContactUs /> */}
      {/* <Blogs /> */}
    </div>
  );
}

export default HomePage;
