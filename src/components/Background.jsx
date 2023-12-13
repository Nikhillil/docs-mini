import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className=" absolute w-full flex justify-center py-10 top-[5%] font-semibold text-xl text-zinc-600">
          Documents.
        </div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold tracking-tighter leading-none text-[13vw] text-zinc-900">
          Docs.
        </div>
      </div>
    </>
  );
};

export default Background;
