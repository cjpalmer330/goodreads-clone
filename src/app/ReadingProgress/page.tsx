export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Reading Progress
        </h1>
      </div>
      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href=".."
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Return to the Book Scribe homepage
          </p>
        </a>

        <a
          href="../BookSearch"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Book Search
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find a book, author, or series!
          </p>
        </a>

        <a
          href="../BookLog"
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
      </div>
    </main>
  )
}