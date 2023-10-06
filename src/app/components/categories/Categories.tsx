"use client"

import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiDesert, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import { FaSkiing } from 'react-icons/fa'

import Image from 'next/image'
import CategoriesBox from './CategoriesBox'
import { useSearchParams } from 'next/navigation'
import ScrollButton from './ScrollButtonRight'
import ScrollButtonLeft from './SrollButtonLeft'
import ScrollButtonRight from './ScrollButtonRight'
import styles from './Categories.module.css';
import useCurrentWindowWidth from '@/app/hooks/useCurrentWindowWidth'

export interface CategoriesProps {

}

export const categories = [
    {
        label: 'beach',
        icon: TbBeach,
        description: "Bla bla"
    },
    {
        label: 'windmils',
        icon: GiWindmill,
        description: "this is shit"
    },
    {
        label: 'modern',
        icon: MdOutlineVilla,
        description: "This is shit"
    },
    {
        label: 'countryside',
        icon: TbMountain,
        description: "This is shit"
    },
    {
        label: 'pools',
        icon: TbPool
    },
    {
        label: 'Islands',
        icon: GiIsland
    },
    {
        label: 'Islands',
        icon: GiIsland
    },
    {
        label: 'lake',
        icon: GiBoatFishing
    },
    {
        label: 'Skiing',
        icon: FaSkiing
    },
    {
        label: 'Castles',
        icon: GiCastle
    },
    {
        label: 'Camping',
        icon: GiForestCamp
    },
    {
        label: 'Arctic',
        icon: BsSnow
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance
    },
    {
        label: 'Desert',
        icon: GiCactus
    },
    {
        label: 'Barn',
        icon: GiBarn
    },
]

export const Categories = ({}: CategoriesProps) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const categoriesContainer = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(!categoriesContainer.current ? 0 : categoriesContainer.current.offsetWidth);
  const [itemsBoxWidth, setCategoryBoxWidth] = useState(!categoriesContainer.current ? 0 : categoriesContainer.current.offsetWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const categoryRefArray = Array.from({length: categories.length}, () => useRef<HTMLDivElement>(null));

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


  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < categoryRefArray.length)
      categoryRefArray[currentIndex].current?.scrollIntoView({
        behavior: "smooth",
      });
  }, [categoryRefArray, currentIndex]);

  return (
    <Container>
      <div
        ref={categoriesContainer}
        className={`
                flex
                flex-row
                w-fit
                items-center
                justify-between
                ${styles["scrollbar-hide"]}
            `}
      >
        <ScrollButtonLeft onClick={() => {
             const totalElementsInView = (+windowWidth)/(+itemsBoxWidth);
             if (isNaN(totalElementsInView)) return;
             const indexToMoveFocus = currentIndex-2*(+parseInt(totalElementsInView+''));
             if (indexToMoveFocus <= 0) {
                 setCurrentIndex(0);
             } else {
                 setCurrentIndex(indexToMoveFocus);
             }
        }} />
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
        <ScrollButtonRight onClick={() => {
            const totalElementsInView = (+windowWidth)/(+itemsBoxWidth);
            if (isNaN(totalElementsInView)) return;
            const indexToMoveFocus = currentIndex+2*(+parseInt(totalElementsInView+''));
            if (indexToMoveFocus >= categories.length) {
                setCurrentIndex(categories.length - 1);
            } else {
                setCurrentIndex(indexToMoveFocus);
            }
        
        }}  />
      </div>
    </Container>
  );
};

export default Categories
