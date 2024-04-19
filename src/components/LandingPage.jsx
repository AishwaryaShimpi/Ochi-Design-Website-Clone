import React from "react";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-[6.5vw] leading-[5vw] tracking-tighter font-Founders-Grotesk font-medium">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none  ">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full">Start the project</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
