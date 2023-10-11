import React from "react";

export interface FilterItemContainerProps {
  children: React.ReactElement;
  header: string;
  subheader: string;
  shouldApplyPaddingLeftRight?: boolean
}

function FilterItemContainer({
  children,
  header,
  subheader,
  shouldApplyPaddingLeftRight
}: FilterItemContainerProps) {
  return (
    <div
      className="
           border-b-[1px]
          "
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
              text-base
              font-light
              mt-2
            "
        >
          {subheader}
        </p>
      </div>
      <div className={`
          ${shouldApplyPaddingLeftRight ? 'p-6' :'pt-6 pb-6'}
      `}>
      {children}
      </div>
    </div>
  );
}

export default FilterItemContainer;
