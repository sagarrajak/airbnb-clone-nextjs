"use client"

import React from 'react'
import Container from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiDesert, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import { FaSkiing } from 'react-icons/fa'

import Image from 'next/image'
import CategoriesBox from './CategoriesBox'
import { useSearchParams } from 'next/navigation'

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

export const Categories = ({ }: CategoriesProps) => {
    const searchParams = useSearchParams();
    const category = searchParams?.get('category');
    return (
        <Container>
            <div
                className="
                    pt-4
                    flex
                    justify-start
                    flex-row
                    items-center
                    overflow-y-hidden
                    overflow-x-scroll
                "
            >
                {
                    categories.map(({ label, description, icon }) => (
                        <CategoriesBox Icon={icon} label={label} selected={label === category} key={label} />
                    ))
                }
            </div>
        </Container>
    )
}

export default Categories
