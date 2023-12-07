import PageNav from "../PageNav"
import GenrePieChart from "../GenrePieChart";
import React from 'react';
//import useEffec
import { Chart } from 'chart.js/auto';


  
export default function BookLog(){  
  return (
    <div className="grid-flow-row  bg-slate-900 text-white">
      <PageNav />
      <main className="flex min-h-screen flex-col justify-between p-16 font-mono font-bold">
        <div className = "absolute z-40 inset-x-[calc(50vw-350px)] inset-y-[460px] w-[700px] h-[700px]">
          <h1 className="text-center text-3xl p-4"> Distribution of Genres</h1>
        <GenrePieChart/>
        </div>

        <div aria-hidden="true" className="inset-x-[calc(50vw-400px)] inset-y-[450px] absolute w-[800px] h-[800px] rounded-full bg-gradient-to-b from-pink-600 to-purple-600 z-0 blur-2xl"></div>
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