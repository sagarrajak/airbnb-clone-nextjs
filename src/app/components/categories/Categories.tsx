"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { CiSliderHorizontal } from "react-icons/ci";

import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiDesert,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";

import Image from "next/image";
import CategoriesBox from "./CategoriesBox";
import { useSearchParams } from "next/navigation";
import ScrollButton from "./ScrollButtonRight";
import ScrollButtonLeft from "./SrollButtonLeft";
import ScrollButtonRight from "./ScrollButtonRight";
import styles from "./Categories.module.css";
import useCurrentWindowWidth from "@/app/hooks/useCurrentWindowWidth";
import Button from "../Button";
import FilterButton from "./FilterButton";
import DisplayTotalBeforetaxes from "./DisplayTotalBeforetaxes";

export interface CategoriesProps {}

export const categories = [
  {
    label: "beach",
    icon: TbBeach,
    description: "Bla bla",
  },
  {
    label: "windmils",
    icon: GiWindmill,
    description: "this is shit",
  },
  {
    label: "modern",
    icon: MdOutlineVilla,
    description: "This is shit",
  },
  {
    label: "countryside",
    icon: TbMountain,
    description: "This is shit",
  },
  {
    label: "pools",
    icon: TbPool,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "lake",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    icon: FaSkiing,
  },
  {
    label: "Castles",
    icon: GiCastle,
  },
  {
    label: "Camping",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    icon: BsSnow,
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
  },
  {
    label: "Desert",
    icon: GiCactus,
  },
  {
    label: "Barn",
    icon: GiBarn,
  },
];

export const Categories = ({}: CategoriesProps) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const categoriesContainer = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(
    !categoriesContainer.current ? 0 : categoriesContainer.current.offsetWidth
  );
  const [itemsBoxWidth, setCategoryBoxWidth] = useState(
    !categoriesContainer.current ? 0 : categoriesContainer.current.offsetWidth
  );
  const currentIndex = useRef(0);
  const leftMenuButton = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const categoryRefArray = Array.from({ length: categories.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    const element = categoriesContainer.current;
    const categoryBox = categoryRefArray[0].current;
    if (!element || !categoryBox) return;
    setWindowWidth(element.clientWidth);
    setCategoryBoxWidth(categoryBox.clientWidth);

    const handleResizeWindowCategoryContainer = () => {
      setCategoryBoxWidth(element.clientWidth);
    };
    const handleResizeWindowCategoryItem = () => {
      setCategoryBoxWidth(categoryBox.clientWidth);
    };
    element.addEventListener("resize", handleResizeWindowCategoryContainer);
    categoryBox.addEventListener("resize", handleResizeWindowCategoryItem);
    return () => {
      element.removeEventListener(
        "resize",
        handleResizeWindowCategoryContainer
      );
      categoryBox.removeEventListener("resize", handleResizeWindowCategoryItem);
    };
  });

  const scrollElementToPosition = React.useCallback(
    (currentIndex: number) => {
      if (currentIndex >= 0 && currentIndex < categoryRefArray.length)
        categoryRefArray[currentIndex].current?.scrollIntoView({
          behavior: "smooth",
        });
    },
    [categoryRefArray]
  );

  // use intersection obeserver to monitor
  useEffect(() => {
    const overserverArray = Array.from(
      { length: categories.length },
      (_, idx) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) {
              console.log(`not intersecting ${idx}`);
              currentIndex.current = idx;
            }
          },
          { root: null, threshold: 0.1 }
        );
        const element = categoryRefArray[idx].current;
        if (categoryRefArray[idx] && element) {
          observer.observe(element);
        }
        return observer;
      }
    );

    return () => overserverArray.forEach((observer) => observer.disconnect());
  }, [categoryRefArray]);

  const onClickLeftButton = () => {
    const totalElementsInView = +windowWidth / +itemsBoxWidth;
    if (isNaN(totalElementsInView)) return;
    const indexToMoveFocus =
      currentIndex.current - 1 * +parseInt(totalElementsInView + "");
    if (indexToMoveFocus <= 0) {
      currentIndex.current = 0;
    } else {
      currentIndex.current = indexToMoveFocus;
    }
    scrollElementToPosition(currentIndex.current);
  };

  const onClickRightButton = () => {
    const totalElementsInView = +windowWidth / +itemsBoxWidth;
    if (isNaN(totalElementsInView)) return;
    const indexToMoveFocus =
      currentIndex.current + 1 * +parseInt(totalElementsInView + "");
    if (indexToMoveFocus >= categories.length) {
      currentIndex.current = categories.length - 1;
    } else {
      currentIndex.current = indexToMoveFocus;
    }
    scrollElementToPosition(currentIndex.current);
  };

  return (
    <Container>
      <div
        className={`
          flex
          flex-row
          justify-between
          items-center
      `}
      >
        <div
          ref={categoriesContainer}
          className={`
              flex
              flex-row
              md:w-[70%]
              sm:w-full
              items-center
              justify-between
              ${styles["scrollbar-hide"]}
          `}
        >
          <ScrollButtonLeft ref={leftMenuButton} onClick={onClickLeftButton} />
          <div
            className="
                  pt-4
                  flex
                  justify-between
                  flex-row
                  items-center
                  overflow-y-hidden
                  overflow-x-scroll
                  w-[70rem]
                  scrollbar-hide
              "
          >
            {categories.map(({ label, description, icon }, index) => (
              <CategoriesBox
                ref={categoryRefArray[index]}
                Icon={icon}
                label={label}
                selected={label === category}
                key={label}
              />
            ))}
          </div>
          <ScrollButtonRight onClick={onClickRightButton} />
        </div>
        <div
          className="
            flex
            flex-row
            ml-2
            md:visible
          "
        >
          <div className="shrink-0 mr-6">
            <FilterButton label={"Filter"} onClick={() => {}} />
          </div>
          <div className="shrink-0">
            <DisplayTotalBeforetaxes
              label={"Display total before taxes"}
              onClick={() => {}}
            />
          </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Categories;
