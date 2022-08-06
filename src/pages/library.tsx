import  { ReactElement } from "react";
import Layout from "../components/layout";


function Library() {
  return (
    <div className="w-full relative flex justify-center items-center flex-col  font-sans ">
      
        <h1 className="text-cool-gray text-xl">Nothing to see here</h1>

    </div>
  );
}


Library.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Library">
      {page}
    </Layout>
  )
}

export default Library;
