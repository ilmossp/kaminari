import Link from "next/link";
import { useRouter } from "next/router";


type tabProps = {
  title: string;
  route: string;
  icon: JSX.Element;
};

function Tab({ title, icon, route }: tabProps) {
  const router = useRouter();

  return (
    <Link href={route}>
      <a
        className={`flex justify-center items-center flex-col h-full relative drop-shadow-md ${
          router.asPath === route
            ? "text-sm font-bold text-cool-gray"
            : "text-sm font-bold text-true-gray"
        } `}
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          {icon}
        </svg>
        <p>{title}</p>
        {router.asPath === route && (
          <div className="bg-cool-gray w-9 h-0.5 rounded-md absolute bottom-0"></div>
        )}
      </a>
    </Link>
  );
}

export default Tab;
