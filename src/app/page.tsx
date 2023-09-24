import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-9 lg:dark:bg-zinc-800/30">
          A personalized reading log. Tracking what Goodreads won't
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://https://github.com/cjpalmer330"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/github-mark.svg"
              alt="GitHub Logo"
              className="dark:invert"
              width={45}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center absolute h-[300px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial
       from-white to-transparent blur-2xl content-[''] absolute -z-20 h-[180px] w-[240px]
       translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-['']
       dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 lg:h-[360px] z-[-1]"
      ></div>
      <div className="relative flex place-items-center">
        <h1 className="mb-3 text-6xl font-semibold">
          Book Scribe
        </h1>
      </div>
      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/BookLog"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book Log
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Track what books you have read! 
          </p>
        </a>

        <Link
          href="/BookSearch"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book Search
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find a book, author, or series!
          </p>
        </Link>

        <a
          href="/ReadingProgress"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Reading Progress
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See your favorite genres, total page count, reading speed and more!
          </p>
        </a>
      </div>
    </main>
  )
}
