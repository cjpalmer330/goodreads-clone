

export default function PageNav(){
  return (
    <div className="mb-32 grid text-center grid-cols-4 gap-8 w-screen p-4 text-white">
        <a
          href=".."
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-500 border-slate-600 hover:bg-slate-700 bg-slate-800 justify-center"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Home
          </h2>
          <p className='text-sm opacity-50'>
            Return to the Book Scribe homepage
          </p>
        </a>

        <a
          href="../BookSearch"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-500 border-slate-600 hover:bg-slate-700 bg-slate-800 justify-center"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Book Search
          </h2>
          <p className='text-sm opacity-50'>
            Find a book, author, or series!
          </p>
        </a>

        <a
          href="../BookLog"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-500 border-slate-600 hover:bg-slate-700 bg-slate-800 justify-center"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Book Log
          </h2>
          <p className='text-sm opacity-50'>
            Track what books you have read! 
          </p>
        </a>

        <a
          href="../ReadingProgress"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-500 border-slate-600 hover:bg-slate-700 bg-slate-800 justify-center"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Reading Progress
          </h2>
          <p className='text-sm opacity-50'>
            See your favorite genres, total page count, reading speed and more!
          </p>
        </a>
      </div>
  );
}