import Image from 'next/image'
import React from 'react'

const AppIcon = (
  { height, width } : 
  { height: number, width: number }
) => {
  return (
    <Image 
      src="icon.svg"
      alt="icon"
      height={height}
      width={width}
    />
  )
}

export default AppIcon
