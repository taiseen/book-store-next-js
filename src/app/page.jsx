import { SparklesIcon } from '@heroicons/react/24/solid'
import HomeBgImg from '@/components/HomeBgImg'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen relative">
      <HomeBgImg />


      <div className='z-10 flex flex-col items-center justify-center bg-purple-100 rounded-sm py-2 px-4 lg:w-2/5 h-1/4'>
        <div className='flex pb-5 mb-5 text-5xl text-purple-700'>
          <SparklesIcon className='w-12 h-12' />
          <p>Book Store</p>
        </div>

        <div>
          <Link className='p-2 rounded-sm text-white bg-purple-700' href='/store'>Take me to the store</Link>
        </div>
      </div>



    </main>
  )
}
