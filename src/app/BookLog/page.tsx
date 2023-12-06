import PageNav from "../PageNav"
export default function BookLog() {
  return (
    <div className="grid-flow-row  bg-slate-900 text-white">
      <PageNav />
      <main className="flex min-h-screen flex-col justify-between p-16 font-mono font-bold">

        <div aria-hidden="true" className="inset-x-[calc(50vw-400px)] inset-y-96 absolute w-[800px] h-[800px] rounded-full bg-gradient-to-b from-pink-600 to-purple-600 z-0 blur-2xl"></div>
        <div aria-hidden="true" className="absolute bg-slate-900 w-[450px] h-[450px] rounded-full inset-x-[calc(50vw-225px)] inset-y-[calc(400px+155px)] z-10 rotate-90 blur-2xl"></div>

        <div className="z-40 items-left">
          <div className="text-left text-9xl">
            <h1>
              Book Log
            </h1>
          </div>
        </div>
      </main>
      
    </div>
  );
}