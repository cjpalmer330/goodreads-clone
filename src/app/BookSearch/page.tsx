import PageNav from "../PageNav"
export default function BookSearch() {
  return (
    <div className="grid-flow-row bg-slate-900 text-white">
      <PageNav />
      <main className="flex min-h-screen flex-col justify-between p-16 font-mono font-bold">
        <div className="z-40 items-left">
          <div className="text-left text-9xl">
            <h1>
              Book Search
            </h1>
          </div>
        </div>
      </main>
      
    </div>
  );
}