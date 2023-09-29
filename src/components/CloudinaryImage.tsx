"use client"

// Import stuff from next-cloudinary
import { CldImage, type CldImageProps } from "next-cloudinary"



export default function CloudinaryImage(props: CldImageProps) {

  return (
    <CldImage{...props} />
  )
  
}