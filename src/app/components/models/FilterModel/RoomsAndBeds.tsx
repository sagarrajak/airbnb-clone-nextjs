import React from "react";
import FilterItemContainer from "./FilterItemContainer";

function RoomsAndBeds() {
  return (
    <FilterItemContainer
      header={"Price range"}
      subheader=""
    >
        <div className="
            flex
            flex-col
            w-full
            justify-start
        ">
            <p
                className="
                  text-base
                  font-light
                  pt-2
                  pb-2
                "
            >Bedrooms</p>
            <div>
                
            </div>
        </div>
    </FilterItemContainer>
  );
}

export default RoomsAndBeds;
