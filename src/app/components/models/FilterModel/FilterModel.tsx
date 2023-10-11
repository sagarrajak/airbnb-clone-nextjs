"use client";

import useFilterModel from "@/app/hooks/useFilterModel";
import React from "react";
import BaseModel from "../BaseModel";
import FilterItemContainer from "./FilterItemContainer";
import TypeOfPlaces from "./TypeOfPlaces";
import RoomsAndBeds from "./RoomsAndBeds";

function FilterModel() {
  const filterModel = useFilterModel();


  const renderPriceRange = () => {};

  const renderRoomsAndBed = () => {};

  const renderPropertType = () => {};

  const renderAmenities = () => {};

  const renderBookingOption = () => {};

  const renderAccessibilityOption = () => {};

  const topTierStay = () => {};

  const hostLanguage = () => {};

  const renderBody = (
    <div
      className="
          p-10
        "
    >
     <TypeOfPlaces />
     <RoomsAndBeds />
    </div>
  );

  const renderFooter = <h1>This is footer</h1>;

  return (
    <BaseModel
      isOpen={filterModel.isOpen}
      onClose={filterModel.onClose}
      body={renderBody}
      footer={renderFooter}
      title="Filters"
    />
  );
}

export default FilterModel;
