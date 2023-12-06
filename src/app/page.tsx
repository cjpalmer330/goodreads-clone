import Image from 'next/image'
import Link from 'next/link'
import PageNav from './PageNav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-xl lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center  p-6 backdrop-blur-2xl border-slate-600 bg-slate-800 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border ">
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
      
      <PageNav />
    </main>
  )
}
