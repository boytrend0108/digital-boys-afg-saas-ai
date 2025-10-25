import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <h1 className='text-4xl font-bold'>Welcome to the AFG Crawler App!</h1>
        <h2>Every journey begins with a single step.</h2>
        <p>Lets do it guys, and will see where this leads us</p>
      </main>
    </div>
  );
}
