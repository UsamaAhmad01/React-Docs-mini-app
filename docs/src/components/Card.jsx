import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.2}}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness:100, bounceDamping:10}} 
      className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-4">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close? <IoCloseSharp /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm">{data.tag.tagTitle}</h3>
            </div>
          )
        }
      </div>
    </motion.div>
  );
}

export default Card;
