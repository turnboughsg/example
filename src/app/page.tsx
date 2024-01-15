import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-center pt-48 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>
        Welcome to my blog
      </h1>
      <p className='max-w-[750px] mx-auto leading-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, voluptatum, quas, quod, voluptates dolorum quibusdam
        voluptate eum voluptatibus consequatur laboriosam. Quo, quos. Quibusdam
        voluptatibus consequatur laboriosam. Quo, quos.
      </p>
    </main>
  )
}
