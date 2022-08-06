import React from "react";
import Layout from "../components/layout";



const content=(
    <h1 className="text-coolGray text-xl">
        Nothing to see here
    </h1>
)



function Library() {
  return (
    <div className="w-full h-screen bg-blueGray relative flex items-center flex-col font-sans">
      <Layout routeName="Library" child={content}/>
    </div>
  );
}

export default Library;
