import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 w-full flex flex-grow items-center justify-between bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="px-4 py-4 shadow-2 md:px-6 2xl:px-11 w-full">

        <div className="flex items-center gap-3 2xsm:gap-7">
          <Navbar />
          <ul className="flex items-center justify-end gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          {/* <DropdownUser /> */}
          {/* <!-- User Area --> */}
          <div className="display flex w-50 justify-between">
            <Link href="/auth/signin"><h6 className="text-gray-600">Sign in</h6></Link>
            <Link href="/auth/signup"><h6 className="text-gray-600">Sign Up</h6></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
