import { PropsWithChildren } from "react";
import Header from "./header";
import BottomNavbar from "../components/bottom-navbar";


type LayoutProps={title:string}

function Layout({title,children}:PropsWithChildren<LayoutProps>) {
  return (
    <div className="w-full  bg-blue-gray h-full ">
      <Header title={title} />
      <main>{children}</main>
      <BottomNavbar />
    </div>
  );
}

export default Layout;
