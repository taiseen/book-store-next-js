import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/store"
        className="flex h-20 items-end justify-center md:justify-start rounded-md p-4 mb-4 bg-purple-700"
      >
        <div className="w-48 md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        <form>
          <button className="flex grow items-center justify-center gap-2 rounded-md bg-red-200 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3 w-full">
            <ArrowLeftOnRectangleIcon className="w-6" />

            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
