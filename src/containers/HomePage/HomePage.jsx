import React from "react";
import Banner from "./Section/Banner";
import BrandCharacteristics from "./Section/BrandCharacteristics";
import Products from "./Section/Products";
import Certs from "./Section/Certs";
import ContactUs from "./Section/ContactUs";
import Blogs from "./Section/Blogs";
import "./HomePage.scss";
import TrackingOrder from "./Section/TrackingOrder";
import Delivery from "./Section/Delivery";

function HomePage() {
  return (
    <div className="width-limit">
      <Banner />
      <TrackingOrder />
      {/* <BrandCharacteristics /> */}
      <Products />
      <Delivery />
      <Certs />
      <ContactUs />
      <Blogs />
    </div>
  );
}

export default HomePage;
