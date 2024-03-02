import React from "react";
import { serviceList } from "../helpers/ServicesList"; 
import ServicesItem from "../components/ServicesItem";
import "../styles/Services.css";

function Services() {
  return (
    <div className="services">
      <h1 className="serviceTitle">Our Services</h1>
      <div className="serviceList">{serviceList.map((servicesItem, key) => {
      return <ServicesItem key={key} image={servicesItem.image} name={servicesItem.name} des={servicesItem.des} />
      })}</div>
    </div>
  );
}

export default Services;
