import  { ReactElement } from "react";
import Layout from "../components/layout";


function Explore() {
  return (
    <div className="w-full h-screen  relative flex items-center flex-col font-sans ">
      
        <h1 className="text-cool-gray text-xl">Nothing to see here</h1>

    </div>
  );
}


Explore.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Explore">
      {page}
    </Layout>
  )
}

export default Explore;

