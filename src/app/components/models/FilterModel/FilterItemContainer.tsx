import React from "react";

export interface FilterItemContainerProps {
  children: React.ReactElement;
  header: string;
  subheader: string;
}

function FilterItemContainer({
  children,
  header,
  subheader,
}: FilterItemContainerProps) {
  return (
    <div
      // className="
      //       border-b-2
      //       border-b-neutral-800/70
      //     "
    >
      <div>
        <p
          className="
                  text-2xl
                  font-medium
                "
        >
          {header}
        </p>
        <p
          className="
              text-sm
              font-light
            "
        >
          {subheader}
        </p>
      </div>
      {children}
    </div>
  );
}

export default FilterItemContainer;
