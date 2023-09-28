"use client"

// Import stuff from react
import { useState } from 'react';

// Import shadcn components
import { Button } from '@/components/ui/button';

// Import Icons
import { Download } from "lucide-react"

// Import stuff from next-cloudinary
import { CldUploadButton, CldImage, type CldUploadWidgetResults } from 'next-cloudinary';

// Import custom types 
import { CldUploadWidgetResultsInfo } from '@/types';



export default function UploadButton() {

  // Initialized state 
  const [imagePublicId, setImagePublicId] = useState('');

  const handleImageUploadResponse = (res: CldUploadWidgetResults) => {

    // Get info from response
    const info = res.info as CldUploadWidgetResultsInfo;

    // Set image id in state
    setImagePublicId(info.public_id);

  }


  return (
    
    <>
      <Button
        asChild
      >
        <div className='flex gap-2'>
          <Download />
          <CldUploadButton
            onUpload={handleImageUploadResponse}
            uploadPreset="isf_upload_preset"
          />
        </div>
      </Button>


      {imagePublicId &&

        <CldImage
          width="400"
          height="400"
          src={imagePublicId}
          sizes="100vw"
          alt="Description of my image"
        />

      }

    </>

  )
}
