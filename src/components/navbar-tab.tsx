import React from "react";

type tabProps = {
    selected: boolean,
    routeName: string,
    path: JSX.Element
}

function Tab({selected,routeName,path}:tabProps) {
  return   <div className="flex justify-center items-center flex-col h-full relative drop-shadow-md">
  <svg className={selected ? "fill-coolGray" : "fill-trueGray"} xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    {path}
  </svg>
  <p className={selected ? "text-sm font-bold text-coolGray" : "text-sm font-bold text-trueGray"}>{routeName}</p>
  <div className={selected ? "bg-coolGray w-9 h-0.5 rounded-md absolute bottom-0" : "hidden"}></div>
</div>
}

export default Tab
