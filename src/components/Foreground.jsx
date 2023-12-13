import React, { useRef } from "react";

import Card from "./Card";

const Foreground = () => {

    const ref = useRef(null);
    console.log(ref);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis dignissimos cumque!",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis dignissimos cumque!",
      fileSize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis dignissimos cumque!",
      fileSize: ".13mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className=" fixed w-full h-full z-[3] top-0 left-0 p-5 flex gap-10 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
