// Import custom components
import CloudinaryUploadButton from '@/components/CloudinaryUploadButton';
import CloudinaryImage from '@/components/CloudinaryImage';

// Import stuff from cloudinary
import { v2 as cloudinary } from 'cloudinary'

// Import custom types 
import { CloudinarySearchApiResponse } from '@/types';



export default async function Gallery() {

  const result: CloudinarySearchApiResponse = await cloudinary.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  return (

    <main className='w-4/5 min-h-screen px-5 py-10'>

      <section className='flex w-full gap-5 justify-between'>

        <h1 className='text-4xl font-bold'>Gallery</h1>

        <CloudinaryUploadButton />

      </section>

      <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8'>
        {
          result.resources.map((imgObject) => (

            <CloudinaryImage
              className='grid-cols-2 md:grid-cols-3'
              key={imgObject.asset_id}
              src={imgObject.public_id}
              width="400"
              height="300"
              alt={imgObject.filename}
            />

          ))
        }

      </section>

    </main>
  )
}
