'use client'

import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <Image 
        alt='Logo'
        className="
            hidden
            md:block
            cursor-pointer
        "
        width="100"
        height="100"
        src="/images/logo.png"
    />
  )
}

export default Logo