import React from 'react'

export default function Comment() {
  return (
    <>
    <div className="Container flex  gap-[10px] my-[30px] mx-0 ">
    <img src="../../public/images/Avatar.png" alt="" className="Avatar h-[40px] w-[40px] rounded-[50%]" />
    <div className="Details flex flex-col gap-10 ">
        <span className="Name text-[13px] font-medium ">Owl City
        <span className="Date text-[12px] ml-[5px] font-normal  text-[#545454] dark:text-[#9e9e9e] ">1 day ago</span>
        </span>
        <span className="Texttext-[14px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam quam voluptatibus necessitatibus? Exercitationem, aspernatur.
        </span>
    </div>
    </div>
    </>
  )
}
