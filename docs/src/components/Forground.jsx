import React, { useRef } from "react";
import Card from "./Card";


function Forground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "hey wassup! ",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Downlaod Now",
        tagColor: "blue",
      },
    },

    {
      desc: "hey wassup! ",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },

    {
      desc: "hey wassup! ",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Downlaod Now",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div ref={ref}className="top-0 left-0 fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
