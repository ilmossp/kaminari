import { executionAsyncId } from "async_hooks";
import React from "react";

type headerProps = {
  routeName: string;
};

function Header({ routeName }: headerProps) {
  return (
    <div className="flex justify-between w-11/12 items-center mb-5 fixed top-8 left-1/2 -translate-x-1/2">
      <h1 className="text-coolGray text-2xl ">{routeName}</h1>
      <div className="flex items-center gap-2">
        <svg
          className="fill-coolGray"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="m18.9 20.3-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m18.9 20.3-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
          />
        </svg>
        <svg
          className="fill-coolGray"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
