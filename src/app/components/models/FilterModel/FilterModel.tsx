"use client";

import useFilterModel from "@/app/hooks/useFilterModel";
import React from "react";
import BaseModel from "../BaseModel";
import FilterItemContainer from "./FilterItemContainer";

function FilterModel() {
  const filterModel = useFilterModel();

  const renderTypeOfPlaces = () => {
    return (
      <FilterItemContainer
        header={"Type of place"}
        subheader={
          "Search rooms, entire homes and more. Total prices shown for 5 nights, not including taxes."
        }
      >
        <div
          className="
            flex
            flex-row
            w-full
            rounded-lg
            overflow-hidden
        "
        >
          <button
            className="
            flex-1
            disabled:opacity-70
            disabled:cursor-not-allowed
            hover:cursor-pointer
            font-semibold
            p-6
            text-center
            active:bg-black
            active:text-white
            rounded-l-lg
            border
            hover:border
            hover:border-black
            "
          >
            Any type
          </button>
          <button
            className="
            flex-1
           disabled:opacity-70
           disabled:cursor-not-allowed
           hover:cursor-pointer
           font-semibold
           p-6
           text-center
           active:bg-black
           active:text-white
           border-t
           border-b
           hover:border
           hover:border-black
           "
          >
            Room
          </button>
          <button
            className="
            flex-1
            disabled:opacity-70
            disabled:cursor-not-allowed
            hover:cursor-pointer
            font-semibold
            p-6
            text-center
            active:bg-black
            active:text-white
            rounded-r-lg
            border
            hover:border
            hover:border-black
            "
          >
            Entire home
          </button>
        </div>
      </FilterItemContainer>
    );
  };

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
      {renderTypeOfPlaces()}
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
