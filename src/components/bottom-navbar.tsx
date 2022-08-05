import React, { FunctionComponent } from "react";
import Tab from '../components/navbar-tab'


const library = (<path xmlns="http://www.w3.org/2000/svg" d="M8 16h12V4h-2v7l-2.5-1.5L13 11V4H8v12Zm0 2q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V6h2v14h14v2Zm9-18h5ZM8 4h12Z"/>)
const explore=(<path xmlns="http://www.w3.org/2000/svg" d="m7.425 17.075 6.25-2.925q.15-.075.275-.2.125-.125.2-.275l2.925-6.25q.125-.25-.063-.437-.187-.188-.437-.063l-6.25 2.925q-.15.075-.275.2-.125.125-.2.275l-2.925 6.25q-.125.25.063.437.187.188.437.063ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>)
const history=(<path xmlns="http://www.w3.org/2000/svg" d="M12 21q-3.45 0-6.012-2.288Q3.425 16.425 3.05 13H5.1q.35 2.6 2.312 4.3Q9.375 19 12 19q2.925 0 4.962-2.038Q19 14.925 19 12t-2.038-4.963Q14.925 5 12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475Q9.95 3 12 3q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2Z"/>)

function BottomNavbar() {
  return (
    <div className="flex bg-darkBlueGray w-10/12  items-center h-16 justify-between rounded-md  px-4 fixed bottom-5 left-1/2 -translate-x-1/2">
      <Tab routeName={"library"} selected={true} path={library}/>
      <Tab routeName={"explore"} selected={false} path={explore}/>
      <Tab routeName={"history"} selected={false} path={history}/>      
    </div>
  );
}

export default BottomNavbar;
