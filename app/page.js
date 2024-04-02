import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div className='h-screen p-20 flex flex-col justify-center'>
      <h1 className='text-center font-extrabold m-3 text-3xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-2">Week-2 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-3">Week-3 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-4">Week-4 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-5">Week-5 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-6">Week-6 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-7">Week-7 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-8">Week-8 Assignment</Link>
      <Link className='m-2 hover:text-gray-400 hover:font-semibold hover:text-xl' href="/week-10">Week-10 Assignment</Link>
      </div>
    </main>
  );
}