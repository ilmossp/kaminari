import React from "react";
import Header from "./header";
import BottomNavbar from "../components/bottom-navbar";


type LayoutProps={child:JSX.Element,routeName:string}

function Layout({child,routeName}:LayoutProps) {
  return (
    <div className="w-full relative">
      <Header routeName={routeName} />
      <main>{child}</main>
      <BottomNavbar />
    </div>
  );
}

export default Layout;
