import { executionAsyncId } from "async_hooks";
import React from "react";

type headerProps = {
  routeName: string;
};

function Header({ routeName }: headerProps) {
  return (
    <div className="flex justify-between w-11/12 items-center fixed top-3 left-1/2 -translate-x-1/2 ">
      <h1 className="text-coolGray text-2xl ">{routeName}</h1>
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
  );
}

export default Header;
