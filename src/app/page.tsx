"use client"

// Import stuff from react
import { useState } from 'react';

// Import stuff from next-cloudinary
import { CldUploadButton, CldImage, type CldUploadWidgetResults } from 'next-cloudinary';

// Import custom types 
import { CldUploadWidgetResultsInfo } from '@/types';



export default function Home() {

  // Initialized state 
  const [imagePublicId, setImagePublicId] = useState('');

  const handleImageUploadResponse = (res: CldUploadWidgetResults) => {

    // Get info from response
    console.log(res);

    const info = res.info as CldUploadWidgetResultsInfo;

    // Set image id in state
    setImagePublicId(info.public_id);

  }


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <CldUploadButton
        onUpload={handleImageUploadResponse}
        uploadPreset="isf_upload_preset"
      />


      {imagePublicId &&

        <CldImage
          width="400"
          height="400"
          src={imagePublicId}
          sizes="100vw"
          alt="Description of my image"
        />

      }


    </main>
  )
}
