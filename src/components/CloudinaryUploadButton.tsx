"use client"

// Import stuff from react
import { useState } from 'react';

// Import shadcn components
import { Button } from '@/components/ui/button';

// Import Icons
import { Download, Upload } from "lucide-react"

// Import stuff from next-cloudinary
import { CldUploadButton, CldImage, type CldUploadWidgetResults } from 'next-cloudinary';

// Import custom types 
import { CldUploadWidgetResultsInfo } from '@/types';

// Import stuff from next
import { useRouter } from 'next/navigation';



export default function CloudinaryUploadButton() {

  const router = useRouter();

  // Initialized state 
  const [imagePublicId, setImagePublicId] = useState('');

  const handleImageUploadResponse = (res: CldUploadWidgetResults) => {

    // Refresh this when some thing uploads
    router.refresh();

    // // Get info from response
    // const info = res.info as CldUploadWidgetResultsInfo;

    // // Set image id in state
    // setImagePublicId(info.public_id);

  }


  return (

    <>
      <Button
        asChild
      >

        <CldUploadButton
          onUpload={handleImageUploadResponse}
          uploadPreset="isf_upload_preset"
          children={
            <div className='flex gap-2 items-center'>
              <Upload />
              Upload
            </div>
          }
        />

      </Button>

    </>
  )
}
