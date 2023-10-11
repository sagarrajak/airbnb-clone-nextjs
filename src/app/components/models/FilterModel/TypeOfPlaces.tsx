import FilterItemContainer from "./FilterItemContainer";

const TypeOfPlaces = () => {
    return (
      <FilterItemContainer
        header={"Type of place"}
        shouldApplyPaddingLeftRight
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

export default TypeOfPlaces;