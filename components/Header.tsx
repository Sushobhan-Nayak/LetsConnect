import { Heart, Search, SwitchCamera } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="fixed md:hidden bg-white top-0 flex items-center justify-between space-x-2 dark:bg-neutral-950 w-full z-50 border-b border-zinc-300 dark:border-neutral-700 px-3 py-2 sm:-ml-6">
      <Link href={"/dashboard"}>
        <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
        <p className={`font-semibold text-xl hidden lg:block`}>
          LetsConnect
        </p>
      </Link>
      <div className="flex items-center space-x-2">
        <div className="flex items-center text-nuetral-600 dark:text-neutral-400 bg-zinc-100 dark:bg-neutral-800 gap-x-2 rounded-md px-3.5 py-1.5">
          <Search className="h-4 w-4"></Search>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent placeholder:text-neutral-600 dark:placeholder:text-neutral-400 flex-1 outline-none"
          ></input>
        </div>
      </div>
      <Button size={"icon"} variant={"ghost"}>
        <Heart />
      </Button>
    </header>
  );
}

export default Header;
