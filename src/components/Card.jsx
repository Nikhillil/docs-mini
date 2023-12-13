import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className=" relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden">
      <IoDocumentTextSharp />
      <p className=" text-sm font-semibold mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className=" flex items-center justify-between mb-5 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className=" w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <MdOutlineFileDownload size="0.8em" color="#ffff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"}  flex justify-center items-center`}>
            <h3 className=" text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
