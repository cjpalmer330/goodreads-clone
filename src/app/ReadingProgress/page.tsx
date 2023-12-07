import PageNav from "../PageNav"
export default function ReadingProgress() {
  return (
    <div className="relative min-h-screen justify-center bg-slate-900 items-center ">
      <div aria-hidden="true" className="transition-transform duration-1000 absolute inset-y-24 inset-x-56 w-32 rounded-full rotate-45 bg-gradient-to-b from-pink-600 to-purple-600 blur-3xl z-0"></div>
      <div aria-hidden="true" className="absolute inset-y-96 inset-x-[550px] w-32 h-[500px] rotate-45 rounded-full bg-gradient-to-b from-pink-600 to-purple-600 blur-3xl z-0"></div>
      <div className="z-40">
        
        <PageNav />


        <main className="flex flex-col items-left justify-between p-16 gap-24 text-white">
          <div>
            <h1 className="font-mono font-bold text-9xl sticky whitespace-pre-wrap">
              READING<br/>PROGRESS
            </h1>
          </div>
          <div>
            <h1>
              Your Favorite Genres:
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}