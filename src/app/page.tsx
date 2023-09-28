// Import custom components
import UploadButton from '@/components/UploadButton';



export default function Gallery() {

  return (

    <main className='flex w-4/5 min-h-screen px-5 py-10'>

      <section className='flex w-full gap-5 justify-between'>

        <h1 className='text-4xl font-bold'>Gallery</h1>

        <UploadButton />

      </section>

    </main>
  )
}
